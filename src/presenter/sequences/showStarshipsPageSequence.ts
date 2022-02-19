import { pipe } from 'overmind';
import { setPage } from '../operators/setPage';
import { setIsLoading } from '../operators/setIsLoading';
import { getAllStarshipsAction } from '../actions/starships-page/getAllStarshipsAction';

export const showStarshipsPageSequence = pipe(
  setPage('STARSHIPS'),
  setIsLoading(true),
  getAllStarshipsAction,
  setIsLoading(false),
);