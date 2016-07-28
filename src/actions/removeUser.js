export function removeUser(user) {
    return {
        type: 'REMOVE',
        user: user
    };
}