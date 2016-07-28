export function addUser(user) {
    return {
        type: 'ADD',
        name: user.name,
        id: user.id
    };
}

