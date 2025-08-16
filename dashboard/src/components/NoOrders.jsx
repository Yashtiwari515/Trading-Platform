import { Link } from "react-router-dom";

function NoOrders() {
    return ( 
        <div className="no-orders">
        <p>You haven't placed any orders today</p>

        
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
     );
}

export default NoOrders;