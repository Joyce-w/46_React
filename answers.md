- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  Regular expression is used to match a specific character combination in the case if getFilmFromAPI, \d matches any digit one or more times.

- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?
  Data is stored in the storage of redux-persist. Persisting the store allows state to be saved and then reused when the user session is regained. 
  
- What does `combineReducers` do? Why are we using it? 
  CombineReducer is a helper function that turns an object into a reducting function that you can then pass into createStore. In the root.js, it is combining 3 objects into 1 for usage in other parts of the app.

- How does the "Reset to Fresh Exploration" feature work?
  When the RESET_ALL action is dispatched, the inital state will be returned which is an empty object.

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?
All 3 simple components are used to render a specific url for its coresponding category so retrieving data from the selector should be specified to that category. Once the items have been retrieved, they are passed into the ItemList component to create a uniform format to display.

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
  The page would take a while to load if the entire API needed to be retrieved. useSelector only retrieves information as the user clicks along to prevent any performance overlaod that may crash the app. 
  
- What good ideas for designing and organizing React apps have you learned from
  studying this code?
  Using simple components and then passing them into a component helps to create a uniform and good design.
  
- Which Star Wars character would make the best React developer, and why?
  C3PO of course! He's survived so many films, I'm sure he can survive being a React developer as well.
