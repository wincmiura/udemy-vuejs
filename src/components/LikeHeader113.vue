<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:{
            firstname:'jack',
            lastname:'donald'
            },
        }
    },
    props:["headerText"]
}
</script>

<style scoped>
h1{color:red}
</style>