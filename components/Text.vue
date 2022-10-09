<script lang="ts" setup>
const props = defineProps(['propsClass','text'])

</script>

<template>
  <div :class="props.propsClass">
    {{ props.text}}
  </div>
</template>

<style scoped></style>
