import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import renderer from 'react-test-renderer';
import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard';

describe('<Controls />', () => {

    it('renders component successfully', () => {
        render(<Controls />);
    });

    it('matches component snapshot', () => {
        const snap = renderer.create(<Controls />);
        expect(snap.toJSON()).toMatchSnapshot();
    });

    it('checks close gate button', () => {
        const { getByText } = render(<Dashboard />)

        const closeBtn = getByText('Close Gate');
        fireEvent.click(closeBtn);
        getByText(/Closed/);
    });
    
    it('checks open gate button', () => {
        const { getByText } = render(<Dashboard />)

        const closeBtn = getByText('Close Gate');
        fireEvent.click(closeBtn);

        const openBtn = getByText('Open Gate');
        fireEvent.click(openBtn);
        getByText(/Open/);
    });

    it('checks lock button', () => {
        const { getByText } = render(<Dashboard />)

        const closeBtn = getByText('Close Gate');
        fireEvent.click(closeBtn);

        const lockBtn = getByText('Lock Gate');
        fireEvent.click(lockBtn);
        getByText(/Locked/);
    });

    it('checks unlock button', () => {
        const { getByText } = render(<Dashboard />)

        const closeBtn = getByText('Close Gate');
        fireEvent.click(closeBtn);

        const lockBtn = getByText('Lock Gate');
        fireEvent.click(lockBtn);

        const unlockBtn = getByText('Unlock Gate');
        fireEvent.click(unlockBtn);
        getByText(/Unlocked/);
    });

    it('checks entire button sequence from closed-locked-unlocked-open', () => {
        const { getByText } = render(<Dashboard />)

        const closeBtn = getByText('Close Gate');
        fireEvent.click(closeBtn);
        getByText(/Closed/);

        const lockBtn = getByText('Lock Gate');
        fireEvent.click(lockBtn);
        getByText(/Locked/);

        const unlockBtn = getByText('Unlock Gate');
        fireEvent.click(unlockBtn);
        getByText(/Unlocked/);

        const openBtn = getByText('Open Gate');
        fireEvent.click(openBtn);
        getByText(/Open/);
    });
});
