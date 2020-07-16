import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

it('shows an error if the restaurant data fails to load', async () => {
  fetch.mockRejectOnce(new Error('Nope!'));
  const app = mount(<App />);

  await new Promise(setTimeout);
  app.update();

  expect(app).toIncludeText('unavailable');
});
