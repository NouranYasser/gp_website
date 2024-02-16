import UserHome from "./Admin/UserHome.js";
import SignUp from "./Admin/Auth/SignUp.js";
import Login from "./Admin/Auth/Login.js";
import App from "./App";
import Pregnancy from "./Admin/Prgnancy/Pregnancy.js";
import Babygrowth from "./Admin/Prgnancy/Babygrowth.js";
import Bodychange from "./Admin/Prgnancy/Bodychange.js";
import BodychangeMonth1 from "./Admin/Prgnancy/BodyChangeMonth1.js";
import BodychangeMonth2 from "./Admin/Prgnancy/BodyChangeMonth2.js";
import BodychangeMonth3 from "./Admin/Prgnancy/BodyChangeMonth3.js";
import BodychangeMonth4 from "./Admin/Prgnancy/BodyChangeMonth4.js";
import BodychangeMonth5 from "./Admin/Prgnancy/BodyChangeMonth5.js";
import BodychangeMonth6 from "./Admin/Prgnancy/BodyChangeMonth6.js";
import BodychangeMonth7 from "./Admin/Prgnancy/BodyChangeMonth7.js";
import BodychangeMonth8 from "./Admin/Prgnancy/BodyChangeMonth8.js";
import BodychangeMonth9 from "./Admin/Prgnancy/BodyChangeMonth9.js";
import UpdateBodyChange from "./Admin/Prgnancy/UpdateBodyChange.js";
import UpdateBabygrowth from "./Admin/Prgnancy/UpdateBabygrowth.js";
import Food from "./Admin/Prgnancy/Food.js";
import Vitamins from "./Admin/Prgnancy/Vitamins.js";
import Exercises from "./Admin/Prgnancy/Exercises.js";
import Courses from "./Admin/Prgnancy/Courses.js";
import BabyGrowthMonth1 from "./Admin/Prgnancy/BabyGrowthMonth1.js";
import BabyGrowthMonth2 from "./Admin/Prgnancy/BabyGrowthMonth2.js";
import BabyGrowthMonth3 from "./Admin/Prgnancy/BabyGrowthMonth3.js";
import BabyGrowthMonth4 from "./Admin/Prgnancy/BabyGrowthMonth4.js";
import BabyGrowthMonth5 from "./Admin/Prgnancy/BabyGrowthMonth5.js";
import BabyGrowthMonth6 from "./Admin/Prgnancy/BabyGrowthMonth6.js";
import BabyGrowthMonth7 from "./Admin/Prgnancy/BabyGrowthMonth7.js";
import BabyGrowthMonth8 from "./Admin/Prgnancy/BabyGrowthMonth8.js";
import BabyGrowthMonth9 from "./Admin/Prgnancy/BabyGrowthMonth9.js";
import FoodMonth1 from "./Admin/Prgnancy/FoodMonth1.js";
import FoodMonth3 from "./Admin/Prgnancy/FoodMonth3.js";
import FoodMonth6 from "./Admin/Prgnancy/FoodMonth6.js";
import UpdateFood from "./Admin/Prgnancy/UpdateFood.js";
import Guest from "../src/middleware/Guest.js";
import UpdateExercise from "./Admin/Prgnancy/UpdateExercise.js";
import BabyHome from "./Admin/Baby/BabyHome.js";
import TipsAndActivities from "./Admin/Baby/TipsAndActivities.js";
import TipsAndActivitiesMonth1 from "../src/Admin/Baby/TipsAndActivitiesMonth1.js";
import TipsAndActivitiesMonth3 from "../src/Admin/Baby/TipsAndActivitiesMonth3.js";
import TipsAndActivitiesMonth6 from "../src/Admin/Baby/TipsAndActivitiesMonth6.js";
import {createBrowserRouter } from "react-router-dom";
import ChildGrowth from "../src/Admin/Baby/ChildGrowth.js";
import ChildGrowthMonth1 from "../src/Admin/Baby/ChildGrowthMonth1.js"
import ChildGrowthMonth3 from "../src/Admin/Baby/ChildGrowthMonth3.js"
import ChildGrowthMonth6 from "../src/Admin/Baby/ChildGrowthMonth6.js"
import ChildGrowthMonth9 from "../src/Admin/Baby/ChildGrowthMonth9.js"
import ChildGrowthMonth12 from "../src/Admin/Baby/ChildGrowthMonth12.js"
import ChildGrowthMonth15 from "../src/Admin/Baby/ChildGrowthMonth15.js"
import ChildGrowthMonth18 from "../src/Admin/Baby/ChildGrowthMonth18.js"
import ChildGrowthMonth21 from "../src/Admin/Baby/ChildGrowthMonth21.js"
import Nutrition from "../src/Admin/Baby/Nutrition.js";
import Feeding from "./Admin/Baby/Feeding.js";
import BreastFeeding from "./Admin/Baby/BreastFeeding.js";
import ArtificalFeeding from "./Admin/Baby/ArtificalFeeding.js";
import NotFound from "./shared/NotFound.js";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/Login",
        element: <Login />,
      },
      
      {
        path: "/SignUp",
        element: <SignUp/>,
      },

      {
        element: <Guest />,
        children: [
          {
            path: "/UserHome",
            element: <UserHome />,
          },
          {
            path: "/TipsAndActivitiesMonth1",
            element: <TipsAndActivitiesMonth1 />,
          },
          {
            path: "/TipsAndActivitiesMonth3",
            element: <TipsAndActivitiesMonth3 />,
          },
          {
            path: "/TipsAndActivitiesMonth6",
            element: <TipsAndActivitiesMonth6 />,
          },

          {
            path: "/TipsAndActivities",
            element: <TipsAndActivities />,
          },
         
          {
            path: "/ChildGrowth",
            element: <ChildGrowth />,
          },


          {
            path: "/ChildGrowthMonth1",
            element: <ChildGrowthMonth1 />,
          },

          {
            path: "/ChildGrowthMonth3",
            element: <ChildGrowthMonth3 />,
          },
          {
            path : "*",
            element : <NotFound />,
          },
          
          {
            path: "/ChildGrowthMonth6",
            element: <ChildGrowthMonth6 />,
          },
          {
            path: "/ChildGrowthMonth9",
            element: <ChildGrowthMonth9 />,
          },

          {
            path: "/ChildGrowthMonth12",
            element: <ChildGrowthMonth12 />,
          },
          {
            path: "/ChildGrowthMonth15",
            element: <ChildGrowthMonth15 />,
          },
          
          {
            path: "/ChildGrowthMonth18",
            element: <ChildGrowthMonth18 />,
          },

          {
            path: "/ChildGrowthMonth21",
            element: <ChildGrowthMonth21 />,
          },
         
          {
            path: "/Nutrition",
            element: <Nutrition />,
          },


          {
            path: "/Feeding",
            element: <Feeding/>,
          },
         
          {
            path: "/BreastFeeding",
            element: <BreastFeeding/>,
          },

          {
            path: "/ArtificalFeeding",
            element: <ArtificalFeeding/>,
          },

          {
            path: "/BabyHome",
            element: <BabyHome />,
          },
          
          {
            path: "/Babygrowth",
            element: <Babygrowth />,
          },
          {
            path: "/Pregnancy",
            element: <Pregnancy />,
          },
          {
            path: "/Bodychange",
            element: <Bodychange />,
          },
          {
            path: "/BodychangeMonth1",
            element: <BodychangeMonth1 />,
          },
          {
            path: "/BodychangeMonth2",
            element: <BodychangeMonth2 />,
          },
          {
            path: "/BodychangeMonth3",
            element: <BodychangeMonth3 />,
          },
          {
            path: "/BodychangeMonth4",
            element: <BodychangeMonth4/>,
          },
          {
            path: "/BodychangeMonth5",
            element: <BodychangeMonth5/>,
          },
          {
            path: "/BodychangeMonth6",
            element: <BodychangeMonth6/>,
          },
          {
            path: "/BodychangeMonth7",
            element: <BodychangeMonth7/>,
          },
          {
            path: "/BodychangeMonth8",
            element: <BodychangeMonth8/>,
          },
          {
            path: "/BodychangeMonth9",
            element: <BodychangeMonth9/>,
          },

          // other paths...
          {
            path: "/UpdateBodyChange/:id",
            element: <UpdateBodyChange />,
          },
          // other paths...
          {
            path: "/UpdateBabygrowth/:id",
            element: <UpdateBabygrowth />,
          },
          // other paths...
          {
            path: "/Food",
            element: <Food />,
          },
          // other paths...
          {
            path: "/UpdateFood/:id",
            element: <UpdateFood />,
          },
          // other paths...
          {
            path: "/FoodMonth1",
            element: <FoodMonth1 />,
          },
          // other paths...
          {
            path: "/FoodMonth3",
            element: <FoodMonth3 />,
          },
          // other paths...
          {
            path: "/FoodMonth6",
            element: <FoodMonth6 />,
          },
          // other paths...
          {
            path: "/Vitamins",
            element: <Vitamins />,
          },
          // other paths...
          {
            path: "/Exercises",
            element: <Exercises />,
          },
        
          {
            path: "/UpdateExercise/:id",
            element: <UpdateExercise />,
          },



          // other paths...
          {
            path: "/Courses",
            element: <Courses />,
          },
          // other paths...
          {
            path: "/BabyGrowthMonth1",
            element: <BabyGrowthMonth1 />,
          },
          // other paths...
          {
            path: "/BabyGrowthMonth2",
            element: <BabyGrowthMonth2 />,
          },
          // other paths...
          {
            path: "/BabyGrowthMonth3",
            element: <BabyGrowthMonth3 />,
          },
          // other paths...
          {
            path: "/BabyGrowthMonth4",
            element: <BabyGrowthMonth4 />,
          },
          // other paths...
          {
            path: "/BabyGrowthMonth5",
            element: <BabyGrowthMonth5 />,
          },
          // other paths...
          {
            path: "/BabyGrowthMonth6",
            element: <BabyGrowthMonth6 />,
          },
          // other paths...
          {
            path: "/BabyGrowthMonth7",
            element: <BabyGrowthMonth7 />,
          },
          // other paths...
          {
            path: "/BabyGrowthMonth8",
            element: <BabyGrowthMonth8 />,
          },
          // other paths...
          {
            path: "/BabyGrowthMonth9",
            element: <BabyGrowthMonth9 />,
          },
        ],
      },
    ],
  },
]
);
