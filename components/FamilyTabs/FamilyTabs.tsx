"use client";

import { Tabs } from "@mantine/core";
import {
  IconClipboardList,
  IconBook,
  IconSparkles,
} from "@tabler/icons-react";
import { ShoppingLists } from "../ShoppingLists/ShoppingLists";
import { ShoppingList } from "../../types/shopping-list";
import { RecipesTab } from "../RecipesTab/RecipesTab";
import { recipe } from "@/generated/prisma";
import { AIAssistantTab } from "../AIAssistantTab/AIAssistantTab";
import { useState } from "react";

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
  const [recipes, setRecipes] = useState<recipe[]>(initialRecipes);

  const handleRecipeCreated = (newRecipe: recipe) => {
    setRecipes((prev) => [...prev, newRecipe]);
  };

  return (
    <Tabs defaultValue="shopping-lists">
      <Tabs.List>
        <Tabs.Tab value="shopping-lists" leftSection={<IconClipboardList />}>
          Listes de courses
        </Tabs.Tab>
        <Tabs.Tab value="recipes" leftSection={<IconBook />}>
          Recettes
        </Tabs.Tab>
        <Tabs.Tab value="ai-assistant" leftSection={<IconSparkles />}>
          Assistant IA
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="shopping-lists" pt="xs">
        <ShoppingLists
          familyId={familyId}
          initialLists={initialShoppingLists}
        />
      </Tabs.Panel>

      <Tabs.Panel value="recipes" pt="xs">
        <RecipesTab
          familyId={familyId}
          recipes={recipes}
          onRecipeCreated={handleRecipeCreated}
        />
      </Tabs.Panel>

      <Tabs.Panel value="ai-assistant" pt="xs">
        <AIAssistantTab
          familyId={familyId}
          onRecipeCreated={handleRecipeCreated}
        />
      </Tabs.Panel>
    </Tabs>
  );
}
