import Header from 'components/Header';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import List from 'components/List';
import Details from 'components/Details';
import NotFound from 'components/NotFound';

export const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {
        setList(data.results)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, []);

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<List pokemons={list} />} />
        <Route path="/details/:pokemonName" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
