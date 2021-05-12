import {createApp} from "vue";

import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
const app = createApp(App);

app.component("firend-contact", FriendContact);

app.mount("#app");
