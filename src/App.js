import "./App.css";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "achat2chat", body: "cdescription" },
    { id: 2, title: "bchat2chat", body: "bdescription" },
    { id: 3, title: "cchat2chat", body: "adescription" },
  ]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      <Header />
      <Main
        posts={posts}
        setPosts={setPosts}
        filter={filter}
        setFilter={setFilter}
        modal={modal}
        setModal={setModal}
      />

      <Footer />
    </div>
  );
}

export default App;
