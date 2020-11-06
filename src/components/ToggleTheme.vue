<template>
  <div class="theme">
    <div class="button">
      <input v-model="theme" type="checkbox" @click="toggleTheme" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const theme = ref(localStorage.getItem('theme') === 'dark')

    function toggleTheme(e) {
      window.__setPreferredTheme(e.target.checked ? 'dark' : 'light')
    }

    return { theme, toggleTheme }
  },
}
</script>

<style lang="scss" scoped>
.theme {
  position: fixed;
  bottom: 30px;
  right: 30px;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-color: var(--bg-secondary);
  }
}
</style>
