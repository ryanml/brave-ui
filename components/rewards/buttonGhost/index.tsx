/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledIcon } from './style'

export interface Props {
  text: string
  size: Size
  color: Color
  onClick: () => void
  id?: string
  disabled?: boolean
  icon?: {image: string, position: 'left' | 'right'}
}

export type Color = 'brand' | 'action'
export type Size =  'large' | 'medium' | 'small'

export default class ButtonGhost extends React.PureComponent<Props, {}> {
  render () {
    const icon = this.props.icon

    return (
      <StyledWrapper {...this.props}>
          {
            icon && icon.position === 'left'
            ? <StyledIcon icon={icon} src={icon.image} />
              : null
          }
          {this.props.text}
          {
            icon && icon.position === 'right'
            ? <StyledIcon icon={icon} src={icon.image} />
              : null
          }
      </StyledWrapper>
    )
  }
}