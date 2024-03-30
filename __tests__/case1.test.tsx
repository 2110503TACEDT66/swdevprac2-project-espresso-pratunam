import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { signIn } from "next-auth/react";
import SignUpPage from '@/app/signup/page';
import Login from '@/components/login';

const mockSignIn = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
  }));

console.log = jest.fn();
  
describe('Sign-Up and Sign-In', () => {
  it('should sign up and sign in user successfully', async () => {


    // Sign-Up
    render(<SignUpPage />);
    const nameInput = screen.getByPlaceholderText('Enter your username...');
    await userEvent.type(nameInput, 'John');
    const emailInput = screen.getByPlaceholderText('Enter your email...');
    await userEvent.type(emailInput, 'john@gmail.com');
    const phoneInput = screen.getByPlaceholderText('Enter your phone...');
    await userEvent.type(phoneInput, '1234567890');
    const passwordInput = screen.getByPlaceholderText('Enter your password...');
    await userEvent.type(passwordInput, '12345678');
    const signUpButton = screen.getByRole('button', { name: 'Register' });
    userEvent.click(signUpButton);
    await waitFor(() => {
        expect(screen.getByText('Processing...')).toBeInTheDocument();
      });
      waitFor(() => {
        expect(screen.getByText('Sign Up successfully')).toBeInTheDocument();
      });
  

    
    // Sign-In
    render(<Login signIn={mockSignIn} />);
    const signInEmailInput = screen.getByPlaceholderText('Enter your email');
    await userEvent.type(signInEmailInput, 'john@gmail.com');
    const signInPasswordInput = screen.getByPlaceholderText('Enter your password');
    await userEvent.type(signInPasswordInput, '12345678');
    const signInButton = screen.getByRole('button', { name: 'Sign in' });
    await userEvent.click(signInButton);
      await waitFor(() =>
      expect(mockSignIn).toHaveBeenCalledWith('credentials', {
        email: 'john@gmail.com',
        password: '12345678',
        redirect: true,
      })
    );
  });
});
