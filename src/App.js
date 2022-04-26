import { useRef } from 'react'
const App = () => {
    const input = useRef()
    const file = useRef()
    const submit = () => {
        console.log(input.current.value)
        //accedemos a los archivos contenidos en el input de referencia
        console.log(file.current.files[0])
        //creamos un formularion a partir de formData
        const form = new FormData()
        //de manera individual se agregan los campos al formulario
        form.append('archivo', file.current.files[0])
        form.append('campo', input.current.value)
        //ejemplo de como se podria mandar la inf del formulario por fetch
        fetch('/lala', { method: 'POST', body: form })
    }
    return (
        <div>
            <div>
                <span>lala</span>
                <input ref={input} type="text" name="campo" />
                <input type="file" name="archivo" ref={file} />
            </div>
            <input onClick={submit} type="submit" valor="enviar" />
        </div>
    )
}
export default App
