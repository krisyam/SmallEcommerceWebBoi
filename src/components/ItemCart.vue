<template>
    <div class="container grid" :key="item.id" v-for="item in $store.state.cart">
      <div>{{item[1]}}</div>
      <div>
        <button @click="$store.commit('alterCart', [item[0], item[4], 'deduct'])">-</button>
        {{ item[4] }}
        <button @click="$store.commit('alterCart', [item[0], item[4], 'add'])">+</button>
      </div>
      <div>{{item[2]}}</div>
      <button @click="$store.commit('alterCart', [item[0], item[4], 'remove'])">but</button>
      
    </div>
</template>

<script>

export default {
  name: 'Cart',
  computed:{
    getCart(){
      return this.$store.getters.getCart
    },
  },
  // methods:{
  //   editInput(iteration){
  //     if(iteration === 'minus') {
  //       if(this.itemquantity !== 0){ 
  //         this.itemquantity--;
  //         this.total -= this.item[2];
  //       } else{
  //         this.itemquantity = 0;
  //       }
  //     }
  //     if(iteration === 'plus' && this.itemquantity < this.item[3]) {
  //       this.itemquantity++;
  //       this.total += this.item[2];
  //     }
  //   },
  //   check(){
  //     console.log(this.items)
  //   }
  // },
}
</script>
<style scoped>
  .container{
    height: auto;
    margin: 0;
    border-radius: 0;
    border-bottom: 1px solid rgb(180, 180, 180);
  }
  button{
    width: 50px;
  }
</style>