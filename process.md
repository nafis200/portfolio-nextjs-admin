
1. getting start e docs guide link e click

2. Now create app/api/auth/[...nextauth]/route.ts 

ei name exactly eitai lagbe.

3. auth options lagbe ja getting start e ache amar code e utils-->authOPtions.ts e ache add route.ts

4. import authOptions into route.ts.


<!-- Now implement Github -->


5. Go to providers docs.

copy code from providers-github.

6. Go COnfiguration under links.

7. Oauth apps click and create new project.

8. new Oauth App theke new app creare kori.

fill up application name, homepage URL, authoraization callback url.

And get client id and secret.

9. Now work Sign in or Login page and work for github

10. check cookie it set all things

11. GO to dashboard page and import it   const session = await getServerSession(authOptions); you can get everything.

{session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.email}
          </h1>
)}


12. Problem nextAUth lagbe ekta ja env te add korte hobe ebong secret key add 

NEXT_AUTH_SECRET = any value give.

authOptions add koro NEXT_AUTH_SECRET.

13. Navbar er parent components layout.tsx e ekta session sent kori navbar e 

14. logout work

15. sent session into navbar with type

16. implement signOUt into Navbar


<!-- Now google -->


17. now go to google--> providers again need configuration.

18. create Project  if dosent find search

19. configure consent screen / OAuth consent screen  same work dosent find search

20. Now fill the options.

21. User Type

External --> create

App information

give information and create name and email

22. Now go to credentials 

23. create CREDENTIALS  

24. OAuth Client ID 

25. type web applications 

26. Name

27. add hhome page url javascript origin 

27. redirects urls

localhost:3000/api/auth/callback/google must must this

28. give client id and secret

<!-- 29. Protected route -->


30. search middleware into next Auth and get middleware

31. just get two line

32. utils e middleware.ts file create kore 2 line code bosiye dei

33. src e dirrector e create middleware.ts

34. protect hoye geche

35. go to authOPtions pages and value give.

36.   pages:{
    signIn:"/login"
  },


37. register e router.push ache


38. Try COnfiguration---> providers --> credentials




"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";


const LoginPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-4xl mb-5 font-bold">
        Login <span className="text-teal-500">Here</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1710130697~exp=1710134297~hmac=f1b21d9c1823a0657d339c256a1c4ad8301168480e35b35aeba5106568a21010&w=740"
            width={500}
            height={200}
            alt="login page"
            className="w-full h-auto"
          />
        </div>

        <div className="w-[80%] mx-auto bg-white p-6 shadow-lg rounded-lg">
          <p className="text-center mt-6 text-sm text-gray-500">
            Sign In Using
          </p>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              onClick={() => signIn("google", { callbackUrl: "https://portfolio-frontend-gamma-weld.vercel.app//dashboard" })}
            >
              <Image
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                width={30}
                height={30}
                alt="Google logo"
              />
            </button>
            <button
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              onClick={() => signIn("github", { callbackUrl: "https://portfolio-frontend-gamma-weld.vercel.app//dashboard" })}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={25}
                height={25}
                alt="GitHub logo"
              />
            </button>
          </div>

          <p className="text-center mt-4 text-sm text-gray-600">
            Don&apos;t have an account? {" "}
            <Link href="#" className="text-teal-500 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;





