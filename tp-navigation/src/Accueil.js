import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import ListeCourses from './ListeCourses';
import Galerie from './Galerie';

function Accueil() {
  return (
    <div className="page">
      <h2>Page d’accueil</h2>
      <ListeTaches />
      <Logo />
      <LecteurAudio />
      <ListeCourses items={["Lait", "Pain", "Tomates", "Fromage"]}/>
      <Galerie />
    </div>
  );
}

export default Accueil;