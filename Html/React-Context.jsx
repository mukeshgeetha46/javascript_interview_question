// 🚀 13. What is Context API?

//context API helps to share data globally (like theme,user info) wihtout prop drilling

const UserContext = createContext();
<UserContext.Provider value={user}> <Profile /> </UserContext.Provider>
