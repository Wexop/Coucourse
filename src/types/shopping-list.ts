import {
  shoppingList as PrismaShoppingList,
  shoppingListItem as PrismaShoppingListItem,
} from "@prisma/client";

export type ShoppingListItem = PrismaShoppingListItem;

export type ShoppingList = PrismaShoppingList & {
  shoppingListItem: ShoppingListItem[];
};
