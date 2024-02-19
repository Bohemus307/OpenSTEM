/* eslint-disable @next/next/no-img-element */
import ExperimentData, {
  ExperimentDataType,
} from '@components/Dashboard/Featured/ExperimentData'
import VideoPlayer from '@components/VideoPlayer'
import {
  UserIcon,
  HandThumbUpIcon,
  CheckIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
} from '@heroicons/react/24/solid'
import useExperimentData from '@hooks/useExperimentData'
import { classNames } from '@lib/utils/globals'
import { FeaturedExperiment } from 'src/API'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  role: 'Human Resources Manager',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

interface ExperimentDetailsProps {
  experiment: FeaturedExperiment
}

const eventTypes = {
  began: { icon: ClockIcon, bgColorClass: 'bg-secondary-400' },
  advanced: { icon: ArrowTrendingUpIcon, bgColorClass: 'bg-primary-500' },
  reduced: { icon: ArrowTrendingDownIcon, bgColorClass: 'bg-primary-600' },
  completed: { icon: CheckIcon, bgColorClass: 'bg-brightGreen-500' },
}
const timeline = [
  {
    id: 1,
    type: eventTypes.began,
    content: 'Trial Began',
    target: '',
    date: 'Jan 20',
    datetime: '2024-01-20',
  },
  {
    id: 2,
    type: eventTypes.advanced,
    content: 'Event',
    target: 'Seedlings Confirmed',
    date: 'Feb 2',
    datetime: '2024-02-2',
  },
  {
    id: 3,
    type: eventTypes.reduced,
    content: 'Event',
    target: 'Nutrient Issues',
    date: 'Feb 7',
    datetime: '2024-02-7',
  },
  {
    id: 4,
    type: eventTypes.advanced,
    content: 'Event',
    target: 'Plant Growth',
    date: 'Feb 15',
    datetime: '2024-02-15',
  },
  {
    id: 5,
    type: eventTypes.completed,
    content: 'Trial Completed',
    target: 'Success',
    date: 'Feb 24',
    datetime: '2024-2-24',
  },
]
const comments = [
  {
    id: 1,
    name: 'Leslie Alexander',
    date: '4d ago',
    imageId: '1494790108377-be9c29b29330',
    body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
  },
  {
    id: 2,
    name: 'Michael Foster',
    date: '4d ago',
    imageId: '1519244703995-f4e0f30006d5',
    body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
]

const ExperimentDetails = ({ experiment }: ExperimentDetailsProps) => {
  const currentExperimentData = useExperimentData()
  console.log(currentExperimentData)
  return (
    <section>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
        <div className="flex items-center space-x-5">
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                className="h-24 w-24 rounded-full"
                src={experiment.primaryImage as string}
                alt=""
              />
              <span
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {experiment.name}
            </h1>
            <p className="text-sm font-medium text-gray-500">
              Current Duration{' '}
              <a href="#" className="text-gray-900">
                {experiment.duration}
              </a>{' '}
              since <time dateTime="2020-08-25">{experiment.createdAt}</time>
            </p>
          </div>
        </div>
        {/* <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Disqualify
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Advance to offer
          </button>
        </div> */}
      </div>
      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2 lg:col-start-1">
          {/* Description list*/}
          <section aria-labelledby="experiment-details">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2
                  id="experiment-details"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Experiment Information
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  details and current environmentals.
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="col-span-1 grid grid-cols-1 p-6">
                  <VideoPlayer src={experiment.primaryVideo as string} />
                </dl>
              </div>
              <div>
                <a
                  href="#"
                  className="block bg-gray-50 px-4 py-4 text-center text-sm font-medium text-gray-500 hover:text-gray-700 sm:rounded-b-lg"
                >
                  Watch Live Stream
                </a>
              </div>
            </div>
          </section>

          {/* Comments*/}
          <section aria-labelledby="discussion-title">
            <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
              <div className="divide-y divide-gray-200">
                <div className="px-4 py-5 sm:px-6">
                  <h2
                    id="discussion-title"
                    className="text-lg font-medium text-gray-900"
                  >
                    Discussion
                  </h2>
                </div>
                <div className="px-4 py-6 sm:px-6">
                  <ul role="list" className="space-y-8">
                    {comments.map((comment) => (
                      <li key={comment.id}>
                        <div className="flex space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-sm">
                              <a href="#" className="font-medium text-gray-900">
                                {comment.name}
                              </a>
                            </div>
                            <div className="mt-1 text-sm text-gray-700">
                              <p>{comment.body}</p>
                            </div>
                            <div className="mt-2 space-x-2 text-sm">
                              <span className="font-medium text-gray-500">
                                {comment.date}
                              </span>{' '}
                              <span className="font-medium text-gray-500">
                                &middot;
                              </span>{' '}
                              {/* doesnt work yet */}
                              <button
                                type="button"
                                className="font-medium text-gray-900"
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-6 sm:px-6">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <form action="#">
                      <div>
                        <label htmlFor="comment" className="sr-only">
                          About
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                          placeholder="Add a comment"
                          defaultValue={''}
                        />
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <button
                          type="submit"
                          className="hover:bg-p-500 focus-visible:outline-p-600 inline-flex items-center justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                          Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section
          aria-labelledby="timeline-title"
          className="lg:col-span-1 lg:col-start-3"
        >
          {/* Data */}
          <ExperimentData
            layout="column"
            experimentData={currentExperimentData as ExperimentDataType}
          />
          <div className="mt-6 bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
            <h2
              id="timeline-title"
              className="text-lg font-medium text-gray-900"
            >
              Timeline
            </h2>

            {/* Activity Feed */}
            <div className="mt-6 flow-root">
              <ul role="list" className="-mb-8">
                {timeline.map((item, itemIdx) => (
                  <li key={item.id}>
                    <div className="relative pb-8">
                      {itemIdx !== timeline.length - 1 ? (
                        <span
                          className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span
                            className={classNames(
                              item.type.bgColorClass,
                              'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white',
                            )}
                          >
                            <item.type.icon
                              className="h-5 w-5 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                          <div>
                            <p className="text-sm text-gray-500">
                              {item.content}{' '}
                              <a href="#" className="font-medium text-gray-900">
                                {item.target}
                              </a>
                            </p>
                          </div>
                          <div className="whitespace-nowrap text-right text-sm text-gray-500">
                            <time dateTime={item.datetime}>{item.date}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default ExperimentDetails
