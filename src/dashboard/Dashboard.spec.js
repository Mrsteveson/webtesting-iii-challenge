import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {

    it('renders component successfully', () => {
        render(<Dashboard />);
    });

    it('matches component snapshot', () => {
        const snap = renderer.create(<Dashboard />);
        expect(snap.toJSON()).toMatchSnapshot();
    });

    it('checks default app display', () => {
        const { getByText } = render(<Dashboard />);

        getByText('Unlocked')
        getByText('Open')
        getByText(/lock gate/i)
        getByText(/close gate/i)
    });
});
