import logo from '././components/cover/MARK.png';
import styles from './App.module.css';
import Cover from './components/cover/mark';

import prologo from './components/chapters/list/cap0.json';
import Capitulo from './components/chapters/Capitulo';

import capitulos from './components/chapters/list/chapters.json'

import ChapterSelector from './components/UI/ChapterSelector';
import { useState } from 'react';

function App() {
  const [activeChapter, setActiveChapter] = useState();

  const [page, setPage] = useState(<Cover />);

  const onPageChange = (page) => {
    if (page == -1) {
      setPage(<Cover />);
      return;
    } else {
      page++;
      setPage(
        <Capitulo 
          chaptNumber={page}
          title={capitulos.chapters[page].title}
          data={capitulos.chapters[page].release}
          text={capitulos.chapters[page].text}
        />
      );
    }
    
  }



  return (
    <div className="App">
      <ChapterSelector pageChange={onPageChange}/>

      {page}

      {/* <Cover />
      <Capitulo 
        title={prologo.title}
        data={prologo.date}
        text={prologo.text}
      /> */}
    </div>
  );
}

export default App;
