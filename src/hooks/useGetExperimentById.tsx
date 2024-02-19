import { useQuery } from 'react-query'
import * as queries from '../graphql/queries'
import { GetFeaturedExperimentQuery } from 'src/API'
import { generateClient } from 'aws-amplify/api'

const client = generateClient()

async function getExperimentsById(
  id: string,
): Promise<GetFeaturedExperimentQuery> {
  try {
    const getExperimentsByIdResponse = (await client.graphql({
      query: queries.getFeaturedExperiment,
      variables: { id },
    })) as {
      data: GetFeaturedExperimentQuery
    }
    return getExperimentsByIdResponse.data
  } catch (error) {
    throw new Error(
      `error in get list of featured experiments query!!! ${JSON.stringify(
        error,
      )}`,
    )
  }
}

export default function useGetExperimentsById(id: string) {
  return useQuery(['getExperimentsById', id], () => getExperimentsById(id))
}
