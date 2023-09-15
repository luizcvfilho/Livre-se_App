import api from '../api'


interface loginData {
    email: string;
    password: string;
}

interface registerData {
    email: string;
    cpf: string;
    name: string;
    phoneNumber: string;
    address: string;
    image: string;
}

export default {
    // Logar
    async login(data: loginData) {
        try {
            const response = api.post('/Login', data)
            return response
        }
        catch (e) {
            console.log(e)
        }
    },

    //Editar Perfil
    async updateUser(id: number, data: registerData) {
        try {
            const response = api.put(`/User/update/${id}`, data)
            return response
        }
        catch (e) {
            console.log(e)
        }
    },

    //Informações do usuário
    async getUser(id) {
        try {
            const response = api.get(`/User/${id}`)
            return response
        }
        catch (e) {
            console.log(e)
        }
    },

    //Favoritar produto
    async favoriteProduct(userId, productId) {
        try {
            const response = api.put(`/Favorite/${userId}/${productId}`)
            return response
        }
        catch (e) {
            console.log(e)
        }
    },

    //Desfavoritar Produto
    async unfavoriteProduct(userId, productId) {
        try {
            const response = api.delete(`/Unfavorite/${userId}/${productId}`)
            return response
        }
        catch (e) {
            console.log(e)
        }
    },
    
    //Ver favoritos (não sei se o luiz já fez, mas fiz só pra testar um bagulho)
    async seeFavorites(userId) {
        try {
            const response = api.get(`/Favorites/${userId}`)
            return response
        }
        catch (e) {
            console.log(e)
        }
    },
    
    //Cria um carrinho
    async createCart(cartId,userId) {
        try {
            const response = api.put(`/Cart/${cartId}/User/${userId}`)
            return response
        }
        catch (e) {
            console.log(e)
        }
    },

    //Adiciona um produto ao Carrinho
    async AddProductCart(cartId,productId) {
        try {
            const response = api.put(`/Cart/${cartId}/${productId}`)
            return response
        }
        catch (e) {
            console.log(e)
        }
    },
    
    //Tira um produto do carrinho
    async deleteCartProduct(cartId,productId) {
        try {
            const response = api.delete(`/Cart/${cartId}/${productId}`)
            return response
        }
        catch (e) {
            console.log(e)
        }
    },

    //Reinicia o carrinho
    async buyCartProducts(userId,cartId) {
        try {
            const response = api.put(`/User/${userId}/Cart/${cartId}`)
            return response
        }
        catch (e) {
            console.log(e)
        }
    }


    // async getUserDetails (token:string){
    //     try{
    //         const response= api.get(`/Private/getDetails`,{headers:{
    //             Authorization:`${token}`
    //         }})
    //         return response
    //     }
    //     catch(e){
    //         console.log(e+'!')
    //     }
    // }

}
