<template>
    <div>
        <slot name="title" :user="user" text="text" aaa="aaa"></slot>
        <slot></slot>
        <p>{{headerText}}</p>
        <hr>
        <p>いいねの数</p>
        <slot name="number"></slot>
        <slot name="title2"></slot>
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