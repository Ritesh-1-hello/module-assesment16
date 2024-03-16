// app.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios'; // Mock Axios for API integration testing
import App from './App';
import AuthenticationComponent from './AuthenticationComponent';
import RegistrationComponent from './RegistrationComponent';
import RecipeComponent from './RecipeComponent';
import UserDashboardComponent from './UserDashboardComponent';

// Mock Axios for API integration testing
jest.mock('axios');

describe('App Component', () => {
  test('renders AuthenticationComponent by default', () => {
    render(<App />);
    expect(screen.getByTestId('authentication-component')).toBeInTheDocument();
  });

  test('renders RegistrationComponent when goToRegister is called', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Register'));
    expect(screen.getByTestId('registration-component')).toBeInTheDocument();
  });

  // Add more tests for App component as needed
});

describe('AuthenticationComponent', () => {
  test('renders authentication form', () => {
    render(<AuthenticationComponent />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  // Add more tests for AuthenticationComponent as needed
});

describe('RegistrationComponent', () => {
  test('renders registration form', () => {
    render(<RegistrationComponent />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
    expect(screen.getByText('Back to Login')).toBeInTheDocument();
  });

  // Add more tests for RegistrationComponent as needed
});

describe('RecipeComponent', () => {
  test('fetches recipes and renders them', async () => {
    const recipes = [
      { recipe: { label: 'Test Recipe 1', image: 'test-image.jpg' } },
      { recipe: { label: 'Test Recipe 2', image: 'test-image.jpg' } }
    ];

    axios.get.mockResolvedValueOnce({ data: { hits: recipes } });

    render(<RecipeComponent />);

    // Wait for recipes to load
    await screen.findByText('Test Recipe 1');

    expect(screen.getByText('Test Recipe 1')).toBeInTheDocument();
    expect(screen.getByText('Test Recipe 2')).toBeInTheDocument();
  });

  // Add more tests for RecipeComponent as needed
});

describe('UserDashboardComponent', () => {
  test('renders user dashboard with search history and favorite recipes', () => {
    const user = 'testUser';

    render(<UserDashboardComponent user={user} />);

    expect(screen.getByText(`Welcome, ${user}!`)).toBeInTheDocument();
    expect(screen.getByText('Search History:')).toBeInTheDocument();
    expect(screen.getByText('Favorite Recipes:')).toBeInTheDocument();
  });

  // Add more tests for UserDashboardComponent as needed
});
