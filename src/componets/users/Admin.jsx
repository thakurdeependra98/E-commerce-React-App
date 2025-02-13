import React from "react";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const products = useSelector((state) => state.products.products);
  const users = useSelector((state) => state.auth.users);

  console.log(users);
  

  if (!user || user.role !== "admin") {
    return <h2 className="text-center text-red-500">Access Denied</h2>;
  }

  return (
    <div className="w-screen h-screen flex items-center justify-start px-[10vw]">
      <div>
      <h2 className="text-[2vw] font-bold mb-[5vh] border-b pb-2">All Users</h2>
      <div className="w-[40vw]">
        {users ? (
          <ul>
            {/* Admins List */}
            {users.admins && users.admins.length > 0 && (
              <>
                <h3 className="text-lg font-bold mt-2 text-red-500">Admins</h3>
                {users.admins.map((admin) => (
                  <li key={admin.id} className="p-2 border-b">
                    {admin.username} - <span className="text-gray-500">Admin</span>
                  </li>
                ))}
              </>
            )}

            {/* Sellers List */}
            {users.sellers && users.sellers.length > 0 && (
              <>
                <h3 className="text-lg font-bold mt-2 text-blue-500">Sellers</h3>
                {users.sellers.map((seller) => (
                  <li key={seller.id} className="p-2 border-b">
                    {seller.username} - <span className="text-gray-500">Seller</span>
                  </li>
                ))}
              </>
            )}

            {/* Buyers List */}
            {users.buyers && users.buyers.length > 0 && (
              <>
                <h3 className="text-lg font-bold mt-2 text-green-500">Buyers</h3>
                {users.buyers.map((buyer) => (
                  <li key={buyer.id} className="p-2 border-b">
                    {buyer.username} - <span className="text-gray-500">Buyer</span>
                  </li>
                ))}
              </>
            )}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
