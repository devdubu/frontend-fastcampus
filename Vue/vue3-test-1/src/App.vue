<template>
  <h1 @click="increse()">
    {{ count }}
  </h1>
  <div v-if="count>4">
    4보다 큽니다!
  </div>
  <ul>
    <hello
      v-for="fruit in fruits"
      :key="fruit"
      :name="furit">
      {{ fruit }}
    </hello>
  </ul>
</template>


<script>
import Fruit from '~/components/Fruit'

export default{
  components:{
    hello: Fruit
  },
  data(){
    return{
      count: 0,
      fruits: ['Apple', 'Banana', 'Cherry']
    }
  },
  methods: {
    increse(){
      this.count += 1
    }    
  },
}

</script>

<style>


</style>
