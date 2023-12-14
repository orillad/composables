import { ref } from "vue";
export default function useUser(){
    const user = ref(null)
    const url = 'https://jsonplaceholder.typicode.com/users'



    const fetchOne=async (id)=>{
        const respone = await fetch(url+'/'+id)
        const value = await respone.json()
        user.value = value
        return value
    }

    return{
        user,
        fetchOne
    }
}