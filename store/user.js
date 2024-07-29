export const state = () => ({
    user: {
        name: "Evano",
        position: "Project Manager"
    }
})
export const getters = {
    getUser: (state) => { 
        return state.user;
    },
}