import React, { useState } from "react"
import * as R from 'ramda'
import emailjs from 'emailjs-com'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from "formik"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
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
  const [submitting, setSubmitting] = useState(false)
  const { handleSubmit, handleChange, values, errors, touched, resetForm } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setSubmitting(true)
      emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, values, process.env.NEXT_PUBLIC_USER_ID)
        .then(() => {
          setSubmitting(false)
          resetForm()
        })
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
        value={values.name}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
      />
      <Spacer spacing={2} />
      <TextField
        label={'Enter your email'}
        fullWidth
        variant="outlined"
        name="email"
        onChange={handleChange}
        value={values.email}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <Spacer spacing={2} />
      <TextField
        label={'Enter your message'}
        fullWidth
        variant="outlined"
        name="message"
        onChange={handleChange}
        value={values.message}
        error={touched.message && Boolean(errors.message)}
        helperText={touched.message && errors.message}
      />
      <Spacer spacing={2} />
      <Button className={classes.button} variant='outlined' color='primary' type='submit'>
        {submitting ? <CircularProgress size={20} /> : 'Submit'}
      </Button>
    </form>
  )
}

const useStyles = makeStyles(() => ({
  button: {
    width: 100,
    height: 35,
  }
}))

export default ContactForm
