import React, { useState } from 'react';
import uuid from 'uuid';
import axios from 'axios';


const useAxios = (url) => {
  const [state, setState] = useState([]);
  const getData = async (restOfUrl = "") => {
    const res = await axios.get(`${url}${restOfUrl}`);
    setState(state => [...state, { ...res.data, id: uuid() }]);
  }
  return[state, getData]
};

export default useAxios;
