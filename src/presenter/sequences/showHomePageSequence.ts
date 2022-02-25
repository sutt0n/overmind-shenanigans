import { pipe } from 'overmind';
import { setPage } from '../operators/setPage';
import { setIsLoading } from '../operators/setIsLoading';
import { getFavoriteStarshipsAction } from '../actions/page-home/getFavoriteStarshipsAction';

export const showHomePageSequence = pipe(
  setPage('HOME'),
  setIsLoading(true),
  getFavoriteStarshipsAction,
  setIsLoading(false),
);