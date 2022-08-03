import styles from './patient-list.module.css';

import { Patient } from '@worldfestival/data';

/* eslint-disable-next-line */
export interface PatientListProps {
  patients: Patient[];
}

export function PatientList({ patients }: PatientListProps) {
  return (
    <div className={styles['container']}>
      <ul>
        {patients.map((t) => (
          <li key={t.id} className={'patient'}>
            {t.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;
