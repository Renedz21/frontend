import React, { useState } from 'react'
import { postReceipt } from '../api'
import { Button, Spinner, Stack, Toast, ToastContainer } from 'react-bootstrap'


const Form = () => {

    const [dataForm, setDataForm] = useState({
        logo: '',
        currency: '',
        amount: '',
        title: '',
        description: '',
        address: '',
        name: '',
        documentType: '',
        documentNumber: ''
    })

    const [isFormSubmited, setIsFormSubmited] = useState(false)
    const [isLoading, setisLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setDataForm({ ...dataForm, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const payload = {
            logo: dataForm.logo,
            currency: dataForm.currency,
            amount: dataForm.amount,
            title: dataForm.title,
            description: dataForm.description,
            address: dataForm.address,
            name: dataForm.name,
            documentType: dataForm.documentType,
            documentNumber: dataForm.documentNumber
        }

        postReceipt(payload)
        setisLoading(true)

        setTimeout(() => {
            setIsFormSubmited(true)
        }, 7000);

    }

    return (
        <Stack gap={3} className="col-md-5 mx-auto p-4">
            <>
                <h1 className='text-center'>Generador de Recibos</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Ingrese sus nombres completos</label>
                        <input type="text" className="form-control"
                            name='name'
                            value={dataForm.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Ingrese el titulo</label>
                        <input type="text" className="form-control"
                            name='title'
                            value={dataForm.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Ingrese la dirección</label>
                        <input type="text" className="form-control"
                            name='address'
                            value={dataForm.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Tipo de moneda del Recibo</label>
                        <select className='form-select' name="currency" id="" value={dataForm.currency} onChange={handleChange}>
                            <option defaultValue>Seleccione el tipo de moneda</option>
                            <option value="Soles">Soles</option>
                            <option value="Dolares">Dolares</option>
                            <option value="Euros">Euros</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Ingrese el monto a cobrar</label>
                        <input type="text" className="form-control"
                            name='amount'
                            value={dataForm.amount}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Ingrese el tipo de documento</label>
                        <select className='form-select' name="documentType" id="" value={dataForm.documentType} onChange={handleChange}>
                            <option defaultValue>Seleccione el tipo de documento</option>
                            <option value="DNI">DNI</option>
                            <option value="RUC">RUC</option>
                            <option value="Carnet de extranjeria">Carnet de extranjeria</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Ingrese su numero de documento</label>
                        <input type="text" className="form-control"
                            name='documentNumber'
                            value={dataForm.documentNumber}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Subir Logo</label>
                        <input type="file" className="form-control"
                            name='logo'
                            value={dataForm.logo}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Ingrese una descripcion</label>
                        <textarea className='form-control' name="description" id="" rows={4} value={dataForm.description} onChange={handleChange} />
                    </div>

                    <div className='d-grid'>
                        {
                            isLoading ? (
                                <Button variant='primary' disabled >
                                    <Spinner as='span' className='me-2' animation="border" size='sm' role='status' aria-hidden='true' />
                                    Generando Recibo...
                                </Button>
                            ) : (
                                <Button variant='primary' type="submit" onClick={handleSubmit}>
                                    Generar Recibo
                                </Button>
                            )
                        }
                    </div>
                </form>
            </>

            <ToastContainer position='top-end'>
                <Toast
                    show={isFormSubmited}
                    onClose={() => setIsFormSubmited(false)}
                    delay={6000}
                    autohide
                    bg='success'
                >
                    <Toast.Header>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill me-2" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        <strong className="me-auto">Recibo Generado</strong>
                    </Toast.Header>
                    <Toast.Body className='text-white'>El recibo se genero correctamente</Toast.Body>
                </Toast>
            </ToastContainer>
        </Stack >
    )
}

export default Form