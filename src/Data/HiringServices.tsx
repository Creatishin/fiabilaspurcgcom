import HiringService from "../Interfaces/HiringServices";
import easy from '../Assets/Icons/easy.svg'
import time2 from '../Assets/Icons/time2.svg'
import remote from '../Assets/Icons/remote.svg'
import cost from '../Assets/Icons/cost.svg'

export const hiringServices : HiringService[] = [
    {
        name : "Easy",
        para : "Within 3 days, hire a team of engineers",
        icon : easy
    },
    {
        name : "Time Saving",
        para : "Save more than 200 hours of time by finding the appropriate talent.",
        icon : time2
    },
    {
        name : "Cost Effective",
        para : "Save $2000 per engineer you hire.",
        icon : cost
    },
    {
        name : "Remote Team",
        para : "Create remote engineering teams with the top 10% of IT talent.",
        icon : remote
    },
]