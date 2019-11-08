import React, { useContext } from 'react';

const NameContext = React.createContext();

export const NameProvider = ({ rect, children }) => (
  <NameContext.Provider value={rect}>{children}</NameContext.Provider>
);

export function useNameSize() {
  return useContext(NameContext);
}
