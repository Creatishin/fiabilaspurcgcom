import priya from '../Assets/images/priya.png'
import mohit from '../Assets/images/mohit.png'
import ayush from '../Assets/images/ayush.png'
import anil from '../Assets/images/anil1.png'
import Asmita from '../Assets/images/Asmita.png'
import Manoj from '../Assets/images/Manoj2.svg'
import Team from '../Interfaces/Team'

const manoj=""
export const team : Team[] = [
    {
        name : "Manoj Selkari",
        role : "Lead Project Delivery",
        image : Manoj
    },

    {
        name : "Mohit Pratap",
        role : "Tech Lead",
        image : mohit
    },
    {
        name : "Ayush Mishra",
        role : "Lead Reactjs",
        image : ayush
    },
    {
        name : "Priyadarshini Sharma",
        role : "Lead Engineer, QA",
        image : priya
    }
]

export const outSourceTeam : Team[] = [
    {
        name : "Anil Sardana",
        role : "Founder",
        image : anil
    },
    {
        name : "Asmita Mendhe",
        role : "HR Head",
        image : Asmita
    }
]