<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
import PostCard from "../components/PostCard.vue";
// import usePost from "../composables/usePost";
import useAll from "../composables/useAll"
const {posts, fetchAllPosts} = useAll()
fetchAllPosts()
</script>
