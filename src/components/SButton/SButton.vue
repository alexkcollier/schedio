<template>
  <button
    v-bind="$attrs"
    :class="classList"
    class="button"
    v-on="$listeners">
    <slot/>
  </button>
</template>

<script>
import { colors, sizes } from './options.js'

export default {
  name: 'SButton',

  props: {
    buttonColor: {
      type: String,
      default: '',
      validator: value => {
        if (!value || colors.includes(value)) return true

        return console.error(`\`buttonColor\` ${value} not found. Allowed colors: ${[...colors]}`)
      }
    },

    buttonSize: {
      type: String,
      default: '',
      validator: value => {
        if (!value || sizes.includes(value)) return true

        return console.error(`\`buttonSizes\` ${value} not found. Allowed sizes: ${sizes}`)
      }
    }
  },

  computed: {
    classList() {
      return [
        // Handles storybook default
        this.buttonColor ? `button--color-${this.buttonColor}` : 'button--color-green',
        this.buttonSize ? `button--size-${this.buttonSize}` : ''
      ]
    }
  }
}
</script>