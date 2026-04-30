export const linkClass = ({ isActive }) =>
  `transition-colors duration-200 hover:text-[#FFC71F] ${
    isActive ? "underline" : ""
  }`;
