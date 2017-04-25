import { take, call, put, fork, takeEvery } from 'redux-saga/effects';
import * as firebase from 'firebase';
import * as actions from '../actions/actionCreators'


// function set( email, username ) {
//   firebase.database().ref('resources/').set({
//     username: 'Dan',
//     email: 'dan@gmail.com'
//   });
// }

const database = firebase.database();

function insert(key, resource) {
  const newItemRef = database.ref(`resources/${key}`);
  return newItemRef.set(resource);
}

function* addResource(action) {
  const resource = action.resource;
  try {
    yield call(insert, resource.resourceId, resource);
  } catch (e) {
    yield put(e);
  }
}

function* update(key, payload) {
  console.log('Called update');
  const ref = firebase.database().ref(`resources/${key}`);
  yield ref.update(payload);
}

function* remove(key) {
  console.log('Called remove');
  const ref = firebase.database().ref(`resources/${key}`);
  yield ref.remove();
}

function* updateResource(action) {
  while (true) {
    const action = yield take('UPDATE_RESOURCE');
    const resource = action.updatedResource;
    const key = action.key;
    try {
      yield call(update, key, resource);
    } catch (e) {
      yield put(e);
    }
  }
}

function* removeResource(action) {
  const key = action.key;
  try {
    yield call(remove, key);
  } catch (e) {
    yield put(e);
  }

}

function* getAll(path) {
    const ref = firebase.database().ref(path);
    const data = yield call([ref, ref.once], 'value');
    return data.val();
}

function* getResources() {
  try {
    const resources = yield call(getAll, 'resources');
    yield put(actions.fetchResources(resources));
  } catch (e) {
    yield put(e);
  }
}

function* rootSaga() {
  yield fork(getResources);
  yield fork(updateResource);
  yield takeEvery('ADD_RESOURCE', addResource);
  yield takeEvery('REMOVE_RESOURCE', removeResource);
}

export default rootSaga;
