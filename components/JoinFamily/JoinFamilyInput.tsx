"use client";

import { Box, Button, Group, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"


export default function JoinFamilyInput() {
  const form = useForm({
    initialValues: {
      familyCode: "",
    },
    validate: {
      familyCode: (value) =>
        value.length !== 6 ? "Le code doit comporter 6 caractères" : null,
    },
  });

  const handleJoinFamily = async (values: { familyCode: string }) => {
    const response = await fetch("/api/family/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: values.familyCode }),
    });
    const family = await response.json();
    // TODO: redirect to family page
    console.log(family);
  };

  return (
    <Box component="form" onSubmit={form.onSubmit(handleJoinFamily)}>
      <Group>
        <TextInput variant={"filled"}
          placeholder="Code de la famille"
          {...form.getInputProps("familyCode")}
        />
        <Button type="submit">Rejoindre</Button>
      </Group>
    </Box>
  );
}
