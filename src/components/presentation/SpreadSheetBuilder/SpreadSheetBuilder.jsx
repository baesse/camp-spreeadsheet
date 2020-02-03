import React from 'react';
import { FormattedMessage } from 'react-intl';
import FormColumn from 'components/core/FormColumn';
import { Header, Option, Label } from './styles';

export default function SpreadSheetBuilder({
  requestCreateSpreadsheet,
  showFormColumn,
  setShowFormColumn,
  columns,
  spreadsheetSave,
}) {
  return (
    <>
      <Header>
        <Option onClick={() => setShowFormColumn(!showFormColumn)}>
          <Label>
            <FormattedMessage id="newCol" />
          </Label>
        </Option>
        {columns.length !== 0 && (
          <Option onClick={() => spreadsheetSave()}>
            <Label>
              <FormattedMessage id="save" />
            </Label>
          </Option>
        )}
      </Header>
      {showFormColumn && (
        <FormColumn
          showFormColumn={showFormColumn}
          setShowFormColumn={setShowFormColumn}
          requestCreateSpreadsheet={requestCreateSpreadsheet}
        />
      )}
    </>
  );
}
