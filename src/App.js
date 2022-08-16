import { 
  Route,
  Routes 
} from "react-router";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import ChartPage from "./pages/ChartPage";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return(
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chart' element={<ChartPage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/:id' element={<DetailPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </Layout>
  );
};

export default App;