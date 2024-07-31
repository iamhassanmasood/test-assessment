import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestContent from "./pages/TestContent";
import MainLayout from "./layout/MainLayout";
import { routesConfig } from "./config/constants";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {routesConfig.map(({ name, path }) => (
            <Route key={path} path={`/${path}`} element={<TestContent name={name} />} />
          ))}
          <Route path="/" element={<TestContent name="Home" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
