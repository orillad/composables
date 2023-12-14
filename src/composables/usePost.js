import { ref } from "vue";
export default function usePost(){
    const posts = ref([])
    const post = ref(null)
    const url = 'https://jsonplaceholder.typicode.com/posts'

    // 2 per tal d'obtenir el json d'una api hem de fer servir la funció fetch
    const fetchAll=async ()=>{
        const response = await fetch(url)
        posts.value = await response.json()
    }

    const fetchOne=async (id)=>{
        const respone = await fetch(url+'/'+id)
        const value = await respone.json()
        post.value = value
        return value
    }

    return{
        posts,
        fetchAll,
        post,
        fetchOne
    }
}