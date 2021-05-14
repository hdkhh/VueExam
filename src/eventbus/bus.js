import Vue from 'vue'

export const EventBus = new Vue({
    // Ex Fucntion
    ExampleFunction(data) {
        this.$emit('ex', data)
    },
})