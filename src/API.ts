/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFeaturedExperimentInput = {
  id?: string | null
  name: string
  primaryImage?: string | null
  secondaryImage?: string | null
  status?: string | null
  description?: string | null
  envData?: string | null
  nutrientData?: string | null
  duration?: string | null
  start?: number | null
  end?: number | null
  sponsor?: string | null
}

export type ModelFeaturedExperimentConditionInput = {
  name?: ModelStringInput | null
  primaryImage?: ModelStringInput | null
  secondaryImage?: ModelStringInput | null
  status?: ModelStringInput | null
  description?: ModelStringInput | null
  envData?: ModelStringInput | null
  nutrientData?: ModelStringInput | null
  duration?: ModelStringInput | null
  start?: ModelIntInput | null
  end?: ModelIntInput | null
  sponsor?: ModelStringInput | null
  and?: Array<ModelFeaturedExperimentConditionInput | null> | null
  or?: Array<ModelFeaturedExperimentConditionInput | null> | null
  not?: ModelFeaturedExperimentConditionInput | null
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

export type ModelIntInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
}

export type FeaturedExperiment = {
  __typename: 'FeaturedExperiment'
  id: string
  name: string
  primaryImage?: string | null
  secondaryImage?: string | null
  status?: string | null
  description?: string | null
  envData?: string | null
  nutrientData?: string | null
  duration?: string | null
  start?: number | null
  end?: number | null
  sponsor?: string | null
  createdAt: string
  updatedAt: string
}

export type UpdateFeaturedExperimentInput = {
  id: string
  name?: string | null
  primaryImage?: string | null
  secondaryImage?: string | null
  status?: string | null
  description?: string | null
  envData?: string | null
  nutrientData?: string | null
  duration?: string | null
  start?: number | null
  end?: number | null
  sponsor?: string | null
}

export type DeleteFeaturedExperimentInput = {
  id: string
}

export type CreateUserInput = {
  id?: string | null
  email: string
  name?: string | null
}

export type ModelUserConditionInput = {
  name?: ModelStringInput | null
  and?: Array<ModelUserConditionInput | null> | null
  or?: Array<ModelUserConditionInput | null> | null
  not?: ModelUserConditionInput | null
}

export type User = {
  __typename: 'User'
  id: string
  email: string
  name?: string | null
  experiments?: ModelExperimentConnection | null
  createdAt: string
  updatedAt: string
}

export type ModelExperimentConnection = {
  __typename: 'ModelExperimentConnection'
  items: Array<Experiment | null>
  nextToken?: string | null
}

export type Experiment = {
  __typename: 'Experiment'
  id: string
  user?: User | null
  description: string
  type?: string | null
  status?: string | null
  envData?: string | null
  nutrientData?: string | null
  duration?: string | null
  start?: number | null
  end?: number | null
  primaryImage?: string | null
  secondaryImage?: string | null
  createdAt: string
  updatedAt: string
  userExperimentsEmail?: string | null
}

export type UpdateUserInput = {
  id?: string | null
  email: string
  name?: string | null
}

export type DeleteUserInput = {
  email: string
}

export type CreateExperimentInput = {
  id?: string | null
  description: string
  type?: string | null
  status?: string | null
  envData?: string | null
  nutrientData?: string | null
  duration?: string | null
  start?: number | null
  end?: number | null
  primaryImage?: string | null
  secondaryImage?: string | null
  userExperimentsEmail?: string | null
}

export type ModelExperimentConditionInput = {
  description?: ModelStringInput | null
  type?: ModelStringInput | null
  status?: ModelStringInput | null
  envData?: ModelStringInput | null
  nutrientData?: ModelStringInput | null
  duration?: ModelStringInput | null
  start?: ModelIntInput | null
  end?: ModelIntInput | null
  primaryImage?: ModelStringInput | null
  secondaryImage?: ModelStringInput | null
  and?: Array<ModelExperimentConditionInput | null> | null
  or?: Array<ModelExperimentConditionInput | null> | null
  not?: ModelExperimentConditionInput | null
  userExperimentsEmail?: ModelStringInput | null
}

export type UpdateExperimentInput = {
  id: string
  description?: string | null
  type?: string | null
  status?: string | null
  envData?: string | null
  nutrientData?: string | null
  duration?: string | null
  start?: number | null
  end?: number | null
  primaryImage?: string | null
  secondaryImage?: string | null
  userExperimentsEmail?: string | null
}

export type DeleteExperimentInput = {
  id: string
}

export type ModelFeaturedExperimentFilterInput = {
  id?: ModelIDInput | null
  name?: ModelStringInput | null
  primaryImage?: ModelStringInput | null
  secondaryImage?: ModelStringInput | null
  status?: ModelStringInput | null
  description?: ModelStringInput | null
  envData?: ModelStringInput | null
  nutrientData?: ModelStringInput | null
  duration?: ModelStringInput | null
  start?: ModelIntInput | null
  end?: ModelIntInput | null
  sponsor?: ModelStringInput | null
  and?: Array<ModelFeaturedExperimentFilterInput | null> | null
  or?: Array<ModelFeaturedExperimentFilterInput | null> | null
  not?: ModelFeaturedExperimentFilterInput | null
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

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ModelFeaturedExperimentConnection = {
  __typename: 'ModelFeaturedExperimentConnection'
  items: Array<FeaturedExperiment | null>
  nextToken?: string | null
}

export type ModelUserFilterInput = {
  id?: ModelIDInput | null
  email?: ModelStringInput | null
  name?: ModelStringInput | null
  and?: Array<ModelUserFilterInput | null> | null
  or?: Array<ModelUserFilterInput | null> | null
  not?: ModelUserFilterInput | null
}

export type ModelUserConnection = {
  __typename: 'ModelUserConnection'
  items: Array<User | null>
  nextToken?: string | null
}

export type ModelExperimentFilterInput = {
  id?: ModelIDInput | null
  description?: ModelStringInput | null
  type?: ModelStringInput | null
  status?: ModelStringInput | null
  envData?: ModelStringInput | null
  nutrientData?: ModelStringInput | null
  duration?: ModelStringInput | null
  start?: ModelIntInput | null
  end?: ModelIntInput | null
  primaryImage?: ModelStringInput | null
  secondaryImage?: ModelStringInput | null
  and?: Array<ModelExperimentFilterInput | null> | null
  or?: Array<ModelExperimentFilterInput | null> | null
  not?: ModelExperimentFilterInput | null
  userExperimentsEmail?: ModelStringInput | null
}

export type ModelSubscriptionFeaturedExperimentFilterInput = {
  id?: ModelSubscriptionIDInput | null
  name?: ModelSubscriptionStringInput | null
  primaryImage?: ModelSubscriptionStringInput | null
  secondaryImage?: ModelSubscriptionStringInput | null
  status?: ModelSubscriptionStringInput | null
  description?: ModelSubscriptionStringInput | null
  envData?: ModelSubscriptionStringInput | null
  nutrientData?: ModelSubscriptionStringInput | null
  duration?: ModelSubscriptionStringInput | null
  start?: ModelSubscriptionIntInput | null
  end?: ModelSubscriptionIntInput | null
  sponsor?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionFeaturedExperimentFilterInput | null> | null
  or?: Array<ModelSubscriptionFeaturedExperimentFilterInput | null> | null
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

export type ModelSubscriptionIntInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
  in?: Array<number | null> | null
  notIn?: Array<number | null> | null
}

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null
  email?: ModelSubscriptionStringInput | null
  name?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionUserFilterInput | null> | null
  or?: Array<ModelSubscriptionUserFilterInput | null> | null
}

export type ModelSubscriptionExperimentFilterInput = {
  id?: ModelSubscriptionIDInput | null
  description?: ModelSubscriptionStringInput | null
  type?: ModelSubscriptionStringInput | null
  status?: ModelSubscriptionStringInput | null
  envData?: ModelSubscriptionStringInput | null
  nutrientData?: ModelSubscriptionStringInput | null
  duration?: ModelSubscriptionStringInput | null
  start?: ModelSubscriptionIntInput | null
  end?: ModelSubscriptionIntInput | null
  primaryImage?: ModelSubscriptionStringInput | null
  secondaryImage?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionExperimentFilterInput | null> | null
  or?: Array<ModelSubscriptionExperimentFilterInput | null> | null
}

export type CreateFeaturedExperimentMutationVariables = {
  input: CreateFeaturedExperimentInput
  condition?: ModelFeaturedExperimentConditionInput | null
}

export type CreateFeaturedExperimentMutation = {
  createFeaturedExperiment?: {
    __typename: 'FeaturedExperiment'
    id: string
    name: string
    primaryImage?: string | null
    secondaryImage?: string | null
    status?: string | null
    description?: string | null
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    sponsor?: string | null
    createdAt: string
    updatedAt: string
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
    name: string
    primaryImage?: string | null
    secondaryImage?: string | null
    status?: string | null
    description?: string | null
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    sponsor?: string | null
    createdAt: string
    updatedAt: string
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
    name: string
    primaryImage?: string | null
    secondaryImage?: string | null
    status?: string | null
    description?: string | null
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    sponsor?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateUserMutationVariables = {
  input: CreateUserInput
  condition?: ModelUserConditionInput | null
}

export type CreateUserMutation = {
  createUser?: {
    __typename: 'User'
    id: string
    email: string
    name?: string | null
    experiments?: {
      __typename: 'ModelExperimentConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
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
    email: string
    name?: string | null
    experiments?: {
      __typename: 'ModelExperimentConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
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
    email: string
    name?: string | null
    experiments?: {
      __typename: 'ModelExperimentConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateExperimentMutationVariables = {
  input: CreateExperimentInput
  condition?: ModelExperimentConditionInput | null
}

export type CreateExperimentMutation = {
  createExperiment?: {
    __typename: 'Experiment'
    id: string
    user?: {
      __typename: 'User'
      id: string
      email: string
      name?: string | null
      createdAt: string
      updatedAt: string
    } | null
    description: string
    type?: string | null
    status?: string | null
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    primaryImage?: string | null
    secondaryImage?: string | null
    createdAt: string
    updatedAt: string
    userExperimentsEmail?: string | null
  } | null
}

export type UpdateExperimentMutationVariables = {
  input: UpdateExperimentInput
  condition?: ModelExperimentConditionInput | null
}

export type UpdateExperimentMutation = {
  updateExperiment?: {
    __typename: 'Experiment'
    id: string
    user?: {
      __typename: 'User'
      id: string
      email: string
      name?: string | null
      createdAt: string
      updatedAt: string
    } | null
    description: string
    type?: string | null
    status?: string | null
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    primaryImage?: string | null
    secondaryImage?: string | null
    createdAt: string
    updatedAt: string
    userExperimentsEmail?: string | null
  } | null
}

export type DeleteExperimentMutationVariables = {
  input: DeleteExperimentInput
  condition?: ModelExperimentConditionInput | null
}

export type DeleteExperimentMutation = {
  deleteExperiment?: {
    __typename: 'Experiment'
    id: string
    user?: {
      __typename: 'User'
      id: string
      email: string
      name?: string | null
      createdAt: string
      updatedAt: string
    } | null
    description: string
    type?: string | null
    status?: string | null
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    primaryImage?: string | null
    secondaryImage?: string | null
    createdAt: string
    updatedAt: string
    userExperimentsEmail?: string | null
  } | null
}

export type GetFeaturedExperimentQueryVariables = {
  id: string
}

export type GetFeaturedExperimentQuery = {
  getFeaturedExperiment?: {
    __typename: 'FeaturedExperiment'
    id: string
    name: string
    primaryImage?: string | null
    secondaryImage?: string | null
    status?: string | null
    description?: string | null
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    sponsor?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListFeaturedExperimentsQueryVariables = {
  id?: string | null
  filter?: ModelFeaturedExperimentFilterInput | null
  limit?: number | null
  nextToken?: string | null
  sortDirection?: ModelSortDirection | null
}

export type ListFeaturedExperimentsQuery = {
  listFeaturedExperiments?: {
    __typename: 'ModelFeaturedExperimentConnection'
    items: Array<{
      __typename: 'FeaturedExperiment'
      id: string
      name: string
      primaryImage?: string | null
      secondaryImage?: string | null
      status?: string | null
      description?: string | null
      envData?: string | null
      nutrientData?: string | null
      duration?: string | null
      start?: number | null
      end?: number | null
      sponsor?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetUserQueryVariables = {
  email: string
}

export type GetUserQuery = {
  getUser?: {
    __typename: 'User'
    id: string
    email: string
    name?: string | null
    experiments?: {
      __typename: 'ModelExperimentConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListUsersQueryVariables = {
  email?: string | null
  filter?: ModelUserFilterInput | null
  limit?: number | null
  nextToken?: string | null
  sortDirection?: ModelSortDirection | null
}

export type ListUsersQuery = {
  listUsers?: {
    __typename: 'ModelUserConnection'
    items: Array<{
      __typename: 'User'
      id: string
      email: string
      name?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type GetExperimentQueryVariables = {
  id: string
}

export type GetExperimentQuery = {
  getExperiment?: {
    __typename: 'Experiment'
    id: string
    user?: {
      __typename: 'User'
      id: string
      email: string
      name?: string | null
      createdAt: string
      updatedAt: string
    } | null
    description: string
    type?: string | null
    status?: string | null
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    primaryImage?: string | null
    secondaryImage?: string | null
    createdAt: string
    updatedAt: string
    userExperimentsEmail?: string | null
  } | null
}

export type ListExperimentsQueryVariables = {
  id?: string | null
  filter?: ModelExperimentFilterInput | null
  limit?: number | null
  nextToken?: string | null
  sortDirection?: ModelSortDirection | null
}

export type ListExperimentsQuery = {
  listExperiments?: {
    __typename: 'ModelExperimentConnection'
    items: Array<{
      __typename: 'Experiment'
      id: string
      description: string
      type?: string | null
      status?: string | null
      envData?: string | null
      nutrientData?: string | null
      duration?: string | null
      start?: number | null
      end?: number | null
      primaryImage?: string | null
      secondaryImage?: string | null
      createdAt: string
      updatedAt: string
      userExperimentsEmail?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type OnCreateFeaturedExperimentSubscriptionVariables = {
  filter?: ModelSubscriptionFeaturedExperimentFilterInput | null
}

export type OnCreateFeaturedExperimentSubscription = {
  onCreateFeaturedExperiment?: {
    __typename: 'FeaturedExperiment'
    id: string
    name: string
    primaryImage?: string | null
    secondaryImage?: string | null
    status?: string | null
    description?: string | null
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    sponsor?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateFeaturedExperimentSubscriptionVariables = {
  filter?: ModelSubscriptionFeaturedExperimentFilterInput | null
}

export type OnUpdateFeaturedExperimentSubscription = {
  onUpdateFeaturedExperiment?: {
    __typename: 'FeaturedExperiment'
    id: string
    name: string
    primaryImage?: string | null
    secondaryImage?: string | null
    status?: string | null
    description?: string | null
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    sponsor?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteFeaturedExperimentSubscriptionVariables = {
  filter?: ModelSubscriptionFeaturedExperimentFilterInput | null
}

export type OnDeleteFeaturedExperimentSubscription = {
  onDeleteFeaturedExperiment?: {
    __typename: 'FeaturedExperiment'
    id: string
    name: string
    primaryImage?: string | null
    secondaryImage?: string | null
    status?: string | null
    description?: string | null
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    sponsor?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null
}

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: 'User'
    id: string
    email: string
    name?: string | null
    experiments?: {
      __typename: 'ModelExperimentConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null
}

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: 'User'
    id: string
    email: string
    name?: string | null
    experiments?: {
      __typename: 'ModelExperimentConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null
}

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: 'User'
    id: string
    email: string
    name?: string | null
    experiments?: {
      __typename: 'ModelExperimentConnection'
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateExperimentSubscriptionVariables = {
  filter?: ModelSubscriptionExperimentFilterInput | null
}

export type OnCreateExperimentSubscription = {
  onCreateExperiment?: {
    __typename: 'Experiment'
    id: string
    user?: {
      __typename: 'User'
      id: string
      email: string
      name?: string | null
      createdAt: string
      updatedAt: string
    } | null
    description: string
    type?: string | null
    status?: string | null
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    primaryImage?: string | null
    secondaryImage?: string | null
    createdAt: string
    updatedAt: string
    userExperimentsEmail?: string | null
  } | null
}

export type OnUpdateExperimentSubscriptionVariables = {
  filter?: ModelSubscriptionExperimentFilterInput | null
}

export type OnUpdateExperimentSubscription = {
  onUpdateExperiment?: {
    __typename: 'Experiment'
    id: string
    user?: {
      __typename: 'User'
      id: string
      email: string
      name?: string | null
      createdAt: string
      updatedAt: string
    } | null
    description: string
    type?: string | null
    status?: string | null
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    primaryImage?: string | null
    secondaryImage?: string | null
    createdAt: string
    updatedAt: string
    userExperimentsEmail?: string | null
  } | null
}

export type OnDeleteExperimentSubscriptionVariables = {
  filter?: ModelSubscriptionExperimentFilterInput | null
}

export type OnDeleteExperimentSubscription = {
  onDeleteExperiment?: {
    __typename: 'Experiment'
    id: string
    user?: {
      __typename: 'User'
      id: string
      email: string
      name?: string | null
      createdAt: string
      updatedAt: string
    } | null
    description: string
    type?: string | null
    status?: string | null
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    primaryImage?: string | null
    secondaryImage?: string | null
    createdAt: string
    updatedAt: string
    userExperimentsEmail?: string | null
  } | null
}
