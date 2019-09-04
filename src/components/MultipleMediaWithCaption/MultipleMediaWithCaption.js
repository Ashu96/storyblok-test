import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { getPublicURL } from '../../utils'
import { Heading2 } from '../../styles/text'

const MultipleMediaWithCaptionWrapper = Styled.div`
  flex-direction: column;
	
	& h2 {
    text-align: center;
  }

  & button {
    margin-right: 16px;

  }
`

function MultipleMediaWithCaption({ blok }) {
  
  const { title, images } = blok
	return (
		<MultipleMediaWithCaptionWrapper>
			<Heading2>{title}</Heading2>
			<List images={images} />
		</MultipleMediaWithCaptionWrapper>
	)
}

export default MultipleMediaWithCaption

MultipleMediaWithCaption.propTypes = {
	title: PropTypes.string.isRequired,
	images: PropTypes.array.isRequired,
}

MultipleMediaWithCaption.defaultProps = {
	images: []
}


const ListContainer = Styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0px;

  & li {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const ListItem = Styled.li`
  & img {
    height: 60px;
    margin-bottom: 16px;
    @media (min-width: 768px) {
      margin-right: 40px;
    }
    /* margin-right: 69px; */
  }
`

function List({ images }) {
	return (
		<ListContainer>
			{images.map(image => (
				<ListItem key={image.name}>
					<img
            src={image.filename}
						// src={getPublicURL(image.url || image.publicURL)}
						alt="featured in"
					/>
				</ListItem>
			))}
		</ListContainer>
	)
}
