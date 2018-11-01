import { SCheckbox } from '@/components/SCheckbox'
import { SHeading } from '@/components/SHeading'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/SCheckbox', module)
  .addDecorator(withKnobs)
  .add('Checkbox', () => {
    const props = {
      ...withAttrsAsProps({ id: 'base-checkbox', name: 'base-checkbox', label: 'Base Checkbox' }),
      isReversed: boolean('isReversed', false, 'Optional Props')
    }

    const attrs = withUnboundAttrs({ value: 'base-checkbox' })

    return {
      render: h => (
        <StoryContainer>
          <SHeading level="1">Checkbox</SHeading>
          <p>
            Checkboxes provide the ability to make a range of selections (none, one, or multiple).
            They can also be used to provide consent, or indicate agreement.
          </p>

          <SHeading level="2">Example</SHeading>
          <SCheckbox {...{ props }} {...{ attrs }} />

          <PropList component={SCheckbox} />
        </StoryContainer>
      )
    }
  })