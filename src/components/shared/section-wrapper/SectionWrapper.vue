<script setup lang="ts">
  defineProps<{
    title?: string
    isMarginNarrow?: boolean
  }>()
</script>

<template>
  <section class="section-wrapper">
    <h3 class="section-wrapper__title" :class="{ 'section-wrapper__title_narrow': isMarginNarrow }">{{ title }}</h3>
    <slot />
  </section>
</template>

<style scoped lang="scss">
  @use '@styles/spacing.scss' as spacing;

  .section-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 155px;

    @include spacing.folder {
      padding: 30px;
    }

    &__title {
      font-size: 1.5em;
      font-weight: 700;
      letter-spacing: 0.1px;
      line-height: 1.5em;
      margin: 0 0 50px;
      padding: 10px;

      @include spacing.phone {
        margin: 0 0 22px;
      }

      &_narrow {
        margin-bottom: 15px;

        @include spacing.phone {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
