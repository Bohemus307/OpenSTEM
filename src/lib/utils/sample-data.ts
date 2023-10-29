import { User } from '../../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

export const featuredTempExperiments = [
  {
    createdAt: '2023-10-28T20:35:20.102Z',
    description:
      'Investigating Canopy Shyness in Loblolly Pine (Pinus taeda) Saplings Under Varying Far Red Light Levels in OpenSTEM Hydroponic Zones.',
    duration: '8 weeks',
    end: 1705375939,
    envData: 'tbd',
    id: '8fa8a74e-2ef9-430e-9ea2-6fca13f46850',
    name: 'Loblolly Pine Red Light Trials',
    nutrientData: 'tbd',
    primaryImage: '/images/loblolly-sapling.jpg',
    secondaryImage: 'none',
    sponsor: 'Pepsi',
    start: 1698525139,
    status: 'active',
    updatedAt: '2023-10-28T20:35:20.102Z',
  },
  {
    createdAt: '2023-10-28T20:36:31.253Z',
    description:
      'This experiment aims to investigate the influence of varying light intensities on the growth of lettuce plants.',
    duration: '4 weeks',
    end: 1702697537,
    envData: 'tbd',
    id: '71c29594-7bfa-4ebe-9159-7202a20fc00f',
    name: 'OpenSTEM Lettuce Trials Alpha',
    nutrientData: 'tbd',
    primaryImage: '/images/lettuce-1.jpeg',
    secondaryImage: 'none',
    sponsor: 'Rabbit Coalition',
    start: 1698525139,
    status: 'active',
    updatedAt: '2023-10-28T20:36:31.253Z',
  },
  {
    createdAt: '2023-10-28T20:33:20.687Z',
    description:
      'Evaluating Yaupon Holly (Ilex vomitoria) as the Ideal Caffeine-Producing Plant for Space Cultivation Under Low-Light Conditions',
    duration: '6 weeks',
    end: 1703993539,
    envData: 'tbd',
    id: 'd023c9dc-bb52-4da5-b927-c22951206972',
    name: 'Yaupon Holly Trials',
    nutrientData: 'tbd',
    primaryImage: '/images/Yaupon-Holly-1.jpg',
    secondaryImage: 'None',
    sponsor: 'Rural Electric',
    start: 1698525139,
    status: 'Active',
    updatedAt: '2023-10-28T20:33:20.687Z',
  },
]
