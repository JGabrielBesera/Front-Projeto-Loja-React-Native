import { create } from 'zustand'

const useUserStore = create((set) => ({
  users: [],
  setUsers: (newUser) => set(() => ({ users: newUser })),
  addUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
  removeUser: (id) => set((state) => {
    const usersFiltrado = state.users.filter((user => user.id !== id))
    return {users: usersFiltrado}
  }),
  editUser: (id, updatedUser) => set((state) => ({
    users: state.users.map((user) => {
        if (user.id === id) {
            return { ...user, ...updatedUser };
        } else {
            return user;
        }
    })
})),
}))

export default useUserStore

