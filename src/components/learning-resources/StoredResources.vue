<template>
  <add-resource @new-resource="newResource"></add-resource>
  <ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResources.vue';

export default {
  inject: ['resources'],
  components: {
    LearningResource
  },
  methods: {
    newResource(title, description, link) {
      const brandNewResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link
      };
      this.resources.push(brandNewResource);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
