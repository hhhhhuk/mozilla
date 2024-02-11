import "./filter.css";

const Filter = (params) => {
  return <button>{params.text}</button>;
};

const Fulter = ({ tixt }) => {
  return <button>{tixt}</button>;
};

export { Filter, Fulter };
