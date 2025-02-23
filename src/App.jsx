import { DndContext, DragOverlay, closestCorners } from '@dnd-kit/core'
import { useState } from 'react';
import { TodoBoard } from './components/TodoBoard';
import { todoList } from './constants/todoList';

function App() {
    const [todos, setTodos] = useState(todoList);
    const [activeId, setActiveId] = useState(null);
    const tabs = ["todo","in-progress","review","done"]

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event) => {
        setActiveId(null);

        const { active, over } = event;
        if (!over) return;
        const activeId = active.id;
        const overId = over.id;

        const activeTodo = todos.find((todo) => todo.id === activeId);
        if (!activeTodo) return;

        if (tabs.includes(overId)) {
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === activeId ? { ...todo, status: overId } : todo
                )
            );
        }
    };

    const handleDragCancel = () => {
        setActiveId(null);
    };

    const onAssignUser = (todoId, user) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === todoId ? { ...todo, assignedTo: user } : todo
            )
        );
    };
    
    return (
        <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="h-screen flex flex-col max-w-7xl mx-auto p-8">
                <div className="flex-none">
                    <h1 className="text-4xl font-light text-gray-900 mb-2">Tasks</h1>
                    <p className="text-gray-500 mb-8">Drag and drop tasks to update their status</p>
                </div>

                <div className="flex-1 min-h-0">
                    <DndContext
                        collisionDetection={closestCorners}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onDragCancel={handleDragCancel}>

                        <TodoBoard onAssignUser={onAssignUser} todos={todos} />
                        <DragOverlay>
                            {activeId ? (
                                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                                    {todos.find((todo) => todo.id === activeId)?.title}
                                </div>
                            ) : null}
                        </DragOverlay>
                    </DndContext>
                </div>
            </div>
        </div>
    )
}

export default App
