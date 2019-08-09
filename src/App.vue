<template>
  <v-app>
    <core-filter></core-filter>

    <core-toolbar></core-toolbar>

    <core-drawer></core-drawer>

    <core-view></core-view>
  </v-app>
</template>

<style lang="scss">
  @import './styles/index.scss';

  /* Remove in 1.2 */
  .v-datatable thead th.column.sortable i {
    vertical-align: unset;
  }
</style>

<script lang="ts">
import Vue from 'vue';
import CoreFilter from './components/core/Filter.vue';
import CoreToolbar from './components/core/Toolbar.vue';
import CoreView from './components/core/View.vue';
import CoreDrawer from './components/core/Drawer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    CoreFilter,
    CoreDrawer,
    CoreToolbar,
    CoreView,
  },
  data: () => ({
    //
  }),
});
</script>
