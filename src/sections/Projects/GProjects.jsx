import styles from './ProjectsStyles.module.css';
import Roblox from '../../assets/RoIcon.png';
import GProjectCard from '../../common/GProjectCard';

function GProjects() {
  return (
  <section id="gprojects" className={styles.container}>
    <h1 className='sectionTitle'>Game Developer Projects</h1>
    <div className={styles.gprojectsContainer}>

      <GProjectCard src={Roblox} 
       link='https://www.roblox.com/games/9821272782'
       h3='Golden Heritage  | Owner'/> 
       <p>
        (Still Under Game Development) you can check my youtube channel for some gameplay of the game.
       </p>
       <GProjectCard src={Roblox} 
       link='https://www.roblox.com/games/9821272782'
       h3='Jojo Stardust Reborn | Head Developer'/>
       <p>A JoJo's Bizarre Adventure Game, Inspired from Araki's manga series.</p>
       
    </div>
  </section>
  );
}

export default GProjects;