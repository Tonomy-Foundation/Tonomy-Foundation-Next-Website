import React, { Component } from "react";
import Link from "next/link";

export default function Team() {
  const teamMembers = [
    {
      name: "Jack Tanner",
      role: "CTO",
      description:
        "Our tech-savvy CTO and Co-Founder, Jack, is not only passionate about SSI development and a fan of techno music, but he's also an innovator at heart. With a deep expertise in all things tech, Jack is a valuable asset to our team, and we're thrilled to have his innovative spirit driving our project",
      socialMedia: [
        {
          type: "twitter",
          link: "https://twitter.com/theblockstalk",
        },
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/jack-tanner",
        },
      ],
      imageSrc: "/images/team/Jack.png",
    },

    {
      name: "Christiaan Verhoef",
      role: "CMO",
      description:
        "Chris is one of our energetic Co-Founders, with a passion for empowering people and solving tough problems. His extensive background in marketing makes him a valuable asset to our team. Chris is always ready to roll up his sleeves and tackle any challenges that come his way.",
      socialMedia: [
        {
          type: "twitter",
          link: "https://twitter.com/ChrisVerhoef",
        },
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/christiaanverhoef",
        },
      ],
      imageSrc: "/images/team/Christian.png",
    },
    {
      name: "Shayan Salehi",
      role: "Chief Commercial Officer",
      description:
        "Shayan is a dynamic and ambitious young professional with a unique blend of sales and technology expertise. With his extensive experience in driving sales and spearheading business development, Shayan plays a vital role in leading our team to success.",
      socialMedia: [
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/shayancloud",
        },
      ],
      imageSrc: "/images/team/Shayan.jpg",
    },
    {
      name: "Suneet Bendre",
      role: "SSI Advisor",
      description:
        "Suneet is a valued consultant on our team, bringing a wealth of expertise in SSI and blockchain. In addition to his technical skills, he has a kind heart and a desire to help his teammates. We're grateful to have Suneet on board, bringing his knowledge and compassion to the team.",
      socialMedia: [
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/suneet-bendre",
        },
      ],
      imageSrc: "/images/team/Suneet.png",
    },
    {
      name: "Haseeb",
      role: "Developer",
      description:
        "works part-time on some things at Tonomy, like automating SDK publishing and running tests. He also did some code reviews and talked about improving the product. Additionally, he managed the website backend and added some security stuff like SSL certificates and vulnerability scans.",
      socialMedia: [
        {
          type: "twitter",
          link: "https://twitter.com/haseebabbasi00/",
        },
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/haseebullahabbasi",
        },
      ],
      imageSrc: "/images/team/Haseeb.png",
    },
    {
      name: "Yasin Asadnezhad",
      role: "Developer",
      description:
        "Yasin is an accomplished software engineer with nearly a decade of experience in C# .Net and ReactJS. He excels in developing ERP and official applications for various enterprises, demonstrating expertise in coding, testing, optimization, and scalable architecture.",
      socialMedia: [
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/yas-sin",
        },
      ],
      imageSrc: "/images/team/Yasin.png",
    },
    {
      name: "Lambert T. Binla",
      role: "Scrum Master & Business Analyst",
      description:
        "Binla is a Scrum master and Servant leader who values transparency and team well-being. His adaptability and diverse experience in Business Management, Marketing, and Communication make him stand out. He believes in setting an example of kindness and positivity.",
      socialMedia: [
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/lambert-t-binla-0552a0b7",
        },
      ],
      imageSrc: "/images/team/LambertBinla.jpg",
    },
    {
      name: "Sadia Abbas",
      role: "Developer",
      description:
        "Sadia is a proficient software developer with skills in back-end development, specializing in React.js, Node.js, MongoDB, Angular, and PHP. She is known for her focus on writing clean, efficient code and brings a strong dedication to quality and innovation in her work. ",
      socialMedia: [
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/sadia-abbas-437a20124",
        },
      ],
      imageSrc: "/images/team/Sadia.jpg",
    },
    {
      name: "Chetana Bhardwaj",
      role: "Scrum Master",
      description:
        "An Agile enthusiast known for exceptional dedication and a proven track record of managing software development projects under tight deadlines, consistently exceeding expectations. In addition to her IT expertise, she is a certified yoga teacher, reflecting a balanced and mindful approach.",
      socialMedia: [
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/chetana-bhardwaj-21a26398",
        },
      ],
      imageSrc: "/images/team/Chetana.jpg",
    },
    {
      name: "Prateesh Prasad",
      role: "Management consultant",
      description:
        "An experienced management consultant with a strong background in organization development, strategy planning, and implementation, contributing valuable insights to drive business growth and efficiency.",
      socialMedia: [
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/prateeshp",
        },
      ],
      imageSrc: "/images/team/Prateesh.jpg",
    },
    {
      name: "Madhuri",
      role: "Software Tester",
      description:
        "Madhuri embarked on her career in software development after a diverse journey through various fields, and her commitment extends beyond work as she enjoys quality time with her family and engages in activities like badminton, swimming, yoga, and continuous learning to stay ahead in her profession.",
      socialMedia: [],
      imageSrc: "/images/team/Madhuri.jpg",
    },
    {
      name: "MD SHAHRIAR",
      role: "Sales and Marketing Executive",
      description:
        "Experienced Sales and Marketing Executive with a Tonomy Foundation internship. Proficient in sales, client relationships, marketing operations, social media, content creation. Committed to delivering outstanding results for Tonomy.",
      socialMedia: [
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/shahriar-faim-dmx/",
        },
      ],
      imageSrc: "/images/team/shahriar.jpg",
    },

    // Add other team members here
  ];
  return (
    <section className="team-area pt-100 pb-70">
      <div className="container-fluid">
        <div className="section-title">
          <h2>Meet the Team!</h2>
        </div>
        <div className="container">
          <div className="row">
            {teamMembers.map((member) => (
              <div className="col-lg-4 col-sm-6">
                <div
                  className="single-team active"
                  style={{ minHeight: "500px" }}
                >
                  <div className="team-single-img">
                    <img
                      src={member.imageSrc}
                      alt="Image"
                      className="team-img"
                    />
                  </div>
                  <div className="team-content">
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                    <ul>
                      {member.socialMedia.map((link, index) => (
                        <li key={index}>
                          <a href={link.link} target="_blank">
                            <i className={`bx bxl-${link.type}`}></i>
                          </a>
                        </li>
                      ))}
                    </ul>

                    <span>{member.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
