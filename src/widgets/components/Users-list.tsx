import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UserList() {
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const { data: users, isLoading, error } = useQuery(['users'], async () => {
    const res = await axios.get('/api/users');
    return res.data;
  });

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      {isLoading && <p>Chargement...</p>}
      {error && <p>Erreur</p>}
      <ul>
        {users
          ?.filter((user) => user.name.includes(filter))
          .map((user) => (
            <li key={user.id} onClick={() => navigate(`/users/${user.id}`)}>
              {user.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
