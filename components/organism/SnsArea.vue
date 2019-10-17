<template>
  <ul class="sns-area">
    <li><img src="~/assets/images/common/icon_tw.png" alt="" /></li>
    <li><img src="~/assets/images/common/icon_fb.png" alt="" /></li>
    <li><img src="~/assets/images/common/icon_insta.png" alt="" /></li>
    <li><img src="~/assets/images/common/icon_line.png" alt="" /></li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss" scoped>
.sns-area {
  display: flex;
  width: 240px;
  margin: 0 auto;
  justify-content: space-between;
}

.sns-area li {
  width: 42px;
}

.sns-area li img {
  width: 100%;
}
</style>
