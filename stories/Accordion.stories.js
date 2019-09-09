import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import Accordion from '../src/components/Accordion/Accordion'

const stories = storiesOf('Components | Accordion', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)


const props = {
	title: 'Developed by founder Dr. Jay Spence',
	body:
		'Uprise is based on the research of founder, Dr Jay Spence. The protocol used in Uprise has been evaluated in over 14 published research papers.',
	imageFirst: true,
	image: {
		childImageSharp: {
			fixed: {
				base64:
					'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB7uLLNuqoFOoTUB//xAAcEAACAgIDAAAAAAAAAAAAAAABAgADBBMREjH/2gAIAQEAAQUC9g7beZl3PW1jhUrJet0V5qUmf//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAEDAQE/ASP/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBP...',
				width: 285,
				height: 284,
				src:
					'/static/1f94c82b936298eaa58750261948b3e8/4fcd7/5821819f471471197f9e23f2f27babec.jpg',
				srcSet:
					'/static/1f94c82b936298eaa58750261948b3e8/4fcd7/5821819f471471197f9e23f2f27babec.jpg 1x,\n/static/1f94c82b936298eaa58750261948b3e8/c82ae/5821819f471471197f9e23f2f27babec.jpg 1.5x,\n/static/1f94c82b936298eaa58750261948b3e8/dfa65/5821819f471471197f9e23f2f27babec.jpg 2x'
			}
		}
	},
	action: {
		primary: {
			label: 'Research publications',
			link: '/book'
		}
	}
}

stories.add(
	'Accordion',
	() => (
		<Accordion {...props} title={text('title', props.title)}>
			{text('Text', 'Book a demo')}
		</Accordion>
	),
	{ notes: { markdown: '##Accordion\n For page heading' } }
)
