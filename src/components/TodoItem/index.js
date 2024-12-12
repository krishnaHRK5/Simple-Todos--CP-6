import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props
  const {id, title} = todoDetails

  const InDeleteId = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="under-list">
      <p>{title}</p>
      <button type="button" onClick={InDeleteId}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
