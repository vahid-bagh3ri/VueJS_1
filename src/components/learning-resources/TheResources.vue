<template>
  <base-card>
    <base-button @click="setSelecedTab('stored-resources')"
      >Stored resources</base-button
    >
    <base-button @click="setSelecedTab('add-resources')"
      >Add resource</base-button
    >
    <component :is="selectedTab"></component>
  </base-card>
</template>

<script>
import storedResources from './StoredResources.vue';
import AddResource from './AddResources.vue';

export default {
  components: {
    storedResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources'
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.setSelectedTab = tab;
    }
  }
};
</script>
