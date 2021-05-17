<template>
  <ul></ul>
</template>

<script>
export default {
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
