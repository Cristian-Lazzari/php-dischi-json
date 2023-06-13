const app = Vue.createApp({
    data() {
        return{
            arrdischi:[],
        }
    },
     methods: {
        getAxiosRequest(){
            axios.get('http://localhost/php-dischi-json/logica.php')
            .then(rensponse => this.arrdischi = rensponse.data)
            console.log(this.arrdischi)
        }
     },
     created() {
        this.getAxiosRequest()
     }
});
app.mount('#root');