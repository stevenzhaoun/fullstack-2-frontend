import React, { useState, useEffect } from 'react' // useState & useEffect -> react Hooks
import axios from 'axios'
import Button from '@mui/material/Button';

type Todo = {
    title: string,
    id: number,
    completed: boolean,
}

function Todo() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setTodos(response.data.slice(0, 10))
            setIsLoading(false)
        }
        fetchData()
    }, []) // load data at initial rendering

    const handleAddTodo = () => {

        const newTodo: Todo = {
            title: inputValue,
            id: new Date().valueOf(),
            completed: false,
        }

        setTodos([...todos, newTodo]) // ... - spread operator
        setInputValue('')
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleDeleteTodo = (id: number) => {
        const fitleredTodo = todos.filter((todo) => todo.id !== id)
        setTodos(fitleredTodo)
    }

    const handleToggleTodo = (id: number) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo, // ... - spread operator
                    completed: !todo.completed,
                }
            }
            return todo

        })
        setTodos(newTodos)
    }

    return (
        <div>
            <div>Todo App</div>
            <br/>
            <input value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>Add</button>

            {isLoading && <div>Loading...</div>}
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
                        <span>{todo.title}</span>
                        <Button variant="contained" onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo;