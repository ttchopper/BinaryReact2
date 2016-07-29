const users = (state = [], action) => {
    switch(action.type) {
    case 'ADD':
        return  [
            ...state,
            {
                name: action.name,
                id: action.id,
                filtered: false
            }
        ];
    
    case 'REMOVE': 
        return [
            ...state.slice(0, action.user),
            ...state.slice(action.user + 1)
        ];
   

    case 'FILTER':
        if (action.id) {
            return state.map((user) => {
                if(user.id === action.id) {
                    user.filtered = true;
                }
                return user;
            });
        }
        else {
            return state;
        }
        

    default:
        return state;
    }
};

export default users;

