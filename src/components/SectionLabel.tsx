type SectionLabelProps = {
  children: string;
  className?: string;
};

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`block text-xs uppercase tracking-widest text-chocolate-soft ${className}`}
    >
      {children}
    </span>
  );
}
