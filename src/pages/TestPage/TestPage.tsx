import { RootState } from '../../store/store';
import { decrease, increase, loadUser } from './testPageSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function TestPage() {
  const testPageState = useSelector((state: RootState) => state.testPage);
  const dispatch = useDispatch();

  const increaseHandler = () => dispatch(increase());
  const decreaseHandler = () => dispatch(decrease());
  const loadUserHandler = () => dispatch(loadUser({ name: 'John', lastName: 'Doe' }));

  return (
    <>
      <div>Name: {testPageState.name}</div>
      <div>Last Name: {testPageState.lastName}</div>
      <div>Balance: {testPageState.balance}</div>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={loadUserHandler}>Load user's data</button>
    </>
  );
}
