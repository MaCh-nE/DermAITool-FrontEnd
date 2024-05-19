import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const AccessDeniedPage = () => {
  return (
    <section className='select-none text-center flex flex-col justify-center items-center h-96'>
      <FaExclamationTriangle className='select-none text-red-400 text-6xl mb-4' />
      <h1 className='select-none text-6xl font-bold mb-4'>Access Denied !</h1>
      <p className='select-none text-xl mb-5'>Please Proceed to login</p>
      <Link to='/' className='select-none text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4'>
        Go Back
      </Link>
    </section>
  );
};

export default AccessDeniedPage;