<template>
    <div>
        <h1><span>Broom</span></h1>
        <p><button v-on:click="create">Create Broom</button></p>
        <div v-for="broom in brooms" v-bind:key="broom.id">
            <div><a>ชื่อ:</a>
                <a1>{{ broom.name }}</a1>
            </div>
            <div><a>ประเภท:</a>
                <a1>{{ broom.model }}</a1>
            </div>
            <div><a>ราคา:</a>
                <a1>{{ broom.price }}</a1>
            </div>
            <P></P>
            <button v-on:click="navigateTo('/broom/' + broom.id)">ดูข้อมูลสินค้า</button>
            <button v-on:click="navigateTo('/broom/edit/' + broom.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteBroom(broom)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import BroomService from '@/services/BroomService'
export default {
    data() {
        return {
            brooms: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.brooms = (await BroomService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'broom-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteBroom(broom) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await BroomService.delete(broom)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.brooms = (await BroomService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    },
}
</script>
<style scoped> 
    button {
     font-family: 'Kanit', sans-serif;
     font-size: 1em;
     background-color: rgb(255, 255, 255);
     border-radius: 12px;
 }
 
 </style>
