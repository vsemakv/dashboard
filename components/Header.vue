<template lang="pug">
    .header 
        .header__logo
            img(src="/images/svg/Logo.svg" alt="Logo Dashboard").header__logo
            n-link(to="/")
                h1 Dashboard 
                    span v.01
        .header__burger(@click="toggleDropdown")
            li(:class="{'opened-burger-top': isShowBurger, 'opened-burger': true}")
            li(:class="{'opened-burger-center': isShowBurger, 'opened-burger': true}")
            li(:class="{'opened-burger-bottom': isShowBurger, 'opened-burger': true}")
        
</template>

<script>
import { mapGetters } from "vuex";
    export default {
        computed: { 
            ...mapGetters({
                isShowBurger: "burger/getBurger",
            })
        },
        methods: {
            toggleDropdown(){
                this.$store.dispatch("burger/toggle");
            },
        },
    }
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    background-color: #FFFFFF;
    padding: 16px 24px;
    z-index: 2;

    &__logo {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 37px;
            height: 37px;
            margin-right: 8px;
        }
        h1 {
            font-size: 26px;
            span {
                font-size: 10px;
                color: #838383;
            }
        }
    }

    &__burger {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        width: 30px;
        height: 20px; 

        & > li {
            width: 30px;
            height: 4px; 
            border-radius: 5px;
            background-color: #5932EA; 
            transition: all 0.3s ease; 
            list-style: none; 
            position: absolute;
            left: 0; 
        }
    }
}
.header__burger > li:nth-child(1) { top: 0; }
.header__burger > li:nth-child(2) { top: 50%; transform: translateY(-50%); }
.header__burger > li:nth-child(3) { bottom: 0; }

.opened-burger {
    position: absolute;
}
.opened-burger-top {
    transform: rotate(45deg);
    top: 10px !important;
}

.opened-burger-center {
    opacity: 0;
    top: 15px; 
}

.opened-burger-bottom {
    transform: rotate(-45deg);
    top: 10px;
}
</style>
