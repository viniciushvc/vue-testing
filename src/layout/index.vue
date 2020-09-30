<template>
  <Header />

  <main>
    <Container>
      <slot />
    </Container>
  </main>

  <Footer />
</template>

<script>
import Container from '@/components/Container.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Container,
    Header,
    Footer,
  },
}
</script>
