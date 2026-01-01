import { render, screen } from '@testing-library/react';
import { FormError } from './form-error';

describe('FormError', () => {
  it('renders error message when message is provided', () => {
    render(<FormError message="This is an error" />);
    expect(screen.getByText('This is an error')).toBeInTheDocument();
  });

  it('does not render when message is not provided', () => {
    const { container } = render(<FormError />);
    expect(container.firstChild).toBeNull();
  });

  it('does not render when message is empty string', () => {
    const { container } = render(<FormError message="" />);
    expect(container.firstChild).toBeNull();
  });

  it('has correct role attribute', () => {
    render(<FormError message="Error message" />);
    const errorElement = screen.getByRole('alert');
    expect(errorElement).toBeInTheDocument();
  });

  it('has correct aria-live attribute', () => {
    const { container } = render(<FormError message="Error message" />);
    const errorElement = container.querySelector('[aria-live="assertive"]');
    expect(errorElement).toBeInTheDocument();
  });

  it('renders AlertTriangle icon', () => {
    const { container } = render(<FormError message="Error message" />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('icon is hidden from accessibility tree', () => {
    const { container } = render(<FormError message="Error message" />);
    const icon = container.querySelector('[aria-hidden]');
    expect(icon).toBeInTheDocument();
  });

  it('has correct styling classes', () => {
    const { container } = render(<FormError message="Error message" />);
    const errorElement = screen.getByRole('alert');
    expect(errorElement).toHaveClass('bg-destructive/15');
    expect(errorElement).toHaveClass('text-destructive');
  });

  it('renders long error messages correctly', () => {
    const longMessage = 'This is a very long error message that should still render correctly without any issues';
    render(<FormError message={longMessage} />);
    expect(screen.getByText(longMessage)).toBeInTheDocument();
  });
});
