export type FeaturedExperiment = {
  id: string
  name: string
  primaryImage: string
  secondaryImage: string
  status: string
  description: string
  envData: string
  nutrientData: string
  duration: string
  start: number
  end: number
  sponsor?: string
  dataPoints: Stat[]
  sponsorIcon?: string
  createdAt: string
  updatedAt: string
}

// local stat type is diff from api one for now
export type Stat = {
  id: number
  name: string
  stat: number | string
  prevStat?: number
  lastReading?: number
  symbol: string
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string
      titleId?: string
    } & React.RefAttributes<SVGSVGElement>
  >
}
