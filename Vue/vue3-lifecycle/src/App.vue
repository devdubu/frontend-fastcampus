<template>
  <h1>{{ count }}</h1>
</template>

<script>


export default {
  data() {
    return {
      count: 2
    }
  },
  beforeCreate(){
    console.log('Before Create!', this.count)
    // 변수가 정의되기 전이기 때문에 해당 console.log에는 undefined가 나오게 된다.
  },
  create(){
    console.log('Created!', this.count)
    // 변수가 정의된 후이기에, 해당 console.log에는 제대로된 값이 나오게 된다.
  },
  beforeMount(){
    console.log('Before Mounted!')
    console.log(document.querySelector('h1'))
    // html이 렌더링 되기 전이기 때문에, 해당 console.log는 찍히지 않는다.
  },
  mounted(){
    console.log('Mounted!')
    console.log(document.querySelector('h1'))
    // html이 렌더링 되고 난 후이기 때문에, 해당 console.log에는 count값이 정상적으로 찍힌다.
  }
}
</script>