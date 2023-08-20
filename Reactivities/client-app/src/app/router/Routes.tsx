import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import App from  "../layout/App";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import TestErrors from "../../features/Errors/TestError";
import NotFound from "../../features/Errors/NotFound";
export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'createActivity', element: <ActivityForm key='create'/>},
            {path: 'manage/:id', element: <ActivityForm key='manage'/>},
            {path: 'errors', element: <TestErrors key='errors'/>},
            {path: 'not-found', element: <NotFound key='errors'/>},
            {path: '*', element: <Navigate replace to='/not-found'/>}
        ]
    }
]
export const router = createBrowserRouter(routes);