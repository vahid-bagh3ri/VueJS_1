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
      // this.message = this.currentUserInput;

      this.message = this.$refs.userText.value;

      // console.dir(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmonuted()");
  },
});

app.mount("#app");

setTimeout(function () {
  app.unmount();
}, 3000);

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

// console.log(proxy.longMessage);

const app2 = Vue.createApp({
  template: `
  <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "pizza",
    };
  },
});

app2.mount("#app2");
