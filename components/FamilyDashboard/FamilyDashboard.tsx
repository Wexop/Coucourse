"use client";

import {
  Button,
  Card,
  Container,
  Group,
  HoverCard,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { Welcome } from "../Welcome/Welcome"; // Import the Welcome component

interface Family {
  id: number;
  name: string;
  code: string;
}

interface FamilyDashboardProps {
  families: Family[];
}

export function FamilyDashboard({ families }: FamilyDashboardProps) {
  // If the user has no families, show the Welcome component directly
  if (families.length === 0) {
    return <Welcome />;
  }

  // If the user has families, show the dashboard
  return (
    <Container>
      <Group justify="space-between" align="center" my="xl">
        <Title order={1}>Mes Familles</Title>
        {/* You might want a button to go back to the welcome page to add more families */}
        <Button component={Link} href="/" variant="outline">
          Gérer les familles
        </Button>
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        {families.map((family) => (
          <Card key={family.id} shadow="sm" p="lg" radius="md" withBorder>
            <Group justify="space-between">
              <Text fw={500}>{family.name}</Text>
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <Text size="sm" c="dimmed" style={{ cursor: "pointer" }}>
                    Code
                  </Text>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size="sm">
                    Partagez ce code pour que d'autres puissent rejoindre :{" "}
                    <Text span fw={700}>
                      {family.code}
                    </Text>
                  </Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
            <Button
              component={Link}
              href={`/app/family/${family.id}`}
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            >
              Voir les listes
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
