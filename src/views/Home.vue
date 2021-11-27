<template>
  <div class="home">
    
    <div class="itemscss">
      <Searchbar v-on:input="inputchanged"/><br>
      <!-- <button v-on:click="check()"></button> -->
      <Items :key="itemdet.id" v-for="itemdet in filtered"
    :item="[itemdet.id,itemdet.name,itemdet.price,itemdet.quantity,itemdet.img]"/>
    </div>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import Items from '@/components/Items.vue'
import Searchbar from '@/components/Searchbar.vue'

export default {
  name: 'Home',
  components: {
    Items,
    Searchbar
  },
  data(){
    return{
      items:[],
      searchtext:''
    }
  },
  mounted(){
    this.items=this.$store.getters.getItems,
    this.cart=this.$store.getters.getCart
  },
  methods:{
    inputchanged(event){
      this.searchtext=event.target.value;
    },
    check(){
      console.log(this.cart)
    }
  },
  computed:{
    filtered: function(){
      let filterArr = this.items;
      filterArr = this.items.filter(m => m.quantity > 0);
      if (this.searchtext) {
        filterArr = this.items.filter(
          m => m.name.toLowerCase().indexOf(this.searchtext.toLowerCase()) > -1 && m.quantity > 0
        );
      }
      return filterArr;
    }
  }
}
</script>

<style>
  img{
    width: 200px;
    height:200px;
    object-fit:cover;
  }
  .itemscss{
    width: 100%;
    margin: 0;
    margin-top: 30px;
  }
  .container{
    display: inline-block;
    width: 220px;
    height: 300px;
    padding: 20px;
    margin: 5px;
    margin-top: 30px;
    transition: width 0.5s, height 0.5s;
    border: 0px none black;
    border-radius: 20px;
    background-color: rgb(218, 218, 218);
  }
  .bigContainer{
    width: auto;
    height: 500px;
    padding: 20px;
    margin: 10px;
    border: 0px none black;
    border-radius: 10px;
  }
  .transition:hover {
    width: 240px;
    height: 320px;
  }
  .cartcss{
    height:auto;
    width:1000px;
  }
  .grid{
    display: grid;
    width:auto;
    padding: 10px 0;
    grid-template-columns: 250px 250px 250px 250px;
  }
</style>