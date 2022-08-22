import React from 'react';
import { Props } from '../../store/interfaces/props.interface';

interface ButtonProps extends Props {
  onClick?: () => void;
  variant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  loadingIndicator?: React.ReactNode;
  style?: React.CSSProperties;
}

const getColorCode = (color: ButtonProps['color']) => {
  switch (color) {
    case 'primary':
      return '#1976d2';
    case 'secondary':
      return '#424242';
    case 'success':
      return '#388e3c';
    case 'error':
      return '#d32f2f';
    case 'warning':
      return '#ffa000';
    case 'info':
      return '#1976d2';
    default:
      return '#1976d2';
  }
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  disabled,
  color,
  size,
  startIcon,
  endIcon,
  loading,
  loadingIndicator,
  style,
}) => {
  const defaultStyle: React.CSSProperties = {
    borderRadius: '4px',
    border: 'none',
    padding: '8px',
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    backgroundColor: getColorCode(color || 'primary'),
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
  };

  if (variant === 'contained') {
    defaultStyle.backgroundColor = getColorCode(color || 'primary');
  } else if (variant === 'outlined') {
    defaultStyle.borderColor = getColorCode(color || 'primary');
    defaultStyle.backgroundColor = 'transparent';
    defaultStyle.color = getColorCode(color || 'primary');
  } else if (variant === 'text') {
    defaultStyle.color = getColorCode(color || 'primary');
    defaultStyle.backgroundColor = 'transparent';
    defaultStyle.border = 'none';
  }

  if (size === 'small') {
    defaultStyle.fontSize = '12px';
  } else if (size === 'medium') {
    defaultStyle.fontSize = '14px';
  } else if (size === 'large') {
    defaultStyle.fontSize = '16px';
  }

  if (disabled) {
    defaultStyle.backgroundColor = '#e0e0e0';
    defaultStyle.color = '#000';
    defaultStyle.borderColor = '#e0e0e0';
    defaultStyle.cursor = 'not-allowed';
  }

  if (loading) {
    defaultStyle.cursor = 'not-allowed';
  }

  style = { ...defaultStyle, ...style };

  return (
    <button onClick={onClick} style={style}>
      {loading ? (
        loadingIndicator || <span>Loading...</span>
      ) : (
        <>
          {startIcon}
          {children}
          {endIcon}
        </>
      )}
    </button>
  );
};
