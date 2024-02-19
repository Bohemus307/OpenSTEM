import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FeaturedExperiment } from 'src/interfaces/featuredExperiment'
import Link from 'next/link'
import ExperimentData, { ExperimentDataType } from './ExperimentData'
import {
  ClockIcon,
  CloudIcon,
  GiftIcon,
  SunIcon,
} from '@heroicons/react/24/solid'
import { generateStats } from '@lib/utils/createData'
import useExperimentData from '@hooks/useExperimentData'

interface FeaturedExperimentCardProps {
  experiment: FeaturedExperiment
}
const FeaturedExperimentCard: React.FC<FeaturedExperimentCardProps> = ({
  experiment,
}: FeaturedExperimentCardProps) => {
  const currentData = useExperimentData()

  return (
    <div className="h-max-min flex w-full rounded-lg bg-gray-50 p-4 shadow hover:opacity-80 lg:h-[455px]">
      {experiment && (
        <Link className="flex w-full" href={`/experiment/${experiment.id}`}>
          <div className="flex h-full min-w-max">
            <Image
              height={417}
              width={338}
              src={experiment.primaryImage}
              alt={experiment.description}
              className="rounded-md object-fill"
            />
          </div>
          <div className="ml-8 flex w-full flex-col justify-between">
            <h2 className="mt-4 text-3xl font-bold text-primary-500 ">
              {experiment.name}
            </h2>
            <div className="text-md w-full font-medium">
              <p className="w-10/12">{experiment.description}</p>
              {currentData && <ExperimentData experimentData={currentData} />}
            </div>
            {experiment.sponsor && experiment.sponsorIcon ? (
              <div className="flex items-end justify-end pt-12">
                <span className="flex items-center gap-4 font-medium">
                  Funded by {experiment.sponsor}{' '}
                  {/* <Image
                  height={45}
                  width={45}
                  src={experiment.sponsorIcon}
                  alt={'experiment sponsor icon'}
                /> */}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-end pt-12" />
            )}
          </div>
        </Link>
      )}
    </div>
  )
}

export default FeaturedExperimentCard
