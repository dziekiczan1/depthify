# Component Testing

This directory contains React component tests using Jest and React Testing Library.

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Test Structure

Tests are co-located with their components using the `.test.tsx` extension. For example:
- `badge.tsx` → `badge.test.tsx`
- `button.tsx` → `button.test.tsx`

## Testing Guidelines

### What to Test

1. **Rendering**: Component renders correctly with various props
2. **User Interactions**: Click events, form submissions, keyboard navigation
3. **Conditional Rendering**: Components show/hide based on props or state
4. **Accessibility**: ARIA attributes, roles, and semantic HTML
5. **Styling**: CSS classes applied correctly based on variants/props

### Test Examples

#### Basic Rendering Test
```tsx
it('renders with default props', () => {
  render(<Badge text="Test Badge" />);
  expect(screen.getByText('Test Badge')).toBeInTheDocument();
});
```

#### User Interaction Test
```tsx
it('handles click events', async () => {
  const handleClick = jest.fn();
  const user = userEvent.setup();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  await user.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

#### Accessibility Test
```tsx
it('has correct role attribute', () => {
  render(<FormError message="Error message" />);
  const errorElement = screen.getByRole('alert');
  expect(errorElement).toBeInTheDocument();
});
```

## Test Coverage

Current test coverage includes:
- **Badge Component**: 11 tests covering all color variants, pulse animation, and custom classes
- **Button Component**: 19 tests covering all variants, sizes, interactions, and accessibility
- **FormError Component**: 9 tests covering conditional rendering, accessibility, and styling
- **FormSuccess Component**: 9 tests covering conditional rendering, accessibility, and styling

Total: **48 tests passing**

## Best Practices

1. **Use semantic queries**: Prefer `getByRole`, `getByLabelText` over `getByTestId`
2. **Test user behavior**: Focus on what users see and do, not implementation details
3. **Keep tests isolated**: Each test should be independent
4. **Use descriptive test names**: Clearly describe what is being tested
5. **Mock external dependencies**: Use Jest mocks for API calls, routing, etc.
6. **Test accessibility**: Always include ARIA attribute checks

## Dependencies

- **jest**: Testing framework
- **@testing-library/react**: React testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers for DOM
- **@testing-library/user-event**: User interaction simulation
- **ts-node**: TypeScript execution for Jest config

## Configuration

- `jest.config.ts`: Jest configuration with Next.js support
- `jest.setup.ts`: Global test setup (imports jest-dom matchers)

## Adding New Tests

When adding a new component test:

1. Create a `.test.tsx` file next to the component
2. Import the component and testing utilities
3. Write descriptive test cases covering main functionality
4. Run tests to ensure they pass
5. Consider edge cases and error scenarios
