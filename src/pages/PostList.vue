<template>
  <!-- {{ post_list }} -->
  <p>
    <RouterLink to="/new" class="btn btn-success">Add New</RouterLink>
  </p>
  <div>
    <!-- <PostItem v-for="post of post_list" :key="post.id" :post="post" @delete="onDelete" /> -->
    <PostItem v-for="post of post_list" :key="post.id" :post="post"/>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import PostItem from "../components/PostItem.vue";
import {useStore} from 'vuex';

// const post_list = ref([]);

const store = useStore();

const post_list = computed(() => store.state.posts);

// onMounted(() => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((posts) => {
//       post_list.value = posts;
//     });
// });

// function onDelete(post) {
//   post_list.value = post_list.value.filter((p) => p.id != post.id);
// }
 
</script>

<style></style>
