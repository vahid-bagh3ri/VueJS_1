<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')"
      >Stored resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')"
      >Add resource</base-button
    >
    <component :is="selectedTab"></component>
  </base-card>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      StoredResources: [
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
  },
  provide() {
    return {
      resources: this.StoredResources
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    }
  }
};
</script>
