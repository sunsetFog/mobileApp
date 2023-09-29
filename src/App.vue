<template>
    <div class="watermark" v-if="watermark_list.indexOf($route.path) != -1"></div>
    <router-view />
    <PopupUnit></PopupUnit>
</template>

<script>
import PopupUnit from '@/components/popupUnit/index';
export default {
    name: "App",
    components: { PopupUnit },
    data() {
        return {
            watermark_list: [
                '/home',
                '/priceManage/PriceAnalysis',
                '/priceManage/index',
                '/receivable/AR'
            ]
        };
    },
    watch: {

    },
    methods: {

    }
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    .watermark {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: #001018;
        z-index: -1;
    }
}
</style>
