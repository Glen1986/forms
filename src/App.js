import { useState } from 'react'
const App = () => {
    //los datos del campo input estan sincronizadon con la UI
    //y se encuentran guardados en el state "value"
    const [value, setValue] = useState({
        normal: '',
        texto: '',
        select: '',
        check: false,
        estado: '',
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
            {/***
            <div onChange={handleChange}>
                <label>chancho</label>
                <input type="radio" name="estado" value="volado" />
                volado
                <input type="radio" name="estado" value="caf√©" />
                caf√©
                <input type="radio" name="estado" value="weed" />
                weed
            </div>

                **/}
            <div>
                <label>chancho</label>
                <input
                    onChange={handleChange}
                    type="radio"
                    name="estado"
                    value="volado"
                    checked={value.estado === 'volado'}
                />
                volado
                <input
                    onChange={handleChange}
                    type="radio"
                    name="estado"
                    value="cafe"
                    checked={value.estado === 'cafe'}
                />
                café
                <input
                    onChange={handleChange}
                    type="radio"
                    name="estado"
                    value="weed"
                    checked={value.estado === 'weed'}
                />
                weed
            </div>
        </div>
    )
}
export default App
