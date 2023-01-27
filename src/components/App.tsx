import Header from "@/components/Header";
import {
  Route,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Overview from "@/pages/Overview";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/*" element={<Outlet />}>
        <Route path="following" element={<div>Following</div>} />
        <Route path="portfolio" element={<div>Portfolio</div>} />
        <Route path="news" element={<div>News</div>} />
        <Route path="scanner" element={<div>scanner</div>} />
        <Route path="settings" element={<div>settings</div>} />
        <Route path="*" element={<Overview />} />
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen lg:p-14">
        <Header />
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
