<template>
  <swiper
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="flex h-full"
  >
    <swiper-slide class="bg-white">
      <div class="w-full h-full">
        <img src="https://picsum.photos/1920/1080?random=1">
      </div>
    </swiper-slide>
    <swiper-slide class="bg-white ">
      <div class="w-full h-full">
        <img src="https://picsum.photos/1920/1080?random=2">
      </div>
    </swiper-slide>
    <swiper-slide class="bg-white">
      <div class="w-full h-full">
        <img src="https://picsum.photos/1920/1080?random=3">
      </div>
    </swiper-slide>

  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import '../style.scss';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>
<style scoped>

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
