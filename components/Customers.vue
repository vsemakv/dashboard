<template lang="pug">
.customers 
    p.customers__user Hello {{ user.name }} &#128075;&#127996;,
    .container
        .customers__header
            .customers__header--text
                p All Customers
                p Active Members
            .customers__header--input
                img(src="images/svg/Search.svg")
                input(placeholder="Search")
        .table-container
            table.customers__table
                thead
                    tr
                        th Customer Name
                        th Company
                        th Phone Number
                        th Email
                        th Country
                        th Status
                tbody
                    tr(v-for="customer in paginatedCustomers" :key="customer.email")
                        td {{ customer.name }}
                        td {{ customer.company }}
                        td {{ customer.phone }}
                        td {{ customer.email }}
                        td {{ customer.country }}
                        td
                            span(:class="{'status-active': customer.status === 'Active', 'status-inactive': customer.status === 'Inactive'}") {{ customer.status }}

        .customers__footer
            .customers__footer--text
                p Showing data {{ startItem }} to {{ endItem }} of {{ customers.length }} entries
            .customers__footer--pagination
                button(@click="goToPage(currentPage - 1)" :disabled="currentPage === 1") ‹
                button(v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{ 'active': page === currentPage }") {{ page }}
                button(@click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages") ›

</template>

<script>
import { mapGetters } from "vuex";
    export default {
        computed: {
            ...mapGetters({
                user: "user/getUser"
            }),
            paginatedCustomers() {
                const start = (this.currentPage - 1) * this.itemsPerPage;
                const end = start + this.itemsPerPage;
                return this.customers.slice(start, end);
            },
            totalPages() {
                return Math.ceil(this.customers.length / this.itemsPerPage);
            },
            startItem() {
                return (this.currentPage - 1) * this.itemsPerPage + 1;
            },
            endItem() {
                return Math.min(this.currentPage * this.itemsPerPage, this.customers.length);
            }
        },
        data() {
            return {
                currentPage: 1,
                itemsPerPage: 8,
                customers: [
                    {
                        id: 0,
                        name: "Jane Cooper",
                        company: "Microsoft",
                        phone: "(225) 555-0118",
                        email: "jane@microsoft.com",
                        country: "United States",
                        status: "Active"
                    },
                    {
                        id: 1,
                        name: "Floyd Miles",
                        company: "Yahoo",
                        phone: "(205) 555-0100",
                        email: "floyd@yahoo.com",
                        country: "Kiribati",
                        status: "Inactive"
                    },
                    {
                        id: 2,
                        name: "Ronald Richards",
                        company: "Adobe",
                        phone: "(302) 555-0107",
                        email: "ronald@adobe.com",
                        country: "Israel",
                        status: "Inactive"
                    },
                    {
                        id: 3,
                        name: "Marvin McKinney",
                        company: "Tesla",
                        phone: "(252) 555-0126",
                        email: "marvin@tesla.com",
                        country: "Iran",
                        status: "Active"
                    },
                    {
                        id: 4,
                        name: "Jerome Bell",
                        company: "Google",
                        phone: "(629) 555-0129",
                        email: "jerome@google.com",
                        country: "Réunion",
                        status: "Active"
                    },
                    {
                        id: 5,
                        name: "Kathryn Murphy",
                        company: "Microsoft",
                        phone: "(406) 555-0120",
                        email: "kathryn@microsoft.com",
                        country: "Curaçao",
                        status: "Active"
                    },
                    {
                        id: 6,
                        name: "Jacob Jones",
                        company: "Yahoo",
                        phone: "(208) 555-0112",
                        email: "jacob@yahoo.com",
                        country: "Brazil",
                        status: "Active"
                    },
                    {
                        id: 7,
                        name: "Kristin Watson",
                        company: "Facebook",
                        phone: "(704) 555-0127",
                        email: "kristin@facebook.com",
                        country: "Åland Islands",
                        status: "Inactive"
                    },
                    {
                        id: 0,
                        name: "Vlad Semak",
                        company: "Unicorn",
                        phone: "(099) 222-1050",
                        email: "vlad@semak.com",
                        country: "Ukraininan States",
                        status: "Active"
                    },
                ]
            }
        },
        methods: {
            goToPage(page) {
                if (page >= 1 && page <= this.totalPages) {
                    this.currentPage = page;
                    console.log("yes");
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.customers { 
    padding: 12px 24px;

    @media screen and (min-width: 1440px) {
        // width: 100%;
        padding: 41px 95px 0px 377px;
    }
    &__header {
        padding: 16px;

        &--text{ 
            margin-bottom: 8px;
            p { 
                &:first-child { 
                    font-weight: 500;
                    font-size: 24px;

                    @media screen and (min-width: 1440px) {
                        font-size: 22px;
                    }
                }
                &:last-child { 
                    font-weight: 300;
                    font-size: 14px;
                    color: #16C098;
                }
            }
        }
        &--input { 
            display: flex;
            align-items: center;
            background-color: #F9FBFF;
            padding: 8px;
            border-radius: 8px;

            input { 
                background-color: transparent;
                border: none;
                width: 100%;
                height: 100%;
                outline: none;
            }

            img {
                @media screen and (min-width: 1440px) {
                    width: 24px;
                    height: 24px;
                    margin-right: 8px;
                }
            }
            @media screen and (min-width: 1440px) {
                padding: 7px 8px;
                border-radius: 10px;
                height: 38px;
                width: 216px;
            }
        }

        @media screen and (min-width: 1440px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 50px 24px 38px;

        }
    }
    &__table { 
            width: 100%;
            border-collapse: collapse;
            thead {
                tr {
                    th {
                        padding: 10px;
                        text-align: left;
                        font-weight: normal;
                        color: #B5B7C0; 
                        background-color: #fff;
                        border-bottom: 1px solid #EEEEEE;

                        @media screen and (min-width: 1440px) {
                            &:first-child { 
                                padding-left: 38px;
                            }
                            &:last-child { 
                                padding: 14px 24px 14px 35px;
                            }
                        }
                        @media screen and (min-width: 1440px) {
                            font-size: 14px;
                            font-weight: 300;
                            padding: 14px 24px;
                        }
                    }
                }
            }

            tbody {
                tr {
                    td {
                        padding: 10px;
                        white-space: nowrap;
                        position: relative;
                        border-bottom: 1px solid #EEEEEE;

                        
                        @media screen and (min-width: 1440px) {
                            font-size: 14px;
                            font-weight: 300;
                            border: none;
                            padding: 24px 24px;
                        }
                        &:nth-child(n+2):nth-child(-n+5) {
                            @media screen and (min-width: 1440px) {
                                border-bottom: 1px solid #EEEEEE;
                            }
                        }
                        

                        .status-active {
                            display: block;
                            color: #008767;
                            background-color: rgba(22, 192, 152, .38);
                            padding: 4px 12px;
                            border-radius: 5px;
                            border: 1px solid #00B087;
                            font-size: 14px;
                            text-align: center;
                        }

                        .status-inactive {
                            display: block;
                            color: #DF0404;
                            background-color: #FFC5C5;
                            padding: 4px 12px;
                            border: 1px solid #DF0404;
                            border-radius: 5px;
                            font-size: 14px;
                            text-align: center;
                        }
                    }
                }
            }
    }
    &__footer{ 
        display: flex;
        align-items: center;
        flex-direction: column-reverse;

        padding: 20px 10px 10px 10px;

        @media screen and (min-width: 1440px) {
            flex-direction: row;
            justify-content: space-between;
            padding: 32px 40px 40px 38px; 
        }
        &--text { 
            color: #B5B7C0;
            font-weight: 400;
            font-size: 14px;
        }
        &--pagination { 
            margin-bottom: 8px;
            button { 
                background: none;
                border: none;
                padding: 5px 10px;
                margin: 0 8px;
                cursor: pointer;
                background-color: #F5F5F5;

                .active { 
                    font-weight: bold;
                    color: blue;
                }

                &:disabled { 
                    cursor: not-allowed;
                    color: gray;
                }
            }
        }
    }
    &__user { 
        font-size: 24px;
        margin-bottom: 8px;

        @media screen and (min-width: 1440px) {
            margin-bottom: 51px;
        }
    }
}
.container { 
    background-color: #FFFFFF;
    border-radius: 30px;
}

.table-container {
  max-width: 100%;
  overflow-x: auto;
  height: 100%;
  min-height: 460px;
}

.customers__footer {
    text-align: center;
}

.pagination button {
    background: none;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.customers__footer--pagination button.active {
    background-color: #5932EA; 
    color: white;
    border-radius: 4px;
}
.customers__table tbody tr td{
    &:first-child {
        @media screen and (min-width: 1440px) {
            padding-left: 38px;
        }
        &::after { 
            @media screen and (min-width: 1440px) {
                content: "";
                position: absolute;
                bottom: -0.5px;
                left: 40px;
                right: 0px;
                height: 1px;
                background-color: #EEEEEE;
            }
        }
    }
    &:last-child { 
        @media screen and (min-width: 1440px) {
            padding-right: 44px;
        }
        &::after { 
            content: "";
            position: absolute;
            bottom: -0.5px;
            right: 40px;
            left: 0px;
            height: 1px;
            background-color: #EEEEEE;
        }
    }
  
}
</style>