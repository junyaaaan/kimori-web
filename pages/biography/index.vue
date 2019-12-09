<template>
  <MainWrapper>
    <ContentsWrap>
      <section>
        <HeadingBasic :tag="1" :level="1">Biography</HeadingBasic>

        <SectionInner>
          <BiographyList :biographys="biographys" :omit="false" />
        </SectionInner>
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
import SectionInner from '~/components/molecules/SectionInner.vue'
import BiographyList from '~/components/organism/BiographyList.vue'

export default Vue.extend({
  components: {
    MainWrapper,
    ContentsWrap,
    HeadingBasic,
    SectionInner,
    BiographyList
  },
  computed: {
    ...mapGetters({
      biographys: 'biography/all'
    })
  }
})
</script>
