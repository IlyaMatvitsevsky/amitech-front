import { CmsConfig, GraphQLFetcher } from './types'
import { FetcherError } from './utils/errors'

export const fetchGraphqlApi: (getConfig: () => CmsConfig) => GraphQLFetcher =
  (getConfig) =>
    async (query: string, { variables, preview } = {}, fetchOptions) => {
      const config = getConfig()

      const res = await fetch(config.apiUrl, {
        ...fetchOptions,
        method: 'POST',
        headers: {
          Authorization: config.authorization,
          ...fetchOptions?.headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        }),
        signal: null,
      })

      const json = await res.json()
      if (json.errors) {
        throw new FetcherError({
          errors: json.errors ?? [{ message: 'Failed to fetch STRAPI API' }],
          status: res.status,
        })
      }

      return { data: json.data, res }
    }
