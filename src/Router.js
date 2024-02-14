import UserHome from "./Admin/UserHome.js";
import SignUp from "./Admin/SignUp.js";
import Login from "./Admin/Login.js";
import App from "./App";
import Pregnancy from "./Admin/Pregnancy.js";
import Babygrowth from "./Admin/Babygrowth.js";
import Bodychange from "./Admin/Bodychange.js";
import BodychangeMonth1 from "./Admin/BodyChangeMonth1.js";
import BodychangeMonth2 from "./Admin/BodyChangeMonth2.js";
import BodychangeMonth3 from "./Admin/BodyChangeMonth3.js";
import BodychangeMonth4 from "./Admin/BodyChangeMonth4.js";
import BodychangeMonth5 from "./Admin/BodyChangeMonth5.js";
import BodychangeMonth6 from "./Admin/BodyChangeMonth6.js";
import BodychangeMonth7 from "./Admin/BodyChangeMonth7.js";
import BodychangeMonth8 from "./Admin/BodyChangeMonth8.js";
import BodychangeMonth9 from "./Admin/BodyChangeMonth9.js";
import UpdateBodyChange from "./Admin/UpdateBodyChange.js";
import UpdateBabygrowth from "./Admin/UpdateBabygrowth.js";
import Food from "./Admin/Food.js";
import Vitamins from "./Admin/Vitamins.js";
import Exercises from "./Admin/Exercises.js";
import Courses from "./Admin/Courses.js";
import BabyGrowthMonth1 from "./Admin/BabyGrowthMonth1.js";
import BabyGrowthMonth2 from "./Admin/BabyGrowthMonth2.js";
import BabyGrowthMonth3 from "./Admin/BabyGrowthMonth3.js";
import BabyGrowthMonth4 from "./Admin/BabyGrowthMonth4.js";
import BabyGrowthMonth5 from "./Admin/BabyGrowthMonth5.js";
import BabyGrowthMonth6 from "./Admin/BabyGrowthMonth6.js";
import BabyGrowthMonth7 from "./Admin/BabyGrowthMonth7.js";
import BabyGrowthMonth8 from "./Admin/BabyGrowthMonth8.js";
import BabyGrowthMonth9 from "./Admin/BabyGrowthMonth9.js";
import FoodMonth1 from "./Admin/FoodMonth1.js";
import FoodMonth3 from "./Admin/FoodMonth3.js";
import FoodMonth6 from "./Admin/FoodMonth6.js";
import UpdateFood from "./Admin/UpdateFood.js";
import Guest from "./middleware/Guest.js";
import UpdateExercise from "./Admin/UpdateExercise.js";
//import { createBrowserRouter } from 'some-library-or-module';
import { createBrowserRouter } from "react-router-dom";
import test from "./Admin/test";

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
        path: "/test",
        element: <test/>,
      },

      // {
        // element: <Guest />,
        // children: [
          {
            path: "/UserHome",
            element: <UserHome />,
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
            path: "/UpdateExercise",
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
  // },
// ]

);
