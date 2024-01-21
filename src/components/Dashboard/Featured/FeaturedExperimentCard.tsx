import React from 'react'
import Image from 'next/image'
import { FeaturedExperiment } from 'src/interfaces/featureExperiment'
import Link from 'next/link'
import ExperimentData from './ExperimentData'

interface FeaturedExperimentCardProps {
  experiment: FeaturedExperiment
}
const FeaturedExperimentCard: React.FC<FeaturedExperimentCardProps> = ({
  experiment,
}: FeaturedExperimentCardProps) => {
  return (
    <div className="h-max-min flex rounded-lg bg-gray-50 p-4 shadow hover:opacity-80 lg:h-[455px]">
      <Link className="flex" href={'/dashboard'}>
        <div className="flex h-full min-w-max">
          <Image
            height={417}
            width={338}
            src={experiment.primaryImage}
            alt={experiment.description}
            className="rounded-md object-fill"
          />
        </div>
        <div className="ml-8">
          <h2 className="mt-4 text-2xl font-bold text-primary-500 ">
            {experiment.name}
          </h2>
          <div className="text-md w-full pt-4 font-medium">
            <p className="w-10/12">{experiment.description}</p>
            <ExperimentData experiment={experiment} />
          </div>
          {experiment.sponsor && experiment.sponsorIcon && (
            <div className="flex items-end justify-end pt-12">
              <span className="flex items-center gap-4 font-medium">
                Funded by {experiment.sponsor}{' '}
                <Image
                  height={45}
                  width={45}
                  src={experiment.sponsorIcon}
                  alt={'experiment sponsor icon'}
                />
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}

export default FeaturedExperimentCard
