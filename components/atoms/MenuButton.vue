<template>
  <button type="button" @click="hundleClick">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <line
        x1="0"
        y1="2"
        x2="20"
        y2="2"
        class="icon__top"
        :class="{ 'icon__top--isOpen': isOpen }"
      />
      <line
        x1="0"
        y1="10"
        x2="20"
        y2="10"
        class="icon__middle"
        :class="{ 'icon__middle--isOpen': isOpen }"
      />
      <line
        x1="0"
        y1="18"
        x2="20"
        y2="18"
        class="icon__bottom"
        :class="{ 'icon__bottom--isOpen': isOpen }"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export type MenuButton = boolean

export default Vue.extend({
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hundleClick(): void {
      this.$emit('toggleMenu')
    }
  }
})
</script>

<style lang="postcss" scoped>
button {
  stroke: var(--mainColor);
  stroke-width: 3;
}

button:hover,
button:active {
  stroke: var(--subColor);
}

.icon__top,
.icon__moddle,
.icon__bottom {
  transition: 0.3s;
}

.icon__top--isOpen {
  transform: rotate(45deg) translateX(6px) translateY(-3px);
}

.icon__middle--isOpen {
  display: none;
}

.icon__bottom--isOpen {
  transform: rotate(-45deg) translateX(-9px) translateY(-2px);
}
</style>
