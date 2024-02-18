/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react'
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react'
export declare type EscapeHatchProps = {
  [elementHierarchy: string]: Record<string, unknown>
} | null
export declare type VariantValues = {
  [key: string]: string
}
export declare type Variant = {
  variantValues: VariantValues
  overrides: EscapeHatchProps
}
export declare type ValidationResponse = {
  hasError: boolean
  errorMessage?: string
}
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse,
) => ValidationResponse | Promise<ValidationResponse>
export declare type FeaturedExperimentCreateFormInputValues = {
  experiment_id?: string
  name?: string
  primaryImage?: string
  secondaryImage?: string
  status?: string
  description?: string
  duration?: string
  sponsor?: string
  sponsorIcon?: string
  createdAt?: string
  updatedAt?: string
}
export declare type FeaturedExperimentCreateFormValidationValues = {
  experiment_id?: ValidationFunction<string>
  name?: ValidationFunction<string>
  primaryImage?: ValidationFunction<string>
  secondaryImage?: ValidationFunction<string>
  status?: ValidationFunction<string>
  description?: ValidationFunction<string>
  duration?: ValidationFunction<string>
  sponsor?: ValidationFunction<string>
  sponsorIcon?: ValidationFunction<string>
  createdAt?: ValidationFunction<string>
  updatedAt?: ValidationFunction<string>
}
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>
export declare type FeaturedExperimentCreateFormOverridesProps = {
  FeaturedExperimentCreateFormGrid?: PrimitiveOverrideProps<GridProps>
  experiment_id?: PrimitiveOverrideProps<TextFieldProps>
  name?: PrimitiveOverrideProps<TextFieldProps>
  primaryImage?: PrimitiveOverrideProps<TextFieldProps>
  secondaryImage?: PrimitiveOverrideProps<TextFieldProps>
  status?: PrimitiveOverrideProps<TextFieldProps>
  description?: PrimitiveOverrideProps<TextFieldProps>
  duration?: PrimitiveOverrideProps<TextFieldProps>
  sponsor?: PrimitiveOverrideProps<TextFieldProps>
  sponsorIcon?: PrimitiveOverrideProps<TextFieldProps>
  createdAt?: PrimitiveOverrideProps<TextFieldProps>
  updatedAt?: PrimitiveOverrideProps<TextFieldProps>
} & EscapeHatchProps
export declare type FeaturedExperimentCreateFormProps = React.PropsWithChildren<
  {
    overrides?: FeaturedExperimentCreateFormOverridesProps | undefined | null
  } & {
    clearOnSuccess?: boolean
    onSubmit?: (
      fields: FeaturedExperimentCreateFormInputValues,
    ) => FeaturedExperimentCreateFormInputValues
    onSuccess?: (fields: FeaturedExperimentCreateFormInputValues) => void
    onError?: (
      fields: FeaturedExperimentCreateFormInputValues,
      errorMessage: string,
    ) => void
    onChange?: (
      fields: FeaturedExperimentCreateFormInputValues,
    ) => FeaturedExperimentCreateFormInputValues
    onValidate?: FeaturedExperimentCreateFormValidationValues
  } & React.CSSProperties
>
export default function FeaturedExperimentCreateForm(
  props: FeaturedExperimentCreateFormProps,
): React.ReactElement
