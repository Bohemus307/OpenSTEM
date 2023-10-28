/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from 'react'
import { Button, Flex, Grid, TextField } from '@aws-amplify/ui-react'
import { getOverrideProps } from '@aws-amplify/ui-react/internal'
import { fetchByPath, validateField } from './utils'
import { API } from 'aws-amplify'
import { createExperiment } from '../graphql/mutations'
export default function ExperimentCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props
  const initialValues = {
    description: '',
    type: '',
    status: '',
    envData: '',
    nutrientData: '',
    duration: '',
    start: '',
    end: '',
    primaryImage: '',
    secondaryImage: '',
  }
  const [description, setDescription] = React.useState(
    initialValues.description,
  )
  const [type, setType] = React.useState(initialValues.type)
  const [status, setStatus] = React.useState(initialValues.status)
  const [envData, setEnvData] = React.useState(initialValues.envData)
  const [nutrientData, setNutrientData] = React.useState(
    initialValues.nutrientData,
  )
  const [duration, setDuration] = React.useState(initialValues.duration)
  const [start, setStart] = React.useState(initialValues.start)
  const [end, setEnd] = React.useState(initialValues.end)
  const [primaryImage, setPrimaryImage] = React.useState(
    initialValues.primaryImage,
  )
  const [secondaryImage, setSecondaryImage] = React.useState(
    initialValues.secondaryImage,
  )
  const [errors, setErrors] = React.useState({})
  const resetStateValues = () => {
    setDescription(initialValues.description)
    setType(initialValues.type)
    setStatus(initialValues.status)
    setEnvData(initialValues.envData)
    setNutrientData(initialValues.nutrientData)
    setDuration(initialValues.duration)
    setStart(initialValues.start)
    setEnd(initialValues.end)
    setPrimaryImage(initialValues.primaryImage)
    setSecondaryImage(initialValues.secondaryImage)
    setErrors({})
  }
  const validations = {
    description: [{ type: 'Required' }],
    type: [],
    status: [],
    envData: [],
    nutrientData: [],
    duration: [],
    start: [],
    end: [],
    primaryImage: [],
    secondaryImage: [],
  }
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue,
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue
    let validationResponse = validateField(value, validations[fieldName])
    const customValidator = fetchByPath(onValidate, fieldName)
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse)
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }))
    return validationResponse
  }
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts)
    }
    return new Date(ts * 1000)
  }
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat('default', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      calendar: 'iso8601',
      numberingSystem: 'latn',
      hourCycle: 'h23',
    })
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value
      return acc
    }, {})
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`
  }
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault()
        let modelFields = {
          description,
          type,
          status,
          envData,
          nutrientData,
          duration,
          start,
          end,
          primaryImage,
          secondaryImage,
        }
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item),
                ),
              )
              return promises
            }
            promises.push(runValidationTasks(fieldName, modelFields[fieldName]))
            return promises
          }, []),
        )
        if (validationResponses.some((r) => r.hasError)) {
          return
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields)
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === 'string' && value === '') {
              modelFields[key] = null
            }
          })
          await API.graphql({
            query: createExperiment.replaceAll('__typename', ''),
            variables: {
              input: {
                ...modelFields,
              },
            },
          })
          if (onSuccess) {
            onSuccess(modelFields)
          }
          if (clearOnSuccess) {
            resetStateValues()
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join('\n')
            onError(modelFields, messages)
          }
        }
      }}
      {...getOverrideProps(overrides, 'ExperimentCreateForm')}
      {...rest}
    >
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              description: value,
              type,
              status,
              envData,
              nutrientData,
              duration,
              start,
              end,
              primaryImage,
              secondaryImage,
            }
            const result = onChange(modelFields)
            value = result?.description ?? value
          }
          if (errors.description?.hasError) {
            runValidationTasks('description', value)
          }
          setDescription(value)
        }}
        onBlur={() => runValidationTasks('description', description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, 'description')}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              description,
              type: value,
              status,
              envData,
              nutrientData,
              duration,
              start,
              end,
              primaryImage,
              secondaryImage,
            }
            const result = onChange(modelFields)
            value = result?.type ?? value
          }
          if (errors.type?.hasError) {
            runValidationTasks('type', value)
          }
          setType(value)
        }}
        onBlur={() => runValidationTasks('type', type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, 'type')}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              description,
              type,
              status: value,
              envData,
              nutrientData,
              duration,
              start,
              end,
              primaryImage,
              secondaryImage,
            }
            const result = onChange(modelFields)
            value = result?.status ?? value
          }
          if (errors.status?.hasError) {
            runValidationTasks('status', value)
          }
          setStatus(value)
        }}
        onBlur={() => runValidationTasks('status', status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, 'status')}
      ></TextField>
      <TextField
        label="Env data"
        isRequired={false}
        isReadOnly={false}
        value={envData}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              description,
              type,
              status,
              envData: value,
              nutrientData,
              duration,
              start,
              end,
              primaryImage,
              secondaryImage,
            }
            const result = onChange(modelFields)
            value = result?.envData ?? value
          }
          if (errors.envData?.hasError) {
            runValidationTasks('envData', value)
          }
          setEnvData(value)
        }}
        onBlur={() => runValidationTasks('envData', envData)}
        errorMessage={errors.envData?.errorMessage}
        hasError={errors.envData?.hasError}
        {...getOverrideProps(overrides, 'envData')}
      ></TextField>
      <TextField
        label="Nutrient data"
        isRequired={false}
        isReadOnly={false}
        value={nutrientData}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              description,
              type,
              status,
              envData,
              nutrientData: value,
              duration,
              start,
              end,
              primaryImage,
              secondaryImage,
            }
            const result = onChange(modelFields)
            value = result?.nutrientData ?? value
          }
          if (errors.nutrientData?.hasError) {
            runValidationTasks('nutrientData', value)
          }
          setNutrientData(value)
        }}
        onBlur={() => runValidationTasks('nutrientData', nutrientData)}
        errorMessage={errors.nutrientData?.errorMessage}
        hasError={errors.nutrientData?.hasError}
        {...getOverrideProps(overrides, 'nutrientData')}
      ></TextField>
      <TextField
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        value={duration}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              description,
              type,
              status,
              envData,
              nutrientData,
              duration: value,
              start,
              end,
              primaryImage,
              secondaryImage,
            }
            const result = onChange(modelFields)
            value = result?.duration ?? value
          }
          if (errors.duration?.hasError) {
            runValidationTasks('duration', value)
          }
          setDuration(value)
        }}
        onBlur={() => runValidationTasks('duration', duration)}
        errorMessage={errors.duration?.errorMessage}
        hasError={errors.duration?.hasError}
        {...getOverrideProps(overrides, 'duration')}
      ></TextField>
      <TextField
        label="Start"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={start && convertToLocal(convertTimeStampToDate(start))}
        onChange={(e) => {
          let value =
            e.target.value === '' ? '' : Number(new Date(e.target.value))
          if (onChange) {
            const modelFields = {
              description,
              type,
              status,
              envData,
              nutrientData,
              duration,
              start: value,
              end,
              primaryImage,
              secondaryImage,
            }
            const result = onChange(modelFields)
            value = result?.start ?? value
          }
          if (errors.start?.hasError) {
            runValidationTasks('start', value)
          }
          setStart(value)
        }}
        onBlur={() => runValidationTasks('start', start)}
        errorMessage={errors.start?.errorMessage}
        hasError={errors.start?.hasError}
        {...getOverrideProps(overrides, 'start')}
      ></TextField>
      <TextField
        label="End"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={end && convertToLocal(convertTimeStampToDate(end))}
        onChange={(e) => {
          let value =
            e.target.value === '' ? '' : Number(new Date(e.target.value))
          if (onChange) {
            const modelFields = {
              description,
              type,
              status,
              envData,
              nutrientData,
              duration,
              start,
              end: value,
              primaryImage,
              secondaryImage,
            }
            const result = onChange(modelFields)
            value = result?.end ?? value
          }
          if (errors.end?.hasError) {
            runValidationTasks('end', value)
          }
          setEnd(value)
        }}
        onBlur={() => runValidationTasks('end', end)}
        errorMessage={errors.end?.errorMessage}
        hasError={errors.end?.hasError}
        {...getOverrideProps(overrides, 'end')}
      ></TextField>
      <TextField
        label="Primary image"
        isRequired={false}
        isReadOnly={false}
        value={primaryImage}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              description,
              type,
              status,
              envData,
              nutrientData,
              duration,
              start,
              end,
              primaryImage: value,
              secondaryImage,
            }
            const result = onChange(modelFields)
            value = result?.primaryImage ?? value
          }
          if (errors.primaryImage?.hasError) {
            runValidationTasks('primaryImage', value)
          }
          setPrimaryImage(value)
        }}
        onBlur={() => runValidationTasks('primaryImage', primaryImage)}
        errorMessage={errors.primaryImage?.errorMessage}
        hasError={errors.primaryImage?.hasError}
        {...getOverrideProps(overrides, 'primaryImage')}
      ></TextField>
      <TextField
        label="Secondary image"
        isRequired={false}
        isReadOnly={false}
        value={secondaryImage}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              description,
              type,
              status,
              envData,
              nutrientData,
              duration,
              start,
              end,
              primaryImage,
              secondaryImage: value,
            }
            const result = onChange(modelFields)
            value = result?.secondaryImage ?? value
          }
          if (errors.secondaryImage?.hasError) {
            runValidationTasks('secondaryImage', value)
          }
          setSecondaryImage(value)
        }}
        onBlur={() => runValidationTasks('secondaryImage', secondaryImage)}
        errorMessage={errors.secondaryImage?.errorMessage}
        hasError={errors.secondaryImage?.hasError}
        {...getOverrideProps(overrides, 'secondaryImage')}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, 'CTAFlex')}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault()
            resetStateValues()
          }}
          {...getOverrideProps(overrides, 'ClearButton')}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, 'RightAlignCTASubFlex')}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, 'SubmitButton')}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
