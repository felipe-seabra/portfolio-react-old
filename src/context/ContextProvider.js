import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';

function ContextProvider({ children }) {
  const [sumitForm, setSumitForm] = useState(false);

  const contextValue = useMemo(() => ({
    sumitForm,
    setSumitForm,
  }), [sumitForm]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
