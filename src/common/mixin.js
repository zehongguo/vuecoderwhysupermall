import BackTop from '../components/contert/backTop/BackTop.vue';

export const BackTopMixin = {
  data() {
    return {
      isBackTop: false,
    };
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    isShowBackTop(position) {
      this.isBackTop = -position.y > 1000 ? true : false;
    }
  },
  components: {
    BackTop
  },

};