import { PureComponent } from "react";

class Header extends PureComponent {
  render() {
    return (
      <div className="bg-rose-200 py-2.5 shadow-md flex justify-between items-center">
        <div>
          <a href="/home" className="font-serif text-2xl m-1">
            Главная{" "}
          </a>
          <a href="/blog" className="font-serif text-2xl m-1">
            Блог{" "}
          </a>
          <a href="/about" className="font-serif text-2xl m-1">
            {" "}
            О нас{" "}
          </a>
          <a href="/cart" className="font-serif text-2xl m-1">
            Корзина{" "}
          </a>
        </div>
        <div>
          <a href="/reg" className="font-serif text-xl">
            Зарегистрироваться{" "}
          </a>
          <a href="/" className="font-serif text-xl m-3">
            Войти{" "}
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
