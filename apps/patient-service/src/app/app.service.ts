import { Injectable } from '@nestjs/common';
import { Patient } from '@worldfestival/data';

@Injectable()
export class AppService {
  getData(): { patients: Patient[] } {
    return {
      patients: [
        { id: 0, name: 'John Galt' },
        { id: 1, name: 'Henry Rearden' },
        { id: 2, name: 'Dagny Taggart' },
      ],
    };
  }
}
