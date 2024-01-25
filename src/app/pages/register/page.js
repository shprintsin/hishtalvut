"use client"
import React, { useState } from 'react'
function InputField(props) {
    return (
     <div>
     {/* <label>{props.name}</label> */}
     <input placeholder = {props.placeholder} name={props.name} type={props.type}/>
     </div>
    )
  }
  
export function FormDataAppHandle(){
    const [values, setValues] = useState({
        username:"",
        password:"",
        confirmPassword:"",
        email:"",
        birthday:""
    })
    const Fields =[
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Enter your username"
        },
        {
            id:2,
            name:"email",
            type:"email",
            placeholder:"Enter your email"
        },
        {
            id:3,
            name:"birthday",
            type:"date",
            placeholder:"Enter your birthday"
        },
        {
            id:4,
            name:"password",
            type:"password",
            placeholder:"Enter your password"
        },
        {
            id:5,
            name:"confirmPassword",
            type:"password",
            placeholder:"Enter your confirm password"
        }
    ]
    return(
        <>
        <form>
            {Fields.map((field)=>{
                return(
                    <div key={field.id}>
                        <label>{field.name}</label>
                    <InputField name={field.name} {...field} type={field.type}/>
                    </div>
                )
            })}
        </form>
        </>
    )
}
export default function pages() {
    
  return (
    <div><FormDataAppHandle/></div>
  )
}
