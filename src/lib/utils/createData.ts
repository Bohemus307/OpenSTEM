import { Stat } from 'src/interfaces/featuredExperiment'

// Function to generate an array of Stat objects
export function generateStats(
  name: string,
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string
      titleId?: string
    } & React.RefAttributes<SVGSVGElement>
  >,
  symbol: string,
  prevStat: number,
): Stat[] {
  const stats: Stat[] = []

  for (let i = 0; i < 100; i++) {
    const stat: Stat = {
      id: i + 1,
      name: name,
      stat: generateChangingValue(prevStat, -1, 1, 5),
      symbol: symbol,
      prevStat: prevStat,
      lastReading: 3000,
      icon: icon,
    }

    stats.push(stat)
  }

  return stats
}

/**
 * Generate a float value representing changing data over time
 * @param previousValue The previous value
 * @param minChange The minimum change allowed
 * @param maxChange The maximum change allowed
 * @param maxDelta The maximum difference allowed between the new value and the previous value
 * @returns The new value
 */
export function generateChangingValue(
  previousValue: number,
  minChange: number,
  maxChange: number,
  maxDelta: number,
): number {
  // Calculate the range for the change
  const changeRange = maxChange - minChange
  // Generate a random change within the specified range
  const change = minChange + Math.random() * changeRange
  // Determine if the change is positive or negative
  const sign = Math.random() < 0.5 ? -1 : 1
  // Apply the change to the previous value
  let newValue = previousValue + sign * change
  // Limit the change to the maximum delta
  if (Math.abs(newValue - previousValue) > maxDelta) {
    newValue = previousValue + Math.sign(newValue - previousValue) * maxDelta
  }
  // Round the new value to two decimal places
  return parseFloat(newValue.toFixed(2))
}
