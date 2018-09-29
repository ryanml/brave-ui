/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper } from './style'

export type Device = 'GalaxyS5' | 'Pixel2' | 'Pixel2XL' | 'iPhone5SE' | 'iPhoneX'

export type DeviceObj = {
  name: Device
  width: string
  height: string
  [key: string]: string
}

export interface Props {
  id?: string
  device?: Device
  portrait?: boolean
  children: React.ReactNode
}

export default class MobileWrapper extends React.PureComponent<Props, {}> {
  static defaultProps = {
    device: 'GalaxyS5',
    portrait: true
  }

  render () {
    const { id, device, portrait, children } = this.props

    return (
      <StyledWrapper
        id={id}
        device={device}
        portrait={portrait}
      >
        {children}
      </StyledWrapper>
    )
  }
}
