import './App.css';
import ComponentCar from './components/ComponentCar';

function App() {
  
  const car = [
    {id: 1, marca: "Kia", cor: "Preto", ano: 2020},
    {id: 2, marca: "VW", cor: "Amarelo", ano: 2010},
    {id: 3, marca: "Toyota", cor: "Cinza", ano: 2021},
  ]
  return (
    <div className="App">
      <h1 className="titulo_car">MEUS CARROS PARA VENDA</h1>
        <div className="container_carro">
          
            {car.map((carros) => (

            <ComponentCar 

            key={carros.id}
            marca={carros.marca}
            cor={carros.cor}
            ano={carros.ano}
            />
            ))}

        </div>
    
    </div>
  );
}

export default App;
