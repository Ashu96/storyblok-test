import Styled from 'styled-components'
import { primary, extended } from '../constants/colors'

export const Heading1 = Styled.h1`
  font-family: 'Proxima Nova Semibold';
  font-size: 42px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
  color: ${primary.charcoal};
`

export const Heading2 = Styled.h2`
  font-family: 'Proxima Nova Semibold';
  font-size: 32px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
  color: ${primary.charcoal};
`

export const Heading3 = Styled.h3`
  font-family: 'Proxima Nova Semibold';
  font-size: 24px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
  color: ${primary.charcoal};
`

export const Heading4 = Styled.h4`
  font-family: 'Proxima Nova';
  font-size: 20px;
  font-weight: ${props => (props.bold ? 600 : 'normal')};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${primary.charcoal};
  text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
`

export const BodyText = Styled.p`
  font-family: ${props =>
    props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
  font-size: 18px;
  font-weight: ${props => (props.bold ? 600 : 'normal')};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
  color: ${props => (props.color ? props.color : extended.charcoal.one)};
`

export const Note = Styled.p`
  font-family: 'Proxima Nova';
  font-size: 16px;
  font-weight: ${props => (props.bold ? 600 : 'normal')};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
  color: ${props => (props.color ? props.color : extended.charcoal.three)};
`
export const Label = Styled.p`
  font-family: 'Proxima Nova';
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.7;
  letter-spacing: normal;
  color: ${props => (props.color ? props.color : extended.charcoal.one)};
`

export const ContentWrapper = Styled.div`
  & img {
    width: 100%;
  }

  & li {
    font-family: ${props =>
      props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
    font-size: 18px;
    font-weight: ${props => (props.bold ? 600 : 'normal')};
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${props => (props.color ? props.color : extended.charcoal.one)};
    
  }

  & p {
    font-family: ${props =>
      props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
    font-size: 18px;
    font-weight: ${props => (props.bold ? 600 : 'normal')};
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${props => (props.color ? props.color : extended.charcoal.one)};
    
    margin-bottom: 50px;
  }

  & h1, h2, h3, h4 {
    margin-bottom: 20px;
  }

  & h2 {
    font-family: 'Proxima Nova Semibold';
    font-size: 32px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${primary.charcoal};
  }

  & h3 {
    font-family: 'Proxima Nova Semibold';
    font-size: 24px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${primary.charcoal};Z
  }

`