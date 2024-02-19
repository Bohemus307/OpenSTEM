/* eslint-disable @next/next/no-img-element */
'use client'

import { Popover, Menu, Transition } from '@headlessui/react'
import { BellIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import { Logo } from '@components/Logo'
import React from 'react'
import { classNames } from '@lib/utils/globals'
import { ReactQueryClientProvider } from './queryProvider'
import { signOut } from 'aws-amplify/auth'
import { useRouter } from 'next/navigation'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  role: 'Human Resources Manager',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Featured', href: '#', current: true },
  { name: 'Your Experiments', href: '#', current: false },
  { name: 'Explore', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#', handler: 'router' },
  { name: 'Settings', href: '#', handler: 'router' },
  { name: 'Sign out', href: 'logout', handler: 'logout' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  async function handleSignOut() {
    try {
      setLoading(true)
      await signOut({ global: true })

      router.push('/')
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  return (
    <ReactQueryClientProvider>
      <section>
        <Popover
          as="header"
          className="bg-gradient-to-r from-primary-800 to-primary-600 pb-24"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-3xl px-4 pt-2 sm:px-6 lg:max-w-full lg:px-8 lg:pt-0">
                <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                  {/* Logo */}
                  <div className="absolute left-0 flex-shrink-0 lg:static">
                    <div className="lg:flex lg:items-center">
                      <Logo variant={'Medium'} />
                      <span className="mt-4 hidden text-lg font-bold text-white lg:-ml-8 lg:flex">
                        OpenSTEM
                      </span>
                    </div>
                  </div>

                  {/* Right section on desktop */}
                  <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                    <button
                      type="button"
                      className="relative flex-shrink-0 rounded-full p-1 text-white hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-8 w-8" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-10 w-auto rounded-full"
                            src={user?.imageUrl || ''}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <>
                                  {item.handler === 'logout' ? (
                                    <button
                                      onClick={() => handleSignOut()}
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100',
                                      )}
                                    >
                                      {item.name}
                                    </button>
                                  ) : (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100',
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                  <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                    <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
                      {/* Left nav */}
                      <div className="hidden lg:col-span-2 lg:block">
                        <nav className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'text-white'
                                  : 'text-secondary-200',
                                'rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10',
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>
                  </div>

                  {/* Menu button */}
                  <div className="absolute right-0 flex-shrink-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-transparent p-2 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Popover.Button>
                  </div>
                </div>
              </div>

              <Transition.Root as={Fragment}>
                <div className="lg:hidden">
                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
                    >
                      <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div>
                          <div className="flex items-center justify-between px-4">
                            <div className="flex">
                              <Logo variant="Small" />
                            </div>
                            <div className="-mr-2">
                              <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </Popover.Button>
                            </div>
                          </div>
                          <div className="space-y-1 px-2">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="pb-2 pt-4">
                          <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={user.imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="ml-3 min-w-0 flex-1">
                              <div className="truncate text-base font-medium text-gray-800">
                                {user.name}
                              </div>
                              <div className="truncate text-sm font-medium text-gray-500">
                                {user.email}
                              </div>
                            </div>
                            <button
                              type="button"
                              className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                            >
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">
                                View notifications
                              </span>
                              <BellIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          <div className="mt-3 space-y-1 px-2">
                            {userNavigation.map((item, index) => (
                              <a
                                key={`id#${index}`}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </>
          )}
        </Popover>
        {!loading ? children : <div className="container h-full"></div>}
      </section>
    </ReactQueryClientProvider>
  )
}
