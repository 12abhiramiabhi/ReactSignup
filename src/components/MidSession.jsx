import React from 'react'
import InputGroup from './InputGroup'

export default function MidSession() {
    return (
        <div className='mid-session'>
            <InputGroup mylabel="username" placeholder="enter user name" type="text" />
            <InputGroup mylabel="email" placeholder="enter email" type="email" />
            <InputGroup mylabel="phonenumber" placeholder="enter phone number" type="number" />
            <InputGroup mylabel="password" placeholder="enter password" type="password" />
        </div>
    )
}
