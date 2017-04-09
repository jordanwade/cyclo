function resources (state = [], action) {
  switch (action.type ) {
    case 'FETCH_RESOURCES':
      return [...state,
        Object.assign({}, action.resource)
      ];
    case 'ADD_RESOURCE':
      return [...state,
        Object.assign({}, action.resource)
      ];
    case 'UPDATE_RESOURCE':
      return [
        ...state.slice(0,action.key,1),
        action.updatedResource,
        ...state.slice(action.key + 1)
      ]
    case 'REMOVE_RESOURCE':
      // we need to return the new state without the deleted resource
      return [
        // from the start to the one we want to delete
        ...state.slice(0,action.key),
        // after the deleted one, to the end
        ...state.slice(action.key + 1)
      ]
    default:
      return state;
  }
}

export default resources;
