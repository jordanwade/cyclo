import { take, call, put, fork } from 'redux-saga/effects';
import * as firebase from 'firebase';
import * as actions from '../actions/actionCreators'


// function set( email, username ) {
//   firebase.database().ref('resources/').set({
//     username: 'Dan',
//     email: 'dan@gmail.com'
//   });
// }

const database = firebase.database();

function insert(item) {
  const newItemRef = database.ref('resources/');
  return newItemRef.push(item);
}

function* addResource() {
  const action = yield take('ADD_RESOURCE');
  const resource = action.resource;
  try {
    yield call(insert, resource);
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
  yield fork(addResource);
  yield fork(getResources);
}

export default rootSaga;
