import { useState, useEffect } from "react"
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';

function App() {

  const [wide, setWide] = useState<boolean>(false)
  const [fullScreen, setFullScreen] = useState<number>(1)
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isSmallScreen) {
      setFullScreen(3)
      setWide(true)
    } else if (isMediumScreen) {
      setFullScreen(2)
      setWide(false)
    } else {
      setFullScreen(1)
      setWide(false)
    }
  }, [isSmallScreen, isMediumScreen])

  return (
    <div>
      <Router>

        <Link to="/"></Link>
        <Routes>
          <Route path="/" element={<LandingPage fullScreen={fullScreen} wide={wide} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
