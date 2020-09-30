<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script lang="ts">
import Layout from '@/layout/index.vue'

export default {
  components: {
    Layout,
  },
}
</script>
