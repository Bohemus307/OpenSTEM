/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from 'react'
import { Button, Flex, Grid, TextField } from '@aws-amplify/ui-react'
import { FeaturedExperiment } from '../models'
import { fetchByPath, getOverrideProps, validateField } from './utils'
import { DataStore } from 'aws-amplify/datastore'
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
    experiment_id: '',
    name: '',
    primaryImage: '',
    secondaryImage: '',
    primaryVideo: '',
    status: '',
    description: '',
    duration: '',
    sponsor: '',
    sponsorIcon: '',
    createdAt: '',
    updatedAt: '',
  }
  const [experiment_id, setExperiment_id] = React.useState(
    initialValues.experiment_id,
  )
  const [name, setName] = React.useState(initialValues.name)
  const [primaryImage, setPrimaryImage] = React.useState(
    initialValues.primaryImage,
  )
  const [secondaryImage, setSecondaryImage] = React.useState(
    initialValues.secondaryImage,
  )
  const [primaryVideo, setPrimaryVideo] = React.useState(
    initialValues.primaryVideo,
  )
  const [status, setStatus] = React.useState(initialValues.status)
  const [description, setDescription] = React.useState(
    initialValues.description,
  )
  const [duration, setDuration] = React.useState(initialValues.duration)
  const [sponsor, setSponsor] = React.useState(initialValues.sponsor)
  const [sponsorIcon, setSponsorIcon] = React.useState(
    initialValues.sponsorIcon,
  )
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt)
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt)
  const [errors, setErrors] = React.useState({})
  const resetStateValues = () => {
    const cleanValues = featuredExperimentRecord
      ? { ...initialValues, ...featuredExperimentRecord }
      : initialValues
    setExperiment_id(cleanValues.experiment_id)
    setName(cleanValues.name)
    setPrimaryImage(cleanValues.primaryImage)
    setSecondaryImage(cleanValues.secondaryImage)
    setPrimaryVideo(cleanValues.primaryVideo)
    setStatus(cleanValues.status)
    setDescription(cleanValues.description)
    setDuration(cleanValues.duration)
    setSponsor(cleanValues.sponsor)
    setSponsorIcon(cleanValues.sponsorIcon)
    setCreatedAt(cleanValues.createdAt)
    setUpdatedAt(cleanValues.updatedAt)
    setErrors({})
  }
  const [featuredExperimentRecord, setFeaturedExperimentRecord] =
    React.useState(featuredExperimentModelProp)
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(FeaturedExperiment, idProp)
        : featuredExperimentModelProp
      setFeaturedExperimentRecord(record)
    }
    queryData()
  }, [idProp, featuredExperimentModelProp])
  React.useEffect(resetStateValues, [featuredExperimentRecord])
  const validations = {
    experiment_id: [],
    name: [],
    primaryImage: [],
    secondaryImage: [],
    primaryVideo: [],
    status: [],
    description: [],
    duration: [],
    sponsor: [],
    sponsorIcon: [],
    createdAt: [],
    updatedAt: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault()
        let modelFields = {
          experiment_id,
          name,
          primaryImage,
          secondaryImage,
          primaryVideo,
          status,
          description,
          duration,
          sponsor,
          sponsorIcon,
          createdAt,
          updatedAt,
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
          await DataStore.save(
            FeaturedExperiment.copyOf(featuredExperimentRecord, (updated) => {
              Object.assign(updated, modelFields)
            }),
          )
          if (onSuccess) {
            onSuccess(modelFields)
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message)
          }
        }
      }}
      {...getOverrideProps(overrides, 'FeaturedExperimentUpdateForm')}
      {...rest}
    >
      <TextField
        label="Experiment id"
        isRequired={false}
        isReadOnly={false}
        value={experiment_id}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              experiment_id: value,
              name,
              primaryImage,
              secondaryImage,
              primaryVideo,
              status,
              description,
              duration,
              sponsor,
              sponsorIcon,
              createdAt,
              updatedAt,
            }
            const result = onChange(modelFields)
            value = result?.experiment_id ?? value
          }
          if (errors.experiment_id?.hasError) {
            runValidationTasks('experiment_id', value)
          }
          setExperiment_id(value)
        }}
        onBlur={() => runValidationTasks('experiment_id', experiment_id)}
        errorMessage={errors.experiment_id?.errorMessage}
        hasError={errors.experiment_id?.hasError}
        {...getOverrideProps(overrides, 'experiment_id')}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              experiment_id,
              name: value,
              primaryImage,
              secondaryImage,
              primaryVideo,
              status,
              description,
              duration,
              sponsor,
              sponsorIcon,
              createdAt,
              updatedAt,
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
              experiment_id,
              name,
              primaryImage: value,
              secondaryImage,
              primaryVideo,
              status,
              description,
              duration,
              sponsor,
              sponsorIcon,
              createdAt,
              updatedAt,
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
              experiment_id,
              name,
              primaryImage,
              secondaryImage: value,
              primaryVideo,
              status,
              description,
              duration,
              sponsor,
              sponsorIcon,
              createdAt,
              updatedAt,
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
        label="Primary video"
        isRequired={false}
        isReadOnly={false}
        value={primaryVideo}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              experiment_id,
              name,
              primaryImage,
              secondaryImage,
              primaryVideo: value,
              status,
              description,
              duration,
              sponsor,
              sponsorIcon,
              createdAt,
              updatedAt,
            }
            const result = onChange(modelFields)
            value = result?.primaryVideo ?? value
          }
          if (errors.primaryVideo?.hasError) {
            runValidationTasks('primaryVideo', value)
          }
          setPrimaryVideo(value)
        }}
        onBlur={() => runValidationTasks('primaryVideo', primaryVideo)}
        errorMessage={errors.primaryVideo?.errorMessage}
        hasError={errors.primaryVideo?.hasError}
        {...getOverrideProps(overrides, 'primaryVideo')}
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
              experiment_id,
              name,
              primaryImage,
              secondaryImage,
              primaryVideo,
              status: value,
              description,
              duration,
              sponsor,
              sponsorIcon,
              createdAt,
              updatedAt,
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
              experiment_id,
              name,
              primaryImage,
              secondaryImage,
              primaryVideo,
              status,
              description: value,
              duration,
              sponsor,
              sponsorIcon,
              createdAt,
              updatedAt,
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
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        value={duration}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              experiment_id,
              name,
              primaryImage,
              secondaryImage,
              primaryVideo,
              status,
              description,
              duration: value,
              sponsor,
              sponsorIcon,
              createdAt,
              updatedAt,
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
        label="Sponsor"
        isRequired={false}
        isReadOnly={false}
        value={sponsor}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              experiment_id,
              name,
              primaryImage,
              secondaryImage,
              primaryVideo,
              status,
              description,
              duration,
              sponsor: value,
              sponsorIcon,
              createdAt,
              updatedAt,
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
      <TextField
        label="Sponsor icon"
        isRequired={false}
        isReadOnly={false}
        value={sponsorIcon}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              experiment_id,
              name,
              primaryImage,
              secondaryImage,
              primaryVideo,
              status,
              description,
              duration,
              sponsor,
              sponsorIcon: value,
              createdAt,
              updatedAt,
            }
            const result = onChange(modelFields)
            value = result?.sponsorIcon ?? value
          }
          if (errors.sponsorIcon?.hasError) {
            runValidationTasks('sponsorIcon', value)
          }
          setSponsorIcon(value)
        }}
        onBlur={() => runValidationTasks('sponsorIcon', sponsorIcon)}
        errorMessage={errors.sponsorIcon?.errorMessage}
        hasError={errors.sponsorIcon?.hasError}
        {...getOverrideProps(overrides, 'sponsorIcon')}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              experiment_id,
              name,
              primaryImage,
              secondaryImage,
              primaryVideo,
              status,
              description,
              duration,
              sponsor,
              sponsorIcon,
              createdAt: value,
              updatedAt,
            }
            const result = onChange(modelFields)
            value = result?.createdAt ?? value
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks('createdAt', value)
          }
          setCreatedAt(value)
        }}
        onBlur={() => runValidationTasks('createdAt', createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, 'createdAt')}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        value={updatedAt}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              experiment_id,
              name,
              primaryImage,
              secondaryImage,
              primaryVideo,
              status,
              description,
              duration,
              sponsor,
              sponsorIcon,
              createdAt,
              updatedAt: value,
            }
            const result = onChange(modelFields)
            value = result?.updatedAt ?? value
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks('updatedAt', value)
          }
          setUpdatedAt(value)
        }}
        onBlur={() => runValidationTasks('updatedAt', updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, 'updatedAt')}
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
