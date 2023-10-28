/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react'
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react'
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal'
import { Experiment } from '../API.ts'
export declare type ValidationResponse = {
  hasError: boolean
  errorMessage?: string
}
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse,
) => ValidationResponse | Promise<ValidationResponse>
export declare type ExperimentUpdateFormInputValues = {
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
export declare type ExperimentUpdateFormValidationValues = {
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
export declare type ExperimentUpdateFormOverridesProps = {
  ExperimentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>
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
export declare type ExperimentUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: ExperimentUpdateFormOverridesProps | undefined | null
  } & {
    id?: string
    experiment?: Experiment
    onSubmit?: (
      fields: ExperimentUpdateFormInputValues,
    ) => ExperimentUpdateFormInputValues
    onSuccess?: (fields: ExperimentUpdateFormInputValues) => void
    onError?: (
      fields: ExperimentUpdateFormInputValues,
      errorMessage: string,
    ) => void
    onChange?: (
      fields: ExperimentUpdateFormInputValues,
    ) => ExperimentUpdateFormInputValues
    onValidate?: ExperimentUpdateFormValidationValues
  } & React.CSSProperties
>
export default function ExperimentUpdateForm(
  props: ExperimentUpdateFormProps,
): React.ReactElement
