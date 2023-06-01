<template>
  <section v-if="hasFruit">
    <h1>Fruits</h1>
    <ul>
      <li
      v-for="fruit in fruits"
      :key="fruit">
      {{ fruit }}
    </li>
  </ul>  
  </section>
  
</template>

<script>
export default {
  data(){
    return{
      fruits:['Apple', 'Banana', 'Cherry']
    }
  },
  // 계산된 data, 즉, 계산된 변수
  computed:{
    hasFruit(){
      return this.fruits.length > 0
    },
    reverseFruits(){
      return this.fruits.map(fruit =>{
        //.jsoin
        return fruit.split(''.reverse())
      })
    }
  }
}
</script>

