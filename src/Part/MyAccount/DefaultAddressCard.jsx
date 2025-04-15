import { Pencil } from "lucide-react";
import {
  Link,
  Outlet
} from "react-router-dom";

const DefaultAddressCard = () => {
  return (
    <div className="max-w-sm border rounded-md p-4 relative shadow-sm bg-white">
      <h2 className="text-lg font-semibold mb-2">Adresse par défaut</h2>
      <p>Adarsh Adarsh</p>
      <p>My</p>
      <p>Jhook 123029</p>
      <p>India, Haryana</p>
      <p>08307113164</p>

      <button className="absolute bottom-2 right-2 p-1 rounded hover:bg-gray-100">
      <Link to="/account/add-address">   <Pencil className="w-5 h-5" /> </Link>
      </button>
    </div>
  );
};

export default DefaultAddressCard;