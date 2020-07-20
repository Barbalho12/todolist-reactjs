
// const PATH_BASE = "http://localhost:8080";
const PATH_BASE = `https://staging-todolist.herokuapp.com`;

const PATH = `${PATH_BASE}/tasks`;

const API = {
    findAll: async () => {
        const url = `${PATH}`;
        const response = await fetch(url);
        return response;
    },

    findAllCompleteds : async () => {
        const url = `${PATH}/completeds`;
        const response = await fetch(url);
        return response;
    },

    findAllLefts : async () => {
        const url = `${PATH}/lefts`;
        const response = await fetch(url);
        return response;
    },

    setCompleted : async (id, isCompleted) => {
        const url = `${PATH}/${id}/set-completed/${isCompleted}`;
        const response = await fetch(url, {method:'PUT'});
        return response;
    },

    create : async (taskDescription, block) => {
        const url = `${PATH}`;

        const response = await fetch(url, {
            method:'POST',  
            headers:{
                "Content-Type":"application/json"
            }, 
            body:JSON.stringify({description:taskDescription, block:{id:block.id}})
        });
        return response;
    },

    delete : async (id) => {
        const url = `${PATH}/${id}`;
        const response = await fetch(url, {method:'DELETE'});
        return response;
    },

    update : async (id, task) => {
        const url = `${PATH}/${id}`;
        const response = await fetch(url, {
            method:'PUT',  
            headers:{
                "Content-Type":"application/json"
            }, 
            body:JSON.stringify(task)
        });
        return response;
    },

    getUserByEmail: async (email) => {
        const url = `${PATH_BASE}/users/by-email/${email}`;
        const response = await fetch(url);
        return response;
    },

    getBlocksByUserEmail: async (email) => {
        const url = `${PATH_BASE}/blocks`;
        const response = await fetch(url, {
            method:'GET',  
            headers:{
                "Content-Type":"application/json",
                "user":email
            }
        });
        return response;
    },

    findAllByBlock: async (block) => {
        const url = `${PATH}`;
        const response = await fetch(url, {
            method:'GET',  
            headers:{
                "Content-Type":"application/json",
                "block":block.id
            }
        });
        return response;
    },

    findAllCompletedsByBlock : async (block) => {
        const url = `${PATH}/completeds`;
        const response = await fetch(url, {
            method:'GET',  
            headers:{
                "Content-Type":"application/json",
                "block":block.id
            }
        });
        return response;
    },

    findAllLeftsByBlock : async (block) => {
        const url = `${PATH}/lefts`;
        const response = await fetch(url, {
            method:'GET',  
            headers:{
                "Content-Type":"application/json",
                "block":block.id
            }
        });
        return response;
    },

    createBlock: async (userEmail, nameBlock) => {
        const url = `${PATH_BASE}/blocks/${nameBlock}`;
        const response = await fetch(url, {
            method:'POST',  
            headers:{
                "user":userEmail
            }
        });
        return response;
    },

    removeBlock : async (id) => {
        const url = `${PATH_BASE}/blocks/${id}`;
        const response = await fetch(url, {method:'DELETE'});
        return response;
    },

    createUser : async (user) => {
        const url = `${PATH_BASE}/users`;

        const response = await fetch(url, {
            method:'POST',  
            headers:{
                "Content-Type":"application/json"
            }, 
            body:JSON.stringify(user)
        });
        return response;
    },
    webSocketURL:`${PATH_BASE}/subscribe`
}

export default API;