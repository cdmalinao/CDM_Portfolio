import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="HTML"/>
           <SkillList src={checkMarkIcon} skill="CSS"/>
           <SkillList src={checkMarkIcon} skill="JavaScript"/>
           <SkillList src={checkMarkIcon} skill="Node"/>
           <SkillList src={checkMarkIcon} skill="TypeScript"/>
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="React"/>
           <SkillList src={checkMarkIcon} skill="Angular"/>
           <SkillList src={checkMarkIcon} skill="Vue"/>
           <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="Git"/>
           <SkillList src={checkMarkIcon} skill="Bootstrap"/>
        </div>
        <hr />
        <br />
        <h1 className="sectionTitle">Game Developer Info</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Full Stack"/>
            <SkillList src={checkMarkIcon} skill="Animator"/>
            <SkillList src={checkMarkIcon} skill="Model"/>
            <SkillList src={checkMarkIcon} skill="VFX"/>
            <SkillList src={checkMarkIcon} skill="SFX"/>
        </div>
    </section>
  );
}

export default Skills;