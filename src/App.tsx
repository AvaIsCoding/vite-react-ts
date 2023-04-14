import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Dropdown from './components/Select'
import FormItem from './components/FormItem'
// import { Formik, Field, Form, FormikHelpers } from 'formik'

function App() {
  const onClick = () => {
    console.log('uuu');
  }
  return (
    <div className="">
      <FormItem
        label="country"
        options={[
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
        ]}
      ></FormItem>
      <button onClick={onClick}>submit</button>
    </div>
  )
}

// type Values = {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

// const App = () => {
//   return (
//     <div>
//       <Formik
//         initialValues={{
//           firstName: '',
//           lastName: '',
//           email: '',
//         }}
//         onSubmit={(
//           values: Values,
//           { setSubmitting }: FormikHelpers<Values>
//         ) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 500);
//         }}
//       >
//         <Form>
//           <label htmlFor="firstName">First Name</label>
//           <Field id="firstName" name="firstName" placeholder="John" />

//           <label htmlFor="lastName">Last Name</label>
//           <Field id="lastName" name="lastName" placeholder="Doe" />

//           <label htmlFor="email">Email</label>
//           <Field
//             id="email"
//             name="email"
//             placeholder="john@acme.com"
//             type="email"
//           />

//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   )
// }

export default App
