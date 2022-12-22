import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type pizzaType = {
  title: string;
  price: number;
  imageUrl: string;
};

export const PizzaDetail: React.FC = () => {
  const [pizza, setPizza] = React.useState<pizzaType>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    try {
      const getPizzaOfParams = async () => {
        const { data } = await axios.get(`https://6374f95948dfab73a4ee9da4.mockapi.io/items/` + id);
        setPizza(data);
      };
      getPizzaOfParams();
    } catch (error) {
      alert('Ошибка загрузки пиццы');
      navigate('/');
    }
  }, []);

  if (!pizza) {
    return null;
  }

  return (
    <div className="container">
      <h1>{pizza.title}</h1>
      <h2>{pizza.price} ₽</h2>
      <img src={pizza.imageUrl} alt={pizza.title} />
    </div>
  );
};
