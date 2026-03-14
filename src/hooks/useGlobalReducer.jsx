// Import necessary hooks and functions from React.
import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store"  // Import the reducer and the initial state.
import { getPeople } from "./services/starWarsApi";
import { getPlanets } from "./services/starWarsApi";
import { getVehicles } from "./services/starWarsApi";
// Create a context to hold the global state of the application
// We will call this global state the "store" to avoid confusion while using local states
const StoreContext = createContext()

// Define a provider component that encapsulates the store and warps it in a context provider to 
// broadcast the information throught all the app pages and components.
export function StoreProvider({ children }) {
    // Initialize reducer with the initial state.
    const [store, dispatch] = useReducer(storeReducer, initialStore())
    // Provide the store and dispatch method to all child components.
   
    async function getAllPeople(){
     try {
          if (store.people.length <= 0){
            let response = await getPeople()
            
             dispatch ({type: "SET_PEOPLE", payload: response})
          }
          
     } catch (error) {
        
     }
    }

      async function getAllPlanets(){
     try {
          if (store.planets.length <= 0){
            let response = await getPlanets()
            
             dispatch ({type: "SET_PLANETS", payload: response})
          }
          
     } catch (error) {
        
     }
    }

       async function getAllVehicles(){
     try {
          if (store.vehilces.length <= 0){
            let response = await getVehicles()
            
             dispatch ({type: "SET_VEHICLES", payload: response})
          }
          
     } catch (error) {
        
     }
    }



    useEffect(() => {
        getAllPeople()
         getAllPlanets()
         getVehicles()

    },[] )

    return <StoreContext.Provider value={{ store, dispatch }}>
        {children}
    </StoreContext.Provider>
}

// Custom hook to access the global state and dispatch function.
export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext)
    return { dispatch, store };
}