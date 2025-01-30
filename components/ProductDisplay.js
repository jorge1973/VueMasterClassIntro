app.component('product-display', {
    
    props:{
        premium:{
            type: Boolean,
            required: true
        }
    },
    // The template property is used to define the HTML structure of the component.
    template:

    /*html*/
    `
    <div class="product-display">
          <div class="product-container">
            <div class="product-image">
              <!-- Se puede usar v-bind o : para enlazar atributos -->
              <!-- <img v-bind:src="image" alt="product" /> -->
              <img :src="image" alt="product" />
            </div>
            <div class="product-info">
              <h1>{{title}}</h1>
              <p>{{description}}</p>
              <!-- <p v-if="inventory>10">In Stock</p>
              <p v-else-if="inventory>0 && inventory<=10">Almost sold out</p>
              <p v-else>Out of Stock</p> -->
              <p v-if="inStock">In Stock</p>
              <p v-else>Out of Stock</p>
              <p v-if="onSale">On Sale</p>
              <!-- The v-for directive is a powerful tool in Vue.js for rendering lists of items. 
               It helps in creating dynamic and efficient UIs by iterating over arrays or objects and rendering the corresponding HTML elements. 
               The key attribute is crucial for maintaining performance and ensuring that the DOM updates efficiently. -->

               <p>Shipping: {{shipping}}</p>

              <ul>
                <li v-for="detail in details" :key="detail">{{detail}}</li>
              </ul> 
              
              <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}">
                
              </div>
              <div v-for="size in sizes" :key="size">{{size}}</div>

              <button class="button"  @click="addToCart" >Add to Cart</button>
              <button class="button"  @click="removeFromCart" >Remove from Cart</button>

            </div>
          </div>
          <review-list v-if="reviews.length" :reviews="reviews"></review-list>
          <review-form @review-submitted="addReview" ></review-form>
        </div>
        `
    ,
    data:function(){
        return {
            product: 'Socks',
            description: 'A pair of warm, fuzzy ugly socks',
            brand:'Vue Mastery',
            selectedVariant:0,
            inventory: 100,
            // inStock:true,
            onSale:true,
            // cart:0,
            variants: [
                {id:2234, color:'green', image: './assets/images/socks_green.jpg', quantity:50},
                {id:2235, color:'blue', image: './assets/images/socks_blue.jpg', quantity:0}
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            reviews: [],
        }
    },
    methods:{
        addToCart(){
            this.$emit('add-to-cart',this.variants[this.selectedVariant].id)
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        updateVariant(index){
            this.selectedVariant = index
        },
        removeFromCart(){
            this.$emit('update-remove-from-cart',this.variants[this.selectedVariant].id)
        },
        addReview(review){
            this.reviews.push(review)
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        saleMessage(){
            if (this.onSale){
                return this.brand + ' ' + this.product + ' are on sale!'
            }
            return this.brand + ' ' + this.product + ' are not on sale'
        },
        shipping(){
            if (this.premium){
                return 'Free'
            }
            return 2.99
        },

    },
})