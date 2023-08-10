import "./App.css"
import Card from "./components/Card"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserInfo from "./components/UserInfo"

function App() {
  return (
    <div className="App bg-emerald-900 w-full h-screen flex justify-center items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/userinfo" element={<UserInfo />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
