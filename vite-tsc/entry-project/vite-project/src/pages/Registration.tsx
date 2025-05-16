import React, { useState, useEffect } from "react";
import { Component } from "react";
import { Container } from "../components/Container";
import { Helmet } from "react-helmet";

interface PersonProps {}

interface PersonState {}
interface Person {
  surname: string;
  name: string;
  phoneNumber: string;
  email: string;
  role: string;
}

export default class Entry extends Component<PersonProps, PersonState> {
  render() {
    return <Counter />;
  }
}

const Counter: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPerson, setNewPerson] = useState<Person>({
    surname: "",
    name: "",
    phoneNumber: "",
    email: "",
    role: "",
  });
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    fetchPeople();
  }, []);

    const fetchPeople = async () => {
      const response = await fetch("http://localhost:5000/api/people");
      if (!response.ok) throw new Error("Ошибка при загрузке данных");
      const data = await response.json();
      setPeople(data);
    }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  };

  const handleAddPerson = async () => {
    if (
      newPerson.surname &&
      newPerson.name &&
      newPerson.phoneNumber &&
      newPerson.email &&
      newPerson.role
    ) {
      setNewPerson({
        surname: "",
        name: "",
        phoneNumber: "",
        email: "",
        role: "",
      });
      setIsModalOpen(false);
      await fetchPeople();
    } else {
      alert("Пожалуйста, заполните все поля");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputData.trim()) {
      alert(`Отправленные данные: ${inputData}`);
      setInputData("");
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Регистрация</title>
        <meta name="keywords" content="Страница регистрации"></meta>
      </Helmet>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div>
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
            Зарегистрироваться
          </button>

          {isModalOpen && (
            <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Регистрация</h2>
                <input
                  type="text"
                  name="surname"
                  placeholder="Фамилия"
                  value={newPerson.surname}
                  onChange={handleInputChange}
                  className="block w-full p-2 border rounded mb-2"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  value={newPerson.name}
                  onChange={handleInputChange}
                  className="block w-full p-2 border rounded mb-2"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Контактный телефон"
                  value={newPerson.phoneNumber}
                  onChange={handleInputChange}
                  className="block w-full p-2 border rounded mb-4"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Почта"
                  value={newPerson.email}
                  onChange={handleInputChange}
                  className="block w-full p-2 border rounded mb-2"
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Роль"
                  value={newPerson.role}
                  onChange={handleInputChange}
                  className="block w-full p-2 border rounded mb-2"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleAddPerson}
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
          
        </div>
      </div>
    </Container>
  );
};
