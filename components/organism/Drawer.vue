<template>
  <nav>
    <ul class="drawer">
      <li v-for="(category, index) in categorysData" :key="index">
        <nuxt-link :to="category.path">{{ category.name }}</nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="https://docs.google.com/forms/d/e/1FAIpQLSc6gt01XJe8M3i3X-nMZ4SNCecsCF9ZBDnbNo-LQgy5cdxdSA/viewform?usp=sf_link"
          >Contact</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      categorysData: [
        {
          name: 'Top',
          path: '/'
        },
        {
          name: 'About',
          path: '/about/'
        },
        {
          name: 'Gallery',
          path: '/gallery/'
        },
        {
          name: 'Biography',
          path: '/biography/'
        }
      ]
    }
  }
})
</script>

<style lang="postcss" scoped>
nav {
  position: fixed;
  top: 53px;
  right: 0;
  width: 294px;
  height: 100%;
  background: #fff;
}

.drawer li a {
  padding: 13px;
  text-align: right;
  display: block;
  border-bottom: 1px solid var(--subColor);
  text-decoration: none;
  color: var(--mainColor);
}
</style>
