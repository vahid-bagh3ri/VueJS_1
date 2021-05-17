<template>
  <ul>
    <learning-resources
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resources>
  </ul>
</template>

<script>
import LearningResources from './components/learning-resources/LearningResources.vue';
export default {
  components: {
    LearningResources
  },
  data() {
    return {
      storedResources: [
        {
          id: 'officail-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentaion',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        }
      ]
    };
  }
};
</script>
