<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create Broom</span></h1>
                <form class="register-form" v-on:submit.prevent="createBroom">
                    <input type="text" placeholder="ชื่อ *" v-model="broom.name" required>
                    <input type="text" placeholder="ประเภท *" v-model="broom.model" required>
                    <input type="text" placeholder="รายละเอียด" v-model="broom.detail">
                    <input type="text" placeholder="ราคา *" v-model="broom.price" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/brooms')">กลับ</button>
                </form>
            </div>
        </div>
    </div2>
</template>
<script>
import BroomService from '@/services/BroomService'
export default {
    data() {
        return {
            broom: {
                name: '',
                model: '',
                detail: '',
                price: '',
            }
        }
    },
    methods: {
        async createBroom() {
            try {
                await BroomService.post(this.broom)
                this.$router.push({
                    name: 'brooms'
                })
            } catch (err) {
                console.log(err)
            }
        },
        navigateTo(route){
            this.$router.push(route)
        }
    },
}
</script>
<style scoped></style>
   