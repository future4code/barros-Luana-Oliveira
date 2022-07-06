import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'Paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post 
          nomeUsuario={'Luana'}
          fotoUsuario={'https://picsum.photos/60/60'}
          fotoPost={'https://picsum.photos/300/250'}
          />
          <Post
          nomeUsuario={'Joao'}
          fotoUsuario={'https://picsum.photos/9/50'}
          fotoPost={'https://picsum.photos/199/150'}
          />
  </div>
)

}


export default App;
