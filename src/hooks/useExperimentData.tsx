import { ExperimentDataType } from '@components/Dashboard/Featured/ExperimentData'
import { SunIcon, CloudIcon, ClockIcon } from '@heroicons/react/24/outline'
import { generateStats } from '@lib/utils/createData'

const useExperimentData = (): ExperimentDataType => {
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

  return experimentData
}

export default useExperimentData
