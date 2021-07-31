import { useDispatch } from 'react-redux';
import storeWrapper from '../redux/store';

const AppDispatch = storeWrapper.getStore().dispatch;
export const useAppDispatch = () => useDispatch<typeof AppDispatch>();
