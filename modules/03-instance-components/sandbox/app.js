new Vue({
  el: '#app',
  data: {
    title: 'Vue 2 Sandbox',
    name: '',
    count: 0
  },
  computed: {
    upperName() {
      return this.name.trim().toUpperCase() || 'MUNDO';
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
});
