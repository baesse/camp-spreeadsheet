import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  spreadsheetCreateRequest: ['payload'],
  spreadsheetCreateSuccess: ['spreeadsheet'],
  spreadsheetCreateFail: ['error'],

  spreadsheetUpdateValueRequest: ['payload'],
  spreadsheetUpdateValueSuccess: ['spreeadsheet'],
  spreadsheetUpdateValueFail: ['error'],

  addTenRowsRequest: ['col'],
  addTenRowsSuccess: ['spreeadsheet'],
  addTenRowsFail: ['error'],

  spreadsheetUpdateColumnAttributeRequest: ['payload'],
  spreadsheetUpdateColumnAttributeSuccess: ['spreeadsheet'],
  spreadsheetUpdateColumnAttributeFail: ['error'],

  spreadsheetPersistRequest: ['payload'],
  spreadsheetPersistSuccess: ['spreeadsheet'],
  spreadsheetPersistFail: ['error'],
});

const INITIAL_STATE = {
  columns: [],
};

const spreadsheetCreateRequest = state => ({ ...state, isLoading: true });
const spreadsheetCreateSuccess = (state, spreeadsheet) => ({
  columns: [
    ...state.columns,
    {
      ...spreeadsheet.payload,
      rows: [
        { value: '', valid: true },
        { value: '', valid: true },
        { value: '', valid: true },
        { value: '', valid: true },
        { value: '', valid: true },
        { value: '', valid: true },
        { value: '', valid: true },
        { value: '', valid: true },
        { value: '', valid: true },
        { value: '', valid: true },
      ],
    },
  ],
});
const spreadsheetCreateFail = (state, { errors }) => ({
  ...state,
  isLoading: false,
  error: [...errors],
});

const spreadsheetUpdateValueRequest = state => ({ ...state, isLoading: true });
const spreadsheetUpdateValueSuccess = (state, { col, row, value, valid }) => {
  const memoized = state;
  memoized.columns[col].rows[row] = { value, valid };
  return {
    ...memoized,
  };
};
const spreadsheetUpdateValueFail = (state, { errors }) => ({
  ...state,
  isLoading: false,
  error: [...errors],
});

const addTenRowsRequestRequest = state => ({ ...state, isLoading: true });
const addTenRowsRequestSuccess = (state, { col }) => {
  const memoized = state;
  memoized.columns[col.col].rows = [
    ...memoized.columns[col.col].rows,
    ...[
      { value: '', valid: true },
      { value: '', valid: true },
      { value: '', valid: true },
      { value: '', valid: true },
      { value: '', valid: true },
      { value: '', valid: true },
      { value: '', valid: true },
      { value: '', valid: true },
      { value: '', valid: true },
      { value: '', valid: true },
    ],
  ];
  return {
    ...memoized,
  };
};
const addTenRowsRequestFail = (state, { errors }) => ({
  ...state,
  isLoading: false,
  error: [...errors],
});

const spreadsheetUpdateColumnAttributeRequest = state => ({
  ...state,
  isLoading: true,
});
const spreadsheetUpdateColumnAttributeSuccess = (state, { col, colName }) => {
  const memoized = state;
  memoized.columns[col].colName = colName;
  return {
    ...memoized,
  };
};
const spreadsheetUpdateColumnAttributeFail = (state, { errors }) => ({
  ...state,
  isLoading: false,
  error: [...errors],
});

const spreadsheetPersistRequest = state => ({
  ...state,
  isLoading: true,
});
const spreadsheetPersistSuccess = () => ({
  ...INITIAL_STATE,
});
const spreadsheetPersistFail = (state, { errors }) => ({
  ...state,
  isLoading: false,
  error: [...errors],
});

export default createReducer(INITIAL_STATE, {
  [Types.SPREADSHEET_CREATE_REQUEST]: spreadsheetCreateRequest,
  [Types.SPREADSHEET_CREATE_SUCCESS]: spreadsheetCreateSuccess,
  [Types.SPREADSHEET_CREATE_FAIL]: spreadsheetCreateFail,

  [Types.SPREADSHEET_UPDATE_VALUE_REQUEST]: spreadsheetUpdateValueRequest,
  [Types.SPREADSHEET_UPDATE_VALUE_SUCCESS]: spreadsheetUpdateValueSuccess,
  [Types.SPREADSHEET_UPDATE_VALUE_FAIL]: spreadsheetUpdateValueFail,

  [Types.ADD_TEN_ROWS_REQUEST]: addTenRowsRequestRequest,
  [Types.ADD_TEN_ROWS_SUCCESS]: addTenRowsRequestSuccess,
  [Types.ADD_TEN_ROWS_FAIL]: addTenRowsRequestFail,

  [Types.SPREADSHEET_UPDATE_COLUMN_ATTRIBUTE_REQUEST]: spreadsheetUpdateColumnAttributeRequest,
  [Types.SPREADSHEET_UPDATE_COLUMN_ATTRIBUTE_SUCCESS]: spreadsheetUpdateColumnAttributeSuccess,
  [Types.SPREADSHEET_UPDATE_COLUMN_ATTRIBUTE_FAIL]: spreadsheetUpdateColumnAttributeFail,

  [Types.SPREADSHEET_PERSIST_REQUEST]: spreadsheetPersistRequest,
  [Types.SPREADSHEET_PERSIST_SUCCESS]: spreadsheetPersistSuccess,
  [Types.SPREADSHEET_PERSIST_FAIL]: spreadsheetPersistFail,
});
