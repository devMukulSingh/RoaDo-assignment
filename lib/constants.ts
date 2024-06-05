import { BriefcaseBusiness, BusFront, ClipboardList, FileStack, MenuSquare, Settings, SquareChevronRight, SquarePlus, Thermometer, Truck, Wallet } from "lucide-react";
import { Forward, User } from 'lucide-react'


export const sidebarIcons = [
    {
        icon: MenuSquare
    },
    {
        icon: SquarePlus
    },
    {
        icon: SquareChevronRight
    },
    {
        icon: ClipboardList
    },
    {
        icon: BusFront
    },
    {
        icon: Truck
    },
    {
        icon: Truck
    },
    {
        icon: BriefcaseBusiness
    },
    {
        icon: Wallet
    },
    {
        icon: FileStack
    },
    {
        icon: Settings
    }
]

export const chartData = [
    {
        title: "Orders",
        upcoming: 50,
        onGoing: 100,
        completed: 50,
        total: 123456,
    },
    {
        title: "Trips",
        upcoming: 50,
        onGoing: 100,
        completed: 50,
        total: 123456,
    },
    {
        title: "Revenue",
        upcoming: 50,
        onGoing: 100,
        completed: 50,
        total: 123456,
    },
    {
        title: "Expenses",
        upcoming: 50,
        onGoing: 100,
        completed: 50,
        total: 123456,
    },
];

export const actions = [
    {
        name: "Create Indents",
        icon: Forward,
    },
    {
        name: "Add Vehicle",
        icon: Truck,
    },
    {
        name: "Add Trailer",
        icon: Truck,
    },
    {
        name: "Add Driver",
        icon: User,
    },
    {
        name: "Add Indents",
        icon: Truck,
    },
];

export const alerts = [
    {
        icon:User,
        title:'Driver Raised Concern',
        date:'13 Feb 24',
        loadNo:12354,
        billTo:'Roado demo Bangalore',
        description:'lorem ipsum dolor slt ametr connecture lorem ipsum dolor slt ametr connecture'
    },
    {
        icon: Thermometer,
        title: 'Refer Temp. out of range',
        date: '13 Feb 24',
        loadNo: 12354,
        billTo: 'Roado demo Bangalore',
        description: 'lorem ipsum dolor slt ametr connecture lorem ipsum dolor slt ametr connecture'
    },

]

export const highlightsData = [
    {
        title:"Income",
        price:100000,
        paymentsReceived:2
    }
]

export const completedActivites = [
    "Gurpreet Singh (Dispatch team) has created Load no 11AA-1325",
    "Aman(Driver) Picked Up goods at Location_Name for Load No. 11-AAA1235",
    "Gurpreet Singh (Dispatch team) has created Load no 11AA-1325",
    "Aman(Driver) Picked Up goods at Location_Name for Load No. 11-AAA1235",
]