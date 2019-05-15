import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import Display from './Display';
import Dashboard from '../dashboard/Dashboard';

describe('<Display />', () => {

    it('renders component successfully', () => {
        render(<Display />);
    });

    it('matches component snapshot', () => {
        const snap = renderer.create(<Display />);
        expect(snap.toJSON()).toMatchSnapshot();
    });

    it('checks default state labels and colors', () => {
        const { getByText } = render(<Display />);

        const open = getByText('Open');
        const unlocked = getByText('Unlocked');

        expect(open).toHaveClass('green-led');
        expect(unlocked).toHaveClass('green-led');
    });

   it('displays closed if closed:true', () => {
        const { getByText } = render(<Display />);
        
        if(Display.defaultProps.closed !== false) {
            getByText('Closed')
        }
   });

   it('changes className from green-led to red-led if closed:true', () => {
        const { getByText } = render(<Dashboard />);

       
        
        if(Display.defaultProps.closed !== false) {
            const closed = getByText(/Closed/);
            expect(closed).toHaveClass('red-led');
        }
   });

   it('checks changes resulting from button events', () => {
        const { getByText } = render(<Dashboard />);

        const closeBtn = getByText('Close Gate');
        fireEvent.click(closeBtn);

        const closed = getByText(/Closed/);
        expect(closed).toHaveClass('red-led');

        const openBtn = getByText('Open Gate');
        fireEvent.click(openBtn);

        const open = getByText('Open');
        expect(open).toHaveClass('green-led');
   });
});