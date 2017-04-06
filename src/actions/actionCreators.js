export function fetchResources() {
  return {
    type: 'FETCH_RESOURCES'
  }
}

// add resource

export function addResource(resourceId, avatar, imple, name, technology, title, uid, url) {

  const timestamp = Date.now();
  return {
    type: 'ADD_RESOURCE',
    resourceId: `${timestamp}`,
    avatar,
    imple,
    name,
    technology,
    title,
    uid,
    url
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
