const users = (state = [], action) => {
    switch(action.type) {
    case 'ADD':
        return  [
            ...state,
            {
                name: action.name,
                id: action.id
            }
        ];
    default:
        return state;
    }
};

export default users;

