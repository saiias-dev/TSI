import React, { ReactNode, useEffect, useState } from "react";
import { Component } from "react";
import { Container } from "../components/Container";
import { Input } from "../components/Input";
import { Helmet } from "react-helmet";
export const About = () => {
  //render(): ReactNode {
    const [data, setData] = useState<{ title: string; description: string; cost: string } | null>(
      null
    );
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/data");
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
    return (
      <Container>
        <Helmet>
          <title>About</title>
          <meta name="description" content="Страница о нас"></meta>
          <meta
            name="keywords"
            content="Контакты, ключевые слова для SEO"
          ></meta>
        </Helmet>
        <div>
          <h1>Заголовок</h1>
          {data ? (
            <div>
              
              title: <p>{data.title}</p>
              description: <p>{data.description}</p>
              cost: <p>{data.cost}</p>
            </div>
          ) : (
            <p>Загрузка данных</p>
          )}
        </div>
        <div className="flex gap-6 mb-6 md:grid-cols-2">
          <Input
            color="primary"
            size="large"
            title=""
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            color="secondary"
            size="large"
            title=""
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            color="third"
            size="large"
            title=""
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            color="fourth"
            size="large"
            title=""
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </Container>
    );
//  }
}
export default About