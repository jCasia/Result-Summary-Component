import Category from './components/Category';
import Button from './components/Button';
import { data } from './data';

const App = () => {
  return (
    <main className='w-full h-screen font-HankenG tablet:grid tablet:place-items-center'>
      <div className='grid grid-cols-1 tablet:grid-cols-2 tablet:shadow-lg tablet:rounded-[30px] tablet:mx-5 tablet:overflow-hidden tablet:max-w-3xl'>
        <div className='bg-gradient-to-t from-royalBlue to-slateBlue flex flex-col gap-5 justify-center items-center text-center py-7 px-10 rounded-b-[30px] tablet:gap-7 tablet:py-11 tablet:px-16'>
          <p className='text-lightLavender text-xl tablet:text-2xl'>
            Your Result
          </p>
          <div className='bg-gradient-to-t from-persianBlue to-violetBlue p-10 rounded-full relative tablet:p-16'>
            <p className='text-6xl font-bold text-white tablet:text-7xl'>76</p>
            <p className='absolute text-lightLavender/50 text-base right-12 tablet:right-20'>
              of 100
            </p>
          </div>
          <div className='flex flex-col gap-2 tablet:gap-3'>
            <p className='text-2xl text-white tablet:text-3xl'>Great</p>
            <p className='text-lightLavender tablet: text-lg'>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className='py-6 px-10 flex flex-col gap-6 tablet:gap-8 '>
          <h1 className='text-lg font-extrabold text-darkGreyBlue tablet:text-2xl'>
            Summary
          </h1>
          <div className='flex flex-col gap-5 mb-2'>
            {data.map((item, index) => {
              return <Category {...item} key={index} />;
            })}
          </div>
          <Button label='Continue' />
        </div>
      </div>
    </main>
  );
};

export default App;
