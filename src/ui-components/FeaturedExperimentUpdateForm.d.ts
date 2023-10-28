/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react'
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react'
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal'
import { FeaturedExperiment } from '../API.ts'
export declare type ValidationResponse = {
  hasError: boolean
  errorMessage?: string
}
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse,
) => ValidationResponse | Promise<ValidationResponse>
export declare type FeaturedExperimentUpdateFormInputValues = {
  name?: string
  primaryImage?: string
  secondaryImage?: string
  status?: string
  description?: string
  envData?: string
  nutrientData?: string
  duration?: string
  start?: number
  end?: number
  sponsor?: string
}
export declare type FeaturedExperimentUpdateFormValidationValues = {
  name?: ValidationFunction<string>
  primaryImage?: ValidationFunction<string>
  secondaryImage?: ValidationFunction<string>
  status?: ValidationFunction<string>
  description?: ValidationFunction<string>
  envData?: ValidationFunction<string>
  nutrientData?: ValidationFunction<string>
  duration?: ValidationFunction<string>
  start?: ValidationFunction<number>
  end?: ValidationFunction<number>
  sponsor?: ValidationFunction<string>
}
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>
export declare type FeaturedExperimentUpdateFormOverridesProps = {
  FeaturedExperimentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>
  name?: PrimitiveOverrideProps<TextFieldProps>
  primaryImage?: PrimitiveOverrideProps<TextFieldProps>
  secondaryImage?: PrimitiveOverrideProps<TextFieldProps>
  status?: PrimitiveOverrideProps<TextFieldProps>
  description?: PrimitiveOverrideProps<TextFieldProps>
  envData?: PrimitiveOverrideProps<TextFieldProps>
  nutrientData?: PrimitiveOverrideProps<TextFieldProps>
  duration?: PrimitiveOverrideProps<TextFieldProps>
  start?: PrimitiveOverrideProps<TextFieldProps>
  end?: PrimitiveOverrideProps<TextFieldProps>
  sponsor?: PrimitiveOverrideProps<TextFieldProps>
} & EscapeHatchProps
export declare type FeaturedExperimentUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: FeaturedExperimentUpdateFormOverridesProps | undefined | null
  } & {
    id?: string
    featuredExperiment?: FeaturedExperiment
    onSubmit?: (
      fields: FeaturedExperimentUpdateFormInputValues,
    ) => FeaturedExperimentUpdateFormInputValues
    onSuccess?: (fields: FeaturedExperimentUpdateFormInputValues) => void
    onError?: (
      fields: FeaturedExperimentUpdateFormInputValues,
      errorMessage: string,
    ) => void
    onChange?: (
      fields: FeaturedExperimentUpdateFormInputValues,
    ) => FeaturedExperimentUpdateFormInputValues
    onValidate?: FeaturedExperimentUpdateFormValidationValues
  } & React.CSSProperties
>
export default function FeaturedExperimentUpdateForm(
  props: FeaturedExperimentUpdateFormProps,
): React.ReactElement
