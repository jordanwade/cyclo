import { take, call, put, fork } from 'redux-saga/effects';
import base from '../base';
import * as firebase from 'firebase';


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

function fetch() {
    const newItemRef = database.ref('resources/');
    newItemRef.once("value")
    .then(function(snapshot) {
      console.log('Getting data from Firebase! 🔥')
      console.table(snapshot.exportVal());
      return snapshot.exportVal();
    });

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

function* fetchResources() {
    yield take('FETCH_RESOURCES');
    try {
      yield call(fetch);
    } catch (e) {
      yield put(e);
    }
}

function* rootSaga() {
    yield fork(addResource);
    yield fork(fetchResources);
}

export default rootSaga;
