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
    
    case 'REMOVE': 
        return [
            ...state.slice(0, action.user),
            ...state.slice(action.user + 1)
        ];
   

    case 'FILTER':
        return state.filter(function(user) {
            return user.name.indexOf(action.letter) !== -1;
        });

    default:
        return state;
    }
};

export default users;

