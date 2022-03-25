import { Link, Router, Route, Routes } from "react-router-dom"
import Contact from "../Pages/Contact"
import Events from "../Pages/Events"
import Home from "../Pages/Home"
import Schedule from "../Pages/Schedule"
import Sponsors from "../Pages/Sponsors"
import Team from "../Pages/Team"

export default function Header() {
    return (
        <div className="header">
            <div className="header-title quickkiss">Verba Maximus</div>
            <div className="header-links">
                <Link className="h-link" to="/">Home</Link>
                <Link className="h-link" to="/Events">Events</Link>
                <Link className="h-link" to="/Team">Team</Link>
                <Link className="h-link" to="/Sponsors">Sponsors</Link>
                <Link className="h-link" to="/Contact">Contact</Link>
                <Link className="h-link" to="/Schedule">Schedule</Link>
            </div>
        </div>
    )
  }