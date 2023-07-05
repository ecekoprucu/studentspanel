import React, { useState } from 'react';
import { ContextType, Student } from 'src/utils/types';

const DataContext = React.createContext<ContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const DataProvider = ({ children }: Props) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [totalData, setTotalData] = useState<number>(0);

  return (
    <DataContext.Provider
      value={{ students, setStudents, totalData, setTotalData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
