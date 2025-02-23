import { dummyUsers } from "./usersList"

export const todoList = [
    { id: "1", title: "Design new landing page", status: "todo", assignedTo: dummyUsers[0], },
    { id: "2", title: "Implement authentication", status: "in-progress", assignedTo: dummyUsers[1] },
    { id: "3", title: "Write documentation", status: "review", assignedTo: dummyUsers[2],image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4Ap84dRqeNXelPtKY4Jos0brjon1_3-D_w&s" },
    { id: "4", title: "Deploy to production", status: "done", assignedTo: dummyUsers[0] },
    { id: "5", title: "Attend Devops workshop", status: "todo", assignedTo: dummyUsers[0],image:"https://community.aws/raw-post-images/concepts/devops-essentials/images/devops_loop.jpeg?imgSize=1600x960" },

]

