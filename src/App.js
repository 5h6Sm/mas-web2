import './App.css';
import './index.css'


import React from 'react';
import { useState } from 'react';
import {motion, AnimatePresence} from "framer-motion"

import sun from './images/sun.png'
import star from './images/star.png';
import moon from './images/moon.png';
import top from './images/upButton.png';

function Top(){
  const [isVisible1, setIsVisible1] = useState('');
  const [isVisible2, setIsVisible2] = useState('');
  const [isVisible3, setIsVisible3] = useState('');

  return (
    <div className='all_wrapper'>
       <div class="top">
            <div class="top_text">
                <div class = "MAS2ND">MAS 2ND:<br/>PROJECT</div>
            </div>
            <div class="text_img">
                <div class="op">
                    <div>
                    {/* 해버튼 마우스 닿을 시 글자 나옴 */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}>
                      <motion.a
                        onHoverStart={(e) => setIsVisible1(true)}
                        onHoverEnd={(e) => setIsVisible1(false)}
                      >
                        <a href=''><img src={sun} alt="ABOUT" className="sun_buttons" /></a><br />
                      </motion.a>
                    </motion.div>
                    <AnimatePresence>
                      {isVisible1 && (
                        <motion.div
                          className="navigation-text"
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 3 }}
                          exit={{ x: -30, opacity: 0 }}
                          transition={{ duration: 1 }}>
                          <span className="text">ABOUT</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div class="op">
                        <div>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}>
                            <motion.a
                              onHoverStart={() => { setIsVisible2(true) }}
                              onHoverEnd={() => { setIsVisible2(false) }}
                            >
                              <a href=''><img src={star} alt="MEMBER" className="buttons" /></a><br />
                            </motion.a>
                          </motion.div>
                          <AnimatePresence>
                            {isVisible2 && (
                              <motion.div
                                className="navigation-text"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 3 }}
                                exit={{ x: -30, opacity: 0 }}
                                transition={{ duration: 1 }}>
                                <span className="text">MEMBER</span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                </div>
                <div class="op">
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}>
                        <motion.a
                          onHoverStart={() => { setIsVisible3(true) }}
                          onHoverEnd={() => { setIsVisible3(false) }}
                        >
                          <a href=''><img src={moon} alt="PROJECT" className="buttons" /></a><br />
                        </motion.a>
                      </motion.div>
                      <AnimatePresence>
                        {isVisible3 && (
                          <motion.div
                            className="navigation-text"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 3 }}
                            exit={{ x: -30, opacity: 0 }}
                            transition={{ duration: 1 }}>
                            <span className="text">PROJECT</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}



function Main(){
  return (
    <div className='all_wrapper'>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 3 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1 }}>
    <div class="line"></div>
    <div class="main">
    <div class="user_profile">

        <div class="name_tag">
            <h3 class="tag">#지수연  #Ji Su Yeon #NewMediaDesign</h3>
            <p class="intro">안녕하세요. 2022년도 마스 2기 부원 지수연입니다.<br/>
                항상 열정을 가지고 활동하는 디자이너가 되겠습니다.</p>
        </div>

        <div class="skill">
            <h4 class = "title">SKILL</h4>
            <p class="skill_op">Adobe illustrator</p>
            <p class="skill_op">Adobe photoshop</p>
        </div>
        
        <div class="lisence">
            <h4 class = "title">LISENCE</h4>
            <p class="lisence_op">GTQ photoshop 1급</p>
        </div>
        <div class="email">
            <h4 class = "title">E-MAIL</h4>
            <p class="email_op">d2232@e-mirim.hs.kr</p>
        </div>

    </div>

    <div class="h_line">
        <div class="h_line1"></div>
        🤍
        <div class="h_line2"></div>
    </div>

    <div class="project">
        <div class = "project_view_title">PROJECT</div>
        <div class="indi_project inner_project">
            <div class = "project_view">개인 프로젝트</div>
            <div class="project_col">
                <div class="indi_project_op1 project_op"></div>
                <div class="indi_project_op2 project_op"></div>
                <div class="indi_project_op3 project_op"></div>
                <div class="indi_project_op4 project_op"></div>
                <div class="indi_project_op5 project_op"></div>
            </div>
            
        </div>
        <div class="group_project inner_project">
            <div class = "project_view">단체 프로젝트</div>
            <div class="project_col">
                <div class="group_project_op1 project_op"></div>
                <div class="group_project_op2 project_op"></div>
                <div class="group_project_op3 project_op"></div>
                <div class="group_project_op4 project_op"></div>

            </div>
        </div>

    </div>
</div>
</motion.div>
</div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top />
                <Main />
      </header>
    </div>
  );
}


export default App;
