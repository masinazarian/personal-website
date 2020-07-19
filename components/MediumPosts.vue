<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <PostPreview :post="post" />
    </div>
  </div>
</template>

<script>
import PostPreview from './PostPreview';

export default {
  name: 'MediumPosts',
  props: ['posts'],
  components: {
    PostPreview,
  },
  mounted() {
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
