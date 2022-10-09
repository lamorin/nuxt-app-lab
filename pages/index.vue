<script lang="ts" setup>
import DefaultLayout from '~~/layouts/DefaultLayout.vue';

const slotName = "header"
</script>

<template>
  <DefaultLayout>
    <template #slotName><div class="slot">footer</div></template>
  </DefaultLayout>
  <div>
    Page: foo
  </div>
</template>

<style scoped>
  .slot {
    border: 5px solid red;
    margin: 1%;
  }
</style>
