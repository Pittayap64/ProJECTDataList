<template>
    <div>
        <h1><span>Edit Broom</span></h1>
        <form v-on:submit.prevent="editBroom">
            <p>ชื่อ: <input type="text" v-model="broom.name"></p>
            <p>ประเภท: <input type="text" v-model="broom.model"></p>
            <p>รายละเอียด: <input type="text" v-model="broom.detail"></p>
            <p>ราคา: <input type="text" v-model="broom.price"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ broom.name }}</a1></p>
            <p><a>ประเภท:</a> <a1>{{ broom.model }}</a1></p>
            <p><a>รายละเอียด:</a> <a1>{{ broom.detail }}</a1></p>
            <p><a>ราคา:</a> <a1>{{ broom.price }}</a1></p>
            <p></p>
        </div>

    </div>
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
                price: ''
            }
        }
    },
    methods: {
        async editBroom() {
            try {
                await BroomService.put(this.broom)
                this.$router.push({
                    name: 'brooms'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let broomId = this.$route.params.broomId
            this.broom = (await BroomService.show(broomId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>