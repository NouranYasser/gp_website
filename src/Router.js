import HomePage from "./Admin/HomePage.js";
import SignUp from "./Admin/Auth/SignUp.js";
import Login from "./Admin/Auth/Login.js";
import App from "./App";
import Pregnancy from "./Admin/Prgnancy/Pregnancy.js";
import Babygrowth from "./Admin/Prgnancy/Babygrowth.js";
import AddIssue from "./Admin/Baby/AddIssue.js";
import AddBodyChange from "./Admin/Prgnancy/AddBodyChange.js"
import Bodychange from "./Admin/Prgnancy/Bodychange.js";
import BodychangeMonth1 from "./Admin/Prgnancy/BodyChangeMonth1.js";
import BodayChangeMonth1Ar from "./Admin/Prgnancy/BodyChangeMonth1Ar.js"
import BodychangeMonth2 from "./Admin/Prgnancy/BodyChangeMonth2.js";
import BodyChangeMonth2Ar from "./Admin/Prgnancy/BodyChangeMonth2Ar.js";
import BodychangeMonth3 from "./Admin/Prgnancy/BodyChangeMonth3.js";
import BodyChangeMonth3Ar from "./Admin/Prgnancy/BodyChangeMonth3Ar.js";
import BodychangeMonth4 from "./Admin/Prgnancy/BodyChangeMonth4.js";
import BodyChangeMonth4Ar from "./Admin/Prgnancy/BodyChangeMonth4Ar.js";
import BodychangeMonth5 from "./Admin/Prgnancy/BodyChangeMonth5.js";
import BodyChangeMonth5Ar from "./Admin/Prgnancy/BodyChangeMonth5Ar.js";
import BodychangeMonth6 from "./Admin/Prgnancy/BodyChangeMonth6.js";
import BodyChangeMonth6Ar from "./Admin/Prgnancy/BodyChangeMonth6Ar.js";
import BodychangeMonth7 from "./Admin/Prgnancy/BodyChangeMonth7.js";
import BodyChangeMonth7Ar from "./Admin/Prgnancy/BodyChangeMonth7Ar.js";
import BodychangeMonth8 from "./Admin/Prgnancy/BodyChangeMonth8.js";
import BodyChangeMonth8Ar from "./Admin/Prgnancy/BodyChangeMonth8Ar.js";
import BodychangeMonth9 from "./Admin/Prgnancy/BodyChangeMonth9.js";
import BodyChangeMonth9Ar from "./Admin/Prgnancy/BodyChangeMonth9Ar.js";
import UpdateBodyChange from "./Admin/Prgnancy/UpdateBodyChange.js";
import UpdateBabygrowth from "./Admin/Prgnancy/UpdateBabygrowth.js";
import UpdateFood from "./Admin/Prgnancy/UpdateFood.js";
import UpdateVitamins from "./Admin/Prgnancy/UpdateVitamins.js";
import Feeding from "./Admin/Prgnancy/Feeding.js";
import Vitamins from "./Admin/Prgnancy/Vitamins.js";
import Exercises from "./Admin/Prgnancy/Exercises.js";
import Courses from "./Admin/Prgnancy/Courses.js";
import BabyGrowthMonth1 from "./Admin/Prgnancy/BabyGrowthMonth1.js";
import BabyGrowthMonth1Ar from "./Admin/Prgnancy/BabyGrowthMonth1Ar.js";
import BabyGrowthMonth2 from "./Admin/Prgnancy/BabyGrowthMonth2.js";
// import BabyGrowthMonth2Ar from "./Admin/Prgnancy/BabyGrowthMonth2Ar.js";
import BabyGrowthMonth3 from "./Admin/Prgnancy/BabyGrowthMonth3.js";
import BabyGrowthMonth3Ar from "./Admin/Prgnancy/BabyGrowthMonth3Ar.js";
import BabyGrowthMonth4 from "./Admin/Prgnancy/BabyGrowthMonth4.js";
import BabyGrowthMonth4Ar from "./Admin/Prgnancy/BabyGrowthMonth4Ar.js";
import BabyGrowthMonth5 from "./Admin/Prgnancy/BabyGrowthMonth5.js";
import BabyGrowthMonth5Ar from "./Admin/Prgnancy/BabyGrowthMonth5Ar.js";
import BabyGrowthMonth6 from "./Admin/Prgnancy/BabyGrowthMonth6.js";
import BabyGrowthMonth6Ar from "./Admin/Prgnancy/BabyGrowthMonth6Ar.js";
import BabyGrowthMonth7 from "./Admin/Prgnancy/BabyGrowthMonth7.js";
import BabyGrowthMonth7Ar from "./Admin/Prgnancy/BabyGrowthMonth7Ar.js";
import BabyGrowthMonth8 from "./Admin/Prgnancy/BabyGrowthMonth8.js";
import BabyGrowthMonth8Ar from "./Admin/Prgnancy/BabyGrowthMonth8Ar.js";
import BabyGrowthMonth9 from "./Admin/Prgnancy/BabyGrowthMonth9.js";
import BabyGrowthMonth9Ar from "./Admin/Prgnancy/BabyGrowthMonth9Ar.js";
import FeedingMonth1 from "./Admin/Prgnancy/FeedingMonth1.js";
import FeedingMonth3 from "./Admin/Prgnancy/FeedingMonth3.js";
import FeedingMonth6 from "./Admin/Prgnancy/FeedingMonth6.js";
import Guest from "../src/middleware/Guest.js";
import UpdateExercise from "./Admin/Prgnancy/UpdateExercise.js";
import BabyHome from "./Admin/Baby/BabyHome.js";
import TipsAndActivities from "./Admin/Baby/TipsAndActivities.js";
import TipsAndActivitiesMonth1 from "../src/Admin/Baby/TipsAndActivitiesMonth1.js";
import TipsAndActivitiesMonth3 from "../src/Admin/Baby/TipsAndActivitiesMonth3.js";
import TipsAndActivitiesMonth6 from "../src/Admin/Baby/TipsAndActivitiesMonth6.js";
import TipsAndActivitiesMonth9 from "./Admin/Baby/TipsAndActivitiesMonth9.js";
import TipsAndActivitiesMonth12 from "../src/Admin/Baby/TipsAndActivitiesMonth12.js";
import TipsAndActivitiesMonth15 from "./Admin/Baby/TipsAndActivitiesMonth15.js";
import TipsAndActivitiesMonth18 from "../src/Admin/Baby/TipsAndActivitiesMonth18.js";
import TipsAndActivitiesMonth21 from "./Admin/Baby/TipsAndActivitiesMonth21.js";
import {createBrowserRouter } from "react-router-dom";
import ChildMilestones from "./Admin/Baby/ChildMilestones.js";
import Vaccinations from "../src/Admin/Baby/Vaccinations"
import ChildMilestonesMonth1 from "./Admin/Baby/ChildMilestonesMonth1.js"
import ChildMilestonesMonth3 from "./Admin/Baby/ChildMilestonesMonth3.js"
import ChildMilestonesMonth6 from "./Admin/Baby/ChildMilestonesMonth6.js"
import ChildMilestonesMonth9 from "./Admin/Baby/ChildMilestonesMonth9.js"
import ChildMilestonesMonth12 from "./Admin/Baby/ChildMilestonesMonth12.js"
import ChildMilestonesMonth15 from "../src/Admin/Baby/ChildMilestonesMonth15.js"
import ChildMilestonesMonth18 from "../src/Admin/Baby/ChildMilestonesMonth18.js"
import ChildMilestonesMonth21 from "../src/Admin/Baby/ChildMilestonesMonth21.js"
import Nutrition from "../src/Admin/Baby/Nutrition.js"
import Weaning from "./Admin/Baby/Weaning.js"
import AddWeaning from "./Admin/Baby/AddWeaning.js";
import WeaningMonth1 from "./Admin/Baby/WeaningMonth1"
import WeaningMonth6 from "./Admin/Baby/WeaningMonth6"
import WeaningMonth12 from "./Admin/Baby/WeaningMonth12.js";
import WeaningMonth18 from "./Admin/Baby/WeaningMonth18.js";
import BreastFeeding from "./Admin/Baby/BreastFeeding.js"
import ArtificalFeeding from "./Admin/Baby/ArtificalFeeding.js"
import CommonIssues from "./Admin/Baby/CommonIssues.js"
import ShowDetails from "./Admin/Baby/ShowDetails.js"
import NotFound from "./shared/NotFound.js";
import AddTipsAndActivities from "./Admin/Baby/AddTipsAndActivities.js";
import AddBabyGrowth from "./Admin/Prgnancy/AddBabyGrowth.js";
import AddChildGrowth from "./Admin/Baby/AddChildGrowth.js";
import UpdateCourses from "./Admin/Prgnancy/UpdateCourses.js";
import BreastFeedingMonth1 from "./Admin/Baby/BreastFeedingMonth1"
import BreastFeedingMonth6 from "./Admin/Baby/BreastFeedingMonth6"
import BreastFeedingMonth12 from "./Admin/Baby/BreastFeedingMonth12"
import BreastFeedingMonth18 from "./Admin/Baby/BreastFeedingMonth18"
import ArtificalFeedingMonth1 from "./Admin/Baby/ArtificalFeedingMonth1"
import ArtificalFeedingMonth6 from "./Admin/Baby/ArtificalFeedingMonth6"
import ArtificalFeedingMonth12 from "./Admin/Baby/ArtificalFeedingMonth12"
import ArtificalFeedingMonth18 from "./Admin/Baby/ArtificalFeedingMonth18"
import AddBreastFeeding from "./Admin/Baby/AddBreastFeeding"
import AddArtificalFeeding from "./Admin/Baby/AddArtificalFeeding"
import AddFeeding from "./Admin/Prgnancy/AddFeeding.js";
import AddVitamin from "./Admin/Prgnancy/AddVitamin.js";
import AddExercises from "./Admin/Prgnancy/AddExercises.js";
import AddCourses from "./Admin/Prgnancy/AddCourses.js";
import ArabicChildMilestonesMonth1 from "./Admin/Baby/ArabicChildMilestonesMonth1.js";
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
            path: "/HomePage",
            element: <HomePage />,
          },
          
          {
            path: "/ArabicChildMilestonesMonth1",
            element: <ArabicChildMilestonesMonth1 />,
          },
          

          {
            path: "/AddExercises",
            element: <AddExercises />,
          },

          {
            path: "/AddCourses",
            element: <AddCourses />,
          },

          {
            path: "/AddBabyGrowth",
            element: <AddBabyGrowth />,
          },
          {
            path: "/AddExercises",
            element: <AddExercises />,
          },
          {
            path: "/AddTipsAndActivities",
            element: <AddTipsAndActivities/>,
          },
          {
            path: "/AddChildGrowth",
            element: <AddChildGrowth/>,
          },
          
          {
            path: "/AddBodyChange",
            element: <AddBodyChange />,
          },

          {
            path: "/TipsAndActivities",
            element: <TipsAndActivities />,
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
            path: "/TipsAndActivitiesMonth9",
            element: <TipsAndActivitiesMonth9 />,
          },

          {
            path: "/TipsAndActivitiesMonth12",
            element: <TipsAndActivitiesMonth12/>,
          },

          {
            path: "/TipsAndActivitiesMonth15",
            element: <TipsAndActivitiesMonth15/>,
          },

          {
            path: "/TipsAndActivitiesMonth18",
            element: <TipsAndActivitiesMonth18 />,
          },
          {
            path: "/TipsAndActivitiesMonth21",
            element: <TipsAndActivitiesMonth21/>,
          },

          {
            path: "/AddWeaning",
            element: <AddWeaning />,
          },
          {
            path: "/WeaningMonth1",
            element: <WeaningMonth1 />,
          },
          {
            path: "/WeaningMonth6",
            element: <WeaningMonth6 />,
          },
          {
            path: "/WeaningMonth12",
            element: <WeaningMonth12 />,
          },
          {
            path: "/WeaningMonth18",
            element: <WeaningMonth18 />,
          },
                   
          {
            path: "/BreastFeedingMonth1",
            element: <BreastFeedingMonth1 />,
          },

          {
            path: "/BreastFeedingMonth6",
            element: <BreastFeedingMonth6 />,
          },

          {
            path: "/BreastFeedingMonth12",
            element: <BreastFeedingMonth12 />,
          },
         
          {
            path: "/BreastFeedingMonth18",
            element: <BreastFeedingMonth18 />,
          },
          
          {
            path: "/ArtificalFeedingMonth1",
            element: <ArtificalFeedingMonth1 />,
          },
          {
            path: "/ArtificalFeedingMonth6",
            element: <ArtificalFeedingMonth6 />,
          },
          {
            path: "/ArtificalFeedingMonth12",
            element: <ArtificalFeedingMonth12 />,
          },

          {
            path: "/ArtificalFeedingMonth18",
            element: <ArtificalFeedingMonth18 />,
          },

          {
            path: "/AddBreastFeeding",
            element: <AddBreastFeeding />,
          },
          
          {
            path: "/AddArtificalFeeding",
            element: <AddArtificalFeeding />,
          },
          {
            path: "/ChildMilestones",
            element: <ChildMilestones />,
          },

          {
            path: "/ChildMilestonesMonth1",
            element: <ChildMilestonesMonth1 />,
          },

          {
            path: "/ChildMilestonesMonth3",
            element: <ChildMilestonesMonth3 />,
          },

          {
            path : "*",
            element : <NotFound />,
          },
          
          {
            path: "/ChildMilestonesMonth6",
            element: <ChildMilestonesMonth6 />,
          },

          {
            path: "/ChildMilestonesMonth9",
            element: <ChildMilestonesMonth9 />,
          },

          {
            path: "/ChildMilestonesMonth12",
            element: <ChildMilestonesMonth12 />,
          },

          {
            path: "/ChildMilestonesMonth15",
            element: <ChildMilestonesMonth15 />,
          },
          
          {
            path: "/ChildMilestonesMonth18",
            element: <ChildMilestonesMonth18 />,
          },

          {
            path: "/ChildMilestonesMonth21",
            element: <ChildMilestonesMonth21 />,
          },
         
          {
            path: "/Nutrition",
            element: <Nutrition />,
          },

          {
            path: "/Weaning",
            element: <Weaning/>,
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
            path: "/CommonIssues",
            element: <CommonIssues/>,
          },
          {
            path: "/AddIssue",
            element: <AddIssue/>,
          },
     
          {
            path: "/ShowDetails/:id",
            element: <ShowDetails/>,
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
            path: "/BodaychangeMonth1Ar",
            element: <BodayChangeMonth1Ar/>,
          },
          {
            path: "/BodaychangeMonth2Ar",
            element: <BodyChangeMonth2Ar/>,
          },
          {
            path: "/BodaychangeMonth3Ar",
            element: <BodyChangeMonth3Ar/>,
          },
          {
            path: "/BodaychangeMonth4Ar",
            element: <BodyChangeMonth4Ar/>,
          },
          {
            path: "/BodaychangeMonth5Ar",
            element: <BodyChangeMonth5Ar/>,
          },
          {
            path: "/BodaychangeMonth6Ar",
            element: <BodyChangeMonth6Ar/>,
          },
          {
            path: "/BodaychangeMonth7Ar",
            element: <BodyChangeMonth7Ar/>,
          },

          {
            path: "/BodaychangeMonth8Ar",
            element: <BodyChangeMonth8Ar/>,
          },
          {
            path: "/BodaychangeMonth9Ar",
            element: <BodyChangeMonth9Ar/>,
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

          {
            path: "/UpdateBodyChange/:id",
            element: <UpdateBodyChange />,
          },
          
          {
            path: "/UpdateBabygrowth/:id",
            element: <UpdateBabygrowth />,
          },
          
          {
            path: "/Feeding",
            element: <Feeding />,
          },
          {
            path: "/AddFeeding",
            element: <AddFeeding />,
          },
          
          {
            path: "/UpdateFood/:id",
            element: <UpdateFood />,
          },
          
          {
            path: "/FeedingMonth1",
            element: <FeedingMonth1 />,
          },
          
          {
            path: "/FeedingMonth3",
            element: <FeedingMonth3 />,
          },
          
          {
            path: "/FeedingMonth6",
            element: <FeedingMonth6 />,
          },
         
          {
            path: "/Vitamins",
            element: <Vitamins />,
          },
          {
            path: "/AddVitamin",
            element: <AddVitamin />,
          },
          {
            path: "/UpdateVitamins/:id",
            element: <UpdateVitamins />,
          },

          {
            path: "/Exercises",
            element: <Exercises />,
          },
        
          {
            path: "/UpdateExercise/:id",
            element: <UpdateExercise />,
          },

          {
            path: "/Courses",
            element: <Courses />,
          },
          
          {
            path: "/UpdateCourses/:id",
            element: <UpdateCourses />,
          },

          {
            path: "/BabyGrowthMonth1",
            element: <BabyGrowthMonth1 />,
          },
          {
            path: "/BabyGrowthMonth1Ar",
            element: <BabyGrowthMonth1Ar />,
          },
          
          {
            path: "/BabyGrowthMonth2",
            element: <BabyGrowthMonth2 />,
          },
          // {
          //   path: "/BabyGrowthMonth2",
          //   element: <BabyGrowthMonth2Ar />,
          // },
          
          {
            path: "/BabyGrowthMonth3",
            element: <BabyGrowthMonth3 />,
          },
          {
            path: "/BabyGrowthMonth3Ar",
            element: <BabyGrowthMonth3Ar />,
          },
          
          {
            path: "/BabyGrowthMonth4",
            element: <BabyGrowthMonth4 />,
          },
          {
            path: "/BabyGrowthMonth4Ar",
            element: <BabyGrowthMonth4Ar />,
          },
          
          {
            path: "/BabyGrowthMonth5",
            element: <BabyGrowthMonth5/>,
          },
          
          {
            path: "/BabyGrowthMonth6",
            element: <BabyGrowthMonth6 />,
          },
          
          {
            path: "/BabyGrowthMonth7",
            element: <BabyGrowthMonth7 />,
          },
          
          {
            path: "/BabyGrowthMonth8",
            element: <BabyGrowthMonth8 />,
          },
          
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
