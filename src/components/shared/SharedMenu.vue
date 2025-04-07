<script setup lang="ts">
  import { ref } from 'vue'

  const props = defineProps({
    colorType: {
      type: String,
      required: true
    }
  })

  const menuItems: string[] = ['Home', 'Shop', 'Account', 'Pages', 'Blog', 'Docs/Components']
  const hoverIndex = ref<number | null>(null)
</script>

<template>
  <nav>
    <ul class="menu">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        class="menu-item"
        :class="[`menu-item--${props.colorType}`]"
        @mouseenter="hoverIndex = index"
        @mouseleave="hoverIndex = null"
      >
        <span class="link-content">
          {{ item }}
          <span class="underline" :class="{ 'underline-active': hoverIndex === index }" />
        </span>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  @use '../../styles/colors.scss' as colors;

  .menu {
    display: flex;
    gap: 21px;

    &-item {
      cursor: pointer;
      font-size: 1em;
      font-weight: 600;
      letter-spacing: 0.2px;
      line-height: 1.25em;
      list-style-type: none;
      padding: 10px;
      position: relative;
      transition: color 0.3s ease;

      &--primary {
        color: colors.$primaryFontColor;
      }

      &--secondary {
        color: colors.$secondaryFontColor;
      }

      &--tertiary {
        color: colors.$tertiaryFontColor;
      }

      &--active {
        color: colors.$accentElementColor;
      }

      .link-content {
        display: block;
        position: relative;
      }

      .underline {
        background: colors.$accentElementColor;
        bottom: -5px;
        height: 2px;
        left: 0;
        position: absolute;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        width: 100%;

        &-active {
          transform: scaleX(1);
        }
      }

      &:hover {
        color: colors.$accentElementColor;
      }
    }
  }

  @media (width <= 700px) {
    .menu {
      align-items: center;
      flex-direction: column;
      gap: 16px;

      &-item {
        padding: 0;
      }
    }
  }
</style>
