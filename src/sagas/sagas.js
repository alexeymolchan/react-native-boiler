import loadSaga from 'components/app/sagas'

export default function *rootSaga() {
  yield loadSaga();

}