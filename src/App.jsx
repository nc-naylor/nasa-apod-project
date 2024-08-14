import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;
    const today = new Date().toDateString();
    const localKey = `NASA-${today}`;

    const fetchLocalData = () => {
      const storedData = localStorage.getItem(localKey);
      if (storedData) {
        setData(JSON.parse(storedData));
        setLoading(false);
        return true;
      }
      return false;
    };

    async function fetchAPIData() {
      try {
        const response = await fetch(url);
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (!fetchLocalData()) {
      localStorage.clear();
      fetchAPIData();
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className='loadingState'>
          <i className='fa-solid fa-circle-notch'></i>
        </div>
      ) : (
        <Main data={data} />
      )}
      {
        <Sidebar
          data={data}
          isOpen={showModal}
          handleToggleModal={handleToggleModal}
        />
      }
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
