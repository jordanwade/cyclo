function general(state = [], action) {
	switch (action.type) {
    case 'OPEN_DIALOG':
      return { ...state, 'open': true};
    case 'CLOSE_DIALOG':
			return { ...state, 'open': false};
		default:
			return state;
	}
}

export default general;
