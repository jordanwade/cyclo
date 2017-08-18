export function fetchResources(resources) {
	console.log('Calling action fetch resources');
	return {
		type: 'FETCH_RESOURCES',
		resources
	};
}

// add resource

export function addResource(key, resource) {
	return {
		type: 'ADD_RESOURCE',
		key,
		resource
	};
}

// update resource

export function updateResource(key, updatedResource) {
	return {
		type: 'UPDATE_RESOURCE',
		key,
		updatedResource
	};
}

// remove resource

export function removeResource(key) {
	return {
		type: 'REMOVE_RESOURCE',
		key
	};
}

// add user

export function addUser(key, user) {
	return {
		type: 'ADD_USER',
		key,
		user
	};
}

// logout user

export function logoutUser() {
	return {
		type: 'LOGOUT_USER'
	};
}

// current user

export function setCurrentUser(user) {
	return {
		type: 'CURRENT_USER',
		user
	};
}
