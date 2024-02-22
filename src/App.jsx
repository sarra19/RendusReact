import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './components/Events'
import { Route, Routes } from 'react-router-dom'
import NavigationBar from './components/Navbar'
import EventDetails from './components/EventDetails'

function App() {
  const [count, setCount] = useState(0)

  return ( 
  <>
  <Suspense fallback={<p>Loading ...</p>}>
  <NavigationBar/>
      <Routes>
        <Route path="/events">
          <Route index element = {<Events/>}/>
          <Route  path="details/:nom" element = {<EventDetails/>}/>

        </Route>
        <Route path="*" element = {<><p>Not Found</p></>}/>

      </Routes>
      </Suspense>
    </>
  )
}

export default App
