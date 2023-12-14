import { ref } from "vue";

export default function useApi() {
  const posts = ref([]);
  const user = ref(null);
  const post = ref(null)
  const apiUrl = 'https://jsonplaceholder.typicode.com';

  const fetchAllPosts = async () => {
    const response = await fetch(`${apiUrl}/posts`);
    posts.value = await response.json();
  };


  const fetchPost=async (userId)=>{
    const respone = await fetch(`${apiUrl}/posts/${userId}`)
    const value = await respone.json()
    post.value = value
    return value
}

  const fetchUser = async (userId) => {
    const response = await fetch(`${apiUrl}/users/${userId}`);
    const value = await response.json();
    user.value = value;
    return value;
  };

  return {
    posts,
    fetchAllPosts,
    fetchPost,
    post,
    user,
    fetchUser
  };
}
