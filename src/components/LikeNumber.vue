<template>
    <div>
        <p>いいね！！{{halfNumber}}{{testProps}}</p>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
export default {
    props:{
        totalnumber:{
            type:Number,
            default:10
        },
        testProps:{
            type:String,
            default:'aaa'
        },
    },
    computed:{
        halfNumber() {
            return this.totalnumber/2;
        },
        halfNumber2:function() {
            return this.totalnumber/2;
        }
    },

    methods:{
        increment(){
            // this.number++
            this.$emit('my-click',this.totalnumber+1);
        }
    }
}
</script>

<style scoped>
    div{
        border:1px solid red;
    }
</style>