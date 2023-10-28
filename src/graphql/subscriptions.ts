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
    name
    status
    description
    envData
    nutrientData
    duration
    start
    end
    sponsor
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
    name
    status
    description
    envData
    nutrientData
    duration
    start
    end
    sponsor
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
    name
    status
    description
    envData
    nutrientData
    duration
    start
    end
    sponsor
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteFeaturedExperimentSubscriptionVariables,
    APITypes.OnDeleteFeaturedExperimentSubscription
  >
export const onCreateUser =
  /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    email
    name
    experiments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateUserSubscriptionVariables,
    APITypes.OnCreateUserSubscription
  >
export const onUpdateUser =
  /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    email
    name
    experiments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateUserSubscriptionVariables,
    APITypes.OnUpdateUserSubscription
  >
export const onDeleteUser =
  /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    email
    name
    experiments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteUserSubscriptionVariables,
    APITypes.OnDeleteUserSubscription
  >
export const onCreateExperiment =
  /* GraphQL */ `subscription OnCreateExperiment(
  $filter: ModelSubscriptionExperimentFilterInput
) {
  onCreateExperiment(filter: $filter) {
    id
    user {
      id
      email
      name
      createdAt
      updatedAt
      __typename
    }
    description
    type
    status
    envData
    nutrientData
    duration
    start
    end
    createdAt
    updatedAt
    userExperimentsEmail
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateExperimentSubscriptionVariables,
    APITypes.OnCreateExperimentSubscription
  >
export const onUpdateExperiment =
  /* GraphQL */ `subscription OnUpdateExperiment(
  $filter: ModelSubscriptionExperimentFilterInput
) {
  onUpdateExperiment(filter: $filter) {
    id
    user {
      id
      email
      name
      createdAt
      updatedAt
      __typename
    }
    description
    type
    status
    envData
    nutrientData
    duration
    start
    end
    createdAt
    updatedAt
    userExperimentsEmail
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateExperimentSubscriptionVariables,
    APITypes.OnUpdateExperimentSubscription
  >
export const onDeleteExperiment =
  /* GraphQL */ `subscription OnDeleteExperiment(
  $filter: ModelSubscriptionExperimentFilterInput
) {
  onDeleteExperiment(filter: $filter) {
    id
    user {
      id
      email
      name
      createdAt
      updatedAt
      __typename
    }
    description
    type
    status
    envData
    nutrientData
    duration
    start
    end
    createdAt
    updatedAt
    userExperimentsEmail
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteExperimentSubscriptionVariables,
    APITypes.OnDeleteExperimentSubscription
  >
