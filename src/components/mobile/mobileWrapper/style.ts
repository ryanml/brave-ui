/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { Device, DeviceObj } from './index'

interface StyleProps {
  device?: Device
  portrait?: boolean
}

const mobileDevices: DeviceObj[] = [
  {
    name: 'GalaxyS5',
    width: '360px',
    height: '640px'
  },
  {
    name: 'Pixel2',
    width: '411px',
    height: '731px'
  },
  {
    name: 'Pixel2XL',
    width: '411px',
    height: '823px'
  },
  {
    name: 'iPhone5SE',
    width: '320px',
    height: '568px'
  },
  {
    name: 'iPhoneX',
    width: '375px',
    height: '812px'
  }
]

const getStyleAttribute = (device: Device, att: string, portrait: boolean | undefined) => {
  const result = mobileDevices.find((obj: DeviceObj) => obj.name === device)
  if (!portrait) {
    att = att === 'width' ? 'height' : 'width'
  }
  return result ? result[att] : mobileDevices[0][att]
}

export const StyledWrapper = styled<StyleProps, 'div'>('div')`
  overflow: scroll;
  border-radius: 10px;
  width: ${p => p.device ? getStyleAttribute(p.device, 'width', p.portrait) : '360px'};
  height: ${p => p.device ? getStyleAttribute(p.device, 'height', p.portrait) : '640px'};
` as any
