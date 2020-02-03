import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage, injectIntl } from 'react-intl';
import FormInput from '../FormInput';
import FormSelect from '../FormSelect';
import { Body } from './FormColumnStyle';
import Button from '../Button';
import FormMultSelect from '../FormMultSelect';

const FormColumn = ({
  intl,
  requestCreateSpreadsheet,
  showFormColumn,
  setShowFormColumn,
}) => {
  const initialValues = {
    colName: '',
    colType: '',
    colRequired: false,
    colSelectOptions: [],
  };
  const validationSchema = yup.object().shape({
    colName: yup
      .string()
      .required(intl.formatMessage({ id: 'validations.colNameRequired' })),
    colType: yup
      .string()
      .required(intl.formatMessage({ id: 'validations.colTypeRequired' })),
    colSelectOptions: yup.array().when('colType', {
      is: colType => colType === '4',
      then: yup
        .array()
        .required(
          intl.formatMessage({ id: 'validations.colSelectOptionRequired' }),
        ),
      otherwise: yup.array(),
    }),
  });

  return (
    <Body>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          requestCreateSpreadsheet(values);
          setShowFormColumn(!showFormColumn);
        }}>
        {props => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isSubmitting,
          } = props;
          return (
            <>
              <Row>
                <Col md="3">
                  <FormInput
                    id="colName"
                    name="colName"
                    value={values.colName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isError={errors.colName && touched.colName}
                    error={errors.colName}>
                    <FormattedMessage id="colName" />
                  </FormInput>
                </Col>
                <Col md="2">
                  <FormSelect
                    id="colType"
                    name="colType"
                    label={<FormattedMessage id="colType" />}
                    value={values.colType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isError={errors.colType && touched.colType}
                    error={errors.colType}>
                    <option>{intl.formatMessage({ id: 'select' })}</option>
                    <option value={1}>
                      {intl.formatMessage({ id: 'colOptions.text' })}
                    </option>
                    <option value={2}>
                      {intl.formatMessage({ id: 'colOptions.number' })}
                    </option>
                    <option value={3}>
                      {intl.formatMessage({ id: 'colOptions.date' })}
                    </option>
                    <option value={4}>
                      {intl.formatMessage({ id: 'colOptions.select' })}
                    </option>
                  </FormSelect>
                </Col>
                {values.colType === '4' && (
                  <Col md="2">
                    <FormMultSelect
                      id="colSelectOptions"
                      name="colSelectOptions"
                      label={<FormattedMessage id="colType" />}
                      placeholder={intl.formatMessage({ id: 'createOptions' })}
                      value={values.colSelectOptions}
                      setFieldValue={setFieldValue}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isError={
                        errors.colSelectOptions && touched.colSelectOptions
                      }
                      error={errors.colSelectOptions}>
                      <FormattedMessage id="addOptions" />
                    </FormMultSelect>
                  </Col>
                )}

                <Col md="2">
                  <FormSelect
                    id="colRequired"
                    name="colRequired"
                    label={<FormattedMessage id="colRequired" />}
                    value={values.colRequired}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isError={errors.colRequired && touched.colRequired}
                    error={errors.colRequired}>
                    <option value>{intl.formatMessage({ id: 'yes' })}</option>
                    <option value={false}>
                      {intl.formatMessage({ id: 'no' })}
                    </option>
                  </FormSelect>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <Button disabled={isSubmitting} onClick={handleSubmit}>
                    <FormattedMessage id="addColumn" />
                  </Button>
                </Col>
              </Row>
            </>
          );
        }}
      </Formik>
    </Body>
  );
};

export default injectIntl(FormColumn);
