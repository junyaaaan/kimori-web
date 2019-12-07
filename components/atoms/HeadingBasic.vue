<template>
  <component :is="headingTag" :class="headingClass"><slot /></component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    tag: {
      type: Number,
      default: 1
    },
    level: {
      type: Number,
      default: 1
    }
  },
  computed: {
    headingTag() {
      return `h${this.tag}`
    },
    headingClass() {
      return `heading-${this.level}`
    }
  }
})
</script>

<style lang="postcss" scoped>
.heading-1 {
  color: var(--mainColor);
  font-size: var(--largeFontSize);
  font-weight: normal;
}
</style>
