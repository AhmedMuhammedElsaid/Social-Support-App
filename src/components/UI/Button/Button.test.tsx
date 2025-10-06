// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { describe, it, expect, vi } from 'vitest';
// import Button from './Button'; // Adjust import path as needed
// import { ButtonProps } from '../../../types/componentsTypes';

// // Mock react-i18next
// vi.mock('react-i18next', () => ({
//     useTranslation: () => ({
//         t: (key: string) => key,
//     }),
// }));

// describe('Button Component', () => {
//     const defaultProps: ButtonProps = {
//         children: 'Click me',
//     };

//     it('renders with default props', () => {
//         render(<Button {...defaultProps} />);

//         const button = screen.getByRole('button', { name: 'Click me' });
//         expect(button).toBeInTheDocument();
//         expect(button).toHaveClass('btn btn-primary btn-md');
//         expect(button).not.toBeDisabled();
//     });

//     it('renders with correct variant classes', () => {
//         const { rerender } = render(<Button {...defaultProps} variant="secondary" />);

//         let button = screen.getByRole('button');
//         expect(button).toHaveClass('btn btn-secondary btn-md');

//         rerender(<Button {...defaultProps} variant="danger" />);
//         button = screen.getByRole('button');
//         expect(button).toHaveClass('btn btn-danger btn-md');
//     });

//     it('renders with correct size classes', () => {
//         const { rerender } = render(<Button {...defaultProps} size="sm" />);

//         let button = screen.getByRole('button');
//         expect(button).toHaveClass('btn btn-primary btn-sm');

//         rerender(<Button {...defaultProps} size="lg" />);
//         button = screen.getByRole('button');
//         expect(button).toHaveClass('btn btn-primary btn-lg');
//     });

//     it('renders with additional custom className', () => {
//         render(<Button {...defaultProps} className="custom-class" />);

//         const button = screen.getByRole('button');
//         expect(button).toHaveClass('btn btn-primary btn-md custom-class');
//     });

//     it('handles disabled state', () => {
//         render(<Button {...defaultProps} disabled />);

//         const button = screen.getByRole('button');
//         expect(button).toBeDisabled();
//     });

//     it('shows loading state with spinner and text', () => {
//         render(<Button {...defaultProps} isLoading />);

//         const button = screen.getByRole('button');
//         expect(button).toBeDisabled();

//         // Check for loading text
//         expect(screen.getByText('common.loading')).toBeInTheDocument();

//         // Check for spinner SVG
//         const spinner = screen.getByRole('button').querySelector('svg');
//         expect(spinner).toBeInTheDocument();
//         expect(spinner).toHaveClass('animate-spin');
//     });

//     it('is disabled when both disabled and isLoading are true', () => {
//         render(<Button {...defaultProps} disabled isLoading />);

//         const button = screen.getByRole('button');
//         expect(button).toBeDisabled();
//     });

//     it('handles click events', () => {
//         const handleClick = vi.fn();
//         render(<Button {...defaultProps} onClick={handleClick} />);

//         const button = screen.getByRole('button');
//         fireEvent.click(button);

//         expect(handleClick).toHaveBeenCalledTimes(1);
//     });

//     it('passes through additional props', () => {
//         render(
//             <Button
//                 {...defaultProps}
//                 type="submit"
//                 data-testid="custom-button"
//                 aria-label="Custom label"
//             />
//         );

//         const button = screen.getByRole('button');
//         expect(button).toHaveAttribute('type', 'submit');
//         expect(button).toHaveAttribute('data-testid', 'custom-button');
//         expect(button).toHaveAttribute('aria-label', 'Custom label');
//     });

//     it('renders children correctly when not loading', () => {
//         render(
//             <Button>
//                 <span>Custom child</span>
//             </Button>
//         );

//         expect(screen.getByText('Custom child')).toBeInTheDocument();
//     });

//     it('does not render children when loading', () => {
//         render(
//             <Button isLoading>
//                 <span>Custom child</span>
//             </Button>
//         );

//         expect(screen.queryByText('Custom child')).not.toBeInTheDocument();
//         expect(screen.getByText('common.loading')).toBeInTheDocument();
//     });
// });
