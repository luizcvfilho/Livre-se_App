import api from '../api'

export default{
    async getCart (id){
        try{
            const response = api.get(`/Cart/${id}`)
            return response
        }
        catch(e){
            console.log(e)
        }
    },

    async deleteCart (cartproductid, productcartid){
        try{
            const response = api.delete(`/Cart/${cartproductid}/${productcartid}`)
            return response
        }
        catch(e){
            console.log(e)
        }
    }
}

