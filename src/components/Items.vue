<template>
    <div class="container transition" >
      <!-- <button v-on:click="check()"></button> -->
      <img :src="items[4]">
      <div>{{ items[1] }}</div>
      <div>Quantity: {{ items[3] }}</div>
      <div>₱{{ items[2] }}</div>
      <router-link :to="{name:'Item', params:{name:item[1]}}"
      @click="$store.commit('alterChosenItem', [items[0],items[1],items[2],items[3],items[4]])">Details</router-link>
      <!-- :item="[items[0],items[1],items[2],items[3],items[4]]  -->
    </div>
</template>

<script>

export default {
  name: 'Items',
  props:['item'],
  data(){
    return{
      items:[this.item[0],this.item[1],this.item[2],this.item[3],this.item[4]],
    }
  },  
  methods:{
    check(){
      console.log(this.items)
    }
  },
}
</script>