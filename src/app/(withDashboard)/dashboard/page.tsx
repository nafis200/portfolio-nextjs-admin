
import Image from "next/image";

const DashboardPage = async () => {

   return (
    <div className="px-4 sm:px-6 md:px-10 lg:ml-[130px]">
      
      <div className="mx-auto mt-40 w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden">
        <Image
          src="https://i.postimg.cc/jjGLxfHz/nafis.jpg"
          alt="nafis ahamed"
          width={208} 
          height={208}
          className="object-cover rounded-full"
          priority
        />
      </div>
        <h1 className="mt-6 text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
        Welcome To Nafis Ahamed
      </h1>
      <h2 className="mt-4 mb-8 text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-700">
        Welcome To nafisahamed14@gmail.com
      </h2>
    </div>
  );
};

export default DashboardPage;
