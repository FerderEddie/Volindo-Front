import { createContext, useState, useEffect } from "react";

export const DaysValueContext = createContext();

function DaysProvider({ children }) {
  
  const [daysValue, setDaysValue] = useState(() => {
    return localStorage.getItem('daysValue') || "";
  });
  const [startDateWithTime, setStartDateWithTime] = useState(() => {
    return localStorage.getItem('startDateWithTime') || "";
  });
  const [finishDateWithTime, setFinishDateWithTime] = useState(() => {
    return localStorage.getItem('finishDateWithTime') || "";
  });

  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [finishTime, setFinishTime] = useState(null);

  const resetDaysValues = () => {
    setDaysValue("");
    setStartDateWithTime("");
    setFinishDateWithTime("");
    setStartDate(null);
    setFinishDate(null);
    setStartTime(null);
    setFinishTime(null);
  
    localStorage.setItem('daysValue', "");
    localStorage.setItem('startDateWithTime', "");
    localStorage.setItem('finishDateWithTime', "");
    localStorage.removeItem('selectedStartDate');
    localStorage.removeItem('selectedFinishDate');
    localStorage.removeItem('selectedStartTime');
    localStorage.removeItem('selectedFinishTime');
  };
  

  useEffect(() => {
    localStorage.setItem('daysValue', daysValue);
  }, [daysValue]);

  useEffect(() => {
    localStorage.setItem('startDateWithTime', startDateWithTime);
  }, [startDateWithTime]);

  useEffect(() => {
    localStorage.setItem('finishDateWithTime', finishDateWithTime);
  }, [finishDateWithTime]);

  const value = {
    daysValue, setDaysValue,
    startDateWithTime, setStartDateWithTime,
    finishDateWithTime, setFinishDateWithTime,
    resetDaysValues,
    setStartDate,
    setFinishDate,
    setStartTime,
    setFinishTime
   };

  return (
    <>
      <DaysValueContext.Provider value={value}>
        {children}
      </DaysValueContext.Provider>
    </>
  );
}

export default DaysProvider;
