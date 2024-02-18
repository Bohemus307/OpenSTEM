// @ts-check
import { initSchema } from '@aws-amplify/datastore'
import { schema } from './schema'

const { User, FeaturedExperiment, Stat } = initSchema(schema)

export { User, FeaturedExperiment, Stat }
