import { BrowserRouter , Routes , Route , Link, Outlet} from "react-router-dom"
import './App.css'
import FetchPost from "./components/FetchPost"
import AxiosPost from "./components/AxiosPost"
import PostManager from "./components/PostManager"

function App() {
 

  return (
    <BrowserRouter>

    <h1>metodos de api fetch e axios</h1>

    <div>
      <Link to="/fetch-posts" >Fetch Post</Link>
      <Link to="/axios-posts" >Axios Post</Link>
    </div>
    <div>
      <Link to="/posts" >Gerencie os posts</Link>
    </div>
      < Routes>
      < Route path="/fetch-posts" element={<FetchPost/>} />
      < Route  path="/axios-posts" element={<AxiosPost/>} />
      <Route  path="/posts" element={<PostManager/>} />
      </Routes>

      <div>
        <Outlet/>
      </div>

    </BrowserRouter>
  )
}

export default App
