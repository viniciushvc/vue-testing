<template>
  <Container>
    <h1>
      TODO -
      <span class="vue">Vue 3</span>
      +
      <span class="ts"> Typescript</span>
    </h1>

    <ToggleTheme />
  </Container>
</template>

<script>
import Container from '@/components/Container.vue'
import ToggleTheme from '@/components/ToggleTheme.vue'

export default {
  components: {
    Container,
    ToggleTheme,
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 24px;
  margin: 40px 0;

  @media (min-width: 720px) {
    font-size: 40px;
  }

  .vue {
    color: #41b883;
  }

  .ts {
    color: #007acc;
  }
}
</style>
