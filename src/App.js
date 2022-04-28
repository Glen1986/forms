import { useState } from 'react'
const App = () => {
    //los datos del campo input estan sincronizadon con la UI
    //y se encuentran guardados en el state "value"
    const [value, setValue] = useState({
        normal: '',
        texto: '',
        select: '',
        check: false,
    })
    const handleChange = ({ target }) => {
        setValue((state) => ({
            ...state,
            [target.name]:
                //verificamos si tenemos un 'checkbox', y asignamos el valor de target.checked
                target.type === 'checkbox' ? target.checked : target.value,
        }))
        // setValue({
        // ...value,
        // [e.target.name]: e.target.value,
        // })
    }
    console.log(value)
    return (
        <div>
            {value.length < 5 ? <span>valeor menor a 5</span> : null}

            <input
                type="text"
                name="normal"
                value={value.normal}
                onChange={handleChange}
            />
            <textarea
                name="texto"
                cols="30"
                rows="2"
                value={value.texto}
                onChange={handleChange}
            />
            <select value={value.select} name="select" onChange={handleChange}>
                <option value="">select</option>
                <option value="volado">volado</option>
                <option value="cafe">café</option>
                <option value="weed">weed</option>
            </select>
            <input
                type="checkbox"
                name="check"
                onChange={handleChange}
                checked={value.check}
            />
        </div>
    )
}
export default App
