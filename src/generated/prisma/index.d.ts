
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model family
 * 
 */
export type family = $Result.DefaultSelection<Prisma.$familyPayload>
/**
 * Model shoppingList
 * 
 */
export type shoppingList = $Result.DefaultSelection<Prisma.$shoppingListPayload>
/**
 * Model familyShoppingList
 * 
 */
export type familyShoppingList = $Result.DefaultSelection<Prisma.$familyShoppingListPayload>
/**
 * Model shoppingListItem
 * 
 */
export type shoppingListItem = $Result.DefaultSelection<Prisma.$shoppingListItemPayload>
/**
 * Model recipe
 * 
 */
export type recipe = $Result.DefaultSelection<Prisma.$recipePayload>
/**
 * Model recipeStep
 * 
 */
export type recipeStep = $Result.DefaultSelection<Prisma.$recipeStepPayload>
/**
 * Model recipeItem
 * 
 */
export type recipeItem = $Result.DefaultSelection<Prisma.$recipeItemPayload>
/**
 * Model familyRecipe
 * 
 */
export type familyRecipe = $Result.DefaultSelection<Prisma.$familyRecipePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Families
 * const families = await prisma.family.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Families
   * const families = await prisma.family.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.family`: Exposes CRUD operations for the **family** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Families
    * const families = await prisma.family.findMany()
    * ```
    */
  get family(): Prisma.familyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingList`: Exposes CRUD operations for the **shoppingList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingLists
    * const shoppingLists = await prisma.shoppingList.findMany()
    * ```
    */
  get shoppingList(): Prisma.shoppingListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.familyShoppingList`: Exposes CRUD operations for the **familyShoppingList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FamilyShoppingLists
    * const familyShoppingLists = await prisma.familyShoppingList.findMany()
    * ```
    */
  get familyShoppingList(): Prisma.familyShoppingListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingListItem`: Exposes CRUD operations for the **shoppingListItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingListItems
    * const shoppingListItems = await prisma.shoppingListItem.findMany()
    * ```
    */
  get shoppingListItem(): Prisma.shoppingListItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.recipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeStep`: Exposes CRUD operations for the **recipeStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeSteps
    * const recipeSteps = await prisma.recipeStep.findMany()
    * ```
    */
  get recipeStep(): Prisma.recipeStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeItem`: Exposes CRUD operations for the **recipeItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeItems
    * const recipeItems = await prisma.recipeItem.findMany()
    * ```
    */
  get recipeItem(): Prisma.recipeItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.familyRecipe`: Exposes CRUD operations for the **familyRecipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FamilyRecipes
    * const familyRecipes = await prisma.familyRecipe.findMany()
    * ```
    */
  get familyRecipe(): Prisma.familyRecipeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    family: 'family',
    shoppingList: 'shoppingList',
    familyShoppingList: 'familyShoppingList',
    shoppingListItem: 'shoppingListItem',
    recipe: 'recipe',
    recipeStep: 'recipeStep',
    recipeItem: 'recipeItem',
    familyRecipe: 'familyRecipe'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "family" | "shoppingList" | "familyShoppingList" | "shoppingListItem" | "recipe" | "recipeStep" | "recipeItem" | "familyRecipe"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      family: {
        payload: Prisma.$familyPayload<ExtArgs>
        fields: Prisma.familyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.familyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.familyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyPayload>
          }
          findFirst: {
            args: Prisma.familyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.familyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyPayload>
          }
          findMany: {
            args: Prisma.familyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyPayload>[]
          }
          create: {
            args: Prisma.familyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyPayload>
          }
          createMany: {
            args: Prisma.familyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.familyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyPayload>[]
          }
          delete: {
            args: Prisma.familyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyPayload>
          }
          update: {
            args: Prisma.familyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyPayload>
          }
          deleteMany: {
            args: Prisma.familyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.familyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.familyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyPayload>[]
          }
          upsert: {
            args: Prisma.familyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyPayload>
          }
          aggregate: {
            args: Prisma.FamilyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamily>
          }
          groupBy: {
            args: Prisma.familyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamilyGroupByOutputType>[]
          }
          count: {
            args: Prisma.familyCountArgs<ExtArgs>
            result: $Utils.Optional<FamilyCountAggregateOutputType> | number
          }
        }
      }
      shoppingList: {
        payload: Prisma.$shoppingListPayload<ExtArgs>
        fields: Prisma.shoppingListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shoppingListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shoppingListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>
          }
          findFirst: {
            args: Prisma.shoppingListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shoppingListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>
          }
          findMany: {
            args: Prisma.shoppingListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>[]
          }
          create: {
            args: Prisma.shoppingListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>
          }
          createMany: {
            args: Prisma.shoppingListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.shoppingListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>[]
          }
          delete: {
            args: Prisma.shoppingListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>
          }
          update: {
            args: Prisma.shoppingListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>
          }
          deleteMany: {
            args: Prisma.shoppingListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shoppingListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.shoppingListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>[]
          }
          upsert: {
            args: Prisma.shoppingListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>
          }
          aggregate: {
            args: Prisma.ShoppingListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoppingList>
          }
          groupBy: {
            args: Prisma.shoppingListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListGroupByOutputType>[]
          }
          count: {
            args: Prisma.shoppingListCountArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListCountAggregateOutputType> | number
          }
        }
      }
      familyShoppingList: {
        payload: Prisma.$familyShoppingListPayload<ExtArgs>
        fields: Prisma.familyShoppingListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.familyShoppingListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyShoppingListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.familyShoppingListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyShoppingListPayload>
          }
          findFirst: {
            args: Prisma.familyShoppingListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyShoppingListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.familyShoppingListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyShoppingListPayload>
          }
          findMany: {
            args: Prisma.familyShoppingListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyShoppingListPayload>[]
          }
          create: {
            args: Prisma.familyShoppingListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyShoppingListPayload>
          }
          createMany: {
            args: Prisma.familyShoppingListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.familyShoppingListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyShoppingListPayload>[]
          }
          delete: {
            args: Prisma.familyShoppingListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyShoppingListPayload>
          }
          update: {
            args: Prisma.familyShoppingListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyShoppingListPayload>
          }
          deleteMany: {
            args: Prisma.familyShoppingListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.familyShoppingListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.familyShoppingListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyShoppingListPayload>[]
          }
          upsert: {
            args: Prisma.familyShoppingListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyShoppingListPayload>
          }
          aggregate: {
            args: Prisma.FamilyShoppingListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamilyShoppingList>
          }
          groupBy: {
            args: Prisma.familyShoppingListGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamilyShoppingListGroupByOutputType>[]
          }
          count: {
            args: Prisma.familyShoppingListCountArgs<ExtArgs>
            result: $Utils.Optional<FamilyShoppingListCountAggregateOutputType> | number
          }
        }
      }
      shoppingListItem: {
        payload: Prisma.$shoppingListItemPayload<ExtArgs>
        fields: Prisma.shoppingListItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shoppingListItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shoppingListItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListItemPayload>
          }
          findFirst: {
            args: Prisma.shoppingListItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shoppingListItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListItemPayload>
          }
          findMany: {
            args: Prisma.shoppingListItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListItemPayload>[]
          }
          create: {
            args: Prisma.shoppingListItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListItemPayload>
          }
          createMany: {
            args: Prisma.shoppingListItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.shoppingListItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListItemPayload>[]
          }
          delete: {
            args: Prisma.shoppingListItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListItemPayload>
          }
          update: {
            args: Prisma.shoppingListItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListItemPayload>
          }
          deleteMany: {
            args: Prisma.shoppingListItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shoppingListItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.shoppingListItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListItemPayload>[]
          }
          upsert: {
            args: Prisma.shoppingListItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListItemPayload>
          }
          aggregate: {
            args: Prisma.ShoppingListItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoppingListItem>
          }
          groupBy: {
            args: Prisma.shoppingListItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.shoppingListItemCountArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListItemCountAggregateOutputType> | number
          }
        }
      }
      recipe: {
        payload: Prisma.$recipePayload<ExtArgs>
        fields: Prisma.recipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>
          }
          findFirst: {
            args: Prisma.recipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>
          }
          findMany: {
            args: Prisma.recipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>[]
          }
          create: {
            args: Prisma.recipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>
          }
          createMany: {
            args: Prisma.recipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>[]
          }
          delete: {
            args: Prisma.recipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>
          }
          update: {
            args: Prisma.recipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>
          }
          deleteMany: {
            args: Prisma.recipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>[]
          }
          upsert: {
            args: Prisma.recipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.recipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.recipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      recipeStep: {
        payload: Prisma.$recipeStepPayload<ExtArgs>
        fields: Prisma.recipeStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recipeStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recipeStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeStepPayload>
          }
          findFirst: {
            args: Prisma.recipeStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recipeStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeStepPayload>
          }
          findMany: {
            args: Prisma.recipeStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeStepPayload>[]
          }
          create: {
            args: Prisma.recipeStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeStepPayload>
          }
          createMany: {
            args: Prisma.recipeStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recipeStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeStepPayload>[]
          }
          delete: {
            args: Prisma.recipeStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeStepPayload>
          }
          update: {
            args: Prisma.recipeStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeStepPayload>
          }
          deleteMany: {
            args: Prisma.recipeStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recipeStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recipeStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeStepPayload>[]
          }
          upsert: {
            args: Prisma.recipeStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeStepPayload>
          }
          aggregate: {
            args: Prisma.RecipeStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeStep>
          }
          groupBy: {
            args: Prisma.recipeStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.recipeStepCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeStepCountAggregateOutputType> | number
          }
        }
      }
      recipeItem: {
        payload: Prisma.$recipeItemPayload<ExtArgs>
        fields: Prisma.recipeItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recipeItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recipeItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeItemPayload>
          }
          findFirst: {
            args: Prisma.recipeItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recipeItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeItemPayload>
          }
          findMany: {
            args: Prisma.recipeItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeItemPayload>[]
          }
          create: {
            args: Prisma.recipeItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeItemPayload>
          }
          createMany: {
            args: Prisma.recipeItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recipeItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeItemPayload>[]
          }
          delete: {
            args: Prisma.recipeItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeItemPayload>
          }
          update: {
            args: Prisma.recipeItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeItemPayload>
          }
          deleteMany: {
            args: Prisma.recipeItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recipeItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recipeItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeItemPayload>[]
          }
          upsert: {
            args: Prisma.recipeItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipeItemPayload>
          }
          aggregate: {
            args: Prisma.RecipeItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeItem>
          }
          groupBy: {
            args: Prisma.recipeItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.recipeItemCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeItemCountAggregateOutputType> | number
          }
        }
      }
      familyRecipe: {
        payload: Prisma.$familyRecipePayload<ExtArgs>
        fields: Prisma.familyRecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.familyRecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyRecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.familyRecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyRecipePayload>
          }
          findFirst: {
            args: Prisma.familyRecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyRecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.familyRecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyRecipePayload>
          }
          findMany: {
            args: Prisma.familyRecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyRecipePayload>[]
          }
          create: {
            args: Prisma.familyRecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyRecipePayload>
          }
          createMany: {
            args: Prisma.familyRecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.familyRecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyRecipePayload>[]
          }
          delete: {
            args: Prisma.familyRecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyRecipePayload>
          }
          update: {
            args: Prisma.familyRecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyRecipePayload>
          }
          deleteMany: {
            args: Prisma.familyRecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.familyRecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.familyRecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyRecipePayload>[]
          }
          upsert: {
            args: Prisma.familyRecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familyRecipePayload>
          }
          aggregate: {
            args: Prisma.FamilyRecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamilyRecipe>
          }
          groupBy: {
            args: Prisma.familyRecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamilyRecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.familyRecipeCountArgs<ExtArgs>
            result: $Utils.Optional<FamilyRecipeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    family?: familyOmit
    shoppingList?: shoppingListOmit
    familyShoppingList?: familyShoppingListOmit
    shoppingListItem?: shoppingListItemOmit
    recipe?: recipeOmit
    recipeStep?: recipeStepOmit
    recipeItem?: recipeItemOmit
    familyRecipe?: familyRecipeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FamilyCountOutputType
   */

  export type FamilyCountOutputType = {
    familyShoppingList: number
    familyRecipe: number
  }

  export type FamilyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyShoppingList?: boolean | FamilyCountOutputTypeCountFamilyShoppingListArgs
    familyRecipe?: boolean | FamilyCountOutputTypeCountFamilyRecipeArgs
  }

  // Custom InputTypes
  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyCountOutputType
     */
    select?: FamilyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeCountFamilyShoppingListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: familyShoppingListWhereInput
  }

  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeCountFamilyRecipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: familyRecipeWhereInput
  }


  /**
   * Count Type ShoppingListCountOutputType
   */

  export type ShoppingListCountOutputType = {
    familyShoppingList: number
    shoppingListItem: number
  }

  export type ShoppingListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyShoppingList?: boolean | ShoppingListCountOutputTypeCountFamilyShoppingListArgs
    shoppingListItem?: boolean | ShoppingListCountOutputTypeCountShoppingListItemArgs
  }

  // Custom InputTypes
  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListCountOutputType
     */
    select?: ShoppingListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeCountFamilyShoppingListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: familyShoppingListWhereInput
  }

  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeCountShoppingListItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shoppingListItemWhereInput
  }


  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    recipeStep: number
    familyRecipe: number
    recipeItem: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeStep?: boolean | RecipeCountOutputTypeCountRecipeStepArgs
    familyRecipe?: boolean | RecipeCountOutputTypeCountFamilyRecipeArgs
    recipeItem?: boolean | RecipeCountOutputTypeCountRecipeItemArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountRecipeStepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipeStepWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountFamilyRecipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: familyRecipeWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountRecipeItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipeItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model family
   */

  export type AggregateFamily = {
    _count: FamilyCountAggregateOutputType | null
    _avg: FamilyAvgAggregateOutputType | null
    _sum: FamilySumAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  export type FamilyAvgAggregateOutputType = {
    id: number | null
  }

  export type FamilySumAggregateOutputType = {
    id: number | null
  }

  export type FamilyMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
  }

  export type FamilyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
  }

  export type FamilyCountAggregateOutputType = {
    id: number
    name: number
    code: number
    _all: number
  }


  export type FamilyAvgAggregateInputType = {
    id?: true
  }

  export type FamilySumAggregateInputType = {
    id?: true
  }

  export type FamilyMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type FamilyMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type FamilyCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    _all?: true
  }

  export type FamilyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which family to aggregate.
     */
    where?: familyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of families to fetch.
     */
    orderBy?: familyOrderByWithRelationInput | familyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: familyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned families
    **/
    _count?: true | FamilyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FamilyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FamilySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyMaxAggregateInputType
  }

  export type GetFamilyAggregateType<T extends FamilyAggregateArgs> = {
        [P in keyof T & keyof AggregateFamily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamily[P]>
      : GetScalarType<T[P], AggregateFamily[P]>
  }




  export type familyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: familyWhereInput
    orderBy?: familyOrderByWithAggregationInput | familyOrderByWithAggregationInput[]
    by: FamilyScalarFieldEnum[] | FamilyScalarFieldEnum
    having?: familyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyCountAggregateInputType | true
    _avg?: FamilyAvgAggregateInputType
    _sum?: FamilySumAggregateInputType
    _min?: FamilyMinAggregateInputType
    _max?: FamilyMaxAggregateInputType
  }

  export type FamilyGroupByOutputType = {
    id: number
    name: string
    code: string
    _count: FamilyCountAggregateOutputType | null
    _avg: FamilyAvgAggregateOutputType | null
    _sum: FamilySumAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  type GetFamilyGroupByPayload<T extends familyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyGroupByOutputType[P]>
        }
      >
    >


  export type familySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    familyShoppingList?: boolean | family$familyShoppingListArgs<ExtArgs>
    familyRecipe?: boolean | family$familyRecipeArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["family"]>

  export type familySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
  }, ExtArgs["result"]["family"]>

  export type familySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
  }, ExtArgs["result"]["family"]>

  export type familySelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
  }

  export type familyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code", ExtArgs["result"]["family"]>
  export type familyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyShoppingList?: boolean | family$familyShoppingListArgs<ExtArgs>
    familyRecipe?: boolean | family$familyRecipeArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type familyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type familyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $familyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "family"
    objects: {
      familyShoppingList: Prisma.$familyShoppingListPayload<ExtArgs>[]
      familyRecipe: Prisma.$familyRecipePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
    }, ExtArgs["result"]["family"]>
    composites: {}
  }

  type familyGetPayload<S extends boolean | null | undefined | familyDefaultArgs> = $Result.GetResult<Prisma.$familyPayload, S>

  type familyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<familyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FamilyCountAggregateInputType | true
    }

  export interface familyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['family'], meta: { name: 'family' } }
    /**
     * Find zero or one Family that matches the filter.
     * @param {familyFindUniqueArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends familyFindUniqueArgs>(args: SelectSubset<T, familyFindUniqueArgs<ExtArgs>>): Prisma__familyClient<$Result.GetResult<Prisma.$familyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Family that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {familyFindUniqueOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends familyFindUniqueOrThrowArgs>(args: SelectSubset<T, familyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__familyClient<$Result.GetResult<Prisma.$familyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Family that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyFindFirstArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends familyFindFirstArgs>(args?: SelectSubset<T, familyFindFirstArgs<ExtArgs>>): Prisma__familyClient<$Result.GetResult<Prisma.$familyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Family that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyFindFirstOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends familyFindFirstOrThrowArgs>(args?: SelectSubset<T, familyFindFirstOrThrowArgs<ExtArgs>>): Prisma__familyClient<$Result.GetResult<Prisma.$familyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Families that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Families
     * const families = await prisma.family.findMany()
     * 
     * // Get first 10 Families
     * const families = await prisma.family.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familyWithIdOnly = await prisma.family.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends familyFindManyArgs>(args?: SelectSubset<T, familyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Family.
     * @param {familyCreateArgs} args - Arguments to create a Family.
     * @example
     * // Create one Family
     * const Family = await prisma.family.create({
     *   data: {
     *     // ... data to create a Family
     *   }
     * })
     * 
     */
    create<T extends familyCreateArgs>(args: SelectSubset<T, familyCreateArgs<ExtArgs>>): Prisma__familyClient<$Result.GetResult<Prisma.$familyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Families.
     * @param {familyCreateManyArgs} args - Arguments to create many Families.
     * @example
     * // Create many Families
     * const family = await prisma.family.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends familyCreateManyArgs>(args?: SelectSubset<T, familyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Families and returns the data saved in the database.
     * @param {familyCreateManyAndReturnArgs} args - Arguments to create many Families.
     * @example
     * // Create many Families
     * const family = await prisma.family.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Families and only return the `id`
     * const familyWithIdOnly = await prisma.family.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends familyCreateManyAndReturnArgs>(args?: SelectSubset<T, familyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Family.
     * @param {familyDeleteArgs} args - Arguments to delete one Family.
     * @example
     * // Delete one Family
     * const Family = await prisma.family.delete({
     *   where: {
     *     // ... filter to delete one Family
     *   }
     * })
     * 
     */
    delete<T extends familyDeleteArgs>(args: SelectSubset<T, familyDeleteArgs<ExtArgs>>): Prisma__familyClient<$Result.GetResult<Prisma.$familyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Family.
     * @param {familyUpdateArgs} args - Arguments to update one Family.
     * @example
     * // Update one Family
     * const family = await prisma.family.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends familyUpdateArgs>(args: SelectSubset<T, familyUpdateArgs<ExtArgs>>): Prisma__familyClient<$Result.GetResult<Prisma.$familyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Families.
     * @param {familyDeleteManyArgs} args - Arguments to filter Families to delete.
     * @example
     * // Delete a few Families
     * const { count } = await prisma.family.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends familyDeleteManyArgs>(args?: SelectSubset<T, familyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Families
     * const family = await prisma.family.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends familyUpdateManyArgs>(args: SelectSubset<T, familyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Families and returns the data updated in the database.
     * @param {familyUpdateManyAndReturnArgs} args - Arguments to update many Families.
     * @example
     * // Update many Families
     * const family = await prisma.family.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Families and only return the `id`
     * const familyWithIdOnly = await prisma.family.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends familyUpdateManyAndReturnArgs>(args: SelectSubset<T, familyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Family.
     * @param {familyUpsertArgs} args - Arguments to update or create a Family.
     * @example
     * // Update or create a Family
     * const family = await prisma.family.upsert({
     *   create: {
     *     // ... data to create a Family
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Family we want to update
     *   }
     * })
     */
    upsert<T extends familyUpsertArgs>(args: SelectSubset<T, familyUpsertArgs<ExtArgs>>): Prisma__familyClient<$Result.GetResult<Prisma.$familyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyCountArgs} args - Arguments to filter Families to count.
     * @example
     * // Count the number of Families
     * const count = await prisma.family.count({
     *   where: {
     *     // ... the filter for the Families we want to count
     *   }
     * })
    **/
    count<T extends familyCountArgs>(
      args?: Subset<T, familyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FamilyAggregateArgs>(args: Subset<T, FamilyAggregateArgs>): Prisma.PrismaPromise<GetFamilyAggregateType<T>>

    /**
     * Group by Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends familyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: familyGroupByArgs['orderBy'] }
        : { orderBy?: familyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, familyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the family model
   */
  readonly fields: familyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for family.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__familyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    familyShoppingList<T extends family$familyShoppingListArgs<ExtArgs> = {}>(args?: Subset<T, family$familyShoppingListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familyShoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    familyRecipe<T extends family$familyRecipeArgs<ExtArgs> = {}>(args?: Subset<T, family$familyRecipeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familyRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the family model
   */
  interface familyFieldRefs {
    readonly id: FieldRef<"family", 'Int'>
    readonly name: FieldRef<"family", 'String'>
    readonly code: FieldRef<"family", 'String'>
  }
    

  // Custom InputTypes
  /**
   * family findUnique
   */
  export type familyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family
     */
    select?: familySelect<ExtArgs> | null
    /**
     * Omit specific fields from the family
     */
    omit?: familyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyInclude<ExtArgs> | null
    /**
     * Filter, which family to fetch.
     */
    where: familyWhereUniqueInput
  }

  /**
   * family findUniqueOrThrow
   */
  export type familyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family
     */
    select?: familySelect<ExtArgs> | null
    /**
     * Omit specific fields from the family
     */
    omit?: familyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyInclude<ExtArgs> | null
    /**
     * Filter, which family to fetch.
     */
    where: familyWhereUniqueInput
  }

  /**
   * family findFirst
   */
  export type familyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family
     */
    select?: familySelect<ExtArgs> | null
    /**
     * Omit specific fields from the family
     */
    omit?: familyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyInclude<ExtArgs> | null
    /**
     * Filter, which family to fetch.
     */
    where?: familyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of families to fetch.
     */
    orderBy?: familyOrderByWithRelationInput | familyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for families.
     */
    cursor?: familyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * family findFirstOrThrow
   */
  export type familyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family
     */
    select?: familySelect<ExtArgs> | null
    /**
     * Omit specific fields from the family
     */
    omit?: familyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyInclude<ExtArgs> | null
    /**
     * Filter, which family to fetch.
     */
    where?: familyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of families to fetch.
     */
    orderBy?: familyOrderByWithRelationInput | familyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for families.
     */
    cursor?: familyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * family findMany
   */
  export type familyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family
     */
    select?: familySelect<ExtArgs> | null
    /**
     * Omit specific fields from the family
     */
    omit?: familyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyInclude<ExtArgs> | null
    /**
     * Filter, which families to fetch.
     */
    where?: familyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of families to fetch.
     */
    orderBy?: familyOrderByWithRelationInput | familyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing families.
     */
    cursor?: familyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` families.
     */
    skip?: number
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * family create
   */
  export type familyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family
     */
    select?: familySelect<ExtArgs> | null
    /**
     * Omit specific fields from the family
     */
    omit?: familyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyInclude<ExtArgs> | null
    /**
     * The data needed to create a family.
     */
    data: XOR<familyCreateInput, familyUncheckedCreateInput>
  }

  /**
   * family createMany
   */
  export type familyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many families.
     */
    data: familyCreateManyInput | familyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * family createManyAndReturn
   */
  export type familyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family
     */
    select?: familySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the family
     */
    omit?: familyOmit<ExtArgs> | null
    /**
     * The data used to create many families.
     */
    data: familyCreateManyInput | familyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * family update
   */
  export type familyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family
     */
    select?: familySelect<ExtArgs> | null
    /**
     * Omit specific fields from the family
     */
    omit?: familyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyInclude<ExtArgs> | null
    /**
     * The data needed to update a family.
     */
    data: XOR<familyUpdateInput, familyUncheckedUpdateInput>
    /**
     * Choose, which family to update.
     */
    where: familyWhereUniqueInput
  }

  /**
   * family updateMany
   */
  export type familyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update families.
     */
    data: XOR<familyUpdateManyMutationInput, familyUncheckedUpdateManyInput>
    /**
     * Filter which families to update
     */
    where?: familyWhereInput
    /**
     * Limit how many families to update.
     */
    limit?: number
  }

  /**
   * family updateManyAndReturn
   */
  export type familyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family
     */
    select?: familySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the family
     */
    omit?: familyOmit<ExtArgs> | null
    /**
     * The data used to update families.
     */
    data: XOR<familyUpdateManyMutationInput, familyUncheckedUpdateManyInput>
    /**
     * Filter which families to update
     */
    where?: familyWhereInput
    /**
     * Limit how many families to update.
     */
    limit?: number
  }

  /**
   * family upsert
   */
  export type familyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family
     */
    select?: familySelect<ExtArgs> | null
    /**
     * Omit specific fields from the family
     */
    omit?: familyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyInclude<ExtArgs> | null
    /**
     * The filter to search for the family to update in case it exists.
     */
    where: familyWhereUniqueInput
    /**
     * In case the family found by the `where` argument doesn't exist, create a new family with this data.
     */
    create: XOR<familyCreateInput, familyUncheckedCreateInput>
    /**
     * In case the family was found with the provided `where` argument, update it with this data.
     */
    update: XOR<familyUpdateInput, familyUncheckedUpdateInput>
  }

  /**
   * family delete
   */
  export type familyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family
     */
    select?: familySelect<ExtArgs> | null
    /**
     * Omit specific fields from the family
     */
    omit?: familyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyInclude<ExtArgs> | null
    /**
     * Filter which family to delete.
     */
    where: familyWhereUniqueInput
  }

  /**
   * family deleteMany
   */
  export type familyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which families to delete
     */
    where?: familyWhereInput
    /**
     * Limit how many families to delete.
     */
    limit?: number
  }

  /**
   * family.familyShoppingList
   */
  export type family$familyShoppingListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyShoppingList
     */
    select?: familyShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyShoppingList
     */
    omit?: familyShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyShoppingListInclude<ExtArgs> | null
    where?: familyShoppingListWhereInput
    orderBy?: familyShoppingListOrderByWithRelationInput | familyShoppingListOrderByWithRelationInput[]
    cursor?: familyShoppingListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FamilyShoppingListScalarFieldEnum | FamilyShoppingListScalarFieldEnum[]
  }

  /**
   * family.familyRecipe
   */
  export type family$familyRecipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyRecipe
     */
    select?: familyRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyRecipe
     */
    omit?: familyRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyRecipeInclude<ExtArgs> | null
    where?: familyRecipeWhereInput
    orderBy?: familyRecipeOrderByWithRelationInput | familyRecipeOrderByWithRelationInput[]
    cursor?: familyRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FamilyRecipeScalarFieldEnum | FamilyRecipeScalarFieldEnum[]
  }

  /**
   * family without action
   */
  export type familyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family
     */
    select?: familySelect<ExtArgs> | null
    /**
     * Omit specific fields from the family
     */
    omit?: familyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyInclude<ExtArgs> | null
  }


  /**
   * Model shoppingList
   */

  export type AggregateShoppingList = {
    _count: ShoppingListCountAggregateOutputType | null
    _avg: ShoppingListAvgAggregateOutputType | null
    _sum: ShoppingListSumAggregateOutputType | null
    _min: ShoppingListMinAggregateOutputType | null
    _max: ShoppingListMaxAggregateOutputType | null
  }

  export type ShoppingListAvgAggregateOutputType = {
    id: number | null
  }

  export type ShoppingListSumAggregateOutputType = {
    id: number | null
  }

  export type ShoppingListMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ShoppingListMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ShoppingListCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ShoppingListAvgAggregateInputType = {
    id?: true
  }

  export type ShoppingListSumAggregateInputType = {
    id?: true
  }

  export type ShoppingListMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ShoppingListMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ShoppingListCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ShoppingListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shoppingList to aggregate.
     */
    where?: shoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shoppingLists to fetch.
     */
    orderBy?: shoppingListOrderByWithRelationInput | shoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shoppingLists
    **/
    _count?: true | ShoppingListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoppingListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoppingListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingListMaxAggregateInputType
  }

  export type GetShoppingListAggregateType<T extends ShoppingListAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingList[P]>
      : GetScalarType<T[P], AggregateShoppingList[P]>
  }




  export type shoppingListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shoppingListWhereInput
    orderBy?: shoppingListOrderByWithAggregationInput | shoppingListOrderByWithAggregationInput[]
    by: ShoppingListScalarFieldEnum[] | ShoppingListScalarFieldEnum
    having?: shoppingListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingListCountAggregateInputType | true
    _avg?: ShoppingListAvgAggregateInputType
    _sum?: ShoppingListSumAggregateInputType
    _min?: ShoppingListMinAggregateInputType
    _max?: ShoppingListMaxAggregateInputType
  }

  export type ShoppingListGroupByOutputType = {
    id: number
    name: string
    _count: ShoppingListCountAggregateOutputType | null
    _avg: ShoppingListAvgAggregateOutputType | null
    _sum: ShoppingListSumAggregateOutputType | null
    _min: ShoppingListMinAggregateOutputType | null
    _max: ShoppingListMaxAggregateOutputType | null
  }

  type GetShoppingListGroupByPayload<T extends shoppingListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingListGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingListGroupByOutputType[P]>
        }
      >
    >


  export type shoppingListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    familyShoppingList?: boolean | shoppingList$familyShoppingListArgs<ExtArgs>
    shoppingListItem?: boolean | shoppingList$shoppingListItemArgs<ExtArgs>
    _count?: boolean | ShoppingListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type shoppingListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["shoppingList"]>

  export type shoppingListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["shoppingList"]>

  export type shoppingListSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type shoppingListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["shoppingList"]>
  export type shoppingListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyShoppingList?: boolean | shoppingList$familyShoppingListArgs<ExtArgs>
    shoppingListItem?: boolean | shoppingList$shoppingListItemArgs<ExtArgs>
    _count?: boolean | ShoppingListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type shoppingListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type shoppingListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $shoppingListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shoppingList"
    objects: {
      familyShoppingList: Prisma.$familyShoppingListPayload<ExtArgs>[]
      shoppingListItem: Prisma.$shoppingListItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["shoppingList"]>
    composites: {}
  }

  type shoppingListGetPayload<S extends boolean | null | undefined | shoppingListDefaultArgs> = $Result.GetResult<Prisma.$shoppingListPayload, S>

  type shoppingListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shoppingListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoppingListCountAggregateInputType | true
    }

  export interface shoppingListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shoppingList'], meta: { name: 'shoppingList' } }
    /**
     * Find zero or one ShoppingList that matches the filter.
     * @param {shoppingListFindUniqueArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shoppingListFindUniqueArgs>(args: SelectSubset<T, shoppingListFindUniqueArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShoppingList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shoppingListFindUniqueOrThrowArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shoppingListFindUniqueOrThrowArgs>(args: SelectSubset<T, shoppingListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListFindFirstArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shoppingListFindFirstArgs>(args?: SelectSubset<T, shoppingListFindFirstArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListFindFirstOrThrowArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shoppingListFindFirstOrThrowArgs>(args?: SelectSubset<T, shoppingListFindFirstOrThrowArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShoppingLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingLists
     * const shoppingLists = await prisma.shoppingList.findMany()
     * 
     * // Get first 10 ShoppingLists
     * const shoppingLists = await prisma.shoppingList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends shoppingListFindManyArgs>(args?: SelectSubset<T, shoppingListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShoppingList.
     * @param {shoppingListCreateArgs} args - Arguments to create a ShoppingList.
     * @example
     * // Create one ShoppingList
     * const ShoppingList = await prisma.shoppingList.create({
     *   data: {
     *     // ... data to create a ShoppingList
     *   }
     * })
     * 
     */
    create<T extends shoppingListCreateArgs>(args: SelectSubset<T, shoppingListCreateArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShoppingLists.
     * @param {shoppingListCreateManyArgs} args - Arguments to create many ShoppingLists.
     * @example
     * // Create many ShoppingLists
     * const shoppingList = await prisma.shoppingList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shoppingListCreateManyArgs>(args?: SelectSubset<T, shoppingListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShoppingLists and returns the data saved in the database.
     * @param {shoppingListCreateManyAndReturnArgs} args - Arguments to create many ShoppingLists.
     * @example
     * // Create many ShoppingLists
     * const shoppingList = await prisma.shoppingList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShoppingLists and only return the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends shoppingListCreateManyAndReturnArgs>(args?: SelectSubset<T, shoppingListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShoppingList.
     * @param {shoppingListDeleteArgs} args - Arguments to delete one ShoppingList.
     * @example
     * // Delete one ShoppingList
     * const ShoppingList = await prisma.shoppingList.delete({
     *   where: {
     *     // ... filter to delete one ShoppingList
     *   }
     * })
     * 
     */
    delete<T extends shoppingListDeleteArgs>(args: SelectSubset<T, shoppingListDeleteArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShoppingList.
     * @param {shoppingListUpdateArgs} args - Arguments to update one ShoppingList.
     * @example
     * // Update one ShoppingList
     * const shoppingList = await prisma.shoppingList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shoppingListUpdateArgs>(args: SelectSubset<T, shoppingListUpdateArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShoppingLists.
     * @param {shoppingListDeleteManyArgs} args - Arguments to filter ShoppingLists to delete.
     * @example
     * // Delete a few ShoppingLists
     * const { count } = await prisma.shoppingList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shoppingListDeleteManyArgs>(args?: SelectSubset<T, shoppingListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingLists
     * const shoppingList = await prisma.shoppingList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shoppingListUpdateManyArgs>(args: SelectSubset<T, shoppingListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingLists and returns the data updated in the database.
     * @param {shoppingListUpdateManyAndReturnArgs} args - Arguments to update many ShoppingLists.
     * @example
     * // Update many ShoppingLists
     * const shoppingList = await prisma.shoppingList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShoppingLists and only return the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends shoppingListUpdateManyAndReturnArgs>(args: SelectSubset<T, shoppingListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShoppingList.
     * @param {shoppingListUpsertArgs} args - Arguments to update or create a ShoppingList.
     * @example
     * // Update or create a ShoppingList
     * const shoppingList = await prisma.shoppingList.upsert({
     *   create: {
     *     // ... data to create a ShoppingList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingList we want to update
     *   }
     * })
     */
    upsert<T extends shoppingListUpsertArgs>(args: SelectSubset<T, shoppingListUpsertArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListCountArgs} args - Arguments to filter ShoppingLists to count.
     * @example
     * // Count the number of ShoppingLists
     * const count = await prisma.shoppingList.count({
     *   where: {
     *     // ... the filter for the ShoppingLists we want to count
     *   }
     * })
    **/
    count<T extends shoppingListCountArgs>(
      args?: Subset<T, shoppingListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingListAggregateArgs>(args: Subset<T, ShoppingListAggregateArgs>): Prisma.PrismaPromise<GetShoppingListAggregateType<T>>

    /**
     * Group by ShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends shoppingListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shoppingListGroupByArgs['orderBy'] }
        : { orderBy?: shoppingListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, shoppingListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shoppingList model
   */
  readonly fields: shoppingListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shoppingList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shoppingListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    familyShoppingList<T extends shoppingList$familyShoppingListArgs<ExtArgs> = {}>(args?: Subset<T, shoppingList$familyShoppingListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familyShoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shoppingListItem<T extends shoppingList$shoppingListItemArgs<ExtArgs> = {}>(args?: Subset<T, shoppingList$shoppingListItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shoppingListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the shoppingList model
   */
  interface shoppingListFieldRefs {
    readonly id: FieldRef<"shoppingList", 'Int'>
    readonly name: FieldRef<"shoppingList", 'String'>
  }
    

  // Custom InputTypes
  /**
   * shoppingList findUnique
   */
  export type shoppingListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * Filter, which shoppingList to fetch.
     */
    where: shoppingListWhereUniqueInput
  }

  /**
   * shoppingList findUniqueOrThrow
   */
  export type shoppingListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * Filter, which shoppingList to fetch.
     */
    where: shoppingListWhereUniqueInput
  }

  /**
   * shoppingList findFirst
   */
  export type shoppingListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * Filter, which shoppingList to fetch.
     */
    where?: shoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shoppingLists to fetch.
     */
    orderBy?: shoppingListOrderByWithRelationInput | shoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shoppingLists.
     */
    cursor?: shoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shoppingLists.
     */
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * shoppingList findFirstOrThrow
   */
  export type shoppingListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * Filter, which shoppingList to fetch.
     */
    where?: shoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shoppingLists to fetch.
     */
    orderBy?: shoppingListOrderByWithRelationInput | shoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shoppingLists.
     */
    cursor?: shoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shoppingLists.
     */
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * shoppingList findMany
   */
  export type shoppingListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * Filter, which shoppingLists to fetch.
     */
    where?: shoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shoppingLists to fetch.
     */
    orderBy?: shoppingListOrderByWithRelationInput | shoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shoppingLists.
     */
    cursor?: shoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shoppingLists.
     */
    skip?: number
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * shoppingList create
   */
  export type shoppingListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * The data needed to create a shoppingList.
     */
    data: XOR<shoppingListCreateInput, shoppingListUncheckedCreateInput>
  }

  /**
   * shoppingList createMany
   */
  export type shoppingListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shoppingLists.
     */
    data: shoppingListCreateManyInput | shoppingListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shoppingList createManyAndReturn
   */
  export type shoppingListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * The data used to create many shoppingLists.
     */
    data: shoppingListCreateManyInput | shoppingListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shoppingList update
   */
  export type shoppingListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * The data needed to update a shoppingList.
     */
    data: XOR<shoppingListUpdateInput, shoppingListUncheckedUpdateInput>
    /**
     * Choose, which shoppingList to update.
     */
    where: shoppingListWhereUniqueInput
  }

  /**
   * shoppingList updateMany
   */
  export type shoppingListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shoppingLists.
     */
    data: XOR<shoppingListUpdateManyMutationInput, shoppingListUncheckedUpdateManyInput>
    /**
     * Filter which shoppingLists to update
     */
    where?: shoppingListWhereInput
    /**
     * Limit how many shoppingLists to update.
     */
    limit?: number
  }

  /**
   * shoppingList updateManyAndReturn
   */
  export type shoppingListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * The data used to update shoppingLists.
     */
    data: XOR<shoppingListUpdateManyMutationInput, shoppingListUncheckedUpdateManyInput>
    /**
     * Filter which shoppingLists to update
     */
    where?: shoppingListWhereInput
    /**
     * Limit how many shoppingLists to update.
     */
    limit?: number
  }

  /**
   * shoppingList upsert
   */
  export type shoppingListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * The filter to search for the shoppingList to update in case it exists.
     */
    where: shoppingListWhereUniqueInput
    /**
     * In case the shoppingList found by the `where` argument doesn't exist, create a new shoppingList with this data.
     */
    create: XOR<shoppingListCreateInput, shoppingListUncheckedCreateInput>
    /**
     * In case the shoppingList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shoppingListUpdateInput, shoppingListUncheckedUpdateInput>
  }

  /**
   * shoppingList delete
   */
  export type shoppingListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * Filter which shoppingList to delete.
     */
    where: shoppingListWhereUniqueInput
  }

  /**
   * shoppingList deleteMany
   */
  export type shoppingListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shoppingLists to delete
     */
    where?: shoppingListWhereInput
    /**
     * Limit how many shoppingLists to delete.
     */
    limit?: number
  }

  /**
   * shoppingList.familyShoppingList
   */
  export type shoppingList$familyShoppingListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyShoppingList
     */
    select?: familyShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyShoppingList
     */
    omit?: familyShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyShoppingListInclude<ExtArgs> | null
    where?: familyShoppingListWhereInput
    orderBy?: familyShoppingListOrderByWithRelationInput | familyShoppingListOrderByWithRelationInput[]
    cursor?: familyShoppingListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FamilyShoppingListScalarFieldEnum | FamilyShoppingListScalarFieldEnum[]
  }

  /**
   * shoppingList.shoppingListItem
   */
  export type shoppingList$shoppingListItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingListItem
     */
    select?: shoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingListItem
     */
    omit?: shoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListItemInclude<ExtArgs> | null
    where?: shoppingListItemWhereInput
    orderBy?: shoppingListItemOrderByWithRelationInput | shoppingListItemOrderByWithRelationInput[]
    cursor?: shoppingListItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListItemScalarFieldEnum | ShoppingListItemScalarFieldEnum[]
  }

  /**
   * shoppingList without action
   */
  export type shoppingListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
  }


  /**
   * Model familyShoppingList
   */

  export type AggregateFamilyShoppingList = {
    _count: FamilyShoppingListCountAggregateOutputType | null
    _avg: FamilyShoppingListAvgAggregateOutputType | null
    _sum: FamilyShoppingListSumAggregateOutputType | null
    _min: FamilyShoppingListMinAggregateOutputType | null
    _max: FamilyShoppingListMaxAggregateOutputType | null
  }

  export type FamilyShoppingListAvgAggregateOutputType = {
    familyId: number | null
    shoppingListId: number | null
  }

  export type FamilyShoppingListSumAggregateOutputType = {
    familyId: number | null
    shoppingListId: number | null
  }

  export type FamilyShoppingListMinAggregateOutputType = {
    familyId: number | null
    shoppingListId: number | null
  }

  export type FamilyShoppingListMaxAggregateOutputType = {
    familyId: number | null
    shoppingListId: number | null
  }

  export type FamilyShoppingListCountAggregateOutputType = {
    familyId: number
    shoppingListId: number
    _all: number
  }


  export type FamilyShoppingListAvgAggregateInputType = {
    familyId?: true
    shoppingListId?: true
  }

  export type FamilyShoppingListSumAggregateInputType = {
    familyId?: true
    shoppingListId?: true
  }

  export type FamilyShoppingListMinAggregateInputType = {
    familyId?: true
    shoppingListId?: true
  }

  export type FamilyShoppingListMaxAggregateInputType = {
    familyId?: true
    shoppingListId?: true
  }

  export type FamilyShoppingListCountAggregateInputType = {
    familyId?: true
    shoppingListId?: true
    _all?: true
  }

  export type FamilyShoppingListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which familyShoppingList to aggregate.
     */
    where?: familyShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familyShoppingLists to fetch.
     */
    orderBy?: familyShoppingListOrderByWithRelationInput | familyShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: familyShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familyShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familyShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned familyShoppingLists
    **/
    _count?: true | FamilyShoppingListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FamilyShoppingListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FamilyShoppingListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyShoppingListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyShoppingListMaxAggregateInputType
  }

  export type GetFamilyShoppingListAggregateType<T extends FamilyShoppingListAggregateArgs> = {
        [P in keyof T & keyof AggregateFamilyShoppingList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamilyShoppingList[P]>
      : GetScalarType<T[P], AggregateFamilyShoppingList[P]>
  }




  export type familyShoppingListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: familyShoppingListWhereInput
    orderBy?: familyShoppingListOrderByWithAggregationInput | familyShoppingListOrderByWithAggregationInput[]
    by: FamilyShoppingListScalarFieldEnum[] | FamilyShoppingListScalarFieldEnum
    having?: familyShoppingListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyShoppingListCountAggregateInputType | true
    _avg?: FamilyShoppingListAvgAggregateInputType
    _sum?: FamilyShoppingListSumAggregateInputType
    _min?: FamilyShoppingListMinAggregateInputType
    _max?: FamilyShoppingListMaxAggregateInputType
  }

  export type FamilyShoppingListGroupByOutputType = {
    familyId: number
    shoppingListId: number
    _count: FamilyShoppingListCountAggregateOutputType | null
    _avg: FamilyShoppingListAvgAggregateOutputType | null
    _sum: FamilyShoppingListSumAggregateOutputType | null
    _min: FamilyShoppingListMinAggregateOutputType | null
    _max: FamilyShoppingListMaxAggregateOutputType | null
  }

  type GetFamilyShoppingListGroupByPayload<T extends familyShoppingListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyShoppingListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyShoppingListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyShoppingListGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyShoppingListGroupByOutputType[P]>
        }
      >
    >


  export type familyShoppingListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    familyId?: boolean
    shoppingListId?: boolean
    family?: boolean | familyDefaultArgs<ExtArgs>
    shoppingList?: boolean | shoppingListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familyShoppingList"]>

  export type familyShoppingListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    familyId?: boolean
    shoppingListId?: boolean
    family?: boolean | familyDefaultArgs<ExtArgs>
    shoppingList?: boolean | shoppingListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familyShoppingList"]>

  export type familyShoppingListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    familyId?: boolean
    shoppingListId?: boolean
    family?: boolean | familyDefaultArgs<ExtArgs>
    shoppingList?: boolean | shoppingListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familyShoppingList"]>

  export type familyShoppingListSelectScalar = {
    familyId?: boolean
    shoppingListId?: boolean
  }

  export type familyShoppingListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"familyId" | "shoppingListId", ExtArgs["result"]["familyShoppingList"]>
  export type familyShoppingListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | familyDefaultArgs<ExtArgs>
    shoppingList?: boolean | shoppingListDefaultArgs<ExtArgs>
  }
  export type familyShoppingListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | familyDefaultArgs<ExtArgs>
    shoppingList?: boolean | shoppingListDefaultArgs<ExtArgs>
  }
  export type familyShoppingListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | familyDefaultArgs<ExtArgs>
    shoppingList?: boolean | shoppingListDefaultArgs<ExtArgs>
  }

  export type $familyShoppingListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "familyShoppingList"
    objects: {
      family: Prisma.$familyPayload<ExtArgs>
      shoppingList: Prisma.$shoppingListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      familyId: number
      shoppingListId: number
    }, ExtArgs["result"]["familyShoppingList"]>
    composites: {}
  }

  type familyShoppingListGetPayload<S extends boolean | null | undefined | familyShoppingListDefaultArgs> = $Result.GetResult<Prisma.$familyShoppingListPayload, S>

  type familyShoppingListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<familyShoppingListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FamilyShoppingListCountAggregateInputType | true
    }

  export interface familyShoppingListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['familyShoppingList'], meta: { name: 'familyShoppingList' } }
    /**
     * Find zero or one FamilyShoppingList that matches the filter.
     * @param {familyShoppingListFindUniqueArgs} args - Arguments to find a FamilyShoppingList
     * @example
     * // Get one FamilyShoppingList
     * const familyShoppingList = await prisma.familyShoppingList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends familyShoppingListFindUniqueArgs>(args: SelectSubset<T, familyShoppingListFindUniqueArgs<ExtArgs>>): Prisma__familyShoppingListClient<$Result.GetResult<Prisma.$familyShoppingListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FamilyShoppingList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {familyShoppingListFindUniqueOrThrowArgs} args - Arguments to find a FamilyShoppingList
     * @example
     * // Get one FamilyShoppingList
     * const familyShoppingList = await prisma.familyShoppingList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends familyShoppingListFindUniqueOrThrowArgs>(args: SelectSubset<T, familyShoppingListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__familyShoppingListClient<$Result.GetResult<Prisma.$familyShoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FamilyShoppingList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyShoppingListFindFirstArgs} args - Arguments to find a FamilyShoppingList
     * @example
     * // Get one FamilyShoppingList
     * const familyShoppingList = await prisma.familyShoppingList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends familyShoppingListFindFirstArgs>(args?: SelectSubset<T, familyShoppingListFindFirstArgs<ExtArgs>>): Prisma__familyShoppingListClient<$Result.GetResult<Prisma.$familyShoppingListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FamilyShoppingList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyShoppingListFindFirstOrThrowArgs} args - Arguments to find a FamilyShoppingList
     * @example
     * // Get one FamilyShoppingList
     * const familyShoppingList = await prisma.familyShoppingList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends familyShoppingListFindFirstOrThrowArgs>(args?: SelectSubset<T, familyShoppingListFindFirstOrThrowArgs<ExtArgs>>): Prisma__familyShoppingListClient<$Result.GetResult<Prisma.$familyShoppingListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FamilyShoppingLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyShoppingListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FamilyShoppingLists
     * const familyShoppingLists = await prisma.familyShoppingList.findMany()
     * 
     * // Get first 10 FamilyShoppingLists
     * const familyShoppingLists = await prisma.familyShoppingList.findMany({ take: 10 })
     * 
     * // Only select the `familyId`
     * const familyShoppingListWithFamilyIdOnly = await prisma.familyShoppingList.findMany({ select: { familyId: true } })
     * 
     */
    findMany<T extends familyShoppingListFindManyArgs>(args?: SelectSubset<T, familyShoppingListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familyShoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FamilyShoppingList.
     * @param {familyShoppingListCreateArgs} args - Arguments to create a FamilyShoppingList.
     * @example
     * // Create one FamilyShoppingList
     * const FamilyShoppingList = await prisma.familyShoppingList.create({
     *   data: {
     *     // ... data to create a FamilyShoppingList
     *   }
     * })
     * 
     */
    create<T extends familyShoppingListCreateArgs>(args: SelectSubset<T, familyShoppingListCreateArgs<ExtArgs>>): Prisma__familyShoppingListClient<$Result.GetResult<Prisma.$familyShoppingListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FamilyShoppingLists.
     * @param {familyShoppingListCreateManyArgs} args - Arguments to create many FamilyShoppingLists.
     * @example
     * // Create many FamilyShoppingLists
     * const familyShoppingList = await prisma.familyShoppingList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends familyShoppingListCreateManyArgs>(args?: SelectSubset<T, familyShoppingListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FamilyShoppingLists and returns the data saved in the database.
     * @param {familyShoppingListCreateManyAndReturnArgs} args - Arguments to create many FamilyShoppingLists.
     * @example
     * // Create many FamilyShoppingLists
     * const familyShoppingList = await prisma.familyShoppingList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FamilyShoppingLists and only return the `familyId`
     * const familyShoppingListWithFamilyIdOnly = await prisma.familyShoppingList.createManyAndReturn({
     *   select: { familyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends familyShoppingListCreateManyAndReturnArgs>(args?: SelectSubset<T, familyShoppingListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familyShoppingListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FamilyShoppingList.
     * @param {familyShoppingListDeleteArgs} args - Arguments to delete one FamilyShoppingList.
     * @example
     * // Delete one FamilyShoppingList
     * const FamilyShoppingList = await prisma.familyShoppingList.delete({
     *   where: {
     *     // ... filter to delete one FamilyShoppingList
     *   }
     * })
     * 
     */
    delete<T extends familyShoppingListDeleteArgs>(args: SelectSubset<T, familyShoppingListDeleteArgs<ExtArgs>>): Prisma__familyShoppingListClient<$Result.GetResult<Prisma.$familyShoppingListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FamilyShoppingList.
     * @param {familyShoppingListUpdateArgs} args - Arguments to update one FamilyShoppingList.
     * @example
     * // Update one FamilyShoppingList
     * const familyShoppingList = await prisma.familyShoppingList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends familyShoppingListUpdateArgs>(args: SelectSubset<T, familyShoppingListUpdateArgs<ExtArgs>>): Prisma__familyShoppingListClient<$Result.GetResult<Prisma.$familyShoppingListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FamilyShoppingLists.
     * @param {familyShoppingListDeleteManyArgs} args - Arguments to filter FamilyShoppingLists to delete.
     * @example
     * // Delete a few FamilyShoppingLists
     * const { count } = await prisma.familyShoppingList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends familyShoppingListDeleteManyArgs>(args?: SelectSubset<T, familyShoppingListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FamilyShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyShoppingListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FamilyShoppingLists
     * const familyShoppingList = await prisma.familyShoppingList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends familyShoppingListUpdateManyArgs>(args: SelectSubset<T, familyShoppingListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FamilyShoppingLists and returns the data updated in the database.
     * @param {familyShoppingListUpdateManyAndReturnArgs} args - Arguments to update many FamilyShoppingLists.
     * @example
     * // Update many FamilyShoppingLists
     * const familyShoppingList = await prisma.familyShoppingList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FamilyShoppingLists and only return the `familyId`
     * const familyShoppingListWithFamilyIdOnly = await prisma.familyShoppingList.updateManyAndReturn({
     *   select: { familyId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends familyShoppingListUpdateManyAndReturnArgs>(args: SelectSubset<T, familyShoppingListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familyShoppingListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FamilyShoppingList.
     * @param {familyShoppingListUpsertArgs} args - Arguments to update or create a FamilyShoppingList.
     * @example
     * // Update or create a FamilyShoppingList
     * const familyShoppingList = await prisma.familyShoppingList.upsert({
     *   create: {
     *     // ... data to create a FamilyShoppingList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FamilyShoppingList we want to update
     *   }
     * })
     */
    upsert<T extends familyShoppingListUpsertArgs>(args: SelectSubset<T, familyShoppingListUpsertArgs<ExtArgs>>): Prisma__familyShoppingListClient<$Result.GetResult<Prisma.$familyShoppingListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FamilyShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyShoppingListCountArgs} args - Arguments to filter FamilyShoppingLists to count.
     * @example
     * // Count the number of FamilyShoppingLists
     * const count = await prisma.familyShoppingList.count({
     *   where: {
     *     // ... the filter for the FamilyShoppingLists we want to count
     *   }
     * })
    **/
    count<T extends familyShoppingListCountArgs>(
      args?: Subset<T, familyShoppingListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyShoppingListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FamilyShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyShoppingListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FamilyShoppingListAggregateArgs>(args: Subset<T, FamilyShoppingListAggregateArgs>): Prisma.PrismaPromise<GetFamilyShoppingListAggregateType<T>>

    /**
     * Group by FamilyShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyShoppingListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends familyShoppingListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: familyShoppingListGroupByArgs['orderBy'] }
        : { orderBy?: familyShoppingListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, familyShoppingListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyShoppingListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the familyShoppingList model
   */
  readonly fields: familyShoppingListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for familyShoppingList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__familyShoppingListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    family<T extends familyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, familyDefaultArgs<ExtArgs>>): Prisma__familyClient<$Result.GetResult<Prisma.$familyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shoppingList<T extends shoppingListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, shoppingListDefaultArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the familyShoppingList model
   */
  interface familyShoppingListFieldRefs {
    readonly familyId: FieldRef<"familyShoppingList", 'Int'>
    readonly shoppingListId: FieldRef<"familyShoppingList", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * familyShoppingList findUnique
   */
  export type familyShoppingListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyShoppingList
     */
    select?: familyShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyShoppingList
     */
    omit?: familyShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which familyShoppingList to fetch.
     */
    where: familyShoppingListWhereUniqueInput
  }

  /**
   * familyShoppingList findUniqueOrThrow
   */
  export type familyShoppingListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyShoppingList
     */
    select?: familyShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyShoppingList
     */
    omit?: familyShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which familyShoppingList to fetch.
     */
    where: familyShoppingListWhereUniqueInput
  }

  /**
   * familyShoppingList findFirst
   */
  export type familyShoppingListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyShoppingList
     */
    select?: familyShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyShoppingList
     */
    omit?: familyShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which familyShoppingList to fetch.
     */
    where?: familyShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familyShoppingLists to fetch.
     */
    orderBy?: familyShoppingListOrderByWithRelationInput | familyShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for familyShoppingLists.
     */
    cursor?: familyShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familyShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familyShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of familyShoppingLists.
     */
    distinct?: FamilyShoppingListScalarFieldEnum | FamilyShoppingListScalarFieldEnum[]
  }

  /**
   * familyShoppingList findFirstOrThrow
   */
  export type familyShoppingListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyShoppingList
     */
    select?: familyShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyShoppingList
     */
    omit?: familyShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which familyShoppingList to fetch.
     */
    where?: familyShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familyShoppingLists to fetch.
     */
    orderBy?: familyShoppingListOrderByWithRelationInput | familyShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for familyShoppingLists.
     */
    cursor?: familyShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familyShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familyShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of familyShoppingLists.
     */
    distinct?: FamilyShoppingListScalarFieldEnum | FamilyShoppingListScalarFieldEnum[]
  }

  /**
   * familyShoppingList findMany
   */
  export type familyShoppingListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyShoppingList
     */
    select?: familyShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyShoppingList
     */
    omit?: familyShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which familyShoppingLists to fetch.
     */
    where?: familyShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familyShoppingLists to fetch.
     */
    orderBy?: familyShoppingListOrderByWithRelationInput | familyShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing familyShoppingLists.
     */
    cursor?: familyShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familyShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familyShoppingLists.
     */
    skip?: number
    distinct?: FamilyShoppingListScalarFieldEnum | FamilyShoppingListScalarFieldEnum[]
  }

  /**
   * familyShoppingList create
   */
  export type familyShoppingListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyShoppingList
     */
    select?: familyShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyShoppingList
     */
    omit?: familyShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyShoppingListInclude<ExtArgs> | null
    /**
     * The data needed to create a familyShoppingList.
     */
    data: XOR<familyShoppingListCreateInput, familyShoppingListUncheckedCreateInput>
  }

  /**
   * familyShoppingList createMany
   */
  export type familyShoppingListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many familyShoppingLists.
     */
    data: familyShoppingListCreateManyInput | familyShoppingListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * familyShoppingList createManyAndReturn
   */
  export type familyShoppingListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyShoppingList
     */
    select?: familyShoppingListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the familyShoppingList
     */
    omit?: familyShoppingListOmit<ExtArgs> | null
    /**
     * The data used to create many familyShoppingLists.
     */
    data: familyShoppingListCreateManyInput | familyShoppingListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyShoppingListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * familyShoppingList update
   */
  export type familyShoppingListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyShoppingList
     */
    select?: familyShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyShoppingList
     */
    omit?: familyShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyShoppingListInclude<ExtArgs> | null
    /**
     * The data needed to update a familyShoppingList.
     */
    data: XOR<familyShoppingListUpdateInput, familyShoppingListUncheckedUpdateInput>
    /**
     * Choose, which familyShoppingList to update.
     */
    where: familyShoppingListWhereUniqueInput
  }

  /**
   * familyShoppingList updateMany
   */
  export type familyShoppingListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update familyShoppingLists.
     */
    data: XOR<familyShoppingListUpdateManyMutationInput, familyShoppingListUncheckedUpdateManyInput>
    /**
     * Filter which familyShoppingLists to update
     */
    where?: familyShoppingListWhereInput
    /**
     * Limit how many familyShoppingLists to update.
     */
    limit?: number
  }

  /**
   * familyShoppingList updateManyAndReturn
   */
  export type familyShoppingListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyShoppingList
     */
    select?: familyShoppingListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the familyShoppingList
     */
    omit?: familyShoppingListOmit<ExtArgs> | null
    /**
     * The data used to update familyShoppingLists.
     */
    data: XOR<familyShoppingListUpdateManyMutationInput, familyShoppingListUncheckedUpdateManyInput>
    /**
     * Filter which familyShoppingLists to update
     */
    where?: familyShoppingListWhereInput
    /**
     * Limit how many familyShoppingLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyShoppingListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * familyShoppingList upsert
   */
  export type familyShoppingListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyShoppingList
     */
    select?: familyShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyShoppingList
     */
    omit?: familyShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyShoppingListInclude<ExtArgs> | null
    /**
     * The filter to search for the familyShoppingList to update in case it exists.
     */
    where: familyShoppingListWhereUniqueInput
    /**
     * In case the familyShoppingList found by the `where` argument doesn't exist, create a new familyShoppingList with this data.
     */
    create: XOR<familyShoppingListCreateInput, familyShoppingListUncheckedCreateInput>
    /**
     * In case the familyShoppingList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<familyShoppingListUpdateInput, familyShoppingListUncheckedUpdateInput>
  }

  /**
   * familyShoppingList delete
   */
  export type familyShoppingListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyShoppingList
     */
    select?: familyShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyShoppingList
     */
    omit?: familyShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyShoppingListInclude<ExtArgs> | null
    /**
     * Filter which familyShoppingList to delete.
     */
    where: familyShoppingListWhereUniqueInput
  }

  /**
   * familyShoppingList deleteMany
   */
  export type familyShoppingListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which familyShoppingLists to delete
     */
    where?: familyShoppingListWhereInput
    /**
     * Limit how many familyShoppingLists to delete.
     */
    limit?: number
  }

  /**
   * familyShoppingList without action
   */
  export type familyShoppingListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyShoppingList
     */
    select?: familyShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyShoppingList
     */
    omit?: familyShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyShoppingListInclude<ExtArgs> | null
  }


  /**
   * Model shoppingListItem
   */

  export type AggregateShoppingListItem = {
    _count: ShoppingListItemCountAggregateOutputType | null
    _avg: ShoppingListItemAvgAggregateOutputType | null
    _sum: ShoppingListItemSumAggregateOutputType | null
    _min: ShoppingListItemMinAggregateOutputType | null
    _max: ShoppingListItemMaxAggregateOutputType | null
  }

  export type ShoppingListItemAvgAggregateOutputType = {
    id: number | null
    shoppingListId: number | null
  }

  export type ShoppingListItemSumAggregateOutputType = {
    id: number | null
    shoppingListId: number | null
  }

  export type ShoppingListItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    checked: boolean | null
    shoppingListId: number | null
  }

  export type ShoppingListItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    checked: boolean | null
    shoppingListId: number | null
  }

  export type ShoppingListItemCountAggregateOutputType = {
    id: number
    name: number
    checked: number
    shoppingListId: number
    _all: number
  }


  export type ShoppingListItemAvgAggregateInputType = {
    id?: true
    shoppingListId?: true
  }

  export type ShoppingListItemSumAggregateInputType = {
    id?: true
    shoppingListId?: true
  }

  export type ShoppingListItemMinAggregateInputType = {
    id?: true
    name?: true
    checked?: true
    shoppingListId?: true
  }

  export type ShoppingListItemMaxAggregateInputType = {
    id?: true
    name?: true
    checked?: true
    shoppingListId?: true
  }

  export type ShoppingListItemCountAggregateInputType = {
    id?: true
    name?: true
    checked?: true
    shoppingListId?: true
    _all?: true
  }

  export type ShoppingListItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shoppingListItem to aggregate.
     */
    where?: shoppingListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shoppingListItems to fetch.
     */
    orderBy?: shoppingListItemOrderByWithRelationInput | shoppingListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shoppingListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shoppingListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shoppingListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shoppingListItems
    **/
    _count?: true | ShoppingListItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoppingListItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoppingListItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingListItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingListItemMaxAggregateInputType
  }

  export type GetShoppingListItemAggregateType<T extends ShoppingListItemAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingListItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingListItem[P]>
      : GetScalarType<T[P], AggregateShoppingListItem[P]>
  }




  export type shoppingListItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shoppingListItemWhereInput
    orderBy?: shoppingListItemOrderByWithAggregationInput | shoppingListItemOrderByWithAggregationInput[]
    by: ShoppingListItemScalarFieldEnum[] | ShoppingListItemScalarFieldEnum
    having?: shoppingListItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingListItemCountAggregateInputType | true
    _avg?: ShoppingListItemAvgAggregateInputType
    _sum?: ShoppingListItemSumAggregateInputType
    _min?: ShoppingListItemMinAggregateInputType
    _max?: ShoppingListItemMaxAggregateInputType
  }

  export type ShoppingListItemGroupByOutputType = {
    id: number
    name: string
    checked: boolean
    shoppingListId: number
    _count: ShoppingListItemCountAggregateOutputType | null
    _avg: ShoppingListItemAvgAggregateOutputType | null
    _sum: ShoppingListItemSumAggregateOutputType | null
    _min: ShoppingListItemMinAggregateOutputType | null
    _max: ShoppingListItemMaxAggregateOutputType | null
  }

  type GetShoppingListItemGroupByPayload<T extends shoppingListItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingListItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingListItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingListItemGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingListItemGroupByOutputType[P]>
        }
      >
    >


  export type shoppingListItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    checked?: boolean
    shoppingListId?: boolean
    shoppingList?: boolean | shoppingListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListItem"]>

  export type shoppingListItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    checked?: boolean
    shoppingListId?: boolean
    shoppingList?: boolean | shoppingListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListItem"]>

  export type shoppingListItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    checked?: boolean
    shoppingListId?: boolean
    shoppingList?: boolean | shoppingListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListItem"]>

  export type shoppingListItemSelectScalar = {
    id?: boolean
    name?: boolean
    checked?: boolean
    shoppingListId?: boolean
  }

  export type shoppingListItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "checked" | "shoppingListId", ExtArgs["result"]["shoppingListItem"]>
  export type shoppingListItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingList?: boolean | shoppingListDefaultArgs<ExtArgs>
  }
  export type shoppingListItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingList?: boolean | shoppingListDefaultArgs<ExtArgs>
  }
  export type shoppingListItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingList?: boolean | shoppingListDefaultArgs<ExtArgs>
  }

  export type $shoppingListItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shoppingListItem"
    objects: {
      shoppingList: Prisma.$shoppingListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      checked: boolean
      shoppingListId: number
    }, ExtArgs["result"]["shoppingListItem"]>
    composites: {}
  }

  type shoppingListItemGetPayload<S extends boolean | null | undefined | shoppingListItemDefaultArgs> = $Result.GetResult<Prisma.$shoppingListItemPayload, S>

  type shoppingListItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shoppingListItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoppingListItemCountAggregateInputType | true
    }

  export interface shoppingListItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shoppingListItem'], meta: { name: 'shoppingListItem' } }
    /**
     * Find zero or one ShoppingListItem that matches the filter.
     * @param {shoppingListItemFindUniqueArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shoppingListItemFindUniqueArgs>(args: SelectSubset<T, shoppingListItemFindUniqueArgs<ExtArgs>>): Prisma__shoppingListItemClient<$Result.GetResult<Prisma.$shoppingListItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShoppingListItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shoppingListItemFindUniqueOrThrowArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shoppingListItemFindUniqueOrThrowArgs>(args: SelectSubset<T, shoppingListItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shoppingListItemClient<$Result.GetResult<Prisma.$shoppingListItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingListItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListItemFindFirstArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shoppingListItemFindFirstArgs>(args?: SelectSubset<T, shoppingListItemFindFirstArgs<ExtArgs>>): Prisma__shoppingListItemClient<$Result.GetResult<Prisma.$shoppingListItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingListItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListItemFindFirstOrThrowArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shoppingListItemFindFirstOrThrowArgs>(args?: SelectSubset<T, shoppingListItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__shoppingListItemClient<$Result.GetResult<Prisma.$shoppingListItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShoppingListItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingListItems
     * const shoppingListItems = await prisma.shoppingListItem.findMany()
     * 
     * // Get first 10 ShoppingListItems
     * const shoppingListItems = await prisma.shoppingListItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingListItemWithIdOnly = await prisma.shoppingListItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends shoppingListItemFindManyArgs>(args?: SelectSubset<T, shoppingListItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shoppingListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShoppingListItem.
     * @param {shoppingListItemCreateArgs} args - Arguments to create a ShoppingListItem.
     * @example
     * // Create one ShoppingListItem
     * const ShoppingListItem = await prisma.shoppingListItem.create({
     *   data: {
     *     // ... data to create a ShoppingListItem
     *   }
     * })
     * 
     */
    create<T extends shoppingListItemCreateArgs>(args: SelectSubset<T, shoppingListItemCreateArgs<ExtArgs>>): Prisma__shoppingListItemClient<$Result.GetResult<Prisma.$shoppingListItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShoppingListItems.
     * @param {shoppingListItemCreateManyArgs} args - Arguments to create many ShoppingListItems.
     * @example
     * // Create many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shoppingListItemCreateManyArgs>(args?: SelectSubset<T, shoppingListItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShoppingListItems and returns the data saved in the database.
     * @param {shoppingListItemCreateManyAndReturnArgs} args - Arguments to create many ShoppingListItems.
     * @example
     * // Create many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShoppingListItems and only return the `id`
     * const shoppingListItemWithIdOnly = await prisma.shoppingListItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends shoppingListItemCreateManyAndReturnArgs>(args?: SelectSubset<T, shoppingListItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shoppingListItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShoppingListItem.
     * @param {shoppingListItemDeleteArgs} args - Arguments to delete one ShoppingListItem.
     * @example
     * // Delete one ShoppingListItem
     * const ShoppingListItem = await prisma.shoppingListItem.delete({
     *   where: {
     *     // ... filter to delete one ShoppingListItem
     *   }
     * })
     * 
     */
    delete<T extends shoppingListItemDeleteArgs>(args: SelectSubset<T, shoppingListItemDeleteArgs<ExtArgs>>): Prisma__shoppingListItemClient<$Result.GetResult<Prisma.$shoppingListItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShoppingListItem.
     * @param {shoppingListItemUpdateArgs} args - Arguments to update one ShoppingListItem.
     * @example
     * // Update one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shoppingListItemUpdateArgs>(args: SelectSubset<T, shoppingListItemUpdateArgs<ExtArgs>>): Prisma__shoppingListItemClient<$Result.GetResult<Prisma.$shoppingListItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShoppingListItems.
     * @param {shoppingListItemDeleteManyArgs} args - Arguments to filter ShoppingListItems to delete.
     * @example
     * // Delete a few ShoppingListItems
     * const { count } = await prisma.shoppingListItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shoppingListItemDeleteManyArgs>(args?: SelectSubset<T, shoppingListItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shoppingListItemUpdateManyArgs>(args: SelectSubset<T, shoppingListItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingListItems and returns the data updated in the database.
     * @param {shoppingListItemUpdateManyAndReturnArgs} args - Arguments to update many ShoppingListItems.
     * @example
     * // Update many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShoppingListItems and only return the `id`
     * const shoppingListItemWithIdOnly = await prisma.shoppingListItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends shoppingListItemUpdateManyAndReturnArgs>(args: SelectSubset<T, shoppingListItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shoppingListItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShoppingListItem.
     * @param {shoppingListItemUpsertArgs} args - Arguments to update or create a ShoppingListItem.
     * @example
     * // Update or create a ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.upsert({
     *   create: {
     *     // ... data to create a ShoppingListItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingListItem we want to update
     *   }
     * })
     */
    upsert<T extends shoppingListItemUpsertArgs>(args: SelectSubset<T, shoppingListItemUpsertArgs<ExtArgs>>): Prisma__shoppingListItemClient<$Result.GetResult<Prisma.$shoppingListItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShoppingListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListItemCountArgs} args - Arguments to filter ShoppingListItems to count.
     * @example
     * // Count the number of ShoppingListItems
     * const count = await prisma.shoppingListItem.count({
     *   where: {
     *     // ... the filter for the ShoppingListItems we want to count
     *   }
     * })
    **/
    count<T extends shoppingListItemCountArgs>(
      args?: Subset<T, shoppingListItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingListItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingListItemAggregateArgs>(args: Subset<T, ShoppingListItemAggregateArgs>): Prisma.PrismaPromise<GetShoppingListItemAggregateType<T>>

    /**
     * Group by ShoppingListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends shoppingListItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shoppingListItemGroupByArgs['orderBy'] }
        : { orderBy?: shoppingListItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, shoppingListItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingListItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shoppingListItem model
   */
  readonly fields: shoppingListItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shoppingListItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shoppingListItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shoppingList<T extends shoppingListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, shoppingListDefaultArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the shoppingListItem model
   */
  interface shoppingListItemFieldRefs {
    readonly id: FieldRef<"shoppingListItem", 'Int'>
    readonly name: FieldRef<"shoppingListItem", 'String'>
    readonly checked: FieldRef<"shoppingListItem", 'Boolean'>
    readonly shoppingListId: FieldRef<"shoppingListItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * shoppingListItem findUnique
   */
  export type shoppingListItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingListItem
     */
    select?: shoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingListItem
     */
    omit?: shoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which shoppingListItem to fetch.
     */
    where: shoppingListItemWhereUniqueInput
  }

  /**
   * shoppingListItem findUniqueOrThrow
   */
  export type shoppingListItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingListItem
     */
    select?: shoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingListItem
     */
    omit?: shoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which shoppingListItem to fetch.
     */
    where: shoppingListItemWhereUniqueInput
  }

  /**
   * shoppingListItem findFirst
   */
  export type shoppingListItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingListItem
     */
    select?: shoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingListItem
     */
    omit?: shoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which shoppingListItem to fetch.
     */
    where?: shoppingListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shoppingListItems to fetch.
     */
    orderBy?: shoppingListItemOrderByWithRelationInput | shoppingListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shoppingListItems.
     */
    cursor?: shoppingListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shoppingListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shoppingListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shoppingListItems.
     */
    distinct?: ShoppingListItemScalarFieldEnum | ShoppingListItemScalarFieldEnum[]
  }

  /**
   * shoppingListItem findFirstOrThrow
   */
  export type shoppingListItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingListItem
     */
    select?: shoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingListItem
     */
    omit?: shoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which shoppingListItem to fetch.
     */
    where?: shoppingListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shoppingListItems to fetch.
     */
    orderBy?: shoppingListItemOrderByWithRelationInput | shoppingListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shoppingListItems.
     */
    cursor?: shoppingListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shoppingListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shoppingListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shoppingListItems.
     */
    distinct?: ShoppingListItemScalarFieldEnum | ShoppingListItemScalarFieldEnum[]
  }

  /**
   * shoppingListItem findMany
   */
  export type shoppingListItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingListItem
     */
    select?: shoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingListItem
     */
    omit?: shoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which shoppingListItems to fetch.
     */
    where?: shoppingListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shoppingListItems to fetch.
     */
    orderBy?: shoppingListItemOrderByWithRelationInput | shoppingListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shoppingListItems.
     */
    cursor?: shoppingListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shoppingListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shoppingListItems.
     */
    skip?: number
    distinct?: ShoppingListItemScalarFieldEnum | ShoppingListItemScalarFieldEnum[]
  }

  /**
   * shoppingListItem create
   */
  export type shoppingListItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingListItem
     */
    select?: shoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingListItem
     */
    omit?: shoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListItemInclude<ExtArgs> | null
    /**
     * The data needed to create a shoppingListItem.
     */
    data: XOR<shoppingListItemCreateInput, shoppingListItemUncheckedCreateInput>
  }

  /**
   * shoppingListItem createMany
   */
  export type shoppingListItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shoppingListItems.
     */
    data: shoppingListItemCreateManyInput | shoppingListItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shoppingListItem createManyAndReturn
   */
  export type shoppingListItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingListItem
     */
    select?: shoppingListItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingListItem
     */
    omit?: shoppingListItemOmit<ExtArgs> | null
    /**
     * The data used to create many shoppingListItems.
     */
    data: shoppingListItemCreateManyInput | shoppingListItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * shoppingListItem update
   */
  export type shoppingListItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingListItem
     */
    select?: shoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingListItem
     */
    omit?: shoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListItemInclude<ExtArgs> | null
    /**
     * The data needed to update a shoppingListItem.
     */
    data: XOR<shoppingListItemUpdateInput, shoppingListItemUncheckedUpdateInput>
    /**
     * Choose, which shoppingListItem to update.
     */
    where: shoppingListItemWhereUniqueInput
  }

  /**
   * shoppingListItem updateMany
   */
  export type shoppingListItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shoppingListItems.
     */
    data: XOR<shoppingListItemUpdateManyMutationInput, shoppingListItemUncheckedUpdateManyInput>
    /**
     * Filter which shoppingListItems to update
     */
    where?: shoppingListItemWhereInput
    /**
     * Limit how many shoppingListItems to update.
     */
    limit?: number
  }

  /**
   * shoppingListItem updateManyAndReturn
   */
  export type shoppingListItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingListItem
     */
    select?: shoppingListItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingListItem
     */
    omit?: shoppingListItemOmit<ExtArgs> | null
    /**
     * The data used to update shoppingListItems.
     */
    data: XOR<shoppingListItemUpdateManyMutationInput, shoppingListItemUncheckedUpdateManyInput>
    /**
     * Filter which shoppingListItems to update
     */
    where?: shoppingListItemWhereInput
    /**
     * Limit how many shoppingListItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * shoppingListItem upsert
   */
  export type shoppingListItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingListItem
     */
    select?: shoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingListItem
     */
    omit?: shoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListItemInclude<ExtArgs> | null
    /**
     * The filter to search for the shoppingListItem to update in case it exists.
     */
    where: shoppingListItemWhereUniqueInput
    /**
     * In case the shoppingListItem found by the `where` argument doesn't exist, create a new shoppingListItem with this data.
     */
    create: XOR<shoppingListItemCreateInput, shoppingListItemUncheckedCreateInput>
    /**
     * In case the shoppingListItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shoppingListItemUpdateInput, shoppingListItemUncheckedUpdateInput>
  }

  /**
   * shoppingListItem delete
   */
  export type shoppingListItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingListItem
     */
    select?: shoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingListItem
     */
    omit?: shoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListItemInclude<ExtArgs> | null
    /**
     * Filter which shoppingListItem to delete.
     */
    where: shoppingListItemWhereUniqueInput
  }

  /**
   * shoppingListItem deleteMany
   */
  export type shoppingListItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shoppingListItems to delete
     */
    where?: shoppingListItemWhereInput
    /**
     * Limit how many shoppingListItems to delete.
     */
    limit?: number
  }

  /**
   * shoppingListItem without action
   */
  export type shoppingListItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingListItem
     */
    select?: shoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingListItem
     */
    omit?: shoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListItemInclude<ExtArgs> | null
  }


  /**
   * Model recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    id: number | null
    duration: number | null
  }

  export type RecipeSumAggregateOutputType = {
    id: number | null
    duration: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: number | null
    name: string | null
    duration: number | null
    image: string | null
    public: boolean | null
    provider: string | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    duration: number | null
    image: string | null
    public: boolean | null
    provider: string | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    name: number
    duration: number
    image: number
    public: number
    provider: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    id?: true
    duration?: true
  }

  export type RecipeSumAggregateInputType = {
    id?: true
    duration?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    name?: true
    duration?: true
    image?: true
    public?: true
    provider?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    name?: true
    duration?: true
    image?: true
    public?: true
    provider?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    name?: true
    duration?: true
    image?: true
    public?: true
    provider?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipe to aggregate.
     */
    where?: recipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type recipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipeWhereInput
    orderBy?: recipeOrderByWithAggregationInput | recipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: recipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: number
    name: string
    duration: number
    image: string | null
    public: boolean
    provider: string | null
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends recipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type recipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    duration?: boolean
    image?: boolean
    public?: boolean
    provider?: boolean
    recipeStep?: boolean | recipe$recipeStepArgs<ExtArgs>
    familyRecipe?: boolean | recipe$familyRecipeArgs<ExtArgs>
    recipeItem?: boolean | recipe$recipeItemArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type recipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    duration?: boolean
    image?: boolean
    public?: boolean
    provider?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type recipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    duration?: boolean
    image?: boolean
    public?: boolean
    provider?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type recipeSelectScalar = {
    id?: boolean
    name?: boolean
    duration?: boolean
    image?: boolean
    public?: boolean
    provider?: boolean
  }

  export type recipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "duration" | "image" | "public" | "provider", ExtArgs["result"]["recipe"]>
  export type recipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeStep?: boolean | recipe$recipeStepArgs<ExtArgs>
    familyRecipe?: boolean | recipe$familyRecipeArgs<ExtArgs>
    recipeItem?: boolean | recipe$recipeItemArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type recipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type recipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $recipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recipe"
    objects: {
      recipeStep: Prisma.$recipeStepPayload<ExtArgs>[]
      familyRecipe: Prisma.$familyRecipePayload<ExtArgs>[]
      recipeItem: Prisma.$recipeItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      duration: number
      image: string | null
      public: boolean
      provider: string | null
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type recipeGetPayload<S extends boolean | null | undefined | recipeDefaultArgs> = $Result.GetResult<Prisma.$recipePayload, S>

  type recipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface recipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recipe'], meta: { name: 'recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {recipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recipeFindUniqueArgs>(args: SelectSubset<T, recipeFindUniqueArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recipeFindUniqueOrThrowArgs>(args: SelectSubset<T, recipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recipeFindFirstArgs>(args?: SelectSubset<T, recipeFindFirstArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recipeFindFirstOrThrowArgs>(args?: SelectSubset<T, recipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recipeFindManyArgs>(args?: SelectSubset<T, recipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {recipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends recipeCreateArgs>(args: SelectSubset<T, recipeCreateArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {recipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recipeCreateManyArgs>(args?: SelectSubset<T, recipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {recipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recipeCreateManyAndReturnArgs>(args?: SelectSubset<T, recipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {recipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends recipeDeleteArgs>(args: SelectSubset<T, recipeDeleteArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {recipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recipeUpdateArgs>(args: SelectSubset<T, recipeUpdateArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {recipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recipeDeleteManyArgs>(args?: SelectSubset<T, recipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recipeUpdateManyArgs>(args: SelectSubset<T, recipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {recipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recipeUpdateManyAndReturnArgs>(args: SelectSubset<T, recipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {recipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends recipeUpsertArgs>(args: SelectSubset<T, recipeUpsertArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends recipeCountArgs>(
      args?: Subset<T, recipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recipeGroupByArgs['orderBy'] }
        : { orderBy?: recipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recipe model
   */
  readonly fields: recipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipeStep<T extends recipe$recipeStepArgs<ExtArgs> = {}>(args?: Subset<T, recipe$recipeStepArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipeStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    familyRecipe<T extends recipe$familyRecipeArgs<ExtArgs> = {}>(args?: Subset<T, recipe$familyRecipeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familyRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipeItem<T extends recipe$recipeItemArgs<ExtArgs> = {}>(args?: Subset<T, recipe$recipeItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recipe model
   */
  interface recipeFieldRefs {
    readonly id: FieldRef<"recipe", 'Int'>
    readonly name: FieldRef<"recipe", 'String'>
    readonly duration: FieldRef<"recipe", 'Int'>
    readonly image: FieldRef<"recipe", 'String'>
    readonly public: FieldRef<"recipe", 'Boolean'>
    readonly provider: FieldRef<"recipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * recipe findUnique
   */
  export type recipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * Filter, which recipe to fetch.
     */
    where: recipeWhereUniqueInput
  }

  /**
   * recipe findUniqueOrThrow
   */
  export type recipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * Filter, which recipe to fetch.
     */
    where: recipeWhereUniqueInput
  }

  /**
   * recipe findFirst
   */
  export type recipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * Filter, which recipe to fetch.
     */
    where?: recipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipes.
     */
    cursor?: recipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * recipe findFirstOrThrow
   */
  export type recipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * Filter, which recipe to fetch.
     */
    where?: recipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipes.
     */
    cursor?: recipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * recipe findMany
   */
  export type recipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recipes.
     */
    cursor?: recipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * recipe create
   */
  export type recipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * The data needed to create a recipe.
     */
    data: XOR<recipeCreateInput, recipeUncheckedCreateInput>
  }

  /**
   * recipe createMany
   */
  export type recipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recipes.
     */
    data: recipeCreateManyInput | recipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recipe createManyAndReturn
   */
  export type recipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * The data used to create many recipes.
     */
    data: recipeCreateManyInput | recipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recipe update
   */
  export type recipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * The data needed to update a recipe.
     */
    data: XOR<recipeUpdateInput, recipeUncheckedUpdateInput>
    /**
     * Choose, which recipe to update.
     */
    where: recipeWhereUniqueInput
  }

  /**
   * recipe updateMany
   */
  export type recipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recipes.
     */
    data: XOR<recipeUpdateManyMutationInput, recipeUncheckedUpdateManyInput>
    /**
     * Filter which recipes to update
     */
    where?: recipeWhereInput
    /**
     * Limit how many recipes to update.
     */
    limit?: number
  }

  /**
   * recipe updateManyAndReturn
   */
  export type recipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * The data used to update recipes.
     */
    data: XOR<recipeUpdateManyMutationInput, recipeUncheckedUpdateManyInput>
    /**
     * Filter which recipes to update
     */
    where?: recipeWhereInput
    /**
     * Limit how many recipes to update.
     */
    limit?: number
  }

  /**
   * recipe upsert
   */
  export type recipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * The filter to search for the recipe to update in case it exists.
     */
    where: recipeWhereUniqueInput
    /**
     * In case the recipe found by the `where` argument doesn't exist, create a new recipe with this data.
     */
    create: XOR<recipeCreateInput, recipeUncheckedCreateInput>
    /**
     * In case the recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recipeUpdateInput, recipeUncheckedUpdateInput>
  }

  /**
   * recipe delete
   */
  export type recipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * Filter which recipe to delete.
     */
    where: recipeWhereUniqueInput
  }

  /**
   * recipe deleteMany
   */
  export type recipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipes to delete
     */
    where?: recipeWhereInput
    /**
     * Limit how many recipes to delete.
     */
    limit?: number
  }

  /**
   * recipe.recipeStep
   */
  export type recipe$recipeStepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeStep
     */
    select?: recipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeStep
     */
    omit?: recipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeStepInclude<ExtArgs> | null
    where?: recipeStepWhereInput
    orderBy?: recipeStepOrderByWithRelationInput | recipeStepOrderByWithRelationInput[]
    cursor?: recipeStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeStepScalarFieldEnum | RecipeStepScalarFieldEnum[]
  }

  /**
   * recipe.familyRecipe
   */
  export type recipe$familyRecipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyRecipe
     */
    select?: familyRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyRecipe
     */
    omit?: familyRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyRecipeInclude<ExtArgs> | null
    where?: familyRecipeWhereInput
    orderBy?: familyRecipeOrderByWithRelationInput | familyRecipeOrderByWithRelationInput[]
    cursor?: familyRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FamilyRecipeScalarFieldEnum | FamilyRecipeScalarFieldEnum[]
  }

  /**
   * recipe.recipeItem
   */
  export type recipe$recipeItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeItem
     */
    select?: recipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeItem
     */
    omit?: recipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeItemInclude<ExtArgs> | null
    where?: recipeItemWhereInput
    orderBy?: recipeItemOrderByWithRelationInput | recipeItemOrderByWithRelationInput[]
    cursor?: recipeItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeItemScalarFieldEnum | RecipeItemScalarFieldEnum[]
  }

  /**
   * recipe without action
   */
  export type recipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
  }


  /**
   * Model recipeStep
   */

  export type AggregateRecipeStep = {
    _count: RecipeStepCountAggregateOutputType | null
    _avg: RecipeStepAvgAggregateOutputType | null
    _sum: RecipeStepSumAggregateOutputType | null
    _min: RecipeStepMinAggregateOutputType | null
    _max: RecipeStepMaxAggregateOutputType | null
  }

  export type RecipeStepAvgAggregateOutputType = {
    id: number | null
    index: number | null
    recipeId: number | null
  }

  export type RecipeStepSumAggregateOutputType = {
    id: number | null
    index: number | null
    recipeId: number | null
  }

  export type RecipeStepMinAggregateOutputType = {
    id: number | null
    description: string | null
    index: number | null
    recipeId: number | null
  }

  export type RecipeStepMaxAggregateOutputType = {
    id: number | null
    description: string | null
    index: number | null
    recipeId: number | null
  }

  export type RecipeStepCountAggregateOutputType = {
    id: number
    description: number
    index: number
    recipeId: number
    _all: number
  }


  export type RecipeStepAvgAggregateInputType = {
    id?: true
    index?: true
    recipeId?: true
  }

  export type RecipeStepSumAggregateInputType = {
    id?: true
    index?: true
    recipeId?: true
  }

  export type RecipeStepMinAggregateInputType = {
    id?: true
    description?: true
    index?: true
    recipeId?: true
  }

  export type RecipeStepMaxAggregateInputType = {
    id?: true
    description?: true
    index?: true
    recipeId?: true
  }

  export type RecipeStepCountAggregateInputType = {
    id?: true
    description?: true
    index?: true
    recipeId?: true
    _all?: true
  }

  export type RecipeStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipeStep to aggregate.
     */
    where?: recipeStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipeSteps to fetch.
     */
    orderBy?: recipeStepOrderByWithRelationInput | recipeStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recipeStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipeSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipeSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recipeSteps
    **/
    _count?: true | RecipeStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeStepMaxAggregateInputType
  }

  export type GetRecipeStepAggregateType<T extends RecipeStepAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeStep[P]>
      : GetScalarType<T[P], AggregateRecipeStep[P]>
  }




  export type recipeStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipeStepWhereInput
    orderBy?: recipeStepOrderByWithAggregationInput | recipeStepOrderByWithAggregationInput[]
    by: RecipeStepScalarFieldEnum[] | RecipeStepScalarFieldEnum
    having?: recipeStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeStepCountAggregateInputType | true
    _avg?: RecipeStepAvgAggregateInputType
    _sum?: RecipeStepSumAggregateInputType
    _min?: RecipeStepMinAggregateInputType
    _max?: RecipeStepMaxAggregateInputType
  }

  export type RecipeStepGroupByOutputType = {
    id: number
    description: string
    index: number
    recipeId: number
    _count: RecipeStepCountAggregateOutputType | null
    _avg: RecipeStepAvgAggregateOutputType | null
    _sum: RecipeStepSumAggregateOutputType | null
    _min: RecipeStepMinAggregateOutputType | null
    _max: RecipeStepMaxAggregateOutputType | null
  }

  type GetRecipeStepGroupByPayload<T extends recipeStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeStepGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeStepGroupByOutputType[P]>
        }
      >
    >


  export type recipeStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    index?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeStep"]>

  export type recipeStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    index?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeStep"]>

  export type recipeStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    index?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeStep"]>

  export type recipeStepSelectScalar = {
    id?: boolean
    description?: boolean
    index?: boolean
    recipeId?: boolean
  }

  export type recipeStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "index" | "recipeId", ExtArgs["result"]["recipeStep"]>
  export type recipeStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }
  export type recipeStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }
  export type recipeStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }

  export type $recipeStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recipeStep"
    objects: {
      recipe: Prisma.$recipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      index: number
      recipeId: number
    }, ExtArgs["result"]["recipeStep"]>
    composites: {}
  }

  type recipeStepGetPayload<S extends boolean | null | undefined | recipeStepDefaultArgs> = $Result.GetResult<Prisma.$recipeStepPayload, S>

  type recipeStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recipeStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeStepCountAggregateInputType | true
    }

  export interface recipeStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recipeStep'], meta: { name: 'recipeStep' } }
    /**
     * Find zero or one RecipeStep that matches the filter.
     * @param {recipeStepFindUniqueArgs} args - Arguments to find a RecipeStep
     * @example
     * // Get one RecipeStep
     * const recipeStep = await prisma.recipeStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recipeStepFindUniqueArgs>(args: SelectSubset<T, recipeStepFindUniqueArgs<ExtArgs>>): Prisma__recipeStepClient<$Result.GetResult<Prisma.$recipeStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recipeStepFindUniqueOrThrowArgs} args - Arguments to find a RecipeStep
     * @example
     * // Get one RecipeStep
     * const recipeStep = await prisma.recipeStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recipeStepFindUniqueOrThrowArgs>(args: SelectSubset<T, recipeStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recipeStepClient<$Result.GetResult<Prisma.$recipeStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeStepFindFirstArgs} args - Arguments to find a RecipeStep
     * @example
     * // Get one RecipeStep
     * const recipeStep = await prisma.recipeStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recipeStepFindFirstArgs>(args?: SelectSubset<T, recipeStepFindFirstArgs<ExtArgs>>): Prisma__recipeStepClient<$Result.GetResult<Prisma.$recipeStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeStepFindFirstOrThrowArgs} args - Arguments to find a RecipeStep
     * @example
     * // Get one RecipeStep
     * const recipeStep = await prisma.recipeStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recipeStepFindFirstOrThrowArgs>(args?: SelectSubset<T, recipeStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__recipeStepClient<$Result.GetResult<Prisma.$recipeStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeSteps
     * const recipeSteps = await prisma.recipeStep.findMany()
     * 
     * // Get first 10 RecipeSteps
     * const recipeSteps = await prisma.recipeStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeStepWithIdOnly = await prisma.recipeStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recipeStepFindManyArgs>(args?: SelectSubset<T, recipeStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipeStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeStep.
     * @param {recipeStepCreateArgs} args - Arguments to create a RecipeStep.
     * @example
     * // Create one RecipeStep
     * const RecipeStep = await prisma.recipeStep.create({
     *   data: {
     *     // ... data to create a RecipeStep
     *   }
     * })
     * 
     */
    create<T extends recipeStepCreateArgs>(args: SelectSubset<T, recipeStepCreateArgs<ExtArgs>>): Prisma__recipeStepClient<$Result.GetResult<Prisma.$recipeStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeSteps.
     * @param {recipeStepCreateManyArgs} args - Arguments to create many RecipeSteps.
     * @example
     * // Create many RecipeSteps
     * const recipeStep = await prisma.recipeStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recipeStepCreateManyArgs>(args?: SelectSubset<T, recipeStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeSteps and returns the data saved in the database.
     * @param {recipeStepCreateManyAndReturnArgs} args - Arguments to create many RecipeSteps.
     * @example
     * // Create many RecipeSteps
     * const recipeStep = await prisma.recipeStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeSteps and only return the `id`
     * const recipeStepWithIdOnly = await prisma.recipeStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recipeStepCreateManyAndReturnArgs>(args?: SelectSubset<T, recipeStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipeStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeStep.
     * @param {recipeStepDeleteArgs} args - Arguments to delete one RecipeStep.
     * @example
     * // Delete one RecipeStep
     * const RecipeStep = await prisma.recipeStep.delete({
     *   where: {
     *     // ... filter to delete one RecipeStep
     *   }
     * })
     * 
     */
    delete<T extends recipeStepDeleteArgs>(args: SelectSubset<T, recipeStepDeleteArgs<ExtArgs>>): Prisma__recipeStepClient<$Result.GetResult<Prisma.$recipeStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeStep.
     * @param {recipeStepUpdateArgs} args - Arguments to update one RecipeStep.
     * @example
     * // Update one RecipeStep
     * const recipeStep = await prisma.recipeStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recipeStepUpdateArgs>(args: SelectSubset<T, recipeStepUpdateArgs<ExtArgs>>): Prisma__recipeStepClient<$Result.GetResult<Prisma.$recipeStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeSteps.
     * @param {recipeStepDeleteManyArgs} args - Arguments to filter RecipeSteps to delete.
     * @example
     * // Delete a few RecipeSteps
     * const { count } = await prisma.recipeStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recipeStepDeleteManyArgs>(args?: SelectSubset<T, recipeStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeSteps
     * const recipeStep = await prisma.recipeStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recipeStepUpdateManyArgs>(args: SelectSubset<T, recipeStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeSteps and returns the data updated in the database.
     * @param {recipeStepUpdateManyAndReturnArgs} args - Arguments to update many RecipeSteps.
     * @example
     * // Update many RecipeSteps
     * const recipeStep = await prisma.recipeStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeSteps and only return the `id`
     * const recipeStepWithIdOnly = await prisma.recipeStep.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recipeStepUpdateManyAndReturnArgs>(args: SelectSubset<T, recipeStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipeStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeStep.
     * @param {recipeStepUpsertArgs} args - Arguments to update or create a RecipeStep.
     * @example
     * // Update or create a RecipeStep
     * const recipeStep = await prisma.recipeStep.upsert({
     *   create: {
     *     // ... data to create a RecipeStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeStep we want to update
     *   }
     * })
     */
    upsert<T extends recipeStepUpsertArgs>(args: SelectSubset<T, recipeStepUpsertArgs<ExtArgs>>): Prisma__recipeStepClient<$Result.GetResult<Prisma.$recipeStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeStepCountArgs} args - Arguments to filter RecipeSteps to count.
     * @example
     * // Count the number of RecipeSteps
     * const count = await prisma.recipeStep.count({
     *   where: {
     *     // ... the filter for the RecipeSteps we want to count
     *   }
     * })
    **/
    count<T extends recipeStepCountArgs>(
      args?: Subset<T, recipeStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeStepAggregateArgs>(args: Subset<T, RecipeStepAggregateArgs>): Prisma.PrismaPromise<GetRecipeStepAggregateType<T>>

    /**
     * Group by RecipeStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeStepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recipeStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recipeStepGroupByArgs['orderBy'] }
        : { orderBy?: recipeStepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recipeStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recipeStep model
   */
  readonly fields: recipeStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recipeStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recipeStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends recipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recipeDefaultArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recipeStep model
   */
  interface recipeStepFieldRefs {
    readonly id: FieldRef<"recipeStep", 'Int'>
    readonly description: FieldRef<"recipeStep", 'String'>
    readonly index: FieldRef<"recipeStep", 'Int'>
    readonly recipeId: FieldRef<"recipeStep", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * recipeStep findUnique
   */
  export type recipeStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeStep
     */
    select?: recipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeStep
     */
    omit?: recipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeStepInclude<ExtArgs> | null
    /**
     * Filter, which recipeStep to fetch.
     */
    where: recipeStepWhereUniqueInput
  }

  /**
   * recipeStep findUniqueOrThrow
   */
  export type recipeStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeStep
     */
    select?: recipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeStep
     */
    omit?: recipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeStepInclude<ExtArgs> | null
    /**
     * Filter, which recipeStep to fetch.
     */
    where: recipeStepWhereUniqueInput
  }

  /**
   * recipeStep findFirst
   */
  export type recipeStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeStep
     */
    select?: recipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeStep
     */
    omit?: recipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeStepInclude<ExtArgs> | null
    /**
     * Filter, which recipeStep to fetch.
     */
    where?: recipeStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipeSteps to fetch.
     */
    orderBy?: recipeStepOrderByWithRelationInput | recipeStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipeSteps.
     */
    cursor?: recipeStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipeSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipeSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipeSteps.
     */
    distinct?: RecipeStepScalarFieldEnum | RecipeStepScalarFieldEnum[]
  }

  /**
   * recipeStep findFirstOrThrow
   */
  export type recipeStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeStep
     */
    select?: recipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeStep
     */
    omit?: recipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeStepInclude<ExtArgs> | null
    /**
     * Filter, which recipeStep to fetch.
     */
    where?: recipeStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipeSteps to fetch.
     */
    orderBy?: recipeStepOrderByWithRelationInput | recipeStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipeSteps.
     */
    cursor?: recipeStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipeSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipeSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipeSteps.
     */
    distinct?: RecipeStepScalarFieldEnum | RecipeStepScalarFieldEnum[]
  }

  /**
   * recipeStep findMany
   */
  export type recipeStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeStep
     */
    select?: recipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeStep
     */
    omit?: recipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeStepInclude<ExtArgs> | null
    /**
     * Filter, which recipeSteps to fetch.
     */
    where?: recipeStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipeSteps to fetch.
     */
    orderBy?: recipeStepOrderByWithRelationInput | recipeStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recipeSteps.
     */
    cursor?: recipeStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipeSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipeSteps.
     */
    skip?: number
    distinct?: RecipeStepScalarFieldEnum | RecipeStepScalarFieldEnum[]
  }

  /**
   * recipeStep create
   */
  export type recipeStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeStep
     */
    select?: recipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeStep
     */
    omit?: recipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeStepInclude<ExtArgs> | null
    /**
     * The data needed to create a recipeStep.
     */
    data: XOR<recipeStepCreateInput, recipeStepUncheckedCreateInput>
  }

  /**
   * recipeStep createMany
   */
  export type recipeStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recipeSteps.
     */
    data: recipeStepCreateManyInput | recipeStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recipeStep createManyAndReturn
   */
  export type recipeStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeStep
     */
    select?: recipeStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recipeStep
     */
    omit?: recipeStepOmit<ExtArgs> | null
    /**
     * The data used to create many recipeSteps.
     */
    data: recipeStepCreateManyInput | recipeStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * recipeStep update
   */
  export type recipeStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeStep
     */
    select?: recipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeStep
     */
    omit?: recipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeStepInclude<ExtArgs> | null
    /**
     * The data needed to update a recipeStep.
     */
    data: XOR<recipeStepUpdateInput, recipeStepUncheckedUpdateInput>
    /**
     * Choose, which recipeStep to update.
     */
    where: recipeStepWhereUniqueInput
  }

  /**
   * recipeStep updateMany
   */
  export type recipeStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recipeSteps.
     */
    data: XOR<recipeStepUpdateManyMutationInput, recipeStepUncheckedUpdateManyInput>
    /**
     * Filter which recipeSteps to update
     */
    where?: recipeStepWhereInput
    /**
     * Limit how many recipeSteps to update.
     */
    limit?: number
  }

  /**
   * recipeStep updateManyAndReturn
   */
  export type recipeStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeStep
     */
    select?: recipeStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recipeStep
     */
    omit?: recipeStepOmit<ExtArgs> | null
    /**
     * The data used to update recipeSteps.
     */
    data: XOR<recipeStepUpdateManyMutationInput, recipeStepUncheckedUpdateManyInput>
    /**
     * Filter which recipeSteps to update
     */
    where?: recipeStepWhereInput
    /**
     * Limit how many recipeSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * recipeStep upsert
   */
  export type recipeStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeStep
     */
    select?: recipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeStep
     */
    omit?: recipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeStepInclude<ExtArgs> | null
    /**
     * The filter to search for the recipeStep to update in case it exists.
     */
    where: recipeStepWhereUniqueInput
    /**
     * In case the recipeStep found by the `where` argument doesn't exist, create a new recipeStep with this data.
     */
    create: XOR<recipeStepCreateInput, recipeStepUncheckedCreateInput>
    /**
     * In case the recipeStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recipeStepUpdateInput, recipeStepUncheckedUpdateInput>
  }

  /**
   * recipeStep delete
   */
  export type recipeStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeStep
     */
    select?: recipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeStep
     */
    omit?: recipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeStepInclude<ExtArgs> | null
    /**
     * Filter which recipeStep to delete.
     */
    where: recipeStepWhereUniqueInput
  }

  /**
   * recipeStep deleteMany
   */
  export type recipeStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipeSteps to delete
     */
    where?: recipeStepWhereInput
    /**
     * Limit how many recipeSteps to delete.
     */
    limit?: number
  }

  /**
   * recipeStep without action
   */
  export type recipeStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeStep
     */
    select?: recipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeStep
     */
    omit?: recipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeStepInclude<ExtArgs> | null
  }


  /**
   * Model recipeItem
   */

  export type AggregateRecipeItem = {
    _count: RecipeItemCountAggregateOutputType | null
    _avg: RecipeItemAvgAggregateOutputType | null
    _sum: RecipeItemSumAggregateOutputType | null
    _min: RecipeItemMinAggregateOutputType | null
    _max: RecipeItemMaxAggregateOutputType | null
  }

  export type RecipeItemAvgAggregateOutputType = {
    id: number | null
    recipeId: number | null
  }

  export type RecipeItemSumAggregateOutputType = {
    id: number | null
    recipeId: number | null
  }

  export type RecipeItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    quantity: string | null
    recipeId: number | null
  }

  export type RecipeItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    quantity: string | null
    recipeId: number | null
  }

  export type RecipeItemCountAggregateOutputType = {
    id: number
    name: number
    quantity: number
    recipeId: number
    _all: number
  }


  export type RecipeItemAvgAggregateInputType = {
    id?: true
    recipeId?: true
  }

  export type RecipeItemSumAggregateInputType = {
    id?: true
    recipeId?: true
  }

  export type RecipeItemMinAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    recipeId?: true
  }

  export type RecipeItemMaxAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    recipeId?: true
  }

  export type RecipeItemCountAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    recipeId?: true
    _all?: true
  }

  export type RecipeItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipeItem to aggregate.
     */
    where?: recipeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipeItems to fetch.
     */
    orderBy?: recipeItemOrderByWithRelationInput | recipeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recipeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recipeItems
    **/
    _count?: true | RecipeItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeItemMaxAggregateInputType
  }

  export type GetRecipeItemAggregateType<T extends RecipeItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeItem[P]>
      : GetScalarType<T[P], AggregateRecipeItem[P]>
  }




  export type recipeItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipeItemWhereInput
    orderBy?: recipeItemOrderByWithAggregationInput | recipeItemOrderByWithAggregationInput[]
    by: RecipeItemScalarFieldEnum[] | RecipeItemScalarFieldEnum
    having?: recipeItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeItemCountAggregateInputType | true
    _avg?: RecipeItemAvgAggregateInputType
    _sum?: RecipeItemSumAggregateInputType
    _min?: RecipeItemMinAggregateInputType
    _max?: RecipeItemMaxAggregateInputType
  }

  export type RecipeItemGroupByOutputType = {
    id: number
    name: string
    quantity: string | null
    recipeId: number
    _count: RecipeItemCountAggregateOutputType | null
    _avg: RecipeItemAvgAggregateOutputType | null
    _sum: RecipeItemSumAggregateOutputType | null
    _min: RecipeItemMinAggregateOutputType | null
    _max: RecipeItemMaxAggregateOutputType | null
  }

  type GetRecipeItemGroupByPayload<T extends recipeItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeItemGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeItemGroupByOutputType[P]>
        }
      >
    >


  export type recipeItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeItem"]>

  export type recipeItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeItem"]>

  export type recipeItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeItem"]>

  export type recipeItemSelectScalar = {
    id?: boolean
    name?: boolean
    quantity?: boolean
    recipeId?: boolean
  }

  export type recipeItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "quantity" | "recipeId", ExtArgs["result"]["recipeItem"]>
  export type recipeItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }
  export type recipeItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }
  export type recipeItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }

  export type $recipeItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recipeItem"
    objects: {
      recipe: Prisma.$recipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      quantity: string | null
      recipeId: number
    }, ExtArgs["result"]["recipeItem"]>
    composites: {}
  }

  type recipeItemGetPayload<S extends boolean | null | undefined | recipeItemDefaultArgs> = $Result.GetResult<Prisma.$recipeItemPayload, S>

  type recipeItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recipeItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeItemCountAggregateInputType | true
    }

  export interface recipeItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recipeItem'], meta: { name: 'recipeItem' } }
    /**
     * Find zero or one RecipeItem that matches the filter.
     * @param {recipeItemFindUniqueArgs} args - Arguments to find a RecipeItem
     * @example
     * // Get one RecipeItem
     * const recipeItem = await prisma.recipeItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recipeItemFindUniqueArgs>(args: SelectSubset<T, recipeItemFindUniqueArgs<ExtArgs>>): Prisma__recipeItemClient<$Result.GetResult<Prisma.$recipeItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recipeItemFindUniqueOrThrowArgs} args - Arguments to find a RecipeItem
     * @example
     * // Get one RecipeItem
     * const recipeItem = await prisma.recipeItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recipeItemFindUniqueOrThrowArgs>(args: SelectSubset<T, recipeItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recipeItemClient<$Result.GetResult<Prisma.$recipeItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeItemFindFirstArgs} args - Arguments to find a RecipeItem
     * @example
     * // Get one RecipeItem
     * const recipeItem = await prisma.recipeItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recipeItemFindFirstArgs>(args?: SelectSubset<T, recipeItemFindFirstArgs<ExtArgs>>): Prisma__recipeItemClient<$Result.GetResult<Prisma.$recipeItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeItemFindFirstOrThrowArgs} args - Arguments to find a RecipeItem
     * @example
     * // Get one RecipeItem
     * const recipeItem = await prisma.recipeItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recipeItemFindFirstOrThrowArgs>(args?: SelectSubset<T, recipeItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__recipeItemClient<$Result.GetResult<Prisma.$recipeItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeItems
     * const recipeItems = await prisma.recipeItem.findMany()
     * 
     * // Get first 10 RecipeItems
     * const recipeItems = await prisma.recipeItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeItemWithIdOnly = await prisma.recipeItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recipeItemFindManyArgs>(args?: SelectSubset<T, recipeItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeItem.
     * @param {recipeItemCreateArgs} args - Arguments to create a RecipeItem.
     * @example
     * // Create one RecipeItem
     * const RecipeItem = await prisma.recipeItem.create({
     *   data: {
     *     // ... data to create a RecipeItem
     *   }
     * })
     * 
     */
    create<T extends recipeItemCreateArgs>(args: SelectSubset<T, recipeItemCreateArgs<ExtArgs>>): Prisma__recipeItemClient<$Result.GetResult<Prisma.$recipeItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeItems.
     * @param {recipeItemCreateManyArgs} args - Arguments to create many RecipeItems.
     * @example
     * // Create many RecipeItems
     * const recipeItem = await prisma.recipeItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recipeItemCreateManyArgs>(args?: SelectSubset<T, recipeItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeItems and returns the data saved in the database.
     * @param {recipeItemCreateManyAndReturnArgs} args - Arguments to create many RecipeItems.
     * @example
     * // Create many RecipeItems
     * const recipeItem = await prisma.recipeItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeItems and only return the `id`
     * const recipeItemWithIdOnly = await prisma.recipeItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recipeItemCreateManyAndReturnArgs>(args?: SelectSubset<T, recipeItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipeItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeItem.
     * @param {recipeItemDeleteArgs} args - Arguments to delete one RecipeItem.
     * @example
     * // Delete one RecipeItem
     * const RecipeItem = await prisma.recipeItem.delete({
     *   where: {
     *     // ... filter to delete one RecipeItem
     *   }
     * })
     * 
     */
    delete<T extends recipeItemDeleteArgs>(args: SelectSubset<T, recipeItemDeleteArgs<ExtArgs>>): Prisma__recipeItemClient<$Result.GetResult<Prisma.$recipeItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeItem.
     * @param {recipeItemUpdateArgs} args - Arguments to update one RecipeItem.
     * @example
     * // Update one RecipeItem
     * const recipeItem = await prisma.recipeItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recipeItemUpdateArgs>(args: SelectSubset<T, recipeItemUpdateArgs<ExtArgs>>): Prisma__recipeItemClient<$Result.GetResult<Prisma.$recipeItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeItems.
     * @param {recipeItemDeleteManyArgs} args - Arguments to filter RecipeItems to delete.
     * @example
     * // Delete a few RecipeItems
     * const { count } = await prisma.recipeItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recipeItemDeleteManyArgs>(args?: SelectSubset<T, recipeItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeItems
     * const recipeItem = await prisma.recipeItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recipeItemUpdateManyArgs>(args: SelectSubset<T, recipeItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeItems and returns the data updated in the database.
     * @param {recipeItemUpdateManyAndReturnArgs} args - Arguments to update many RecipeItems.
     * @example
     * // Update many RecipeItems
     * const recipeItem = await prisma.recipeItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeItems and only return the `id`
     * const recipeItemWithIdOnly = await prisma.recipeItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recipeItemUpdateManyAndReturnArgs>(args: SelectSubset<T, recipeItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipeItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeItem.
     * @param {recipeItemUpsertArgs} args - Arguments to update or create a RecipeItem.
     * @example
     * // Update or create a RecipeItem
     * const recipeItem = await prisma.recipeItem.upsert({
     *   create: {
     *     // ... data to create a RecipeItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeItem we want to update
     *   }
     * })
     */
    upsert<T extends recipeItemUpsertArgs>(args: SelectSubset<T, recipeItemUpsertArgs<ExtArgs>>): Prisma__recipeItemClient<$Result.GetResult<Prisma.$recipeItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeItemCountArgs} args - Arguments to filter RecipeItems to count.
     * @example
     * // Count the number of RecipeItems
     * const count = await prisma.recipeItem.count({
     *   where: {
     *     // ... the filter for the RecipeItems we want to count
     *   }
     * })
    **/
    count<T extends recipeItemCountArgs>(
      args?: Subset<T, recipeItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeItemAggregateArgs>(args: Subset<T, RecipeItemAggregateArgs>): Prisma.PrismaPromise<GetRecipeItemAggregateType<T>>

    /**
     * Group by RecipeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recipeItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recipeItemGroupByArgs['orderBy'] }
        : { orderBy?: recipeItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recipeItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recipeItem model
   */
  readonly fields: recipeItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recipeItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recipeItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends recipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recipeDefaultArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recipeItem model
   */
  interface recipeItemFieldRefs {
    readonly id: FieldRef<"recipeItem", 'Int'>
    readonly name: FieldRef<"recipeItem", 'String'>
    readonly quantity: FieldRef<"recipeItem", 'String'>
    readonly recipeId: FieldRef<"recipeItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * recipeItem findUnique
   */
  export type recipeItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeItem
     */
    select?: recipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeItem
     */
    omit?: recipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeItemInclude<ExtArgs> | null
    /**
     * Filter, which recipeItem to fetch.
     */
    where: recipeItemWhereUniqueInput
  }

  /**
   * recipeItem findUniqueOrThrow
   */
  export type recipeItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeItem
     */
    select?: recipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeItem
     */
    omit?: recipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeItemInclude<ExtArgs> | null
    /**
     * Filter, which recipeItem to fetch.
     */
    where: recipeItemWhereUniqueInput
  }

  /**
   * recipeItem findFirst
   */
  export type recipeItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeItem
     */
    select?: recipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeItem
     */
    omit?: recipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeItemInclude<ExtArgs> | null
    /**
     * Filter, which recipeItem to fetch.
     */
    where?: recipeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipeItems to fetch.
     */
    orderBy?: recipeItemOrderByWithRelationInput | recipeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipeItems.
     */
    cursor?: recipeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipeItems.
     */
    distinct?: RecipeItemScalarFieldEnum | RecipeItemScalarFieldEnum[]
  }

  /**
   * recipeItem findFirstOrThrow
   */
  export type recipeItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeItem
     */
    select?: recipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeItem
     */
    omit?: recipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeItemInclude<ExtArgs> | null
    /**
     * Filter, which recipeItem to fetch.
     */
    where?: recipeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipeItems to fetch.
     */
    orderBy?: recipeItemOrderByWithRelationInput | recipeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipeItems.
     */
    cursor?: recipeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipeItems.
     */
    distinct?: RecipeItemScalarFieldEnum | RecipeItemScalarFieldEnum[]
  }

  /**
   * recipeItem findMany
   */
  export type recipeItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeItem
     */
    select?: recipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeItem
     */
    omit?: recipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeItemInclude<ExtArgs> | null
    /**
     * Filter, which recipeItems to fetch.
     */
    where?: recipeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipeItems to fetch.
     */
    orderBy?: recipeItemOrderByWithRelationInput | recipeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recipeItems.
     */
    cursor?: recipeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipeItems.
     */
    skip?: number
    distinct?: RecipeItemScalarFieldEnum | RecipeItemScalarFieldEnum[]
  }

  /**
   * recipeItem create
   */
  export type recipeItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeItem
     */
    select?: recipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeItem
     */
    omit?: recipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeItemInclude<ExtArgs> | null
    /**
     * The data needed to create a recipeItem.
     */
    data: XOR<recipeItemCreateInput, recipeItemUncheckedCreateInput>
  }

  /**
   * recipeItem createMany
   */
  export type recipeItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recipeItems.
     */
    data: recipeItemCreateManyInput | recipeItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recipeItem createManyAndReturn
   */
  export type recipeItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeItem
     */
    select?: recipeItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recipeItem
     */
    omit?: recipeItemOmit<ExtArgs> | null
    /**
     * The data used to create many recipeItems.
     */
    data: recipeItemCreateManyInput | recipeItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * recipeItem update
   */
  export type recipeItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeItem
     */
    select?: recipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeItem
     */
    omit?: recipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeItemInclude<ExtArgs> | null
    /**
     * The data needed to update a recipeItem.
     */
    data: XOR<recipeItemUpdateInput, recipeItemUncheckedUpdateInput>
    /**
     * Choose, which recipeItem to update.
     */
    where: recipeItemWhereUniqueInput
  }

  /**
   * recipeItem updateMany
   */
  export type recipeItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recipeItems.
     */
    data: XOR<recipeItemUpdateManyMutationInput, recipeItemUncheckedUpdateManyInput>
    /**
     * Filter which recipeItems to update
     */
    where?: recipeItemWhereInput
    /**
     * Limit how many recipeItems to update.
     */
    limit?: number
  }

  /**
   * recipeItem updateManyAndReturn
   */
  export type recipeItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeItem
     */
    select?: recipeItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recipeItem
     */
    omit?: recipeItemOmit<ExtArgs> | null
    /**
     * The data used to update recipeItems.
     */
    data: XOR<recipeItemUpdateManyMutationInput, recipeItemUncheckedUpdateManyInput>
    /**
     * Filter which recipeItems to update
     */
    where?: recipeItemWhereInput
    /**
     * Limit how many recipeItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * recipeItem upsert
   */
  export type recipeItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeItem
     */
    select?: recipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeItem
     */
    omit?: recipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeItemInclude<ExtArgs> | null
    /**
     * The filter to search for the recipeItem to update in case it exists.
     */
    where: recipeItemWhereUniqueInput
    /**
     * In case the recipeItem found by the `where` argument doesn't exist, create a new recipeItem with this data.
     */
    create: XOR<recipeItemCreateInput, recipeItemUncheckedCreateInput>
    /**
     * In case the recipeItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recipeItemUpdateInput, recipeItemUncheckedUpdateInput>
  }

  /**
   * recipeItem delete
   */
  export type recipeItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeItem
     */
    select?: recipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeItem
     */
    omit?: recipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeItemInclude<ExtArgs> | null
    /**
     * Filter which recipeItem to delete.
     */
    where: recipeItemWhereUniqueInput
  }

  /**
   * recipeItem deleteMany
   */
  export type recipeItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipeItems to delete
     */
    where?: recipeItemWhereInput
    /**
     * Limit how many recipeItems to delete.
     */
    limit?: number
  }

  /**
   * recipeItem without action
   */
  export type recipeItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipeItem
     */
    select?: recipeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipeItem
     */
    omit?: recipeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeItemInclude<ExtArgs> | null
  }


  /**
   * Model familyRecipe
   */

  export type AggregateFamilyRecipe = {
    _count: FamilyRecipeCountAggregateOutputType | null
    _avg: FamilyRecipeAvgAggregateOutputType | null
    _sum: FamilyRecipeSumAggregateOutputType | null
    _min: FamilyRecipeMinAggregateOutputType | null
    _max: FamilyRecipeMaxAggregateOutputType | null
  }

  export type FamilyRecipeAvgAggregateOutputType = {
    familyId: number | null
    recipeId: number | null
  }

  export type FamilyRecipeSumAggregateOutputType = {
    familyId: number | null
    recipeId: number | null
  }

  export type FamilyRecipeMinAggregateOutputType = {
    familyId: number | null
    recipeId: number | null
  }

  export type FamilyRecipeMaxAggregateOutputType = {
    familyId: number | null
    recipeId: number | null
  }

  export type FamilyRecipeCountAggregateOutputType = {
    familyId: number
    recipeId: number
    _all: number
  }


  export type FamilyRecipeAvgAggregateInputType = {
    familyId?: true
    recipeId?: true
  }

  export type FamilyRecipeSumAggregateInputType = {
    familyId?: true
    recipeId?: true
  }

  export type FamilyRecipeMinAggregateInputType = {
    familyId?: true
    recipeId?: true
  }

  export type FamilyRecipeMaxAggregateInputType = {
    familyId?: true
    recipeId?: true
  }

  export type FamilyRecipeCountAggregateInputType = {
    familyId?: true
    recipeId?: true
    _all?: true
  }

  export type FamilyRecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which familyRecipe to aggregate.
     */
    where?: familyRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familyRecipes to fetch.
     */
    orderBy?: familyRecipeOrderByWithRelationInput | familyRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: familyRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familyRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familyRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned familyRecipes
    **/
    _count?: true | FamilyRecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FamilyRecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FamilyRecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyRecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyRecipeMaxAggregateInputType
  }

  export type GetFamilyRecipeAggregateType<T extends FamilyRecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateFamilyRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamilyRecipe[P]>
      : GetScalarType<T[P], AggregateFamilyRecipe[P]>
  }




  export type familyRecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: familyRecipeWhereInput
    orderBy?: familyRecipeOrderByWithAggregationInput | familyRecipeOrderByWithAggregationInput[]
    by: FamilyRecipeScalarFieldEnum[] | FamilyRecipeScalarFieldEnum
    having?: familyRecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyRecipeCountAggregateInputType | true
    _avg?: FamilyRecipeAvgAggregateInputType
    _sum?: FamilyRecipeSumAggregateInputType
    _min?: FamilyRecipeMinAggregateInputType
    _max?: FamilyRecipeMaxAggregateInputType
  }

  export type FamilyRecipeGroupByOutputType = {
    familyId: number
    recipeId: number
    _count: FamilyRecipeCountAggregateOutputType | null
    _avg: FamilyRecipeAvgAggregateOutputType | null
    _sum: FamilyRecipeSumAggregateOutputType | null
    _min: FamilyRecipeMinAggregateOutputType | null
    _max: FamilyRecipeMaxAggregateOutputType | null
  }

  type GetFamilyRecipeGroupByPayload<T extends familyRecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyRecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyRecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyRecipeGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyRecipeGroupByOutputType[P]>
        }
      >
    >


  export type familyRecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    familyId?: boolean
    recipeId?: boolean
    family?: boolean | familyDefaultArgs<ExtArgs>
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familyRecipe"]>

  export type familyRecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    familyId?: boolean
    recipeId?: boolean
    family?: boolean | familyDefaultArgs<ExtArgs>
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familyRecipe"]>

  export type familyRecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    familyId?: boolean
    recipeId?: boolean
    family?: boolean | familyDefaultArgs<ExtArgs>
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familyRecipe"]>

  export type familyRecipeSelectScalar = {
    familyId?: boolean
    recipeId?: boolean
  }

  export type familyRecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"familyId" | "recipeId", ExtArgs["result"]["familyRecipe"]>
  export type familyRecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | familyDefaultArgs<ExtArgs>
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }
  export type familyRecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | familyDefaultArgs<ExtArgs>
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }
  export type familyRecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | familyDefaultArgs<ExtArgs>
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }

  export type $familyRecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "familyRecipe"
    objects: {
      family: Prisma.$familyPayload<ExtArgs>
      recipe: Prisma.$recipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      familyId: number
      recipeId: number
    }, ExtArgs["result"]["familyRecipe"]>
    composites: {}
  }

  type familyRecipeGetPayload<S extends boolean | null | undefined | familyRecipeDefaultArgs> = $Result.GetResult<Prisma.$familyRecipePayload, S>

  type familyRecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<familyRecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FamilyRecipeCountAggregateInputType | true
    }

  export interface familyRecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['familyRecipe'], meta: { name: 'familyRecipe' } }
    /**
     * Find zero or one FamilyRecipe that matches the filter.
     * @param {familyRecipeFindUniqueArgs} args - Arguments to find a FamilyRecipe
     * @example
     * // Get one FamilyRecipe
     * const familyRecipe = await prisma.familyRecipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends familyRecipeFindUniqueArgs>(args: SelectSubset<T, familyRecipeFindUniqueArgs<ExtArgs>>): Prisma__familyRecipeClient<$Result.GetResult<Prisma.$familyRecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FamilyRecipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {familyRecipeFindUniqueOrThrowArgs} args - Arguments to find a FamilyRecipe
     * @example
     * // Get one FamilyRecipe
     * const familyRecipe = await prisma.familyRecipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends familyRecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, familyRecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__familyRecipeClient<$Result.GetResult<Prisma.$familyRecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FamilyRecipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyRecipeFindFirstArgs} args - Arguments to find a FamilyRecipe
     * @example
     * // Get one FamilyRecipe
     * const familyRecipe = await prisma.familyRecipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends familyRecipeFindFirstArgs>(args?: SelectSubset<T, familyRecipeFindFirstArgs<ExtArgs>>): Prisma__familyRecipeClient<$Result.GetResult<Prisma.$familyRecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FamilyRecipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyRecipeFindFirstOrThrowArgs} args - Arguments to find a FamilyRecipe
     * @example
     * // Get one FamilyRecipe
     * const familyRecipe = await prisma.familyRecipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends familyRecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, familyRecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__familyRecipeClient<$Result.GetResult<Prisma.$familyRecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FamilyRecipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyRecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FamilyRecipes
     * const familyRecipes = await prisma.familyRecipe.findMany()
     * 
     * // Get first 10 FamilyRecipes
     * const familyRecipes = await prisma.familyRecipe.findMany({ take: 10 })
     * 
     * // Only select the `familyId`
     * const familyRecipeWithFamilyIdOnly = await prisma.familyRecipe.findMany({ select: { familyId: true } })
     * 
     */
    findMany<T extends familyRecipeFindManyArgs>(args?: SelectSubset<T, familyRecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familyRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FamilyRecipe.
     * @param {familyRecipeCreateArgs} args - Arguments to create a FamilyRecipe.
     * @example
     * // Create one FamilyRecipe
     * const FamilyRecipe = await prisma.familyRecipe.create({
     *   data: {
     *     // ... data to create a FamilyRecipe
     *   }
     * })
     * 
     */
    create<T extends familyRecipeCreateArgs>(args: SelectSubset<T, familyRecipeCreateArgs<ExtArgs>>): Prisma__familyRecipeClient<$Result.GetResult<Prisma.$familyRecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FamilyRecipes.
     * @param {familyRecipeCreateManyArgs} args - Arguments to create many FamilyRecipes.
     * @example
     * // Create many FamilyRecipes
     * const familyRecipe = await prisma.familyRecipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends familyRecipeCreateManyArgs>(args?: SelectSubset<T, familyRecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FamilyRecipes and returns the data saved in the database.
     * @param {familyRecipeCreateManyAndReturnArgs} args - Arguments to create many FamilyRecipes.
     * @example
     * // Create many FamilyRecipes
     * const familyRecipe = await prisma.familyRecipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FamilyRecipes and only return the `familyId`
     * const familyRecipeWithFamilyIdOnly = await prisma.familyRecipe.createManyAndReturn({
     *   select: { familyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends familyRecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, familyRecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familyRecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FamilyRecipe.
     * @param {familyRecipeDeleteArgs} args - Arguments to delete one FamilyRecipe.
     * @example
     * // Delete one FamilyRecipe
     * const FamilyRecipe = await prisma.familyRecipe.delete({
     *   where: {
     *     // ... filter to delete one FamilyRecipe
     *   }
     * })
     * 
     */
    delete<T extends familyRecipeDeleteArgs>(args: SelectSubset<T, familyRecipeDeleteArgs<ExtArgs>>): Prisma__familyRecipeClient<$Result.GetResult<Prisma.$familyRecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FamilyRecipe.
     * @param {familyRecipeUpdateArgs} args - Arguments to update one FamilyRecipe.
     * @example
     * // Update one FamilyRecipe
     * const familyRecipe = await prisma.familyRecipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends familyRecipeUpdateArgs>(args: SelectSubset<T, familyRecipeUpdateArgs<ExtArgs>>): Prisma__familyRecipeClient<$Result.GetResult<Prisma.$familyRecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FamilyRecipes.
     * @param {familyRecipeDeleteManyArgs} args - Arguments to filter FamilyRecipes to delete.
     * @example
     * // Delete a few FamilyRecipes
     * const { count } = await prisma.familyRecipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends familyRecipeDeleteManyArgs>(args?: SelectSubset<T, familyRecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FamilyRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyRecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FamilyRecipes
     * const familyRecipe = await prisma.familyRecipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends familyRecipeUpdateManyArgs>(args: SelectSubset<T, familyRecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FamilyRecipes and returns the data updated in the database.
     * @param {familyRecipeUpdateManyAndReturnArgs} args - Arguments to update many FamilyRecipes.
     * @example
     * // Update many FamilyRecipes
     * const familyRecipe = await prisma.familyRecipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FamilyRecipes and only return the `familyId`
     * const familyRecipeWithFamilyIdOnly = await prisma.familyRecipe.updateManyAndReturn({
     *   select: { familyId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends familyRecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, familyRecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familyRecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FamilyRecipe.
     * @param {familyRecipeUpsertArgs} args - Arguments to update or create a FamilyRecipe.
     * @example
     * // Update or create a FamilyRecipe
     * const familyRecipe = await prisma.familyRecipe.upsert({
     *   create: {
     *     // ... data to create a FamilyRecipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FamilyRecipe we want to update
     *   }
     * })
     */
    upsert<T extends familyRecipeUpsertArgs>(args: SelectSubset<T, familyRecipeUpsertArgs<ExtArgs>>): Prisma__familyRecipeClient<$Result.GetResult<Prisma.$familyRecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FamilyRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyRecipeCountArgs} args - Arguments to filter FamilyRecipes to count.
     * @example
     * // Count the number of FamilyRecipes
     * const count = await prisma.familyRecipe.count({
     *   where: {
     *     // ... the filter for the FamilyRecipes we want to count
     *   }
     * })
    **/
    count<T extends familyRecipeCountArgs>(
      args?: Subset<T, familyRecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyRecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FamilyRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyRecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FamilyRecipeAggregateArgs>(args: Subset<T, FamilyRecipeAggregateArgs>): Prisma.PrismaPromise<GetFamilyRecipeAggregateType<T>>

    /**
     * Group by FamilyRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familyRecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends familyRecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: familyRecipeGroupByArgs['orderBy'] }
        : { orderBy?: familyRecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, familyRecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the familyRecipe model
   */
  readonly fields: familyRecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for familyRecipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__familyRecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    family<T extends familyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, familyDefaultArgs<ExtArgs>>): Prisma__familyClient<$Result.GetResult<Prisma.$familyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipe<T extends recipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recipeDefaultArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the familyRecipe model
   */
  interface familyRecipeFieldRefs {
    readonly familyId: FieldRef<"familyRecipe", 'Int'>
    readonly recipeId: FieldRef<"familyRecipe", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * familyRecipe findUnique
   */
  export type familyRecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyRecipe
     */
    select?: familyRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyRecipe
     */
    omit?: familyRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyRecipeInclude<ExtArgs> | null
    /**
     * Filter, which familyRecipe to fetch.
     */
    where: familyRecipeWhereUniqueInput
  }

  /**
   * familyRecipe findUniqueOrThrow
   */
  export type familyRecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyRecipe
     */
    select?: familyRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyRecipe
     */
    omit?: familyRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyRecipeInclude<ExtArgs> | null
    /**
     * Filter, which familyRecipe to fetch.
     */
    where: familyRecipeWhereUniqueInput
  }

  /**
   * familyRecipe findFirst
   */
  export type familyRecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyRecipe
     */
    select?: familyRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyRecipe
     */
    omit?: familyRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyRecipeInclude<ExtArgs> | null
    /**
     * Filter, which familyRecipe to fetch.
     */
    where?: familyRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familyRecipes to fetch.
     */
    orderBy?: familyRecipeOrderByWithRelationInput | familyRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for familyRecipes.
     */
    cursor?: familyRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familyRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familyRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of familyRecipes.
     */
    distinct?: FamilyRecipeScalarFieldEnum | FamilyRecipeScalarFieldEnum[]
  }

  /**
   * familyRecipe findFirstOrThrow
   */
  export type familyRecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyRecipe
     */
    select?: familyRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyRecipe
     */
    omit?: familyRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyRecipeInclude<ExtArgs> | null
    /**
     * Filter, which familyRecipe to fetch.
     */
    where?: familyRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familyRecipes to fetch.
     */
    orderBy?: familyRecipeOrderByWithRelationInput | familyRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for familyRecipes.
     */
    cursor?: familyRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familyRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familyRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of familyRecipes.
     */
    distinct?: FamilyRecipeScalarFieldEnum | FamilyRecipeScalarFieldEnum[]
  }

  /**
   * familyRecipe findMany
   */
  export type familyRecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyRecipe
     */
    select?: familyRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyRecipe
     */
    omit?: familyRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyRecipeInclude<ExtArgs> | null
    /**
     * Filter, which familyRecipes to fetch.
     */
    where?: familyRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familyRecipes to fetch.
     */
    orderBy?: familyRecipeOrderByWithRelationInput | familyRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing familyRecipes.
     */
    cursor?: familyRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familyRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familyRecipes.
     */
    skip?: number
    distinct?: FamilyRecipeScalarFieldEnum | FamilyRecipeScalarFieldEnum[]
  }

  /**
   * familyRecipe create
   */
  export type familyRecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyRecipe
     */
    select?: familyRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyRecipe
     */
    omit?: familyRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyRecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a familyRecipe.
     */
    data: XOR<familyRecipeCreateInput, familyRecipeUncheckedCreateInput>
  }

  /**
   * familyRecipe createMany
   */
  export type familyRecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many familyRecipes.
     */
    data: familyRecipeCreateManyInput | familyRecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * familyRecipe createManyAndReturn
   */
  export type familyRecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyRecipe
     */
    select?: familyRecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the familyRecipe
     */
    omit?: familyRecipeOmit<ExtArgs> | null
    /**
     * The data used to create many familyRecipes.
     */
    data: familyRecipeCreateManyInput | familyRecipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyRecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * familyRecipe update
   */
  export type familyRecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyRecipe
     */
    select?: familyRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyRecipe
     */
    omit?: familyRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyRecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a familyRecipe.
     */
    data: XOR<familyRecipeUpdateInput, familyRecipeUncheckedUpdateInput>
    /**
     * Choose, which familyRecipe to update.
     */
    where: familyRecipeWhereUniqueInput
  }

  /**
   * familyRecipe updateMany
   */
  export type familyRecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update familyRecipes.
     */
    data: XOR<familyRecipeUpdateManyMutationInput, familyRecipeUncheckedUpdateManyInput>
    /**
     * Filter which familyRecipes to update
     */
    where?: familyRecipeWhereInput
    /**
     * Limit how many familyRecipes to update.
     */
    limit?: number
  }

  /**
   * familyRecipe updateManyAndReturn
   */
  export type familyRecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyRecipe
     */
    select?: familyRecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the familyRecipe
     */
    omit?: familyRecipeOmit<ExtArgs> | null
    /**
     * The data used to update familyRecipes.
     */
    data: XOR<familyRecipeUpdateManyMutationInput, familyRecipeUncheckedUpdateManyInput>
    /**
     * Filter which familyRecipes to update
     */
    where?: familyRecipeWhereInput
    /**
     * Limit how many familyRecipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyRecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * familyRecipe upsert
   */
  export type familyRecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyRecipe
     */
    select?: familyRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyRecipe
     */
    omit?: familyRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyRecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the familyRecipe to update in case it exists.
     */
    where: familyRecipeWhereUniqueInput
    /**
     * In case the familyRecipe found by the `where` argument doesn't exist, create a new familyRecipe with this data.
     */
    create: XOR<familyRecipeCreateInput, familyRecipeUncheckedCreateInput>
    /**
     * In case the familyRecipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<familyRecipeUpdateInput, familyRecipeUncheckedUpdateInput>
  }

  /**
   * familyRecipe delete
   */
  export type familyRecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyRecipe
     */
    select?: familyRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyRecipe
     */
    omit?: familyRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyRecipeInclude<ExtArgs> | null
    /**
     * Filter which familyRecipe to delete.
     */
    where: familyRecipeWhereUniqueInput
  }

  /**
   * familyRecipe deleteMany
   */
  export type familyRecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which familyRecipes to delete
     */
    where?: familyRecipeWhereInput
    /**
     * Limit how many familyRecipes to delete.
     */
    limit?: number
  }

  /**
   * familyRecipe without action
   */
  export type familyRecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familyRecipe
     */
    select?: familyRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familyRecipe
     */
    omit?: familyRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familyRecipeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FamilyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code'
  };

  export type FamilyScalarFieldEnum = (typeof FamilyScalarFieldEnum)[keyof typeof FamilyScalarFieldEnum]


  export const ShoppingListScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ShoppingListScalarFieldEnum = (typeof ShoppingListScalarFieldEnum)[keyof typeof ShoppingListScalarFieldEnum]


  export const FamilyShoppingListScalarFieldEnum: {
    familyId: 'familyId',
    shoppingListId: 'shoppingListId'
  };

  export type FamilyShoppingListScalarFieldEnum = (typeof FamilyShoppingListScalarFieldEnum)[keyof typeof FamilyShoppingListScalarFieldEnum]


  export const ShoppingListItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    checked: 'checked',
    shoppingListId: 'shoppingListId'
  };

  export type ShoppingListItemScalarFieldEnum = (typeof ShoppingListItemScalarFieldEnum)[keyof typeof ShoppingListItemScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    duration: 'duration',
    image: 'image',
    public: 'public',
    provider: 'provider'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const RecipeStepScalarFieldEnum: {
    id: 'id',
    description: 'description',
    index: 'index',
    recipeId: 'recipeId'
  };

  export type RecipeStepScalarFieldEnum = (typeof RecipeStepScalarFieldEnum)[keyof typeof RecipeStepScalarFieldEnum]


  export const RecipeItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    quantity: 'quantity',
    recipeId: 'recipeId'
  };

  export type RecipeItemScalarFieldEnum = (typeof RecipeItemScalarFieldEnum)[keyof typeof RecipeItemScalarFieldEnum]


  export const FamilyRecipeScalarFieldEnum: {
    familyId: 'familyId',
    recipeId: 'recipeId'
  };

  export type FamilyRecipeScalarFieldEnum = (typeof FamilyRecipeScalarFieldEnum)[keyof typeof FamilyRecipeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type familyWhereInput = {
    AND?: familyWhereInput | familyWhereInput[]
    OR?: familyWhereInput[]
    NOT?: familyWhereInput | familyWhereInput[]
    id?: IntFilter<"family"> | number
    name?: StringFilter<"family"> | string
    code?: StringFilter<"family"> | string
    familyShoppingList?: FamilyShoppingListListRelationFilter
    familyRecipe?: FamilyRecipeListRelationFilter
  }

  export type familyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    familyShoppingList?: familyShoppingListOrderByRelationAggregateInput
    familyRecipe?: familyRecipeOrderByRelationAggregateInput
  }

  export type familyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: familyWhereInput | familyWhereInput[]
    OR?: familyWhereInput[]
    NOT?: familyWhereInput | familyWhereInput[]
    name?: StringFilter<"family"> | string
    code?: StringFilter<"family"> | string
    familyShoppingList?: FamilyShoppingListListRelationFilter
    familyRecipe?: FamilyRecipeListRelationFilter
  }, "id">

  export type familyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    _count?: familyCountOrderByAggregateInput
    _avg?: familyAvgOrderByAggregateInput
    _max?: familyMaxOrderByAggregateInput
    _min?: familyMinOrderByAggregateInput
    _sum?: familySumOrderByAggregateInput
  }

  export type familyScalarWhereWithAggregatesInput = {
    AND?: familyScalarWhereWithAggregatesInput | familyScalarWhereWithAggregatesInput[]
    OR?: familyScalarWhereWithAggregatesInput[]
    NOT?: familyScalarWhereWithAggregatesInput | familyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"family"> | number
    name?: StringWithAggregatesFilter<"family"> | string
    code?: StringWithAggregatesFilter<"family"> | string
  }

  export type shoppingListWhereInput = {
    AND?: shoppingListWhereInput | shoppingListWhereInput[]
    OR?: shoppingListWhereInput[]
    NOT?: shoppingListWhereInput | shoppingListWhereInput[]
    id?: IntFilter<"shoppingList"> | number
    name?: StringFilter<"shoppingList"> | string
    familyShoppingList?: FamilyShoppingListListRelationFilter
    shoppingListItem?: ShoppingListItemListRelationFilter
  }

  export type shoppingListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    familyShoppingList?: familyShoppingListOrderByRelationAggregateInput
    shoppingListItem?: shoppingListItemOrderByRelationAggregateInput
  }

  export type shoppingListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: shoppingListWhereInput | shoppingListWhereInput[]
    OR?: shoppingListWhereInput[]
    NOT?: shoppingListWhereInput | shoppingListWhereInput[]
    name?: StringFilter<"shoppingList"> | string
    familyShoppingList?: FamilyShoppingListListRelationFilter
    shoppingListItem?: ShoppingListItemListRelationFilter
  }, "id">

  export type shoppingListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: shoppingListCountOrderByAggregateInput
    _avg?: shoppingListAvgOrderByAggregateInput
    _max?: shoppingListMaxOrderByAggregateInput
    _min?: shoppingListMinOrderByAggregateInput
    _sum?: shoppingListSumOrderByAggregateInput
  }

  export type shoppingListScalarWhereWithAggregatesInput = {
    AND?: shoppingListScalarWhereWithAggregatesInput | shoppingListScalarWhereWithAggregatesInput[]
    OR?: shoppingListScalarWhereWithAggregatesInput[]
    NOT?: shoppingListScalarWhereWithAggregatesInput | shoppingListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"shoppingList"> | number
    name?: StringWithAggregatesFilter<"shoppingList"> | string
  }

  export type familyShoppingListWhereInput = {
    AND?: familyShoppingListWhereInput | familyShoppingListWhereInput[]
    OR?: familyShoppingListWhereInput[]
    NOT?: familyShoppingListWhereInput | familyShoppingListWhereInput[]
    familyId?: IntFilter<"familyShoppingList"> | number
    shoppingListId?: IntFilter<"familyShoppingList"> | number
    family?: XOR<FamilyScalarRelationFilter, familyWhereInput>
    shoppingList?: XOR<ShoppingListScalarRelationFilter, shoppingListWhereInput>
  }

  export type familyShoppingListOrderByWithRelationInput = {
    familyId?: SortOrder
    shoppingListId?: SortOrder
    family?: familyOrderByWithRelationInput
    shoppingList?: shoppingListOrderByWithRelationInput
  }

  export type familyShoppingListWhereUniqueInput = Prisma.AtLeast<{
    familyId_shoppingListId?: familyShoppingListFamilyIdShoppingListIdCompoundUniqueInput
    AND?: familyShoppingListWhereInput | familyShoppingListWhereInput[]
    OR?: familyShoppingListWhereInput[]
    NOT?: familyShoppingListWhereInput | familyShoppingListWhereInput[]
    familyId?: IntFilter<"familyShoppingList"> | number
    shoppingListId?: IntFilter<"familyShoppingList"> | number
    family?: XOR<FamilyScalarRelationFilter, familyWhereInput>
    shoppingList?: XOR<ShoppingListScalarRelationFilter, shoppingListWhereInput>
  }, "familyId_shoppingListId">

  export type familyShoppingListOrderByWithAggregationInput = {
    familyId?: SortOrder
    shoppingListId?: SortOrder
    _count?: familyShoppingListCountOrderByAggregateInput
    _avg?: familyShoppingListAvgOrderByAggregateInput
    _max?: familyShoppingListMaxOrderByAggregateInput
    _min?: familyShoppingListMinOrderByAggregateInput
    _sum?: familyShoppingListSumOrderByAggregateInput
  }

  export type familyShoppingListScalarWhereWithAggregatesInput = {
    AND?: familyShoppingListScalarWhereWithAggregatesInput | familyShoppingListScalarWhereWithAggregatesInput[]
    OR?: familyShoppingListScalarWhereWithAggregatesInput[]
    NOT?: familyShoppingListScalarWhereWithAggregatesInput | familyShoppingListScalarWhereWithAggregatesInput[]
    familyId?: IntWithAggregatesFilter<"familyShoppingList"> | number
    shoppingListId?: IntWithAggregatesFilter<"familyShoppingList"> | number
  }

  export type shoppingListItemWhereInput = {
    AND?: shoppingListItemWhereInput | shoppingListItemWhereInput[]
    OR?: shoppingListItemWhereInput[]
    NOT?: shoppingListItemWhereInput | shoppingListItemWhereInput[]
    id?: IntFilter<"shoppingListItem"> | number
    name?: StringFilter<"shoppingListItem"> | string
    checked?: BoolFilter<"shoppingListItem"> | boolean
    shoppingListId?: IntFilter<"shoppingListItem"> | number
    shoppingList?: XOR<ShoppingListScalarRelationFilter, shoppingListWhereInput>
  }

  export type shoppingListItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    checked?: SortOrder
    shoppingListId?: SortOrder
    shoppingList?: shoppingListOrderByWithRelationInput
  }

  export type shoppingListItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: shoppingListItemWhereInput | shoppingListItemWhereInput[]
    OR?: shoppingListItemWhereInput[]
    NOT?: shoppingListItemWhereInput | shoppingListItemWhereInput[]
    name?: StringFilter<"shoppingListItem"> | string
    checked?: BoolFilter<"shoppingListItem"> | boolean
    shoppingListId?: IntFilter<"shoppingListItem"> | number
    shoppingList?: XOR<ShoppingListScalarRelationFilter, shoppingListWhereInput>
  }, "id">

  export type shoppingListItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    checked?: SortOrder
    shoppingListId?: SortOrder
    _count?: shoppingListItemCountOrderByAggregateInput
    _avg?: shoppingListItemAvgOrderByAggregateInput
    _max?: shoppingListItemMaxOrderByAggregateInput
    _min?: shoppingListItemMinOrderByAggregateInput
    _sum?: shoppingListItemSumOrderByAggregateInput
  }

  export type shoppingListItemScalarWhereWithAggregatesInput = {
    AND?: shoppingListItemScalarWhereWithAggregatesInput | shoppingListItemScalarWhereWithAggregatesInput[]
    OR?: shoppingListItemScalarWhereWithAggregatesInput[]
    NOT?: shoppingListItemScalarWhereWithAggregatesInput | shoppingListItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"shoppingListItem"> | number
    name?: StringWithAggregatesFilter<"shoppingListItem"> | string
    checked?: BoolWithAggregatesFilter<"shoppingListItem"> | boolean
    shoppingListId?: IntWithAggregatesFilter<"shoppingListItem"> | number
  }

  export type recipeWhereInput = {
    AND?: recipeWhereInput | recipeWhereInput[]
    OR?: recipeWhereInput[]
    NOT?: recipeWhereInput | recipeWhereInput[]
    id?: IntFilter<"recipe"> | number
    name?: StringFilter<"recipe"> | string
    duration?: IntFilter<"recipe"> | number
    image?: StringNullableFilter<"recipe"> | string | null
    public?: BoolFilter<"recipe"> | boolean
    provider?: StringNullableFilter<"recipe"> | string | null
    recipeStep?: RecipeStepListRelationFilter
    familyRecipe?: FamilyRecipeListRelationFilter
    recipeItem?: RecipeItemListRelationFilter
  }

  export type recipeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    image?: SortOrderInput | SortOrder
    public?: SortOrder
    provider?: SortOrderInput | SortOrder
    recipeStep?: recipeStepOrderByRelationAggregateInput
    familyRecipe?: familyRecipeOrderByRelationAggregateInput
    recipeItem?: recipeItemOrderByRelationAggregateInput
  }

  export type recipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: recipeWhereInput | recipeWhereInput[]
    OR?: recipeWhereInput[]
    NOT?: recipeWhereInput | recipeWhereInput[]
    name?: StringFilter<"recipe"> | string
    duration?: IntFilter<"recipe"> | number
    image?: StringNullableFilter<"recipe"> | string | null
    public?: BoolFilter<"recipe"> | boolean
    provider?: StringNullableFilter<"recipe"> | string | null
    recipeStep?: RecipeStepListRelationFilter
    familyRecipe?: FamilyRecipeListRelationFilter
    recipeItem?: RecipeItemListRelationFilter
  }, "id">

  export type recipeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    image?: SortOrderInput | SortOrder
    public?: SortOrder
    provider?: SortOrderInput | SortOrder
    _count?: recipeCountOrderByAggregateInput
    _avg?: recipeAvgOrderByAggregateInput
    _max?: recipeMaxOrderByAggregateInput
    _min?: recipeMinOrderByAggregateInput
    _sum?: recipeSumOrderByAggregateInput
  }

  export type recipeScalarWhereWithAggregatesInput = {
    AND?: recipeScalarWhereWithAggregatesInput | recipeScalarWhereWithAggregatesInput[]
    OR?: recipeScalarWhereWithAggregatesInput[]
    NOT?: recipeScalarWhereWithAggregatesInput | recipeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"recipe"> | number
    name?: StringWithAggregatesFilter<"recipe"> | string
    duration?: IntWithAggregatesFilter<"recipe"> | number
    image?: StringNullableWithAggregatesFilter<"recipe"> | string | null
    public?: BoolWithAggregatesFilter<"recipe"> | boolean
    provider?: StringNullableWithAggregatesFilter<"recipe"> | string | null
  }

  export type recipeStepWhereInput = {
    AND?: recipeStepWhereInput | recipeStepWhereInput[]
    OR?: recipeStepWhereInput[]
    NOT?: recipeStepWhereInput | recipeStepWhereInput[]
    id?: IntFilter<"recipeStep"> | number
    description?: StringFilter<"recipeStep"> | string
    index?: IntFilter<"recipeStep"> | number
    recipeId?: IntFilter<"recipeStep"> | number
    recipe?: XOR<RecipeScalarRelationFilter, recipeWhereInput>
  }

  export type recipeStepOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    index?: SortOrder
    recipeId?: SortOrder
    recipe?: recipeOrderByWithRelationInput
  }

  export type recipeStepWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: recipeStepWhereInput | recipeStepWhereInput[]
    OR?: recipeStepWhereInput[]
    NOT?: recipeStepWhereInput | recipeStepWhereInput[]
    description?: StringFilter<"recipeStep"> | string
    index?: IntFilter<"recipeStep"> | number
    recipeId?: IntFilter<"recipeStep"> | number
    recipe?: XOR<RecipeScalarRelationFilter, recipeWhereInput>
  }, "id">

  export type recipeStepOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    index?: SortOrder
    recipeId?: SortOrder
    _count?: recipeStepCountOrderByAggregateInput
    _avg?: recipeStepAvgOrderByAggregateInput
    _max?: recipeStepMaxOrderByAggregateInput
    _min?: recipeStepMinOrderByAggregateInput
    _sum?: recipeStepSumOrderByAggregateInput
  }

  export type recipeStepScalarWhereWithAggregatesInput = {
    AND?: recipeStepScalarWhereWithAggregatesInput | recipeStepScalarWhereWithAggregatesInput[]
    OR?: recipeStepScalarWhereWithAggregatesInput[]
    NOT?: recipeStepScalarWhereWithAggregatesInput | recipeStepScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"recipeStep"> | number
    description?: StringWithAggregatesFilter<"recipeStep"> | string
    index?: IntWithAggregatesFilter<"recipeStep"> | number
    recipeId?: IntWithAggregatesFilter<"recipeStep"> | number
  }

  export type recipeItemWhereInput = {
    AND?: recipeItemWhereInput | recipeItemWhereInput[]
    OR?: recipeItemWhereInput[]
    NOT?: recipeItemWhereInput | recipeItemWhereInput[]
    id?: IntFilter<"recipeItem"> | number
    name?: StringFilter<"recipeItem"> | string
    quantity?: StringNullableFilter<"recipeItem"> | string | null
    recipeId?: IntFilter<"recipeItem"> | number
    recipe?: XOR<RecipeScalarRelationFilter, recipeWhereInput>
  }

  export type recipeItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrderInput | SortOrder
    recipeId?: SortOrder
    recipe?: recipeOrderByWithRelationInput
  }

  export type recipeItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: recipeItemWhereInput | recipeItemWhereInput[]
    OR?: recipeItemWhereInput[]
    NOT?: recipeItemWhereInput | recipeItemWhereInput[]
    name?: StringFilter<"recipeItem"> | string
    quantity?: StringNullableFilter<"recipeItem"> | string | null
    recipeId?: IntFilter<"recipeItem"> | number
    recipe?: XOR<RecipeScalarRelationFilter, recipeWhereInput>
  }, "id">

  export type recipeItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrderInput | SortOrder
    recipeId?: SortOrder
    _count?: recipeItemCountOrderByAggregateInput
    _avg?: recipeItemAvgOrderByAggregateInput
    _max?: recipeItemMaxOrderByAggregateInput
    _min?: recipeItemMinOrderByAggregateInput
    _sum?: recipeItemSumOrderByAggregateInput
  }

  export type recipeItemScalarWhereWithAggregatesInput = {
    AND?: recipeItemScalarWhereWithAggregatesInput | recipeItemScalarWhereWithAggregatesInput[]
    OR?: recipeItemScalarWhereWithAggregatesInput[]
    NOT?: recipeItemScalarWhereWithAggregatesInput | recipeItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"recipeItem"> | number
    name?: StringWithAggregatesFilter<"recipeItem"> | string
    quantity?: StringNullableWithAggregatesFilter<"recipeItem"> | string | null
    recipeId?: IntWithAggregatesFilter<"recipeItem"> | number
  }

  export type familyRecipeWhereInput = {
    AND?: familyRecipeWhereInput | familyRecipeWhereInput[]
    OR?: familyRecipeWhereInput[]
    NOT?: familyRecipeWhereInput | familyRecipeWhereInput[]
    familyId?: IntFilter<"familyRecipe"> | number
    recipeId?: IntFilter<"familyRecipe"> | number
    family?: XOR<FamilyScalarRelationFilter, familyWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, recipeWhereInput>
  }

  export type familyRecipeOrderByWithRelationInput = {
    familyId?: SortOrder
    recipeId?: SortOrder
    family?: familyOrderByWithRelationInput
    recipe?: recipeOrderByWithRelationInput
  }

  export type familyRecipeWhereUniqueInput = Prisma.AtLeast<{
    familyId_recipeId?: familyRecipeFamilyIdRecipeIdCompoundUniqueInput
    AND?: familyRecipeWhereInput | familyRecipeWhereInput[]
    OR?: familyRecipeWhereInput[]
    NOT?: familyRecipeWhereInput | familyRecipeWhereInput[]
    familyId?: IntFilter<"familyRecipe"> | number
    recipeId?: IntFilter<"familyRecipe"> | number
    family?: XOR<FamilyScalarRelationFilter, familyWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, recipeWhereInput>
  }, "familyId_recipeId">

  export type familyRecipeOrderByWithAggregationInput = {
    familyId?: SortOrder
    recipeId?: SortOrder
    _count?: familyRecipeCountOrderByAggregateInput
    _avg?: familyRecipeAvgOrderByAggregateInput
    _max?: familyRecipeMaxOrderByAggregateInput
    _min?: familyRecipeMinOrderByAggregateInput
    _sum?: familyRecipeSumOrderByAggregateInput
  }

  export type familyRecipeScalarWhereWithAggregatesInput = {
    AND?: familyRecipeScalarWhereWithAggregatesInput | familyRecipeScalarWhereWithAggregatesInput[]
    OR?: familyRecipeScalarWhereWithAggregatesInput[]
    NOT?: familyRecipeScalarWhereWithAggregatesInput | familyRecipeScalarWhereWithAggregatesInput[]
    familyId?: IntWithAggregatesFilter<"familyRecipe"> | number
    recipeId?: IntWithAggregatesFilter<"familyRecipe"> | number
  }

  export type familyCreateInput = {
    name: string
    code: string
    familyShoppingList?: familyShoppingListCreateNestedManyWithoutFamilyInput
    familyRecipe?: familyRecipeCreateNestedManyWithoutFamilyInput
  }

  export type familyUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    familyShoppingList?: familyShoppingListUncheckedCreateNestedManyWithoutFamilyInput
    familyRecipe?: familyRecipeUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type familyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    familyShoppingList?: familyShoppingListUpdateManyWithoutFamilyNestedInput
    familyRecipe?: familyRecipeUpdateManyWithoutFamilyNestedInput
  }

  export type familyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    familyShoppingList?: familyShoppingListUncheckedUpdateManyWithoutFamilyNestedInput
    familyRecipe?: familyRecipeUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type familyCreateManyInput = {
    id?: number
    name: string
    code: string
  }

  export type familyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type familyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type shoppingListCreateInput = {
    name: string
    familyShoppingList?: familyShoppingListCreateNestedManyWithoutShoppingListInput
    shoppingListItem?: shoppingListItemCreateNestedManyWithoutShoppingListInput
  }

  export type shoppingListUncheckedCreateInput = {
    id?: number
    name: string
    familyShoppingList?: familyShoppingListUncheckedCreateNestedManyWithoutShoppingListInput
    shoppingListItem?: shoppingListItemUncheckedCreateNestedManyWithoutShoppingListInput
  }

  export type shoppingListUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    familyShoppingList?: familyShoppingListUpdateManyWithoutShoppingListNestedInput
    shoppingListItem?: shoppingListItemUpdateManyWithoutShoppingListNestedInput
  }

  export type shoppingListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    familyShoppingList?: familyShoppingListUncheckedUpdateManyWithoutShoppingListNestedInput
    shoppingListItem?: shoppingListItemUncheckedUpdateManyWithoutShoppingListNestedInput
  }

  export type shoppingListCreateManyInput = {
    id?: number
    name: string
  }

  export type shoppingListUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type shoppingListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type familyShoppingListCreateInput = {
    family: familyCreateNestedOneWithoutFamilyShoppingListInput
    shoppingList: shoppingListCreateNestedOneWithoutFamilyShoppingListInput
  }

  export type familyShoppingListUncheckedCreateInput = {
    familyId: number
    shoppingListId: number
  }

  export type familyShoppingListUpdateInput = {
    family?: familyUpdateOneRequiredWithoutFamilyShoppingListNestedInput
    shoppingList?: shoppingListUpdateOneRequiredWithoutFamilyShoppingListNestedInput
  }

  export type familyShoppingListUncheckedUpdateInput = {
    familyId?: IntFieldUpdateOperationsInput | number
    shoppingListId?: IntFieldUpdateOperationsInput | number
  }

  export type familyShoppingListCreateManyInput = {
    familyId: number
    shoppingListId: number
  }

  export type familyShoppingListUpdateManyMutationInput = {

  }

  export type familyShoppingListUncheckedUpdateManyInput = {
    familyId?: IntFieldUpdateOperationsInput | number
    shoppingListId?: IntFieldUpdateOperationsInput | number
  }

  export type shoppingListItemCreateInput = {
    name: string
    checked?: boolean
    shoppingList: shoppingListCreateNestedOneWithoutShoppingListItemInput
  }

  export type shoppingListItemUncheckedCreateInput = {
    id?: number
    name: string
    checked?: boolean
    shoppingListId: number
  }

  export type shoppingListItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    shoppingList?: shoppingListUpdateOneRequiredWithoutShoppingListItemNestedInput
  }

  export type shoppingListItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    shoppingListId?: IntFieldUpdateOperationsInput | number
  }

  export type shoppingListItemCreateManyInput = {
    id?: number
    name: string
    checked?: boolean
    shoppingListId: number
  }

  export type shoppingListItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type shoppingListItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    shoppingListId?: IntFieldUpdateOperationsInput | number
  }

  export type recipeCreateInput = {
    name: string
    duration: number
    image?: string | null
    public?: boolean
    provider?: string | null
    recipeStep?: recipeStepCreateNestedManyWithoutRecipeInput
    familyRecipe?: familyRecipeCreateNestedManyWithoutRecipeInput
    recipeItem?: recipeItemCreateNestedManyWithoutRecipeInput
  }

  export type recipeUncheckedCreateInput = {
    id?: number
    name: string
    duration: number
    image?: string | null
    public?: boolean
    provider?: string | null
    recipeStep?: recipeStepUncheckedCreateNestedManyWithoutRecipeInput
    familyRecipe?: familyRecipeUncheckedCreateNestedManyWithoutRecipeInput
    recipeItem?: recipeItemUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type recipeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    recipeStep?: recipeStepUpdateManyWithoutRecipeNestedInput
    familyRecipe?: familyRecipeUpdateManyWithoutRecipeNestedInput
    recipeItem?: recipeItemUpdateManyWithoutRecipeNestedInput
  }

  export type recipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    recipeStep?: recipeStepUncheckedUpdateManyWithoutRecipeNestedInput
    familyRecipe?: familyRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    recipeItem?: recipeItemUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type recipeCreateManyInput = {
    id?: number
    name: string
    duration: number
    image?: string | null
    public?: boolean
    provider?: string | null
  }

  export type recipeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recipeStepCreateInput = {
    description: string
    index: number
    recipe: recipeCreateNestedOneWithoutRecipeStepInput
  }

  export type recipeStepUncheckedCreateInput = {
    id?: number
    description: string
    index: number
    recipeId: number
  }

  export type recipeStepUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    recipe?: recipeUpdateOneRequiredWithoutRecipeStepNestedInput
  }

  export type recipeStepUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type recipeStepCreateManyInput = {
    id?: number
    description: string
    index: number
    recipeId: number
  }

  export type recipeStepUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type recipeStepUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type recipeItemCreateInput = {
    name: string
    quantity?: string | null
    recipe: recipeCreateNestedOneWithoutRecipeItemInput
  }

  export type recipeItemUncheckedCreateInput = {
    id?: number
    name: string
    quantity?: string | null
    recipeId: number
  }

  export type recipeItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    recipe?: recipeUpdateOneRequiredWithoutRecipeItemNestedInput
  }

  export type recipeItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type recipeItemCreateManyInput = {
    id?: number
    name: string
    quantity?: string | null
    recipeId: number
  }

  export type recipeItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recipeItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type familyRecipeCreateInput = {
    family: familyCreateNestedOneWithoutFamilyRecipeInput
    recipe: recipeCreateNestedOneWithoutFamilyRecipeInput
  }

  export type familyRecipeUncheckedCreateInput = {
    familyId: number
    recipeId: number
  }

  export type familyRecipeUpdateInput = {
    family?: familyUpdateOneRequiredWithoutFamilyRecipeNestedInput
    recipe?: recipeUpdateOneRequiredWithoutFamilyRecipeNestedInput
  }

  export type familyRecipeUncheckedUpdateInput = {
    familyId?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type familyRecipeCreateManyInput = {
    familyId: number
    recipeId: number
  }

  export type familyRecipeUpdateManyMutationInput = {

  }

  export type familyRecipeUncheckedUpdateManyInput = {
    familyId?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FamilyShoppingListListRelationFilter = {
    every?: familyShoppingListWhereInput
    some?: familyShoppingListWhereInput
    none?: familyShoppingListWhereInput
  }

  export type FamilyRecipeListRelationFilter = {
    every?: familyRecipeWhereInput
    some?: familyRecipeWhereInput
    none?: familyRecipeWhereInput
  }

  export type familyShoppingListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type familyRecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type familyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type familyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type familyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type familyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type familySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ShoppingListItemListRelationFilter = {
    every?: shoppingListItemWhereInput
    some?: shoppingListItemWhereInput
    none?: shoppingListItemWhereInput
  }

  export type shoppingListItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type shoppingListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type shoppingListAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type shoppingListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type shoppingListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type shoppingListSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FamilyScalarRelationFilter = {
    is?: familyWhereInput
    isNot?: familyWhereInput
  }

  export type ShoppingListScalarRelationFilter = {
    is?: shoppingListWhereInput
    isNot?: shoppingListWhereInput
  }

  export type familyShoppingListFamilyIdShoppingListIdCompoundUniqueInput = {
    familyId: number
    shoppingListId: number
  }

  export type familyShoppingListCountOrderByAggregateInput = {
    familyId?: SortOrder
    shoppingListId?: SortOrder
  }

  export type familyShoppingListAvgOrderByAggregateInput = {
    familyId?: SortOrder
    shoppingListId?: SortOrder
  }

  export type familyShoppingListMaxOrderByAggregateInput = {
    familyId?: SortOrder
    shoppingListId?: SortOrder
  }

  export type familyShoppingListMinOrderByAggregateInput = {
    familyId?: SortOrder
    shoppingListId?: SortOrder
  }

  export type familyShoppingListSumOrderByAggregateInput = {
    familyId?: SortOrder
    shoppingListId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type shoppingListItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    checked?: SortOrder
    shoppingListId?: SortOrder
  }

  export type shoppingListItemAvgOrderByAggregateInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
  }

  export type shoppingListItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    checked?: SortOrder
    shoppingListId?: SortOrder
  }

  export type shoppingListItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    checked?: SortOrder
    shoppingListId?: SortOrder
  }

  export type shoppingListItemSumOrderByAggregateInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RecipeStepListRelationFilter = {
    every?: recipeStepWhereInput
    some?: recipeStepWhereInput
    none?: recipeStepWhereInput
  }

  export type RecipeItemListRelationFilter = {
    every?: recipeItemWhereInput
    some?: recipeItemWhereInput
    none?: recipeItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type recipeStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recipeItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recipeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    image?: SortOrder
    public?: SortOrder
    provider?: SortOrder
  }

  export type recipeAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
  }

  export type recipeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    image?: SortOrder
    public?: SortOrder
    provider?: SortOrder
  }

  export type recipeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    image?: SortOrder
    public?: SortOrder
    provider?: SortOrder
  }

  export type recipeSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RecipeScalarRelationFilter = {
    is?: recipeWhereInput
    isNot?: recipeWhereInput
  }

  export type recipeStepCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    index?: SortOrder
    recipeId?: SortOrder
  }

  export type recipeStepAvgOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    recipeId?: SortOrder
  }

  export type recipeStepMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    index?: SortOrder
    recipeId?: SortOrder
  }

  export type recipeStepMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    index?: SortOrder
    recipeId?: SortOrder
  }

  export type recipeStepSumOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    recipeId?: SortOrder
  }

  export type recipeItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    recipeId?: SortOrder
  }

  export type recipeItemAvgOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type recipeItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    recipeId?: SortOrder
  }

  export type recipeItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    recipeId?: SortOrder
  }

  export type recipeItemSumOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type familyRecipeFamilyIdRecipeIdCompoundUniqueInput = {
    familyId: number
    recipeId: number
  }

  export type familyRecipeCountOrderByAggregateInput = {
    familyId?: SortOrder
    recipeId?: SortOrder
  }

  export type familyRecipeAvgOrderByAggregateInput = {
    familyId?: SortOrder
    recipeId?: SortOrder
  }

  export type familyRecipeMaxOrderByAggregateInput = {
    familyId?: SortOrder
    recipeId?: SortOrder
  }

  export type familyRecipeMinOrderByAggregateInput = {
    familyId?: SortOrder
    recipeId?: SortOrder
  }

  export type familyRecipeSumOrderByAggregateInput = {
    familyId?: SortOrder
    recipeId?: SortOrder
  }

  export type familyShoppingListCreateNestedManyWithoutFamilyInput = {
    create?: XOR<familyShoppingListCreateWithoutFamilyInput, familyShoppingListUncheckedCreateWithoutFamilyInput> | familyShoppingListCreateWithoutFamilyInput[] | familyShoppingListUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: familyShoppingListCreateOrConnectWithoutFamilyInput | familyShoppingListCreateOrConnectWithoutFamilyInput[]
    createMany?: familyShoppingListCreateManyFamilyInputEnvelope
    connect?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
  }

  export type familyRecipeCreateNestedManyWithoutFamilyInput = {
    create?: XOR<familyRecipeCreateWithoutFamilyInput, familyRecipeUncheckedCreateWithoutFamilyInput> | familyRecipeCreateWithoutFamilyInput[] | familyRecipeUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: familyRecipeCreateOrConnectWithoutFamilyInput | familyRecipeCreateOrConnectWithoutFamilyInput[]
    createMany?: familyRecipeCreateManyFamilyInputEnvelope
    connect?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
  }

  export type familyShoppingListUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<familyShoppingListCreateWithoutFamilyInput, familyShoppingListUncheckedCreateWithoutFamilyInput> | familyShoppingListCreateWithoutFamilyInput[] | familyShoppingListUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: familyShoppingListCreateOrConnectWithoutFamilyInput | familyShoppingListCreateOrConnectWithoutFamilyInput[]
    createMany?: familyShoppingListCreateManyFamilyInputEnvelope
    connect?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
  }

  export type familyRecipeUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<familyRecipeCreateWithoutFamilyInput, familyRecipeUncheckedCreateWithoutFamilyInput> | familyRecipeCreateWithoutFamilyInput[] | familyRecipeUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: familyRecipeCreateOrConnectWithoutFamilyInput | familyRecipeCreateOrConnectWithoutFamilyInput[]
    createMany?: familyRecipeCreateManyFamilyInputEnvelope
    connect?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type familyShoppingListUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<familyShoppingListCreateWithoutFamilyInput, familyShoppingListUncheckedCreateWithoutFamilyInput> | familyShoppingListCreateWithoutFamilyInput[] | familyShoppingListUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: familyShoppingListCreateOrConnectWithoutFamilyInput | familyShoppingListCreateOrConnectWithoutFamilyInput[]
    upsert?: familyShoppingListUpsertWithWhereUniqueWithoutFamilyInput | familyShoppingListUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: familyShoppingListCreateManyFamilyInputEnvelope
    set?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    disconnect?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    delete?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    connect?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    update?: familyShoppingListUpdateWithWhereUniqueWithoutFamilyInput | familyShoppingListUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: familyShoppingListUpdateManyWithWhereWithoutFamilyInput | familyShoppingListUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: familyShoppingListScalarWhereInput | familyShoppingListScalarWhereInput[]
  }

  export type familyRecipeUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<familyRecipeCreateWithoutFamilyInput, familyRecipeUncheckedCreateWithoutFamilyInput> | familyRecipeCreateWithoutFamilyInput[] | familyRecipeUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: familyRecipeCreateOrConnectWithoutFamilyInput | familyRecipeCreateOrConnectWithoutFamilyInput[]
    upsert?: familyRecipeUpsertWithWhereUniqueWithoutFamilyInput | familyRecipeUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: familyRecipeCreateManyFamilyInputEnvelope
    set?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    disconnect?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    delete?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    connect?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    update?: familyRecipeUpdateWithWhereUniqueWithoutFamilyInput | familyRecipeUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: familyRecipeUpdateManyWithWhereWithoutFamilyInput | familyRecipeUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: familyRecipeScalarWhereInput | familyRecipeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type familyShoppingListUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<familyShoppingListCreateWithoutFamilyInput, familyShoppingListUncheckedCreateWithoutFamilyInput> | familyShoppingListCreateWithoutFamilyInput[] | familyShoppingListUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: familyShoppingListCreateOrConnectWithoutFamilyInput | familyShoppingListCreateOrConnectWithoutFamilyInput[]
    upsert?: familyShoppingListUpsertWithWhereUniqueWithoutFamilyInput | familyShoppingListUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: familyShoppingListCreateManyFamilyInputEnvelope
    set?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    disconnect?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    delete?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    connect?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    update?: familyShoppingListUpdateWithWhereUniqueWithoutFamilyInput | familyShoppingListUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: familyShoppingListUpdateManyWithWhereWithoutFamilyInput | familyShoppingListUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: familyShoppingListScalarWhereInput | familyShoppingListScalarWhereInput[]
  }

  export type familyRecipeUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<familyRecipeCreateWithoutFamilyInput, familyRecipeUncheckedCreateWithoutFamilyInput> | familyRecipeCreateWithoutFamilyInput[] | familyRecipeUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: familyRecipeCreateOrConnectWithoutFamilyInput | familyRecipeCreateOrConnectWithoutFamilyInput[]
    upsert?: familyRecipeUpsertWithWhereUniqueWithoutFamilyInput | familyRecipeUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: familyRecipeCreateManyFamilyInputEnvelope
    set?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    disconnect?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    delete?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    connect?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    update?: familyRecipeUpdateWithWhereUniqueWithoutFamilyInput | familyRecipeUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: familyRecipeUpdateManyWithWhereWithoutFamilyInput | familyRecipeUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: familyRecipeScalarWhereInput | familyRecipeScalarWhereInput[]
  }

  export type familyShoppingListCreateNestedManyWithoutShoppingListInput = {
    create?: XOR<familyShoppingListCreateWithoutShoppingListInput, familyShoppingListUncheckedCreateWithoutShoppingListInput> | familyShoppingListCreateWithoutShoppingListInput[] | familyShoppingListUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: familyShoppingListCreateOrConnectWithoutShoppingListInput | familyShoppingListCreateOrConnectWithoutShoppingListInput[]
    createMany?: familyShoppingListCreateManyShoppingListInputEnvelope
    connect?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
  }

  export type shoppingListItemCreateNestedManyWithoutShoppingListInput = {
    create?: XOR<shoppingListItemCreateWithoutShoppingListInput, shoppingListItemUncheckedCreateWithoutShoppingListInput> | shoppingListItemCreateWithoutShoppingListInput[] | shoppingListItemUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: shoppingListItemCreateOrConnectWithoutShoppingListInput | shoppingListItemCreateOrConnectWithoutShoppingListInput[]
    createMany?: shoppingListItemCreateManyShoppingListInputEnvelope
    connect?: shoppingListItemWhereUniqueInput | shoppingListItemWhereUniqueInput[]
  }

  export type familyShoppingListUncheckedCreateNestedManyWithoutShoppingListInput = {
    create?: XOR<familyShoppingListCreateWithoutShoppingListInput, familyShoppingListUncheckedCreateWithoutShoppingListInput> | familyShoppingListCreateWithoutShoppingListInput[] | familyShoppingListUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: familyShoppingListCreateOrConnectWithoutShoppingListInput | familyShoppingListCreateOrConnectWithoutShoppingListInput[]
    createMany?: familyShoppingListCreateManyShoppingListInputEnvelope
    connect?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
  }

  export type shoppingListItemUncheckedCreateNestedManyWithoutShoppingListInput = {
    create?: XOR<shoppingListItemCreateWithoutShoppingListInput, shoppingListItemUncheckedCreateWithoutShoppingListInput> | shoppingListItemCreateWithoutShoppingListInput[] | shoppingListItemUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: shoppingListItemCreateOrConnectWithoutShoppingListInput | shoppingListItemCreateOrConnectWithoutShoppingListInput[]
    createMany?: shoppingListItemCreateManyShoppingListInputEnvelope
    connect?: shoppingListItemWhereUniqueInput | shoppingListItemWhereUniqueInput[]
  }

  export type familyShoppingListUpdateManyWithoutShoppingListNestedInput = {
    create?: XOR<familyShoppingListCreateWithoutShoppingListInput, familyShoppingListUncheckedCreateWithoutShoppingListInput> | familyShoppingListCreateWithoutShoppingListInput[] | familyShoppingListUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: familyShoppingListCreateOrConnectWithoutShoppingListInput | familyShoppingListCreateOrConnectWithoutShoppingListInput[]
    upsert?: familyShoppingListUpsertWithWhereUniqueWithoutShoppingListInput | familyShoppingListUpsertWithWhereUniqueWithoutShoppingListInput[]
    createMany?: familyShoppingListCreateManyShoppingListInputEnvelope
    set?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    disconnect?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    delete?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    connect?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    update?: familyShoppingListUpdateWithWhereUniqueWithoutShoppingListInput | familyShoppingListUpdateWithWhereUniqueWithoutShoppingListInput[]
    updateMany?: familyShoppingListUpdateManyWithWhereWithoutShoppingListInput | familyShoppingListUpdateManyWithWhereWithoutShoppingListInput[]
    deleteMany?: familyShoppingListScalarWhereInput | familyShoppingListScalarWhereInput[]
  }

  export type shoppingListItemUpdateManyWithoutShoppingListNestedInput = {
    create?: XOR<shoppingListItemCreateWithoutShoppingListInput, shoppingListItemUncheckedCreateWithoutShoppingListInput> | shoppingListItemCreateWithoutShoppingListInput[] | shoppingListItemUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: shoppingListItemCreateOrConnectWithoutShoppingListInput | shoppingListItemCreateOrConnectWithoutShoppingListInput[]
    upsert?: shoppingListItemUpsertWithWhereUniqueWithoutShoppingListInput | shoppingListItemUpsertWithWhereUniqueWithoutShoppingListInput[]
    createMany?: shoppingListItemCreateManyShoppingListInputEnvelope
    set?: shoppingListItemWhereUniqueInput | shoppingListItemWhereUniqueInput[]
    disconnect?: shoppingListItemWhereUniqueInput | shoppingListItemWhereUniqueInput[]
    delete?: shoppingListItemWhereUniqueInput | shoppingListItemWhereUniqueInput[]
    connect?: shoppingListItemWhereUniqueInput | shoppingListItemWhereUniqueInput[]
    update?: shoppingListItemUpdateWithWhereUniqueWithoutShoppingListInput | shoppingListItemUpdateWithWhereUniqueWithoutShoppingListInput[]
    updateMany?: shoppingListItemUpdateManyWithWhereWithoutShoppingListInput | shoppingListItemUpdateManyWithWhereWithoutShoppingListInput[]
    deleteMany?: shoppingListItemScalarWhereInput | shoppingListItemScalarWhereInput[]
  }

  export type familyShoppingListUncheckedUpdateManyWithoutShoppingListNestedInput = {
    create?: XOR<familyShoppingListCreateWithoutShoppingListInput, familyShoppingListUncheckedCreateWithoutShoppingListInput> | familyShoppingListCreateWithoutShoppingListInput[] | familyShoppingListUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: familyShoppingListCreateOrConnectWithoutShoppingListInput | familyShoppingListCreateOrConnectWithoutShoppingListInput[]
    upsert?: familyShoppingListUpsertWithWhereUniqueWithoutShoppingListInput | familyShoppingListUpsertWithWhereUniqueWithoutShoppingListInput[]
    createMany?: familyShoppingListCreateManyShoppingListInputEnvelope
    set?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    disconnect?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    delete?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    connect?: familyShoppingListWhereUniqueInput | familyShoppingListWhereUniqueInput[]
    update?: familyShoppingListUpdateWithWhereUniqueWithoutShoppingListInput | familyShoppingListUpdateWithWhereUniqueWithoutShoppingListInput[]
    updateMany?: familyShoppingListUpdateManyWithWhereWithoutShoppingListInput | familyShoppingListUpdateManyWithWhereWithoutShoppingListInput[]
    deleteMany?: familyShoppingListScalarWhereInput | familyShoppingListScalarWhereInput[]
  }

  export type shoppingListItemUncheckedUpdateManyWithoutShoppingListNestedInput = {
    create?: XOR<shoppingListItemCreateWithoutShoppingListInput, shoppingListItemUncheckedCreateWithoutShoppingListInput> | shoppingListItemCreateWithoutShoppingListInput[] | shoppingListItemUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: shoppingListItemCreateOrConnectWithoutShoppingListInput | shoppingListItemCreateOrConnectWithoutShoppingListInput[]
    upsert?: shoppingListItemUpsertWithWhereUniqueWithoutShoppingListInput | shoppingListItemUpsertWithWhereUniqueWithoutShoppingListInput[]
    createMany?: shoppingListItemCreateManyShoppingListInputEnvelope
    set?: shoppingListItemWhereUniqueInput | shoppingListItemWhereUniqueInput[]
    disconnect?: shoppingListItemWhereUniqueInput | shoppingListItemWhereUniqueInput[]
    delete?: shoppingListItemWhereUniqueInput | shoppingListItemWhereUniqueInput[]
    connect?: shoppingListItemWhereUniqueInput | shoppingListItemWhereUniqueInput[]
    update?: shoppingListItemUpdateWithWhereUniqueWithoutShoppingListInput | shoppingListItemUpdateWithWhereUniqueWithoutShoppingListInput[]
    updateMany?: shoppingListItemUpdateManyWithWhereWithoutShoppingListInput | shoppingListItemUpdateManyWithWhereWithoutShoppingListInput[]
    deleteMany?: shoppingListItemScalarWhereInput | shoppingListItemScalarWhereInput[]
  }

  export type familyCreateNestedOneWithoutFamilyShoppingListInput = {
    create?: XOR<familyCreateWithoutFamilyShoppingListInput, familyUncheckedCreateWithoutFamilyShoppingListInput>
    connectOrCreate?: familyCreateOrConnectWithoutFamilyShoppingListInput
    connect?: familyWhereUniqueInput
  }

  export type shoppingListCreateNestedOneWithoutFamilyShoppingListInput = {
    create?: XOR<shoppingListCreateWithoutFamilyShoppingListInput, shoppingListUncheckedCreateWithoutFamilyShoppingListInput>
    connectOrCreate?: shoppingListCreateOrConnectWithoutFamilyShoppingListInput
    connect?: shoppingListWhereUniqueInput
  }

  export type familyUpdateOneRequiredWithoutFamilyShoppingListNestedInput = {
    create?: XOR<familyCreateWithoutFamilyShoppingListInput, familyUncheckedCreateWithoutFamilyShoppingListInput>
    connectOrCreate?: familyCreateOrConnectWithoutFamilyShoppingListInput
    upsert?: familyUpsertWithoutFamilyShoppingListInput
    connect?: familyWhereUniqueInput
    update?: XOR<XOR<familyUpdateToOneWithWhereWithoutFamilyShoppingListInput, familyUpdateWithoutFamilyShoppingListInput>, familyUncheckedUpdateWithoutFamilyShoppingListInput>
  }

  export type shoppingListUpdateOneRequiredWithoutFamilyShoppingListNestedInput = {
    create?: XOR<shoppingListCreateWithoutFamilyShoppingListInput, shoppingListUncheckedCreateWithoutFamilyShoppingListInput>
    connectOrCreate?: shoppingListCreateOrConnectWithoutFamilyShoppingListInput
    upsert?: shoppingListUpsertWithoutFamilyShoppingListInput
    connect?: shoppingListWhereUniqueInput
    update?: XOR<XOR<shoppingListUpdateToOneWithWhereWithoutFamilyShoppingListInput, shoppingListUpdateWithoutFamilyShoppingListInput>, shoppingListUncheckedUpdateWithoutFamilyShoppingListInput>
  }

  export type shoppingListCreateNestedOneWithoutShoppingListItemInput = {
    create?: XOR<shoppingListCreateWithoutShoppingListItemInput, shoppingListUncheckedCreateWithoutShoppingListItemInput>
    connectOrCreate?: shoppingListCreateOrConnectWithoutShoppingListItemInput
    connect?: shoppingListWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type shoppingListUpdateOneRequiredWithoutShoppingListItemNestedInput = {
    create?: XOR<shoppingListCreateWithoutShoppingListItemInput, shoppingListUncheckedCreateWithoutShoppingListItemInput>
    connectOrCreate?: shoppingListCreateOrConnectWithoutShoppingListItemInput
    upsert?: shoppingListUpsertWithoutShoppingListItemInput
    connect?: shoppingListWhereUniqueInput
    update?: XOR<XOR<shoppingListUpdateToOneWithWhereWithoutShoppingListItemInput, shoppingListUpdateWithoutShoppingListItemInput>, shoppingListUncheckedUpdateWithoutShoppingListItemInput>
  }

  export type recipeStepCreateNestedManyWithoutRecipeInput = {
    create?: XOR<recipeStepCreateWithoutRecipeInput, recipeStepUncheckedCreateWithoutRecipeInput> | recipeStepCreateWithoutRecipeInput[] | recipeStepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: recipeStepCreateOrConnectWithoutRecipeInput | recipeStepCreateOrConnectWithoutRecipeInput[]
    createMany?: recipeStepCreateManyRecipeInputEnvelope
    connect?: recipeStepWhereUniqueInput | recipeStepWhereUniqueInput[]
  }

  export type familyRecipeCreateNestedManyWithoutRecipeInput = {
    create?: XOR<familyRecipeCreateWithoutRecipeInput, familyRecipeUncheckedCreateWithoutRecipeInput> | familyRecipeCreateWithoutRecipeInput[] | familyRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: familyRecipeCreateOrConnectWithoutRecipeInput | familyRecipeCreateOrConnectWithoutRecipeInput[]
    createMany?: familyRecipeCreateManyRecipeInputEnvelope
    connect?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
  }

  export type recipeItemCreateNestedManyWithoutRecipeInput = {
    create?: XOR<recipeItemCreateWithoutRecipeInput, recipeItemUncheckedCreateWithoutRecipeInput> | recipeItemCreateWithoutRecipeInput[] | recipeItemUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: recipeItemCreateOrConnectWithoutRecipeInput | recipeItemCreateOrConnectWithoutRecipeInput[]
    createMany?: recipeItemCreateManyRecipeInputEnvelope
    connect?: recipeItemWhereUniqueInput | recipeItemWhereUniqueInput[]
  }

  export type recipeStepUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<recipeStepCreateWithoutRecipeInput, recipeStepUncheckedCreateWithoutRecipeInput> | recipeStepCreateWithoutRecipeInput[] | recipeStepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: recipeStepCreateOrConnectWithoutRecipeInput | recipeStepCreateOrConnectWithoutRecipeInput[]
    createMany?: recipeStepCreateManyRecipeInputEnvelope
    connect?: recipeStepWhereUniqueInput | recipeStepWhereUniqueInput[]
  }

  export type familyRecipeUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<familyRecipeCreateWithoutRecipeInput, familyRecipeUncheckedCreateWithoutRecipeInput> | familyRecipeCreateWithoutRecipeInput[] | familyRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: familyRecipeCreateOrConnectWithoutRecipeInput | familyRecipeCreateOrConnectWithoutRecipeInput[]
    createMany?: familyRecipeCreateManyRecipeInputEnvelope
    connect?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
  }

  export type recipeItemUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<recipeItemCreateWithoutRecipeInput, recipeItemUncheckedCreateWithoutRecipeInput> | recipeItemCreateWithoutRecipeInput[] | recipeItemUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: recipeItemCreateOrConnectWithoutRecipeInput | recipeItemCreateOrConnectWithoutRecipeInput[]
    createMany?: recipeItemCreateManyRecipeInputEnvelope
    connect?: recipeItemWhereUniqueInput | recipeItemWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type recipeStepUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<recipeStepCreateWithoutRecipeInput, recipeStepUncheckedCreateWithoutRecipeInput> | recipeStepCreateWithoutRecipeInput[] | recipeStepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: recipeStepCreateOrConnectWithoutRecipeInput | recipeStepCreateOrConnectWithoutRecipeInput[]
    upsert?: recipeStepUpsertWithWhereUniqueWithoutRecipeInput | recipeStepUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: recipeStepCreateManyRecipeInputEnvelope
    set?: recipeStepWhereUniqueInput | recipeStepWhereUniqueInput[]
    disconnect?: recipeStepWhereUniqueInput | recipeStepWhereUniqueInput[]
    delete?: recipeStepWhereUniqueInput | recipeStepWhereUniqueInput[]
    connect?: recipeStepWhereUniqueInput | recipeStepWhereUniqueInput[]
    update?: recipeStepUpdateWithWhereUniqueWithoutRecipeInput | recipeStepUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: recipeStepUpdateManyWithWhereWithoutRecipeInput | recipeStepUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: recipeStepScalarWhereInput | recipeStepScalarWhereInput[]
  }

  export type familyRecipeUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<familyRecipeCreateWithoutRecipeInput, familyRecipeUncheckedCreateWithoutRecipeInput> | familyRecipeCreateWithoutRecipeInput[] | familyRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: familyRecipeCreateOrConnectWithoutRecipeInput | familyRecipeCreateOrConnectWithoutRecipeInput[]
    upsert?: familyRecipeUpsertWithWhereUniqueWithoutRecipeInput | familyRecipeUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: familyRecipeCreateManyRecipeInputEnvelope
    set?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    disconnect?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    delete?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    connect?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    update?: familyRecipeUpdateWithWhereUniqueWithoutRecipeInput | familyRecipeUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: familyRecipeUpdateManyWithWhereWithoutRecipeInput | familyRecipeUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: familyRecipeScalarWhereInput | familyRecipeScalarWhereInput[]
  }

  export type recipeItemUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<recipeItemCreateWithoutRecipeInput, recipeItemUncheckedCreateWithoutRecipeInput> | recipeItemCreateWithoutRecipeInput[] | recipeItemUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: recipeItemCreateOrConnectWithoutRecipeInput | recipeItemCreateOrConnectWithoutRecipeInput[]
    upsert?: recipeItemUpsertWithWhereUniqueWithoutRecipeInput | recipeItemUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: recipeItemCreateManyRecipeInputEnvelope
    set?: recipeItemWhereUniqueInput | recipeItemWhereUniqueInput[]
    disconnect?: recipeItemWhereUniqueInput | recipeItemWhereUniqueInput[]
    delete?: recipeItemWhereUniqueInput | recipeItemWhereUniqueInput[]
    connect?: recipeItemWhereUniqueInput | recipeItemWhereUniqueInput[]
    update?: recipeItemUpdateWithWhereUniqueWithoutRecipeInput | recipeItemUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: recipeItemUpdateManyWithWhereWithoutRecipeInput | recipeItemUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: recipeItemScalarWhereInput | recipeItemScalarWhereInput[]
  }

  export type recipeStepUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<recipeStepCreateWithoutRecipeInput, recipeStepUncheckedCreateWithoutRecipeInput> | recipeStepCreateWithoutRecipeInput[] | recipeStepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: recipeStepCreateOrConnectWithoutRecipeInput | recipeStepCreateOrConnectWithoutRecipeInput[]
    upsert?: recipeStepUpsertWithWhereUniqueWithoutRecipeInput | recipeStepUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: recipeStepCreateManyRecipeInputEnvelope
    set?: recipeStepWhereUniqueInput | recipeStepWhereUniqueInput[]
    disconnect?: recipeStepWhereUniqueInput | recipeStepWhereUniqueInput[]
    delete?: recipeStepWhereUniqueInput | recipeStepWhereUniqueInput[]
    connect?: recipeStepWhereUniqueInput | recipeStepWhereUniqueInput[]
    update?: recipeStepUpdateWithWhereUniqueWithoutRecipeInput | recipeStepUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: recipeStepUpdateManyWithWhereWithoutRecipeInput | recipeStepUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: recipeStepScalarWhereInput | recipeStepScalarWhereInput[]
  }

  export type familyRecipeUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<familyRecipeCreateWithoutRecipeInput, familyRecipeUncheckedCreateWithoutRecipeInput> | familyRecipeCreateWithoutRecipeInput[] | familyRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: familyRecipeCreateOrConnectWithoutRecipeInput | familyRecipeCreateOrConnectWithoutRecipeInput[]
    upsert?: familyRecipeUpsertWithWhereUniqueWithoutRecipeInput | familyRecipeUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: familyRecipeCreateManyRecipeInputEnvelope
    set?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    disconnect?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    delete?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    connect?: familyRecipeWhereUniqueInput | familyRecipeWhereUniqueInput[]
    update?: familyRecipeUpdateWithWhereUniqueWithoutRecipeInput | familyRecipeUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: familyRecipeUpdateManyWithWhereWithoutRecipeInput | familyRecipeUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: familyRecipeScalarWhereInput | familyRecipeScalarWhereInput[]
  }

  export type recipeItemUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<recipeItemCreateWithoutRecipeInput, recipeItemUncheckedCreateWithoutRecipeInput> | recipeItemCreateWithoutRecipeInput[] | recipeItemUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: recipeItemCreateOrConnectWithoutRecipeInput | recipeItemCreateOrConnectWithoutRecipeInput[]
    upsert?: recipeItemUpsertWithWhereUniqueWithoutRecipeInput | recipeItemUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: recipeItemCreateManyRecipeInputEnvelope
    set?: recipeItemWhereUniqueInput | recipeItemWhereUniqueInput[]
    disconnect?: recipeItemWhereUniqueInput | recipeItemWhereUniqueInput[]
    delete?: recipeItemWhereUniqueInput | recipeItemWhereUniqueInput[]
    connect?: recipeItemWhereUniqueInput | recipeItemWhereUniqueInput[]
    update?: recipeItemUpdateWithWhereUniqueWithoutRecipeInput | recipeItemUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: recipeItemUpdateManyWithWhereWithoutRecipeInput | recipeItemUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: recipeItemScalarWhereInput | recipeItemScalarWhereInput[]
  }

  export type recipeCreateNestedOneWithoutRecipeStepInput = {
    create?: XOR<recipeCreateWithoutRecipeStepInput, recipeUncheckedCreateWithoutRecipeStepInput>
    connectOrCreate?: recipeCreateOrConnectWithoutRecipeStepInput
    connect?: recipeWhereUniqueInput
  }

  export type recipeUpdateOneRequiredWithoutRecipeStepNestedInput = {
    create?: XOR<recipeCreateWithoutRecipeStepInput, recipeUncheckedCreateWithoutRecipeStepInput>
    connectOrCreate?: recipeCreateOrConnectWithoutRecipeStepInput
    upsert?: recipeUpsertWithoutRecipeStepInput
    connect?: recipeWhereUniqueInput
    update?: XOR<XOR<recipeUpdateToOneWithWhereWithoutRecipeStepInput, recipeUpdateWithoutRecipeStepInput>, recipeUncheckedUpdateWithoutRecipeStepInput>
  }

  export type recipeCreateNestedOneWithoutRecipeItemInput = {
    create?: XOR<recipeCreateWithoutRecipeItemInput, recipeUncheckedCreateWithoutRecipeItemInput>
    connectOrCreate?: recipeCreateOrConnectWithoutRecipeItemInput
    connect?: recipeWhereUniqueInput
  }

  export type recipeUpdateOneRequiredWithoutRecipeItemNestedInput = {
    create?: XOR<recipeCreateWithoutRecipeItemInput, recipeUncheckedCreateWithoutRecipeItemInput>
    connectOrCreate?: recipeCreateOrConnectWithoutRecipeItemInput
    upsert?: recipeUpsertWithoutRecipeItemInput
    connect?: recipeWhereUniqueInput
    update?: XOR<XOR<recipeUpdateToOneWithWhereWithoutRecipeItemInput, recipeUpdateWithoutRecipeItemInput>, recipeUncheckedUpdateWithoutRecipeItemInput>
  }

  export type familyCreateNestedOneWithoutFamilyRecipeInput = {
    create?: XOR<familyCreateWithoutFamilyRecipeInput, familyUncheckedCreateWithoutFamilyRecipeInput>
    connectOrCreate?: familyCreateOrConnectWithoutFamilyRecipeInput
    connect?: familyWhereUniqueInput
  }

  export type recipeCreateNestedOneWithoutFamilyRecipeInput = {
    create?: XOR<recipeCreateWithoutFamilyRecipeInput, recipeUncheckedCreateWithoutFamilyRecipeInput>
    connectOrCreate?: recipeCreateOrConnectWithoutFamilyRecipeInput
    connect?: recipeWhereUniqueInput
  }

  export type familyUpdateOneRequiredWithoutFamilyRecipeNestedInput = {
    create?: XOR<familyCreateWithoutFamilyRecipeInput, familyUncheckedCreateWithoutFamilyRecipeInput>
    connectOrCreate?: familyCreateOrConnectWithoutFamilyRecipeInput
    upsert?: familyUpsertWithoutFamilyRecipeInput
    connect?: familyWhereUniqueInput
    update?: XOR<XOR<familyUpdateToOneWithWhereWithoutFamilyRecipeInput, familyUpdateWithoutFamilyRecipeInput>, familyUncheckedUpdateWithoutFamilyRecipeInput>
  }

  export type recipeUpdateOneRequiredWithoutFamilyRecipeNestedInput = {
    create?: XOR<recipeCreateWithoutFamilyRecipeInput, recipeUncheckedCreateWithoutFamilyRecipeInput>
    connectOrCreate?: recipeCreateOrConnectWithoutFamilyRecipeInput
    upsert?: recipeUpsertWithoutFamilyRecipeInput
    connect?: recipeWhereUniqueInput
    update?: XOR<XOR<recipeUpdateToOneWithWhereWithoutFamilyRecipeInput, recipeUpdateWithoutFamilyRecipeInput>, recipeUncheckedUpdateWithoutFamilyRecipeInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type familyShoppingListCreateWithoutFamilyInput = {
    shoppingList: shoppingListCreateNestedOneWithoutFamilyShoppingListInput
  }

  export type familyShoppingListUncheckedCreateWithoutFamilyInput = {
    shoppingListId: number
  }

  export type familyShoppingListCreateOrConnectWithoutFamilyInput = {
    where: familyShoppingListWhereUniqueInput
    create: XOR<familyShoppingListCreateWithoutFamilyInput, familyShoppingListUncheckedCreateWithoutFamilyInput>
  }

  export type familyShoppingListCreateManyFamilyInputEnvelope = {
    data: familyShoppingListCreateManyFamilyInput | familyShoppingListCreateManyFamilyInput[]
    skipDuplicates?: boolean
  }

  export type familyRecipeCreateWithoutFamilyInput = {
    recipe: recipeCreateNestedOneWithoutFamilyRecipeInput
  }

  export type familyRecipeUncheckedCreateWithoutFamilyInput = {
    recipeId: number
  }

  export type familyRecipeCreateOrConnectWithoutFamilyInput = {
    where: familyRecipeWhereUniqueInput
    create: XOR<familyRecipeCreateWithoutFamilyInput, familyRecipeUncheckedCreateWithoutFamilyInput>
  }

  export type familyRecipeCreateManyFamilyInputEnvelope = {
    data: familyRecipeCreateManyFamilyInput | familyRecipeCreateManyFamilyInput[]
    skipDuplicates?: boolean
  }

  export type familyShoppingListUpsertWithWhereUniqueWithoutFamilyInput = {
    where: familyShoppingListWhereUniqueInput
    update: XOR<familyShoppingListUpdateWithoutFamilyInput, familyShoppingListUncheckedUpdateWithoutFamilyInput>
    create: XOR<familyShoppingListCreateWithoutFamilyInput, familyShoppingListUncheckedCreateWithoutFamilyInput>
  }

  export type familyShoppingListUpdateWithWhereUniqueWithoutFamilyInput = {
    where: familyShoppingListWhereUniqueInput
    data: XOR<familyShoppingListUpdateWithoutFamilyInput, familyShoppingListUncheckedUpdateWithoutFamilyInput>
  }

  export type familyShoppingListUpdateManyWithWhereWithoutFamilyInput = {
    where: familyShoppingListScalarWhereInput
    data: XOR<familyShoppingListUpdateManyMutationInput, familyShoppingListUncheckedUpdateManyWithoutFamilyInput>
  }

  export type familyShoppingListScalarWhereInput = {
    AND?: familyShoppingListScalarWhereInput | familyShoppingListScalarWhereInput[]
    OR?: familyShoppingListScalarWhereInput[]
    NOT?: familyShoppingListScalarWhereInput | familyShoppingListScalarWhereInput[]
    familyId?: IntFilter<"familyShoppingList"> | number
    shoppingListId?: IntFilter<"familyShoppingList"> | number
  }

  export type familyRecipeUpsertWithWhereUniqueWithoutFamilyInput = {
    where: familyRecipeWhereUniqueInput
    update: XOR<familyRecipeUpdateWithoutFamilyInput, familyRecipeUncheckedUpdateWithoutFamilyInput>
    create: XOR<familyRecipeCreateWithoutFamilyInput, familyRecipeUncheckedCreateWithoutFamilyInput>
  }

  export type familyRecipeUpdateWithWhereUniqueWithoutFamilyInput = {
    where: familyRecipeWhereUniqueInput
    data: XOR<familyRecipeUpdateWithoutFamilyInput, familyRecipeUncheckedUpdateWithoutFamilyInput>
  }

  export type familyRecipeUpdateManyWithWhereWithoutFamilyInput = {
    where: familyRecipeScalarWhereInput
    data: XOR<familyRecipeUpdateManyMutationInput, familyRecipeUncheckedUpdateManyWithoutFamilyInput>
  }

  export type familyRecipeScalarWhereInput = {
    AND?: familyRecipeScalarWhereInput | familyRecipeScalarWhereInput[]
    OR?: familyRecipeScalarWhereInput[]
    NOT?: familyRecipeScalarWhereInput | familyRecipeScalarWhereInput[]
    familyId?: IntFilter<"familyRecipe"> | number
    recipeId?: IntFilter<"familyRecipe"> | number
  }

  export type familyShoppingListCreateWithoutShoppingListInput = {
    family: familyCreateNestedOneWithoutFamilyShoppingListInput
  }

  export type familyShoppingListUncheckedCreateWithoutShoppingListInput = {
    familyId: number
  }

  export type familyShoppingListCreateOrConnectWithoutShoppingListInput = {
    where: familyShoppingListWhereUniqueInput
    create: XOR<familyShoppingListCreateWithoutShoppingListInput, familyShoppingListUncheckedCreateWithoutShoppingListInput>
  }

  export type familyShoppingListCreateManyShoppingListInputEnvelope = {
    data: familyShoppingListCreateManyShoppingListInput | familyShoppingListCreateManyShoppingListInput[]
    skipDuplicates?: boolean
  }

  export type shoppingListItemCreateWithoutShoppingListInput = {
    name: string
    checked?: boolean
  }

  export type shoppingListItemUncheckedCreateWithoutShoppingListInput = {
    id?: number
    name: string
    checked?: boolean
  }

  export type shoppingListItemCreateOrConnectWithoutShoppingListInput = {
    where: shoppingListItemWhereUniqueInput
    create: XOR<shoppingListItemCreateWithoutShoppingListInput, shoppingListItemUncheckedCreateWithoutShoppingListInput>
  }

  export type shoppingListItemCreateManyShoppingListInputEnvelope = {
    data: shoppingListItemCreateManyShoppingListInput | shoppingListItemCreateManyShoppingListInput[]
    skipDuplicates?: boolean
  }

  export type familyShoppingListUpsertWithWhereUniqueWithoutShoppingListInput = {
    where: familyShoppingListWhereUniqueInput
    update: XOR<familyShoppingListUpdateWithoutShoppingListInput, familyShoppingListUncheckedUpdateWithoutShoppingListInput>
    create: XOR<familyShoppingListCreateWithoutShoppingListInput, familyShoppingListUncheckedCreateWithoutShoppingListInput>
  }

  export type familyShoppingListUpdateWithWhereUniqueWithoutShoppingListInput = {
    where: familyShoppingListWhereUniqueInput
    data: XOR<familyShoppingListUpdateWithoutShoppingListInput, familyShoppingListUncheckedUpdateWithoutShoppingListInput>
  }

  export type familyShoppingListUpdateManyWithWhereWithoutShoppingListInput = {
    where: familyShoppingListScalarWhereInput
    data: XOR<familyShoppingListUpdateManyMutationInput, familyShoppingListUncheckedUpdateManyWithoutShoppingListInput>
  }

  export type shoppingListItemUpsertWithWhereUniqueWithoutShoppingListInput = {
    where: shoppingListItemWhereUniqueInput
    update: XOR<shoppingListItemUpdateWithoutShoppingListInput, shoppingListItemUncheckedUpdateWithoutShoppingListInput>
    create: XOR<shoppingListItemCreateWithoutShoppingListInput, shoppingListItemUncheckedCreateWithoutShoppingListInput>
  }

  export type shoppingListItemUpdateWithWhereUniqueWithoutShoppingListInput = {
    where: shoppingListItemWhereUniqueInput
    data: XOR<shoppingListItemUpdateWithoutShoppingListInput, shoppingListItemUncheckedUpdateWithoutShoppingListInput>
  }

  export type shoppingListItemUpdateManyWithWhereWithoutShoppingListInput = {
    where: shoppingListItemScalarWhereInput
    data: XOR<shoppingListItemUpdateManyMutationInput, shoppingListItemUncheckedUpdateManyWithoutShoppingListInput>
  }

  export type shoppingListItemScalarWhereInput = {
    AND?: shoppingListItemScalarWhereInput | shoppingListItemScalarWhereInput[]
    OR?: shoppingListItemScalarWhereInput[]
    NOT?: shoppingListItemScalarWhereInput | shoppingListItemScalarWhereInput[]
    id?: IntFilter<"shoppingListItem"> | number
    name?: StringFilter<"shoppingListItem"> | string
    checked?: BoolFilter<"shoppingListItem"> | boolean
    shoppingListId?: IntFilter<"shoppingListItem"> | number
  }

  export type familyCreateWithoutFamilyShoppingListInput = {
    name: string
    code: string
    familyRecipe?: familyRecipeCreateNestedManyWithoutFamilyInput
  }

  export type familyUncheckedCreateWithoutFamilyShoppingListInput = {
    id?: number
    name: string
    code: string
    familyRecipe?: familyRecipeUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type familyCreateOrConnectWithoutFamilyShoppingListInput = {
    where: familyWhereUniqueInput
    create: XOR<familyCreateWithoutFamilyShoppingListInput, familyUncheckedCreateWithoutFamilyShoppingListInput>
  }

  export type shoppingListCreateWithoutFamilyShoppingListInput = {
    name: string
    shoppingListItem?: shoppingListItemCreateNestedManyWithoutShoppingListInput
  }

  export type shoppingListUncheckedCreateWithoutFamilyShoppingListInput = {
    id?: number
    name: string
    shoppingListItem?: shoppingListItemUncheckedCreateNestedManyWithoutShoppingListInput
  }

  export type shoppingListCreateOrConnectWithoutFamilyShoppingListInput = {
    where: shoppingListWhereUniqueInput
    create: XOR<shoppingListCreateWithoutFamilyShoppingListInput, shoppingListUncheckedCreateWithoutFamilyShoppingListInput>
  }

  export type familyUpsertWithoutFamilyShoppingListInput = {
    update: XOR<familyUpdateWithoutFamilyShoppingListInput, familyUncheckedUpdateWithoutFamilyShoppingListInput>
    create: XOR<familyCreateWithoutFamilyShoppingListInput, familyUncheckedCreateWithoutFamilyShoppingListInput>
    where?: familyWhereInput
  }

  export type familyUpdateToOneWithWhereWithoutFamilyShoppingListInput = {
    where?: familyWhereInput
    data: XOR<familyUpdateWithoutFamilyShoppingListInput, familyUncheckedUpdateWithoutFamilyShoppingListInput>
  }

  export type familyUpdateWithoutFamilyShoppingListInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    familyRecipe?: familyRecipeUpdateManyWithoutFamilyNestedInput
  }

  export type familyUncheckedUpdateWithoutFamilyShoppingListInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    familyRecipe?: familyRecipeUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type shoppingListUpsertWithoutFamilyShoppingListInput = {
    update: XOR<shoppingListUpdateWithoutFamilyShoppingListInput, shoppingListUncheckedUpdateWithoutFamilyShoppingListInput>
    create: XOR<shoppingListCreateWithoutFamilyShoppingListInput, shoppingListUncheckedCreateWithoutFamilyShoppingListInput>
    where?: shoppingListWhereInput
  }

  export type shoppingListUpdateToOneWithWhereWithoutFamilyShoppingListInput = {
    where?: shoppingListWhereInput
    data: XOR<shoppingListUpdateWithoutFamilyShoppingListInput, shoppingListUncheckedUpdateWithoutFamilyShoppingListInput>
  }

  export type shoppingListUpdateWithoutFamilyShoppingListInput = {
    name?: StringFieldUpdateOperationsInput | string
    shoppingListItem?: shoppingListItemUpdateManyWithoutShoppingListNestedInput
  }

  export type shoppingListUncheckedUpdateWithoutFamilyShoppingListInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shoppingListItem?: shoppingListItemUncheckedUpdateManyWithoutShoppingListNestedInput
  }

  export type shoppingListCreateWithoutShoppingListItemInput = {
    name: string
    familyShoppingList?: familyShoppingListCreateNestedManyWithoutShoppingListInput
  }

  export type shoppingListUncheckedCreateWithoutShoppingListItemInput = {
    id?: number
    name: string
    familyShoppingList?: familyShoppingListUncheckedCreateNestedManyWithoutShoppingListInput
  }

  export type shoppingListCreateOrConnectWithoutShoppingListItemInput = {
    where: shoppingListWhereUniqueInput
    create: XOR<shoppingListCreateWithoutShoppingListItemInput, shoppingListUncheckedCreateWithoutShoppingListItemInput>
  }

  export type shoppingListUpsertWithoutShoppingListItemInput = {
    update: XOR<shoppingListUpdateWithoutShoppingListItemInput, shoppingListUncheckedUpdateWithoutShoppingListItemInput>
    create: XOR<shoppingListCreateWithoutShoppingListItemInput, shoppingListUncheckedCreateWithoutShoppingListItemInput>
    where?: shoppingListWhereInput
  }

  export type shoppingListUpdateToOneWithWhereWithoutShoppingListItemInput = {
    where?: shoppingListWhereInput
    data: XOR<shoppingListUpdateWithoutShoppingListItemInput, shoppingListUncheckedUpdateWithoutShoppingListItemInput>
  }

  export type shoppingListUpdateWithoutShoppingListItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    familyShoppingList?: familyShoppingListUpdateManyWithoutShoppingListNestedInput
  }

  export type shoppingListUncheckedUpdateWithoutShoppingListItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    familyShoppingList?: familyShoppingListUncheckedUpdateManyWithoutShoppingListNestedInput
  }

  export type recipeStepCreateWithoutRecipeInput = {
    description: string
    index: number
  }

  export type recipeStepUncheckedCreateWithoutRecipeInput = {
    id?: number
    description: string
    index: number
  }

  export type recipeStepCreateOrConnectWithoutRecipeInput = {
    where: recipeStepWhereUniqueInput
    create: XOR<recipeStepCreateWithoutRecipeInput, recipeStepUncheckedCreateWithoutRecipeInput>
  }

  export type recipeStepCreateManyRecipeInputEnvelope = {
    data: recipeStepCreateManyRecipeInput | recipeStepCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type familyRecipeCreateWithoutRecipeInput = {
    family: familyCreateNestedOneWithoutFamilyRecipeInput
  }

  export type familyRecipeUncheckedCreateWithoutRecipeInput = {
    familyId: number
  }

  export type familyRecipeCreateOrConnectWithoutRecipeInput = {
    where: familyRecipeWhereUniqueInput
    create: XOR<familyRecipeCreateWithoutRecipeInput, familyRecipeUncheckedCreateWithoutRecipeInput>
  }

  export type familyRecipeCreateManyRecipeInputEnvelope = {
    data: familyRecipeCreateManyRecipeInput | familyRecipeCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type recipeItemCreateWithoutRecipeInput = {
    name: string
    quantity?: string | null
  }

  export type recipeItemUncheckedCreateWithoutRecipeInput = {
    id?: number
    name: string
    quantity?: string | null
  }

  export type recipeItemCreateOrConnectWithoutRecipeInput = {
    where: recipeItemWhereUniqueInput
    create: XOR<recipeItemCreateWithoutRecipeInput, recipeItemUncheckedCreateWithoutRecipeInput>
  }

  export type recipeItemCreateManyRecipeInputEnvelope = {
    data: recipeItemCreateManyRecipeInput | recipeItemCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type recipeStepUpsertWithWhereUniqueWithoutRecipeInput = {
    where: recipeStepWhereUniqueInput
    update: XOR<recipeStepUpdateWithoutRecipeInput, recipeStepUncheckedUpdateWithoutRecipeInput>
    create: XOR<recipeStepCreateWithoutRecipeInput, recipeStepUncheckedCreateWithoutRecipeInput>
  }

  export type recipeStepUpdateWithWhereUniqueWithoutRecipeInput = {
    where: recipeStepWhereUniqueInput
    data: XOR<recipeStepUpdateWithoutRecipeInput, recipeStepUncheckedUpdateWithoutRecipeInput>
  }

  export type recipeStepUpdateManyWithWhereWithoutRecipeInput = {
    where: recipeStepScalarWhereInput
    data: XOR<recipeStepUpdateManyMutationInput, recipeStepUncheckedUpdateManyWithoutRecipeInput>
  }

  export type recipeStepScalarWhereInput = {
    AND?: recipeStepScalarWhereInput | recipeStepScalarWhereInput[]
    OR?: recipeStepScalarWhereInput[]
    NOT?: recipeStepScalarWhereInput | recipeStepScalarWhereInput[]
    id?: IntFilter<"recipeStep"> | number
    description?: StringFilter<"recipeStep"> | string
    index?: IntFilter<"recipeStep"> | number
    recipeId?: IntFilter<"recipeStep"> | number
  }

  export type familyRecipeUpsertWithWhereUniqueWithoutRecipeInput = {
    where: familyRecipeWhereUniqueInput
    update: XOR<familyRecipeUpdateWithoutRecipeInput, familyRecipeUncheckedUpdateWithoutRecipeInput>
    create: XOR<familyRecipeCreateWithoutRecipeInput, familyRecipeUncheckedCreateWithoutRecipeInput>
  }

  export type familyRecipeUpdateWithWhereUniqueWithoutRecipeInput = {
    where: familyRecipeWhereUniqueInput
    data: XOR<familyRecipeUpdateWithoutRecipeInput, familyRecipeUncheckedUpdateWithoutRecipeInput>
  }

  export type familyRecipeUpdateManyWithWhereWithoutRecipeInput = {
    where: familyRecipeScalarWhereInput
    data: XOR<familyRecipeUpdateManyMutationInput, familyRecipeUncheckedUpdateManyWithoutRecipeInput>
  }

  export type recipeItemUpsertWithWhereUniqueWithoutRecipeInput = {
    where: recipeItemWhereUniqueInput
    update: XOR<recipeItemUpdateWithoutRecipeInput, recipeItemUncheckedUpdateWithoutRecipeInput>
    create: XOR<recipeItemCreateWithoutRecipeInput, recipeItemUncheckedCreateWithoutRecipeInput>
  }

  export type recipeItemUpdateWithWhereUniqueWithoutRecipeInput = {
    where: recipeItemWhereUniqueInput
    data: XOR<recipeItemUpdateWithoutRecipeInput, recipeItemUncheckedUpdateWithoutRecipeInput>
  }

  export type recipeItemUpdateManyWithWhereWithoutRecipeInput = {
    where: recipeItemScalarWhereInput
    data: XOR<recipeItemUpdateManyMutationInput, recipeItemUncheckedUpdateManyWithoutRecipeInput>
  }

  export type recipeItemScalarWhereInput = {
    AND?: recipeItemScalarWhereInput | recipeItemScalarWhereInput[]
    OR?: recipeItemScalarWhereInput[]
    NOT?: recipeItemScalarWhereInput | recipeItemScalarWhereInput[]
    id?: IntFilter<"recipeItem"> | number
    name?: StringFilter<"recipeItem"> | string
    quantity?: StringNullableFilter<"recipeItem"> | string | null
    recipeId?: IntFilter<"recipeItem"> | number
  }

  export type recipeCreateWithoutRecipeStepInput = {
    name: string
    duration: number
    image?: string | null
    public?: boolean
    provider?: string | null
    familyRecipe?: familyRecipeCreateNestedManyWithoutRecipeInput
    recipeItem?: recipeItemCreateNestedManyWithoutRecipeInput
  }

  export type recipeUncheckedCreateWithoutRecipeStepInput = {
    id?: number
    name: string
    duration: number
    image?: string | null
    public?: boolean
    provider?: string | null
    familyRecipe?: familyRecipeUncheckedCreateNestedManyWithoutRecipeInput
    recipeItem?: recipeItemUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type recipeCreateOrConnectWithoutRecipeStepInput = {
    where: recipeWhereUniqueInput
    create: XOR<recipeCreateWithoutRecipeStepInput, recipeUncheckedCreateWithoutRecipeStepInput>
  }

  export type recipeUpsertWithoutRecipeStepInput = {
    update: XOR<recipeUpdateWithoutRecipeStepInput, recipeUncheckedUpdateWithoutRecipeStepInput>
    create: XOR<recipeCreateWithoutRecipeStepInput, recipeUncheckedCreateWithoutRecipeStepInput>
    where?: recipeWhereInput
  }

  export type recipeUpdateToOneWithWhereWithoutRecipeStepInput = {
    where?: recipeWhereInput
    data: XOR<recipeUpdateWithoutRecipeStepInput, recipeUncheckedUpdateWithoutRecipeStepInput>
  }

  export type recipeUpdateWithoutRecipeStepInput = {
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    familyRecipe?: familyRecipeUpdateManyWithoutRecipeNestedInput
    recipeItem?: recipeItemUpdateManyWithoutRecipeNestedInput
  }

  export type recipeUncheckedUpdateWithoutRecipeStepInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    familyRecipe?: familyRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    recipeItem?: recipeItemUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type recipeCreateWithoutRecipeItemInput = {
    name: string
    duration: number
    image?: string | null
    public?: boolean
    provider?: string | null
    recipeStep?: recipeStepCreateNestedManyWithoutRecipeInput
    familyRecipe?: familyRecipeCreateNestedManyWithoutRecipeInput
  }

  export type recipeUncheckedCreateWithoutRecipeItemInput = {
    id?: number
    name: string
    duration: number
    image?: string | null
    public?: boolean
    provider?: string | null
    recipeStep?: recipeStepUncheckedCreateNestedManyWithoutRecipeInput
    familyRecipe?: familyRecipeUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type recipeCreateOrConnectWithoutRecipeItemInput = {
    where: recipeWhereUniqueInput
    create: XOR<recipeCreateWithoutRecipeItemInput, recipeUncheckedCreateWithoutRecipeItemInput>
  }

  export type recipeUpsertWithoutRecipeItemInput = {
    update: XOR<recipeUpdateWithoutRecipeItemInput, recipeUncheckedUpdateWithoutRecipeItemInput>
    create: XOR<recipeCreateWithoutRecipeItemInput, recipeUncheckedCreateWithoutRecipeItemInput>
    where?: recipeWhereInput
  }

  export type recipeUpdateToOneWithWhereWithoutRecipeItemInput = {
    where?: recipeWhereInput
    data: XOR<recipeUpdateWithoutRecipeItemInput, recipeUncheckedUpdateWithoutRecipeItemInput>
  }

  export type recipeUpdateWithoutRecipeItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    recipeStep?: recipeStepUpdateManyWithoutRecipeNestedInput
    familyRecipe?: familyRecipeUpdateManyWithoutRecipeNestedInput
  }

  export type recipeUncheckedUpdateWithoutRecipeItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    recipeStep?: recipeStepUncheckedUpdateManyWithoutRecipeNestedInput
    familyRecipe?: familyRecipeUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type familyCreateWithoutFamilyRecipeInput = {
    name: string
    code: string
    familyShoppingList?: familyShoppingListCreateNestedManyWithoutFamilyInput
  }

  export type familyUncheckedCreateWithoutFamilyRecipeInput = {
    id?: number
    name: string
    code: string
    familyShoppingList?: familyShoppingListUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type familyCreateOrConnectWithoutFamilyRecipeInput = {
    where: familyWhereUniqueInput
    create: XOR<familyCreateWithoutFamilyRecipeInput, familyUncheckedCreateWithoutFamilyRecipeInput>
  }

  export type recipeCreateWithoutFamilyRecipeInput = {
    name: string
    duration: number
    image?: string | null
    public?: boolean
    provider?: string | null
    recipeStep?: recipeStepCreateNestedManyWithoutRecipeInput
    recipeItem?: recipeItemCreateNestedManyWithoutRecipeInput
  }

  export type recipeUncheckedCreateWithoutFamilyRecipeInput = {
    id?: number
    name: string
    duration: number
    image?: string | null
    public?: boolean
    provider?: string | null
    recipeStep?: recipeStepUncheckedCreateNestedManyWithoutRecipeInput
    recipeItem?: recipeItemUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type recipeCreateOrConnectWithoutFamilyRecipeInput = {
    where: recipeWhereUniqueInput
    create: XOR<recipeCreateWithoutFamilyRecipeInput, recipeUncheckedCreateWithoutFamilyRecipeInput>
  }

  export type familyUpsertWithoutFamilyRecipeInput = {
    update: XOR<familyUpdateWithoutFamilyRecipeInput, familyUncheckedUpdateWithoutFamilyRecipeInput>
    create: XOR<familyCreateWithoutFamilyRecipeInput, familyUncheckedCreateWithoutFamilyRecipeInput>
    where?: familyWhereInput
  }

  export type familyUpdateToOneWithWhereWithoutFamilyRecipeInput = {
    where?: familyWhereInput
    data: XOR<familyUpdateWithoutFamilyRecipeInput, familyUncheckedUpdateWithoutFamilyRecipeInput>
  }

  export type familyUpdateWithoutFamilyRecipeInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    familyShoppingList?: familyShoppingListUpdateManyWithoutFamilyNestedInput
  }

  export type familyUncheckedUpdateWithoutFamilyRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    familyShoppingList?: familyShoppingListUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type recipeUpsertWithoutFamilyRecipeInput = {
    update: XOR<recipeUpdateWithoutFamilyRecipeInput, recipeUncheckedUpdateWithoutFamilyRecipeInput>
    create: XOR<recipeCreateWithoutFamilyRecipeInput, recipeUncheckedCreateWithoutFamilyRecipeInput>
    where?: recipeWhereInput
  }

  export type recipeUpdateToOneWithWhereWithoutFamilyRecipeInput = {
    where?: recipeWhereInput
    data: XOR<recipeUpdateWithoutFamilyRecipeInput, recipeUncheckedUpdateWithoutFamilyRecipeInput>
  }

  export type recipeUpdateWithoutFamilyRecipeInput = {
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    recipeStep?: recipeStepUpdateManyWithoutRecipeNestedInput
    recipeItem?: recipeItemUpdateManyWithoutRecipeNestedInput
  }

  export type recipeUncheckedUpdateWithoutFamilyRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    recipeStep?: recipeStepUncheckedUpdateManyWithoutRecipeNestedInput
    recipeItem?: recipeItemUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type familyShoppingListCreateManyFamilyInput = {
    shoppingListId: number
  }

  export type familyRecipeCreateManyFamilyInput = {
    recipeId: number
  }

  export type familyShoppingListUpdateWithoutFamilyInput = {
    shoppingList?: shoppingListUpdateOneRequiredWithoutFamilyShoppingListNestedInput
  }

  export type familyShoppingListUncheckedUpdateWithoutFamilyInput = {
    shoppingListId?: IntFieldUpdateOperationsInput | number
  }

  export type familyShoppingListUncheckedUpdateManyWithoutFamilyInput = {
    shoppingListId?: IntFieldUpdateOperationsInput | number
  }

  export type familyRecipeUpdateWithoutFamilyInput = {
    recipe?: recipeUpdateOneRequiredWithoutFamilyRecipeNestedInput
  }

  export type familyRecipeUncheckedUpdateWithoutFamilyInput = {
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type familyRecipeUncheckedUpdateManyWithoutFamilyInput = {
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type familyShoppingListCreateManyShoppingListInput = {
    familyId: number
  }

  export type shoppingListItemCreateManyShoppingListInput = {
    id?: number
    name: string
    checked?: boolean
  }

  export type familyShoppingListUpdateWithoutShoppingListInput = {
    family?: familyUpdateOneRequiredWithoutFamilyShoppingListNestedInput
  }

  export type familyShoppingListUncheckedUpdateWithoutShoppingListInput = {
    familyId?: IntFieldUpdateOperationsInput | number
  }

  export type familyShoppingListUncheckedUpdateManyWithoutShoppingListInput = {
    familyId?: IntFieldUpdateOperationsInput | number
  }

  export type shoppingListItemUpdateWithoutShoppingListInput = {
    name?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type shoppingListItemUncheckedUpdateWithoutShoppingListInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type shoppingListItemUncheckedUpdateManyWithoutShoppingListInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type recipeStepCreateManyRecipeInput = {
    id?: number
    description: string
    index: number
  }

  export type familyRecipeCreateManyRecipeInput = {
    familyId: number
  }

  export type recipeItemCreateManyRecipeInput = {
    id?: number
    name: string
    quantity?: string | null
  }

  export type recipeStepUpdateWithoutRecipeInput = {
    description?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type recipeStepUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type recipeStepUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type familyRecipeUpdateWithoutRecipeInput = {
    family?: familyUpdateOneRequiredWithoutFamilyRecipeNestedInput
  }

  export type familyRecipeUncheckedUpdateWithoutRecipeInput = {
    familyId?: IntFieldUpdateOperationsInput | number
  }

  export type familyRecipeUncheckedUpdateManyWithoutRecipeInput = {
    familyId?: IntFieldUpdateOperationsInput | number
  }

  export type recipeItemUpdateWithoutRecipeInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recipeItemUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recipeItemUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}