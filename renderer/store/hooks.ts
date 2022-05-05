import { bindActionCreators } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './index';

export const useActions = (actions) => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(actions, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
