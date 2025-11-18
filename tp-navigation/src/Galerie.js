import img1 from './agra.jpg';
import img2 from './roma.jpg';
import img3 from './londres.jpg';

function Galerie() {
  return (
    <div>
      <h3>Galerie d’images</h3>
      <img src={img1} alt="Agra" width="180" height = "150" />
      <img src={img2} alt="Roma" width="180" height = "150" />
      <img src={img3} alt="Londres" width="180" height = "150" />
    </div>
  );
}

export default Galerie;
