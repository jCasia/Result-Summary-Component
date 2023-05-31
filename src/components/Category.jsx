const Category = ({ category, score, icon }) => {
  return (
    <div
      className='first-of-type:bg-lightRed/10 first-of-type:text-lightRed even:bg-orangeYellow/10 even:text-orangeYellow [&:nth-child(3)]:bg-greenTeal/10 odd:text-greenTeal last-of-type:bg-cobaltBlue/10 last-of-type:text-cobaltBlue
    flex justify-between p-4 rounded-xl'
    >
      <div className='flex gap-2'>
        <img src={icon} alt='icon' />
        <p className='font-bold'>{category}</p>
      </div>
      <p className='font-bold text-darkGreyBlue'>
        {score} <span className='text-darkGreyBlue/60'>/100</span>
      </p>
    </div>
  );
};

export default Category;
