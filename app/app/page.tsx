import { cookies } from "next/headers"
import { Button, Card, Container, Group, SimpleGrid, Text, Title, } from "@mantine/core"
import Link from "next/link"
import { Welcome } from "../../components/Welcome/Welcome"


export default async function AppDashboard() {
  const familiesCookie =(await cookies()).get("families")?.value
  let families: {id: number, name: string, code: string}[] = [];
  if (familiesCookie) {
    try {
      families = JSON.parse(familiesCookie)
    } catch (e) {
      console.error("Failed to parse families cookie:", e);
    }
  }

  if (families.length === 0) {
    return <Welcome />;
  }

  return (
    <Container>
      <Title order={1} my="xl">
        Mes Familles
      </Title>
      <SimpleGrid cols={3}>
        {families.map((family) => (
          <Card key={family.id} shadow="sm" p="lg" radius="md" withBorder>
            <Text fw={500}>{family.name}</Text>
            <Text size="sm" color="dimmed">
              Code: {family.code}
            </Text>
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
      <Group justify="center" mt="xl">
        <Button component={Link} href="/">
          Rejoindre ou créer une autre famille
        </Button>
      </Group>
    </Container>
  );
}
