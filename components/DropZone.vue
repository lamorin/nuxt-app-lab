<script lang="ts" setup>

function setActive() {
  console.log("dragenter")
}

function setInactive() {
  console.log("dragleave")
}

function onDrop() {
  console.log("dropped")
}

</script>

<template>
  <div>
    <div :data-active="active" @dragenter.prevent="setActive" @dragover.prevent="setActive" @dragleave.prevent="setInactive" @drop.prevent="onDrop">		<slot :dropZoneActive="active"></slot>
	</div>
  </div>
</template>

<style scoped></style>
