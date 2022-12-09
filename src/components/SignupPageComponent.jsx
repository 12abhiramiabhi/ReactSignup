import React from 'react'
import MidSession from './MidSession'
import MyButton from './MyButton'
import "./signupPage.css"
import TitleSession from './TitleSession'
export default function SignupPageComponent() {
    return (
        <div className='signup-container'>
            <div className='card'>
                <TitleSession />
                <MidSession />
                <MyButton text="signup" />
            </div>
        </div>
    )
}
