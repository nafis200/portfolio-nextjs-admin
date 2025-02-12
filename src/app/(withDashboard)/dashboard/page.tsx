import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>.</h1>
      <h1 className="mt-20">.</h1>
      <div className="lg:ml-[130px]">
        {session?.user && (
          <>
            <h1 className="text-4xl text-center mt-10">
              Welcome To {session?.user?.name}
            </h1>
            <h1 className="text-4xl text-center mt-10">
              Welcome To {session?.user?.email}
            </h1>

            <Image
              src={session.user.image ?? "/default-profile.png"}
              width={100}
              height={100}
              alt="image"
              className="mx-auto rounded-full"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
