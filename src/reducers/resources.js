import * as firebase from "firebase";

function resources (state = [], action) {
  switch (action.type ) {
    case 'FETCH_RESOURCES':
      const newMsgRef = firebase.database().ref("resources/");
      console.log(newMsgRef);
      return newMsgRef;
    case 'ADD_RESOURCE':
      return [...state,
        Object.assign({}, action.resource)
      ];
    case 'REMOVE_RESOURCE':
      // we need to return the new state without the deleted comment
      return [
        // from the start to the one we want to delete
        ...state.slice(0,action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
}

export default resources;
