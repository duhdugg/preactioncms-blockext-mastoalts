import React from 'react'
import PropTypes from 'prop-types'

function MastoAlts(props) {
  return (
    <div>
      {props.alts.map((alt, i) => (
        <div key={i}>
          <a href={alt} target='_blank' rel='me noopener noreferrer'>
            {alt}
          </a>
        </div>
      ))}
    </div>
  )
}

MastoAlts.propTypes = {
  alts: PropTypes.array.isRequired,
  debug: PropTypes.bool,
  preaction: PropTypes.object.isRequired,
}

MastoAlts.extensionType = 'block'
MastoAlts.label = 'MastoAlts'
MastoAlts.defaultProps = {
  alts: [],
  debug: false,
}

export default MastoAlts
