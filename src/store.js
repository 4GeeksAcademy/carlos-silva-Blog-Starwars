export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    people:JSON.parse(localStorage.getItem("people")) || [],
    planets:JSON.parse(localStorage.getItem("planets")) || [],
    vehicles:JSON.parse(localStorage.getItem("vehicles")) || [],
    favorites: []

  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
      case 'SET_PEOPLE':
        return{
          ...store,
          people: action.payload
        };
         case 'SET_PLANETS':
        return{
          ...store,
          planets: action.payload
        };
            case 'SET_VEHICLES':
        return{
          ...store,
          vehicles: action.payload
        };
            case 'SET_FAV':
        return{
          ...store,
          favorites:[...store, action.payload]
        }



    default:
      throw Error('Unknown action.');
  }    
}
