"use client";

import { Box, Button, Container, Group, Text, TextInput, Title } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useRouter } from "next/navigation"
import JoinFamilyInput from "../JoinFamily/JoinFamilyInput"


export function Welcome() {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      familyName: "",
    },
    validate: {
      familyName: (value) =>
        value.length < 2 ? "Le nom doit comporter au moins 2 caractères" : null,
    },
  });

  const handleCreateFamily = async (values: { familyName: string }) => {
    const response = await fetch("/api/family", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: values.familyName }),
    });
    if (response.ok) {
      router.refresh();
    }
  };

  return (
    <Container>
      <Title  ta="center" mt={100}>
        Bienvenue sur{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Coucourse !
        </Text>
      </Title>

      <Box
        component="form"
        onSubmit={form.onSubmit(handleCreateFamily)}
        mt="xl"
      >
        <Group justify="center">
          <TextInput
            variant={"filled"}
            placeholder="Nom de la famille"
            {...form.getInputProps("familyName")}
          />
          <Button type="submit" size="md">
            Créer une famille
          </Button>
        </Group>
      </Box>

      <Text ta="center" mt="xl">
        ou
      </Text>

      <Group justify="center" mt="xl">
        <JoinFamilyInput />
      </Group>
    </Container>
  );
}
