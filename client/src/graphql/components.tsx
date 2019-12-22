/* eslint-disable */
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Field = {
  readonly __typename?: 'Field',
  readonly _id: Scalars['ID'],
  readonly type: FieldType,
  readonly order: Scalars['Int'],
  readonly content: Scalars['String'],
};

export type FieldInput = {
  readonly type: FieldType,
  readonly order: Scalars['Int'],
  readonly content: Scalars['String'],
};

export enum FieldType {
  Titre = 'titre',
  Link = 'link',
  Text = 'text'
}

export type RootMutation = {
  readonly __typename?: 'RootMutation',
  readonly createUser: Maybe<User>,
  readonly deleteUser: User,
  readonly createField: Maybe<Field>,
  readonly deleteField: Field,
};


export type RootMutationCreateUserArgs = {
  userInput: Maybe<UserInput>
};


export type RootMutationDeleteUserArgs = {
  userID: Scalars['ID']
};


export type RootMutationCreateFieldArgs = {
  fieldInput: Maybe<FieldInput>
};


export type RootMutationDeleteFieldArgs = {
  fieldID: Scalars['ID']
};

export type RootQuery = {
  readonly __typename?: 'RootQuery',
  readonly userList: ReadonlyArray<User>,
  readonly singleUser: User,
  readonly fieldList: ReadonlyArray<Field>,
};


export type RootQuerySingleUserArgs = {
  installationId: Scalars['ID']
};

export type User = {
  readonly __typename?: 'User',
  readonly _id: Scalars['ID'],
  readonly name: Scalars['String'],
};

export type UserInput = {
  readonly name: Scalars['String'],
};

export type FieldListQueryVariables = {};


export type FieldListQuery = (
  { readonly __typename?: 'RootQuery' }
  & { readonly fieldList: ReadonlyArray<(
    { readonly __typename?: 'Field' }
    & Pick<Field, 'order' | 'type' | 'content' | '_id'>
  )> }
);


export const FieldListDocument = gql`
    query FieldList {
  fieldList {
    order
    type
    content
    _id
  }
}
    `;
export type FieldListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FieldListQuery, FieldListQueryVariables>, 'query'>;

    export const FieldListComponent = (props: FieldListComponentProps) => (
      <ApolloReactComponents.Query<FieldListQuery, FieldListQueryVariables> query={FieldListDocument} {...props} />
    );
    
export type FieldListProps<TChildProps = {}> = ApolloReactHoc.DataProps<FieldListQuery, FieldListQueryVariables> & TChildProps;
export function withFieldList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FieldListQuery,
  FieldListQueryVariables,
  FieldListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, FieldListQuery, FieldListQueryVariables, FieldListProps<TChildProps>>(FieldListDocument, {
      alias: 'fieldList',
      ...operationOptions
    });
};

/**
 * __useFieldListQuery__
 *
 * To run a query within a React component, call `useFieldListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFieldListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFieldListQuery({
 *   variables: {
 *   },
 * });
 */
export function useFieldListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FieldListQuery, FieldListQueryVariables>) {
        return ApolloReactHooks.useQuery<FieldListQuery, FieldListQueryVariables>(FieldListDocument, baseOptions);
      }
export function useFieldListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FieldListQuery, FieldListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FieldListQuery, FieldListQueryVariables>(FieldListDocument, baseOptions);
        }
export type FieldListQueryHookResult = ReturnType<typeof useFieldListQuery>;
export type FieldListLazyQueryHookResult = ReturnType<typeof useFieldListLazyQuery>;
export type FieldListQueryResult = ApolloReactCommon.QueryResult<FieldListQuery, FieldListQueryVariables>;