const FilterTech = (state = [], action) => {
    switch (action.type) {
        case 'GET_TECH':
            return state.concat(action.payload);
        default:
            return state
    }
}

export default FilterTech;