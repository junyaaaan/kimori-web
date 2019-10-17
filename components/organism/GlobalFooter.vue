<template>
  <footer>
    <small>© 2019 Keiichiro Kimori</small>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss" scoped>
footer {
  border-top: solid 1px var(--subColor);
  margin-top: 16px;
  padding: 12px 0;
  text-align: center;
}

small {
  color: var(--subColor);
}
</style>
