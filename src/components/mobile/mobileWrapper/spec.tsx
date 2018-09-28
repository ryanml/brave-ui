/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import MobileWrapper from './index'
import { TestThemeProvider } from '../../../theme'

describe('Modal tests', () => {
  const baseComponent = (props?: object) => <TestThemeProvider><MobileWrapper id='mobile-wrapper' {...props} /></MobileWrapper>

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.find('#mobile-wrapper').length
      expect(assertion).toBe(1)
    })
  })
})
