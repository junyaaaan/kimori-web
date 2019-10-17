<template>
  <div class="wrapper">
    <GlobalHeader />
    <nuxt />
    <SnsArea />
    <GlobalFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GlobalHeader from '~/components/organism/GlobalHeader.vue'
import GlobalFooter from '~/components/organism/GlobalFooter.vue'
import SnsArea from '~/components/organism/SnsArea.vue'

export default Vue.extend({
  components: {
    GlobalHeader,
    GlobalFooter,
    SnsArea
  }
})
</script>
