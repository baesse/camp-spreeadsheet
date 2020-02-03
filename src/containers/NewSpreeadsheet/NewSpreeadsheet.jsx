import React, { useEffect, useState } from 'react';
import SpreadSheetBuilder from 'components/presentation/SpreadSheetBuilder';
import Container from 'components/core/Layout/Container';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as SpreeadsheetActions } from 'store/ducks/spreadsheetReducer';
import SpreasheetRender from 'components/presentation/SpreasheetRender';
import { BoxSpreadsheet } from './NewSpreeadsheetStyle';

const NewSpreeadsheet = () => {
  const dispatch = useDispatch();
  const SpreadsheetReducer = useSelector(state => state.spreadsheetReducer);
  const [showFormColumn, setShowFormColumn] = useState(false);

  const [currentSpreadsheetState, setCurrentSpreadsheetState] = useState({
    columns: [],
    rows: [],
  });
  const createNewSpreadsheet = ({
    colName,
    colType,
    colRequired,
    colSelectOptions,
  }) => {
    dispatch(
      SpreeadsheetActions.spreadsheetCreateRequest({
        colName,
        colType,
        colRequired,
        colSelectOptions,
      }),
    );
  };

  const spreadsheetUpdateValue = ({ row, col, value, valid }) => {
    dispatch(
      SpreeadsheetActions.spreadsheetUpdateValueRequest({
        row,
        col,
        value,
        valid,
      }),
    );
  };

  const addTenRowsToColumn = ({ col }) => {
    dispatch(SpreeadsheetActions.addTenRowsRequest({ col }));
  };

  const spreadsheetUpdateColumnAttributes = ({ colName, col }) => {
    dispatch(
      SpreeadsheetActions.spreadsheetUpdateColumnAttributeRequest({
        colName,
        col,
      }),
    );
  };

  const spreadsheetSave = () => {
    dispatch(
      SpreeadsheetActions.spreadsheetPersistRequest(
        currentSpreadsheetState.columns,
      ),
    );
  };

  useEffect(() => {
    setCurrentSpreadsheetState(SpreadsheetReducer);
  }, [SpreadsheetReducer]);
  return (
    <Container>
      <BoxSpreadsheet>
        <SpreadSheetBuilder
          showFormColumn={showFormColumn}
          setShowFormColumn={setShowFormColumn}
          requestCreateSpreadsheet={createNewSpreadsheet}
          columns={currentSpreadsheetState.columns}
          spreadsheetSave={spreadsheetSave}
        />
        {currentSpreadsheetState.columns.length && !showFormColumn ? (
          <SpreasheetRender
            columns={currentSpreadsheetState.columns}
            spreadsheetUpdateValue={spreadsheetUpdateValue}
            addTenRowsToColumn={addTenRowsToColumn}
            spreadsheetUpdateColumnAttributes={
              spreadsheetUpdateColumnAttributes
            }
          />
        ) : null}
      </BoxSpreadsheet>
    </Container>
  );
};

export default NewSpreeadsheet;
