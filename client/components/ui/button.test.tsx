import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('does not trigger onClick when disabled', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick} disabled>Disabled</Button>);
    
    await user.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders with default variant', () => {
    const { container } = render(<Button>Default</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('bg-gradient-to-r');
  });

  it('renders with destructive variant', () => {
    const { container } = render(<Button variant="destructive">Delete</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('bg-destructive');
  });

  it('renders with outline variant', () => {
    const { container } = render(<Button variant="outline">Outline</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('border');
  });

  it('renders with secondary variant', () => {
    const { container } = render(<Button variant="secondary">Secondary</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('bg-gradient-to-br');
  });

  it('renders with link variant', () => {
    const { container } = render(<Button variant="link">Link</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('underline-offset-4');
  });

  it('renders with plain variant', () => {
    const { container } = render(<Button variant="plain">Plain</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('bg-transparent');
  });

  it('renders with default size', () => {
    const { container } = render(<Button>Default Size</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('h-10');
  });

  it('renders with small size', () => {
    const { container } = render(<Button size="sm">Small</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('h-8');
  });

  it('renders with large size', () => {
    const { container } = render(<Button size="lg">Large</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('h-12');
  });

  it('renders with link size', () => {
    const { container } = render(<Button size="link">Link Size</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('h-auto');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('has data-slot attribute', () => {
    const { container } = render(<Button>Button</Button>);
    const button = container.querySelector('[data-slot="button"]');
    expect(button).toBeInTheDocument();
  });

  it('renders as child component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    const link = screen.getByRole('link', { name: 'Link Button' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('accepts type attribute', () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('applies aria-invalid styles when aria-invalid is set', () => {
    const { container } = render(<Button aria-invalid="true">Invalid</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveAttribute('aria-invalid', 'true');
  });
});
