// ⚡ 12. What are keys in React?

//. Keys are unique identifiers used when rendering list --- helps react track changes

{items.map(item => <li key={item.id}>{item.name}</li>)}
