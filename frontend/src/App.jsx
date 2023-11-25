import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CreateBooks from './Pages/CreateBooks';
import DeleteBooks from './Pages/DeleteBooks';
import EditBooks from './Pages/EditBooks';
import ShowBooks from './Pages/ShowBooks';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBooks />} />
      <Route path="/books/edit/:id" element={<EditBooks />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
    </Routes>
  );
};

export default App;