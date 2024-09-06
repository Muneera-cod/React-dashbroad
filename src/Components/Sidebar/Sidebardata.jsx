import { IconLayoutDashboardFilled,IconChartBar,IconFileInvoice ,
    IconListCheck,IconCalendarMonth,IconMessageFilled,IconSettings,IconBellFilled} from '@tabler/icons-react';
export const sidebardata=[
    {
        title:'Dashboard',
        icon:<IconLayoutDashboardFilled/>,
        link:'/dashboard'
    },
    {
        title:'Analytics',
        icon:<IconChartBar/>
    },
    {
        title:'Invoice',
        icon:<IconFileInvoice/>,
        link:'/invoicelist'
    },
    {
        title:'Schedule',
        icon:<IconListCheck/>
    },
    {
        title:'Calender',
        icon:<IconCalendarMonth/>
    },
    {
        title:'Messages',
        icon:<IconMessageFilled/>
    },
    {
        title:'Notifications',
        icon:<IconBellFilled/>
    },
    {
        title:'Settings',
        icon:<IconSettings/>
    }
]