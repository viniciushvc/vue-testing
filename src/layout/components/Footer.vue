<template>
  <footer>
    Created by
    <a
      href="https://github.com/viniciushvc/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Vinicius Vicentini
    </a>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  font-size: 18px;
  text-align: center;
  margin: 50px 0;

  a {
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      color: var(--color-vue);
    }
  }
}
</style>
