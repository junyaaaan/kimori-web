<template>
  <nav>
    <ul class="pager">
      <li v-for="n of totalPageNum" :key="n">
        <nuxt-link :to="createPath(n)" :class="{ current: n === pageNum }">
          {{ n }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    totalPageNum: {
      type: Number,
      default: 1
    },
    pageNum: {
      type: Number,
      default: 1
    }
  },
  methods: {
    createPath(num: number) {
      if (num <= 1) return `${this.$route.path}`

      return `${this.$route.path}?page=${num}`
    }
  }
})
</script>

<style lang="postcss" scoped>
.pager {
  display: flex;
  justify-content: center;
}

.pager li {
  padding: 0 5px;
}

.pager a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 42px;
  border-radius: 21px;
  border: solid 1px var(--subColor);
  color: var(--subColor);
  text-decoration: none;
}

.pager a.current {
  background: var(--subColor);
  color: #fff;
}
</style>
