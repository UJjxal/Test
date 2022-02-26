import logo from '../logo.png';
import { useNavigate } from "react-router";

function HeaderAdmin() {

    const navigate = useNavigate();

    const onLogout = (event) => {
        navigate("/")
    }

    return (
        <div className="navbar navbar-expand shadow-sm p-0 bg-white">
            <img className='m-3' src={logo} height="30px"></img>
            <div>
                <button className='navBtn px-3 uaBtn'>User Admin</button>
                <button className='navBtn px-3 dBtn'>Dashboard</button>
            </div>
            <div className='ms-auto me-3'><button className=' LOBtn' onClick={() => { navigate("/") }}>Logout</button></div>
        </div>
    );
}

export default HeaderAdmin;