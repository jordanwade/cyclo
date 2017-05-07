function users (state = [], action) {
  switch (action.type ) {
    case 'ADD_USER':
      return {...state, [action.key]: action.user};
    case 'CURRENT_USER':
      return {...state, ['currentUser']: action.user};
    case 'LOGOUT_USER':
      return {...state, ['currentUser']: null};
    default:
      return state;
  }
}


export default users;
