import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, afterEach } from 'vitest';
import Home from './Home';

afterEach(() => {
  cleanup();
});

describe('Home Page', () => {
  it('displays the developer title', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: 'Web Application Developer' })
    ).toBeInTheDocument();
  });

  it('displays the Contact Me link', () => {
    render(<Home />);

    const contactLink = screen.getByRole('link', { name: 'Contact Me' });

    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
});