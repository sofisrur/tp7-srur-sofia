import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'


Vue.use(Vuex)

    export default new Vuex.Store({
        state : {
            formState: {},
            formData: {
                nombre: '',
                edad: '',
                email: ''
                },
            usuarios: [],
            URL: 'https://62842ba33060bbd3473556b1.mockapi.io/users',
        },
        actions : {
            async Form({commit}){
                try{ 
                    let { data } = await axios(this.state.URL)		
                    commit('addUser', data)
                }catch(error) {
                    console.error('Error Axios', error)
                }
            },
            async adduser({commit}){
                try{
                    await axios.post(this.state.URL, this.state.formData) 
                    let { data } = await axios(this.state.URL)
    
                    commit('addUser', data)
                }catch(error) {
                    console.error('Error Axios', error)
                }
            },
            reset({commit}){
                let dataInicial = {
                    nombre: '',
                    edad: '',
                    email: ''
                }
                commit('resetForm', dataInicial)
            }
        },
        mutations : {
            addUser(state, data){
                state.usuarios = data
            },
            reset(state, dataInicial){
                state.formState._reset()
                state.formData = dataInicial
            }
        }
    
    })