import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="header">
            <div className="header-title quickkiss f2">Verba Maximus</div>
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