'use client'
import Header from "./components/header/header"
import isMobileSize from "./utils/get-window-size"

export default function Home() {
  const isMobile = isMobileSize()
  
  return (
    <main className="flex flex-col h-full">
      {isMobile && <Header isMobile={true} />}
      
      <div className='w-full overflow-x-auto mt-8'>
          <div className='w-max flex gap-4'>
            {[...Array(10)].map((x, i) => (
              <div key={i} className='bg-white p-20 rounded-md'></div>
            ))}
          </div>
        </div>

      <div className='mt-8'>
        <h4 className='text-md font-bold mb-2'>Jump back in</h4>
        <div className='w-full overflow-x-auto'>
          <div className='w-max flex gap-4'>
            {[...Array(10)].map((x, i) => (
              <div key={i} className='bg-white p-20 rounded-md'></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
