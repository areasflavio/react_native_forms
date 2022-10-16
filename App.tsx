import { StatusBar } from 'expo-status-bar';

import { SignUp } from './src/screens/SignUp';

export default function App() {
  return (
    <>
      <SignUp />
      <StatusBar style="auto" />
    </>
  );
}
