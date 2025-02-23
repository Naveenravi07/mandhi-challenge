export const dummyUsers = [
    {
        id: "1",
        name: "Alex Thompson",
        avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop",
    },
    {
        id: "2",
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop",
    },
    {
        id: "3",
        name: "Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=100&h=100&fit=crop",
    },
];

export const todoList = [
    { id: "1", title: "Design new landing page", status: "todo", assignedTo: dummyUsers[0] },
    { id: "2", title: "Implement authentication", status: "in-progress", assignedTo: dummyUsers[1] },
    { id: "3", title: "Write documentation", status: "review", assignedTo: dummyUsers[2] },
    { id: "4", title: "Deploy to production", status: "done", assignedTo: dummyUsers[0] },
    { id: "5", title: "Attend Devops workshop", status: "todo", assignedTo: dummyUsers[0] },

]

