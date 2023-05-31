const Button = ({ label }) => {
  return (
    <button
      type='button'
      className=' bg-darkGreyBlue text-white rounded-full py-4 text-xl hover:bg-royalBlue transition-all duration-500 tablet:py-3'
    >
      {label}
    </button>
  );
};

export default Button;
