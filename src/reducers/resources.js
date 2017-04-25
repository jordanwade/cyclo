function resources (state = {}, action) {
  switch (action.type ) {
    case 'FETCH_RESOURCES':
      return {...action.resources};
    case 'ADD_RESOURCE':
      return {...state, [action.key]: action.resource};
    case 'UPDATE_RESOURCE':
      return {...state, [action.key]: action.updatedResource};
    case 'REMOVE_RESOURCE':
      const result = {...state}
      delete result[action.key];
      return result;
    default:
      return state;
  }
}

export default resources;
