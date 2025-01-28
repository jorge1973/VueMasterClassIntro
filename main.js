const app = Vue.createApp({
    data:function(){
        return {
            product: 'Socks',
            description: 'A pair of warm, fuzzy ugly socks',
            image: './assets/images/socks_green.jpg',
            inventory: 100,
            inStock:true,
            onSale:true,
            cart:0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id:2234, color:'green', image: './assets/images/socks_green.jpg'},
                {id:2235, color:'blue', image: './assets/images/socks_blue.jpg'}
            ],
            sizes: ['S', 'M', 'L', 'XL'],
        }
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        removeFromCart(){
            this.cart -= 1
        }
    }
})