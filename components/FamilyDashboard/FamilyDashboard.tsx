"use client";

import { Button, Container, Group, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";

interface FamilyDashboardProps {
  family: {
    id: number;
    name: string;
    code: string;
  };
}

export function FamilyDashboard({ family }: FamilyDashboardProps) {
  const router = useRouter();

  const handleLeaveFamily = async () => {
    const response = await fetch("/api/family/leave", {
      method: "POST",
    });
    if (response.ok) {
      router.refresh();
    }
  };

  return (
    <Container>
      <Title ta="center" mt={100}>
        Bienvenue dans la famille{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          {family.name}
        </Text>
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Le code pour rejoindre est : {family.code}
      </Text>

      <Group justify="center" mt="xl">
        <Button onClick={handleLeaveFamily} color="red">
          Quitter la famille
        </Button>
      </Group>
    </Container>
  );
}
