"use client"

import { REGEX_TEST } from "@/utils/regex"
import { NOT_ALLOWED_SYMBOLS_BEFORE_ATTHERATE } from "@/utils/notAllowed"
import { useEffect, useState } from "react"
import { checkValidCountry, checkValidGender } from "@/utils/notAllowed"

// ============================================================
// === BUYER SIGNUP ======================================== >>
// ============================================================
export function SignUpBuyer({props}){

    const [ formData, setFormData ] = useState({ name: "", password: "", email: "", phone: "", country: "", gender: "" })
    const [ isFormValid, setIsFormValid ] = useState({ name:false, password:false, email:false, phone:false, country:false, gender:false })
    
    // check data authenticity --------------------------------------
    useEffect(() => {
        setIsFormValid(prev=>({...prev,name:(formData.name===""? false : REGEX_TEST.NAME.test(formData.name))}))
        setIsFormValid(prev=>({...prev,password:(formData.password===""? false : REGEX_TEST.PASSWORD.test(formData.password))}))
        setIsFormValid(prev=>({...prev,email:(formData.email===""? false : REGEX_TEST.EMAIL.test(formData.email) && !NOT_ALLOWED_SYMBOLS_BEFORE_ATTHERATE.includes(formData.email[formData.email.indexOf('@')-1]))}))
        setIsFormValid(prev=>({...prev,phone:(formData.phone===""? false : REGEX_TEST.MOBILE.test(formData.phone))}))
        setIsFormValid(prev=>({...prev,country:(formData.country===""? false : checkValidCountry(formData.country))}))
        setIsFormValid(prev=>({...prev,gender:(formData.gender===""? false : checkValidGender(formData.gender))}))
    }, [ formData ])

    // form submit handle -------------------------------------------
    const handleSignUp = (e) => {
        e.preventDefault()
        console.log((isFormValid.name && isFormValid.password && isFormValid.email && isFormValid.phone && isFormValid.country && isFormValid.gender)? "authentic data" : "unauthentic data, cant submit form...")
    }
    
    // update states on form change ---------------------------------
    const handleDataAuthenticity = (e,field) => { setFormData(prev => ({...prev,[field]:e.target.value})) }

    return(
        <>
            <form onSubmit={e => handleSignUp(e)}>
                <input type="text" name="name" onChange={e => handleDataAuthenticity(e,'name')} placeholder="name" />
                <input type="password" name="password" onChange={e => handleDataAuthenticity(e,'password')} placeholder="password"/>
                <input type="text" name="email" onChange={e => handleDataAuthenticity(e,'email')} placeholder="email" />
                <input type="text" name="phone" onChange={e => handleDataAuthenticity(e,'phone')} placeholder="phone" />
                <input type="text" name="country" onChange={e => handleDataAuthenticity(e,'country')} placeholder="country" />
                <select name="gender" onChange={e => handleDataAuthenticity(e,'gender')} placeholder="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <button type="submit">Register</button>
            </form>
            <div>{(isFormValid.name)? "" : formData.name===""? "" : "ERROR IN NAME"}</div>
            <div>{(isFormValid.password)? "" : formData.password===""? "" : "ERROR IN PASSWORD" }</div>
            <div>{(isFormValid.email)? "" : formData.email===""? "" : "ERROR IN EMAIL"}</div>
            <div>{(isFormValid.phone)? "" : formData.phone===""? "" : "ERROR IN PHONE"}</div>
            <div>{(isFormValid.country)? "" : formData.country===""? "" : "ERROR IN COUNTRY" }</div>
            <div>{(isFormValid.gender)? "" : formData.gender===""? "" : "ERROR IN GENDER"}</div>
        </>
    )
}



// ============================================================
// === SELLER SIGNUP ======================================= >>
// ============================================================
export function SignUpSeller({props}){

    const [ formData, setFormData ] = useState({ name: "", password: "", email: "" })
    const [ isFormValid, setIsFormValid ] = useState({ name:false, password:false, email:false })

    // show error if isFormValid state is false ---------------------
    useEffect(() => {
        document.querySelector("#err_name").textContent = (isFormValid.name)? "" : formData.name===""? "" : "ERROR IN NAME" 
        document.querySelector("#err_password").textContent = (isFormValid.password)? "" : formData.password===""? "" : "ERROR IN PASSWORD" 
        document.querySelector("#err_email").textContent = (isFormValid.email)? "" : formData.email===""? "" : "ERROR IN EMAIL" 
    }, [ isFormValid ])
    
    // check data authenticity --------------------------------------
    useEffect(() => {
        const nameCheck=(str)=>{ return str===""? false : REGEX_TEST.NAME.test(str) }
        const passwordCheck=(str)=>{ return str===""? false : REGEX_TEST.PASSWORD.test(str) }
        const emailCheck=(str)=>{ return str==="" ? false : REGEX_TEST.EMAIL.test(str) && !NOT_ALLOWED_SYMBOLS_BEFORE_ATTHERATE.includes(str[str.indexOf('@')-1])  }
        setIsFormValid(prev=>({...prev,name:nameCheck(formData.name)}))
        setIsFormValid(prev=>({...prev,password:passwordCheck(formData.password)}))
        setIsFormValid(prev=>({...prev,email:emailCheck(formData.email)}))
    }, [ formData ])

    // form submit handle -------------------------------------------
    const handleSignUp = (e) => {
        e.preventDefault()
        console.log((isFormValid.name && isFormValid.password && isFormValid.email)? "authentic data" : "unauthentic data, cant submit form...")
    }
    
    // update states on form change ---------------------------------
    const handleDataAuthenticity = (e,field) => { setFormData(prev => ({...prev,[field]:e.target.value})) }

    return(
        <>
            <form onSubmit={e => handleSignUp(e)}>
                <input type="text" name="name" onChange={e => handleDataAuthenticity(e,'name')} placeholder="name" />
                <input type="password" name="password" onChange={e => handleDataAuthenticity(e,'password')} placeholder="password"/>
                <input type="text" name="email" onChange={e => handleDataAuthenticity(e,'email')} placeholder="email" />
                <button type="submit">POP</button>
            </form>
            <div id="err_name"></div>
            <div id="err_password"></div>
            <div id="err_email"></div>
        </>
    )
}