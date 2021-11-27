<template>
    <input type="text" v-on:input="inputed" placeholder="Search here">
</template>

<script>
export default {
    name: 'Searchbar',
    methods:{
        inputed(event){
            this.$emit("input",event)
        }
    }
}
</script>