import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import Header from './index'
import { findByAttribute } from '../../utils'

let state, props, component

describe('UI', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() })
  })

  beforeEach(() => {
    state = {}
    props = {}
    component = shallow(<Header {...props} />)
  })

  describe('Header Component', () => {
    describe('Simple Tests', () => {
      it('should find test-data field ', () => {
        const wrapper = findByAttribute(component, `[test-data='testData']`)
        expect(wrapper.length).toBe(1)
      })

      it('should find container class ', () => {
        const wrapper = findByAttribute(component, '.container')
        expect(wrapper.length).toBe(1)
      })

      it('should find wrap class ', () => {
        const wrapper = component.find('.wrap')
        expect(wrapper.length).toBeGreaterThan(0)
      })

      it('should find img class ', () => {
        const wrapper = component.find('.img')
        expect(wrapper.length).toBe(1)
      })
    })
  })
})
