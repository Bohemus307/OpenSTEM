import React from 'react'
import { FeaturedExperiment } from 'src/interfaces/featuredExperiment'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import {
  ClockIcon,
  CloudIcon,
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  SunIcon,
} from '@heroicons/react/24/outline'

interface ExperimentDataProps {
  experiment: FeaturedExperiment
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const ExperimentData: React.FC<ExperimentDataProps> = ({
  experiment,
}: ExperimentDataProps) => {
  const calculateDifference = (
    stat: number | string,
    prevStat: number,
  ): { difference?: number | string; changeType: string } => {
    let difference: number | string | undefined
    let changeType = ''

    if (typeof stat === 'string') {
      // Expect a date string in the format mm/dd/yyyy
      const [month, day, year] = stat.split('/').map(Number)
      const inputDate = new Date(year, month - 1, day) // Month is zero-based

      const currentDate = new Date()
      const differenceMilliseconds = currentDate.getTime() - inputDate.getTime()
      difference = Math.abs(
        Math.round(differenceMilliseconds / (1000 * 60 * 60 * 24)),
      )
      changeType = 'increase'
    }

    if (typeof stat === 'number') {
      // Calculate the difference
      difference = prevStat - stat

      // Determine if it's an increase, decrease, or no change
      changeType =
        difference > 0 ? 'increase' : difference < 0 ? 'decrease' : 'no change'

      difference = difference.toFixed(2)
    }

    return { difference, changeType }
  }

  return (
    <dl className="mt-8 grid w-full grid-cols-1 gap-3 lg:grid-cols-3">
      {experiment?.dataPoints?.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded-lg bg-white px-4 py-4 shadow sm:px-6 sm:pt-6"
        >
          <dt>
            <div className="absolute rounded-md bg-primary-500 p-3">
              <item.icon className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <p className="ml-14 truncate text-sm font-medium text-gray-500">
              {item.name}
            </p>
          </dt>
          <dd className="ml-14 flex flex-col items-baseline pb-6 sm:pb-7 xl:flex-row">
            <p className="text-xl font-semibold text-gray-900">
              {item.stat}
              {item.symbol}
            </p>
            <p
              className={classNames(
                calculateDifference(item.stat, item?.prevStat as number)
                  .changeType === 'increase'
                  ? 'text-primary-500'
                  : 'text-red-600',
                'ml-1 flex items-baseline text-sm font-semibold',
              )}
            >
              {calculateDifference(item.stat, item?.prevStat as number)
                .changeType === 'increase' ? (
                <ArrowUpIcon
                  className="h-5 w-5 flex-shrink-0 self-center text-primary-500"
                  aria-hidden="true"
                />
              ) : (
                <ArrowDownIcon
                  className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                  aria-hidden="true"
                />
              )}

              <span className="sr-only">
                {' '}
                {calculateDifference(item.stat, item?.prevStat as number)
                  .changeType === 'increase'
                  ? 'Increased'
                  : 'Decreased'}{' '}
                by{' '}
              </span>
              {
                calculateDifference(item.stat, item?.prevStat as number)
                  .difference
              }
              {item.symbol === '' ? 'days' : item.symbol}
            </p>
          </dd>
          {item.name !== 'Trial Began' && item?.lastReading && (
            <dd className="text-sm">
              Last Reading: {item?.lastReading / 1000}s ago
            </dd>
          )}
        </div>
      ))}
    </dl>
  )
}

export default ExperimentData
