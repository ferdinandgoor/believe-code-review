import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://hp-api.onrender.com/api/characters';

export default function UserList() {
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const useCharactersQuery = () => {
  return useQuery({
    queryKey: ['characters', API_URL],
    queryFn: async (): Promise<string[]> => {
    const response = await axios.get<string[]>(API_URL);
    return response.data;
},
  });
};

  const { data: users, isLoading, error } = useCharactersQuery();

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
