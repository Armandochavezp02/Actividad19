const app = Vue.createApp({

})

app.component('foco',{
    props: ['habitacion'], 
    data(){
        return {
            estatus: false
        }
    },
    template: `
     <img :src="estatus ? 'focoOff.png' :  'focoOn.png'" 
        @click=" estatus = !estatus ">
        <p>{{habitacion}} </p>
    `
})


const vm = app.mount('#app')