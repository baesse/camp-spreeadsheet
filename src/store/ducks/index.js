import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import spreadsheetReducer from './spreadsheetReducer';

const appReducer = (history) => combineReducers({ router: connectRouter(history), spreadsheetReducer });

const Reducers = (history) => appReducer(history);

export default Reducers;
