import { addFilter } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = event => {
    dispatch(addFilter(event.target.value))
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

export default Filter
