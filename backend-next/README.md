## Thing learnt

1. Components can be async in Next <br>
2. `Loading.tsx` is reserved to display fillers during async operations <br>
3. `api`/route-name/`route.ts` name is reserved to write backend logic for next.js <br>
4.  Always defer `"client component"` down the tree. <br>
5.  Prisma can be normally integrated. <br>
6. 'SSR Components' can be async and fetch data before being sent to client.<br>
7. 'backend calls' can be directly done with ssr components. No need for axios instead using simple func calls <br>
8. server actions are used to call `functions` which can be used both in the frontend and backend. Under the hood http requests are still sent, but Next abstracts all the http requests to be made and simply allows a direct function call in client components which trigger server actions like a RPC 