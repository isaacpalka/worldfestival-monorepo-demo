import { useState, useEffect } from 'react';

import { Patient } from '@worldfestival/data';
import { PatientList } from '@worldfestival/common-ui';

export const MyPatients = () => {
  const [patients, setpatients] = useState<Patient[]>([]);

  useEffect(() => {
    fetch('/api/patients')
      .then((_) => _.json())
      .then((data) => setpatients(data.patients));
  }, []);

  return <PatientList patients={patients} />;
};

export default MyPatients;
