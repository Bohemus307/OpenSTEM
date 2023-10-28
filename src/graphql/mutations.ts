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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.DeleteFeaturedExperimentMutationVariables,
    APITypes.DeleteFeaturedExperimentMutation
  >
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>
export const createExperiment = /* GraphQL */ `mutation CreateExperiment(
  $input: CreateExperimentInput!
  $condition: ModelExperimentConditionInput
) {
  createExperiment(input: $input, condition: $condition) {
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
    primaryImage
    secondaryImage
    createdAt
    updatedAt
    userExperimentsEmail
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExperimentMutationVariables,
  APITypes.CreateExperimentMutation
>
export const updateExperiment = /* GraphQL */ `mutation UpdateExperiment(
  $input: UpdateExperimentInput!
  $condition: ModelExperimentConditionInput
) {
  updateExperiment(input: $input, condition: $condition) {
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
    primaryImage
    secondaryImage
    createdAt
    updatedAt
    userExperimentsEmail
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExperimentMutationVariables,
  APITypes.UpdateExperimentMutation
>
export const deleteExperiment = /* GraphQL */ `mutation DeleteExperiment(
  $input: DeleteExperimentInput!
  $condition: ModelExperimentConditionInput
) {
  deleteExperiment(input: $input, condition: $condition) {
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
    primaryImage
    secondaryImage
    createdAt
    updatedAt
    userExperimentsEmail
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExperimentMutationVariables,
  APITypes.DeleteExperimentMutation
>
