import { useState } from 'react';
import './style.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../../api';
import Loading from '../Loading';

interface catTypes {
  name: string;
  id: number;
  type: 'note' | 'todo';
  onCategoryChange: () => void;
}

function CatagoryCard({ name, id, type, onCategoryChange }: catTypes) {
  const [category, setCategory] = useState(name);

  const updateMutation = useMutation({
    mutationFn: api.category.update,
    onSuccess: (data) => {
      console.log(data);
      onCategoryChange();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const removeMutation = useMutation({
    mutationFn: api.category.remove,
    onSuccess: (data) => {
      console.log(data);
      onCategoryChange();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const updateCategory = () => {
    updateMutation.mutate({ id, name: category, type });
  };

  const removeCategory = () => {
    removeMutation.mutate(id);
  };

  return (
    <div className="catagory-card d-flex justify-content-between align-items-center my-3 p-3 shadow-sm bg-white rounded">
      <div className="d-flex align-items-end">
        <input className="category-input" onChange={handleChange} type="text" value={category} />
      </div>
      <div>
        <button className="action-button me-4" onClick={updateCategory}>
          {updateMutation.isPending ? <Loading /> : <i className="fas fa-save text-info"></i>}
        </button>
        <button className="action-button" onClick={removeCategory}>
          {removeMutation.isPending ? <Loading /> : <i className="fas fa-trash text-danger"></i>}
        </button>
      </div>
    </div>
  );
}

export default CatagoryCard;