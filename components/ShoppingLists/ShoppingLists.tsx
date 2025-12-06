"use client";

import {
  ActionIcon,
  Autocomplete,
  Box,
  Button,
  Card,
  Checkbox,
  Group,
  List,
  Modal,
  rem,
  SimpleGrid,
  TextInput,
  Title,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDebouncedValue, useDisclosure } from "@mantine/hooks";
import { IconArrowsMaximize, IconPlus, IconTrash } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";
import { ShoppingList } from "../../types/shopping-list";

interface ShoppingListsProps {
  familyId: number;
  initialLists: ShoppingList[];
}

export function ShoppingLists({ familyId, initialLists }: ShoppingListsProps) {
  const [lists, setLists] = useState<ShoppingList[]>(initialLists);
  const [loading, setLoading] = useState(false);
  const [autocompleteData, setAutocompleteData] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebouncedValue(search, 300);
  const [activeList, setActiveList] = useState<ShoppingList | null>(null);
  const [listToDelete, setListToDelete] = useState<ShoppingList | null>(null);

  const [viewModalOpened, { open: openViewModal, close: closeViewModal }] =
    useDisclosure(false);
  const [
    deleteModalOpened,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false);

  const listForm = useForm({
    initialValues: { listName: "" },
    validate: {
      listName: (value) =>
        value.trim().length > 0 ? null : "Le nom est requis",
    },
  });

  const fetchAutocomplete = useCallback(async () => {
    if (debouncedSearch.trim().length > 0) {
      const response = await fetch(
        `/api/family/${familyId}/autocomplete?q=${debouncedSearch}`
      );
      const data = await response.json();
      setAutocompleteData(data);
    } else {
      setAutocompleteData([]);
    }
  }, [debouncedSearch, familyId]);

  useEffect(() => {
    fetchAutocomplete();
  }, [fetchAutocomplete]);

  const handleCreateList = async (values: { listName: string }) => {
    setLoading(true);
    const response = await fetch(`/api/family/${familyId}/shopping-lists`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: values.listName }),
    });
    if (response.ok) {
      const newList = await response.json();
      setLists((prev) => [...prev, { ...newList, shoppingListItem: [] }]);
      listForm.reset();
    }
    setLoading(false);
  };

  const handleDeleteList = async () => {
    if (!listToDelete) return;
    await fetch(`/api/shopping-list/${listToDelete.id}`, {
      method: "DELETE",
    });
    setLists((prev) => prev.filter((list) => list.id !== listToDelete.id));
    closeDeleteModal();
    setListToDelete(null);
  };

  const handleAddItem = async (listId: number, itemName: string) => {
    if (!itemName || itemName.trim().length === 0) return;
    const list = lists.find((l) => l.id === listId);
    const existingCheckedItem = list?.shoppingListItem.find(
      (item) => item.name === itemName && item.checked
    );
    if (existingCheckedItem) {
      await handleToggleItem(existingCheckedItem.id, false);
    } else {
      const response = await fetch(`/api/shopping-list/${listId}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: itemName }),
      });
      if (response.ok) {
        const newItem = await response.json();
        setLists((prev) =>
          prev.map((l) =>
            l.id === listId
              ? { ...l, shoppingListItem: [...l.shoppingListItem, newItem] }
              : l
          )
        );
      }
    }
    setSearch("");
  };

  const handleToggleItem = async (itemId: number, checked: boolean) => {
    setLists((prev) =>
      prev.map((list) => ({
        ...list,
        shoppingListItem: list.shoppingListItem.map((item) =>
          item.id === itemId ? { ...item, checked } : item
        ),
      }))
    );
    await fetch(`/api/shopping-list-item/${itemId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checked }),
    });
  };

  const handleDeleteItem = async (listId: number, itemId: number) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === listId
          ? {
              ...list,
              shoppingListItem: list.shoppingListItem.filter(
                (item) => item.id !== itemId
              ),
            }
          : list
      )
    );
    await fetch(`/api/shopping-list-item/${itemId}`, {
      method: "DELETE",
    });
  };

  const openListModal = (list: ShoppingList) => {
    setActiveList(list);
    openViewModal();
  };

  const confirmDeleteList = (list: ShoppingList) => {
    setListToDelete(list);
    openDeleteModal();
  };

  const renderListContent = (list: ShoppingList) => (
    <>
      <List spacing="xs" size="sm" mt="sm">
        {list.shoppingListItem
          .sort((a) => (a.checked ? 1 : -1))
          .map((item) => (
            <List.Item key={item.id}>
              <Group>
                <Checkbox
                  label={item.name}
                  checked={item.checked}
                  onChange={(event) =>
                    handleToggleItem(item.id, event.currentTarget.checked)
                  }
                />
                <ActionIcon
                  variant="subtle"
                  color="red"
                  onClick={() => handleDeleteItem(list.id, item.id)}
                >
                  <IconTrash style={{ width: rem(16), height: rem(16) }} />
                </ActionIcon>
              </Group>
            </List.Item>
          ))}
      </List>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddItem(list.id, search);
        }}
        mt="md"
      >
        <Group gap="xs">
          <Autocomplete
            placeholder="Décocher ou ajouter..."
            data={autocompleteData}
            value={search}
            onChange={setSearch}
            style={{ flex: 1 }}
          />
          <ActionIcon type="submit" variant="filled" color="blue">
            <IconPlus style={{ width: rem(16), height: rem(16) }} />
          </ActionIcon>
        </Group>
      </Box>
    </>
  );

  return (
    <Box>
      <Box component="form" onSubmit={listForm.onSubmit(handleCreateList)} my="xl">
        <Group>
          <TextInput
            placeholder="Nouvelle liste de courses"
            {...listForm.getInputProps("listName")}
            style={{ flex: 1 }}
          />
          <Button type="submit" loading={loading}>
            Créer la liste
          </Button>
        </Group>
      </Box>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {lists.map((list) => (
          <Card key={list.id} shadow="sm" p="lg" radius="md" withBorder>
            <Group justify="space-between">
              <Title order={3}>{list.name}</Title>
              <Group gap="xs">
                <ActionIcon
                  variant="subtle"
                  onClick={() => openListModal(list)}
                >
                  <IconArrowsMaximize />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  color="red"
                  onClick={() => confirmDeleteList(list)}
                >
                  <IconTrash />
                </ActionIcon>
              </Group>
            </Group>
            <Box mt="sm" style={{ maxHeight: 500, overflowY: "auto" }}>
              {renderListContent(list)}
            </Box>
          </Card>
        ))}
      </SimpleGrid>

      <Modal
        opened={viewModalOpened}
        onClose={closeViewModal}
        title={activeList?.name}
        size="lg"
      >
        {activeList && renderListContent(activeList)}
      </Modal>

      <Modal
        opened={deleteModalOpened}
        onClose={closeDeleteModal}
        title="Supprimer la liste"
      >
        <Text>
          Êtes-vous sûr de vouloir supprimer la liste "
          {listToDelete?.name}" ? Cette action est irréversible.
        </Text>
        <Group justify="flex-end" mt="md">
          <Button variant="default" onClick={closeDeleteModal}>
            Annuler
          </Button>
          <Button color="red" onClick={handleDeleteList}>
            Supprimer
          </Button>
        </Group>
      </Modal>
    </Box>
  );
}
