import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { SessionProvider, signIn, useSession } from "next-auth/react"; // Fix import
import CarDetailPage from '@/app/cardetail/[carId]/page';
import createBooking from '@/libs/createBooking';
import editBooking from '@/libs/editBooking';
import deleteBooking from '@/libs/deleteBooking';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn()
  })
}));

jest.mock('next-auth/react', () => ({
  ...jest.requireActual('next-auth/react'),
  useSession: jest.fn()
}));

describe('Car Booking', () => {
  beforeEach(() => {
    const mockUseSession = jest.fn(() => ({
        data: null,
        status: 'loading'
      }));

      (useSession as jest.Mock).mockImplementation(mockUseSession);

    render(
      <SessionProvider session={null}>
        <CarDetailPage params={{ carId: 'mockCarId' }} />
      </SessionProvider>
    );
  });

  it('should create edit and delete a booking successfully', async () => {
   
    const startDateInput = screen.getByLabelText('Start'); // Update label text here
    userEvent.type(startDateInput, '03/30/2024');
  
    const endDateInput = screen.getByLabelText('End'); // Ensure you have a label with this text
    userEvent.type(endDateInput, '03/31/2024');
  
    const confirmBookingButton = screen.getByRole('button', { name: 'BOOK' , hidden: true })
    userEvent.click(confirmBookingButton);
    
   
    await waitFor(() => expect(createBooking).toHaveBeenCalledWith('mockCarId', expect.any(Date), expect.any(Date)));
  
    
    expect(screen.getByText('Booking Successful')).toBeInTheDocument();
  
   
    const editBookingMock = editBooking as jest.MockedFunction<typeof editBooking>;
    editBookingMock.mockResolvedValueOnce({});
  
   
    const editButton = screen.getByText('Edit');
    userEvent.click(editButton);
    await waitFor(() => expect(screen.getByText('Edit Booking')).toBeInTheDocument());
  
  
    const confirmEditButton = screen.getByText('Save');
    userEvent.click(confirmEditButton);
  

    await waitFor(() => expect(editBookingMock).toHaveBeenCalled());
  

    const deleteBookingMock = deleteBooking as jest.MockedFunction<typeof deleteBooking>;
    deleteBookingMock.mockResolvedValueOnce({});
  
    
    const deleteButton = screen.getByText('Cancel Booking');
    userEvent.click(deleteButton);
  
    
    const confirmDeleteButton = screen.getByText('Confirm');
    userEvent.click(confirmDeleteButton);
  
    
    await waitFor(() => expect(deleteBookingMock).toHaveBeenCalled());
  });
});  