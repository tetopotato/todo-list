/*
if you want to use components from other files you must import at top
using Vite with React (provides a development environment for building React apps) - created basic template
imported StrictMode from react to write safe code, in case issues with components (included in basic template)
import createRoot - links react to the root element in index.html
imported home in order to render my App
*/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './App.jsx'

/*
Reacts created root element that will render and take place of the root element in my index.html
This is where my Home component is being rendered
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
