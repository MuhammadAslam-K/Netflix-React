import "./App.css"
import Banner from "./Components/Banner/Banner"

import Navbar from "./Components/Navbar/Navbar"
import Rowpost from "./Components/Rowpost/Rowpost"
import { original, action, originals, comedyMovies, horrorMovies, actionMovies, romanceMovies, documentaries } from "./Urls"

function App() {

  return (
    <div className="App">

      <Navbar />
      <Banner />
      <Rowpost url={original} title="Netflix Original" isSmall={false} />
      <Rowpost url={action} title="Action" isSmall={true} />
      <Rowpost url={originals} title="Originals" isSmall={true} />
      <Rowpost url={comedyMovies} title="ComedyMovies" isSmall={true} />
      <Rowpost url={horrorMovies} title="HorrorMovies" isSmall={true} />
      <Rowpost url={actionMovies} title="ActionMovies" isSmall={true} />
      <Rowpost url={romanceMovies} title="RomanceMovies" isSmall={true} />
      <Rowpost url={documentaries} title="Documentaries" isSmall={true} />
    </div>
  )
}

export default App