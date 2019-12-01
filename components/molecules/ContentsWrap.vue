<template>
  <div class="contents-wrap">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="postcss" scoped>
.contents-wrap {
  padding: 0 12px;
}

.contents-wrap > *:not(:first-child) {
  margin-top: 42px;
}
</style>
