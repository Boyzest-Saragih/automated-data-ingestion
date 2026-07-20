
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
 * Model DataSource
 * 
 */
export type DataSource = $Result.DefaultSelection<Prisma.$DataSourcePayload>
/**
 * Model RawData
 * 
 */
export type RawData = $Result.DefaultSelection<Prisma.$RawDataPayload>
/**
 * Model ProcessedData
 * 
 */
export type ProcessedData = $Result.DefaultSelection<Prisma.$ProcessedDataPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DataSourceType: {
  REST_API: 'REST_API',
  DATABASE: 'DATABASE',
  FILE: 'FILE'
};

export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType]


export const RawDataStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type RawDataStatus = (typeof RawDataStatus)[keyof typeof RawDataStatus]

}

export type DataSourceType = $Enums.DataSourceType

export const DataSourceType: typeof $Enums.DataSourceType

export type RawDataStatus = $Enums.RawDataStatus

export const RawDataStatus: typeof $Enums.RawDataStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DataSources
 * const dataSources = await prisma.dataSource.findMany()
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
   * // Fetch zero or more DataSources
   * const dataSources = await prisma.dataSource.findMany()
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
   * `prisma.dataSource`: Exposes CRUD operations for the **DataSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataSources
    * const dataSources = await prisma.dataSource.findMany()
    * ```
    */
  get dataSource(): Prisma.DataSourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rawData`: Exposes CRUD operations for the **RawData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RawData
    * const rawData = await prisma.rawData.findMany()
    * ```
    */
  get rawData(): Prisma.RawDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processedData`: Exposes CRUD operations for the **ProcessedData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessedData
    * const processedData = await prisma.processedData.findMany()
    * ```
    */
  get processedData(): Prisma.ProcessedDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
    DataSource: 'DataSource',
    RawData: 'RawData',
    ProcessedData: 'ProcessedData',
    AuditLog: 'AuditLog'
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
      modelProps: "dataSource" | "rawData" | "processedData" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DataSource: {
        payload: Prisma.$DataSourcePayload<ExtArgs>
        fields: Prisma.DataSourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataSourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataSourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          findFirst: {
            args: Prisma.DataSourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataSourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          findMany: {
            args: Prisma.DataSourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>[]
          }
          create: {
            args: Prisma.DataSourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          createMany: {
            args: Prisma.DataSourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataSourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>[]
          }
          delete: {
            args: Prisma.DataSourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          update: {
            args: Prisma.DataSourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          deleteMany: {
            args: Prisma.DataSourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataSourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataSourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>[]
          }
          upsert: {
            args: Prisma.DataSourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          aggregate: {
            args: Prisma.DataSourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataSource>
          }
          groupBy: {
            args: Prisma.DataSourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataSourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataSourceCountArgs<ExtArgs>
            result: $Utils.Optional<DataSourceCountAggregateOutputType> | number
          }
        }
      }
      RawData: {
        payload: Prisma.$RawDataPayload<ExtArgs>
        fields: Prisma.RawDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RawDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RawDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawDataPayload>
          }
          findFirst: {
            args: Prisma.RawDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RawDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawDataPayload>
          }
          findMany: {
            args: Prisma.RawDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawDataPayload>[]
          }
          create: {
            args: Prisma.RawDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawDataPayload>
          }
          createMany: {
            args: Prisma.RawDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RawDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawDataPayload>[]
          }
          delete: {
            args: Prisma.RawDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawDataPayload>
          }
          update: {
            args: Prisma.RawDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawDataPayload>
          }
          deleteMany: {
            args: Prisma.RawDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RawDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RawDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawDataPayload>[]
          }
          upsert: {
            args: Prisma.RawDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawDataPayload>
          }
          aggregate: {
            args: Prisma.RawDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRawData>
          }
          groupBy: {
            args: Prisma.RawDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<RawDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.RawDataCountArgs<ExtArgs>
            result: $Utils.Optional<RawDataCountAggregateOutputType> | number
          }
        }
      }
      ProcessedData: {
        payload: Prisma.$ProcessedDataPayload<ExtArgs>
        fields: Prisma.ProcessedDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessedDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessedDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedDataPayload>
          }
          findFirst: {
            args: Prisma.ProcessedDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessedDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedDataPayload>
          }
          findMany: {
            args: Prisma.ProcessedDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedDataPayload>[]
          }
          create: {
            args: Prisma.ProcessedDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedDataPayload>
          }
          createMany: {
            args: Prisma.ProcessedDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessedDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedDataPayload>[]
          }
          delete: {
            args: Prisma.ProcessedDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedDataPayload>
          }
          update: {
            args: Prisma.ProcessedDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedDataPayload>
          }
          deleteMany: {
            args: Prisma.ProcessedDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessedDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessedDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedDataPayload>[]
          }
          upsert: {
            args: Prisma.ProcessedDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedDataPayload>
          }
          aggregate: {
            args: Prisma.ProcessedDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcessedData>
          }
          groupBy: {
            args: Prisma.ProcessedDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessedDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessedDataCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessedDataCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
    dataSource?: DataSourceOmit
    rawData?: RawDataOmit
    processedData?: ProcessedDataOmit
    auditLog?: AuditLogOmit
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
   * Count Type DataSourceCountOutputType
   */

  export type DataSourceCountOutputType = {
    rawData: number
  }

  export type DataSourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rawData?: boolean | DataSourceCountOutputTypeCountRawDataArgs
  }

  // Custom InputTypes
  /**
   * DataSourceCountOutputType without action
   */
  export type DataSourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSourceCountOutputType
     */
    select?: DataSourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DataSourceCountOutputType without action
   */
  export type DataSourceCountOutputTypeCountRawDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawDataWhereInput
  }


  /**
   * Count Type RawDataCountOutputType
   */

  export type RawDataCountOutputType = {
    processedData: number
  }

  export type RawDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processedData?: boolean | RawDataCountOutputTypeCountProcessedDataArgs
  }

  // Custom InputTypes
  /**
   * RawDataCountOutputType without action
   */
  export type RawDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawDataCountOutputType
     */
    select?: RawDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RawDataCountOutputType without action
   */
  export type RawDataCountOutputTypeCountProcessedDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessedDataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DataSource
   */

  export type AggregateDataSource = {
    _count: DataSourceCountAggregateOutputType | null
    _min: DataSourceMinAggregateOutputType | null
    _max: DataSourceMaxAggregateOutputType | null
  }

  export type DataSourceMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.DataSourceType | null
    connection: string | null
    baseURL: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataSourceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.DataSourceType | null
    connection: string | null
    baseURL: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataSourceCountAggregateOutputType = {
    id: number
    name: number
    type: number
    connection: number
    baseURL: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DataSourceMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    connection?: true
    baseURL?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataSourceMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    connection?: true
    baseURL?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataSourceCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    connection?: true
    baseURL?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DataSourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataSource to aggregate.
     */
    where?: DataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSources to fetch.
     */
    orderBy?: DataSourceOrderByWithRelationInput | DataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataSources
    **/
    _count?: true | DataSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataSourceMaxAggregateInputType
  }

  export type GetDataSourceAggregateType<T extends DataSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateDataSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataSource[P]>
      : GetScalarType<T[P], AggregateDataSource[P]>
  }




  export type DataSourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataSourceWhereInput
    orderBy?: DataSourceOrderByWithAggregationInput | DataSourceOrderByWithAggregationInput[]
    by: DataSourceScalarFieldEnum[] | DataSourceScalarFieldEnum
    having?: DataSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataSourceCountAggregateInputType | true
    _min?: DataSourceMinAggregateInputType
    _max?: DataSourceMaxAggregateInputType
  }

  export type DataSourceGroupByOutputType = {
    id: string
    name: string
    type: $Enums.DataSourceType
    connection: string | null
    baseURL: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DataSourceCountAggregateOutputType | null
    _min: DataSourceMinAggregateOutputType | null
    _max: DataSourceMaxAggregateOutputType | null
  }

  type GetDataSourceGroupByPayload<T extends DataSourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataSourceGroupByOutputType[P]>
            : GetScalarType<T[P], DataSourceGroupByOutputType[P]>
        }
      >
    >


  export type DataSourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    connection?: boolean
    baseURL?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rawData?: boolean | DataSource$rawDataArgs<ExtArgs>
    _count?: boolean | DataSourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataSource"]>

  export type DataSourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    connection?: boolean
    baseURL?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dataSource"]>

  export type DataSourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    connection?: boolean
    baseURL?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dataSource"]>

  export type DataSourceSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    connection?: boolean
    baseURL?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DataSourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "connection" | "baseURL" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["dataSource"]>
  export type DataSourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rawData?: boolean | DataSource$rawDataArgs<ExtArgs>
    _count?: boolean | DataSourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DataSourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DataSourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DataSourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataSource"
    objects: {
      rawData: Prisma.$RawDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.DataSourceType
      connection: string | null
      baseURL: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dataSource"]>
    composites: {}
  }

  type DataSourceGetPayload<S extends boolean | null | undefined | DataSourceDefaultArgs> = $Result.GetResult<Prisma.$DataSourcePayload, S>

  type DataSourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataSourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataSourceCountAggregateInputType | true
    }

  export interface DataSourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataSource'], meta: { name: 'DataSource' } }
    /**
     * Find zero or one DataSource that matches the filter.
     * @param {DataSourceFindUniqueArgs} args - Arguments to find a DataSource
     * @example
     * // Get one DataSource
     * const dataSource = await prisma.dataSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataSourceFindUniqueArgs>(args: SelectSubset<T, DataSourceFindUniqueArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataSource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataSourceFindUniqueOrThrowArgs} args - Arguments to find a DataSource
     * @example
     * // Get one DataSource
     * const dataSource = await prisma.dataSource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataSourceFindUniqueOrThrowArgs>(args: SelectSubset<T, DataSourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceFindFirstArgs} args - Arguments to find a DataSource
     * @example
     * // Get one DataSource
     * const dataSource = await prisma.dataSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataSourceFindFirstArgs>(args?: SelectSubset<T, DataSourceFindFirstArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataSource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceFindFirstOrThrowArgs} args - Arguments to find a DataSource
     * @example
     * // Get one DataSource
     * const dataSource = await prisma.dataSource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataSourceFindFirstOrThrowArgs>(args?: SelectSubset<T, DataSourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataSources
     * const dataSources = await prisma.dataSource.findMany()
     * 
     * // Get first 10 DataSources
     * const dataSources = await prisma.dataSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataSourceWithIdOnly = await prisma.dataSource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataSourceFindManyArgs>(args?: SelectSubset<T, DataSourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataSource.
     * @param {DataSourceCreateArgs} args - Arguments to create a DataSource.
     * @example
     * // Create one DataSource
     * const DataSource = await prisma.dataSource.create({
     *   data: {
     *     // ... data to create a DataSource
     *   }
     * })
     * 
     */
    create<T extends DataSourceCreateArgs>(args: SelectSubset<T, DataSourceCreateArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataSources.
     * @param {DataSourceCreateManyArgs} args - Arguments to create many DataSources.
     * @example
     * // Create many DataSources
     * const dataSource = await prisma.dataSource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataSourceCreateManyArgs>(args?: SelectSubset<T, DataSourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataSources and returns the data saved in the database.
     * @param {DataSourceCreateManyAndReturnArgs} args - Arguments to create many DataSources.
     * @example
     * // Create many DataSources
     * const dataSource = await prisma.dataSource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataSources and only return the `id`
     * const dataSourceWithIdOnly = await prisma.dataSource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataSourceCreateManyAndReturnArgs>(args?: SelectSubset<T, DataSourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataSource.
     * @param {DataSourceDeleteArgs} args - Arguments to delete one DataSource.
     * @example
     * // Delete one DataSource
     * const DataSource = await prisma.dataSource.delete({
     *   where: {
     *     // ... filter to delete one DataSource
     *   }
     * })
     * 
     */
    delete<T extends DataSourceDeleteArgs>(args: SelectSubset<T, DataSourceDeleteArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataSource.
     * @param {DataSourceUpdateArgs} args - Arguments to update one DataSource.
     * @example
     * // Update one DataSource
     * const dataSource = await prisma.dataSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataSourceUpdateArgs>(args: SelectSubset<T, DataSourceUpdateArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataSources.
     * @param {DataSourceDeleteManyArgs} args - Arguments to filter DataSources to delete.
     * @example
     * // Delete a few DataSources
     * const { count } = await prisma.dataSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataSourceDeleteManyArgs>(args?: SelectSubset<T, DataSourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataSources
     * const dataSource = await prisma.dataSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataSourceUpdateManyArgs>(args: SelectSubset<T, DataSourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataSources and returns the data updated in the database.
     * @param {DataSourceUpdateManyAndReturnArgs} args - Arguments to update many DataSources.
     * @example
     * // Update many DataSources
     * const dataSource = await prisma.dataSource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataSources and only return the `id`
     * const dataSourceWithIdOnly = await prisma.dataSource.updateManyAndReturn({
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
    updateManyAndReturn<T extends DataSourceUpdateManyAndReturnArgs>(args: SelectSubset<T, DataSourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataSource.
     * @param {DataSourceUpsertArgs} args - Arguments to update or create a DataSource.
     * @example
     * // Update or create a DataSource
     * const dataSource = await prisma.dataSource.upsert({
     *   create: {
     *     // ... data to create a DataSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataSource we want to update
     *   }
     * })
     */
    upsert<T extends DataSourceUpsertArgs>(args: SelectSubset<T, DataSourceUpsertArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceCountArgs} args - Arguments to filter DataSources to count.
     * @example
     * // Count the number of DataSources
     * const count = await prisma.dataSource.count({
     *   where: {
     *     // ... the filter for the DataSources we want to count
     *   }
     * })
    **/
    count<T extends DataSourceCountArgs>(
      args?: Subset<T, DataSourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataSourceAggregateArgs>(args: Subset<T, DataSourceAggregateArgs>): Prisma.PrismaPromise<GetDataSourceAggregateType<T>>

    /**
     * Group by DataSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceGroupByArgs} args - Group by arguments.
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
      T extends DataSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataSourceGroupByArgs['orderBy'] }
        : { orderBy?: DataSourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataSource model
   */
  readonly fields: DataSourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataSourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rawData<T extends DataSource$rawDataArgs<ExtArgs> = {}>(args?: Subset<T, DataSource$rawDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DataSource model
   */
  interface DataSourceFieldRefs {
    readonly id: FieldRef<"DataSource", 'String'>
    readonly name: FieldRef<"DataSource", 'String'>
    readonly type: FieldRef<"DataSource", 'DataSourceType'>
    readonly connection: FieldRef<"DataSource", 'String'>
    readonly baseURL: FieldRef<"DataSource", 'String'>
    readonly isActive: FieldRef<"DataSource", 'Boolean'>
    readonly createdAt: FieldRef<"DataSource", 'DateTime'>
    readonly updatedAt: FieldRef<"DataSource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataSource findUnique
   */
  export type DataSourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSource to fetch.
     */
    where: DataSourceWhereUniqueInput
  }

  /**
   * DataSource findUniqueOrThrow
   */
  export type DataSourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSource to fetch.
     */
    where: DataSourceWhereUniqueInput
  }

  /**
   * DataSource findFirst
   */
  export type DataSourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSource to fetch.
     */
    where?: DataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSources to fetch.
     */
    orderBy?: DataSourceOrderByWithRelationInput | DataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataSources.
     */
    cursor?: DataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataSources.
     */
    distinct?: DataSourceScalarFieldEnum | DataSourceScalarFieldEnum[]
  }

  /**
   * DataSource findFirstOrThrow
   */
  export type DataSourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSource to fetch.
     */
    where?: DataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSources to fetch.
     */
    orderBy?: DataSourceOrderByWithRelationInput | DataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataSources.
     */
    cursor?: DataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataSources.
     */
    distinct?: DataSourceScalarFieldEnum | DataSourceScalarFieldEnum[]
  }

  /**
   * DataSource findMany
   */
  export type DataSourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSources to fetch.
     */
    where?: DataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSources to fetch.
     */
    orderBy?: DataSourceOrderByWithRelationInput | DataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataSources.
     */
    cursor?: DataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSources.
     */
    skip?: number
    distinct?: DataSourceScalarFieldEnum | DataSourceScalarFieldEnum[]
  }

  /**
   * DataSource create
   */
  export type DataSourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * The data needed to create a DataSource.
     */
    data: XOR<DataSourceCreateInput, DataSourceUncheckedCreateInput>
  }

  /**
   * DataSource createMany
   */
  export type DataSourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataSources.
     */
    data: DataSourceCreateManyInput | DataSourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataSource createManyAndReturn
   */
  export type DataSourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * The data used to create many DataSources.
     */
    data: DataSourceCreateManyInput | DataSourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataSource update
   */
  export type DataSourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * The data needed to update a DataSource.
     */
    data: XOR<DataSourceUpdateInput, DataSourceUncheckedUpdateInput>
    /**
     * Choose, which DataSource to update.
     */
    where: DataSourceWhereUniqueInput
  }

  /**
   * DataSource updateMany
   */
  export type DataSourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataSources.
     */
    data: XOR<DataSourceUpdateManyMutationInput, DataSourceUncheckedUpdateManyInput>
    /**
     * Filter which DataSources to update
     */
    where?: DataSourceWhereInput
    /**
     * Limit how many DataSources to update.
     */
    limit?: number
  }

  /**
   * DataSource updateManyAndReturn
   */
  export type DataSourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * The data used to update DataSources.
     */
    data: XOR<DataSourceUpdateManyMutationInput, DataSourceUncheckedUpdateManyInput>
    /**
     * Filter which DataSources to update
     */
    where?: DataSourceWhereInput
    /**
     * Limit how many DataSources to update.
     */
    limit?: number
  }

  /**
   * DataSource upsert
   */
  export type DataSourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * The filter to search for the DataSource to update in case it exists.
     */
    where: DataSourceWhereUniqueInput
    /**
     * In case the DataSource found by the `where` argument doesn't exist, create a new DataSource with this data.
     */
    create: XOR<DataSourceCreateInput, DataSourceUncheckedCreateInput>
    /**
     * In case the DataSource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataSourceUpdateInput, DataSourceUncheckedUpdateInput>
  }

  /**
   * DataSource delete
   */
  export type DataSourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter which DataSource to delete.
     */
    where: DataSourceWhereUniqueInput
  }

  /**
   * DataSource deleteMany
   */
  export type DataSourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataSources to delete
     */
    where?: DataSourceWhereInput
    /**
     * Limit how many DataSources to delete.
     */
    limit?: number
  }

  /**
   * DataSource.rawData
   */
  export type DataSource$rawDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawData
     */
    select?: RawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawData
     */
    omit?: RawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawDataInclude<ExtArgs> | null
    where?: RawDataWhereInput
    orderBy?: RawDataOrderByWithRelationInput | RawDataOrderByWithRelationInput[]
    cursor?: RawDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RawDataScalarFieldEnum | RawDataScalarFieldEnum[]
  }

  /**
   * DataSource without action
   */
  export type DataSourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
  }


  /**
   * Model RawData
   */

  export type AggregateRawData = {
    _count: RawDataCountAggregateOutputType | null
    _min: RawDataMinAggregateOutputType | null
    _max: RawDataMaxAggregateOutputType | null
  }

  export type RawDataMinAggregateOutputType = {
    id: string | null
    dataSourceId: string | null
    status: $Enums.RawDataStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RawDataMaxAggregateOutputType = {
    id: string | null
    dataSourceId: string | null
    status: $Enums.RawDataStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RawDataCountAggregateOutputType = {
    id: number
    dataSourceId: number
    payload: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RawDataMinAggregateInputType = {
    id?: true
    dataSourceId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RawDataMaxAggregateInputType = {
    id?: true
    dataSourceId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RawDataCountAggregateInputType = {
    id?: true
    dataSourceId?: true
    payload?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RawDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawData to aggregate.
     */
    where?: RawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawData to fetch.
     */
    orderBy?: RawDataOrderByWithRelationInput | RawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RawData
    **/
    _count?: true | RawDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RawDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RawDataMaxAggregateInputType
  }

  export type GetRawDataAggregateType<T extends RawDataAggregateArgs> = {
        [P in keyof T & keyof AggregateRawData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRawData[P]>
      : GetScalarType<T[P], AggregateRawData[P]>
  }




  export type RawDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawDataWhereInput
    orderBy?: RawDataOrderByWithAggregationInput | RawDataOrderByWithAggregationInput[]
    by: RawDataScalarFieldEnum[] | RawDataScalarFieldEnum
    having?: RawDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RawDataCountAggregateInputType | true
    _min?: RawDataMinAggregateInputType
    _max?: RawDataMaxAggregateInputType
  }

  export type RawDataGroupByOutputType = {
    id: string
    dataSourceId: string
    payload: JsonValue
    status: $Enums.RawDataStatus
    createdAt: Date
    updatedAt: Date
    _count: RawDataCountAggregateOutputType | null
    _min: RawDataMinAggregateOutputType | null
    _max: RawDataMaxAggregateOutputType | null
  }

  type GetRawDataGroupByPayload<T extends RawDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RawDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RawDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RawDataGroupByOutputType[P]>
            : GetScalarType<T[P], RawDataGroupByOutputType[P]>
        }
      >
    >


  export type RawDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataSourceId?: boolean
    payload?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dataSource?: boolean | DataSourceDefaultArgs<ExtArgs>
    processedData?: boolean | RawData$processedDataArgs<ExtArgs>
    _count?: boolean | RawDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rawData"]>

  export type RawDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataSourceId?: boolean
    payload?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dataSource?: boolean | DataSourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rawData"]>

  export type RawDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataSourceId?: boolean
    payload?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dataSource?: boolean | DataSourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rawData"]>

  export type RawDataSelectScalar = {
    id?: boolean
    dataSourceId?: boolean
    payload?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RawDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataSourceId" | "payload" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["rawData"]>
  export type RawDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataSource?: boolean | DataSourceDefaultArgs<ExtArgs>
    processedData?: boolean | RawData$processedDataArgs<ExtArgs>
    _count?: boolean | RawDataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RawDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataSource?: boolean | DataSourceDefaultArgs<ExtArgs>
  }
  export type RawDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataSource?: boolean | DataSourceDefaultArgs<ExtArgs>
  }

  export type $RawDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RawData"
    objects: {
      dataSource: Prisma.$DataSourcePayload<ExtArgs>
      processedData: Prisma.$ProcessedDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dataSourceId: string
      payload: Prisma.JsonValue
      status: $Enums.RawDataStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rawData"]>
    composites: {}
  }

  type RawDataGetPayload<S extends boolean | null | undefined | RawDataDefaultArgs> = $Result.GetResult<Prisma.$RawDataPayload, S>

  type RawDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RawDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RawDataCountAggregateInputType | true
    }

  export interface RawDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RawData'], meta: { name: 'RawData' } }
    /**
     * Find zero or one RawData that matches the filter.
     * @param {RawDataFindUniqueArgs} args - Arguments to find a RawData
     * @example
     * // Get one RawData
     * const rawData = await prisma.rawData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RawDataFindUniqueArgs>(args: SelectSubset<T, RawDataFindUniqueArgs<ExtArgs>>): Prisma__RawDataClient<$Result.GetResult<Prisma.$RawDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RawData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RawDataFindUniqueOrThrowArgs} args - Arguments to find a RawData
     * @example
     * // Get one RawData
     * const rawData = await prisma.rawData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RawDataFindUniqueOrThrowArgs>(args: SelectSubset<T, RawDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RawDataClient<$Result.GetResult<Prisma.$RawDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RawData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawDataFindFirstArgs} args - Arguments to find a RawData
     * @example
     * // Get one RawData
     * const rawData = await prisma.rawData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RawDataFindFirstArgs>(args?: SelectSubset<T, RawDataFindFirstArgs<ExtArgs>>): Prisma__RawDataClient<$Result.GetResult<Prisma.$RawDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RawData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawDataFindFirstOrThrowArgs} args - Arguments to find a RawData
     * @example
     * // Get one RawData
     * const rawData = await prisma.rawData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RawDataFindFirstOrThrowArgs>(args?: SelectSubset<T, RawDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__RawDataClient<$Result.GetResult<Prisma.$RawDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RawData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RawData
     * const rawData = await prisma.rawData.findMany()
     * 
     * // Get first 10 RawData
     * const rawData = await prisma.rawData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rawDataWithIdOnly = await prisma.rawData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RawDataFindManyArgs>(args?: SelectSubset<T, RawDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RawData.
     * @param {RawDataCreateArgs} args - Arguments to create a RawData.
     * @example
     * // Create one RawData
     * const RawData = await prisma.rawData.create({
     *   data: {
     *     // ... data to create a RawData
     *   }
     * })
     * 
     */
    create<T extends RawDataCreateArgs>(args: SelectSubset<T, RawDataCreateArgs<ExtArgs>>): Prisma__RawDataClient<$Result.GetResult<Prisma.$RawDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RawData.
     * @param {RawDataCreateManyArgs} args - Arguments to create many RawData.
     * @example
     * // Create many RawData
     * const rawData = await prisma.rawData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RawDataCreateManyArgs>(args?: SelectSubset<T, RawDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RawData and returns the data saved in the database.
     * @param {RawDataCreateManyAndReturnArgs} args - Arguments to create many RawData.
     * @example
     * // Create many RawData
     * const rawData = await prisma.rawData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RawData and only return the `id`
     * const rawDataWithIdOnly = await prisma.rawData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RawDataCreateManyAndReturnArgs>(args?: SelectSubset<T, RawDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RawData.
     * @param {RawDataDeleteArgs} args - Arguments to delete one RawData.
     * @example
     * // Delete one RawData
     * const RawData = await prisma.rawData.delete({
     *   where: {
     *     // ... filter to delete one RawData
     *   }
     * })
     * 
     */
    delete<T extends RawDataDeleteArgs>(args: SelectSubset<T, RawDataDeleteArgs<ExtArgs>>): Prisma__RawDataClient<$Result.GetResult<Prisma.$RawDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RawData.
     * @param {RawDataUpdateArgs} args - Arguments to update one RawData.
     * @example
     * // Update one RawData
     * const rawData = await prisma.rawData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RawDataUpdateArgs>(args: SelectSubset<T, RawDataUpdateArgs<ExtArgs>>): Prisma__RawDataClient<$Result.GetResult<Prisma.$RawDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RawData.
     * @param {RawDataDeleteManyArgs} args - Arguments to filter RawData to delete.
     * @example
     * // Delete a few RawData
     * const { count } = await prisma.rawData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RawDataDeleteManyArgs>(args?: SelectSubset<T, RawDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RawData
     * const rawData = await prisma.rawData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RawDataUpdateManyArgs>(args: SelectSubset<T, RawDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawData and returns the data updated in the database.
     * @param {RawDataUpdateManyAndReturnArgs} args - Arguments to update many RawData.
     * @example
     * // Update many RawData
     * const rawData = await prisma.rawData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RawData and only return the `id`
     * const rawDataWithIdOnly = await prisma.rawData.updateManyAndReturn({
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
    updateManyAndReturn<T extends RawDataUpdateManyAndReturnArgs>(args: SelectSubset<T, RawDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RawData.
     * @param {RawDataUpsertArgs} args - Arguments to update or create a RawData.
     * @example
     * // Update or create a RawData
     * const rawData = await prisma.rawData.upsert({
     *   create: {
     *     // ... data to create a RawData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RawData we want to update
     *   }
     * })
     */
    upsert<T extends RawDataUpsertArgs>(args: SelectSubset<T, RawDataUpsertArgs<ExtArgs>>): Prisma__RawDataClient<$Result.GetResult<Prisma.$RawDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawDataCountArgs} args - Arguments to filter RawData to count.
     * @example
     * // Count the number of RawData
     * const count = await prisma.rawData.count({
     *   where: {
     *     // ... the filter for the RawData we want to count
     *   }
     * })
    **/
    count<T extends RawDataCountArgs>(
      args?: Subset<T, RawDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RawDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RawDataAggregateArgs>(args: Subset<T, RawDataAggregateArgs>): Prisma.PrismaPromise<GetRawDataAggregateType<T>>

    /**
     * Group by RawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawDataGroupByArgs} args - Group by arguments.
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
      T extends RawDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RawDataGroupByArgs['orderBy'] }
        : { orderBy?: RawDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RawDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRawDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RawData model
   */
  readonly fields: RawDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RawData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RawDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataSource<T extends DataSourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DataSourceDefaultArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    processedData<T extends RawData$processedDataArgs<ExtArgs> = {}>(args?: Subset<T, RawData$processedDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RawData model
   */
  interface RawDataFieldRefs {
    readonly id: FieldRef<"RawData", 'String'>
    readonly dataSourceId: FieldRef<"RawData", 'String'>
    readonly payload: FieldRef<"RawData", 'Json'>
    readonly status: FieldRef<"RawData", 'RawDataStatus'>
    readonly createdAt: FieldRef<"RawData", 'DateTime'>
    readonly updatedAt: FieldRef<"RawData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RawData findUnique
   */
  export type RawDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawData
     */
    select?: RawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawData
     */
    omit?: RawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawDataInclude<ExtArgs> | null
    /**
     * Filter, which RawData to fetch.
     */
    where: RawDataWhereUniqueInput
  }

  /**
   * RawData findUniqueOrThrow
   */
  export type RawDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawData
     */
    select?: RawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawData
     */
    omit?: RawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawDataInclude<ExtArgs> | null
    /**
     * Filter, which RawData to fetch.
     */
    where: RawDataWhereUniqueInput
  }

  /**
   * RawData findFirst
   */
  export type RawDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawData
     */
    select?: RawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawData
     */
    omit?: RawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawDataInclude<ExtArgs> | null
    /**
     * Filter, which RawData to fetch.
     */
    where?: RawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawData to fetch.
     */
    orderBy?: RawDataOrderByWithRelationInput | RawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawData.
     */
    cursor?: RawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawData.
     */
    distinct?: RawDataScalarFieldEnum | RawDataScalarFieldEnum[]
  }

  /**
   * RawData findFirstOrThrow
   */
  export type RawDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawData
     */
    select?: RawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawData
     */
    omit?: RawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawDataInclude<ExtArgs> | null
    /**
     * Filter, which RawData to fetch.
     */
    where?: RawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawData to fetch.
     */
    orderBy?: RawDataOrderByWithRelationInput | RawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawData.
     */
    cursor?: RawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawData.
     */
    distinct?: RawDataScalarFieldEnum | RawDataScalarFieldEnum[]
  }

  /**
   * RawData findMany
   */
  export type RawDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawData
     */
    select?: RawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawData
     */
    omit?: RawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawDataInclude<ExtArgs> | null
    /**
     * Filter, which RawData to fetch.
     */
    where?: RawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawData to fetch.
     */
    orderBy?: RawDataOrderByWithRelationInput | RawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RawData.
     */
    cursor?: RawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawData.
     */
    skip?: number
    distinct?: RawDataScalarFieldEnum | RawDataScalarFieldEnum[]
  }

  /**
   * RawData create
   */
  export type RawDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawData
     */
    select?: RawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawData
     */
    omit?: RawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawDataInclude<ExtArgs> | null
    /**
     * The data needed to create a RawData.
     */
    data: XOR<RawDataCreateInput, RawDataUncheckedCreateInput>
  }

  /**
   * RawData createMany
   */
  export type RawDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RawData.
     */
    data: RawDataCreateManyInput | RawDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RawData createManyAndReturn
   */
  export type RawDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawData
     */
    select?: RawDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RawData
     */
    omit?: RawDataOmit<ExtArgs> | null
    /**
     * The data used to create many RawData.
     */
    data: RawDataCreateManyInput | RawDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RawData update
   */
  export type RawDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawData
     */
    select?: RawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawData
     */
    omit?: RawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawDataInclude<ExtArgs> | null
    /**
     * The data needed to update a RawData.
     */
    data: XOR<RawDataUpdateInput, RawDataUncheckedUpdateInput>
    /**
     * Choose, which RawData to update.
     */
    where: RawDataWhereUniqueInput
  }

  /**
   * RawData updateMany
   */
  export type RawDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RawData.
     */
    data: XOR<RawDataUpdateManyMutationInput, RawDataUncheckedUpdateManyInput>
    /**
     * Filter which RawData to update
     */
    where?: RawDataWhereInput
    /**
     * Limit how many RawData to update.
     */
    limit?: number
  }

  /**
   * RawData updateManyAndReturn
   */
  export type RawDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawData
     */
    select?: RawDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RawData
     */
    omit?: RawDataOmit<ExtArgs> | null
    /**
     * The data used to update RawData.
     */
    data: XOR<RawDataUpdateManyMutationInput, RawDataUncheckedUpdateManyInput>
    /**
     * Filter which RawData to update
     */
    where?: RawDataWhereInput
    /**
     * Limit how many RawData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RawData upsert
   */
  export type RawDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawData
     */
    select?: RawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawData
     */
    omit?: RawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawDataInclude<ExtArgs> | null
    /**
     * The filter to search for the RawData to update in case it exists.
     */
    where: RawDataWhereUniqueInput
    /**
     * In case the RawData found by the `where` argument doesn't exist, create a new RawData with this data.
     */
    create: XOR<RawDataCreateInput, RawDataUncheckedCreateInput>
    /**
     * In case the RawData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RawDataUpdateInput, RawDataUncheckedUpdateInput>
  }

  /**
   * RawData delete
   */
  export type RawDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawData
     */
    select?: RawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawData
     */
    omit?: RawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawDataInclude<ExtArgs> | null
    /**
     * Filter which RawData to delete.
     */
    where: RawDataWhereUniqueInput
  }

  /**
   * RawData deleteMany
   */
  export type RawDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawData to delete
     */
    where?: RawDataWhereInput
    /**
     * Limit how many RawData to delete.
     */
    limit?: number
  }

  /**
   * RawData.processedData
   */
  export type RawData$processedDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedData
     */
    select?: ProcessedDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedData
     */
    omit?: ProcessedDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedDataInclude<ExtArgs> | null
    where?: ProcessedDataWhereInput
    orderBy?: ProcessedDataOrderByWithRelationInput | ProcessedDataOrderByWithRelationInput[]
    cursor?: ProcessedDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessedDataScalarFieldEnum | ProcessedDataScalarFieldEnum[]
  }

  /**
   * RawData without action
   */
  export type RawDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawData
     */
    select?: RawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawData
     */
    omit?: RawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawDataInclude<ExtArgs> | null
  }


  /**
   * Model ProcessedData
   */

  export type AggregateProcessedData = {
    _count: ProcessedDataCountAggregateOutputType | null
    _min: ProcessedDataMinAggregateOutputType | null
    _max: ProcessedDataMaxAggregateOutputType | null
  }

  export type ProcessedDataMinAggregateOutputType = {
    id: string | null
    rawDataId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcessedDataMaxAggregateOutputType = {
    id: string | null
    rawDataId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcessedDataCountAggregateOutputType = {
    id: number
    rawDataId: number
    result: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProcessedDataMinAggregateInputType = {
    id?: true
    rawDataId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcessedDataMaxAggregateInputType = {
    id?: true
    rawDataId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcessedDataCountAggregateInputType = {
    id?: true
    rawDataId?: true
    result?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProcessedDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessedData to aggregate.
     */
    where?: ProcessedDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedData to fetch.
     */
    orderBy?: ProcessedDataOrderByWithRelationInput | ProcessedDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessedDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcessedData
    **/
    _count?: true | ProcessedDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessedDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessedDataMaxAggregateInputType
  }

  export type GetProcessedDataAggregateType<T extends ProcessedDataAggregateArgs> = {
        [P in keyof T & keyof AggregateProcessedData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessedData[P]>
      : GetScalarType<T[P], AggregateProcessedData[P]>
  }




  export type ProcessedDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessedDataWhereInput
    orderBy?: ProcessedDataOrderByWithAggregationInput | ProcessedDataOrderByWithAggregationInput[]
    by: ProcessedDataScalarFieldEnum[] | ProcessedDataScalarFieldEnum
    having?: ProcessedDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessedDataCountAggregateInputType | true
    _min?: ProcessedDataMinAggregateInputType
    _max?: ProcessedDataMaxAggregateInputType
  }

  export type ProcessedDataGroupByOutputType = {
    id: string
    rawDataId: string
    result: JsonValue
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ProcessedDataCountAggregateOutputType | null
    _min: ProcessedDataMinAggregateOutputType | null
    _max: ProcessedDataMaxAggregateOutputType | null
  }

  type GetProcessedDataGroupByPayload<T extends ProcessedDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessedDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessedDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessedDataGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessedDataGroupByOutputType[P]>
        }
      >
    >


  export type ProcessedDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rawDataId?: boolean
    result?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rawData?: boolean | RawDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processedData"]>

  export type ProcessedDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rawDataId?: boolean
    result?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rawData?: boolean | RawDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processedData"]>

  export type ProcessedDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rawDataId?: boolean
    result?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rawData?: boolean | RawDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processedData"]>

  export type ProcessedDataSelectScalar = {
    id?: boolean
    rawDataId?: boolean
    result?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProcessedDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rawDataId" | "result" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["processedData"]>
  export type ProcessedDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rawData?: boolean | RawDataDefaultArgs<ExtArgs>
  }
  export type ProcessedDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rawData?: boolean | RawDataDefaultArgs<ExtArgs>
  }
  export type ProcessedDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rawData?: boolean | RawDataDefaultArgs<ExtArgs>
  }

  export type $ProcessedDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcessedData"
    objects: {
      rawData: Prisma.$RawDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rawDataId: string
      result: Prisma.JsonValue
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["processedData"]>
    composites: {}
  }

  type ProcessedDataGetPayload<S extends boolean | null | undefined | ProcessedDataDefaultArgs> = $Result.GetResult<Prisma.$ProcessedDataPayload, S>

  type ProcessedDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessedDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessedDataCountAggregateInputType | true
    }

  export interface ProcessedDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcessedData'], meta: { name: 'ProcessedData' } }
    /**
     * Find zero or one ProcessedData that matches the filter.
     * @param {ProcessedDataFindUniqueArgs} args - Arguments to find a ProcessedData
     * @example
     * // Get one ProcessedData
     * const processedData = await prisma.processedData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessedDataFindUniqueArgs>(args: SelectSubset<T, ProcessedDataFindUniqueArgs<ExtArgs>>): Prisma__ProcessedDataClient<$Result.GetResult<Prisma.$ProcessedDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcessedData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessedDataFindUniqueOrThrowArgs} args - Arguments to find a ProcessedData
     * @example
     * // Get one ProcessedData
     * const processedData = await prisma.processedData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessedDataFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessedDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessedDataClient<$Result.GetResult<Prisma.$ProcessedDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessedData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedDataFindFirstArgs} args - Arguments to find a ProcessedData
     * @example
     * // Get one ProcessedData
     * const processedData = await prisma.processedData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessedDataFindFirstArgs>(args?: SelectSubset<T, ProcessedDataFindFirstArgs<ExtArgs>>): Prisma__ProcessedDataClient<$Result.GetResult<Prisma.$ProcessedDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessedData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedDataFindFirstOrThrowArgs} args - Arguments to find a ProcessedData
     * @example
     * // Get one ProcessedData
     * const processedData = await prisma.processedData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessedDataFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessedDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessedDataClient<$Result.GetResult<Prisma.$ProcessedDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcessedData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessedData
     * const processedData = await prisma.processedData.findMany()
     * 
     * // Get first 10 ProcessedData
     * const processedData = await prisma.processedData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const processedDataWithIdOnly = await prisma.processedData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcessedDataFindManyArgs>(args?: SelectSubset<T, ProcessedDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcessedData.
     * @param {ProcessedDataCreateArgs} args - Arguments to create a ProcessedData.
     * @example
     * // Create one ProcessedData
     * const ProcessedData = await prisma.processedData.create({
     *   data: {
     *     // ... data to create a ProcessedData
     *   }
     * })
     * 
     */
    create<T extends ProcessedDataCreateArgs>(args: SelectSubset<T, ProcessedDataCreateArgs<ExtArgs>>): Prisma__ProcessedDataClient<$Result.GetResult<Prisma.$ProcessedDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcessedData.
     * @param {ProcessedDataCreateManyArgs} args - Arguments to create many ProcessedData.
     * @example
     * // Create many ProcessedData
     * const processedData = await prisma.processedData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessedDataCreateManyArgs>(args?: SelectSubset<T, ProcessedDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProcessedData and returns the data saved in the database.
     * @param {ProcessedDataCreateManyAndReturnArgs} args - Arguments to create many ProcessedData.
     * @example
     * // Create many ProcessedData
     * const processedData = await prisma.processedData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProcessedData and only return the `id`
     * const processedDataWithIdOnly = await prisma.processedData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessedDataCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessedDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProcessedData.
     * @param {ProcessedDataDeleteArgs} args - Arguments to delete one ProcessedData.
     * @example
     * // Delete one ProcessedData
     * const ProcessedData = await prisma.processedData.delete({
     *   where: {
     *     // ... filter to delete one ProcessedData
     *   }
     * })
     * 
     */
    delete<T extends ProcessedDataDeleteArgs>(args: SelectSubset<T, ProcessedDataDeleteArgs<ExtArgs>>): Prisma__ProcessedDataClient<$Result.GetResult<Prisma.$ProcessedDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcessedData.
     * @param {ProcessedDataUpdateArgs} args - Arguments to update one ProcessedData.
     * @example
     * // Update one ProcessedData
     * const processedData = await prisma.processedData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessedDataUpdateArgs>(args: SelectSubset<T, ProcessedDataUpdateArgs<ExtArgs>>): Prisma__ProcessedDataClient<$Result.GetResult<Prisma.$ProcessedDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcessedData.
     * @param {ProcessedDataDeleteManyArgs} args - Arguments to filter ProcessedData to delete.
     * @example
     * // Delete a few ProcessedData
     * const { count } = await prisma.processedData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessedDataDeleteManyArgs>(args?: SelectSubset<T, ProcessedDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessedData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessedData
     * const processedData = await prisma.processedData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessedDataUpdateManyArgs>(args: SelectSubset<T, ProcessedDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessedData and returns the data updated in the database.
     * @param {ProcessedDataUpdateManyAndReturnArgs} args - Arguments to update many ProcessedData.
     * @example
     * // Update many ProcessedData
     * const processedData = await prisma.processedData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProcessedData and only return the `id`
     * const processedDataWithIdOnly = await prisma.processedData.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessedDataUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessedDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProcessedData.
     * @param {ProcessedDataUpsertArgs} args - Arguments to update or create a ProcessedData.
     * @example
     * // Update or create a ProcessedData
     * const processedData = await prisma.processedData.upsert({
     *   create: {
     *     // ... data to create a ProcessedData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessedData we want to update
     *   }
     * })
     */
    upsert<T extends ProcessedDataUpsertArgs>(args: SelectSubset<T, ProcessedDataUpsertArgs<ExtArgs>>): Prisma__ProcessedDataClient<$Result.GetResult<Prisma.$ProcessedDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcessedData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedDataCountArgs} args - Arguments to filter ProcessedData to count.
     * @example
     * // Count the number of ProcessedData
     * const count = await prisma.processedData.count({
     *   where: {
     *     // ... the filter for the ProcessedData we want to count
     *   }
     * })
    **/
    count<T extends ProcessedDataCountArgs>(
      args?: Subset<T, ProcessedDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessedDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcessedData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessedDataAggregateArgs>(args: Subset<T, ProcessedDataAggregateArgs>): Prisma.PrismaPromise<GetProcessedDataAggregateType<T>>

    /**
     * Group by ProcessedData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedDataGroupByArgs} args - Group by arguments.
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
      T extends ProcessedDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessedDataGroupByArgs['orderBy'] }
        : { orderBy?: ProcessedDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcessedDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessedDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcessedData model
   */
  readonly fields: ProcessedDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessedData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessedDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rawData<T extends RawDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RawDataDefaultArgs<ExtArgs>>): Prisma__RawDataClient<$Result.GetResult<Prisma.$RawDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProcessedData model
   */
  interface ProcessedDataFieldRefs {
    readonly id: FieldRef<"ProcessedData", 'String'>
    readonly rawDataId: FieldRef<"ProcessedData", 'String'>
    readonly result: FieldRef<"ProcessedData", 'Json'>
    readonly status: FieldRef<"ProcessedData", 'String'>
    readonly createdAt: FieldRef<"ProcessedData", 'DateTime'>
    readonly updatedAt: FieldRef<"ProcessedData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProcessedData findUnique
   */
  export type ProcessedDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedData
     */
    select?: ProcessedDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedData
     */
    omit?: ProcessedDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedDataInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedData to fetch.
     */
    where: ProcessedDataWhereUniqueInput
  }

  /**
   * ProcessedData findUniqueOrThrow
   */
  export type ProcessedDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedData
     */
    select?: ProcessedDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedData
     */
    omit?: ProcessedDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedDataInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedData to fetch.
     */
    where: ProcessedDataWhereUniqueInput
  }

  /**
   * ProcessedData findFirst
   */
  export type ProcessedDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedData
     */
    select?: ProcessedDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedData
     */
    omit?: ProcessedDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedDataInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedData to fetch.
     */
    where?: ProcessedDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedData to fetch.
     */
    orderBy?: ProcessedDataOrderByWithRelationInput | ProcessedDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessedData.
     */
    cursor?: ProcessedDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessedData.
     */
    distinct?: ProcessedDataScalarFieldEnum | ProcessedDataScalarFieldEnum[]
  }

  /**
   * ProcessedData findFirstOrThrow
   */
  export type ProcessedDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedData
     */
    select?: ProcessedDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedData
     */
    omit?: ProcessedDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedDataInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedData to fetch.
     */
    where?: ProcessedDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedData to fetch.
     */
    orderBy?: ProcessedDataOrderByWithRelationInput | ProcessedDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessedData.
     */
    cursor?: ProcessedDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessedData.
     */
    distinct?: ProcessedDataScalarFieldEnum | ProcessedDataScalarFieldEnum[]
  }

  /**
   * ProcessedData findMany
   */
  export type ProcessedDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedData
     */
    select?: ProcessedDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedData
     */
    omit?: ProcessedDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedDataInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedData to fetch.
     */
    where?: ProcessedDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedData to fetch.
     */
    orderBy?: ProcessedDataOrderByWithRelationInput | ProcessedDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcessedData.
     */
    cursor?: ProcessedDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedData.
     */
    skip?: number
    distinct?: ProcessedDataScalarFieldEnum | ProcessedDataScalarFieldEnum[]
  }

  /**
   * ProcessedData create
   */
  export type ProcessedDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedData
     */
    select?: ProcessedDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedData
     */
    omit?: ProcessedDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedDataInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcessedData.
     */
    data: XOR<ProcessedDataCreateInput, ProcessedDataUncheckedCreateInput>
  }

  /**
   * ProcessedData createMany
   */
  export type ProcessedDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessedData.
     */
    data: ProcessedDataCreateManyInput | ProcessedDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcessedData createManyAndReturn
   */
  export type ProcessedDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedData
     */
    select?: ProcessedDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedData
     */
    omit?: ProcessedDataOmit<ExtArgs> | null
    /**
     * The data used to create many ProcessedData.
     */
    data: ProcessedDataCreateManyInput | ProcessedDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessedData update
   */
  export type ProcessedDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedData
     */
    select?: ProcessedDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedData
     */
    omit?: ProcessedDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedDataInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcessedData.
     */
    data: XOR<ProcessedDataUpdateInput, ProcessedDataUncheckedUpdateInput>
    /**
     * Choose, which ProcessedData to update.
     */
    where: ProcessedDataWhereUniqueInput
  }

  /**
   * ProcessedData updateMany
   */
  export type ProcessedDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessedData.
     */
    data: XOR<ProcessedDataUpdateManyMutationInput, ProcessedDataUncheckedUpdateManyInput>
    /**
     * Filter which ProcessedData to update
     */
    where?: ProcessedDataWhereInput
    /**
     * Limit how many ProcessedData to update.
     */
    limit?: number
  }

  /**
   * ProcessedData updateManyAndReturn
   */
  export type ProcessedDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedData
     */
    select?: ProcessedDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedData
     */
    omit?: ProcessedDataOmit<ExtArgs> | null
    /**
     * The data used to update ProcessedData.
     */
    data: XOR<ProcessedDataUpdateManyMutationInput, ProcessedDataUncheckedUpdateManyInput>
    /**
     * Filter which ProcessedData to update
     */
    where?: ProcessedDataWhereInput
    /**
     * Limit how many ProcessedData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessedData upsert
   */
  export type ProcessedDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedData
     */
    select?: ProcessedDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedData
     */
    omit?: ProcessedDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedDataInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcessedData to update in case it exists.
     */
    where: ProcessedDataWhereUniqueInput
    /**
     * In case the ProcessedData found by the `where` argument doesn't exist, create a new ProcessedData with this data.
     */
    create: XOR<ProcessedDataCreateInput, ProcessedDataUncheckedCreateInput>
    /**
     * In case the ProcessedData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessedDataUpdateInput, ProcessedDataUncheckedUpdateInput>
  }

  /**
   * ProcessedData delete
   */
  export type ProcessedDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedData
     */
    select?: ProcessedDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedData
     */
    omit?: ProcessedDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedDataInclude<ExtArgs> | null
    /**
     * Filter which ProcessedData to delete.
     */
    where: ProcessedDataWhereUniqueInput
  }

  /**
   * ProcessedData deleteMany
   */
  export type ProcessedDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessedData to delete
     */
    where?: ProcessedDataWhereInput
    /**
     * Limit how many ProcessedData to delete.
     */
    limit?: number
  }

  /**
   * ProcessedData without action
   */
  export type ProcessedDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedData
     */
    select?: ProcessedDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedData
     */
    omit?: ProcessedDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedDataInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    message: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    message: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    entity: number
    entityId: number
    message: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    message?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    message?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    entity: string
    entityId: string | null
    message: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "entity" | "entityId" | "message" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      entity: string
      entityId: string | null
      message: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly message: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
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


  export const DataSourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    connection: 'connection',
    baseURL: 'baseURL',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DataSourceScalarFieldEnum = (typeof DataSourceScalarFieldEnum)[keyof typeof DataSourceScalarFieldEnum]


  export const RawDataScalarFieldEnum: {
    id: 'id',
    dataSourceId: 'dataSourceId',
    payload: 'payload',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RawDataScalarFieldEnum = (typeof RawDataScalarFieldEnum)[keyof typeof RawDataScalarFieldEnum]


  export const ProcessedDataScalarFieldEnum: {
    id: 'id',
    rawDataId: 'rawDataId',
    result: 'result',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProcessedDataScalarFieldEnum = (typeof ProcessedDataScalarFieldEnum)[keyof typeof ProcessedDataScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DataSourceType'
   */
  export type EnumDataSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DataSourceType'>
    


  /**
   * Reference to a field of type 'DataSourceType[]'
   */
  export type ListEnumDataSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DataSourceType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'RawDataStatus'
   */
  export type EnumRawDataStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RawDataStatus'>
    


  /**
   * Reference to a field of type 'RawDataStatus[]'
   */
  export type ListEnumRawDataStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RawDataStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DataSourceWhereInput = {
    AND?: DataSourceWhereInput | DataSourceWhereInput[]
    OR?: DataSourceWhereInput[]
    NOT?: DataSourceWhereInput | DataSourceWhereInput[]
    id?: StringFilter<"DataSource"> | string
    name?: StringFilter<"DataSource"> | string
    type?: EnumDataSourceTypeFilter<"DataSource"> | $Enums.DataSourceType
    connection?: StringNullableFilter<"DataSource"> | string | null
    baseURL?: StringNullableFilter<"DataSource"> | string | null
    isActive?: BoolFilter<"DataSource"> | boolean
    createdAt?: DateTimeFilter<"DataSource"> | Date | string
    updatedAt?: DateTimeFilter<"DataSource"> | Date | string
    rawData?: RawDataListRelationFilter
  }

  export type DataSourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    connection?: SortOrderInput | SortOrder
    baseURL?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rawData?: RawDataOrderByRelationAggregateInput
  }

  export type DataSourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DataSourceWhereInput | DataSourceWhereInput[]
    OR?: DataSourceWhereInput[]
    NOT?: DataSourceWhereInput | DataSourceWhereInput[]
    name?: StringFilter<"DataSource"> | string
    type?: EnumDataSourceTypeFilter<"DataSource"> | $Enums.DataSourceType
    connection?: StringNullableFilter<"DataSource"> | string | null
    baseURL?: StringNullableFilter<"DataSource"> | string | null
    isActive?: BoolFilter<"DataSource"> | boolean
    createdAt?: DateTimeFilter<"DataSource"> | Date | string
    updatedAt?: DateTimeFilter<"DataSource"> | Date | string
    rawData?: RawDataListRelationFilter
  }, "id">

  export type DataSourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    connection?: SortOrderInput | SortOrder
    baseURL?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DataSourceCountOrderByAggregateInput
    _max?: DataSourceMaxOrderByAggregateInput
    _min?: DataSourceMinOrderByAggregateInput
  }

  export type DataSourceScalarWhereWithAggregatesInput = {
    AND?: DataSourceScalarWhereWithAggregatesInput | DataSourceScalarWhereWithAggregatesInput[]
    OR?: DataSourceScalarWhereWithAggregatesInput[]
    NOT?: DataSourceScalarWhereWithAggregatesInput | DataSourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DataSource"> | string
    name?: StringWithAggregatesFilter<"DataSource"> | string
    type?: EnumDataSourceTypeWithAggregatesFilter<"DataSource"> | $Enums.DataSourceType
    connection?: StringNullableWithAggregatesFilter<"DataSource"> | string | null
    baseURL?: StringNullableWithAggregatesFilter<"DataSource"> | string | null
    isActive?: BoolWithAggregatesFilter<"DataSource"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DataSource"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DataSource"> | Date | string
  }

  export type RawDataWhereInput = {
    AND?: RawDataWhereInput | RawDataWhereInput[]
    OR?: RawDataWhereInput[]
    NOT?: RawDataWhereInput | RawDataWhereInput[]
    id?: StringFilter<"RawData"> | string
    dataSourceId?: StringFilter<"RawData"> | string
    payload?: JsonFilter<"RawData">
    status?: EnumRawDataStatusFilter<"RawData"> | $Enums.RawDataStatus
    createdAt?: DateTimeFilter<"RawData"> | Date | string
    updatedAt?: DateTimeFilter<"RawData"> | Date | string
    dataSource?: XOR<DataSourceScalarRelationFilter, DataSourceWhereInput>
    processedData?: ProcessedDataListRelationFilter
  }

  export type RawDataOrderByWithRelationInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dataSource?: DataSourceOrderByWithRelationInput
    processedData?: ProcessedDataOrderByRelationAggregateInput
  }

  export type RawDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RawDataWhereInput | RawDataWhereInput[]
    OR?: RawDataWhereInput[]
    NOT?: RawDataWhereInput | RawDataWhereInput[]
    dataSourceId?: StringFilter<"RawData"> | string
    payload?: JsonFilter<"RawData">
    status?: EnumRawDataStatusFilter<"RawData"> | $Enums.RawDataStatus
    createdAt?: DateTimeFilter<"RawData"> | Date | string
    updatedAt?: DateTimeFilter<"RawData"> | Date | string
    dataSource?: XOR<DataSourceScalarRelationFilter, DataSourceWhereInput>
    processedData?: ProcessedDataListRelationFilter
  }, "id">

  export type RawDataOrderByWithAggregationInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RawDataCountOrderByAggregateInput
    _max?: RawDataMaxOrderByAggregateInput
    _min?: RawDataMinOrderByAggregateInput
  }

  export type RawDataScalarWhereWithAggregatesInput = {
    AND?: RawDataScalarWhereWithAggregatesInput | RawDataScalarWhereWithAggregatesInput[]
    OR?: RawDataScalarWhereWithAggregatesInput[]
    NOT?: RawDataScalarWhereWithAggregatesInput | RawDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RawData"> | string
    dataSourceId?: StringWithAggregatesFilter<"RawData"> | string
    payload?: JsonWithAggregatesFilter<"RawData">
    status?: EnumRawDataStatusWithAggregatesFilter<"RawData"> | $Enums.RawDataStatus
    createdAt?: DateTimeWithAggregatesFilter<"RawData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RawData"> | Date | string
  }

  export type ProcessedDataWhereInput = {
    AND?: ProcessedDataWhereInput | ProcessedDataWhereInput[]
    OR?: ProcessedDataWhereInput[]
    NOT?: ProcessedDataWhereInput | ProcessedDataWhereInput[]
    id?: StringFilter<"ProcessedData"> | string
    rawDataId?: StringFilter<"ProcessedData"> | string
    result?: JsonFilter<"ProcessedData">
    status?: StringFilter<"ProcessedData"> | string
    createdAt?: DateTimeFilter<"ProcessedData"> | Date | string
    updatedAt?: DateTimeFilter<"ProcessedData"> | Date | string
    rawData?: XOR<RawDataScalarRelationFilter, RawDataWhereInput>
  }

  export type ProcessedDataOrderByWithRelationInput = {
    id?: SortOrder
    rawDataId?: SortOrder
    result?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rawData?: RawDataOrderByWithRelationInput
  }

  export type ProcessedDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProcessedDataWhereInput | ProcessedDataWhereInput[]
    OR?: ProcessedDataWhereInput[]
    NOT?: ProcessedDataWhereInput | ProcessedDataWhereInput[]
    rawDataId?: StringFilter<"ProcessedData"> | string
    result?: JsonFilter<"ProcessedData">
    status?: StringFilter<"ProcessedData"> | string
    createdAt?: DateTimeFilter<"ProcessedData"> | Date | string
    updatedAt?: DateTimeFilter<"ProcessedData"> | Date | string
    rawData?: XOR<RawDataScalarRelationFilter, RawDataWhereInput>
  }, "id">

  export type ProcessedDataOrderByWithAggregationInput = {
    id?: SortOrder
    rawDataId?: SortOrder
    result?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProcessedDataCountOrderByAggregateInput
    _max?: ProcessedDataMaxOrderByAggregateInput
    _min?: ProcessedDataMinOrderByAggregateInput
  }

  export type ProcessedDataScalarWhereWithAggregatesInput = {
    AND?: ProcessedDataScalarWhereWithAggregatesInput | ProcessedDataScalarWhereWithAggregatesInput[]
    OR?: ProcessedDataScalarWhereWithAggregatesInput[]
    NOT?: ProcessedDataScalarWhereWithAggregatesInput | ProcessedDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProcessedData"> | string
    rawDataId?: StringWithAggregatesFilter<"ProcessedData"> | string
    result?: JsonWithAggregatesFilter<"ProcessedData">
    status?: StringWithAggregatesFilter<"ProcessedData"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProcessedData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProcessedData"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    message?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    message?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    message?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type DataSourceCreateInput = {
    id?: string
    name: string
    type: $Enums.DataSourceType
    connection?: string | null
    baseURL?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rawData?: RawDataCreateNestedManyWithoutDataSourceInput
  }

  export type DataSourceUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.DataSourceType
    connection?: string | null
    baseURL?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rawData?: RawDataUncheckedCreateNestedManyWithoutDataSourceInput
  }

  export type DataSourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    connection?: NullableStringFieldUpdateOperationsInput | string | null
    baseURL?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawData?: RawDataUpdateManyWithoutDataSourceNestedInput
  }

  export type DataSourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    connection?: NullableStringFieldUpdateOperationsInput | string | null
    baseURL?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawData?: RawDataUncheckedUpdateManyWithoutDataSourceNestedInput
  }

  export type DataSourceCreateManyInput = {
    id?: string
    name: string
    type: $Enums.DataSourceType
    connection?: string | null
    baseURL?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataSourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    connection?: NullableStringFieldUpdateOperationsInput | string | null
    baseURL?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    connection?: NullableStringFieldUpdateOperationsInput | string | null
    baseURL?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawDataCreateInput = {
    id?: string
    payload: JsonNullValueInput | InputJsonValue
    status: $Enums.RawDataStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSource: DataSourceCreateNestedOneWithoutRawDataInput
    processedData?: ProcessedDataCreateNestedManyWithoutRawDataInput
  }

  export type RawDataUncheckedCreateInput = {
    id?: string
    dataSourceId: string
    payload: JsonNullValueInput | InputJsonValue
    status: $Enums.RawDataStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    processedData?: ProcessedDataUncheckedCreateNestedManyWithoutRawDataInput
  }

  export type RawDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumRawDataStatusFieldUpdateOperationsInput | $Enums.RawDataStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSource?: DataSourceUpdateOneRequiredWithoutRawDataNestedInput
    processedData?: ProcessedDataUpdateManyWithoutRawDataNestedInput
  }

  export type RawDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataSourceId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumRawDataStatusFieldUpdateOperationsInput | $Enums.RawDataStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedData?: ProcessedDataUncheckedUpdateManyWithoutRawDataNestedInput
  }

  export type RawDataCreateManyInput = {
    id?: string
    dataSourceId: string
    payload: JsonNullValueInput | InputJsonValue
    status: $Enums.RawDataStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RawDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumRawDataStatusFieldUpdateOperationsInput | $Enums.RawDataStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataSourceId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumRawDataStatusFieldUpdateOperationsInput | $Enums.RawDataStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedDataCreateInput = {
    id?: string
    result: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rawData: RawDataCreateNestedOneWithoutProcessedDataInput
  }

  export type ProcessedDataUncheckedCreateInput = {
    id?: string
    rawDataId: string
    result: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessedDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawData?: RawDataUpdateOneRequiredWithoutProcessedDataNestedInput
  }

  export type ProcessedDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawDataId?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedDataCreateManyInput = {
    id?: string
    rawDataId: string
    result: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessedDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawDataId?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    message?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    message?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    message?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumDataSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DataSourceType | EnumDataSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDataSourceTypeFilter<$PrismaModel> | $Enums.DataSourceType
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RawDataListRelationFilter = {
    every?: RawDataWhereInput
    some?: RawDataWhereInput
    none?: RawDataWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RawDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DataSourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    connection?: SortOrder
    baseURL?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    connection?: SortOrder
    baseURL?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataSourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    connection?: SortOrder
    baseURL?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumDataSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DataSourceType | EnumDataSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDataSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DataSourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDataSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumDataSourceTypeFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumRawDataStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RawDataStatus | EnumRawDataStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RawDataStatus[] | ListEnumRawDataStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RawDataStatus[] | ListEnumRawDataStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRawDataStatusFilter<$PrismaModel> | $Enums.RawDataStatus
  }

  export type DataSourceScalarRelationFilter = {
    is?: DataSourceWhereInput
    isNot?: DataSourceWhereInput
  }

  export type ProcessedDataListRelationFilter = {
    every?: ProcessedDataWhereInput
    some?: ProcessedDataWhereInput
    none?: ProcessedDataWhereInput
  }

  export type ProcessedDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RawDataCountOrderByAggregateInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RawDataMaxOrderByAggregateInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RawDataMinOrderByAggregateInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumRawDataStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RawDataStatus | EnumRawDataStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RawDataStatus[] | ListEnumRawDataStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RawDataStatus[] | ListEnumRawDataStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRawDataStatusWithAggregatesFilter<$PrismaModel> | $Enums.RawDataStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRawDataStatusFilter<$PrismaModel>
    _max?: NestedEnumRawDataStatusFilter<$PrismaModel>
  }

  export type RawDataScalarRelationFilter = {
    is?: RawDataWhereInput
    isNot?: RawDataWhereInput
  }

  export type ProcessedDataCountOrderByAggregateInput = {
    id?: SortOrder
    rawDataId?: SortOrder
    result?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessedDataMaxOrderByAggregateInput = {
    id?: SortOrder
    rawDataId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessedDataMinOrderByAggregateInput = {
    id?: SortOrder
    rawDataId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type RawDataCreateNestedManyWithoutDataSourceInput = {
    create?: XOR<RawDataCreateWithoutDataSourceInput, RawDataUncheckedCreateWithoutDataSourceInput> | RawDataCreateWithoutDataSourceInput[] | RawDataUncheckedCreateWithoutDataSourceInput[]
    connectOrCreate?: RawDataCreateOrConnectWithoutDataSourceInput | RawDataCreateOrConnectWithoutDataSourceInput[]
    createMany?: RawDataCreateManyDataSourceInputEnvelope
    connect?: RawDataWhereUniqueInput | RawDataWhereUniqueInput[]
  }

  export type RawDataUncheckedCreateNestedManyWithoutDataSourceInput = {
    create?: XOR<RawDataCreateWithoutDataSourceInput, RawDataUncheckedCreateWithoutDataSourceInput> | RawDataCreateWithoutDataSourceInput[] | RawDataUncheckedCreateWithoutDataSourceInput[]
    connectOrCreate?: RawDataCreateOrConnectWithoutDataSourceInput | RawDataCreateOrConnectWithoutDataSourceInput[]
    createMany?: RawDataCreateManyDataSourceInputEnvelope
    connect?: RawDataWhereUniqueInput | RawDataWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumDataSourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DataSourceType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RawDataUpdateManyWithoutDataSourceNestedInput = {
    create?: XOR<RawDataCreateWithoutDataSourceInput, RawDataUncheckedCreateWithoutDataSourceInput> | RawDataCreateWithoutDataSourceInput[] | RawDataUncheckedCreateWithoutDataSourceInput[]
    connectOrCreate?: RawDataCreateOrConnectWithoutDataSourceInput | RawDataCreateOrConnectWithoutDataSourceInput[]
    upsert?: RawDataUpsertWithWhereUniqueWithoutDataSourceInput | RawDataUpsertWithWhereUniqueWithoutDataSourceInput[]
    createMany?: RawDataCreateManyDataSourceInputEnvelope
    set?: RawDataWhereUniqueInput | RawDataWhereUniqueInput[]
    disconnect?: RawDataWhereUniqueInput | RawDataWhereUniqueInput[]
    delete?: RawDataWhereUniqueInput | RawDataWhereUniqueInput[]
    connect?: RawDataWhereUniqueInput | RawDataWhereUniqueInput[]
    update?: RawDataUpdateWithWhereUniqueWithoutDataSourceInput | RawDataUpdateWithWhereUniqueWithoutDataSourceInput[]
    updateMany?: RawDataUpdateManyWithWhereWithoutDataSourceInput | RawDataUpdateManyWithWhereWithoutDataSourceInput[]
    deleteMany?: RawDataScalarWhereInput | RawDataScalarWhereInput[]
  }

  export type RawDataUncheckedUpdateManyWithoutDataSourceNestedInput = {
    create?: XOR<RawDataCreateWithoutDataSourceInput, RawDataUncheckedCreateWithoutDataSourceInput> | RawDataCreateWithoutDataSourceInput[] | RawDataUncheckedCreateWithoutDataSourceInput[]
    connectOrCreate?: RawDataCreateOrConnectWithoutDataSourceInput | RawDataCreateOrConnectWithoutDataSourceInput[]
    upsert?: RawDataUpsertWithWhereUniqueWithoutDataSourceInput | RawDataUpsertWithWhereUniqueWithoutDataSourceInput[]
    createMany?: RawDataCreateManyDataSourceInputEnvelope
    set?: RawDataWhereUniqueInput | RawDataWhereUniqueInput[]
    disconnect?: RawDataWhereUniqueInput | RawDataWhereUniqueInput[]
    delete?: RawDataWhereUniqueInput | RawDataWhereUniqueInput[]
    connect?: RawDataWhereUniqueInput | RawDataWhereUniqueInput[]
    update?: RawDataUpdateWithWhereUniqueWithoutDataSourceInput | RawDataUpdateWithWhereUniqueWithoutDataSourceInput[]
    updateMany?: RawDataUpdateManyWithWhereWithoutDataSourceInput | RawDataUpdateManyWithWhereWithoutDataSourceInput[]
    deleteMany?: RawDataScalarWhereInput | RawDataScalarWhereInput[]
  }

  export type DataSourceCreateNestedOneWithoutRawDataInput = {
    create?: XOR<DataSourceCreateWithoutRawDataInput, DataSourceUncheckedCreateWithoutRawDataInput>
    connectOrCreate?: DataSourceCreateOrConnectWithoutRawDataInput
    connect?: DataSourceWhereUniqueInput
  }

  export type ProcessedDataCreateNestedManyWithoutRawDataInput = {
    create?: XOR<ProcessedDataCreateWithoutRawDataInput, ProcessedDataUncheckedCreateWithoutRawDataInput> | ProcessedDataCreateWithoutRawDataInput[] | ProcessedDataUncheckedCreateWithoutRawDataInput[]
    connectOrCreate?: ProcessedDataCreateOrConnectWithoutRawDataInput | ProcessedDataCreateOrConnectWithoutRawDataInput[]
    createMany?: ProcessedDataCreateManyRawDataInputEnvelope
    connect?: ProcessedDataWhereUniqueInput | ProcessedDataWhereUniqueInput[]
  }

  export type ProcessedDataUncheckedCreateNestedManyWithoutRawDataInput = {
    create?: XOR<ProcessedDataCreateWithoutRawDataInput, ProcessedDataUncheckedCreateWithoutRawDataInput> | ProcessedDataCreateWithoutRawDataInput[] | ProcessedDataUncheckedCreateWithoutRawDataInput[]
    connectOrCreate?: ProcessedDataCreateOrConnectWithoutRawDataInput | ProcessedDataCreateOrConnectWithoutRawDataInput[]
    createMany?: ProcessedDataCreateManyRawDataInputEnvelope
    connect?: ProcessedDataWhereUniqueInput | ProcessedDataWhereUniqueInput[]
  }

  export type EnumRawDataStatusFieldUpdateOperationsInput = {
    set?: $Enums.RawDataStatus
  }

  export type DataSourceUpdateOneRequiredWithoutRawDataNestedInput = {
    create?: XOR<DataSourceCreateWithoutRawDataInput, DataSourceUncheckedCreateWithoutRawDataInput>
    connectOrCreate?: DataSourceCreateOrConnectWithoutRawDataInput
    upsert?: DataSourceUpsertWithoutRawDataInput
    connect?: DataSourceWhereUniqueInput
    update?: XOR<XOR<DataSourceUpdateToOneWithWhereWithoutRawDataInput, DataSourceUpdateWithoutRawDataInput>, DataSourceUncheckedUpdateWithoutRawDataInput>
  }

  export type ProcessedDataUpdateManyWithoutRawDataNestedInput = {
    create?: XOR<ProcessedDataCreateWithoutRawDataInput, ProcessedDataUncheckedCreateWithoutRawDataInput> | ProcessedDataCreateWithoutRawDataInput[] | ProcessedDataUncheckedCreateWithoutRawDataInput[]
    connectOrCreate?: ProcessedDataCreateOrConnectWithoutRawDataInput | ProcessedDataCreateOrConnectWithoutRawDataInput[]
    upsert?: ProcessedDataUpsertWithWhereUniqueWithoutRawDataInput | ProcessedDataUpsertWithWhereUniqueWithoutRawDataInput[]
    createMany?: ProcessedDataCreateManyRawDataInputEnvelope
    set?: ProcessedDataWhereUniqueInput | ProcessedDataWhereUniqueInput[]
    disconnect?: ProcessedDataWhereUniqueInput | ProcessedDataWhereUniqueInput[]
    delete?: ProcessedDataWhereUniqueInput | ProcessedDataWhereUniqueInput[]
    connect?: ProcessedDataWhereUniqueInput | ProcessedDataWhereUniqueInput[]
    update?: ProcessedDataUpdateWithWhereUniqueWithoutRawDataInput | ProcessedDataUpdateWithWhereUniqueWithoutRawDataInput[]
    updateMany?: ProcessedDataUpdateManyWithWhereWithoutRawDataInput | ProcessedDataUpdateManyWithWhereWithoutRawDataInput[]
    deleteMany?: ProcessedDataScalarWhereInput | ProcessedDataScalarWhereInput[]
  }

  export type ProcessedDataUncheckedUpdateManyWithoutRawDataNestedInput = {
    create?: XOR<ProcessedDataCreateWithoutRawDataInput, ProcessedDataUncheckedCreateWithoutRawDataInput> | ProcessedDataCreateWithoutRawDataInput[] | ProcessedDataUncheckedCreateWithoutRawDataInput[]
    connectOrCreate?: ProcessedDataCreateOrConnectWithoutRawDataInput | ProcessedDataCreateOrConnectWithoutRawDataInput[]
    upsert?: ProcessedDataUpsertWithWhereUniqueWithoutRawDataInput | ProcessedDataUpsertWithWhereUniqueWithoutRawDataInput[]
    createMany?: ProcessedDataCreateManyRawDataInputEnvelope
    set?: ProcessedDataWhereUniqueInput | ProcessedDataWhereUniqueInput[]
    disconnect?: ProcessedDataWhereUniqueInput | ProcessedDataWhereUniqueInput[]
    delete?: ProcessedDataWhereUniqueInput | ProcessedDataWhereUniqueInput[]
    connect?: ProcessedDataWhereUniqueInput | ProcessedDataWhereUniqueInput[]
    update?: ProcessedDataUpdateWithWhereUniqueWithoutRawDataInput | ProcessedDataUpdateWithWhereUniqueWithoutRawDataInput[]
    updateMany?: ProcessedDataUpdateManyWithWhereWithoutRawDataInput | ProcessedDataUpdateManyWithWhereWithoutRawDataInput[]
    deleteMany?: ProcessedDataScalarWhereInput | ProcessedDataScalarWhereInput[]
  }

  export type RawDataCreateNestedOneWithoutProcessedDataInput = {
    create?: XOR<RawDataCreateWithoutProcessedDataInput, RawDataUncheckedCreateWithoutProcessedDataInput>
    connectOrCreate?: RawDataCreateOrConnectWithoutProcessedDataInput
    connect?: RawDataWhereUniqueInput
  }

  export type RawDataUpdateOneRequiredWithoutProcessedDataNestedInput = {
    create?: XOR<RawDataCreateWithoutProcessedDataInput, RawDataUncheckedCreateWithoutProcessedDataInput>
    connectOrCreate?: RawDataCreateOrConnectWithoutProcessedDataInput
    upsert?: RawDataUpsertWithoutProcessedDataInput
    connect?: RawDataWhereUniqueInput
    update?: XOR<XOR<RawDataUpdateToOneWithWhereWithoutProcessedDataInput, RawDataUpdateWithoutProcessedDataInput>, RawDataUncheckedUpdateWithoutProcessedDataInput>
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

  export type NestedEnumDataSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DataSourceType | EnumDataSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDataSourceTypeFilter<$PrismaModel> | $Enums.DataSourceType
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedEnumDataSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DataSourceType | EnumDataSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDataSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DataSourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDataSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumDataSourceTypeFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRawDataStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RawDataStatus | EnumRawDataStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RawDataStatus[] | ListEnumRawDataStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RawDataStatus[] | ListEnumRawDataStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRawDataStatusFilter<$PrismaModel> | $Enums.RawDataStatus
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumRawDataStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RawDataStatus | EnumRawDataStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RawDataStatus[] | ListEnumRawDataStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RawDataStatus[] | ListEnumRawDataStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRawDataStatusWithAggregatesFilter<$PrismaModel> | $Enums.RawDataStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRawDataStatusFilter<$PrismaModel>
    _max?: NestedEnumRawDataStatusFilter<$PrismaModel>
  }

  export type RawDataCreateWithoutDataSourceInput = {
    id?: string
    payload: JsonNullValueInput | InputJsonValue
    status: $Enums.RawDataStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    processedData?: ProcessedDataCreateNestedManyWithoutRawDataInput
  }

  export type RawDataUncheckedCreateWithoutDataSourceInput = {
    id?: string
    payload: JsonNullValueInput | InputJsonValue
    status: $Enums.RawDataStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    processedData?: ProcessedDataUncheckedCreateNestedManyWithoutRawDataInput
  }

  export type RawDataCreateOrConnectWithoutDataSourceInput = {
    where: RawDataWhereUniqueInput
    create: XOR<RawDataCreateWithoutDataSourceInput, RawDataUncheckedCreateWithoutDataSourceInput>
  }

  export type RawDataCreateManyDataSourceInputEnvelope = {
    data: RawDataCreateManyDataSourceInput | RawDataCreateManyDataSourceInput[]
    skipDuplicates?: boolean
  }

  export type RawDataUpsertWithWhereUniqueWithoutDataSourceInput = {
    where: RawDataWhereUniqueInput
    update: XOR<RawDataUpdateWithoutDataSourceInput, RawDataUncheckedUpdateWithoutDataSourceInput>
    create: XOR<RawDataCreateWithoutDataSourceInput, RawDataUncheckedCreateWithoutDataSourceInput>
  }

  export type RawDataUpdateWithWhereUniqueWithoutDataSourceInput = {
    where: RawDataWhereUniqueInput
    data: XOR<RawDataUpdateWithoutDataSourceInput, RawDataUncheckedUpdateWithoutDataSourceInput>
  }

  export type RawDataUpdateManyWithWhereWithoutDataSourceInput = {
    where: RawDataScalarWhereInput
    data: XOR<RawDataUpdateManyMutationInput, RawDataUncheckedUpdateManyWithoutDataSourceInput>
  }

  export type RawDataScalarWhereInput = {
    AND?: RawDataScalarWhereInput | RawDataScalarWhereInput[]
    OR?: RawDataScalarWhereInput[]
    NOT?: RawDataScalarWhereInput | RawDataScalarWhereInput[]
    id?: StringFilter<"RawData"> | string
    dataSourceId?: StringFilter<"RawData"> | string
    payload?: JsonFilter<"RawData">
    status?: EnumRawDataStatusFilter<"RawData"> | $Enums.RawDataStatus
    createdAt?: DateTimeFilter<"RawData"> | Date | string
    updatedAt?: DateTimeFilter<"RawData"> | Date | string
  }

  export type DataSourceCreateWithoutRawDataInput = {
    id?: string
    name: string
    type: $Enums.DataSourceType
    connection?: string | null
    baseURL?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataSourceUncheckedCreateWithoutRawDataInput = {
    id?: string
    name: string
    type: $Enums.DataSourceType
    connection?: string | null
    baseURL?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataSourceCreateOrConnectWithoutRawDataInput = {
    where: DataSourceWhereUniqueInput
    create: XOR<DataSourceCreateWithoutRawDataInput, DataSourceUncheckedCreateWithoutRawDataInput>
  }

  export type ProcessedDataCreateWithoutRawDataInput = {
    id?: string
    result: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessedDataUncheckedCreateWithoutRawDataInput = {
    id?: string
    result: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessedDataCreateOrConnectWithoutRawDataInput = {
    where: ProcessedDataWhereUniqueInput
    create: XOR<ProcessedDataCreateWithoutRawDataInput, ProcessedDataUncheckedCreateWithoutRawDataInput>
  }

  export type ProcessedDataCreateManyRawDataInputEnvelope = {
    data: ProcessedDataCreateManyRawDataInput | ProcessedDataCreateManyRawDataInput[]
    skipDuplicates?: boolean
  }

  export type DataSourceUpsertWithoutRawDataInput = {
    update: XOR<DataSourceUpdateWithoutRawDataInput, DataSourceUncheckedUpdateWithoutRawDataInput>
    create: XOR<DataSourceCreateWithoutRawDataInput, DataSourceUncheckedCreateWithoutRawDataInput>
    where?: DataSourceWhereInput
  }

  export type DataSourceUpdateToOneWithWhereWithoutRawDataInput = {
    where?: DataSourceWhereInput
    data: XOR<DataSourceUpdateWithoutRawDataInput, DataSourceUncheckedUpdateWithoutRawDataInput>
  }

  export type DataSourceUpdateWithoutRawDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    connection?: NullableStringFieldUpdateOperationsInput | string | null
    baseURL?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSourceUncheckedUpdateWithoutRawDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    connection?: NullableStringFieldUpdateOperationsInput | string | null
    baseURL?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedDataUpsertWithWhereUniqueWithoutRawDataInput = {
    where: ProcessedDataWhereUniqueInput
    update: XOR<ProcessedDataUpdateWithoutRawDataInput, ProcessedDataUncheckedUpdateWithoutRawDataInput>
    create: XOR<ProcessedDataCreateWithoutRawDataInput, ProcessedDataUncheckedCreateWithoutRawDataInput>
  }

  export type ProcessedDataUpdateWithWhereUniqueWithoutRawDataInput = {
    where: ProcessedDataWhereUniqueInput
    data: XOR<ProcessedDataUpdateWithoutRawDataInput, ProcessedDataUncheckedUpdateWithoutRawDataInput>
  }

  export type ProcessedDataUpdateManyWithWhereWithoutRawDataInput = {
    where: ProcessedDataScalarWhereInput
    data: XOR<ProcessedDataUpdateManyMutationInput, ProcessedDataUncheckedUpdateManyWithoutRawDataInput>
  }

  export type ProcessedDataScalarWhereInput = {
    AND?: ProcessedDataScalarWhereInput | ProcessedDataScalarWhereInput[]
    OR?: ProcessedDataScalarWhereInput[]
    NOT?: ProcessedDataScalarWhereInput | ProcessedDataScalarWhereInput[]
    id?: StringFilter<"ProcessedData"> | string
    rawDataId?: StringFilter<"ProcessedData"> | string
    result?: JsonFilter<"ProcessedData">
    status?: StringFilter<"ProcessedData"> | string
    createdAt?: DateTimeFilter<"ProcessedData"> | Date | string
    updatedAt?: DateTimeFilter<"ProcessedData"> | Date | string
  }

  export type RawDataCreateWithoutProcessedDataInput = {
    id?: string
    payload: JsonNullValueInput | InputJsonValue
    status: $Enums.RawDataStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSource: DataSourceCreateNestedOneWithoutRawDataInput
  }

  export type RawDataUncheckedCreateWithoutProcessedDataInput = {
    id?: string
    dataSourceId: string
    payload: JsonNullValueInput | InputJsonValue
    status: $Enums.RawDataStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RawDataCreateOrConnectWithoutProcessedDataInput = {
    where: RawDataWhereUniqueInput
    create: XOR<RawDataCreateWithoutProcessedDataInput, RawDataUncheckedCreateWithoutProcessedDataInput>
  }

  export type RawDataUpsertWithoutProcessedDataInput = {
    update: XOR<RawDataUpdateWithoutProcessedDataInput, RawDataUncheckedUpdateWithoutProcessedDataInput>
    create: XOR<RawDataCreateWithoutProcessedDataInput, RawDataUncheckedCreateWithoutProcessedDataInput>
    where?: RawDataWhereInput
  }

  export type RawDataUpdateToOneWithWhereWithoutProcessedDataInput = {
    where?: RawDataWhereInput
    data: XOR<RawDataUpdateWithoutProcessedDataInput, RawDataUncheckedUpdateWithoutProcessedDataInput>
  }

  export type RawDataUpdateWithoutProcessedDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumRawDataStatusFieldUpdateOperationsInput | $Enums.RawDataStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSource?: DataSourceUpdateOneRequiredWithoutRawDataNestedInput
  }

  export type RawDataUncheckedUpdateWithoutProcessedDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataSourceId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumRawDataStatusFieldUpdateOperationsInput | $Enums.RawDataStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawDataCreateManyDataSourceInput = {
    id?: string
    payload: JsonNullValueInput | InputJsonValue
    status: $Enums.RawDataStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RawDataUpdateWithoutDataSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumRawDataStatusFieldUpdateOperationsInput | $Enums.RawDataStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedData?: ProcessedDataUpdateManyWithoutRawDataNestedInput
  }

  export type RawDataUncheckedUpdateWithoutDataSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumRawDataStatusFieldUpdateOperationsInput | $Enums.RawDataStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedData?: ProcessedDataUncheckedUpdateManyWithoutRawDataNestedInput
  }

  export type RawDataUncheckedUpdateManyWithoutDataSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumRawDataStatusFieldUpdateOperationsInput | $Enums.RawDataStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedDataCreateManyRawDataInput = {
    id?: string
    result: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessedDataUpdateWithoutRawDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedDataUncheckedUpdateWithoutRawDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedDataUncheckedUpdateManyWithoutRawDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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