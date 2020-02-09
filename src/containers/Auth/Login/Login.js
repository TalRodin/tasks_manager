import React from 'react'
import {Formik, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FormWrapper,StyledForm} from '../../../hoc/layout/elements'
import Input from '../../../components/UI/Forms/Input/Input'
import Button from '../../../components/UI/Forms/Button//Button'
import Heading from '../../../components/UI/Headings/Heading'

const LoginSchema  = Yup.object().shape({
    email:Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
    password:Yup.string()
    .required('The password is required.')

})

const Login =()=>{
    return (
        <div style={{padding:'3rem'}}>
            <Formik
            initialValues={{
                email:'',
                password:''
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, {setSubmitting})=>{
                console.log(values)
            }}
            >
                {(isSubmitting, isValid)=>(
                    <FormWrapper>
                        <Heading size="h1" color="white">
                            Login
                        </Heading>
                     <StyledForm>
                     <Field
                     type='email'
                     name='email'
                     placeholder='Your email...'
                     component={Input}
                     />
                    
                     <Field
                     type='password'
                     name='password'
                     placeholder='Your password...'
                     component={Input}
                     />
                    
                 <Button disabled={!isValid} type='submit'>Login</Button>
                 </StyledForm>
                 </FormWrapper>
                )}
           
            </Formik>
        </div>
    )
}
export default Login