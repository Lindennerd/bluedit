interface FormGrouProps {
  className?: string;
  children: React.ReactNode;
}

export function FormGroup({ className, children }: FormGrouProps) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}
