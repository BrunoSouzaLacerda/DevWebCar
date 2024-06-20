import { useState } from 'react';
import './App.css';
import { Card } from './components/card/card.tsx';
import { useCarData, useCarDataByName } from './hooks/useCarData.ts';
import { CreateModal } from './components/create-modal/create-modal.tsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [queryName, setQueryName] = useState("");

  const { data: carData } = useCarData();
  const { data: searchData } = useCarDataByName(queryName);

  const botaoOpenModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const botaoSearch = () => {
    setQueryName(searchName);
  };

  const displayedData = queryName ? searchData : carData;

  return (
    <div className='container'>
      <div className='header'>
        <h1>DevWebCar</h1>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Logo_State_University_of_Ponta_Grossa.png/400px-Logo_State_University_of_Ponta_Grossa.png'></img>
      </div>
      <div className='acoes'>
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Buscar por nome"
        />
        <button onClick={botaoSearch}>Buscar</button>
      </div>
      <div className='card-grid'>
        <div className='botao-adicionar' onClick={botaoOpenModal}>
          <div className='plusbtn'><i className="fa-solid fa-plus"></i></div>
        </div>
        {displayedData?.map(car => 
          <Card 
            id={car.id}
            valor={car.valor} 
            imagem={car.imagem}
            nome={car.nome}
            marca={car.marca}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={botaoOpenModal} />}
    </div>
  );
}

export default App;
