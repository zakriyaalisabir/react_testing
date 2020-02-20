import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import Headline from './index'
import { findByAttribute } from '../../../utils'

let state, props, component

describe('UI', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() })
  })

  describe('Headline Component', () => {
    describe('Have Props', () => {
      beforeEach(() => {
        state = {}
        props = { headline: 'headline', description: 'description' }
        component = shallow(<Headline {...props} />)
      })

      it('should render Headline Component without errors', () => {
        const wrapper = findByAttribute(
          component,
          `[data-test='headline-comp']`
        )
        expect(wrapper.length).toBe(1)
      })

      it('should render headline without errors', () => {
        const wrapper = findByAttribute(component, `[data-test='h1']`)
        expect(wrapper.length).toBe(1)
      })

      it('should render description without errors', () => {
        const wrapper = findByAttribute(component, '.description')
        expect(wrapper.length).toBe(1)
      })
    })
    describe('Have No Props', () => {
      beforeEach(() => {
        props = {}
        component = shallow(<Headline {...props} />)
      })

      it('should not render Headline', () => {
        const wrapper = findByAttribute(
          component,
          `[data-test='headline-comp']`
        )
        expect(wrapper.length).toBe(0)
      })
    })
  })
})
