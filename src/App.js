import { 
  Route,
  Routes 
} from "react-router";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import ChartPage from "./pages/ChartPage";
import ListPage from "./pages/ListPage";
import Register from './components/Register';
import LoginPage from "./pages/LoginPage";

const App = () => {
  return(
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chart' element={<ChartPage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/:id' element={<DetailPage />} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={Register} />
      </Routes>
    </Layout>
  );
};

export default App;