<template>
  <transition name="fade">
    <div
      :class="classList"
      class="form-validation"
    >
      <div
        v-if="icons[validationState] && hasIcon"
        class="form-validation__icon"
      >
        <SIcon
          :icon="icons[validationState]"
          :icon-color="iconColors[validationState] || 'night'"
        />
      </div>

      <div class="form-validation__text">
        <slot>{{ validationText }}</slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { SIcon } from '@/components/SIcon'
import { states } from './options'

export default {
  name: 'SFormValidation',

  components: {
    SIcon
  },

  props: {
    validationText: {
      type: String,
      default: ''
    },

    validationState: {
      type: String,
      default: 'error',
      validator: v => {
        return (
          states.includes(v) ||
          console.error(`\`validationState\` should be one of ${states.join(', ')}`)
        )
      }
    },

    icon: {
      type: String,
      default: ''
    },

    hasIcon: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      iconColors: {
        success: 'green',
        warning: 'gold',
        error: 'red'
      }
    }
  },

  computed: {
    classList() {
      return {
        [`form-validation--${this.validationState}`]: this.validationState
      }
    },

    icons() {
      if (this.icon) return { [this.validationState]: this.icon }

      return {
        success: 'check-circle',
        warning: 'alert-triangle',
        error: 'alert-circle'
      }
    }
  }
}
</script>