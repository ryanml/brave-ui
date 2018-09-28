/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper } from './style'

export type Device = 'GalaxyS5' | 'Pixel2' | 'Pixel2XL'

export interface Props {
  id?: string
  children: React.ReactNode
  device?: Device
}

export default class MobileWrapper extends React.PureComponent<Props, {}> {
  static defaultProps = {
    device: 'GalaxyS5'
  }

  render () {
    const { id, children, device } = this.props

    return (
      <StyledWrapper
        id={id}
        device={device}
      >
        {children}
      </StyledWrapper>
    )
  }
}
