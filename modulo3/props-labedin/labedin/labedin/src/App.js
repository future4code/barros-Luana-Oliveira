import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQEHXfiCkNI0xQ/profile-displayphoto-shrink_200_200/0/1654295506061?e=1661385600&v=beta&t=gXdfi4Zg3SU1TJc7XvVxugEIW-zOdwNRFX9WEaQW9ks" 
          nome="Luana Barbosa de Oliveira" 
          descricao="Olá, eu sou a Luana. Estudante de Desenvolvimento Web Fullstack, gosto de estar em constante aprendizagem e evolução, adoro música e meus gatos."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className='infosCard-container'>
        <CardPequeno
          logo={"https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-4-1.png"}
          label={"E-mail: "}
          info={"deoliveiraluana29@gmail.com"}
        />  
        <CardPequeno
          logo={"https://logodownload.org/wp-content/uploads/2018/01/google-maps-logo-7-1.png"}
          label={"Endereço: "}
          info={"Pelotas/RS"}
        />  

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/2219/2219498.png" 
          nome="Auxiliar Administrativo" 
          descricao="Rotinas administrativas, elaboração de documentos e organização de tarefas." 
        />
        
        <CardGrande 
          imagem="https://img2.gratispng.com/20180328/pww/kisspng-graphic-designer-logo-idea-5abb16b19035d0.5985616515222104815907.jpg" 
          nome="Design Gráfico" 
          descricao="Gestão de redes socias, marketing e criação de conteúdo." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2019/08/github-logo-icon.png" 
          texto="Github" 
          link="https://github.com/deoliveiraluana"
        />        

        <ImagemButton 
          imagem="https://w7.pngwing.com/pngs/887/616/png-transparent-linkedin-icon-linkedin-text-rectangle-logo-thumbnail.png" 
          texto="Linkedin" 
          link="https://www.linkedin.com/in/luana-barbosa-de-oliveira-a2a478231/"
        />        
      </div>
    </div>
  );
}

export default App;
