export function fetchResources() {
  return {
    type: 'FETCH_RESOURCES'
  }
}

// add resource

export function addResource(resource) {

  return {
    type: 'ADD_RESOURCE',
    resource
  }
}

// remove resource

export function removeResource(resourceId, i) {
  return {
    type: 'REMOVE_RESOURCE',
    i,
    resourceId
  }
}

// add user

export function addUser(avatar, name, uid) {
  return {
    type: 'ADD_USER',
    avatar,
    name,
    uid
  }
}

export function removeUser() {
  return {
    type: 'REMOVE_USER'
  }
}
