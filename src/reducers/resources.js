function resources (state = {}, action) {
  switch (action.type ) {
    case 'FETCH_RESOURCES':
      return {...action.resources};
    case 'ADD_RESOURCE':
      return {...state, [action.key]: action.resource};
    case 'UPDATE_RESOURCE':
      return {...state, [action.key]: action.updatedResource};
    case 'REMOVE_RESOURCE':
      // we need to return the new state without the deleted resource
      return {
        // from the start to the one we want to delete
        ...state.slice(0,action.key),
        // after the deleted one, to the end
        ...state.slice(action.key + 1)
      }
    default:
      return state;
  }
}

export default resources;
