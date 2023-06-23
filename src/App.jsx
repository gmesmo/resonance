import React, { useDebugValue, useEffect } from "react";

import styles from "./App.module.css";
import Cover from "./components/cover/mark";
import MaintenancePage from "./components/Maintenance/Maintenance";

import Capitulo from "./components/chapters/Capitulo";

import capitulos from "./components/chapters/list/chapters.json";

import ChapterSelector from "./components/UI/Menu/ChapterSelector";
import { useState } from "react";
import Menu from "./components/UI/Menu/Menu";
import Config from "./components/config/Config";

function App() {
  const Maintenance = false;

  const [page, setPage] = useState(<Cover />);

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

  if (Maintenance) {
    return (
      <div className="App">
        <MaintenancePage />
      </div>
    );
  }

  return (
    <div className="App">
      <Menu pageChange={onPageChange} />
      {/* <ChapterSelector pageChange={onPageChange} /> */}

      {page}

      {/* <Cover />
      <Capitulo 
        title={prologo.title}
        data={prologo.date}
        text={prologo.text}
      /> */}
      <Config />
    </div>
  );
}

export default App;
