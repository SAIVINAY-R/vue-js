import axios from 'axios'

const BaseAddress = `https://localhost:44330/`

const ApiServices = {
    async get(endPoint) {
        const response = await fetch(BaseAddress + endPoint).catch(err => { throw err });
        return response
    },
    async postJsonData(endPoint, postData) {
        var response = await axios({ 
            url: BaseAddress + endPoint, 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },  
            method: "POST",
            data: JSON.stringify(postData)
        })
        return response
    },
    async postFormData(endPoint, postData) {
        var response = await axios({
            method: "post",
            url: BaseAddress + endPoint,
            data: postData,
            headers: { "Content-Type": "multipart/form-data" },
        })

        return response
    },
    async delete(endPoint) {
        var response = await fetch(BaseAddress + endPoint, { method: 'DELETE' })
        return response
    },
    async putFormData(endPoint, putData) {
        var response = await axios({
            method: "put",
            url: BaseAddress + endPoint,
            data: putData,
            headers: { "Content-Type": "multipart/form-data" },
        })

        return response 
    }
}

export default ApiServices