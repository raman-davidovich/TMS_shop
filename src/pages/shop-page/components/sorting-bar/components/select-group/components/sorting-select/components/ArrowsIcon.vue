<script setup lang="ts">
  import UpArrowIcon from './UpArrowIcon.vue'
  import DownArrowIcon from './DownArrowIcon.vue'
</script>

<template>
  <div class="arrows-icon">
    <UpArrowIcon class="arrows-icon__icon" />
    <DownArrowIcon class="arrows-icon__icon" />
  </div>
</template>

<style scoped lang="scss">
  .arrows-icon {
    &__icon {
      height: 6px;
      width: 10px;
    }
  }
</style>
