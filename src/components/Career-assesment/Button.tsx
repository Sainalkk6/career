
const Button = ({ disabled, handleClick, label }: { label: string; handleClick: () => void; disabled: boolean }) => (
  <button disabled={disabled} onClick={handleClick} className="flex items-center justify-center py-2 px-5 bg-primary outline-none disabled:bg-[#ddd] text-white hover:bg-button-primary ">
    {label}
  </button>
);
export default Button;
