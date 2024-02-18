/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null
  name?: string | null
  email: string
  imageUrl?: string | null
  _version?: number | null
}

export type ModelUserConditionInput = {
  name?: ModelStringInput | null
  email?: ModelStringInput | null
  imageUrl?: ModelStringInput | null
  and?: Array<ModelUserConditionInput | null> | null
  or?: Array<ModelUserConditionInput | null> | null
  not?: ModelUserConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
}

export type ModelBooleanInput = {
  ne?: boolean | null
  eq?: boolean | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
}

export type User = {
  __typename: 'User'
  id: string
  name?: string | null
  email: string
  imageUrl?: string | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateUserInput = {
  id: string
  name?: string | null
  email?: string | null
  imageUrl?: string | null
  _version?: number | null
}

export type DeleteUserInput = {
  id: string
  _version?: number | null
}

export type CreateFeaturedExperimentInput = {
  id?: string | null
  experiment_id?: string | null
  name?: string | null
  primaryImage?: string | null
  secondaryImage?: string | null
  status?: string | null
  description?: string | null
  duration?: string | null
  sponsor?: string | null
  sponsorIcon?: string | null
  createdAt?: string | null
  updatedAt?: string | null
  _version?: number | null
}

export type ModelFeaturedExperimentConditionInput = {
  experiment_id?: ModelStringInput | null
  name?: ModelStringInput | null
  primaryImage?: ModelStringInput | null
  secondaryImage?: ModelStringInput | null
  status?: ModelStringInput | null
  description?: ModelStringInput | null
  duration?: ModelStringInput | null
  sponsor?: ModelStringInput | null
  sponsorIcon?: ModelStringInput | null
  createdAt?: ModelStringInput | null
  updatedAt?: ModelStringInput | null
  and?: Array<ModelFeaturedExperimentConditionInput | null> | null
  or?: Array<ModelFeaturedExperimentConditionInput | null> | null
  not?: ModelFeaturedExperimentConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type FeaturedExperiment = {
  __typename: 'FeaturedExperiment'
  id: string
  experiment_id?: string | null
  name?: string | null
  primaryImage?: string | null
  secondaryImage?: string | null
  status?: string | null
  description?: string | null
  duration?: string | null
  sponsor?: string | null
  sponsorIcon?: string | null
  createdAt?: string | null
  updatedAt?: string | null
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateFeaturedExperimentInput = {
  id: string
  experiment_id?: string | null
  name?: string | null
  primaryImage?: string | null
  secondaryImage?: string | null
  status?: string | null
  description?: string | null
  duration?: string | null
  sponsor?: string | null
  sponsorIcon?: string | null
  createdAt?: string | null
  updatedAt?: string | null
  _version?: number | null
}

export type DeleteFeaturedExperimentInput = {
  id: string
  _version?: number | null
}

export type ModelUserFilterInput = {
  id?: ModelIDInput | null
  name?: ModelStringInput | null
  email?: ModelStringInput | null
  imageUrl?: ModelStringInput | null
  and?: Array<ModelUserFilterInput | null> | null
  or?: Array<ModelUserFilterInput | null> | null
  not?: ModelUserFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export type ModelUserConnection = {
  __typename: 'ModelUserConnection'
  items: Array<User | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelFeaturedExperimentFilterInput = {
  id?: ModelIDInput | null
  experiment_id?: ModelStringInput | null
  name?: ModelStringInput | null
  primaryImage?: ModelStringInput | null
  secondaryImage?: ModelStringInput | null
  status?: ModelStringInput | null
  description?: ModelStringInput | null
  duration?: ModelStringInput | null
  sponsor?: ModelStringInput | null
  sponsorIcon?: ModelStringInput | null
  createdAt?: ModelStringInput | null
  updatedAt?: ModelStringInput | null
  and?: Array<ModelFeaturedExperimentFilterInput | null> | null
  or?: Array<ModelFeaturedExperimentFilterInput | null> | null
  not?: ModelFeaturedExperimentFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelFeaturedExperimentConnection = {
  __typename: 'ModelFeaturedExperimentConnection'
  items: Array<FeaturedExperiment | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null
  name?: ModelSubscriptionStringInput | null
  email?: ModelSubscriptionStringInput | null
  imageUrl?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionUserFilterInput | null> | null
  or?: Array<ModelSubscriptionUserFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  in?: Array<string | null> | null
  notIn?: Array<string | null> | null
}

export type ModelSubscriptionStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  in?: Array<string | null> | null
  notIn?: Array<string | null> | null
}

export type ModelSubscriptionFeaturedExperimentFilterInput = {
  id?: ModelSubscriptionIDInput | null
  experiment_id?: ModelSubscriptionStringInput | null
  name?: ModelSubscriptionStringInput | null
  primaryImage?: ModelSubscriptionStringInput | null
  secondaryImage?: ModelSubscriptionStringInput | null
  status?: ModelSubscriptionStringInput | null
  description?: ModelSubscriptionStringInput | null
  duration?: ModelSubscriptionStringInput | null
  sponsor?: ModelSubscriptionStringInput | null
  sponsorIcon?: ModelSubscriptionStringInput | null
  createdAt?: ModelSubscriptionStringInput | null
  updatedAt?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionFeaturedExperimentFilterInput | null> | null
  or?: Array<ModelSubscriptionFeaturedExperimentFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type CreateUserMutationVariables = {
  input: CreateUserInput
  condition?: ModelUserConditionInput | null
}

export type CreateUserMutation = {
  createUser?: {
    __typename: 'User'
    id: string
    name?: string | null
    email: string
    imageUrl?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateUserMutationVariables = {
  input: UpdateUserInput
  condition?: ModelUserConditionInput | null
}

export type UpdateUserMutation = {
  updateUser?: {
    __typename: 'User'
    id: string
    name?: string | null
    email: string
    imageUrl?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteUserMutationVariables = {
  input: DeleteUserInput
  condition?: ModelUserConditionInput | null
}

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: 'User'
    id: string
    name?: string | null
    email: string
    imageUrl?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateFeaturedExperimentMutationVariables = {
  input: CreateFeaturedExperimentInput
  condition?: ModelFeaturedExperimentConditionInput | null
}

export type CreateFeaturedExperimentMutation = {
  createFeaturedExperiment?: {
    __typename: 'FeaturedExperiment'
    id: string
    experiment_id?: string | null
    name?: string | null
    primaryImage?: string | null
    secondaryImage?: string | null
    status?: string | null
    description?: string | null
    duration?: string | null
    sponsor?: string | null
    sponsorIcon?: string | null
    createdAt?: string | null
    updatedAt?: string | null
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateFeaturedExperimentMutationVariables = {
  input: UpdateFeaturedExperimentInput
  condition?: ModelFeaturedExperimentConditionInput | null
}

export type UpdateFeaturedExperimentMutation = {
  updateFeaturedExperiment?: {
    __typename: 'FeaturedExperiment'
    id: string
    experiment_id?: string | null
    name?: string | null
    primaryImage?: string | null
    secondaryImage?: string | null
    status?: string | null
    description?: string | null
    duration?: string | null
    sponsor?: string | null
    sponsorIcon?: string | null
    createdAt?: string | null
    updatedAt?: string | null
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteFeaturedExperimentMutationVariables = {
  input: DeleteFeaturedExperimentInput
  condition?: ModelFeaturedExperimentConditionInput | null
}

export type DeleteFeaturedExperimentMutation = {
  deleteFeaturedExperiment?: {
    __typename: 'FeaturedExperiment'
    id: string
    experiment_id?: string | null
    name?: string | null
    primaryImage?: string | null
    secondaryImage?: string | null
    status?: string | null
    description?: string | null
    duration?: string | null
    sponsor?: string | null
    sponsorIcon?: string | null
    createdAt?: string | null
    updatedAt?: string | null
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type GetUserQueryVariables = {
  id: string
}

export type GetUserQuery = {
  getUser?: {
    __typename: 'User'
    id: string
    name?: string | null
    email: string
    imageUrl?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListUsersQuery = {
  listUsers?: {
    __typename: 'ModelUserConnection'
    items: Array<{
      __typename: 'User'
      id: string
      name?: string | null
      email: string
      imageUrl?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncUsersQuery = {
  syncUsers?: {
    __typename: 'ModelUserConnection'
    items: Array<{
      __typename: 'User'
      id: string
      name?: string | null
      email: string
      imageUrl?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetFeaturedExperimentQueryVariables = {
  id: string
}

export type GetFeaturedExperimentQuery = {
  getFeaturedExperiment?: {
    __typename: 'FeaturedExperiment'
    id: string
    experiment_id?: string | null
    name?: string | null
    primaryImage?: string | null
    secondaryImage?: string | null
    status?: string | null
    description?: string | null
    duration?: string | null
    sponsor?: string | null
    sponsorIcon?: string | null
    createdAt?: string | null
    updatedAt?: string | null
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListFeaturedExperimentsQueryVariables = {
  filter?: ModelFeaturedExperimentFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListFeaturedExperimentsQuery = {
  listFeaturedExperiments?: {
    __typename: 'ModelFeaturedExperimentConnection'
    items: Array<{
      __typename: 'FeaturedExperiment'
      id: string
      experiment_id?: string | null
      name?: string | null
      primaryImage?: string | null
      secondaryImage?: string | null
      status?: string | null
      description?: string | null
      duration?: string | null
      sponsor?: string | null
      sponsorIcon?: string | null
      createdAt?: string | null
      updatedAt?: string | null
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncFeaturedExperimentsQueryVariables = {
  filter?: ModelFeaturedExperimentFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncFeaturedExperimentsQuery = {
  syncFeaturedExperiments?: {
    __typename: 'ModelFeaturedExperimentConnection'
    items: Array<{
      __typename: 'FeaturedExperiment'
      id: string
      experiment_id?: string | null
      name?: string | null
      primaryImage?: string | null
      secondaryImage?: string | null
      status?: string | null
      description?: string | null
      duration?: string | null
      sponsor?: string | null
      sponsorIcon?: string | null
      createdAt?: string | null
      updatedAt?: string | null
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null
}

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: 'User'
    id: string
    name?: string | null
    email: string
    imageUrl?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null
}

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: 'User'
    id: string
    name?: string | null
    email: string
    imageUrl?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null
}

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: 'User'
    id: string
    name?: string | null
    email: string
    imageUrl?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateFeaturedExperimentSubscriptionVariables = {
  filter?: ModelSubscriptionFeaturedExperimentFilterInput | null
}

export type OnCreateFeaturedExperimentSubscription = {
  onCreateFeaturedExperiment?: {
    __typename: 'FeaturedExperiment'
    id: string
    experiment_id?: string | null
    name?: string | null
    primaryImage?: string | null
    secondaryImage?: string | null
    status?: string | null
    description?: string | null
    duration?: string | null
    sponsor?: string | null
    sponsorIcon?: string | null
    createdAt?: string | null
    updatedAt?: string | null
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateFeaturedExperimentSubscriptionVariables = {
  filter?: ModelSubscriptionFeaturedExperimentFilterInput | null
}

export type OnUpdateFeaturedExperimentSubscription = {
  onUpdateFeaturedExperiment?: {
    __typename: 'FeaturedExperiment'
    id: string
    experiment_id?: string | null
    name?: string | null
    primaryImage?: string | null
    secondaryImage?: string | null
    status?: string | null
    description?: string | null
    duration?: string | null
    sponsor?: string | null
    sponsorIcon?: string | null
    createdAt?: string | null
    updatedAt?: string | null
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteFeaturedExperimentSubscriptionVariables = {
  filter?: ModelSubscriptionFeaturedExperimentFilterInput | null
}

export type OnDeleteFeaturedExperimentSubscription = {
  onDeleteFeaturedExperiment?: {
    __typename: 'FeaturedExperiment'
    id: string
    experiment_id?: string | null
    name?: string | null
    primaryImage?: string | null
    secondaryImage?: string | null
    status?: string | null
    description?: string | null
    duration?: string | null
    sponsor?: string | null
    sponsorIcon?: string | null
    createdAt?: string | null
    updatedAt?: string | null
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}
