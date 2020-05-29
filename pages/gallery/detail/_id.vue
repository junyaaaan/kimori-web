<template>
  <MainWrapper>
    <ContentsWrap>
      <section>
        <HeadingBasic :tag="1" :level="1">{{ detailData.title }}</HeadingBasic>

        <SectionInner>
          <img
            v-for="(image, index) in detailData.images"
            :key="index"
            :src="
              require(`~/assets/images/gallery/${detailData.id}/${detailData.images[0]}.jpg`)
            "
            :srcset="
              `${require(`~/assets/images/gallery/${detailData.id}/${detailData.images[0]}.webp`)} 1x,
              ${require(`~/assets/images/gallery/${detailData.id}/${detailData.images[0]}@2x.webp`)} 2x`
            "
            alt=""
            class="main-image"
          />

          <ul class="info">
            <li>
              <time>{{ detailData.year }}</time>
            </li>

            <li>{{ detailData.size }}</li>
            <li>{{ detailData.technique }}</li>
            <li :class="{ 'price--soled': detailData.soled }">
              {{ detailData.price }}JPY
            </li>
          </ul>

          <p class="back-link">
            <nuxt-link to="/gallery/">&lt; Galleryへ戻る</nuxt-link>
          </p>
        </SectionInner>
      </section>
    </ContentsWrap>
  </MainWrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import MainWrapper from '~/components/molecules/MainWrapper.vue'
import ContentsWrap from '~/components/molecules/ContentsWrap.vue'
import HeadingBasic from '~/components/atoms/HeadingBasic.vue'
import SectionInner from '~/components/molecules/SectionInner.vue'

export default Vue.extend({
  components: {
    MainWrapper,
    ContentsWrap,
    HeadingBasic,
    SectionInner
  },
  asyncData({ params, store }) {
    store.commit('gallery/changeCurrentDetailId', params.id)
  },
  computed: {
    detailData() {
      return this.$store.getters['gallery/detailData'][0]
    }
  }
})
</script>

<style lang="postcss" scoped>
.main-image {
  width: 100%;
}

.heading {
  margin-top: 16px;
}

.info {
  margin-top: 12px;
}

.price--soled {
  text-decoration: line-through;
}

.back-link {
  margin-top: 32px;
}
</style>
