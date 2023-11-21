import './index.css'

const TodoItem = props => {
  const {listDetails, deleteItem} = props
  const {id, title} = listDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list">
      <p className="list-item">{title}</p>
      <button className="btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
