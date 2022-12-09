import React from 'react'

export default function InputGroup(props) {
    return (
        <div className='input-group'>
            <label htmlFor="">{props.mylabel}</label>
            <input type={props.type} name="" className='input-field' placeholder={props.placeholder} />
        </div>
    )
}
