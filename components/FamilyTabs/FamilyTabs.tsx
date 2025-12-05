"use client";

import { Tabs } from "@mantine/core";
import { IconClipboardList, IconBook } from "@tabler/icons-react";
import { ShoppingLists } from "../ShoppingLists/ShoppingLists";
import { ShoppingList } from "../../types/shopping-list";
import { RecipesTab } from "../RecipesTab/RecipesTab";
import { recipe } from "@/generated/prisma";

interface FamilyTabsProps {
  familyId: number;
  initialShoppingLists: ShoppingList[];
  initialRecipes: recipe[];
}

export function FamilyTabs({
  familyId,
  initialShoppingLists,
  initialRecipes,
}: FamilyTabsProps) {
  return (
    <Tabs defaultValue="shopping-lists">
      <Tabs.List>
        <Tabs.Tab value="shopping-lists" leftSection={<IconClipboardList />}>
          Listes de courses
        </Tabs.Tab>
        <Tabs.Tab value="recipes" leftSection={<IconBook />}>
          Recettes
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="shopping-lists" pt="xs">
        <ShoppingLists
          familyId={familyId}
          initialLists={initialShoppingLists}
        />
      </Tabs.Panel>

      <Tabs.Panel value="recipes" pt="xs">
        <RecipesTab familyId={familyId} initialRecipes={initialRecipes} />
      </Tabs.Panel>
    </Tabs>
  );
}
