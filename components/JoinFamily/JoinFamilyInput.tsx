"use client";

import { Box, Button, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";

export default function JoinFamilyInput() {
  const router = useRouter();
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
    if (response.ok) {
      router.refresh();
    }
  };

  return (
    <Box component="form" onSubmit={form.onSubmit(handleJoinFamily)}>
      <Group>
        <TextInput
          variant={"filled"}
          placeholder="Code de la famille"
          {...form.getInputProps("familyCode")}
        />
        <Button type="submit">Rejoindre</Button>
      </Group>
    </Box>
  );
}
