const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

// ...

// let message = "Hello!";
// let longMessage = Message + "World!";

// console.log(longMessage);

// message = "Hello!!!!";

// console.log(longMessage);

const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World ";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Helooo!!!!";

console.log(proxy.longMessage);

const app2 = Vue.createApp({
  data(){
    return{
      favoriteMeal: 'pizza'
    }
  }
});

app2.mount("#app2");
