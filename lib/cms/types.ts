import { RequestInit } from 'node-fetch'

export interface GraphQLFetcherResult<Data = any> {
  data: Data
  res: Response
}

export interface APIFetchOptions<Variables> {
  variables?: Variables
  preview?: boolean
}

export interface CmsConfig {
  apiUrl: string
  authorization: string
  fetchGraphqlApi<Data = any, Variables = any>(
    query: string,
    queryData?: APIFetchOptions<Variables>,
    fetchOptions?: RequestInit
  ): Promise<GraphQLFetcherResult<Data>>
}

export type OperationContext = { config: CmsConfig }

export type OperationOptions =
  | { query: string; url?: never }
  | { query?: never; url: string }

export type GraphQLFetcher<
  Data extends GraphQLFetcherResult = GraphQLFetcherResult,
  Variables = any
  > = (
  query: string,
  queryData?: APIFetchOptions<Variables>,
  fetchOptions?: RequestInit
) => Promise<Data>
