import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <MainLayout>
      <Home />
      <Portfolio />
    </MainLayout>
  );
}

export default App;
