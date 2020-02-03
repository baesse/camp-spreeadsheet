import { takeLatest, put } from 'redux-saga/effects';
import { Types } from 'store/ducks/spreadsheetReducer';
import { POST_SPREADSHEET } from 'utils/constants/endPoints';
import API from '../../utils/API';

function* addTenRows({ col }) {
  try {
    yield put({ type: Types.ADD_TEN_ROWS_SUCCESS, col });
  } catch (error) {
    yield put({ type: Types.ADD_TEN_ROWS_FAIL, error });
  }
}

function* createSpreadsheet({ payload }) {
  try {
    yield put({ type: Types.SPREADSHEET_CREATE_SUCCESS, payload });
  } catch (error) {
    yield put({ type: Types.SPREADSHEET_CREATE_FAIL, error });
  }
}

function* updateSpreadsheet({ payload }) {
  try {
    yield put({
      type: Types.SPREADSHEET_UPDATE_VALUE_SUCCESS,
      col: payload.col,
      row: payload.row,
      value: payload.value,
      valid: payload.valid,
    });
  } catch (error) {
    yield put({ type: Types.SPREADSHEET_UPDATE_VALUE_FAIL, error });
  }
}

function* updateSpreadsheetAttributes({ payload }) {
  try {
    yield put({
      type: Types.SPREADSHEET_UPDATE_COLUMN_ATTRIBUTE_SUCCESS,
      colName: payload.colName,
      col: payload.col,
    });
  } catch (error) {
    yield put({ type: Types.SPREADSHEET_UPDATE_COLUMN_ATTRIBUTE_FAIL, error });
  }
}

function* spreadsheetSave({ payload }) {
  try {
    yield API.post(POST_SPREADSHEET, payload);
    yield put({
      type: Types.SPREADSHEET_PERSIST_SUCCESS,
    });
  } catch (error) {
    yield put({ type: Types.SPREADSHEET_PERSIST_FAIL, error });
  }
}

export function* watcherSaga() {
  yield takeLatest(Types.SPREADSHEET_CREATE_REQUEST, createSpreadsheet);
  yield takeLatest(Types.SPREADSHEET_UPDATE_VALUE_REQUEST, updateSpreadsheet);
  yield takeLatest(Types.ADD_TEN_ROWS_REQUEST, addTenRows);
  yield takeLatest(
    Types.SPREADSHEET_UPDATE_COLUMN_ATTRIBUTE_REQUEST,
    updateSpreadsheetAttributes,
  );
  yield takeLatest(Types.SPREADSHEET_PERSIST_REQUEST, spreadsheetSave);
}
