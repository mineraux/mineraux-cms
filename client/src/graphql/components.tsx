/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
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
  readonly value: Scalars['String'],
  readonly linkedPage: Maybe<Page>,
};

export type FieldInput = {
  readonly type: FieldType,
  readonly order: Scalars['Int'],
  readonly value: Scalars['String'],
  readonly linkedPageId: Scalars['ID'],
};

export enum FieldType {
  Text = 'text',
  Link = 'link'
}

export type Page = {
  readonly __typename?: 'Page',
  readonly _id: Scalars['ID'],
  readonly title: Scalars['String'],
  readonly linkedFields: Maybe<ReadonlyArray<Field>>,
};

export type PageInput = {
  readonly title: Scalars['String'],
};

export type RootMutation = {
  readonly __typename?: 'RootMutation',
  readonly createField: Maybe<Field>,
  readonly createPage: Maybe<Page>,
};


export type RootMutationCreateFieldArgs = {
  fieldInput: Maybe<FieldInput>
};


export type RootMutationCreatePageArgs = {
  pageInput: Maybe<PageInput>
};

export type RootQuery = {
  readonly __typename?: 'RootQuery',
  readonly fields: ReadonlyArray<Field>,
  readonly pages: ReadonlyArray<Page>,
  readonly singlePage: Page,
};


export type RootQuerySinglePageArgs = {
  pageId: Scalars['ID']
};

export type UserInput = {
  readonly name: Scalars['String'],
};

export type CreateNewPageMutationVariables = {
  title: Scalars['String']
};


export type CreateNewPageMutation = (
  { readonly __typename?: 'RootMutation' }
  & { readonly createPage: Maybe<(
    { readonly __typename?: 'Page' }
    & Pick<Page, 'title'>
  )> }
);

export type FieldListQueryVariables = {};


export type FieldListQuery = (
  { readonly __typename?: 'RootQuery' }
  & { readonly fields: ReadonlyArray<(
    { readonly __typename?: 'Field' }
    & Pick<Field, '_id' | 'type' | 'order' | 'value'>
  )> }
);

export type PagesNameQueryVariables = {};


export type PagesNameQuery = (
  { readonly __typename?: 'RootQuery' }
  & { readonly pages: ReadonlyArray<(
    { readonly __typename?: 'Page' }
    & Pick<Page, 'title' | '_id'>
  )> }
);

export type PageFieldsQueryVariables = {
  pageId: Scalars['ID']
};


export type PageFieldsQuery = (
  { readonly __typename?: 'RootQuery' }
  & { readonly singlePage: (
    { readonly __typename?: 'Page' }
    & { readonly linkedFields: Maybe<ReadonlyArray<(
      { readonly __typename?: 'Field' }
      & Pick<Field, '_id' | 'type' | 'order' | 'value'>
    )>> }
  ) }
);

export type PageNameByIdQueryVariables = {
  pageId: Scalars['ID']
};


export type PageNameByIdQuery = (
  { readonly __typename?: 'RootQuery' }
  & { readonly singlePage: (
    { readonly __typename?: 'Page' }
    & Pick<Page, 'title'>
  ) }
);


export const CreateNewPageDocument = gql`
    mutation createNewPage($title: String!) {
  createPage(pageInput: {title: $title}) {
    title
  }
}
    `;
export type CreateNewPageMutationFn = ApolloReactCommon.MutationFunction<CreateNewPageMutation, CreateNewPageMutationVariables>;
export type CreateNewPageComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateNewPageMutation, CreateNewPageMutationVariables>, 'mutation'>;

    export const CreateNewPageComponent = (props: CreateNewPageComponentProps) => (
      <ApolloReactComponents.Mutation<CreateNewPageMutation, CreateNewPageMutationVariables> mutation={CreateNewPageDocument} {...props} />
    );
    
export type CreateNewPageProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateNewPageMutation, CreateNewPageMutationVariables> & TChildProps;
export function withCreateNewPage<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateNewPageMutation,
  CreateNewPageMutationVariables,
  CreateNewPageProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateNewPageMutation, CreateNewPageMutationVariables, CreateNewPageProps<TChildProps>>(CreateNewPageDocument, {
      alias: 'createNewPage',
      ...operationOptions
    });
};

/**
 * __useCreateNewPageMutation__
 *
 * To run a mutation, you first call `useCreateNewPageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewPageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewPageMutation, { data, loading, error }] = useCreateNewPageMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateNewPageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateNewPageMutation, CreateNewPageMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateNewPageMutation, CreateNewPageMutationVariables>(CreateNewPageDocument, baseOptions);
      }
export type CreateNewPageMutationHookResult = ReturnType<typeof useCreateNewPageMutation>;
export type CreateNewPageMutationResult = ApolloReactCommon.MutationResult<CreateNewPageMutation>;
export type CreateNewPageMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateNewPageMutation, CreateNewPageMutationVariables>;
export const FieldListDocument = gql`
    query FieldList {
  fields {
    _id
    type
    order
    value
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
export const PagesNameDocument = gql`
    query pagesName {
  pages {
    title
    _id
  }
}
    `;
export type PagesNameComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PagesNameQuery, PagesNameQueryVariables>, 'query'>;

    export const PagesNameComponent = (props: PagesNameComponentProps) => (
      <ApolloReactComponents.Query<PagesNameQuery, PagesNameQueryVariables> query={PagesNameDocument} {...props} />
    );
    
export type PagesNameProps<TChildProps = {}> = ApolloReactHoc.DataProps<PagesNameQuery, PagesNameQueryVariables> & TChildProps;
export function withPagesName<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PagesNameQuery,
  PagesNameQueryVariables,
  PagesNameProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, PagesNameQuery, PagesNameQueryVariables, PagesNameProps<TChildProps>>(PagesNameDocument, {
      alias: 'pagesName',
      ...operationOptions
    });
};

/**
 * __usePagesNameQuery__
 *
 * To run a query within a React component, call `usePagesNameQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagesNameQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagesNameQuery({
 *   variables: {
 *   },
 * });
 */
export function usePagesNameQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PagesNameQuery, PagesNameQueryVariables>) {
        return ApolloReactHooks.useQuery<PagesNameQuery, PagesNameQueryVariables>(PagesNameDocument, baseOptions);
      }
export function usePagesNameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PagesNameQuery, PagesNameQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PagesNameQuery, PagesNameQueryVariables>(PagesNameDocument, baseOptions);
        }
export type PagesNameQueryHookResult = ReturnType<typeof usePagesNameQuery>;
export type PagesNameLazyQueryHookResult = ReturnType<typeof usePagesNameLazyQuery>;
export type PagesNameQueryResult = ApolloReactCommon.QueryResult<PagesNameQuery, PagesNameQueryVariables>;
export const PageFieldsDocument = gql`
    query pageFields($pageId: ID!) {
  singlePage(pageId: $pageId) {
    linkedFields {
      _id
      type
      order
      value
    }
  }
}
    `;
export type PageFieldsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PageFieldsQuery, PageFieldsQueryVariables>, 'query'> & ({ variables: PageFieldsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PageFieldsComponent = (props: PageFieldsComponentProps) => (
      <ApolloReactComponents.Query<PageFieldsQuery, PageFieldsQueryVariables> query={PageFieldsDocument} {...props} />
    );
    
export type PageFieldsProps<TChildProps = {}> = ApolloReactHoc.DataProps<PageFieldsQuery, PageFieldsQueryVariables> & TChildProps;
export function withPageFields<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PageFieldsQuery,
  PageFieldsQueryVariables,
  PageFieldsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, PageFieldsQuery, PageFieldsQueryVariables, PageFieldsProps<TChildProps>>(PageFieldsDocument, {
      alias: 'pageFields',
      ...operationOptions
    });
};

/**
 * __usePageFieldsQuery__
 *
 * To run a query within a React component, call `usePageFieldsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageFieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageFieldsQuery({
 *   variables: {
 *      pageId: // value for 'pageId'
 *   },
 * });
 */
export function usePageFieldsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PageFieldsQuery, PageFieldsQueryVariables>) {
        return ApolloReactHooks.useQuery<PageFieldsQuery, PageFieldsQueryVariables>(PageFieldsDocument, baseOptions);
      }
export function usePageFieldsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PageFieldsQuery, PageFieldsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PageFieldsQuery, PageFieldsQueryVariables>(PageFieldsDocument, baseOptions);
        }
export type PageFieldsQueryHookResult = ReturnType<typeof usePageFieldsQuery>;
export type PageFieldsLazyQueryHookResult = ReturnType<typeof usePageFieldsLazyQuery>;
export type PageFieldsQueryResult = ApolloReactCommon.QueryResult<PageFieldsQuery, PageFieldsQueryVariables>;
export const PageNameByIdDocument = gql`
    query pageNameById($pageId: ID!) {
  singlePage(pageId: $pageId) {
    title
  }
}
    `;
export type PageNameByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PageNameByIdQuery, PageNameByIdQueryVariables>, 'query'> & ({ variables: PageNameByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PageNameByIdComponent = (props: PageNameByIdComponentProps) => (
      <ApolloReactComponents.Query<PageNameByIdQuery, PageNameByIdQueryVariables> query={PageNameByIdDocument} {...props} />
    );
    
export type PageNameByIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<PageNameByIdQuery, PageNameByIdQueryVariables> & TChildProps;
export function withPageNameById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PageNameByIdQuery,
  PageNameByIdQueryVariables,
  PageNameByIdProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, PageNameByIdQuery, PageNameByIdQueryVariables, PageNameByIdProps<TChildProps>>(PageNameByIdDocument, {
      alias: 'pageNameById',
      ...operationOptions
    });
};

/**
 * __usePageNameByIdQuery__
 *
 * To run a query within a React component, call `usePageNameByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageNameByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageNameByIdQuery({
 *   variables: {
 *      pageId: // value for 'pageId'
 *   },
 * });
 */
export function usePageNameByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PageNameByIdQuery, PageNameByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<PageNameByIdQuery, PageNameByIdQueryVariables>(PageNameByIdDocument, baseOptions);
      }
export function usePageNameByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PageNameByIdQuery, PageNameByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PageNameByIdQuery, PageNameByIdQueryVariables>(PageNameByIdDocument, baseOptions);
        }
export type PageNameByIdQueryHookResult = ReturnType<typeof usePageNameByIdQuery>;
export type PageNameByIdLazyQueryHookResult = ReturnType<typeof usePageNameByIdLazyQuery>;
export type PageNameByIdQueryResult = ApolloReactCommon.QueryResult<PageNameByIdQuery, PageNameByIdQueryVariables>;