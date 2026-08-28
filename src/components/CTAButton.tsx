import { PHONE } from '@/data';

type CTAButtonProps = {
  variant?: 'primary' | 'secondary';
  className?: string;
  children: string;
};

export default function CTAButton({ variant = 'primary', className = '', children }: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center text-sm tracking-widest uppercase transition-all duration-500 ease-out px-8 py-4';
  const styles =
    variant === 'primary'
      ? 'bg-chocolate text-cream hover:bg-chocolate-soft'
      : 'border border-chocolate/30 text-chocolate hover:border-chocolate hover:bg-chocolate/5';

  return (
    <a href={`tel:${PHONE}`} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
