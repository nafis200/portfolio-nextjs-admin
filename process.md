
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




