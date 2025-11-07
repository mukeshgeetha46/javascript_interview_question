// 🔹 30. What is Lazy Loading in React?

//. Lazy loading helps to load components only when they are needed --improve performances

const Home = React.lazy(() => import('./Home'));
<Suspense fallback={<div>Loading...</div>}>
  <Home />
</Suspense>
