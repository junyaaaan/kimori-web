<template>
  <MainWrapper>
    <ContentsWrap>
      <section>
        <HeadingBasic :tag="1" :level="1">Gallery</HeadingBasic>

        <SectionInner>
          <ul class="sorter">
            <li><nuxt-link to="/gallery/">ALL</nuxt-link></li>
            <li
              v-for="(tag, index) in tagList"
              :key="index"
              class="sorter__item"
            >
              <nuxt-link :to="`/gallery/${tag}/`">{{ tag }}</nuxt-link>
            </li>
          </ul>

          <ul class="list">
            <li
              v-for="(gallery, index) in gallerys"
              :key="index"
              class="list__item"
            >
              <nuxt-link :to="`/gallery/detail/${gallery.id}/`">
                <picture>
                  <source
                    :srcset="
                      `
                        ${require(`~/assets/images/gallery/${gallery.id}/${gallery.images[0]}.webp`)} 1x,
                        ${require(`~/assets/images/gallery/${gallery.id}/${gallery.images[0]}@2x.webp`)} 2x
                      `
                    "
                    type="image/webp"
                  />
                  <img
                    :src="
                      require(`~/assets/images/gallery/${gallery.id}/${gallery.images[0]}.jpg`)
                    "
                    alt=""
                    loading="lazy"
                  />
                </picture>
                <p class="list__title">{{ gallery.title }}</p>
                <ul class="tag-list">
                  <li v-for="(tag, tagIndex) in gallery.tag" :key="tagIndex">
                    {{ tag }}
                  </li>
                </ul>
              </nuxt-link>
            </li>
          </ul>

          <ThePager
            class="pager-wrap"
            :total-page-num="totalPageNum"
            :page-num="pageNum"
          />
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
import ThePager from '~/components/molecules/ThePager.vue'

export default Vue.extend({
  components: {
    MainWrapper,
    ContentsWrap,
    HeadingBasic,
    SectionInner,
    ThePager
  },
  watchQuery: ['page'],
  asyncData({ store, params, query }) {
    // ルートに応じたジャンル変更
    const initialGenre = params.genre ? params.genre : 'ALL'
    store.commit('gallery/changeCurrentGenre', initialGenre)

    // クエリに応じたページ数に変更
    const initialPageNum = (): number => {
      if (!query.page) return 1

      return Number(query.page)
    }
    store.commit('gallery/changePageNum', initialPageNum())
  },
  computed: {
    tagList() {
      return this.$store.getters['gallery/tagList']
    },

    gallerys() {
      return this.$store.getters['gallery/refineGenre']
    },

    totalPageNum() {
      return this.$store.getters['gallery/totalPageNum']
    },

    pageNum(): number {
      return this.$store.state.gallery.pageNum
    }
  }
})
</script>

<style lang="postcss" scoped>
.sorter {
  display: flex;
  justify-content: center;
  font-size: 13px;
}

.sorter > li:not(:last-child) {
  margin-right: 5px;
}

.sorter > li:not(:last-child)::after {
  content: '|';
  color: #cccccc;
  margin-left: 5px;
}

.list {
  margin-top: 28px;
}

.list > li {
  box-shadow: 0px 1px 3px #00000029;
  padding: 10px;
}

.list > li > a {
  text-decoration: none;
}

.list > li:not(:first-child) {
  margin-top: 48px;
}

.list > li img {
  width: 100%;
}

.list__title {
  margin-top: 10px;
  color: #695b5b;
}

.tag-list {
  color: #cccccc;
  font-size: 11px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2px;
}

.tag-list li {
  margin-right: 5px;
}

.pager-wrap {
  margin-top: 16px;
}
</style>
