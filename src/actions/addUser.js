export function addUser(newUser) {
    return {
        type: 'ADD',
        name: newUser.name,
        id: newUser.id
    };
}

export function removeUser(userId) {
    return {
        type: 'REMOVE',
        id: userId
    };
}