const numberFormat = {
    data () {
        return {

        }
    },
    methods: {
        numberWithCommas: function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        numberDelCommas: function (str) {
            str = String(str)
            return str.replace(/[^\d]+/g, '')
        } 
    }
}

export default numberFormat