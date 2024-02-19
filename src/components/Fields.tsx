import { EyeIcon } from '@heroicons/react/24/outline'
import { EyeIcon as EyeIconSolid } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useId, useState } from 'react'

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-primary-500 sm:text-sm'

function Label({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  )
}

export function TextField({
  label,
  type = 'text',
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & { label: string }) {
  let id = useId()

  return (
    <div className={className}>
      <Label id={id}>{label}</Label>
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({
  label,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'select'>, 'id'> & { label: string }) {
  let id = useId()

  return (
    <div className={className}>
      <Label id={id}>{label}</Label>
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}

export function PasswordField({
  label,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & { label: string }) {
  const [showPassword, setShowPassword] = useState(false)
  const id = useId()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={className}>
      <Label id={id}>{label}</Label>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          {...props}
          className={formClasses}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 px-2 py-1 text-gray-600 focus:outline-none"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <EyeIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <EyeIconSolid className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  )
}
