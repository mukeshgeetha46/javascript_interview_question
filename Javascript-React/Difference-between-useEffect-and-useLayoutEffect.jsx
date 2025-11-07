// Q18. Difference between useEffect and useLayoutEffect?

//useEffect runs after painting the ui
//useLayoutEffect runs before painting the ui

useEffect(() => {
  // runs after render
}, []);

useLayoutEffect(() => {
  // runs before render
}, []);