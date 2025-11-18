import son from './audio.mp3';

function LecteurAudio() {
  return (
  <div>
    <h3>Lecteur Audio</h3>
  <audio controls src={son}></audio>
  </div>); 
  
}

export default LecteurAudio;