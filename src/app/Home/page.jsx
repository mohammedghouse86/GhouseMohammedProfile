import React from "react";
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <div style={{display:'flex', flexDirection:'row'}}>
        <div>
        <h3>Introduction:</h3>
        <p>
          I am a dedicated and results-driven Power Apps Developer with one year
          of hands-on experience in designing and implementing solutions using
          Microsoft Power Platform. Additionally, I bring over three years of
          expertise as a Web Developer, specializing in the MERN stack and
          Next.js. My diverse skill set allows me to craft dynamic and visually
          appealing websites while also creating custom applications to
          streamline business processes and improve operational efficiency.
        </p>
        <p>
          With a strong background in front-end and back-end development, I
          excel in designing, developing, and deploying robust, scalable, and
          secure web applications. I am proficient in technologies such as
          JavaScript, React.js, Next.js, HTML5, CSS3, and more, enabling me to
          deliver user-centric, responsive web applications that delight users
          with their aesthetic appeal and functionality.
        </p>
        <p>
          My journey in the tech industry is complemented by a Bachelor's Degree
          in Electrical and Electronics Engineering from Osmania University,
          alongside Post Graduate Diplomas in Electrical Design and Drafting,
          HVAC Design and Drafting, and a certification in Programmable Logic
          Control and SCADA. With 14 years of experience in electrical design
          and commercial and industrial construction, I possess a comprehensive
          understanding of both the technical and practical aspects of
          engineering and technology.
        </p>
        </div>
        <Image 
    src="/Ghouse.JPG" 
    alt="Ghouse Photo" 
    width={90} 
    height={150} 
    style={{ width: '90px', height: '150px', border:'1px solid blue', marginTop:'60px' }} 
  />
      </div>
      
        <p>
          I am passionate about writing clean, maintainable code and thrive in
          collaborative environments where creativity and innovation are
          encouraged. My diverse experience and commitment to excellence make me
          a valuable asset to any team, eager to contribute to innovative and
          impactful projects.
        </p>
    </>
  );
};

export default Page;
