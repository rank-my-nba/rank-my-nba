import React from 'react';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import CurrentRanking from './components/CurrentRanking';
import RankingHistory from './components/RankingHistory';
import PageNotFound from './components/PageNotFound';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/current-ranking" element={<CurrentRanking />} />
        <Route path="/past-rankings" element={<RankingHistory />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
