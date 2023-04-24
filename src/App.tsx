import FormComponent from './components/Form'
import { formConfig } from './config'

const RequestDetail = () => {
  return (
    <div>
      <FormComponent
        formConfig={formConfig}
      ></FormComponent>
    </div>
  )
}

export default RequestDetail
