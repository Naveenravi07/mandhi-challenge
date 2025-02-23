import { TodoColumn } from "./TodoColumn";

export function TodoBoard({ todos, onAssignUser }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-full">
            <TodoColumn
                title="To Do"
                status="todo"
                todos={todos.filter((todo) => todo.status === "todo")}
                onAssignUser={onAssignUser}
            />
            <TodoColumn
                title="In Progress"
                status="in-progress"
                todos={todos.filter((todo) => todo.status === "in-progress")}
                onAssignUser={onAssignUser}
            />
            <TodoColumn
                title="Review"
                status="review"
                todos={todos.filter((todo) => todo.status === "review")}
                onAssignUser={onAssignUser}
            />
            <TodoColumn
                title="Done"
                status="done"
                todos={todos.filter((todo) => todo.status === "done")}
                onAssignUser={onAssignUser}    
                />
        </div>
    )
}