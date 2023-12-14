<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
// import usePost from '../composables/usePost';
// import useUser from '../composables/useUser';
import allUse from '../composables/allUse';

// const {post, fetchOne} = usePost()
// const {user, fetchOne: fetchUser} = useUser()
const route = useRoute();



const {post, fetchPost, user, fetchUser  } = allUse()

const postId = route.params.id; 

const fetchData=async() =>{
  const postDetail = await fetchPost(postId)
  console.log(postDetail);
  const user = await fetchUser(postDetail.userId)
  console.log(user);
}
fetchData()






</script>
