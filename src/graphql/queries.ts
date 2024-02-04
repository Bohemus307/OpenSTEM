/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API'
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType
  __generatedQueryOutput: OutputType
}

export const getFeaturedExperiment =
  /* GraphQL */ `query GetFeaturedExperiment($id: ID!) {
  getFeaturedExperiment(id: $id) {
    id
    experiment_id
    name
    primaryImage
    secondaryImage
    status
    description
    envData
    nutrientData
    duration
    start
    end
    sponsor
    dataPoints {
      id
      dataType
      __typename
    }
    sponsorIcon
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetFeaturedExperimentQueryVariables,
    APITypes.GetFeaturedExperimentQuery
  >
export const listFeaturedExperiments =
  /* GraphQL */ `query ListFeaturedExperiments(
  $filter: ModelFeaturedExperimentFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeaturedExperiments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      experiment_id
      name
      primaryImage
      secondaryImage
      status
      description
      envData
      nutrientData
      duration
      start
      end
      sponsor
      sponsorIcon
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
    APITypes.ListFeaturedExperimentsQueryVariables,
    APITypes.ListFeaturedExperimentsQuery
  >
