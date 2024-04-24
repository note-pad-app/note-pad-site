import TitleBar from "../components/titlebar";
import CatagoryCard from "../components/catagoryCard";
import * as api from '../api';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Category } from "../Types/categoryTypes";

function EditNoteCats() {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['category', 'note'],
    queryFn: ({ queryKey }) => api.category.getAll(queryKey[1]),
  });
  const queryClient = useQueryClient();

  const handleCategoryDelete = () => {
    queryClient.invalidateQueries({queryKey: ['category', 'note']});
  };

  return (
    <main>
      <div className="container pt-4">
        <TitleBar title="Edit note catagories" />
        {isSuccess ? (
          data.data.data.map((category: Category) => (
            <CatagoryCard
              key={category.id}
              name={category.name}
              id={category.id}
              type="note"
              onCategoryChange={handleCategoryDelete}
            />
          ))
        ) : isError ? (
          <p className="text-danger">something went wrong!!</p>
        ) : (
          '...'
        )}
      </div>
    </main>
  );
}

export default EditNoteCats;