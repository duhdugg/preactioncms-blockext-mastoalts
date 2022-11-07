import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@preaction/inputs'

function MastoAltsSettings(props) {
  const addAlt = React.useCallback(() => {
    let alts = Array.from(props.propsData.alts)
    alts.push('')
    props.getPropsDataValueHandler('alts')(alts)
  }, [props])
  const rmAlt = React.useCallback(
    (index) => {
      let alts = Array.from(props.propsData.alts)
      alts.splice(index, 1)
      props.getPropsDataValueHandler('alts')(alts)
    },
    [props]
  )
  const altHandler = React.useCallback(
    (index) => {
      return (value) => {
        let alts = Array.from(props.propsData.alts)
        alts[index] = value
        props.getPropsDataValueHandler('alts')(alts)
      }
    },
    [props]
  )
  return (
    <div>
      <h6>MastoAlts Settings</h6>
      <hr className='mb-3' />
      {props.propsData.alts.map((alt, i) => (
        <div key={i} className='row'>
          <div className='col-10'>
            <Input
              type='url'
              placeholder={`Mastodon Alt #${i + 1} URL`}
              value={alt}
              valueHandler={altHandler(i)}
            />
          </div>
          <div className='col-2'>
            <button
              type='button'
              className='btn btn-danger'
              onClick={() => rmAlt(i)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <button type='button' className='btn btn-secondary mb-3' onClick={addAlt}>
        Add Alt
      </button>
    </div>
  )
}

MastoAltsSettings.propTypes = {
  propsData: PropTypes.object.isRequired,
  getPropsDataValueHandler: PropTypes.func.isRequired,
}

export default MastoAltsSettings
