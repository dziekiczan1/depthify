import { render, screen } from '@testing-library/react';
import { Badge } from './badge';

describe('Badge', () => {
  it('renders with default props', () => {
    render(<Badge text="Test Badge" />);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('renders with blue color by default', () => {
    const { container } = render(<Badge text="Blue Badge" />);
    const badge = container.querySelector('.bg-blue-100');
    expect(badge).toBeInTheDocument();
  });

  it('renders with green color when specified', () => {
    const { container } = render(<Badge text="Green Badge" color="green" />);
    const badge = container.querySelector('.bg-green-100');
    expect(badge).toBeInTheDocument();
  });

  it('renders with purple color when specified', () => {
    const { container } = render(<Badge text="Purple Badge" color="purple" />);
    const badge = container.querySelector('.bg-purple-100');
    expect(badge).toBeInTheDocument();
  });

  it('renders with red color when specified', () => {
    const { container } = render(<Badge text="Red Badge" color="red" />);
    const badge = container.querySelector('.bg-red-100');
    expect(badge).toBeInTheDocument();
  });

  it('renders without pulse indicator by default', () => {
    const { container } = render(<Badge text="No Pulse" />);
    const pulse = container.querySelector('.animate-pulse');
    expect(pulse).not.toBeInTheDocument();
  });

  it('renders with pulse indicator when showPulse is true', () => {
    const { container } = render(<Badge text="With Pulse" showPulse />);
    const pulse = container.querySelector('.animate-pulse');
    expect(pulse).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Badge text="Custom Class" className="custom-test-class" />);
    const badge = container.querySelector('.custom-test-class');
    expect(badge).toBeInTheDocument();
  });

  it('pulse indicator has correct color for blue badge', () => {
    const { container } = render(<Badge text="Blue Pulse" color="blue" showPulse />);
    const pulse = container.querySelector('.bg-blue-500');
    expect(pulse).toBeInTheDocument();
  });

  it('pulse indicator has correct color for green badge', () => {
    const { container } = render(<Badge text="Green Pulse" color="green" showPulse />);
    const pulse = container.querySelector('.bg-green-500');
    expect(pulse).toBeInTheDocument();
  });

  it('pulse indicator is hidden from accessibility tree', () => {
    const { container } = render(<Badge text="Pulse A11y" showPulse />);
    const pulse = container.querySelector('[aria-hidden]');
    expect(pulse).toBeInTheDocument();
  });
});
