export const getClosetItems = (items=[], userId) => (
    (!userId)
        ? items.filter(item => item.userId === 1)
        : items.filter(item => item.userId === userId)
)

export const findItem = (items=[], itemId) =>
    items.find(item => item.id === parseInt(itemId))