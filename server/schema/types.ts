import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserInput = {
  age: Scalars['Int'];
  name: Scalars['String'];
  nationality?: InputMaybe<Nationality>;
  username: Scalars['String'];
};

export type Movie = {
  __typename?: 'Movie';
  id: Scalars['ID'];
  isInTheaters: Scalars['Boolean'];
  name: Scalars['String'];
  year: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  deleteUser?: Maybe<User>;
  updateUsername?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateUsernameArgs = {
  input: UpdateUsernameInput;
};

export enum Nationality {
  America = 'AMERICA',
  Canada = 'CANADA',
  England = 'ENGLAND',
  France = 'FRANCE',
  Gernmany = 'GERNMANY',
  Poland = 'POLAND'
}

export type Query = {
  __typename?: 'Query';
  movie?: Maybe<Movie>;
  movies: Array<Movie>;
  user?: Maybe<User>;
  users?: Maybe<UsersResult>;
};


export type QueryMovieArgs = {
  name: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type UpdateUsernameInput = {
  id: Scalars['ID'];
  newUsername: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  age: Scalars['Int'];
  favoriteMovies?: Maybe<Array<Movie>>;
  friends?: Maybe<Array<User>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  nationality: Nationality;
  username: Scalars['String'];
};

export type UsersErrorResult = {
  __typename?: 'UsersErrorResult';
  message: Scalars['String'];
};

export type UsersResult = UsersErrorResult | UsersSuccessfulResult;

export type UsersSuccessfulResult = {
  __typename?: 'UsersSuccessfulResult';
  users: Array<User>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes = {
  UsersResult: ( UsersErrorResult ) | ( UsersSuccessfulResult );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateUserInput: CreateUserInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Movie: ResolverTypeWrapper<Movie>;
  Mutation: ResolverTypeWrapper<{}>;
  Nationality: Nationality;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateUsernameInput: UpdateUsernameInput;
  User: ResolverTypeWrapper<User>;
  UsersErrorResult: ResolverTypeWrapper<UsersErrorResult>;
  UsersResult: ResolverTypeWrapper<ResolversUnionTypes['UsersResult']>;
  UsersSuccessfulResult: ResolverTypeWrapper<UsersSuccessfulResult>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CreateUserInput: CreateUserInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Movie: Movie;
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  UpdateUsernameInput: UpdateUsernameInput;
  User: User;
  UsersErrorResult: UsersErrorResult;
  UsersResult: ResolversUnionTypes['UsersResult'];
  UsersSuccessfulResult: UsersSuccessfulResult;
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isInTheaters?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  updateUsername?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUsernameArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMovieArgs, 'name'>>;
  movies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<ResolversTypes['UsersResult']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  favoriteMovies?: Resolver<Maybe<Array<ResolversTypes['Movie']>>, ParentType, ContextType>;
  friends?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nationality?: Resolver<ResolversTypes['Nationality'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersErrorResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersErrorResult'] = ResolversParentTypes['UsersErrorResult']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersResult'] = ResolversParentTypes['UsersResult']> = {
  __resolveType: TypeResolveFn<'UsersErrorResult' | 'UsersSuccessfulResult', ParentType, ContextType>;
};

export type UsersSuccessfulResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersSuccessfulResult'] = ResolversParentTypes['UsersSuccessfulResult']> = {
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Movie?: MovieResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UsersErrorResult?: UsersErrorResultResolvers<ContextType>;
  UsersResult?: UsersResultResolvers<ContextType>;
  UsersSuccessfulResult?: UsersSuccessfulResultResolvers<ContextType>;
};

