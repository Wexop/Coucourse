"use client";

import { Button, Card, Center, Container, Group, HoverCard, SimpleGrid, Stack, Text, Title, } from "@mantine/core"
import Link from "next/link"
import { IconPlus } from "@tabler/icons-react"
import JoinFamilyInput from "../JoinFamily/JoinFamilyInput"


interface Family {
  id: number;
  name: string;
  code: string;
}

interface FamilyDashboardProps {
  families: Family[];
}

export function FamilyDashboard({ families }: FamilyDashboardProps) {
  if (families.length === 0) {
    return (
      <Container>
        <Center style={{ height: "calc(100vh - 120px)" }}>
          <Stack align="center">
            <Title order={2}>Bienvenue sur Coucourse !</Title>
            <Text c="dimmed">
              Il semble que vous n'ayez rejoint aucune famille pour le moment.
            </Text>
            <Button
              component={Link}
              href="/"
              leftSection={<IconPlus size={14} />}
              size="md"
              mt="lg"
            >
              Créer ou rejoindre une famille
            </Button>
          </Stack>
        </Center>
      </Container>
    );
  }

  return (
    <Container>
      <Group justify="space-between" align="center" my="xl">
        <Title order={1}>Mes Familles</Title>

        <JoinFamilyInput/>
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
