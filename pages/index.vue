<template>
  <MainWrapper>
    <h1>
      <img
        src="~/assets/images/top/img-main.png"
        srcset="
          ~/assets/images/top/img-main.png    1x,
          ~/assets/images/top/img-main@2x.png 2x
        "
        alt="Kimori Keiichiro ArtWork 肉体概念"
      />
    </h1>

    <ContentsWrap class="top-contents">
      <p class="main-lead">
        自己紹介とこのサイトはこういうところ<br />
        っていうのをエモくかいたりする<br />
        自己紹介とこのサイトはこういうところっていうのをエモくかいたりする自己紹介とこのサイトはこういうところ<br />
        っていうのをエモくかいたりする<br />
        自己紹介とこのサイトはこういうところ<br />
        っていうのをエモくかいたりする自己紹介とこのサイトはこういうところっていうのをエモくかいたりする
      </p>

      <section>
        <HeadingBasic :tag="2" :level="1">Biography</HeadingBasic>
      </section>
    </ContentsWrap>
  </MainWrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import MainWrapper from '~/components/molecules/MainWrapper.vue'
import ContentsWrap from '~/components/molecules/ContentsWrap.vue'
import HeadingBasic from '~/components/atoms/HeadingBasic.vue'

export default Vue.extend({
  components: {
    MainWrapper,
    ContentsWrap,
    HeadingBasic
  }
})
</script>

<style lang="postcss">
h1 img {
  width: 100%;
}

.top-contents {
  margin-top: 42px;
}
</style>
