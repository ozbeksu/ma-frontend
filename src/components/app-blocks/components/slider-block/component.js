import Swiper, {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default class {
  onCreate() {
    this.state = {swiperClass: '.swiper', swiper: null};

    this.state.swiper = new Swiper(this.state.swiperClass, {
      modules: [Navigation],
      direction: 'horizontal',
      effect: 'fade',
      fadeEffect: {crossFade: true},
      autoplay: {delay: 5000},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
