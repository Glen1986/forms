import { useState } from 'react'
const App = () => {
    //los datos del campo input estan sincronizadon con la UI
    //y se encuentran guardados en el state "value"
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    console.log(value)
    return (
        <div>
            {value.length < 5 ? <span>valeor menor a 5</span> : null}

            <input
                type="text"
                name="normal"
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}
export default App
