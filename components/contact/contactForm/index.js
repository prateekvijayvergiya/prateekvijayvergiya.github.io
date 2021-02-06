import React from "react"
import * as R from 'ramda'
import emailjs from 'emailjs-com'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from "formik"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import * as Yup from "yup"
import Spacer from "../../spacer"

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(20).required("Required"),
  email: Yup.string()
      .email("Invalid Email.")
      .required("Required"),
  message: Yup.string().min(2).max(100).required('Required')
});

const ContactForm = () => {
  const classes = useStyles()
  console.log(process.env.serviceId, process.env.templateId, process.env.userId)
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      emailjs.send(process.env.serviceId, process.env.templateId, values, process.env.userId)
    },
    validateOnChange: R.isEmpty(touched) ? false : true
  })

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label={'Enter your name'}
        fullWidth
        variant="outlined"
        name="name"
        onChange={handleChange}
        values={values.name}
        className={classes.textField}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
      />
      <Spacer spacing={2}/>
      <TextField
        label={'Enter your email'}
        fullWidth
        variant="outlined"
        name="email"
        onChange={handleChange}
        values={values.email}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <Spacer spacing={2}/>
      <TextField
        label={'Enter your message'}
        fullWidth
        variant="outlined"
        name="message"
        onChange={handleChange}
        values={values.message}
        error={touched.message && Boolean(errors.message)}
        helperText={touched.message && errors.message}
      />
      <Spacer spacing={2}/> 
      <Button variant='outlined' color='primary' type='submit'>Submit</Button>
    </form>
  )
}

const useStyles = makeStyles((theme) => ({
  textField: {
    color: 'inherit'
  }
}))

export default ContactForm
