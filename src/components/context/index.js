import { createContext } from 'react';

const UserContext = createContext({
  user: ["Brian Brown", ()=> {}],
  edge: ["39", ()=> {}],
  school: ["LarnU", ()=> {}],
  
  
  
});

export default UserContext;