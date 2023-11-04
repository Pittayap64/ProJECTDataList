<template>
    <div>
        <h1><span>Broom</span></h1>
        <div>id: <a1>{{ broom.id }}</a1></div>
        <div>ชื่อ: <a1>{{ broom.name}}</a1></div>        
        <div>ประเภท: <a1>{{ broom.model }}</a1></div>
        <div>รายละเอียด: <a1>{{ broom.detail }}</a1></div>
        <div>ราคา: <a1>{{ broom.price }}</a1></div>
        <p></p>
        <button v-on:click="navigateTo('/brooms')">กลับ</button>
        <hr>
    </div>
</template>
<script>
import BroomService from '@/services/BroomService'

export default {
    data() {
        return {
            broom:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let broomId = this.$route.params.broomId
            this.broom = (await BroomService.show(broomId)).data
            console.log(this.broom)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   