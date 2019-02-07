import { shallowMount } from '@vue/test-utils'
import SHero from '@/components/SHero/SHero.vue'
import * as options from '@/components/SHero/options'

describe('SHero.vue', () => {
  let wrapper
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})

  beforeEach(() => {
    wrapper = shallowMount(SHero, {
      slots: {
        head: 'Header Content',
        default: 'Body Content',
        foot: 'Foot Content'
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('has a header', () => {
    expect(wrapper.vm.$slots.head).toBeTruthy()
  })

  it('has a body', () => {
    expect(wrapper.vm.$slots.default).toBeTruthy()
  })

  it('requires a default slot', () => {
    shallowMount(SHero)
    expect(errorSpy).toBeCalled()
  })

  it('hides empty slots', () => {
    const empty = shallowMount(SHero, { slots: { default: 'content' } })
    expect(empty.html()).toMatchSnapshot()
  })

  it('has a footer', () => {
    expect(wrapper.vm.$slots.foot).toBeTruthy()
  })

  options.colors.forEach(color => {
    it(`can be ${color}`, () => {
      wrapper.setProps({ color })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  options.heights.forEach(height => {
    it(`can be ${height}`, () => {
      wrapper.setProps({ height })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('can have no padding on the body', () => {
    wrapper.setProps({ hasNoPadding: true })
    expect(wrapper.html()).toMatchSnapshot()
  })
})