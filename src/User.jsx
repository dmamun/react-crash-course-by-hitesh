
import { useParams } from "react-router-dom";
const User = () => {
    const {id}=useParams();
    return (
        <div>
            <p className="bg-gray-600 text-white p-4 text-center">User:{id}</p>
            
        </div>
    );
};

export default User;