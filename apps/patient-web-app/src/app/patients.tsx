import { useState, useEffect } from 'react';

import { Patient } from '@worldfestival/data';
import { PatientList } from '@worldfestival/common-ui';

export const Patients = () => {
  const [patients, setpatients] = useState<Patient[]>([]);

  useEffect(() => {
    fetch('/api/patients')
      .then((_) => _.json())
      .then((data) => setpatients(data.patients));
  }, []);

  return (
    <>
      <h1>Patients</h1>
      <PatientList patients={patients} />
    </>
  );
};

export default Patients;
