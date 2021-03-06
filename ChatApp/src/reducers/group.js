
const initialState = {
    groups: [],
    current_group_id: '',
}

const group = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_GROUP':
            return Object.assign({}, state, {
                current_group_id: action.group_id
            });
        case 'SET_GROUPS':
            return Object.assign({}, state, {
                groups: action.input_groups
            });
        default:
            return state
    }
}

export default group;
