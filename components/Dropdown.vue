<template lang="pug">
    .dropdown(:class="{'open-dropdown': isShowBurger}")
        ul.dropdown__links
            li(v-for="link in sections" :key="link.id" :class="{'acitve-link': !link.isNuxt}").dropdown__links--item
                n-link(:to="link.route").dropdown__links--item-link 
                    img(:src="link.logo")
                    p {{ link.title }}
        .dropdown__user 
            img.dropdown__user--img(src="/images/Avatar.png")
            .dropdown__user--text
                p.dropdown__user--text-name {{ user.name }}
                p.dropdown__user--text-position {{ user.position }}
</template>

<script>
import { mapGetters } from "vuex";

    export default {
        computed: {
            ...mapGetters({
                isShowBurger: "burger/getBurger",
                user: "user/getUser"
            })
        },
        data() {
            return {
                sections: [
                    {
                            id: 0,
                            isNuxt: true,
                            title: "Dashboard",
                            route: "/",
                            logo: "/images/svg/dashboard.svg"
                        },
                        {
                            id: 1,
                            isNuxt: true,
                            title: "Product",
                            route: `/product`,
                            logo: "/images/svg/product.svg"
                        },
                        {
                            id: 2,
                            isNuxt: false,
                            title: "Customers",
                            route: "/customers",
                            logo: "images/svg/user.svg"
                        },
                        {
                            id: 3,
                            isNuxt: true,
                            title: "Income",
                            route: "/income",
                            logo: "images/svg/income.svg"
                        },
                        {
                            id: 4,
                            isNuxt: true,
                            title: "Promote",
                            route: "/promote",
                            logo: "images/svg/promote.svg"
                        },
                        {
                            id: 5,
                            isNuxt: true,
                            title: "Help",
                            route: "/help",
                            logo: "images/svg/help.svg"
                        },
                    ],
            }
        },
    }
</script>

<style lang="scss" scoped>
.dropdown{ 
    position: fixed;
    top: 0%;
    left: 0%;
    height: 0;
    overflow: hidden;
    width: 100%;
    background: #FFFFFF;
    transition: height 0.5s;

    z-index: 1;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    padding: 0px 28px;

    overflow-y: scroll;

    &__links{ 

        &--item { 
            position: relative;

            margin-bottom: 30px;
            padding: 12px;

            border-radius: 8px;

            &::after { 
                position: absolute;
                display: block;
                content: "";
                background-image: url("/images/svg/Arrow.svg");
                width: 24px;
                height: 24px;
                right: 8px;
                top: 50%;
                background-size: contain;
                transform: translateY(-50%);
            }
            &-link{ 
                display: flex;
                align-items: center;

                img {
                    margin-right: 14px;
                    width: 44px;
                    height: 44px;
                }
                p { 
                    font-size: 24px;
                    color: #9197B3;
                }
            }
        }
    }
    &__user{ 
        display: flex;

        img { 
            width: 42px;
            height: 42px;
            margin-right: 12px;
        }
        &--text{ 
            &-name { 
                font-size: 14px;

            }
            &-position {
                font-size: 12px;
                color: #757575;
            }
        }
    }
}
.open-dropdown {
    transition: height 0.5s;
    height: 100vh;
    padding: 100px 28px 28px 28px;
}
.acitve-link {
    background-color: #5932EA;
    border-radius: 8px;

    p { 
        color: white;
    }

    &::after { 
        position: absolute;
        display: block;
        content: "";
        background-image: url("/images/svg/Arrow-active.svg");
        width: 15px;
        height: 15px;
        right: 8px;
        top: 50%;
        background-size: contain;
        background-repeat: no-repeat;
        transform: translateY(-50%);
    }
}
</style>