import { useCallback } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';

export const useAppRouter = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const handleNavigate = useCallback(
    (link: string, callback?: () => void) => () => {
      navigate(link);
      callback?.();
    },
    [navigate],
  );

  return { params, navigate, location, useLocation, Link, Navigate, BrowserRouter, Route, Routes, handleNavigate };
};
