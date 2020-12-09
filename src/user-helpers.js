export const getUser = (users=[], userId) => (
    (!userId)
    ? <h1>user not found</h1>
    : users.filter(user => user.id === userId)
)
