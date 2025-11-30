import { shoppingList, shoppingListItem } from "@/generated/prisma"


export type ShoppingListItem = shoppingListItem;

export type ShoppingList = shoppingList & {
  shoppingListItem: ShoppingListItem[];
};
