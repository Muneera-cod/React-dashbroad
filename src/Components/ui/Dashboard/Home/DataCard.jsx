import { IconHeartFilled,IconAlignBoxRightBottomFilled ,IconShoppingBag,IconBriefcaseFilled} from "@tabler/icons-react"
export const carddata=[
    {
        icon:  <div className='w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center'>
                                 <IconHeartFilled className='text-blue-600'/></div>,
        number:'178+',
        title:'Save Products'
    },
    {
        icon:<div className='w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center'><IconAlignBoxRightBottomFilled className='text-yellow-400'/></div>,
         number:'20+',
        title:'Stock Products'
    },
    {
        icon: <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center'>
                                  <IconShoppingBag stroke={2} className='text-red-400'/></div>,
         number:'190+',
        title:'Sales Product'
    },
    {
        icon: <div className='w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center'><IconBriefcaseFilled className='text-indigo-500'/></div>,
         number:'12+',
        title:'Job Applications'
    }
]