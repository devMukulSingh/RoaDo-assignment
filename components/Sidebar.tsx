import { sidebarIcons } from '@/lib/constants'

const Sidebar = () => {
  return (
    <div className='bg-white
    shadow-md

    py-5
     text-neutral-500 
     h-screen 
     flex 
     flex-col 
     gap-5 
     items-center 
     w-[5rem]'>
        {
            sidebarIcons.map((icon,index) => (
                <icon.icon key={index} className='cursor-pointer'/>
            ))
        }
    </div>
  )
}

export default Sidebar