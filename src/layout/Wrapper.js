import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'

const Wrapper = styled.div`
  width: 90%;
  ${space}

  @media only screen and (min-width: 1140px) {
    width: 80%;
    ${space}
  }
`

const nsa = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Wrapper.propTypes = {
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

Wrapper.defaultProps = {
  m: '1em auto'
}

export default Wrapper
