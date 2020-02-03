import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import GlobalStyles from './theme/global';
import theme from './theme/theme';
import store from './store/store';
import Routes from './utils/routes';
import flattenMessages from './helpers/flattenMessages';
import locale from './locale';

const localeLg = navigator.language;
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <IntlProvider
        locale={localeLg}
        messages={flattenMessages(locale[localeLg])}
      >
        <GlobalStyles />
        <Routes />
      </IntlProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
