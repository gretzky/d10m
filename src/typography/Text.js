import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontSize, fontWeight, space, color, responsiveStyle } from 'styled-system'
import theme from '../theme/theme'

const align = responsiveStyle('text-align', 'align')

const Text = styled.div`
  ${fontSize}
  ${space}
  ${color}
  ${fontWeight}
  ${align}
`

Text.displayName = 'Text'

// lol nsa
const nsa = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Text.propTypes = {
  fontSize: nsa,
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
    'justify'
  ]),
  fontWeight: PropTypes.number,
  m: nsa,
  mt: nsa,
  mr: nsa,
  mb: nsa,
  ml: nsa,
  mx: nsa,
  my: nsa,
  p: nsa,
  pt: nsa,
  pr: nsa,
  pb: nsa,
  pl: nsa,
  px: nsa,
  py: nsa
}

Text.defaultProps = {
  theme: theme
}

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
