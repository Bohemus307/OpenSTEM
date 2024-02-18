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

interface FeaturedExperimentCardProps {
  experiment: FeaturedExperiment
}
const FeaturedExperimentCard: React.FC<FeaturedExperimentCardProps> = ({
  experiment,
}: FeaturedExperimentCardProps) => {
  const [currentData, setCurrentData] = useState<ExperimentDataType>()

  // create fake data for now
  useEffect(() => {
    if (experiment) {
      const temperatureData = generateStats('Temperature', SunIcon, '°', 69.59)
      const humidityData = generateStats('Humidity', CloudIcon, '%', 9.59)
      const trialData = {
        id: 3,
        name: 'Trial Began',
        stat: '1/1/2024',
        icon: ClockIcon,
        symbol: '',
      }
      const experimentData = {
        temperature: temperatureData,
        humidity: humidityData,
        trial: trialData,
      }
      setCurrentData(experimentData)
    }
  }, [experiment])

  return (
    <div className="h-max-min flex rounded-lg bg-gray-50 p-4 shadow hover:opacity-80 lg:h-[455px]">
      {experiment && (
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
            <h2 className="mt-4 text-3xl font-bold text-primary-500 ">
              {experiment.name}
            </h2>
            <div className="text-md w-full pt-4 font-medium">
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
              <div className="flex flex-col items-center">
                <div className="border-1 flex h-12 w-12 items-center justify-center rounded-md border bg-primary-500">
                  <GiftIcon className="text-primary-600" />
                </div>
                <span className="text-xs">No Current Sponsor</span>
              </div>
            )}
          </div>
        </Link>
      )}
    </div>
  )
}

export default FeaturedExperimentCard
