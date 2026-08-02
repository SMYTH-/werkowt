import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import './button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  underline?: boolean;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional trailing icon */
  icon?: ReactNode;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  underline = false,
  label,
  icon,
  className,
  type = 'button',
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button--primary' : underline ? 'button--underline' : 'button--secondary';
  return (
    <button
      type={type}
      className={clsx('button', `button--${size}`, mode, className)}
      {...props}
    >
      <span>{label}</span>
      {icon}
    </button>
  );
};
