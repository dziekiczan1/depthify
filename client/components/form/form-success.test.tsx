import { render, screen } from '@testing-library/react';
import { FormSuccess } from './form-success';

describe('FormSuccess', () => {
  it('renders success message when message is provided', () => {
    render(<FormSuccess message="Operation successful" />);
    expect(screen.getByText('Operation successful')).toBeInTheDocument();
  });

  it('does not render when message is not provided', () => {
    const { container } = render(<FormSuccess />);
    expect(container.firstChild).toBeNull();
  });

  it('does not render when message is empty string', () => {
    const { container } = render(<FormSuccess message="" />);
    expect(container.firstChild).toBeNull();
  });

  it('has correct role attribute', () => {
    render(<FormSuccess message="Success message" />);
    const successElement = screen.getByRole('status');
    expect(successElement).toBeInTheDocument();
  });

  it('has correct aria-live attribute', () => {
    const { container } = render(<FormSuccess message="Success message" />);
    const successElement = container.querySelector('[aria-live="polite"]');
    expect(successElement).toBeInTheDocument();
  });

  it('renders CheckCircle icon', () => {
    const { container } = render(<FormSuccess message="Success message" />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('icon is hidden from accessibility tree', () => {
    const { container } = render(<FormSuccess message="Success message" />);
    const icon = container.querySelector('[aria-hidden]');
    expect(icon).toBeInTheDocument();
  });

  it('has correct styling classes', () => {
    const { container } = render(<FormSuccess message="Success message" />);
    const successElement = screen.getByRole('status');
    expect(successElement).toHaveClass('bg-emerald-500/15');
    expect(successElement).toHaveClass('text-emerald-500');
  });

  it('renders long success messages correctly', () => {
    const longMessage = 'This is a very long success message that should still render correctly without any issues';
    render(<FormSuccess message={longMessage} />);
    expect(screen.getByText(longMessage)).toBeInTheDocument();
  });
});
