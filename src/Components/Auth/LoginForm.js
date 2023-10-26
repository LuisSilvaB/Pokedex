import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native'

import { useState } from 'react'
import useAuth from '../../hooks/useAuth' 


import { user, userDetails } from '../../utils/userDB'


// Formik 

import { Formik, useFormik } from "formik" 
import * as Yup from 'yup' 

import React from 'react'

export default function LoginForm() {

 const { auth, login, logout } = useAuth();   
 const [error, setError] = useState(''); 

 const formik = useFormik({
  validationSchema: Yup.object(validationSchema()), 
  initialValues:initialValues(),
  // Si solo se requiere que valide al enviar 
  validateOnChange: false, 
  onSubmit: (formValue)=>{
   setError('') 
   const { userName, password } = formValue; 
   
   if (userName != user.usename || password != user.password) {
      setError('El usuario o la contraseña no son correctos')
      console.log("El usuario o la contraseña no son correctos");
    }
    else {
     setError('')
     login(userDetails); 
     console.log("Login correcto");
    }
   }
 }) 
 return (
    <View style = {styles.Container}>
      <Text style= {styles.Title}>Login Form</Text>
      <TextInput 
       style = { styles.Input }
       placeholder = 'Nombre de usuario'
       autoCapitalize='none'
       value={ formik.values.userName }
       onChangeText={(text) => {formik.setFieldValue('userName', text)}}
       />    
      <TextInput 
       style = { styles.Input }
       placeholder = 'Contraseña'
       autoCapitalize='none'
       secureTextEntry = {true}
       value={ formik.values.password }
       onChangeText={(text)=>{ formik.setFieldValue('password', text)}}
       />  
      <Button 
       style = { styles.Button }
       title = {"Ingresar"}
       onPress={()=>{formik.handleSubmit()}}
      />
      <Text style = { styles.Errors }>{formik.errors.userName}</Text>
      <Text style = { styles.Errors }>{formik.errors.password}</Text>
      <Text style = { styles.Errors }>{error}</Text>
    </ View>
  )
}

const initialValues = () => {
 return{
  userName: "", 
  password: "", 
 }
}
const validationSchema = () =>{
 return{
  userName: Yup.string().required("El usuario es obligatorio"),
  password: Yup.string().required("La contraseña es obligatioria")
 }
}

const styles = StyleSheet.create({
 Container:{
  display: "flex",  
  justifyContent: "center", 
  alignItems: 'center', 
 },
 Title:{
  textAlign:"center", 
  fontSize: 28, 
  fontWeight: "bold", 
  marginTop: 50, 
  marginBottom: 15,  
 }, 
 Input:{
  padding: 10, 
  margin: 12, 
  width: "90%",
  height: 40, 
  borderWidth: 1,
  borderRadius: 10,   
 },  
 Button:{
  padding: 100,
  backgroundColor: "green",
  width: "100%",
  height: 100, 
  borderRadius: 20, 
 },
 Errors:{
  textAlign:"center", 
  color: "#f00",
  marginTop: 20,  
 }
})