import React, { Component } from 'react';

import { Button, Form, Segment } from 'semantic-ui-react';

class EventForm extends Component {
  render() {
    const { cancelFormOpen } = this.props;

    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Event Title</label>
            <input type="text" placeholder="Event Title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input type="text" placeholder="City Event is Taking Place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input type="text" placeholder="Venue of the Event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input type="text" placeholder="Name of the Person Hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={cancelFormOpen} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
