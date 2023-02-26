import axios from 'axios'

const BASE_URL = 'https://webapi20230226155012.azurewebsites.net/api/receipt'

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

        return await response.data

    } catch (error) {
        console.log(error)
    }
}