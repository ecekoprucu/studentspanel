import React, { useState } from 'react';
import { ContextType, Student } from 'src/utils/types';

const DataContext = React.createContext<ContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const DataProvider = ({ children }: Props) => {
  const [students, setStudents] = useState<Student[]>([]);

  return (
    <DataContext.Provider value={{ students, setStudents }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
