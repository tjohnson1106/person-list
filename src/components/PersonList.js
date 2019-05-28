import React from "react";

import Person from "./Person";

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "name here",
      job: "developer"
    },
    {
      img: 34,
      name: "john doe",
      job: "designer"
    },
    {
      img: 56,
      name: "jane doe",
      job: "engineer"
    }
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum vitae
      quae repudiandae delectus.
      <Person person={people[2]} />
    </section>
  );
};

export default PersonList;
