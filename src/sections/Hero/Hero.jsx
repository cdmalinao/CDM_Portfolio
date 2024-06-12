import styles from './HeroStyles.module.css';
import avatarImg from '../../assets/Dale-Img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CDM_CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    
  return (
  <section id="hero" className={styles.container}> 
    <div className={styles.colorModeContainer}>
        <img 
            className={styles.hero} 
            src={avatarImg}
            alt="Profile picture of Dale" 
        />
        <img 
            className={styles.colorMode}
            src={themeIcon} 
            alt="Color mode icon" 
            onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}> 
        <h1>
            Christian Dale
            <br/>
            Malinao
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
            <a href="https://twitter.com/" target="_blank">
             <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/cdmalinao" target="_blank">
             <img src={githubIcon} alt="github icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank">
             <img src={linkedinIcon} alt="linkedin icon" />
            </a>
        </span>
        <p>
            Creating a modern web appplication with a passion for any type of businesses.
        </p>
        <a href={CV} download>
            <button className="hover">
                Resume
            </button>
        </a>
    </div>
  </section>
  );
}

export default Hero;