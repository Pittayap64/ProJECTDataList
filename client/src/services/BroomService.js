import Api from '@/services/Api'
export default {
    index(broom) {
        return Api().get('brooms')
    },
    show(broomId) {
        return Api().get('broom/' + broomId)
    },
    post(broom) {
        return Api().post('broom', broom)
    },
    put(broom) {
        return Api().put('broom/' + broom.id, broom)
    },
    delete(broom) {
        return Api().delete('broom/' + broom.id, broom)
    },
}