export function filter(user) {
    return {
        type: 'FILTER',
        id: user.id,
    };
}
