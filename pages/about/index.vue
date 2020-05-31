<template>
  <MainWrapper>
    <ContentsWrap class="top-contents">
      <HeadingBasic :tag="1" :level="1">About</HeadingBasic>

      <ul class="message">
        <li>芸術は自由だ。</li>
        <li>自由でありたい。</li>
        <li>自由になりたい。</li>
        <li>私と作品とあなたとの間では。</li>
      </ul>

      <p class="name">Keiichiro Kimori</p>

      <div class="images-wrap">
        <ul class="images" :style="imagesWidth">
          <li v-for="(image, index) in images" :key="index">
            <img
              :src="require(`~/assets/images/about/${image}.jpg`)"
              :srcset="
                `
              ${require(`~/assets/images/about/${image}@2x.jpg`)} 2x,
              ${require(`~/assets/images/about/${image}.jpg`)} 1x
            `
              "
              alt=""
            />
          </li>
        </ul>
      </div>

      <section>
        <HeadingBasic :tag="2" :level="2">International</HeadingBasic>
        <ul class="info">
          <li v-for="(international, index) in internationals" :key="index">
            {{ international }}
          </li>
        </ul>
      </section>

      <section>
        <HeadingBasic :tag="2" :level="2">Solo Exhibition</HeadingBasic>
        <ul class="info">
          <li v-for="(soloExhibition, index) in soloExhibitions" :key="index">
            {{ soloExhibition }}
          </li>
        </ul>
      </section>

      <section>
        <HeadingBasic :tag="2" :level="2">Group Exhibitions</HeadingBasic>
        <ul class="info">
          <li v-for="(groupExhibition, index) in groupExhibitions" :key="index">
            {{ groupExhibition }}
          </li>
        </ul>
      </section>

      <section>
        <HeadingBasic :tag="2" :level="2">Awards</HeadingBasic>
        <ul class="info">
          <li v-for="(award, index) in awards" :key="index">
            {{ award }}
          </li>
        </ul>
      </section>

      <section>
        <HeadingBasic :tag="2" :level="2">Awards</HeadingBasic>
        <ul class="info">
          <li v-for="(award, index) in awards" :key="index">
            {{ award }}
          </li>
        </ul>
      </section>

      <section>
        <HeadingBasic :tag="2" :level="2">Education</HeadingBasic>
        <ul class="info">
          <li v-for="(education, index) in educations" :key="index">
            {{ education }}
          </li>
        </ul>
      </section>

      <section>
        <HeadingBasic :tag="2" :level="2">SNS</HeadingBasic>
        <ul class="info">
          <li v-for="(sns, index) in snss" :key="index">
            <a :href="sns.url" target="_blank">{{ sns.name }}</a>
          </li>
        </ul>
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
  },
  data() {
    return {
      images: ['img-kimori-01', 'img-kimori-02', 'img-kimori-03'],
      internationals: [
        '2014 Sasaran International Art Festival./Sasaran/Malaysia ',
        '2015 Yogyakarta International Art Festival/Yogyakarta/Indonesia',
        '2018 FACE TO FACE:INDIA 2018 International Art Festival/Udaipur/India',
        '2018 “Exhibitions and exchanges between Vietnamese artists and other Asian artists”/Hanoi/Vietnam',
        '2019 Nepal Art Camp/Siraha/Nepal',
        '2019 “International Fine Arts Exchange, Creation, Exhibition 2019 in Danang, Vietnam”/Danang/Vietnam'
      ],
      soloExhibitions: [
        '2012 Keiichiro Kimori Solo Exhibition/Gallery ArtdeMaA/Fukuoka/Japan',
        '2019 Physical Concept-Keiichiro Kimori Solo Exhibition-/410Gallery/Fukuoka/Japan',
        '2019 Keiichiro Kimori Solo Exhibition/Gallery Kaze/Fukuoka/Japan'
      ],
      groupExhibitions: [
        '2016 Malaysia, Japan & Philippines Fusion 3 Art Exhibition/Galeri Seni Mutiara/Pinang/Malaysia',
        '2015～2019 Asian International Art Exhibition/Fukuoka Asian Art Museum/Fukuoka/Japan'
      ],
      awards: [
        '2007 Purchase Award/ Kyushu Sangyo University Graduation Works Exhibition/Fukuoka/Japan',
        '2008 Incentive Award/ Rupa Exhibition/Fukuoka/Japan.',
        '2016 Grand Prize/Tenjin Art Biennale/Fukuoka Asian Art Museum/ Fukuoka/Japan'
      ],
      educations: [
        '2014～ Artistic anatomy/lecturer/Kyushu Sangyo University/Fukuoka/Japan'
      ],
      snss: [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/kimosaaaaan'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/kimori_art'
        }
      ]
    }
  },
  computed: {
    imagesWidth(): { width: string } {
      return {
        width: `${300 * this.images.length + 12 * (this.images.length - 1)}px`
      }
    }
  }
})
</script>

<style lang="postcss" scoped>
.message {
  font-size: 32px;
  animation-name: fadein;
  animation-duration: 2s;
  animation-iteration-count: initial;
}

@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.name {
  font-size: 40px;
  font-weight: bold;
}

.images-wrap {
  overflow-x: scroll;
}

.images {
  display: flex;
  justify-content: space-between;
}

.images li {
  width: calc((100% - 36px) / 3);
}

.images li img {
  width: 100%;
}

.info {
  margin-top: 16px;
}

.info li:not(:first-child) {
  margin-top: 10px;
}

@media screen and (min-width: 768px) {
  .images li {
    width: calc((100% - 36px) / 3);
  }
}
</style>
