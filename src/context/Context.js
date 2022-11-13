import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function ContextProvider({ children }) {
  const [sub, setSub] = useState(false);

  const contextValue = useMemo(() => ({
    sub,
    setSub,
  }), [sub]);

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
