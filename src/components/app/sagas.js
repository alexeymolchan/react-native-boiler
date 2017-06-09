import {takeEvery, all} from 'redux-saga/effects';

function* initFetch(action) {
  console.log("Saga initialized", action);
}

export default function* LoadSaga() {
    yield all([
      takeEvery('Hello', initFetch)
    ])
}