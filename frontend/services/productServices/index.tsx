import api from '../api'

//colocar um atributo chamado 'lastname', pra gente poder chamar só o name na tela de perfil e não ter problema com a galerinha do nome composto


export default{
    async getProducts (){
        try{
            const response= api.get('/Product')
            return response
        }
        catch(e){
            console.log(e)
        }
    },

    async getProduct (id){
        try{
            const response= api.get(`Product/${id}`)
            return response
        }
        catch(e){
            console.log(e)
        }
    },
    
    async createProduct(data){
        try{
            const response = api.post('/Product', data);
            return response;
        }
        catch(e){
            console.log(e);
        }
    }
}