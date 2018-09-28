/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { Device } from './index'

interface StyleProps {
  device?: Device
}

const getStyleAttribute = (device: Device, att: string) => {
  return att === 'height' ? '640px' : '360px'
}

export const StyledWrapper = styled<StyleProps, 'div'>('div')`
  display: block;
  width: ${p => p.device ? getStyleAttribute(p.device, 'width') : '360px'};
  height: ${p => p.device ? getStyleAttribute(p.device, 'height') : '640px'};
` as any
