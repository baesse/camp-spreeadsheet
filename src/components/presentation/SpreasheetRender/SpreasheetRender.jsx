import React from 'react';
import Select from 'react-select/creatable';
import { FormattedMessage } from 'react-intl';
import {
  BoxCelHeader,
  BoxRows,
  CelTextInput,
  BoxColumns,
  Column,
  SelectOptions,
  ButtoNewRow,
  BoxColumnPosition,
  PositionColumn,
} from './spreadsheetRenderStyle';

const SpreasheetRender = ({
  columns,
  spreadsheetUpdateValue,
  addTenRowsToColumn,
  spreadsheetUpdateColumnAttributes,
}) => (
  <BoxColumns>
    {columns.map((column, colIndex) => (
      <Column key={colIndex}>
        <BoxCelHeader first={colIndex === 0}>
          <CelTextInput
            onChange={e =>
              spreadsheetUpdateColumnAttributes({
                col: colIndex,
                colName: e.target.value,
              })
            }
            column
            value={column.colName}
          />
        </BoxCelHeader>
        <BoxRows>
          {column.rows.map((rowItem, rowIndex) => {
            switch (column.colType) {
              case '1':
                return (
                  <BoxColumnPosition>
                    {colIndex === 0 && (
                      <PositionColumn>{rowIndex + 1}</PositionColumn>
                    )}
                    <CelTextInput
                      onChange={e =>
                        spreadsheetUpdateValue({
                          row: rowIndex,
                          col: colIndex,
                          value: e.target.value,
                        })
                      }
                      onBlur={e => {
                        if (!rowItem.value && column.colRequired) {
                          spreadsheetUpdateValue({
                            row: rowIndex,
                            col: colIndex,
                            value: '',
                            valid: false,
                          });
                        }
                      }}
                      required={
                        column.colRequired && !rowItem.valid && !rowItem.value
                      }
                      value={rowItem.value}
                    />
                  </BoxColumnPosition>
                );
              case '2':
                return (
                  <BoxColumnPosition>
                    {colIndex === 0 && (
                      <PositionColumn>{rowIndex + 1}</PositionColumn>
                    )}
                    <CelTextInput
                      onChange={e =>
                        spreadsheetUpdateValue({
                          row: rowIndex,
                          col: colIndex,
                          value: e.target.value,
                        })
                      }
                      onBlur={e => {
                        if (!rowItem.value && column.colRequired) {
                          spreadsheetUpdateValue({
                            row: rowIndex,
                            col: colIndex,
                            value: '',
                            valid: false,
                          });
                        }
                      }}
                      required={
                        column.colRequired && !rowItem.valid && !rowItem.value
                      }
                      value={rowItem.value}
                      type="number"
                    />
                  </BoxColumnPosition>
                );
              case '3':
                return (
                  <BoxColumnPosition>
                    {colIndex === 0 && (
                      <PositionColumn>{rowIndex + 1}</PositionColumn>
                    )}
                    <CelTextInput
                      onChange={e =>
                        spreadsheetUpdateValue({
                          row: rowIndex,
                          col: colIndex,
                          value: e.target.value,
                        })
                      }
                      onBlur={e => {
                        if (!rowItem.value && column.colRequired) {
                          spreadsheetUpdateValue({
                            row: rowIndex,
                            col: colIndex,
                            value: '',
                            valid: false,
                          });
                        }
                      }}
                      required={
                        column.colRequired && !rowItem.valid && !rowItem.value
                      }
                      value={rowItem.value}
                      type="date"
                    />
                  </BoxColumnPosition>
                );
              case '4':
                return (
                  <BoxColumnPosition>
                    {colIndex === 0 && (
                      <PositionColumn>{rowIndex + 1}</PositionColumn>
                    )}
                    <Select
                      options={column.colSelectOptions.map(e => ({
                        value: e,
                        label: e,
                      }))}
                      onBlur={e => {
                        if (!rowItem.value && column.colRequired) {
                          spreadsheetUpdateValue({
                            row: rowIndex,
                            col: colIndex,
                            value: '',
                            valid: false,
                          });
                        }
                      }}
                      onChange={e =>
                        spreadsheetUpdateValue({
                          row: rowIndex,
                          col: colIndex,
                          value: { value: e.value },
                        })
                      }
                      required={
                        column.colRequired && !rowItem.valid && !rowItem.value
                      }
                      styles={SelectOptions}
                    />
                  </BoxColumnPosition>
                );
              default:
                return null;
            }
          })}
          <ButtoNewRow
            onClick={() => addTenRowsToColumn({ col: colIndex })}
            first={colIndex === 0}>
            <FormattedMessage id="newRow" />
          </ButtoNewRow>
        </BoxRows>
      </Column>
    ))}
  </BoxColumns>
);
export default SpreasheetRender;
