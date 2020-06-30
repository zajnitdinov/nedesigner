const searchTags = (state, action) => {
    if (state === undefined){
        return {
            visible: false,
            tags: ['react','vue','references','minimalism','site'],
            selectedTags: []
        }
    }
    switch (action.type) {
        case 'OPEN_DROPDOWN_MENU_TAG':
            return {
                ...state.searchTags,
                visible: true
            };
        case 'CLOSE_DROPDOWN_MENU_TAG':
            return {
                ...state.searchTags,
                visible: false
            };
        case 'ADD_TO_SELECTED_KEYS':
            return {
                ...state.searchTags,
                selectedTags: [
                    action.payload,
                    ...state.searchTags.selectedTags,
                ],
            };
        case 'DELETE_FROM_SELECTED_KEYS':
            return {
                ...state.searchTags,
                selectedTags: state.searchTags.selectedTags.filter(el => action.payload !== el)
            };
        default:
            return state.searchTags;
    }
};

export default searchTags;