import { mount } from '@vue/test-utils'
import Badge from '../../src/components/ui/Badge.vue'

describe('Badge.vue', () => {
  const wrapper = mount(Badge, {
    props: {
      text: 'test',
    },
  })

  it('should render badge component with correct text', () => {
    expect(wrapper.text()).toBe('test')
  })
})
