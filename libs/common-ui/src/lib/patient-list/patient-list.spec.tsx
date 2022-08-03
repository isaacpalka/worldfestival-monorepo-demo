import { render } from '@testing-library/react';

import PatientList from './patient-list';

describe('PatientList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PatientList />);
    expect(baseElement).toBeTruthy();
  });
});
