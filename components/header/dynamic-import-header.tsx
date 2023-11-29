import dynamic from 'next/dynamic';
import { Skeleton } from '../ui/skeleton';

export const DynamicImportHeader = dynamic(
    () => import('../header/header'),
    {
      loading: () => (
        <>
            <div className='flex justify-between items-center w-full'>
                <h3 className='text-2xl font-bold'>ZTIFY</h3>
                
                <Skeleton className='h-12 w-12 rounded-full' />
            </div>
        </>
      )
    }
  )