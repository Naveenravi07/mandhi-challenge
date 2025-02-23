import { useDroppable } from "@dnd-kit/core";
import { TodoItem } from "./TodoItem";

export const TodoColumn = ({
    title,
    status,
    todos,
    onAssignUser,
}) => {
    const { setNodeRef, isOver } = useDroppable({ id: status });
    return (
        <div
            ref={setNodeRef}
            className={`flex flex-col bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 
                        shadow-sm transition-colors duration-200 h-full
                         ${isOver ? "bg-blue-50/40" : ""}`} >
            <h2 className="flex-none text-lg font-medium text-gray-700 mb-4">{title}</h2>
            <div className="flex-1 overflow-y-auto space-y-3">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onAssignUser={onAssignUser}
                    />
                ))}
            </div>
        </div>
    )
}