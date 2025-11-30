"use client";

import { Button, Group, Modal, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";

interface FamilyHeaderProps {
  family: {
    id: number;
    name: string;
  };
}

export function FamilyHeader({ family }: FamilyHeaderProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  const handleLeaveFamily = async () => {
    await fetch(`/api/family/${family.id}/leave`, {
      method: "POST",
    });
    router.push("/app");
    router.refresh(); // Refresh to update the family list
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Quitter la famille">
        <Text>
          Êtes-vous sûr de vouloir quitter la famille "{family.name}" ?
        </Text>
        <Group justify="flex-end" mt="md">
          <Button variant="default" onClick={close}>
            Annuler
          </Button>
          <Button color="red" onClick={handleLeaveFamily}>
            Quitter
          </Button>
        </Group>
      </Modal>

      <Group justify="space-between" align="center" my="xl">
        <Title order={1}>Famille : {family.name}</Title>
        <Button variant="outline" color="red" onClick={open}>
          Quitter la famille
        </Button>
      </Group>
    </>
  );
}
