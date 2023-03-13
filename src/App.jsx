import { useState } from 'react';



function App() {
  const [toggleNav, setToggleNav] = useState(false);

  return (

    <header className='bg-gray-800 py-4 sm:flex sm:justify-between sm:items-center sm:px-4'>
      <div className='flex justify-between items-center px-4 sm:px-0'>
        <div>
          <img className='h-8' src="/nav.svg" alt="Vite logo" />
        </div>
        <div className='sm:hidden'>
          <button type='button' className='block text-gray-500 hover:text-white focus:text-white focus:outline-none' onClick={() => setToggleNav(!toggleNav)} >

            <svg viewBox="0 0 24 24" className='h-6 w-6 fill-current' >
              {
                toggleNav ? <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                  : <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />

              }

            </svg>
          </button>
        </div>
      </div>
      <div className={"pt-2 px-2 " + (toggleNav ? 'hidden' : 'block') + " sm:flex sm:p-0 "}>
        <a href="#" className='text-white px-2 py-1 block rounded font-semibold hover:bg-gray-700 sm:mx-1'>List your property</a>
        <a href="#" className='text-white px-2 py-1 mt-1 block rounded font-semibold hover:bg-gray-700 sm:mt-0 sm:ml-2'>Trips</a>
        <a href="#" className='text-white px-2 py-1 mt-1 block rounded font-semibold hover:bg-gray-700 sm:mt-0 sm:ml-2'>Messages</a>
      </div>
    </header>

  );
}

export default App;