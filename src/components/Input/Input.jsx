import React from 'react'
import "./Input.css"

const Input = ({ process, result }) => {
    return (
        <div className='CalculatorResult'>
            <div className='result'>
                {result}
            </div>
            <div className='process'>
                {process}
            </div>
        </div>
    )
}

export default Input