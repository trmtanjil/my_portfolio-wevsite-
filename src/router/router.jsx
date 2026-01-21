 








import { createBrowserRouter } from "react-router";
import Home from "../Page/Home.jsx";
import HTML from "../page/TechnologyDetails/HTML/HTML.jsx";
import CSS from "../Page/TechnologyDetails/CSS/CSS.jsx";
import Javascript from "../Page/TechnologyDetails/javascript/Javascript.jsx";
import Dsa from "../Page/TechnologyDetails/DSA/Dsa.jsx";
import Express from "../Page/TechnologyDetails/express/Express.jsx";
import Firebase from "../Page/TechnologyDetails/firebase/Firebase.jsx";
import Reacte from "../Page/TechnologyDetails/react/Reacte.jsx";
import Nextjs from "../Page/TechnologyDetails/nextjs/Nextjs.jsx";
import Mongodb from "../Page/TechnologyDetails/mongodb/Mongodb.jsx";
import Postgresql from "../Page/TechnologyDetails/postgresql/Postgresql.jsx";
import Tailwind from "../Page/TechnologyDetails/tailwind/Tailwind.jsx";
import PrismaOrm from "../Page/TechnologyDetails/PrismaOrm/PrismaOrm.jsx";
import Security from "../Page/TechnologyDetails/Security/Security.jsx";
 
 



const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
    children:[
         {
        index: true,
        Component: Home,
      },
    
       {
        path:"html",
         element:<HTML />
        },
          {
        path:"css",
         element:<CSS />
        },
           {
        path:"javascript",
         element:<Javascript />
        },
           {
        path:"react",
         element:<Reacte />
        },
           {
        path:"nextjs",
         element:<Nextjs />
        },
           {
        path:"mongodb",
         element:<Mongodb />
        },
       
           {
        path:"postgresql",
         element:<Postgresql />
        },
           {
        path:"tailwind",
         element:<Tailwind />
        },
        
           {
        path:"firebase",
         element:<Firebase />
        },
           {
        path:"express",
         element:<Express />
        },
          {
        path:"dsa",
         element:<Dsa />
        },
           {
        path:"prisma",
         element:<PrismaOrm />
        },
            {
        path:"security",
         element:<Security />
        },
        
        
      
    ]
  },
]);

export default router