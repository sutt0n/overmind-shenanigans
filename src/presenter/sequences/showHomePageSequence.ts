import { pipe } from 'overmind';
import { setPage } from '../operators/setPage';
import { setIsLoading } from '../operators/setIsLoading';
import { getFavoriteStarshipsAction } from '../actions/page-home/getFavoriteStarshipsAction';
import { setFavoritesAction } from '../actions/page-home/setFavoritesAction';

export const showHomePageSequence = pipe(
  setPage('HOME'),
  setFavoritesAction,
  setIsLoading(true),
  getFavoriteStarshipsAction,
  setIsLoading(false),
);