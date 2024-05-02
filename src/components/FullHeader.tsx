import React from 'react'

const FullHeader = ({counter}:any) => {
  return (
    <div className='text-2xl py-1 text-slate-500 font-semibold'>
        Cais Manager <span className='text-sm ml-2'>({counter|| 0})</span>
    </div>
  )
}

export default FullHeader