<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
import PostCard from "../components/PostCard.vue";
// import usePost from "../composables/usePost";
import allUse from "../composables/allUse"
const {posts, fetchAllPosts} = allUse()
fetchAllPosts()
</script>
