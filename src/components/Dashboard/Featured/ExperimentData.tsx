import React, { useEffect, useState } from 'react'
import { Stat } from 'src/interfaces/featuredExperiment'
import DataCard from './DataCard'

interface ExperimentDataProps {
  experimentData: ExperimentDataType
  layout?: string
}

export type ExperimentDataType = {
  temperature: Stat[]
  humidity: Stat[]
  trial: Stat
}

const ExperimentData: React.FC<ExperimentDataProps> = ({
  experimentData,
  layout,
}: ExperimentDataProps) => {
  const [currentTempStat, setCurrentTempStat] = useState(
    experimentData.temperature[0],
  )
  const [currentHumidStat, setCurrentHumidStat] = useState(
    experimentData.humidity[0],
  )

  useEffect(() => {
    let count = 1
    const interval = setInterval(() => {
      setCurrentTempStat(experimentData.temperature[count])
      setCurrentHumidStat(experimentData.humidity[count])
      count++
    }, 3000)

    // Cleanup function to clear the interval when component unmounts or dependency changes
    return () => {
      clearInterval(interval)
    }
  }, [experimentData.humidity, experimentData.temperature])

  return (
    <dl
      className={`${layout === 'column' ? 'grid grid-cols-1 gap-3' : 'grid grid-cols-1 gap-3 lg:grid-cols-3'}`}
    >
      <DataCard dataStat={currentTempStat} />
      <DataCard dataStat={currentHumidStat} />
      <DataCard dataStat={experimentData.trial} />
    </dl>
  )
}

export default ExperimentData
