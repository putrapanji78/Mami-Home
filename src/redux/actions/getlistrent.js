import axios from 'axios'

export const getRent = () => ({
    type : 'GET_RENTS',
    payload : axios.get('https://mamangkos.herokuapp.com/rents')
})