import { SHeading } from '@/components/SHeading'
import { SLabel } from '@/components/SLabel'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/SLabel', module)
  .addDecorator(withKnobs)
  .add('Label', () => {
    const props = {
      label: text('Label text', 'Label text', 'Required Props'),
      isFullwidth: boolean('isFullwidth', false, 'Optional Props'),
      isInline: boolean('isInline', false, 'Optional Props'),
      isReversed: boolean('isReversed', false, 'Optional Props'),
      isOptional: boolean('isOptional', true, 'Optional Props')
    }

    const defaultSlot = text('Default', 'SomeInputComponent', 'Slots')

    return {
      render: h => (
        <StoryContainer>
          <SHeading level="1">Label</SHeading>
          <p>
            <code>SLabel</code> provides labels for all form inputs. It is included automatically
            for all input components in this library, and is designed to wrap components.
          </p>

          <SHeading level="2">Example</SHeading>
          <SLabel {...{ props }}>
            {/* Labels behave best with block elements. */}
            <div style="text-transform: none; font-weight: 300;">
              <code>{'<' + defaultSlot + ' />'}</code>
            </div>
          </SLabel>

          <PropList component={SLabel} />
        </StoryContainer>
      )
    }
  })