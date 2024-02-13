export const Button = ({ onUpdate, children, className }) => {
  return (
    <button className={className} onClick={onUpdate}>
      {children}
    </button>
  );
};
