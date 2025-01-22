const app = Vue.createApp({
    data:function(){
        return {
            product: 'Socks',
            description: 'A pair of warm, fuzzy ugly socks',
            image: './assets/images/socks_green.jpg',
            inventory: 100,
            onSale:true,
        }
    }
})