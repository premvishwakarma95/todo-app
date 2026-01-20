import React, { useState } from 'react'

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Mike Brown", email: "mike@example.com", role: "Editor" },
];

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  return (
    <div className='p-5'>
      {/* <div className='text-center text-xl font-medium mb-2'>Task management</div>
      <div className='flex justify-end'>
        <button className='bg-blue-400 rounded-sm text-white px-3 py-2'>Add task</button>
      </div> */}

      {/* <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {/* <div className='rounded-lg border border-gray-200'>
        <table className='text-sm text-left min-w-full'>
          <thead className='bg-gray-200'>
            <tr>
              <th className='py-2 ps-2'>Name</th>
              <th className='py-2'>Email</th>
              <th className='py-2'>Number</th>
              <th className='py-2'>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='py-2 ps-2'>Prem</td>
              <td className='py-2'>prem@gmail.com</td>
              <td className='py-2'>543543543543</td>
              <td className='py-2'>Student</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* <div className='rounded-lg text-sm border border-gray-200'>
        <table className='min-w-full text-left'>
          <thead className='bg-gray-200'>
            <tr>
              <th className='py-2 ps-2'>Name</th>
              <th className='py-2'>Name</th>
              <th className='py-2'>Name</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className='py-2 ps-2'>afdas</td>
              <td className='py-2'>afdas</td>
              <td className='py-2'>afdas</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* <div className='fixed inset-0 z-50 bg-black/40 flex justify-center items-center'>
        <div className='relative w-[350px] rounded p-3 bg-white'>
          <div className='text-end cursor-pointer'>X</div>
          <div className='mt-2'>
            <input type='text' className='p-2 border border-gray-300 w-full bg-white rounded focus:outline-none' />
          </div>
          <div className='mt-2'>
            <input type='text' className='p-2 border border-gray-300 w-full bg-white rounded focus:outline-none' />
          </div>

          <div className='pt-3 text-center'>
            <button className='cursor-pointer px-2 py-2 bg-blue-500 text-white'>Submit</button>
          </div>
        </div>
      </div> */}


      <div className='min-w-full rounded border border-gray-200 text-left'>
        <table className='text-sm w-full p-2'>
          <thead className='bg-gray-200'>
            <tr>
              <th className='py-2 ps-2 text-blue-500' onClick={() => setOpenModal(true)}>Name</th>
              <th className='py-2'>Email</th>
              <th className='py-2'>Number</th>
            </tr>
          </thead>
          <tbody>
            {users.map((Element, index) => {
              return (
                <tr key={index}>
                  <td className='py-2 ps-2'>{Element.name}</td>
                  <td className='py-2'>{Element.email}</td>
                  <td className='py-2'>{Element.role}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {openModal &&
        <div className='fixed z-50 inset-0 flex justify-center items-center bg-black/40'>
          <div className='relative w-[350px] p-3 rounded bg-white'>
            <div className='absolute right-2 top-0' onClick={() => setOpenModal(false)}>X</div>
            <h1 className='text-sm font-semibold text-center'>Task management</h1>
            <div className='my-3'>
              <input type='text' placeholder='enter task name' className='text-sm p-2 mb-2 w-full rounded bg-gray-50 border border-gray-300 focus:outline-none' />
              <input type='text' placeholder='enter task description' className='text-sm p-2 mb-2 w-full rounded bg-gray-50 border border-gray-300 focus:outline-none' />
            </div>
            <div className='flex justify-center'>
              <button className='py-2 px-3 bg-blue-500 text-white rounded' onClick={() => {
                setIsLoader(true);
                setTimeout(() => {
                  setIsLoader(false);
                  setOpenModal(false);
                }, 1000)
              }}>
                {isLoader ?
                  <div role="status">
                    <svg aria-hidden="true" className="w-6 h-6 text-neutral-tertiary animate-spin fill-brand" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                  :
                  'Submit'
                }
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
