import { mount } from '@vue/test-utils'
import ManufactureCard from '../../src/components/ui/ManufactureCard.vue'

describe('ManufacturerCard.vue', () => {
  const wrapper = mount(ManufactureCard, {
    props: {
      manufacturer: {
        Country: 'test country',
        Mfr_CommonName: 'test common name',
        Mfr_ID: 123,
        Mfr_Name: 'test name',
        VehicleTypes: [],
      },
    },
  })

  it('should render manufacturer card component with correct text', () => {
    expect(wrapper.text()).toContain('test country')
    expect(wrapper.text()).not.toContain('test common name')
    expect(wrapper.text()).not.toContain('123')
    expect(wrapper.text()).toContain('test name')
  })
})
