<template>
  <header>
    <h1><nuxt-link to="/">Keiichiro</nuxt-link><span>AartWorks</span></h1>
    <MenuButton :is-open="menuIsOpen" @toggleMenu="toggleMenu" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import MenuButton from '~/components/atoms/MenuButton.vue'

export default Vue.extend({
  components: {
    MenuButton
  },
  data() {
    return {
      menuIsOpen: false
    }
  },
  methods: {
    toggleMenu(): void {
      this.menuIsOpen = !this.menuIsOpen
    }
  }
})
</script>

<style lang="postcss" scoped>
header {
  padding: 10px 12px 12px;
  border-bottom: solid 1px var(--subColor);
  display: flex;
  justify-content: space-between;
}

h1 {
  font-weight: normal;
  font-size: 20px;
}

h1 a {
  color: var(--mainColor);
  text-decoration: none;
}

h1 a:hover,
h1 a:active {
  color: var(--subColor);
}

h1 span {
  color: var(--subColor);
  font-size: var(--defaultFontSize);
  margin-left: 8px;
}
</style>
