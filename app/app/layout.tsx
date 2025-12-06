"use client";

import { Anchor, AppShell, Group, Title } from "@mantine/core"
import Link from "next/link"
import { vars } from "../../theme"
import RootLayout from "../layout"


export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout>

    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Anchor
            component={Link}
            href="/app"
            underline="never"
            c={vars.colors.primary}
          >
            <Title
              order={2}
              variant="gradient"
            >
              Coucourse
            </Title>
          </Anchor>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
    </RootLayout>

  );
}
