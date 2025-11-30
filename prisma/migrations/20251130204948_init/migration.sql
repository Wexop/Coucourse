-- AlterTable
ALTER TABLE "family" RENAME CONSTRAINT "user_pk" TO "family_pk";

-- CreateTable
CREATE TABLE "shoppingList" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "shoppingList_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "familyShoppingList" (
    "familyId" INTEGER NOT NULL,
    "shoppingListId" INTEGER NOT NULL,

    CONSTRAINT "familyShoppingList_pkey" PRIMARY KEY ("familyId","shoppingListId")
);

-- CreateTable
CREATE TABLE "shoppingListItem" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "checked" BOOLEAN NOT NULL DEFAULT false,
    "shoppingListId" INTEGER NOT NULL,

    CONSTRAINT "shoppingListItem_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "duration" INTEGER NOT NULL,
    "image" VARCHAR,
    "public" BOOLEAN NOT NULL DEFAULT false,
    "provider" TEXT,

    CONSTRAINT "recipe_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipeStep" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "recipeStep_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipeItem" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "quantity" VARCHAR,
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "recipeItem_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "familyRecipe" (
    "familyId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "familyRecipe_pkey" PRIMARY KEY ("familyId","recipeId")
);

-- AddForeignKey
ALTER TABLE "familyShoppingList" ADD CONSTRAINT "familyShoppingList_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "family"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "familyShoppingList" ADD CONSTRAINT "familyShoppingList_shoppingListId_fkey" FOREIGN KEY ("shoppingListId") REFERENCES "shoppingList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shoppingListItem" ADD CONSTRAINT "shoppingListItem_shoppingListId_fkey" FOREIGN KEY ("shoppingListId") REFERENCES "shoppingList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipeStep" ADD CONSTRAINT "recipeStep_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipeItem" ADD CONSTRAINT "recipeItem_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "familyRecipe" ADD CONSTRAINT "familyRecipe_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "family"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "familyRecipe" ADD CONSTRAINT "familyRecipe_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
