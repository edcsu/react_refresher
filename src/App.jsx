import { useState } from "react";
import MainHeader from "../components/MainHeader";
import PostList from "../components/PostList";

function App() {
    const [modalIsOpen, setModalIsOpen] = useState(true)

    const hideModalHandler = () => {
        setModalIsOpen(false)
    }

    const showModalHandler = () => {
        setModalIsOpen(true)
    }
    return (
      <>
        <MainHeader onCreatePost={showModalHandler} />
        <main>
          <PostList isPosting={modalIsOpen} onStopPosting={hideModalHandler} />
        </main>
      </>
    );
}

export default App;
