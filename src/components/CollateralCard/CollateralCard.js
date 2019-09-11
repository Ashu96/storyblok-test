import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { navigate } from 'gatsby'
import Icon from '../Icon'
import { backgrounds, primary } from '../../constants/colors'
import { Heading4 } from '../../styles/text'
import { getButton } from '../../utils'

const CollateralCardWrapper = Styled.div`
  display: flex;
  margin-bottom: 40px;
  & .media {
    flex: 0 0 50%;
    max-width: 50%;
    & img {
      width: 100%;
    }
  }

  & .content {
    padding: 0px 30px;
    & .title {
      margin-bottom: 16px;
    }
    & button {
      border-radius: 10px;
      height: 32px;
      padding: 6px 16px;
    }
  }
`

function CollateralCard({ blok }) {
  const { title, action, media } = blok
  const [primaryAction] = action
  console.log({ primaryAction })
  const Button = getButton(primaryAction && primaryAction.type)
  return (
    <CollateralCardWrapper>
      <div className="media">
        <img src={media} alt="" />
      </div>
      <div className="content">
        <Heading4 bold className="title">
          {title}
        </Heading4>
        {primaryAction && (
          <Button
            className="action"
            onClick={() => navigate(primaryAction.link)}
          >
            {primaryAction.label}
            {primaryAction.withIcon && (
              <Icon
                fill={
                  primaryAction.type === 'PRIMARY'
                    ? backgrounds.white
                    : primary.purple
                }
              />
            )}
          </Button>
        )}
      </div>
    </CollateralCardWrapper>
  )
}

export default CollateralCard

CollateralCard.propTypes = {
  title: PropTypes.string.isRequired
}
CollateralCard.defaultTypes = {
  title: PropTypes.string.isRequired
}
