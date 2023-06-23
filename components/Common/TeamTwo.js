import React, { Component } from "react";
import Link from "next/link";

class TeamTwo extends Component {
  render() {
    return (
      <section className="team-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Meet the Team!</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-team">
                <div className="team-single-img">
                  {/* <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div> */}
                  <img
                    src="/images/team/Jack.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Jack Tanner</h3>
                  <span>CTO</span>
                  <span>
                    Our tech-savvy CTO and Co-Founder. Not only is Jack
                    passionate about SSI development, he's also an avid
                    fan of techno music. With his expertise in all things tech,
                    Jack is a valuable asset to our team and we're thrilled to
                    have him on board.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    <li>
                      <a
                        href="https://twitter.com/theblockstalk"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/jack-tanner"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    src="/images/team/Christian.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Christiaan Verhoef</h3>
                  <span>CMO</span>
                  <span>
                    Chris is one of our energetic Co-Founders, with a passion
                    for empowering people and solving tough problems. His
                    extensive background in marketing makes him a valuable asset
                    to our team. Chris is always ready to roll up his sleeves
                    and tackle any challenges that come his way.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    <li>
                      <a
                        href="https://twitter.com/ChrisVerhoef"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/christiaanverhoef"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    src="/images/team/Mike.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Mike Rusanov</h3>
                  <span>COO</span>
                  <span>
                    Mike, our COO. With his serious and passionate approach, he
                    inspires the team to aim high and work hard. His expertise
                    in business helps to lay the foundation for our company's
                    success. We're lucky to have Mike on board, driving us
                    forward and leading the way.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    <li>
                      <a
                        href="https://twitter.com/rusanov_mikhail"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rusanovmp/"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* second row */}

            <div className="col-lg-4 col-sm-6">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    src="/images/team/Rebal.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Rebal Alhaqash</h3>
                  <span>Developer</span>
                  <span>
                    Rebal, our blockchain and SSI developer. With his abilities
                    in these areas, he makes valuable contributions to the
                    foundation of our company. When he's not working, Rebal
                    enjoys spending time playing a variety of video games. We're
                    grateful to have him on our team, bringing his skills and
                    enthusiasm to the table.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    {/* <li>
                      <a
                        href="https://twitter.com/theblockstalk"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rebal-alhaqash-683b0b174/"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    src="/images/team/Robert.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Robert Zuidhof</h3>
                  <span>Legal</span>
                  <span>
                    Robert is the legal expert on our team, firmly committed to
                    following the letter of the law. In his free time, he enjoys
                    exploring new places and experiencing different cultures
                    through travel. Robert's attention to detail and dedication
                    to the law make him an invaluable asset to our company.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    {/* <li>
                      <a
                        href="https://twitter.com/ChrisVerhoef"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/robert-zuidhof-0a1858186/"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    src="/images/team/Yegor.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Yegor Pokhlebin</h3>
                  <span>Grant writer</span>
                  <span>
                    Yegor is a vital member of our team, bringing a wealth of
                    language experience to his role as grant writer. He has a
                    talent for taking complex ideas and breaking them down into
                    simpler terms, making it easier for others to understand.
                    Prefers to spend his free time studying something new and
                    working out. Has a cat, her name is Leia.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    {/* <li>
                      <a
                        href="https://twitter.com/rusanov_mikhail"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/yegor-pokhlebin-72769b25a?"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third row */}
  
            <div className="col-lg-4 col-sm-6">
              <div className="single-team active">
                <div className="team-single-img">
                  {/* <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div> */}
                  <img
                    src="/images/team/Milica.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Milica Sequeira</h3>
                  <span>Designer</span>
                  <span>
                    Milica is a talented designer with experience in development
                    as well. When she's not working, she enjoys spending time
                    with her dogs and disconnecting from social media. As a
                    vegetarian, Milica is passionate about living a healthy,
                    sustainable lifestyle. We're grateful to have her on our
                    team
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    {/* <li>
                      <a
                        href="https://twitter.com/theblockstalk"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/milica-sequeira-6416aa215"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  

            <div className="col-lg-4 col-sm-6">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    src="/images/team/Suneet.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Suneet Bendre</h3>
                  <span>SSI Advisor</span>
                  <span>
                    Suneet is a valued consultant on our team, bringing a wealth
                    of expertise in SSI and blockchain. In addition to his
                    technical skills, he has a kind heart and a desire to help
                    his teammates. We're grateful to have Suneet on board,
                    bringing his knowledge and compassion to the team.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    {/* <li>
                      <a
                        href="https://twitter.com/NadiaAUqaili"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/suneet-bendre"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    src="/images/team/Haseeb.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Haseeb</h3>
                  <span>Developer</span>
                  <span>
                    Haseeb, an experienced React developer who works part
                    time for Tonomy.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    {/* <li>
                      <a href="https://twitter.com/nvds888" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        href="https://www.linkedin.com/in/aliasgharkarani"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li> */}
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    src="/images/team/Yasin.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Yasin Asadnezhad</h3>
                  <span>Developer</span>
                  <span>
                  Yasin is an accomplished software engineer with nearly a decade of experience in coding, testing, optimizing, and implementing systems. Throughout his career, he has successfully contributed to over 50 large-scale projects using his expertise in C# .Net and ReactJS. His work includes developing ERP and official applications for various enterprises.
                  Yasin has a diverse set of skills, which has enabled him to excel in his profession. He is adept at working with a range of tools and is committed to creating scalable architecture for enterprise solutions. He has a passion for building robust systems that can adapt to evolving business needs.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    {/* <li>
                      <a href="https://twitter.com/nvds888" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/yas-sin/"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    src="/images/team/LambertBinla.jpg"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Lambert T. Binla</h3>
                  <span>Scrum Master & Business Analyst </span>
                  <span>
                  Binla is a  Scrum master and  Servant leader with passion for Transparency and making teams a better place for all to work in. Apart from being a Scrum Master Binla's innovativeness, flexibility and ability to learn faster has earned him experience in Business Management, Marketing and Communication across different industries. Binla also believe that if you go out there and you don't see nice people  then, you need to be one yourself.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    {/* <li>
                      <a href="https://twitter.com/nvds888" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/lambert-t-binla-0552a0b7/"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
 
            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    src="/images/team/Samin.jpg"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Samin Koblmüller</h3>
                  <span>BD intern</span>
                  <span>
                  Samin is an eccentric entrepreneur, with expertise in innovation and business. He runs two art related start ups and loves connecting people with different skills, passions and backrgounds to create meaningful solutions. In his free time he likes to design fashion and digital graphics, produce music and learn about the world and technology.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    {/* <li>
                      <a href="https://twitter.com/nvds888" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/samin-koblm%C3%BCller-18b214201/"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

  
            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    src="/images/team/Sadia.jpg"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Sadia Abbas</h3>
                  <span>Developer</span>
                  <span>
                  Samin is an eccentric entrepreneur, with expertise in innovation and business. He runs two art related start ups and loves connecting people with different skills, passions and backrgounds to create meaningful solutions. In his free time he likes to design fashion and digital graphics, produce music and learn about the world and technology.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    {/* <li>
                      <a href="https://twitter.com/nvds888" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/sadia-abbas-437a20124/"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    src="/images/team/Chetana.jpg"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Chetana Bhardwaj</h3>
                  <span>Scrum Master</span>
                  <span>
                  Agile-Enthusiast, Driven, and dedicated with a track record  of managing software development projects that meet demanding time restraints and exceed all expectations. She is also a certified yoga teacher and enjoys practicing yoga.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    {/* <li>
                      <a href="https://twitter.com/nvds888" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/chetana-bhardwaj-21a26398/"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    src="/images/team/Prateesh.jpg"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Prateesh Prasad</h3>
                  <span>Management consultant</span>
                  <span>
                  Management consultant with expertise in organisation development, strategy planning and implementation
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    {/* <li>
                      <a href="https://twitter.com/nvds888" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/prateeshp/"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-team active">
                <div className="team-single-img">
                  <img
                    src="/images/team/Madhuri.jpg"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Madhuri</h3>
                  <span>Software Tester</span>
                  <span>
                  Madhuri started her working career late after getting married & raising children. She has experience in various her before getting into software Industry.
She spends her free time with family, playing, badminton, swimming and yoga.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    {/* <li>
                      <a href="https://twitter.com/nvds888" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/prateeshp/"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

 
          </div>
        </div>
      </section>
    );
  }
}

export default TeamTwo;
