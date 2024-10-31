import React from "react";

type TodoStatus = "Finish" | "In-progress"

type TodoItem = {
    job: string,
    status: TodoStatus
}

type TodoListRef = {
    addTodoItem: (item: TodoItem) => void;
}

export const Demo3 = () => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const selectRef = React.useRef<HTMLSelectElement>(null);
    const todoRef = React.useRef<TodoListRef>(null);

    const handleAddTodo = () => {
        todoRef.current?.addTodoItem({
            job: inputRef.current?.value ?? '',
            status: selectRef.current?.value as TodoStatus ?? 'In-progress'
        })
    }

    return (
        <>
            <input name="job" ref={inputRef} />
            <select name="status">
                <option value={"Finish"}>Finish</option>
                <option value={"In-progress"}>In-progress</option>
            </select>
            <button onClick={handleAddTodo}>Add Todo</button>
            <TodoList ref={todoRef} />
        </>
    )
}

export const TodoList = React.forwardRef(function CustomTodoList(_, ref: React.ForwardedRef<TodoListRef>) {
    const [todoList, setTodoList] = React.useState<TodoItem[]>([]);

    React.useImperativeHandle(ref, () => ({
        addTodoItem(item: TodoItem) {
            setTodoList([...todoList, item]);
        }
    }), [todoList])

    return (
        <>
            {todoList.map(item => <p>{item.job + ' - ' + item.status}</p>)}
        </>
    )
})