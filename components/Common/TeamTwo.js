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
              <div className="single-team active">
                <div className="team-single-img">
                  {/* <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div> */}
                  <img
                    src="/images/team/Jack.jpg"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Jack Tanner</h3>
                  <span>CTO</span>
                  <span>
                    Our tech-savvy CTO and Co-founder. Not only is Jack
                    passionate about blockchain development, he's also an avid
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
                    Chris is one of our energetic Co-founders, with a passion
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
                    Rebal, our blockchain and SSI developer. With his expertise
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
                    Yegor's dedication and expertise make him a valuable asset
                    to the foundation.
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
                    src="/images/team/Aymen.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Aymen Ebrahim</h3>
                  <span>Developer</span>
                  <span>
                    Aymen is a talented frontend developer with a passion for
                    helping others. In addition to his technical skills, he has
                    experience in social media management and enjoys chatting
                    with people. When he's not working, Aymen can be found
                    playing video games or spending time with friends. We're
                    thrilled to have him on our team, bringing his skills and
                    enthusiasm to the table.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    <li>
                      <a href="https://twitter.com/AE__dev" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/aymen-ebrahim/"
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
                  {/* <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div> */}
                  <img
                    src="/images/team/Bas.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Bas Stolker</h3>
                  <span>Developer intern</span>
                  <span>
                    Bas is a talented developer intern who is always working to
                    improve our website. His skills and enthusiasm make him a
                    valuable addition to the team. When he's not working, Bas
                    can be found enjoying his favorite anime and video games.
                    We're excited to have him on board, learning and growing
                    with us.
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
                        href="https://www.linkedin.com/in/bas-stolker-b7805723b"
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
                    src="/images/team/Dylan.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Dylan van der Veen</h3>
                  <span>Developer Intern</span>
                  <span>
                    Meet Dylan, our talented developer intern. With his charisma
                    and enthusiasm, he brings a lot of fun to the team. Dylan is
                    dedicated to improving our website and is a valuable asset
                    to the team. In his free time, he enjoys spending quality
                    time with his friends.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    <li>
                      <a
                        href="https://twitter.com/DylanvdVeen03"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/dylan-van-der-veen-251037252"
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
                    src="/images/team/Max.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Max Smit</h3>
                  <span>Developer Intern</span>
                  <span>
                    Max is a talented developer intern on our team. Despite his
                    young age, he is calm, focused, and dedicated to his work.
                    However, Max knows how to have fun and enjoys spending time
                    with his friends when he's not working. We're excited to see
                    what the future holds for this promising young developer.
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
                        href="https://www.linkedin.com/in/max-smit-45305623b"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    {/* <li> */}
                    {/* <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a> */}
                    {/* </li> */}
                  </ul>
                </div>
              </div>
            </div>

            {/* Fourth row */}

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
                    src="/images/team/Nadia.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Nadia Ahmed Uqaili</h3>
                  <span>Marketeer</span>
                  <span>
                    Nadia is our talented marketing intern who brings a wealth
                    of creativity to her work. She is a skilled writer and is
                    always looking for new ways to engage and connect with our
                    audience. In her free time, Nadia enjoys spending time with
                    friends, walking around the beautiful city of Istanbul. As a
                    remote employee, Nadia is able to bring her unique
                    perspective and ideas to the team from anywhere in the
                    world.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    <li>
                      <a
                        href="https://twitter.com/NadiaAUqaili"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/nadia-ahmed-uqaili-2a948823b/"
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
                    src="/images/team/niels.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Niels van de Schepop</h3>
                  <span>Marketeer</span>
                  <span>
                    Niels, our gifted marketer intern. With a wealth of
                    experience in promoting social media accounts, Niels is a
                    valuable asset to our team. He is passionate about staying
                    up-to-date on the latest technologies and is always looking
                    for new ways to reach and engage with our audience. In his
                    spare time, Niels enjoys traveling and exploring new
                    cultures. We are lucky to have Niels on our team.
                  </span>

                  <ul>
                    {/* <li> */}
                    {/* <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a> */}
                    {/* </li> */}
                    <li>
                      <a href="https://twitter.com/nvds888" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/niels-van-de-schepop-576394254/"
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
                    <li>
                      <a
                        href="https://twitter.com/NadiaAUqaili"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/nadia-ahmed-uqaili-2a948823b/"
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
                    src="/images/team/Emmanuel.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Emmanuel Oloyede</h3>
                  <span>Developer</span>
                  <span>
                    Emmanuel is a talented young developer who is currently
                    balancing his studies at university with a part-time
                    position at Tonomy. Despite his busy schedule, he is
                    dedicated to his development and is committed to making
                    valuable contributions to the company. He is highly skilled
                    and has a serious approach to his work, making him a
                    valuable asset to the team.
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
                        href="https://www.linkedin.com/in/oloyede-emmanuel"
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
                    src="/images/team/Ali.png"
                    alt="Image"
                    classname="epic"
                  />
                </div>

                <div className="team-content">
                  <h3>Ali Asghar Karani</h3>
                  <span>Developer</span>
                  <span>
                    Ali, an experienced React native developer who works part
                    time for Tonomy. In his free time, Ali loves to spend
                    quality time with his family and puts all of his energy into
                    ensuring their happiness. With years of experience in his
                    field, Ali is a valuable asset to our team and we are
                    grateful to have him on board. If you have any questions or
                    need assistance with your project, Ali is the go-to person
                    to turn to.
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
                        href="https://www.linkedin.com/in/aliasgharkarani"
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
