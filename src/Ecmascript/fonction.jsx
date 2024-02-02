import Tab from './tableau';

const searchById = (id) => {
  const foundObject = Tab.find(objet => objet.id === id);
  return foundObject || null;
};

export default searchById;
