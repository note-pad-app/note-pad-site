import { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom'
import * as api from '../../api';
import { useMutation } from '@tanstack/react-query';
import Loading from '../Loading';

type propsType = {
  note: string;
  fav?: boolean;
  favorite: boolean;
  deleted?: boolean;
  noteId: number;
  createdAt: Date;
  inValidate?: () => void;
  category: string
};

function NoteCard({ category, favorite, createdAt, noteId, note, fav, deleted, inValidate }: propsType) {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const favMutation = useMutation({
    mutationFn: api.note.favorite,
    onSuccess: (data) => {
      inValidate && inValidate()
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    }
  });

  const softDeleteMutation = useMutation({
    mutationFn: api.note.softDelete,
    onSuccess: (data) => {
      inValidate && inValidate()
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    }
  });

  const deleteMutation = useMutation({
    mutationFn: api.note.remove,
    onSuccess: (data) => {
      inValidate && inValidate()
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    }
  });

  const recoverMutation = useMutation({
    mutationFn: api.note.recovery,
    onSuccess: (data) => {
      inValidate && inValidate()
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    }
  });

  const toggleFavorite = () => {
    favMutation.mutate({ id: noteId, favorite: !isFavorite });
    setIsFavorite(!isFavorite);
  }

  const softDelete = () => {
    softDeleteMutation.mutate(noteId)
  }

  const deleteNote = () => {
    deleteMutation.mutate(noteId)
  }

  const recoverNote = () => {
    recoverMutation.mutate(noteId)
  }

  const summNote = note.length > 100 ? note.slice(0, 100) + '...' : note;

  return (
    <div className='card border-0 border-rounded-3 shadow-sm p-3 mt-3 bg-white'>
      <Link to={`/notes/note/${noteId}`} className='text-decoration-none'>
        <div dangerouslySetInnerHTML={{ __html: summNote }} className='parsedHtml' />
        <p className='text-secondary'>{String(createdAt)} <span className='text-info ms-2 text-uppercase'>{category}</span></p>
      </Link>
      {
        fav ? <div className='action-container'>
          <button onClick={softDelete} className='action-button me-3 text-warning'>
            {
              softDeleteMutation.isPending ? <Loading /> :
                <i className='fas fa-trash' ></i>
            }
          </button>
          <input
            type="checkbox"
            className="heart"
            id={String(noteId)}
            onChange={toggleFavorite}
            checked={isFavorite}
          />
          <label htmlFor={String(noteId)} className='heartlabel' ><i className='icon fas fa-heart'></i></label>
        </div> : deleted ? <div className='action-container'>
          <button onClick={deleteNote} className='action-button me-3 text-danger'>
            {
              deleteMutation.isPending ? <Loading /> :
                <i className='fas fa-trash' ></i>
            }
          </button>
          <button onClick={recoverNote} className='action-button text-info'>
            {
              recoverMutation.isPending ? <Loading /> :
            <i className='fas fa-trash-restore'></i>
            }
          </button>
        </div> : ''
      }
    </div >
  )
}

export default NoteCard