import { addFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = props => {
  const handleChange = event => {
    props.addFilter(event.target.value)
  }
  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      <label htmlFor='filter'>filter: </label>
      <input id='filter' onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = { addFilter }

const connectedFilter = connect(null, mapDispatchToProps)(Filter)

export default connectedFilter
