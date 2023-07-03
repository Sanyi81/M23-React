import './App.css';
import Simpsons from "./simpsons/Simpsons";
import Character from "./ric_and_morty/Ric_and_Morty";

const App = () => {
  return (
    // <div>
    //     <Simpsons
    //                 name={'Homer'}
    //                 surname={'Simpson'}
    //                 age={'35'}
    //                 gender={'male'}
    //                 photo={'https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png'}
    //             />
    //             <Simpsons
    //                 name={'Marge'}
    //                 surname={'Simpson'}
    //                 age={'34'}
    //                 gender={'female'}
    //                 photo={'https://i.discogs.com/WI38UGun7TKKNg04MTHK0yV-I1Yb75sdJ_t0GEermmo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI2MzMx/MzAtMTMzNTcyMDM5/MC5wbmc.jpeg'}
    //             />
    //             <Simpsons
    //                 name={'Bart'}
    //                 surname={'Simpson'}
    //                 age={'10'}
    //                 gender={'male'}
    //                 photo={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
    //             />
    //             <Simpsons
    //                 name={'Lisa'}
    //                 surname={'Simpson'}
    //                 age={'8'}
    //                 gender={'female'}
    //                 photo={'https://static.wikia.nocookie.net/simpsons/images/f/fa/185px-Lisa_Simpson2.png'}
    //             />
    //             <Simpsons
    //                 name={'Meggie'}
    //                 surname={'Simpson'}
    //                 age={'1'}
    //                 gender={'female'}
    //                 photo={'https://static.wikia.nocookie.net/simpsons/images/d/df/Maggie-Simpson-icon.png'}
    //             />
    // </div>

      <div>
          <Character
          image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
          id={'1'}
          name={'Rick Sanchez'}
          status={'Alive'}
          species={'Human'}
          gender={'Male'}
          />
          <Character
          image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
          id={'2'}
          name={'Morty Smith'}
          status={'Alive'}
          species={'Human'}
          gender={'Male'}
          />
          <Character
          image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
          id={'3'}
          name={'Summer Smith'}
          status={'Alive'}
          species={'Human'}
          gender={'Female'}
          />
          <Character
              image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
              id={'4'}
              name={'Beth Smith'}
              status={'Alive'}
              species={'Human'}
              gender={'Female'}
          />
          <Character
              image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
              id={'5'}
              name={'Jerry Smith'}
              status={'Alive'}
              species={'Human'}
              gender={'Male'}
          />
          <Character
              image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
              id={'6'}
              name={'Abadango Cluster Princess'}
              status={'Alive'}
              species={'Alien'}
              gender={'Female'}
          />
      </div>
  );
}

export default App;
