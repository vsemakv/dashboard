<template lang="pug">
  .page
    Header
    Dropdown
    Customers
</template>

<script>

import Customers from '../components/Customers.vue';
import Dropdown from '../components/Dropdown.vue';
import Header from '../components/Header.vue';
  export default {
    components: {
      Header, Dropdown, Customers
    },
    
  }
</script>

<style lang="scss" scoped>

</style>