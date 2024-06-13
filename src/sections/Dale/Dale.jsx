import styles from './DaleStyles.module.css';
import avatarImg from '../../assets/Dale-Img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import facebookLight from '../../assets/facebook-light.svg';
import facebookDark from '../../assets/facebook-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import youtubeLight from '../../assets/youtube-dark.svg';
import youtubeDark from '../../assets/youtube-light.svg';
import CV from '../../assets/CDM_CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Dale() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'dark' ? moon : sun;
    const facebookIcon = theme === 'dark' ? facebookDark : facebookLight;
    const githubIcon = theme === 'dark' ? githubDark : githubLight;
    const linkedinIcon = theme === 'dark' ? linkedinDark : linkedinLight;
    const youtubeIcon = theme === 'dark' ? youtubeDark : youtubeLight;
    
  return (
  <section id="dale" className={styles.container}> 
    <div className={styles.colorModeContainer}>
        <img 
            className={styles.dale} 
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
            Christian Dale Malinao <br />
             "Haku"
        </h1>
        <h2>Web Full Stack Developer 
            <br />& 
            <br />
            Game Full Stack Developer
        </h2>
        <span>
            <a href="https://www.facebook.com/dlfrmvlly" target="_blank">
             <img src={facebookIcon} alt="Facebook icon" />
            </a>
            <a href="https://github.com/cdmalinao" target="_blank">
             <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank">
             <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCTHgxha_4kFq5KxFfGPr3-w" target="_blank">
             <img src={youtubeIcon} alt="Youtube icon" />
            </a>
        </span>
        <p className={styles.description}>
            Hello there! I am creating a modern web appplication with a passion for any type of businesses. I also do make games in Roblox, feel free to check out my website for more details about me. Feel free to connect with me through my social media or send me an email using the contact form.
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

export default Dale;