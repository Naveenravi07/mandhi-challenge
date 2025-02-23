import { useDraggable, useDroppable } from "@dnd-kit/core";

export const TodoItem = ({ todo }) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: todo.id });
    const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`, } : undefined;
    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className={`bg-white p-4 rounded-lg border border-gray-200 shadow-sm transition-all duration-200 
                        ${isDragging ? "opacity-50 cursor-grabbing shadow-md scale-105" : "hover:shadow-md cursor-grab"}`} >
            <div className="flex items-start justify-between">
                <p className="text-gray-700 font-medium">{todo.title}</p>
                <div className="relative group">
                    <img
                        src={todo.assignedTo.avatar}
                        alt={todo.assignedTo.name}
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                    />
                    <div className="absolute right-0 top-10 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {todo.assignedTo.name}
                    </div>
                </div>
            </div>
        </div>
    );
};
