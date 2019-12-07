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
        っていうのをvエモくかいたりする自己紹介とこのサイトはこういうところっていうのをエモくかいたりする
      </p>

      <section class="biographys">
        <HeadingBasic :tag="2" :level="1">Biography</HeadingBasic>
        <ul class="biographys__list">
          <li v-for="(biography, index) in biographys" :key="index">
            <p class="biographys__img">
              <img
                :src="
                  require(`~/assets/images/biography/${biography.id}/img.png`)
                "
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
            <p class="biographys__text">{{ biography.text }}</p>
            <p class="biographys__more">
              <nuxt-link :to="`/biography/${biography.id}/`">...more</nuxt-link>
            </p>
          </li>
        </ul>
      </section>
    </ContentsWrap>
  </MainWrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import MainWrapper from '~/components/molecules/MainWrapper.vue'
import ContentsWrap from '~/components/molecules/ContentsWrap.vue'
import HeadingBasic from '~/components/atoms/HeadingBasic.vue'

export default Vue.extend({
  components: {
    MainWrapper,
    ContentsWrap,
    HeadingBasic
  },
  computed: {
    ...mapGetters({
      biographys: 'biography/two'
    })
  }
})
</script>

<style lang="postcss" scoped>
h1 img {
  width: 100%;
}

.top-contents {
  margin-top: 42px;
}

.biographys__list {
  margin-top: 16px;
}

.biographys__list li:not(:first-child) {
  margin-top: 16px;
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
  white-space: pre-wrap;
  height: 5em;
  overflow: hidden;
}

.biographys__more {
  text-align: right;
  margin-top: 10px;
}
</style>
