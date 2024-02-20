// import { featuredTempExperiments } from '@lib/utils/sample-data'
import ExperimentCard from './FeaturedExperimentCard'
import useGetFeaturedExperimentsList from '@hooks/useGetFeaturedExperimentList'
import { FeaturedExperiment } from 'src/interfaces/featuredExperiment'

const Featured: React.FC = () => {
  const currentFeaturedExperiments = useGetFeaturedExperimentsList()

  if (currentFeaturedExperiments.isLoading) {
    return (
      <div>
        <div className="h-max-min flex animate-pulse rounded-lg bg-gray-50 p-4 shadow hover:opacity-80 lg:h-[455px]" />
        <div className="h-max-min flex animate-pulse rounded-lg bg-gray-50 p-4 shadow hover:opacity-80 lg:h-[455px]" />
        <div className="h-max-min flex animate-pulse rounded-lg bg-gray-50 p-4 shadow hover:opacity-80 lg:h-[455px]" />
      </div>
    )
  }

  return (
    <div className="w-full flex-col items-center justify-center space-y-8">
      {!currentFeaturedExperiments.isLoading &&
        currentFeaturedExperiments.data &&
        currentFeaturedExperiments.data?.listFeaturedExperiments?.items.map(
          (experiment, index) => (
            <ExperimentCard
              key={`id#${index}`}
              experiment={experiment as unknown as FeaturedExperiment}
            />
          ),
        )}
    </div>
  )
}

export default Featured
