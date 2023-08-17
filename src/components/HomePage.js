import React, { useEffect, useState } from 'react'
import { options } from '../resources/index'


const HomePage = () => {
    const [options, setOptions] = useState([])

    useEffect(() =>{
        options(setOptions)
        console.log(options)
    })

return (
    <div>

    </div>
)
}
