import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList }, //our-domain.com/teams => TeamsList
    { path: '/users', component: UsersList }, //our-domain.com/teams => UsersList
    { path: '/teams/:teamId', component: TeamMembers } //our-domain.com/teams => TeamsList
  ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
