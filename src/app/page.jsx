'use client';
import React, { useState, useEffect } from 'react';
import Card from "../components/Card";
import image1 from "../assets/high-salary.svg";
import image2 from "../assets/child.svg";
import image3 from "../assets/porcent-salary.svg";
import image4 from "../assets/salary.svg";
import Navbar from "../components/Navbar"
import "./page.css"

function App() {
  const [populationData, setPopulationData] = useState([
    { salary: 600, child: 1 },
    { salary: 100, child: 2 },
    { salary: 300, child: 0 },
  ]);
  const [mediaSalary, setMediaSalary] = useState(0);
  const [mediaChild, setMediaChild] = useState(0);
  const [highestSalary, setHighestSalary] = useState(0);
  const [percentualSalaryBelow1000, setPercentualSalaryBelow1000] = useState(0);

  useEffect(() => {
    const initialMediaSalary = calculateAverageSalary(populationData);
    const initialMediaChild = calculateAverageChild(populationData);
    const initialHighestSalary = calculateHighestSalary(populationData);
    const initialPercentualSalaryBelow1000 = calculatePercentualSalaryBelow1000(populationData);

    setMediaSalary(initialMediaSalary);
    setMediaChild(initialMediaChild);
    setHighestSalary(initialHighestSalary);
    setPercentualSalaryBelow1000(initialPercentualSalaryBelow1000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const salaryInput = e.target.elements.salary.value;
    const childInput = e.target.elements.child.value;
    
    if (salaryInput && childInput) {
      const salaryValue = parseInt(salaryInput);
      const childValue = parseInt(childInput);
  
      const newData = [...populationData, { salary: salaryValue, child: childValue }];
      setPopulationData(newData);
  
      const newMediaSalary = calculateAverageSalary(newData);
      const newMediaChild = calculateAverageChild(newData);
      const newHighestSalary = calculateHighestSalary(newData);
      const newPercentualSalaryBelow1000 = calculatePercentualSalaryBelow1000(newData);
  
      setMediaSalary(newMediaSalary);
      setMediaChild(newMediaChild);
      setHighestSalary(newHighestSalary);
      setPercentualSalaryBelow1000(newPercentualSalaryBelow1000);
    }
    e.target.reset();
  }
  
  const calculateAverageSalary = (data) => {
    const totalSalary = data.reduce((acc, item) => acc + item.salary, 0);
    return totalSalary / data.length;
  }
  
  const calculateAverageChild = (data) => {
    const totalChild = data.reduce((acc, item) => acc + item.child, 0);
    return totalChild / data.length;
  }
  
  const calculateHighestSalary = (data) => {
    const salaries = data.map(item => item.salary);
    return Math.max(...salaries);
  }
  
  const calculatePercentualSalaryBelow1000 = (data) => {
    const below1000 = data.filter(item => item.salary <= 1000);
    return (below1000.length / data.length) * 100;
  }

  return (
    <>
      <main className="h-full">
        <Navbar/>
        <div className="flex gap-2 justify-between p-16">
          <Card title="MAIOR SALÁRIO" value={highestSalary} icon={image1} />
          <Card title="MEDIA DE FILHOS" value={mediaChild.toFixed(2)} icon={image2} />
          <Card title="% SALARIO ATE 1.000,00" value={percentualSalaryBelow1000.toFixed(2)} icon={image3} />
          <Card title="MEDIA DE SALARIO POPULACAO" value={mediaSalary.toFixed(2)} icon={image4} />
        </div>

        <form onSubmit={handleSubmit}>
            <h1>Novo Cadastro</h1>
            <label htmlFor="salary" id="salary">Salário</label>
            <input  type="number" name="salary" />
            <label  htmlFor="child">Número de filhos</label>
            <input type="number" id="child" name="child" />
          <button type="submit">CADASTRAR</button>
        </form>

        <div className="h-96 bg-[#242424]">

        </div>
      </main>
    </>
  );
}

export default App;
