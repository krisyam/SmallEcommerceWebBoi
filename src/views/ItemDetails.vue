<template>
<!-- <button v-on:click="check()"></button> -->
  <div class="bigContainer center">
    <div class="container">
      <img :src="items[4]">
      <div>{{ items[1] }}</div>
      <div>Quantity: {{ items[3] }}</div>
      <div>₱{{ items[2] }}</div>
    </div>
    <div class="container toCart">
      <p>Total: {{ total }}</p>
      <div>
        <button @click="editInput('minus')" class="flex-1 text-4xl text-white bg-gray-900 mr-2 my-2">-</button>
        {{ itemquantity }}
        <button @click="editInput('plus')" class="flex-1 text-5xl text-white bg-gray-900 ml-2 my-2">+</button>
      </div>
      <button @click="$store.commit('addToCart', [items[0], items[1], items[2], items[3], itemquantity])">Add to Cart</button>

      
    </div>
    
  </div>
</template>

<script>


export default {
  name: 'Item',
  props:['item'],
  data(){
    return{
      items:[],
      itemquantity:0,
      total:0,
    }
  },
  mounted(){
    this.items=this.$store.getters.getChosenItem
  },
  methods: {
    editInput(iteration){
      if(iteration === 'minus') {
        if(this.itemquantity !== 0){ 
          this.itemquantity--;
          this.total -= this.items[2];
        } else{
          this.itemquantity = 0;
        }
      }
      if(iteration === 'plus' && this.itemquantity < this.items[3]) {
        this.itemquantity++;
        this.total += this.items[2];
      }
    },
    check(){
      console.log(this.items)
    }
  },
}
</script>

<style scoped>
  .container{
    display:block;
    margin: auto;
    margin-bottom: 20px;
    height:260px;
    width: 300px;
  }
  .toCart{
    height: 120px;
  }
  img{
    position:relative; 
    top:0; 
    left:0; 
    z-index: 2;
  }
</style>