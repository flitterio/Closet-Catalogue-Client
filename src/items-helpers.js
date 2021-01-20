
export const findItem = (items=[], itemId) =>
    items.find(item => item.id === parseInt(itemId))