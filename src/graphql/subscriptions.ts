/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API'
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType
  __generatedSubscriptionOutput: OutputType
}

export const onCreateUser =
  /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    name
    email
    imageUrl
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    name
    email
    imageUrl
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    name
    email
    imageUrl
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteUserSubscriptionVariables,
    APITypes.OnDeleteUserSubscription
  >
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
    primaryVideo
    status
    description
    duration
    sponsor
    sponsorIcon
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    primaryVideo
    status
    description
    duration
    sponsor
    sponsorIcon
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    primaryVideo
    status
    description
    duration
    sponsor
    sponsorIcon
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteFeaturedExperimentSubscriptionVariables,
    APITypes.OnDeleteFeaturedExperimentSubscription
  >
