import { Link } from "react-router-dom";



const Error = () => {
    return (
        <div>
            <p>This is Error</p>
            <button className="btn-primary"><Link to="/">Back to Home</Link></button>
        </div>
    );
};

export default Error;