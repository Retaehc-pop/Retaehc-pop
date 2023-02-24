import { NextPage } from "next";
import styles from "./About.module.scss";
import PageBanner from "../../components/pageBanner";
import Skills from "../../container/skills";
import TextCarousel from "../../components/textCarousel";
import Image from "next/image";
const About: NextPage = () => {
  return (
    <>
      <PageBanner>About</PageBanner>
      <main className={styles.main}>
        <div className={styles.pic}>
          <Image src="/profile.jpg" alt="profile picture of Papop" fill style={{objectFit:'cover'}}/>
        </div>
        <section>
          <h3>Education</h3>
          <TextCarousel slides={[{
            title: "Assumption College",
            secondTitle: "Science-Engineering",
            description: ['2015-2022','GPAX: 3.8']
            },{
              title: "RWTH Aachen University",
            secondTitle: "B.Sc Computer Science",
            description: ['2015-Present','']
            }
            ]}/>
          <div>
            <p>2015-2022</p>
            <p>Assumption College, Bangkok Thailand</p>
          </div>
          <div>
            <p>2022-Present</p>
            <p>RWTH Aachen University, Aachen Germany</p>
            <p>B.Sc Computer Science</p>
          </div>
        </section>
        <section>
          <h3>Experience</h3>
          <div>
            <h2>Technical Lead</h2>
            <p>2020-2022</p>
            <p>SPACE AC institute of Technology</p>
          </div>
        </section>
        {/* <section>
          <h3>Skills</h3>
          <Skills />
        </section> */}
      </main>
    </>
  );
};
export default About;
