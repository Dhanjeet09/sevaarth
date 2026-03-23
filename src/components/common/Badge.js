export const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${className}`}
  >
    {children}
  </span>
);
