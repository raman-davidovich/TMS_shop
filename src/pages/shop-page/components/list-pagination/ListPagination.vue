<script setup lang="ts">
  import RightArrowIcon from './components/RightArrowIcon.vue'
  import LeftArrowIcon from './components/LeftArrowIcon.vue'

  const props = defineProps<{
    currentPage: number
    totalPages: number
  }>()

  const emit = defineEmits<{
    (e: 'update:page', value: number): void
  }>()

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > props.totalPages) return
    emit('update:page', newPage)
  }
</script>

<template>
  <div class="list-pagination" v-if="totalPages > 1">
    <button @click="handlePageChange(props.currentPage - 1)" :disabled="props.currentPage === 1">
      <LeftArrowIcon class="list-pagination__icon" />
    </button>
    <button
      v-for="page in totalPages"
      :key="page"
      @click="handlePageChange(page)"
      :class="{ active: page === props.currentPage }"
    >
      {{ page }}
    </button>
    <button
      @click="handlePageChange(props.currentPage + 1)"
      :disabled="props.currentPage === totalPages"
    >
      <RightArrowIcon class="list-pagination__icon" />
    </button>
  </div>
</template>

<style scoped lang="scss">
  @use '@/styles/colors.scss' as colors;

  .list-pagination {
    display: flex;
    gap: 17px;
    justify-content: center;
    margin-top: 40px;
    padding: 22px 0 23px;

    & button {
      align-items: center;
      border: 1px solid colors.$disabledBorderColor;
      border-radius: 5px;
      color: colors.$disabledBorderColor;
      cursor: pointer;
      display: flex;
      font-family: Roboto, sans-serif;
      font-weight: 500;
      justify-content: center;
      letter-spacing: 0.2px;
      line-height: 1em;
      outline: none;
      padding: 12px 15px;
      transition: all 0.3s ease;

      &:first-of-type,
      &:last-of-type {
        padding: 13px 20px 13px 22px;
      }

      &:hover:not(:disabled) {
        border-color: colors.$accentElementColor;
        color: colors.$accentElementColor;
        transform: translateY(-3px);
      }

      &:focus-visible:not(:disabled) {
        box-shadow: 0 0 0 4px rgba(colors.$accentElementColor, 0.8);
        transform: translateY(-3px);
      }

      /* stylelint-disable-next-line selector-no-qualifying-type */
      &.active {
        background-color: colors.$accentElementColor;
        border-color: colors.$accentElementColor;
        border-radius: 10px;
        color: colors.$primaryFontColor;
        cursor: default;

        &:hover {
          color: colors.$primaryFontColor;
          transform: translateY(0);
        }
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    &__icon {
      height: 14px;
      width: 8px;
    }
  }
</style>
