<template>
  <footer>
    <Container>
      Created by
      <a
        href="https://github.com/viniciushvc/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Vinicius Vicentini
      </a>
    </Container>
  </footer>
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
footer {
  font-size: 18px;
  text-align: center;
  margin: 50px 0;

  a {
    text-decoration: none;
  }
}
</style>
