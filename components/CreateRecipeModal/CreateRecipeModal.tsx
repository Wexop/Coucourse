"use client";

import {
  Modal,
  Button,
  TextInput,
  Textarea,
  Group,
  ActionIcon,
  NumberInput,
  Box,
  Title,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconTrash } from "@tabler/icons-react";

interface CreateRecipeModalProps {
  opened: boolean;
  onClose: () => void;
  familyId: number;
  onRecipeCreated: (newRecipe: any) => void;
}

export function CreateRecipeModal({
  opened,
  onClose,
  familyId,
  onRecipeCreated,
}: CreateRecipeModalProps) {
  const form = useForm({
    initialValues: {
      name: "",
      duration: 30,
      steps: [{ description: "" }],
      items: [{ name: "", quantity: "" }],
    },
    validate: {
      name: (value) => (value.trim().length > 0 ? null : "Le nom est requis"),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    const response = await fetch(`/api/family/${familyId}/recipes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      const newRecipe = await response.json();
      onRecipeCreated(newRecipe);
      form.reset();
      onClose();
    }
  };

  const stepFields = form.values.steps.map((_, index) => (
    <Group key={index} mt="xs">
      <Textarea
        placeholder={`Étape ${index + 1}`}
        {...form.getInputProps(`steps.${index}.description`)}
        style={{ flex: 1 }}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem("steps", index)}>
        <IconTrash size="1rem" />
      </ActionIcon>
    </Group>
  ));

  const itemFields = form.values.items.map((_, index) => (
    <Group key={index} mt="xs">
      <TextInput
        placeholder="Nom de l'ingrédient"
        {...form.getInputProps(`items.${index}.name`)}
        style={{ flex: 1 }}
      />
      <TextInput
        placeholder="Quantité"
        {...form.getInputProps(`items.${index}.quantity`)}
        style={{ flex: 1 }}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem("items", index)}>
        <IconTrash size="1rem" />
      </ActionIcon>
    </Group>
  ));

  return (
    <Modal opened={opened} onClose={onClose} title="Créer une nouvelle recette" size="lg">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label="Nom de la recette" required {...form.getInputProps("name")} />
        <NumberInput
          label="Durée (en minutes)"
          mt="md"
          min={1}
          {...form.getInputProps("duration")}
        />

        <Title order={4} mt="lg">Ingrédients</Title>
        {itemFields}
        <Button
          variant="subtle"
          mt="sm"
          onClick={() => form.insertListItem("items", { name: "", quantity: "" })}
        >
          + Ajouter un ingrédient
        </Button>

        <Title order={4} mt="lg">Étapes</Title>
        {stepFields}
        <Button
          variant="subtle"
          mt="sm"
          onClick={() => form.insertListItem("steps", { description: "" })}
        >
          + Ajouter une étape
        </Button>

        <Group justify="flex-end" mt="xl">
          <Button type="submit">Créer la recette</Button>
        </Group>
      </form>
    </Modal>
  );
}
