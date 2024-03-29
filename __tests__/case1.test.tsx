import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { signIn } from "next-auth/react";
import SignUpPage from '@/app/signup/page';
import Login from '@/components/login';


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
    userEvent.type(nameInput, 'John');
    const emailInput = screen.getByPlaceholderText('Enter your email...');
    userEvent.type(emailInput, 'john@gmail.com');
    const phoneInput = screen.getByPlaceholderText('Enter your phone...');
    userEvent.type(phoneInput, '1234567890');
    const passwordInput = screen.getByPlaceholderText('Enter your password...');
    userEvent.type(passwordInput, '12345678');
    const signUpButton = screen.getByRole('button', { name: 'Register' });
    userEvent.click(signUpButton);
    await waitFor(() => expect(console.log).toHaveBeenCalledWith('Sign Up successful'));

    
    // Sign-In
    render(<Login />);
    const signInEmailInput = screen.getByPlaceholderText('Enter your email');
    userEvent.type(signInEmailInput, 'john@gmail.com');
    const signInPasswordInput = screen.getByPlaceholderText('Enter your password');
    userEvent.type(signInPasswordInput, '12345678');
    const signInButton = screen.getByRole('button', { name: 'Sign in' });
    userEvent.click(signInButton);
    await waitFor(() => expect(signIn).toHaveBeenCalledWith('credentials', {
      email: 'john@gmail.com',
      password: '12345678',
      redirect: true
    }));
  });
});
