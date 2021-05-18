import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import AddResource from './components/learning-resources/AddResource.vue';
const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('add-resource', AddResource);

app.mount('#app');
