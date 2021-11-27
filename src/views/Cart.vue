<template>
    <div class="container cartcss">
        <div class="grid">
            <p>Item Name</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Remove Item</p>
        </div>
        <ItemCart />
        <div class="grid">
            <p></p>
            <p>Total: {{ $store.state.total }}</p>
            <button @click="$store.commit('alterCart', [0, 0, 'clear'])">Clear Cart</button>
            <button @click="$store.commit('checkout')">CheckOut</button>
        </div>
        <div class="grid">
            <p>Coupon: <input type="text" v-model="coupon" @input="$store.commit('altertotal',coupon)">
            <br>Money: <input type="text" v-model="$store.state.money"></p>
        </div>
    </div>
</template>



<script>
import ItemCart from '@/components/ItemCart.vue';
export default {
    name: 'Home',
    components: {
        ItemCart
    },
    data(){
        return{
            coupon:'',
        }
    },
    methods:{
        // applycoupon(event){
        //     this.coupon.forEach(el => {
        //         if(event.target.value.toLowerCase().indexOf(el)){
        //             if(el.code==='menu200flat' && this.total>1000){
        //                 this.total-=el.discount
        //             } else{
        //                 this.total*=el.discount;
        //             }
        //         }
        //     });
        // },

    },
    computed:{
        getCart(){
            return this.$store.getters.getCart
        },
    }
}
</script>

<style scoped>
    input{
        width: auto;
    }
</style>