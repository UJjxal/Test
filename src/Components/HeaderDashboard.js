import logo from './logo.png';
import { useNavigate } from "react-router";

function HeaderDashboard() {

    const navigate = useNavigate();

    return (
        <div className="navbar navbar-expand shadow-sm p-0 bg-white hDash">
            <img className='m-3' src={logo} height="30px"></img>
            <div className='ms-auto me-3'><button className=' LOBtn' onClick={() => { navigate("/") }}>Logout</button></div>
        </div>
    );
}

export default HeaderDashboard;