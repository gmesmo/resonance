import styles from "./App.module.css";
import Cover from "./components/cover/mark";

import Capitulo from "./components/chapters/Capitulo";

import capitulos from "./components/chapters/list/chapters.json";

import ChapterSelector from "./components/UI/Menu/ChapterSelector";
import { useState } from "react";

function App() {
  const Maintenace = true;

  const [page, setPage] = useState(<Cover />);

  // if (Maintenace) {
  //   setPage();
  // }

  const onPageChange = (page) => {
    if (page === -1) {
      setPage(<Cover />);
      return;
    } else {
      page++;
      setPage(
        <Capitulo
          key={page}
          chaptNumber={page}
          title={capitulos.chapters[page].title}
          data={capitulos.chapters[page].release}
          text={capitulos.chapters[page].text}
        />
      );
    }
  };

  return (
    <div className="App">
      <ChapterSelector pageChange={onPageChange} />

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
