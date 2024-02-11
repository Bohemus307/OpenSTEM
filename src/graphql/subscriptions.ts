/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API'
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType
  __generatedSubscriptionOutput: OutputType
}

export const onCreateFeaturedExperiment =
  /* GraphQL */ `subscription OnCreateFeaturedExperiment(
  $filter: ModelSubscriptionFeaturedExperimentFilterInput
) {
  onCreateFeaturedExperiment(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreateFeaturedExperimentSubscriptionVariables,
    APITypes.OnCreateFeaturedExperimentSubscription
  >
export const onUpdateFeaturedExperiment =
  /* GraphQL */ `subscription OnUpdateFeaturedExperiment(
  $filter: ModelSubscriptionFeaturedExperimentFilterInput
) {
  onUpdateFeaturedExperiment(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateFeaturedExperimentSubscriptionVariables,
    APITypes.OnUpdateFeaturedExperimentSubscription
  >
export const onDeleteFeaturedExperiment =
  /* GraphQL */ `subscription OnDeleteFeaturedExperiment(
  $filter: ModelSubscriptionFeaturedExperimentFilterInput
) {
  onDeleteFeaturedExperiment(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteFeaturedExperimentSubscriptionVariables,
    APITypes.OnDeleteFeaturedExperimentSubscription
  >
