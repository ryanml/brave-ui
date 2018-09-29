/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import {
  StyledTitle,
  StyledDesc,
  StyledInfoCard,
  StyledFigure,
  StyledGrid,
  StyledColumn
} from './style'

export interface CardProps {
  title?: string
  description?: string
  icon?: string
}

export interface Props {
  id?: string
  singleColumn: boolean
  cards?: CardProps[]
}

export default class InfoCard extends React.PureComponent<Props, {}> {
  static defaultProps = {
    singleColumn: false
  }

  getCards (items: CardProps[], singleColumn: boolean) {
    return (
      <StyledGrid 
        numColumns={items.length} 
        singleColumn={singleColumn}
      >
        {items.map((item: CardProps, index: number) => {
          return <StyledColumn key={`${index}`}>
            <StyledInfoCard>
              <StyledFigure>
                {item.icon}
              </StyledFigure>
              <StyledTitle>{item.title}</StyledTitle>
              <StyledDesc>{item.description}</StyledDesc>
            </StyledInfoCard>
          </StyledColumn>
        })}
      </StyledGrid>
    )
  }

  render () {
    const { id, cards, singleColumn } = this.props
    return (
      <section id={id}>
        {
          cards
          ? this.getCards(cards, singleColumn)
          : null
        }
      </section>
    )
  }
}
