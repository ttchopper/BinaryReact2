export function filter(user) {
    return {
        type: 'FILTER',
        // name: user.name,
        id: user.id,
        filtered: true
    };
}
