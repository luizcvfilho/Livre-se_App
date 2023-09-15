import api from '../api'

export default{
    async getFav (id){
        try{
            const response = api.get(`/Favorites/${id}`)
            return response
        }
        catch(e){
            console.log(e)
        }
    },

    async unFav (userid, productid){
        try{
            const response = api.delete(`/Unfavorite/${userid}/${productid}`)
            return response
        }
        catch(e){
            console.log(e)
        }
    }
}