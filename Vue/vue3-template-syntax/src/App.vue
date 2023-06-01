<template>
  <h1 @click="add">
    {{ msg }}
  </h1>

  <h1 v-html="msg"></h1>
</template>

<script>
export default {
  data(){
    return{
      msg: '<div sytle="color:red;">Hello world</div>'
    }
  },
  methods:{
    add(){
      this.msg += '!'
    }
  }
}
</script>
