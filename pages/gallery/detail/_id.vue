<template>
  <MainWrapper>
    <ContentsWrap>
      <section>
        <HeadingBasic :tag="1" :level="1">Gallery</HeadingBasic>

        <SectionInner>
          <img
            :src="require(`~/assets/images/gallery/${detailData.id}/img.png`)"
            :srcset="
              `${require(`~/assets/images/gallery/${detailData.id}/img.png`)} 1x,
              ${require(`~/assets/images/gallery/${detailData.id}/img@2x.png`)} 2x`
            "
            alt=""
            class="main-image"
          />
          <HeadingBasic :tag="2" :level="2" class="heading"
            >{{ detailData.title }}
          </HeadingBasic>
          <p class="date">
            <time>{{ detailData.date }}</time>
          </p>
          <div class="text">
            {{ detailData.text }}
          </div>
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
    store.commit('gallery/changeCurrentDetailId', Number(params.id))
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

.date {
  line-height: 1;
}

.date time {
  font-size: 11px;
  color: #ccc;
}

.text {
  margin-top: 16px;
  line-height: 2;
  word-wrap: break-word;
}

.back-link {
  margin-top: 32px;
}
</style>
