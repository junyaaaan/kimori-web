<template>
  <ul class="sns-area">
    <li>
      <img
        src="~/assets/images/common/icon_fb.png"
        srcset="
          ~/assets/images/common/icon_fb.png    1x,
          ~/assets/images/common/icon_fb@2x.png 2x
        "
        alt="share facebook"
      />
    </li>
    <li>
      <img
        src="~/assets/images/common/icon_insta.png"
        srcset="
          ~/assets/images/common/icon_insta.png    1x,
          ~/assets/images/common/icon_insta@2x.png 2x
        "
        alt="share instagram"
      />
    </li>
    <li>
      <img
        src="~/assets/images/common/icon_line.png"
        srcset="
          ~/assets/images/common/icon_line.png    1x,
          ~/assets/images/common/icon_line@2x.png 2x
        "
        alt="share line"
      />
    </li>
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
