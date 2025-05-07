import React, { ReactNode, useState } from "react";
import { Component } from "react";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { Helmet } from "react-helmet";

interface CartProps {}

interface CartState {}
interface Good {
  title: string;
  description: string;
  price: string;
}

interface GoodsListProps {
  goods: Good[];
}

export default class Cart extends Component<CartProps, CartState> {
  render() {
    return <Counter />;
  }
}

const GoodsList: React.FC<GoodsListProps> = ({ goods }) => {
  return (
    <div>
      <h2>Список товаров: </h2>
      <ul>
        {goods.map((good, index) => (
          <li key={index}>
            <h3>{good.title}</h3>
            <p>{good.description}</p>
            <p>Цена: {good.price} руб.</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Counter: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGood, setNewGood] = useState<Good>({
    title: '',
    description: '',
    price: '',
  });
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewGood({ ...newGood, [name]: value });
  };

  const handleAddGood = () => {
    if (newGood.title && newGood.description && newGood.price) {
      setGoods([...goods, newGood]);
      setNewGood({ title: '', description: '', price: '' });
      setIsModalOpen(false);
    } else {
      alert("Пожалуйста, заполните все поля");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputData.trim()) {
      alert(`Отправленные данные: ${inputData}`);
      setInputData('');
    }
  };

  return (
    <Container>
      <Helmet>
      <title>Cart</title>
          <meta name="description" content="Страница о нас"></meta>
          <meta name="keywords" content="Корзина товаров"></meta>
      </Helmet>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div>
          {/* Новая форма для ввода данных */}
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              placeholder="Введите данные"
              className="p-2 border rounded"
            />
            <button 
              type="submit" 
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Отправить
            </button>
          </form>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-green-500 text-white rounded mb-4"
          >
            Добавить товар
          </button>

          {isModalOpen && (
            <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Добавить новый товар</h2>
                <input
                  type="text"
                  name="title"
                  placeholder="Название"
                  value={newGood.title}
                  onChange={handleInputChange}
                  className="block w-full p-2 border rounded mb-2"
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Описание"
                  value={newGood.description}
                  onChange={handleInputChange}
                  className="block w-full p-2 border rounded mb-2"
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Цена"
                  value={newGood.price}
                  onChange={handleInputChange}
                  className="block w-full p-2 border rounded mb-4"
                />
                <div className="flex gap-2">
                  <button 
                    onClick={handleAddGood}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                  >
                    Добавить
                  </button>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-500 text-white rounded"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          )}

          <GoodsList goods={goods} />
        </div>
      </div>
    </Container>
  );
};