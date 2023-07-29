import React, { useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import * as math from 'mathjs'

const CalculatorRow = () => {

    const [process, setProcess] = useState("")
    const [result, setResult] = useState("")

    const handleClick = (val) => {
        setProcess((process) => [...process, val])
    }

    const clearCalc = () => {
        setProcess("")
        setResult("")
    }

    const processResult = () => {
        const input = process.join("")
        setResult(math.evaluate(input).toFixed(2))
    }

    return (
        <div className="calculator" >
            <Input process={process} result={result} />
            <div className="row" >
                <Button symbol="7" handleClick={handleClick} />
                <Button symbol="8" handleClick={handleClick} />
                <Button symbol="9" handleClick={handleClick} />
                <Button symbol="/" color="gray" handleClick={handleClick} />
            </div>
            <div className="row">
                <Button symbol="4" handleClick={handleClick} />
                <Button symbol="5" handleClick={handleClick} />
                <Button symbol="6" handleClick={handleClick} />
                <Button symbol="*" color="gray" handleClick={handleClick} />
            </div>
            <div className="row">
                <Button symbol="1" handleClick={handleClick} />
                <Button symbol="2" handleClick={handleClick} />
                <Button symbol="3" handleClick={handleClick} />
                <Button symbol="-" color="gray" handleClick={handleClick} />
            </div>
            <div className="row">
                <Button symbol="0" handleClick={handleClick} />
                <Button symbol="." handleClick={handleClick} />
                <Button symbol="=" color="#4ECCA3" handleClick={processResult} />
                <Button symbol="+" color="gray" handleClick={handleClick} />
            </div>
            <Button symbol="clear" color="#ED6363" handleClick={clearCalc} />
        </div>
    )
}

export default CalculatorRow