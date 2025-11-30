"use client";

import { Box, Button, Container, Group, Text, TextInput, Title } from "@mantine/core"
import { useForm } from "@mantine/form"
import JoinFamilyInput from "../JoinFamily/JoinFamilyInput"
import * as classes from "./Welcome.css"
import { family } from "@/generated/prisma"


export function Welcome() {
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
    console.log(values);
    const response = await fetch("/api/family", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: values.familyName }),
    });
    const family: family = await response.json();
    // TODO: redirect to family page
    console.log(family);
  };

  return (
    <Container>
      <Title className={classes.title} ta="center" mt={100}>
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
          <TextInput variant={"filled"}
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
