import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTI3ZGZjNDNmODZiOTA2OTdjMjcxYjg3YjgyNDM0MCIsIm5iZiI6MTczODI1MTk4Ny45OTQsInN1YiI6IjY3OWI5ZWQzODE5ZWQyZWFiMDM0NWNmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MSJxPC1_7jZ6_SGMdcH5Lf6o2QuCcSoLnx-WHDWEZjw'
//   }
// };

// const go = async () => fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=3', options).then(res => res.json())

// const result = await go();

// const imgpath = result.results.map((item: any) => `https://image.tmdb.org/t/p/w500/${item.poster_path}.jpg\n`);

// console.log(...imgpath)