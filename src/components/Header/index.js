import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 import { BsCart } from "react-icons/bs";

 

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Sign Up",
    path: "/SignUp",
  }
];

const Header = () => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  }, []);
  
  return (
    <>
      <header className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              class="rounded-circle"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAET0lEQVR4AbSVA5QjWxCGu2eNZ9t27zOPnm3btm1vzPVmkM6O7Zm1bRtjO+l/K/dsdJPuXtY5X6NuVd0vbAHAvnIE8SOxgugluom5xIfEoH2dt6+bX0hsIBAIBPwNDQ1bGxsbdyqKEgBYzCKOO1QCRxDrCOzcuXNdVlbWV4WFhXcWFBTcm5+f/2dzc3MNwKKK6LffAn5F6eddtuZJ57ylr0eztaUtHRSzV63pesPimmCcNveD0Np/VTM+ecvsyNywq4a9E8tq6q18/+gFy1/d1d5xnK6AZ92W5/u50yH87oDws4VxqmEcuvr6UN/aihM//oHl4vjRhBHf/4U+vx9bWtow+Hd7ZO03O5IcMp6bMj9FV8C4cuNH/VOK0M8phwd8VzkLwXh3gsw2olxivvsfluIKVvuorzCc72dNQXDmg1XzcvUFVmz4KLh5v3/crFn8xYIlNfXY1dSMod/8A+GtLyG8/1385m99AeGD73HmLwb2LviWrw2vJf3tQj9bCgnM1Rbo8fsHPpJdltnvXzcJuFjzKSPHIaAosFVNBxv4+qcQ3vk6XuC1TyC8+w17hypXrEZdRycG/GqLCNDMS8dnLmvr6R2uKvD+1HkW0Z4Khi0VgtmDk8Zm4uUp83DehCx2vzdc4y1kPUMdaexepFcfmntvQXWBqsATFbO8wugM8IjsvA9o9EhZFXPVBcpJYFQ6ohH3IOwLGj1SZrmOAP0EoxEZrBn8WlyOMSncl6hOytAUmOllAw4dJFCmIVA2wyu4qNDlQ8JzGB+3Fs+Jnlz8Mn8530MCpRoCpSQQLHRyuDTOjNja23KrsKWtAw+XTI+bIaXrCThlBBFZo8zBcmqwns9mLkJvIIAxKzdwM0ICJToCDhk8w+jnk+Tk8hxHjs1ExoatCMba5jYcMSYzYZ00SVNgulewe6mQ2HPuT9Y7OrqQs3E7ThyfHV4Ln4nL5WKsamplm/fQq78xszy+zsHQEShhAuCxLV3Lhu8kkYeKpsasPVM2E629fQjF97OXsLwakk9LoHiaV7Clgeco+gg2t3WwDRQFGEef70WpBTAsXg0FkajaXoN+Dpn1qCHJxXspYCWiru/Oq2YPJbWo6ezCqfQR8b38PH0BayrUsC5Zg0ThJzESZDU6kECRhkARCVhSocYQh4xFdU3g4+fZS1V7eCSvlkDhVBJIgRYXePLQ3N2LUORt3Ib+1tT4WnPifimtUFuANWqSjHtyqrCptR0lm3fgcKfMrWuhKzDFK5iScSiRUgvUBZ5kAp6YBjF87eHgh8fnGEYPxKj+EVoC71fNsYjUIBDszF/z93xevTZ8viOzvFhVYH5NvTTA6OkVDFRsmBhGpPvdY0Tmw+gJ+NQh1DIisVfdfBCKt1m+9Pq9KImZq16gGYDbYEx1WB3LP3X5h+7TV0qI6ht++/2H/drbD5oXXr3TQ+C3YPoiitg7mBheuUuv32l/gjfHMR0woBgAtIF+zCviViUAAAAASUVORK5CYII="
              alt="..."
              height="36"
            />
            <span className="ml-3 text-xl">Eshop</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {navigations.map((navigation) => {
              return (
                
                <Link to={navigation.path} className="mr-5 hover:text-gray-900">
                  {navigation.name}
                  
                </Link>
                
              );
            })}
          </nav>
          
          
          
          <Link to="/cart" className="mr-5 hover:text-gray-900">
            <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-3 px-3 focus:outline-none hover:bg-indigo-500 rounded text-base mt-4 md:mt-0">
              <BsCart /> 
              {cartCount > 0 && (
                <sup >
                  {cartCount}
                </sup>
              )}
            </button>
          </Link>
           
        </div>
      </header>
    </>
  );
};

export default Header;