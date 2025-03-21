import { useState } from "react";
import PostList from "../components/PostList";

function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const hideModalHandler = () => {
        setModalIsOpen(false)
    }

    const showModalHandler = () => {
        setModalIsOpen(true)
    }
    return (
      <>
        <main>
          <PostList isPosting={modalIsOpen} onStopPosting={hideModalHandler} />
        </main>
      </>
    );
}

export default App;
