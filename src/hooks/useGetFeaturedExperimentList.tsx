import { useQuery } from 'react-query'
import * as queries from '../graphql/queries'
import {
  ListFeaturedExperimentsQuery,
  ModelFeaturedExperimentFilterInput,
} from 'src/API'
import { generateClient } from 'aws-amplify/api'

const client = generateClient()

async function getFeaturedExperimentsList(): Promise<ListFeaturedExperimentsQuery> {
  try {
    const filter: ModelFeaturedExperimentFilterInput = {
      _deleted: { attributeExists: false },
    }

    const getFeaturedExperimentsListResponse = (await client.graphql({
      query: queries.listFeaturedExperiments,
      variables: { filter },
    })) as {
      data: ListFeaturedExperimentsQuery
    }
    return getFeaturedExperimentsListResponse.data
  } catch (error) {
    throw new Error(
      `error in get list of featured experiments query!!! ${JSON.stringify(
        error,
      )}`,
    )
  }
}

export default function useGetFeaturedExperimentsList() {
  return useQuery('getFeaturedExperimentsList', getFeaturedExperimentsList)
}
