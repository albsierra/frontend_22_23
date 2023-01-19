import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/auth'
import reactLogo from 'images/logo512.png';
import { Landing } from 'components/landing/landing'

function Home() {
//  const { user } = useAuth({ middleware: 'guest' })

  return (
    <Landing />
  );
}

export default Home;
