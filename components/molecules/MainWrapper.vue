<template>
  <main>
    <slot />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="postcss" scoped>
main {
  padding: 16px 0 70px;
  max-width: 960px;
  margin: 0 auto;
}
</style>
