import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Welcome } from './welcome';

describe('Welcome', () => {
  it('should render the component', () => {
    render(<Welcome />);
    expect(screen.getByText("What's next?")).toBeInTheDocument();
  });

  it('should render React Router logos with correct alt text', () => {
    render(<Welcome />);
    const logos = screen.getAllByAltText('React Router');
    expect(logos).toHaveLength(2);
  });

  it('should render documentation link', () => {
    render(<Welcome />);
    const docsLink = screen.getByText('React Router Docs');
    expect(docsLink).toBeInTheDocument();
    expect(docsLink.closest('a')).toHaveAttribute(
      'href',
      'https://reactrouter.com/docs'
    );
  });

  it('should render Discord link', () => {
    render(<Welcome />);
    const discordLink = screen.getByText('Join Discord');
    expect(discordLink).toBeInTheDocument();
    expect(discordLink.closest('a')).toHaveAttribute(
      'href',
      'https://rmx.as/discord'
    );
  });

  it('should render links with correct attributes', () => {
    render(<Welcome />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });
  });
});
