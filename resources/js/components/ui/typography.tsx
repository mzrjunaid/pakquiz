// components/ui/typography.tsx
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

/**
 * Heading variants
 */
export const headingVariants = cva('font-sans', {
  variants: {
    size: {
      sm: 'text-lg font-semibold',
      md: 'text-xl font-semibold',
      lg: 'text-2xl font-bold',
      xl: 'text-3xl font-bold',
    },
    textColor: {
        default: 'text-foreground',
        primary: 'text-primary',
        muted: 'text-muted',
    },
  },
  defaultVariants: {
    size: 'lg',
    textColor: 'default',
  },
});

/**
 * Paragraph variants
 */
export const paragraphVariants = cva('font-sans', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    textColor: {
      default: 'text-foreground dark:text-background',
      muted: 'text-gray-600',
    },
  },
  defaultVariants: {
    size: 'md',
    textColor: 'default',
  },
});

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

/**
 * Heading Component
 */
export const TextHeading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size,
  textColor,
  className,
  children,
  ...props
}) => {
  return (
    <Component className={cn(headingVariants({ size, textColor }), className)} {...props}>
      {children}
    </Component>
  );
};

/**
 * Paragraph Component
 */
export const Paragraph: React.FC<ParagraphProps> = ({
  size,
  textColor,
  className,
  children,
  ...props
}) => {
  return (
    <p className={cn(paragraphVariants({ size, textColor }), className)} {...props}>
      {children}
    </p>
  );
};
