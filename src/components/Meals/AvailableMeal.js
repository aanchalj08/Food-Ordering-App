import React from "react";
import styles from "./AvailableMeal.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEAL = [
  {
    id: 'e1',
    name: 'Kurkure Momos',
    description: 'Crunchy deep fried momos',
    price: 200,
  },
  {
    id: 'e2',
    name: 'Veg Pizza',
    description: 'Pizza loaded with veggies',
    price: 500,
  },
  {
    id: 'e3',
    name: 'Arrabiata Pasta',
    description: 'Pasta made in fresh tomato sauce',
    price: 350,
  },
  {
    id: 'e4',
    name: 'Rajma Chawal',
    description: 'Steamed rice served with kidney beans',
    price: 200,
  },
];

function AvailableMeal() {
  const meals = DUMMY_MEAL.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
     
    />
  ));
  return (
    <section className={styles["meal-item"]}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeal;
