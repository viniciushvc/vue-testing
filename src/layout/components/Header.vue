<template>
  <Container>
    <h1>
      Vue 3 TODO List
    </h1>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue'

export default {
  components: {
    Container,
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 40px;
  margin: 50px 0;
}
</style>
