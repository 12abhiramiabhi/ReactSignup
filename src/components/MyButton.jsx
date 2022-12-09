import React from 'react'

export default function MyButton(props) {
    return (
        <div className='button-container'>
            <button className='btn'>{props.text}</button>
        </div>
    )
}
