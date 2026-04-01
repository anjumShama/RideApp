import React, {createContext, useContext, useState, useCallback} from 'react';

const ScreenHistoryContext = createContext();

export function ScreenHistoryProvider({children}) {
  const [history, setHistory] = useState([]);
  const [showRecents, setShowRecents] = useState(false);

  const addScreen = useCallback(name => {
    setHistory(prev => {
      const filtered = prev.filter(s => s !== name);
      return [name, ...filtered].slice(0, 10);
    });
  }, []);

  return (
    <ScreenHistoryContext.Provider
      value={{history, addScreen, showRecents, setShowRecents}}>
      {children}
    </ScreenHistoryContext.Provider>
  );
}

export function useScreenHistory() {
  return useContext(ScreenHistoryContext);
}
