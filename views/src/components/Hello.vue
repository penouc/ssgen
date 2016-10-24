<template>
  <div class="hello">
    <label for="">请输入您的电子邮箱地址：</label><input type="text" v-model='val'>
    <button v-on:click='send(val)'>订阅</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      val: '',
    };
  },
  methods: {
    send(val) {
      const url = `/sendMail/${val}`;
      this.$http.get(url);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
