/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Deep = {
  __typename?: 'Deep'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  someChild?: Maybe<SomeChild>
}

export type EvenDeeper = {
  __typename?: 'EvenDeeper'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
}

export type Query = {
  __typename?: 'Query'
  basicRootQuery: Scalars['String']['output']
  deepNested?: Maybe<Deep>
  deepNesteds?: Maybe<Array<Deep>>
  reallySlowOne: Scalars['String']['output']
}

export type QueryDeepNestedArgs = {
  id: Scalars['ID']['input']
}

export type SomeChild = {
  __typename?: 'SomeChild'
  description?: Maybe<Scalars['String']['output']>
  evenDeeper?: Maybe<EvenDeeper>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  Deep: ResolverTypeWrapper<Deep>
  EvenDeeper: ResolverTypeWrapper<EvenDeeper>
  ID: ResolverTypeWrapper<Scalars['ID']['output']>
  Query: ResolverTypeWrapper<{}>
  SomeChild: ResolverTypeWrapper<SomeChild>
  String: ResolverTypeWrapper<Scalars['String']['output']>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output']
  Deep: Deep
  EvenDeeper: EvenDeeper
  ID: Scalars['ID']['output']
  Query: {}
  SomeChild: SomeChild
  String: Scalars['String']['output']
}

export type DeepResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Deep'] = ResolversParentTypes['Deep'],
> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  someChild?: Resolver<Maybe<ResolversTypes['SomeChild']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type EvenDeeperResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EvenDeeper'] = ResolversParentTypes['EvenDeeper'],
> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  basicRootQuery?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  deepNested?: Resolver<
    Maybe<ResolversTypes['Deep']>,
    ParentType,
    ContextType,
    RequireFields<QueryDeepNestedArgs, 'id'>
  >
  deepNesteds?: Resolver<Maybe<Array<ResolversTypes['Deep']>>, ParentType, ContextType>
  reallySlowOne?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}

export type SomeChildResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SomeChild'] = ResolversParentTypes['SomeChild'],
> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  evenDeeper?: Resolver<Maybe<ResolversTypes['EvenDeeper']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  Deep?: DeepResolvers<ContextType>
  EvenDeeper?: EvenDeeperResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  SomeChild?: SomeChildResolvers<ContextType>
}
