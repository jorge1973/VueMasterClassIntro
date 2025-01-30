const app = Vue.createApp({
    data(){
        return{
            cart:[],
            premium:true,
            details: ['50% cotton', '30% wool', '20% polyester'],
        }
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
        },
        updateRemoveFromCart(id){
            const index=this.cart.indexOf(id)
            console.log(index)
            if (index >= -1){
                this.cart.splice(index,1)
            }
            console.log(this.cart)    
        }
    }
})