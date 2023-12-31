import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { sampleData } from '../../../app/layout/api/SampleData';
import { useEffect, useState } from 'react';
import { AppEvent } from '../../../app/types/event';

export default function EventDashboard() {
  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    setEvents(sampleData);
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h3>Filters</h3>
        </Grid.Column>
      </Grid>
    </div>
  );
}
