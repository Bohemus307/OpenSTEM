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
` as GeneratedQuery<
    APITypes.GetFeaturedExperimentQueryVariables,
    APITypes.GetFeaturedExperimentQuery
  >
export const listFeaturedExperiments =
  /* GraphQL */ `query ListFeaturedExperiments(
  $id: ID
  $filter: ModelFeaturedExperimentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listFeaturedExperiments(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
    APITypes.ListFeaturedExperimentsQueryVariables,
    APITypes.ListFeaturedExperimentsQuery
  >
export const getUser = /* GraphQL */ `query GetUser($email: String!) {
  getUser(email: $email) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>
export const listUsers = /* GraphQL */ `query ListUsers(
  $email: String
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      email
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>
export const getExperiment = /* GraphQL */ `query GetExperiment($id: ID!) {
  getExperiment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExperimentQueryVariables,
  APITypes.GetExperimentQuery
>
export const listExperiments = /* GraphQL */ `query ListExperiments(
  $id: ID
  $filter: ModelExperimentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listExperiments(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExperimentsQueryVariables,
  APITypes.ListExperimentsQuery
>
