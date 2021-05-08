const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    outputFullname(){
      console.log('Running again...')
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'bagheri';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount("#events");
