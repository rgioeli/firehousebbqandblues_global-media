import Image from "next/image";
import firehouseData from "../../items.json";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

const Menu = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-two-column-menu md:grid-cols-three-column-menu lg:grid-cols-four-column-menu gap-5 py-2.5">
      {firehouseData.menu.map((item: FoodItem) => {
        return (
          <div
            key={item.id}
            className={`flex flex-col  justify-between menu-item p-2.5 hover:bg-gray-100 transition-colors duration-300 shadow-custom-shadow rounded-md text-[#111] bg-white`}
          >
            <div>
              <h1 className={`${montserrat.className} pb-2.5 font-bold`}>
                {item.name}
              </h1>
              <div className="relative w-auto h-72">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="py-2.5 font-bold">${item.price}</h3>
              <p className="pt-2.5">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
