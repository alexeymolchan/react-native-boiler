import {takeEvery, all} from 'redux-saga/effects';

function* initFetch(action) {

  const {params} = action;
  console.log("Init",action, params);
}

export default function* LoadSaga() {
    yield all([
      takeEvery('DIdloAction', initFetch)
    ])
}