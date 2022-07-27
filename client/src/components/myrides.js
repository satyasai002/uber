import React from 'react'

const Myrides = () => {
  return (
    <div>
      <div className="p-5 h-screen bg-gray-100">
        <table className='w-full'>
          <thead className='bg-gray-50 border-b-2 border border-gray-200'>
            <tr key="">
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>S.no</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>From</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Destination</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Pick up date</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Pick up time</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default Myrides;