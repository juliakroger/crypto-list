import Header from "@/components/Header";
import { Route, Outlet, Routes, BrowserRouter } from "react-router-dom";
import Overview from "@/pages/Overview";
import { QueryClient, QueryClientProvider } from "react-query";
import Market from "@/pages/Market";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="w-screen lg:p-14">
          <Header />
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route path="market" element={<Market />} />
              <Route path="scanner" element={<div>scanner</div>} />
              <Route index element={<Overview />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
