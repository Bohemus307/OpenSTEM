/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API'
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType
  __generatedMutationOutput: OutputType
}

export const createFeaturedExperiment =
  /* GraphQL */ `mutation CreateFeaturedExperiment(
  $input: CreateFeaturedExperimentInput!
  $condition: ModelFeaturedExperimentConditionInput
) {
  createFeaturedExperiment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateFeaturedExperimentMutationVariables,
    APITypes.CreateFeaturedExperimentMutation
  >
export const updateFeaturedExperiment =
  /* GraphQL */ `mutation UpdateFeaturedExperiment(
  $input: UpdateFeaturedExperimentInput!
  $condition: ModelFeaturedExperimentConditionInput
) {
  updateFeaturedExperiment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateFeaturedExperimentMutationVariables,
    APITypes.UpdateFeaturedExperimentMutation
  >
export const deleteFeaturedExperiment =
  /* GraphQL */ `mutation DeleteFeaturedExperiment(
  $input: DeleteFeaturedExperimentInput!
  $condition: ModelFeaturedExperimentConditionInput
) {
  deleteFeaturedExperiment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteFeaturedExperimentMutationVariables,
    APITypes.DeleteFeaturedExperimentMutation
  >
