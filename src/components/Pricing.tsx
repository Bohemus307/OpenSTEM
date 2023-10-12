import clsx from 'clsx'
import yauponImage1 from '@images/Yaupon-Holly-1.jpg'
import loblollyImage1 from '@images/loblolly-sapling.jpg'
import lettuceImage1 from '@images/lettuce-1.jpeg'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@components/Button'
import { Container } from '@components/Container'

function SwirlyDoodle(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  )
}

function CheckIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className,
      )}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  image,
  description,
  href,
  features,
  featured = false,
}: {
  name: string
  image: StaticImageData
  description: string
  href: string
  features: Array<string>
  featured?: boolean
}) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8',
        featured ? 'bg-primary-600 order-first py-8 lg:order-none' : 'lg:py-8',
      )}
    >
      <Image
        className="h-40 w-52 place-self-center object-contain p-2"
        src={image}
        alt="Experiment image"
        width={100}
        height={100}
      />
      <h3 className="font-display mt-5 text-lg text-white">{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-white' : 'text-slate-400',
        )}
      >
        {description}
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-white' : 'text-slate-200',
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? 'text-white' : 'text-slate-400'} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant={featured ? 'solid' : 'outline'}
        color="white"
        className="mt-8"
        aria-label={`Get started viewing the ${name} trial`}
      >
        Join Now
      </Button>
    </section>
  )
}

export function Pricing() {
  return (
    <section
      id="upcoming"
      aria-label="upcoming experiments"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="fill-primary-400 absolute left-0 top-1/2 h-[1em] w-full" />
              <span className="relative">Upcoming Experiments,</span>
            </span>{' '}
            for everyone.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            We have a constant cycle of new and interesting sponsored studies.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Yaupon Holly Trials"
            image={yauponImage1}
            description="Evaluating Yaupon Holly (Ilex vomitoria) as the Ideal Caffeine-Producing Plant for Space Cultivation Under Low-Light Conditions"
            href="/register"
            features={[
              'Specially selected Yaupon Holly plants will be prepared for hydroponic growth within the controlled environment of an OpenSTEM Hydroponic Zone',
              'The Yaupon Holly plants will be placed in hydroponic trays within the OpenSTEM system, where they will receive essential nutrients and water.',
              'Different groups of Yaupon Holly plants will be subjected to varying low light intensities, including low light (600 umols/m2/s1), very low light (400 umols/m2/s1), and extremely low light (200 umols/m2/s1), simulating distinct space-based light scenarios from LED sources. Shade cloth will be used to reduce PPFD.',
              'Different groups of Yaupon Holly plants will be subjected to varying low light intensities, including low light (600 umols/m2/s1), very low light (400 umols/m2/s1), and extremely low light (200 umols/m2/s1), simulating distinct space-based light scenarios from LED sources. Shade cloth will be used to reduce PPFD.',
              'Continuous monitoring of environmental conditions within the Hydroponic Zone will be facilitated by the OpenSTEM system, including temperature, humidity, and light intensity. Regular data collection will assess plant health and growth under different low-light conditions.',
            ]}
          />
          <Plan
            featured
            name="Loblolly Pine Red Light Trials"
            image={loblollyImage1}
            description="Investigating Canopy Shyness in Loblolly Pine (Pinus taeda) Saplings Under Varying Far Red Light Levels in OpenSTEM Hydroponic Zones."
            href="/register"
            features={[
              'Healthy Loblolly Pine saplings will be carefully selected and prepared for hydroponic cultivation within the controlled environment of the OpenSTEM Hydroponic Zone.',
              'The Loblolly Pine saplings will be placed in hydroponic trays equipped within the OpenSTEM system, allowing for precise control over nutrient delivery and environmental conditions.',
              'Groups of Loblolly Pine saplings will be exposed to varying far red light intensities, simulating different environmental scenarios. This includes control conditions (ambient far red light), low far red light, and high far red light treatments.',
              "The OpenSTEM system will continuously monitor environmental parameters within the Hydroponic Zone, including temperature, humidity, and light conditions. Visual inspections will be conducted regularly to assess the saplings' growth and canopy development.",
              "Saplings' growth and canopy development will be measured and recorded periodically throughout the experiment.",
              'Bulk reconcile transactions',
              'Track in multiple currencies',
            ]}
          />
          <Plan
            name="OpenSTEM Lettuce Trials Alpha"
            image={lettuceImage1}
            description="This experiment aims to investigate the influence of varying light intensities on the growth of lettuce plants."
            href="/register"
            features={[
              'Utilize a multi-shelf hydroponic growth chamber designed by OpenSTEM with three shelves for lettuce cultivation.',
              'Choose a lettuce variety suitable for hydroponic cultivation, ensuring uniformity in size and health of seedlings.',
              'Prepare a well-balanced nutrient solution suitable for lettuce growth and ensure it is consistent throughout the system.',
              'Assign each shelf a specific light intensity level using adjustable LED grow lights (e.g., low, medium, and high light intensity).',
              'Maintain consistent temperature, humidity, and other environmental conditions across all shelves.',
              'Adjust the light intensity on each shelf according to the predefined treatment plan, ensuring that all other conditions remain constant.',
            ]}
          />
        </div>
      </Container>
    </section>
  )
}
