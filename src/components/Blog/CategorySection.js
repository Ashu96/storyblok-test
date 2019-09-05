import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import BlogCard from './BlogCard'
import Icon from '../Icon'
import { SectionWrapper, Row, Col } from '../../styles/grid'
import { primary } from '../../constants/colors'
import { Heading1 } from '../../styles/text'
import { LinkButton } from '../../styles/buttons'
import { getSlugFromTitle } from '../../utils'

function CategorySection({ Heading, title, blogs, showAll }) {
	return (
		<SectionWrapper
			bgPrimary
			containerProps={{ style: { padding: '50px 0px' } }}
		>
			<Row>
				<Col>
					<Heading textCenter className="mgn-b-60">
						{title}
					</Heading>
				</Col>
			</Row>
			<Row>
				{blogs.map(blog => {
					const categoryName =
						(blog.blogcategories && blog.blogcategories[0].title) || title
					return (
						<Col key={blog.id} className="col-md-6 col-xl-4 mgn-b-30">
							<BlogCard
								slug={blog.slug}
								title={blog.title}
								body={blog.body}
								date={blog.date}
								category={categoryName}
								media={blog.image.childImageSharp.fluid}
							/>
						</Col>
					)
				})}
			</Row>
			{showAll && (
				<Row>
					<Col>
						<LinkButton
							onClick={() =>
								navigate(`/blog/category/${getSlugFromTitle(title)}`)
							}
						>
							View all <Icon fill={primary.purple} />
						</LinkButton>
					</Col>
				</Row>
			)}
		</SectionWrapper>
	)
}

export default CategorySection

CategorySection.propTypes = {
	title: PropTypes.string.isRequired,
	showAll: PropTypes.bool,
	Heading: PropTypes.object
}

CategorySection.defaultProps = {
	showAll: true,
	Heading: Heading1
}
