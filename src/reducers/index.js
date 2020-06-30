import searchTags from "./search-tags";
import cards from "./cards";

const reducer = (state, action) => {
    return {
        searchTags: searchTags(state, action),
        cards: cards(state, action)
    }
};

export default reducer;