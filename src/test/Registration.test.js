import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AuthProvider } from '../context/AuthContext'; // Adjust the import path as needed
import Registration from '../components/Auth/Registration';

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    warning: jest.fn(),
  },
}));

describe('Registration Component', () => {
  test('renders registration form', () => {
    render(
      <AuthProvider>
        <Registration />
      </AuthProvider>
    );

    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Register/i })).toBeInTheDocument();
  });

  test('submits the registration form successfully', async () => {
    const { registerUser } = AuthProvider.useAuth();

    render(
      <AuthProvider>
        <Registration />
      </AuthProvider>
    );

    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByRole('button', { name: /Register/i }));

    await waitFor(() => {
      expect(registerUser).toHaveBeenCalledWith({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password123',
      });
    });

    expect(toast.success).toHaveBeenCalledWith('Registration successful! Please login.', expect.any(Object));
  });

  test('displays warning when passwords do not match', async () => {
    render(
      <AuthProvider>
        <Registration />
      </AuthProvider>
    );

    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: 'password456' } });

    fireEvent.click(screen.getByRole('button', { name: /Register/i }));

    await waitFor(() => {
      expect(toast.warning).toHaveBeenCalledWith('password & confirm password not matching!', expect.any(Object));
    });
  });
});
