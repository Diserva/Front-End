import React, { createContext, useState, ReactNode, useContext } from 'react';
import Alert from './index';

interface AlertContextProps {
  showAlert: (message: string) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const useAlert = (): AlertContextProps => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};

export const AlertProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const showAlert = (message: string) => {
    setAlertMessage(message);
  };

  const hideAlert = () => {
    setAlertMessage(null);
  };

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {alertMessage && <Alert message={alertMessage} onClose={hideAlert} />}
    </AlertContext.Provider>
  );
};
