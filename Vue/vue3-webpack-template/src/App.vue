<template>
    <h1>{{  message }}</h1>
    <HelloWorld></HelloWorld>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default{
    data() {
        return {
            message: "Hello Vue!!!"
        };
    },
    components: { HelloWorld }
}
</script>
