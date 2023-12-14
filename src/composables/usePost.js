import { ref } from "vue";
export default function usePost(){
    const posts = ref([])
    const post = ref(null)
    const url = 'https://jsonplaceholder.typicode.com/posts'

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