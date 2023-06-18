import LoginOrRegister from './components/pageComponents/LoginOrRegister';
import { useUser } from './context/UserContext';
import { Toaster, toast } from 'sonner';
import Root from './routes/Root';

function App() {
  const { user, error } = useUser();

  if (error) {
    toast.error(error.message);
  }

  if (user) {
    toast.success(`Logged in as ${user.first_name}`);
    return (
      <>
        <Toaster position="top-center" richColors />
        <Root />
      </>
    );
  }

  return (
    <>
      <Toaster position="top-center" richColors />
      <LoginOrRegister />
    </>
  );
}

export default App;
