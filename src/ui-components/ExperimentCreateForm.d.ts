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
export declare type ExperimentCreateFormInputValues = {
  description?: string
  type?: string
  status?: string
  envData?: string
  nutrientData?: string
  duration?: string
  start?: number
  end?: number
  primaryImage?: string
  secondaryImage?: string
}
export declare type ExperimentCreateFormValidationValues = {
  description?: ValidationFunction<string>
  type?: ValidationFunction<string>
  status?: ValidationFunction<string>
  envData?: ValidationFunction<string>
  nutrientData?: ValidationFunction<string>
  duration?: ValidationFunction<string>
  start?: ValidationFunction<number>
  end?: ValidationFunction<number>
  primaryImage?: ValidationFunction<string>
  secondaryImage?: ValidationFunction<string>
}
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>
export declare type ExperimentCreateFormOverridesProps = {
  ExperimentCreateFormGrid?: PrimitiveOverrideProps<GridProps>
  description?: PrimitiveOverrideProps<TextFieldProps>
  type?: PrimitiveOverrideProps<TextFieldProps>
  status?: PrimitiveOverrideProps<TextFieldProps>
  envData?: PrimitiveOverrideProps<TextFieldProps>
  nutrientData?: PrimitiveOverrideProps<TextFieldProps>
  duration?: PrimitiveOverrideProps<TextFieldProps>
  start?: PrimitiveOverrideProps<TextFieldProps>
  end?: PrimitiveOverrideProps<TextFieldProps>
  primaryImage?: PrimitiveOverrideProps<TextFieldProps>
  secondaryImage?: PrimitiveOverrideProps<TextFieldProps>
} & EscapeHatchProps
export declare type ExperimentCreateFormProps = React.PropsWithChildren<
  {
    overrides?: ExperimentCreateFormOverridesProps | undefined | null
  } & {
    clearOnSuccess?: boolean
    onSubmit?: (
      fields: ExperimentCreateFormInputValues,
    ) => ExperimentCreateFormInputValues
    onSuccess?: (fields: ExperimentCreateFormInputValues) => void
    onError?: (
      fields: ExperimentCreateFormInputValues,
      errorMessage: string,
    ) => void
    onChange?: (
      fields: ExperimentCreateFormInputValues,
    ) => ExperimentCreateFormInputValues
    onValidate?: ExperimentCreateFormValidationValues
  } & React.CSSProperties
>
export default function ExperimentCreateForm(
  props: ExperimentCreateFormProps,
): React.ReactElement
