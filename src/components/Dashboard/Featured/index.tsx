import { featuredTempExperiments } from '@lib/utils/sample-data'
import ExperimentCard from './FeaturedExperimentCard'

const Featured: React.FC = () => {
  return (
    <div className="w-full flex-col items-center justify-center gap-8 space-y-8">
      {featuredTempExperiments.map((experiment, index) => (
        <ExperimentCard key={`id#${index}`} experiment={experiment} />
      ))}
    </div>
  )
}

export default Featured
