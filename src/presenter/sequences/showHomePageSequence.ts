import { pipe } from 'overmind';
import { setPage } from '../operators/setPage';
import { setIsLoading } from '../operators/setIsLoading';

export const showHomePageSequence = pipe(
  setPage('HOME'),
  setIsLoading(false),
);