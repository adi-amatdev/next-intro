## Things to keep in mind

1. SSR renders html for better seo instead of injection <br>
2. File based routing instead of app router (default page.tsx is rendered) <br>
3. Layout helps implement DRY concept <br>
4. Adding `()` to the file name gets it ignored by the router hence allows better structure and non-complex routing<br>
5. Helps prevent waterfalling problem where requests are run in sequence instead of SSR which just returns the end html <br>
6. Use Components to better structure code <br>
7. CLIENT AND SERVER COMPONENTS : <br>
    a. Onclick handler work only for client components because you can't    `click` something on the server hence doesnt make sense to render it before sending to the client <br>
    b. By default all components are server components. <br>
    c. To mark a client component (which gets rendered on client machine) write `use client` on top of the file<br>

8. A herirachy of client and server side components are mentioned here : [client and server components](`https://github.com/vercel/next.js/discussions/43153`)