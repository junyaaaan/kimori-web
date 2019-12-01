<template>
  <header>
    <p class="logo">
      <nuxt-link to="/">Kimori Keiichiro</nuxt-link><span>AartWorks</span>
    </p>

    <MenuButton :is-open="menuIsOpen" @toggleMenu="toggleMenu" />

    <div v-if="menuIsOpen" class="drawer-backdrop" @click="toggleMenu"></div>

    <transition name="drawer">
      <Drawer v-if="menuIsOpen" />
    </transition>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import MenuButton from '~/components/atoms/MenuButton.vue'
import Drawer from '~/components/organism/Drawer.vue'

export default Vue.extend({
  components: {
    MenuButton,
    Drawer
  },
  computed: {
    menuIsOpen() {
      return this.$store.state.menu.isOpen
    }
  },
  methods: {
    toggleMenu(): void {
      this.$store.commit('menu/toggleOpen')
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
  position: relative;
}

.logo {
  font-weight: normal;
  font-size: 20px;
}

.logo a {
  color: var(--mainColor);
  text-decoration: none;
}

.logo a:hover,
.logo a:active {
  color: var(--subColor);
}

.logo span {
  color: var(--subColor);
  font-size: var(--defaultFontSize);
  margin-left: 8px;
}

.drawer-backdrop {
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  top: 53px;
  left: 0;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: 0.5s;
  transform: translateX(0);
}
.drawer-enter,
.drawer-leave-to {
  transform: translateX(294px);
}
</style>
