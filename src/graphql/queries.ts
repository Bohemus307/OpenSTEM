/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API'
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType
  __generatedQueryOutput: OutputType
}

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>
export const getFeaturedExperiment =
  /* GraphQL */ `query GetFeaturedExperiment($id: ID!) {
  getFeaturedExperiment(id: $id) {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.ListFeaturedExperimentsQueryVariables,
    APITypes.ListFeaturedExperimentsQuery
  >
export const syncFeaturedExperiments =
  /* GraphQL */ `query SyncFeaturedExperiments(
  $filter: ModelFeaturedExperimentFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncFeaturedExperiments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.SyncFeaturedExperimentsQueryVariables,
    APITypes.SyncFeaturedExperimentsQuery
  >
