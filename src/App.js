import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Dashboard/Header';
import Sidebar from './components/Dashboard/Sidebar';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import { useTheme } from "./context/ThemeContext";
import StockChart from './components/Charts/BarChart';
import LineChart from './components/Charts/LineChart';
import DoughnutChart from './components/Charts/DoughnutChart';
import DashboardCustomizable from './components/DashboardCustomizable';
import Settings from './components/Settings';
import {UserSettingsProvider} from './context/UserSettingsContext'
import HChart from './components/Charts/HighChart'
import StockMarketData from './components/Stocks/StockMarketData'
import { AuthProvider } from './context/AuthContext';
import AuthGuard from './guards/AuthGuard';
import Contact from './components/Contact';
import NewsFetcher from './components/News/NewsFetcher';
import  SearchStock from './components/Home/SearchStock';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const { theme } = useTheme();

  return (
    <UserSettingsProvider>
    <AuthProvider>
    <Router>
    <div className='grid-container' style={{ backgroundColor: theme.background, color: theme.text }}>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path='/stocks' element={<StockMarketData/>}/>
            <Route path='/charts' element={<HChart/>}/>
            <Route path='/dashboard' element={<DashboardCustomizable/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
    </Router>
    </AuthProvider>
    </UserSettingsProvider>
  )
}

export default App