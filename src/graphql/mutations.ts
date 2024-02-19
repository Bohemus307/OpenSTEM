/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API'
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType
  __generatedMutationOutput: OutputType
}

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>
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
` as GeneratedMutation<
    APITypes.DeleteFeaturedExperimentMutationVariables,
    APITypes.DeleteFeaturedExperimentMutation
  >
