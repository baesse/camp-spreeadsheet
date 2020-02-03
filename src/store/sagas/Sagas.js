import { all } from 'redux-saga/effects';
import * as SpreadsheetSaga from './spreadsheetSaga';

function* Sagas() {
  yield all([SpreadsheetSaga.watcherSaga()]);
}

export default Sagas;
