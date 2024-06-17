import styles from './ProjectsStyles.module.css';
import DMichaelCorp from '../../assets/DMCLogo.png';
import WebAppProjectCard from '../../common/WebAppProjectCard';

function WebAppProject() {
  return (
  <section id="webapp_projects" className={styles.container}>
    <h1 className='sectionTitle'>Web Application Projects</h1>
    <div className={styles.webapp_projectsContainer}>
       <WebAppProjectCard src={DMichaelCorp} 
       link='https://github.com/cdmalinao/DMC-Website'
       h3='D. Michael Corporation'/>
      
    </div>
  </section>
  );
}

export default WebAppProject;