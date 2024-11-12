import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/slices/categorySlice';

const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categories);

  console.log(categories, 'categories')

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {categories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </div>
  );
};

export default CategoryList;
