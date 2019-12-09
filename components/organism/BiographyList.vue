<template>
  <ul class="biographys__list">
    <li v-for="(biography, index) in biographys" :key="index">
      <p class="biographys__img">
        <img
          :src="require(`~/assets/images/biography/${biography.id}/img.png`)"
          :srcset="
            `
            ${require(`~/assets/images/biography/${biography.id}/img.png`)} 1x,
            ${require(`~/assets/images/biography/${biography.id}/img@2x.png`)} 2x
            `
          "
          alt=""
        />
      </p>
      <p class="biographys__title">{{ biography.title }}</p>
      <p class="biographys__date">
        <time>{{ biography.date }}</time>
      </p>
      <!-- eslint-disable-next-line prettier/prettier -->
      <p class="biographys__text" :class="{ 'biographys__text--omit': omit }">{{ biography.text }}</p>
      <p v-if="omit" class="biographys__more">
        <nuxt-link :to="`/biography/${biography.id}/`">more</nuxt-link>
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    biographys: {
      type: Array,
      default: () => null
    },
    omit: {
      type: Boolean
    }
  }
})
</script>

<style lang="postcss" scoped>
.biographys__list li:not(:first-child) {
  margin-top: 26px;
}

.biographys__img img {
  width: 100%;
}

.biographys__title {
  margin-top: 12px;
  font-size: var(--largeMiddleFontSize);
}

.biographys__date {
  font-size: var(--minFontSize);
  color: var(--gray);
  margin-top: 10px;
}

.biographys__text {
  margin-top: 10px;
  white-space: pre-line;
}

.biographys__text--omit {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.biographys__more {
  text-align: right;
  margin-top: 10px;
}
</style>
