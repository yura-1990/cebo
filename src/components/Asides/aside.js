import {Link} from "react-router-dom";


export default function aside() {
    
    return (
        <div className="vh-100 bg-secondary">            
           <ul className="list-unstyled">
                <li><Link className="nav-link text-white fs-4" Link to="/">Home</Link> </li>
                <li><Link className="nav-link text-white fs-4" Link to="/product/create">Product</Link> </li>
           </ul>
        </div>
    )
}