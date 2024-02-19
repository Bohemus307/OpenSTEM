import {
  ModelInit,
  MutableModel,
  __modelMeta__,
  ManagedIdentifier,
} from '@aws-amplify/datastore'
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from '@aws-amplify/datastore'

type EagerStat = {
  readonly id: string
  readonly dataType?: string | null
}

type LazyStat = {
  readonly id: string
  readonly dataType?: string | null
}

export declare type Stat = LazyLoading extends LazyLoadingDisabled
  ? EagerStat
  : LazyStat

export declare const Stat: new (init: ModelInit<Stat>) => Stat

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>
    readOnlyFields: 'createdAt' | 'updatedAt'
  }
  readonly id: string
  readonly name?: string | null
  readonly email: string
  readonly imageUrl?: string | null
  readonly createdAt?: string | null
  readonly updatedAt?: string | null
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>
    readOnlyFields: 'createdAt' | 'updatedAt'
  }
  readonly id: string
  readonly name?: string | null
  readonly email: string
  readonly imageUrl?: string | null
  readonly createdAt?: string | null
  readonly updatedAt?: string | null
}

export declare type User = LazyLoading extends LazyLoadingDisabled
  ? EagerUser
  : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(
    source: User,
    mutator: (draft: MutableModel<User>) => MutableModel<User> | void,
  ): User
}

type EagerFeaturedExperiment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FeaturedExperiment, 'id'>
  }
  readonly id: string
  readonly experiment_id?: string | null
  readonly name?: string | null
  readonly primaryImage?: string | null
  readonly secondaryImage?: string | null
  readonly primaryVideo?: string | null
  readonly status?: string | null
  readonly description?: string | null
  readonly duration?: string | null
  readonly sponsor?: string | null
  readonly sponsorIcon?: string | null
  readonly createdAt?: string | null
  readonly updatedAt?: string | null
}

type LazyFeaturedExperiment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FeaturedExperiment, 'id'>
  }
  readonly id: string
  readonly experiment_id?: string | null
  readonly name?: string | null
  readonly primaryImage?: string | null
  readonly secondaryImage?: string | null
  readonly primaryVideo?: string | null
  readonly status?: string | null
  readonly description?: string | null
  readonly duration?: string | null
  readonly sponsor?: string | null
  readonly sponsorIcon?: string | null
  readonly createdAt?: string | null
  readonly updatedAt?: string | null
}

export declare type FeaturedExperiment = LazyLoading extends LazyLoadingDisabled
  ? EagerFeaturedExperiment
  : LazyFeaturedExperiment

export declare const FeaturedExperiment: (new (
  init: ModelInit<FeaturedExperiment>,
) => FeaturedExperiment) & {
  copyOf(
    source: FeaturedExperiment,
    mutator: (
      draft: MutableModel<FeaturedExperiment>,
    ) => MutableModel<FeaturedExperiment> | void,
  ): FeaturedExperiment
}
