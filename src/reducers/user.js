function user (state = [], action) {
  switch (action.type ) {
    case 'ADD_USER':
      return {
        avatar: action.avatar,
        name: action.name,
        uid: action.uid
      }
    case 'REMOVE_USER':
      return {};
    default:
      return state;
  }
}


export default user;
