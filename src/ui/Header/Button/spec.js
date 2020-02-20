import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import Button from './index'
import { findByAttribute, checkPropErrors } from '../../../utils'

let state, props, component

describe('UI', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() })
  })

  describe('Button Component', () => {
    describe('Proptypes', () => {
      beforeEach(() => {
        state = {}
        props = { btnText: 'Hello', btnHandler: '() => {}' }
        component = shallow(<Button {...props} />)
      })

      it('should validate prop-types ', () => {
        const propsError = checkPropErrors(component, props)
        expect(propsError).toBeNull()
      })
    })
    describe('Action Creator Tests', () => {
      it('should find test-data field ', () => {
        const wrapper = findByAttribute(component, `[type='button']`)
        expect(wrapper.length).toBe(1)
      })
    })
  })
})
