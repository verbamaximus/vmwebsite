import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="header">
            <div className="quickkiss">
            <Link className="header-title" to="/">Verba Maximus</Link>
            </div>
            <div className="header-links">
                <Link className="h-link" to="/">Home</Link>
                <Link className="h-link" to="/Events">Events</Link>
                <Link className="h-link" to="/Team">Team</Link>
                <Link className="h-link" to="/Sponsors">Sponsors</Link>
                <Link className="h-link" to="/Contact">Contact</Link>
                <Link className="h-link" to="/Schedule">Schedule</Link>
                <Link className="h-reg-link bg-blue br3 pa2 nl2 nt2 nb2" to="/Register">Register</Link>
            </div>
        </div>
    )
  }