import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Select from '../Select'
import Input from '../Input'

type FormProps = {
  formConfig: FormConfigProps
}

type FormConfigProps = {
  formItems: Array<FormItemProps>
}

type FormItemProps = {
  key: string
  label: string
  isRequired?: boolean
  type?: string
  options?: Array<OptionsProps>
  displayCondition?: object
}

type OptionsProps = {
  value: string
  label: string
}

// format select value
const getSelectValue = (selected: any) => {
  if (selected.length) {
    return selected.map((item: any) => item.value)
  }
  return selected.value
}

const FormComponent = ({ formConfig }: FormProps) => {
  // set form values
  const formValues: { [key: string]: any } = {}
  formConfig.formItems.forEach((item) => { formValues[item.key] = '' })
  const [initialValues, setInitialValues] = useState(formValues)

  const validate = (values: any) => {
    console.log(values);

    const errors: { [key: string]: any } = {}

    Object.keys(values).map(key => {
      const targetItem = formConfig.formItems.find((formItem) => formItem.key === key)
      if (targetItem?.isRequired && !values[key]) {
        errors[key] = 'Field Required!'
      }
    })

    return errors
  }

  const isDisplay = (item: any) => {
    if (!item.displayCondition) return true

    let isDisplay = false
    Object.keys(item.displayCondition).map((key) => {
      if (initialValues[key] === item.displayCondition[key]) {
        isDisplay = true
      }
    })
    return isDisplay
  }

  const onChange = (e: any) => {
    setInitialValues({
      ...initialValues,
      [e.target.name]: e.target.value
    })
  }

  // onChange for select type
  const onChangeSelect = (selected: any, state: any) => {
    setInitialValues({
      ...initialValues,
      [state.name]: getSelectValue(selected)
    })
  }

  const onSubmit = () => {
    // console.log(values)
    console.log(initialValues)

  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        <Form>
          {formConfig.formItems.map(item => {
            if (!isDisplay(item)) return
            return (
              <div key={item.key}>
                <p>{item.label} {item.isRequired && <span>*</span>}</p>
                <Field
                  id={item.key}
                  name={item.key}
                  placeholder={item.label}
                >
                  {() => {
                    switch (item.type) {
                      case 'select':
                        return <Select
                          name={item.key}
                          options={item.options}
                          onChange={onChangeSelect}
                        ></Select>
                      case 'multiSelect':
                        return <Select
                          isMulti
                          name={item.key}
                          options={item.options}
                          onChange={onChangeSelect}
                        ></Select>
                      case 'numberInput':
                        return <Input
                          type="number"
                          name={item.key}
                          onChange={onChange}
                        ></Input>
                      default:
                        return <Input
                          name={item.key}
                          onChange={onChange}
                        ></Input>
                    }
                  }}
                </Field>
                <ErrorMessage name={item.key} />
              </div>
            )
          })}
          <button type="submit">Submit</button>
          {/* <Button label="Submit" onClick={onSubmit}></Button> */}
        </Form>
      </Formik>
    </div>
  )
}

export default FormComponent