import { useState, useEffect } from 'react';
import { synchronizeSystems } from '../engines/Master_Engine'; // تأكد من المسار

export const useEngine = (solarDate: any, lunarDate: any) => {
  const [engineState, setEngineState] = useState(synchronizeSystems(solarDate, lunarDate));

  useEffect(() => {
    // هنا نضيف المنطق الذي يحدث الواجهة كلما تغير الزمن
    // لضمان Zero Drift، نستخدم تحديثاً يعتمد على Timestamp
    const interval = setInterval(() => {
      setEngineState(synchronizeSystems(solarDate, lunarDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [solarDate, lunarDate]);

  return engineState;
};

