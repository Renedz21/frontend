import axios from 'axios'

const BASE_URL = 'https://localhost:7063/api'

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: 'blob',

})

//export const getAllReceipts = () => api.get(`/receipt`)
export const postReceipt = async (payload) => {
    try {

        const response = await api.post(`/receipt`, payload)

        const url = window.URL.createObjectURL(new Blob([response.data]))

        let a = document.createElement('a')
        a.href = url
        a.download = 'receipt.pdf'
        a.click();

    } catch (error) {
        console.log(error)
    }
}