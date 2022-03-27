import { Link } from "react-router-dom"

export default function Header() {
    return (
        // <div className="header">
        //     <div className="quickkiss">
        //     <Link className="header-title" to="/">Verba Maximus</Link>
        //     </div>
        //     <div className="header-links">
                
        //     </div>
        // </div>
        <nav className="db dt-l w-100 border-box pa3 ph5-l bg-black">
        <div className="quickkiss">
            <Link className="header-title" to="/">Verba Maximus</Link>
        </div>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <Link className="white link dim dark-gray f6 f5-l dib mr3 mr4-l pa2" to="/">Home</Link>
            <Link className="white link dim dark-gray f6 f5-l dib mr3 mr4-l pa2" to="/Events">Events</Link>
            <Link className="white link dim dark-gray f6 f5-l dib mr3 mr4-l pa2" to="/Team">Team</Link>
            <Link className="white link dim dark-gray f6 f5-l dib mr3 mr4-l pa2" to="/Sponsors">Sponsors</Link>
            <Link className="white link dim dark-gray f6 f5-l dib mr3 mr4-l pa2" to="/Contact">Contact</Link>
            <Link className="white link dim dark-gray f6 f5-l dib mr3 mr4-l pa2" to="/Schedule">Schedule</Link>
            <Link className="white link dim bg-blue f6 f5-l dib mr3 mr4-l pa2 br1" to="/Register">Register</Link>
        </div>
        </nav>
    )
  }