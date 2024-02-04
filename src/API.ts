/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFeaturedExperimentInput = {
  id?: string | null
  experiment_id?: string | null
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
  dataPoints?: Array<StatInput | null> | null
  sponsorIcon?: string | null
  createdAt?: string | null
  updatedAt?: string | null
}

export type StatInput = {
  id: string
  dataType?: string | null
}

export type ModelFeaturedExperimentConditionInput = {
  experiment_id?: ModelStringInput | null
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
  sponsorIcon?: ModelStringInput | null
  createdAt?: ModelStringInput | null
  updatedAt?: ModelStringInput | null
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
  experiment_id?: string | null
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
  dataPoints?: Array<Stat | null> | null
  sponsorIcon?: string | null
  createdAt?: string | null
  updatedAt?: string | null
}

export type Stat = {
  __typename: 'Stat'
  id: string
  dataType?: string | null
}

export type UpdateFeaturedExperimentInput = {
  id: string
  experiment_id?: string | null
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
  dataPoints?: Array<StatInput | null> | null
  sponsorIcon?: string | null
  createdAt?: string | null
  updatedAt?: string | null
}

export type DeleteFeaturedExperimentInput = {
  id: string
}

export type ModelFeaturedExperimentFilterInput = {
  id?: ModelIDInput | null
  experiment_id?: ModelStringInput | null
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
  sponsorIcon?: ModelStringInput | null
  createdAt?: ModelStringInput | null
  updatedAt?: ModelStringInput | null
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

export type ModelFeaturedExperimentConnection = {
  __typename: 'ModelFeaturedExperimentConnection'
  items: Array<FeaturedExperiment | null>
  nextToken?: string | null
}

export type ModelSubscriptionFeaturedExperimentFilterInput = {
  id?: ModelSubscriptionIDInput | null
  experiment_id?: ModelSubscriptionStringInput | null
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
  sponsorIcon?: ModelSubscriptionStringInput | null
  createdAt?: ModelSubscriptionStringInput | null
  updatedAt?: ModelSubscriptionStringInput | null
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
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    sponsor?: string | null
    dataPoints?: Array<{
      __typename: 'Stat'
      id: string
      dataType?: string | null
    } | null> | null
    sponsorIcon?: string | null
    createdAt?: string | null
    updatedAt?: string | null
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
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    sponsor?: string | null
    dataPoints?: Array<{
      __typename: 'Stat'
      id: string
      dataType?: string | null
    } | null> | null
    sponsorIcon?: string | null
    createdAt?: string | null
    updatedAt?: string | null
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
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    sponsor?: string | null
    dataPoints?: Array<{
      __typename: 'Stat'
      id: string
      dataType?: string | null
    } | null> | null
    sponsorIcon?: string | null
    createdAt?: string | null
    updatedAt?: string | null
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
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    sponsor?: string | null
    dataPoints?: Array<{
      __typename: 'Stat'
      id: string
      dataType?: string | null
    } | null> | null
    sponsorIcon?: string | null
    createdAt?: string | null
    updatedAt?: string | null
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
      envData?: string | null
      nutrientData?: string | null
      duration?: string | null
      start?: number | null
      end?: number | null
      sponsor?: string | null
      sponsorIcon?: string | null
      createdAt?: string | null
      updatedAt?: string | null
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
    experiment_id?: string | null
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
    dataPoints?: Array<{
      __typename: 'Stat'
      id: string
      dataType?: string | null
    } | null> | null
    sponsorIcon?: string | null
    createdAt?: string | null
    updatedAt?: string | null
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
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    sponsor?: string | null
    dataPoints?: Array<{
      __typename: 'Stat'
      id: string
      dataType?: string | null
    } | null> | null
    sponsorIcon?: string | null
    createdAt?: string | null
    updatedAt?: string | null
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
    envData?: string | null
    nutrientData?: string | null
    duration?: string | null
    start?: number | null
    end?: number | null
    sponsor?: string | null
    dataPoints?: Array<{
      __typename: 'Stat'
      id: string
      dataType?: string | null
    } | null> | null
    sponsorIcon?: string | null
    createdAt?: string | null
    updatedAt?: string | null
  } | null
}
