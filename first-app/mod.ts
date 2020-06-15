const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: string
  title: string
  completed: boolean
}

const res = await fetch(url, { method: 'GET' })
const todo: Todo = await res.json()
const { id, title, completed } = todo

const logToDo = (id: string, title: string, completed: boolean) => {
  console.log(`
    The todo with id: ${id}
    Has a title of: ${title}
    Is it completed? ${completed}
  `)
}

logToDo(id, title, completed)
