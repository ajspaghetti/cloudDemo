import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReachouts } from '../redux/reachoutSlice';
import { RootState, AppDispatch } from '../redux/store'; 

const UserReachoutsComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { reachouts, loading, error } = useSelector((state: RootState) => state.reachout);

  useEffect(() => {
    dispatch(fetchReachouts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {reachouts.map(reachout => (
        <div key={reachout.id}>{reachout.message}</div>
      ))}
    </div>
  );
};

export default UserReachoutsComponent;
