import { useDraggable } from "@dnd-kit/core";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { dummyUsers } from "@/constants/usersList"

export const TodoItem = ({ todo, onAssignUser }) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: todo.id });
    const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`, } : undefined;

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            className={`relative bg-white p-4 rounded-lg border border-gray-200 shadow-sm transition-all duration-200 
                        ${isDragging ? "opacity-50 cursor-grabbing shadow-md scale-105" : "hover:shadow-md cursor-grab"}`}
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-gray-700 font-medium">{todo.title}</p>
                </div>

                <div onPointerDown={(e) => e.stopPropagation()}>
                    <Popover>
                        <PopoverTrigger asChild>
                            <button
                                className="relative group"
                                onClick={(e) => e.stopPropagation()}
                                onPointerDown={(e) => e.stopPropagation()}
                            >
                                <Avatar className="h-8 w-8 ring-2 ring-white">
                                    <AvatarImage src={todo.assignedTo.avatar} alt={todo.assignedTo.name} />
                                    <AvatarFallback>{todo.assignedTo.name[0]}</AvatarFallback>
                                </Avatar>
                                <div className="absolute right-0 top-10 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-index-2">
                                    {todo.assignedTo.name}
                                </div>
                            </button>
                        </PopoverTrigger>

                        <PopoverContent className="w-80 p-0" align="end">
                            <div className="p-4 border-b">
                                <div className="font-semibold">Assign to</div>
                                <div className="text-sm text-muted-foreground">Select a team member</div>
                            </div>
                            <div className="p-2">
                                {dummyUsers.map((user) => (
                                    <button
                                        key={user.id}
                                        className={`w-full flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors
                                            ${todo.assignedTo.id === user.id ? 'bg-muted' : ''}`}
                                        onClick={() => onAssignUser(todo.id, user)}
                                    >
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={user.avatar} />
                                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="text-left">
                                            <div className="text-sm font-medium">{user.name}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            {todo.image && (
                <div className="relative aspect-video w-full overflow-hidden rounded-md">
                    <img
                        src={todo.image || "/placeholder.svg"}
                        alt={`Image for ${todo.title}`}
                        className="object-cover w-full h-full"
                    />
                </div>
            )}
        </div>
    );
};
