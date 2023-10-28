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
import { getFeaturedExperiment } from '../graphql/queries'
import { updateFeaturedExperiment } from '../graphql/mutations'
export default function FeaturedExperimentUpdateForm(props) {
  const {
    id: idProp,
    featuredExperiment: featuredExperimentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props
  const initialValues = {
    name: '',
    primaryImage: '',
    secondaryImage: '',
    status: '',
    description: '',
    envData: '',
    nutrientData: '',
    duration: '',
    start: '',
    end: '',
    sponsor: '',
  }
  const [name, setName] = React.useState(initialValues.name)
  const [primaryImage, setPrimaryImage] = React.useState(
    initialValues.primaryImage,
  )
  const [secondaryImage, setSecondaryImage] = React.useState(
    initialValues.secondaryImage,
  )
  const [status, setStatus] = React.useState(initialValues.status)
  const [description, setDescription] = React.useState(
    initialValues.description,
  )
  const [envData, setEnvData] = React.useState(initialValues.envData)
  const [nutrientData, setNutrientData] = React.useState(
    initialValues.nutrientData,
  )
  const [duration, setDuration] = React.useState(initialValues.duration)
  const [start, setStart] = React.useState(initialValues.start)
  const [end, setEnd] = React.useState(initialValues.end)
  const [sponsor, setSponsor] = React.useState(initialValues.sponsor)
  const [errors, setErrors] = React.useState({})
  const resetStateValues = () => {
    const cleanValues = featuredExperimentRecord
      ? { ...initialValues, ...featuredExperimentRecord }
      : initialValues
    setName(cleanValues.name)
    setPrimaryImage(cleanValues.primaryImage)
    setSecondaryImage(cleanValues.secondaryImage)
    setStatus(cleanValues.status)
    setDescription(cleanValues.description)
    setEnvData(cleanValues.envData)
    setNutrientData(cleanValues.nutrientData)
    setDuration(cleanValues.duration)
    setStart(cleanValues.start)
    setEnd(cleanValues.end)
    setSponsor(cleanValues.sponsor)
    setErrors({})
  }
  const [featuredExperimentRecord, setFeaturedExperimentRecord] =
    React.useState(featuredExperimentModelProp)
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getFeaturedExperiment.replaceAll('__typename', ''),
              variables: { id: idProp },
            })
          )?.data?.getFeaturedExperiment
        : featuredExperimentModelProp
      setFeaturedExperimentRecord(record)
    }
    queryData()
  }, [idProp, featuredExperimentModelProp])
  React.useEffect(resetStateValues, [featuredExperimentRecord])
  const validations = {
    name: [{ type: 'Required' }],
    primaryImage: [],
    secondaryImage: [],
    status: [],
    description: [],
    envData: [],
    nutrientData: [],
    duration: [],
    start: [],
    end: [],
    sponsor: [],
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
          name,
          primaryImage: primaryImage ?? null,
          secondaryImage: secondaryImage ?? null,
          status: status ?? null,
          description: description ?? null,
          envData: envData ?? null,
          nutrientData: nutrientData ?? null,
          duration: duration ?? null,
          start: start ?? null,
          end: end ?? null,
          sponsor: sponsor ?? null,
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
            query: updateFeaturedExperiment.replaceAll('__typename', ''),
            variables: {
              input: {
                id: featuredExperimentRecord.id,
                ...modelFields,
              },
            },
          })
          if (onSuccess) {
            onSuccess(modelFields)
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join('\n')
            onError(modelFields, messages)
          }
        }
      }}
      {...getOverrideProps(overrides, 'FeaturedExperimentUpdateForm')}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name: value,
              primaryImage,
              secondaryImage,
              status,
              description,
              envData,
              nutrientData,
              duration,
              start,
              end,
              sponsor,
            }
            const result = onChange(modelFields)
            value = result?.name ?? value
          }
          if (errors.name?.hasError) {
            runValidationTasks('name', value)
          }
          setName(value)
        }}
        onBlur={() => runValidationTasks('name', name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, 'name')}
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
              name,
              primaryImage: value,
              secondaryImage,
              status,
              description,
              envData,
              nutrientData,
              duration,
              start,
              end,
              sponsor,
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
              name,
              primaryImage,
              secondaryImage: value,
              status,
              description,
              envData,
              nutrientData,
              duration,
              start,
              end,
              sponsor,
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
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name,
              primaryImage,
              secondaryImage,
              status: value,
              description,
              envData,
              nutrientData,
              duration,
              start,
              end,
              sponsor,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name,
              primaryImage,
              secondaryImage,
              status,
              description: value,
              envData,
              nutrientData,
              duration,
              start,
              end,
              sponsor,
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
        label="Env data"
        isRequired={false}
        isReadOnly={false}
        value={envData}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name,
              primaryImage,
              secondaryImage,
              status,
              description,
              envData: value,
              nutrientData,
              duration,
              start,
              end,
              sponsor,
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
              name,
              primaryImage,
              secondaryImage,
              status,
              description,
              envData,
              nutrientData: value,
              duration,
              start,
              end,
              sponsor,
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
              name,
              primaryImage,
              secondaryImage,
              status,
              description,
              envData,
              nutrientData,
              duration: value,
              start,
              end,
              sponsor,
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
              name,
              primaryImage,
              secondaryImage,
              status,
              description,
              envData,
              nutrientData,
              duration,
              start: value,
              end,
              sponsor,
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
              name,
              primaryImage,
              secondaryImage,
              status,
              description,
              envData,
              nutrientData,
              duration,
              start,
              end: value,
              sponsor,
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
        label="Sponsor"
        isRequired={false}
        isReadOnly={false}
        value={sponsor}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name,
              primaryImage,
              secondaryImage,
              status,
              description,
              envData,
              nutrientData,
              duration,
              start,
              end,
              sponsor: value,
            }
            const result = onChange(modelFields)
            value = result?.sponsor ?? value
          }
          if (errors.sponsor?.hasError) {
            runValidationTasks('sponsor', value)
          }
          setSponsor(value)
        }}
        onBlur={() => runValidationTasks('sponsor', sponsor)}
        errorMessage={errors.sponsor?.errorMessage}
        hasError={errors.sponsor?.hasError}
        {...getOverrideProps(overrides, 'sponsor')}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, 'CTAFlex')}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault()
            resetStateValues()
          }}
          isDisabled={!(idProp || featuredExperimentModelProp)}
          {...getOverrideProps(overrides, 'ResetButton')}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, 'RightAlignCTASubFlex')}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || featuredExperimentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, 'SubmitButton')}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
