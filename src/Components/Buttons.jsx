const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) => {
  const base =
    "px-6 py-4 w-fit font-bold h-fit rounded-lg transition-all duration-200 shadow-md hover:scale-[1.02]";

  const styles = {
    primary: "bg-[#FFC71F] text-black hover:opacity-90",
    secondary:
      "bg-white text-[#FFC71F] border border-[#FFC71F] hover:bg-[##FFF3D2] hover:text-black",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
