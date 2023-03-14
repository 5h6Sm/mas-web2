import './App.css';
import './index.css'

function Top(){
  return (
    <div className='all_wrapper'>
        <div class="top">
            <div class="top_text">
                <h1>MAS 2ND:<br/>PROJECT</h1>
            </div>
            <div class="text_img">
                <div class="op">about 🔅</div>
                <div class="op">memeber 🔅</div>
                <div class="op">project 🔅</div>
            </div>
        </div>
    </div>
  )
}

const HorizonLine = ({ text }) => {
  return (
    <div
      style={{
        width: "65.5%",
        textAlign: "center",
        borderBottom: "1px datted #fff",
        lineHeight: "1em",
        margin: "10px 0 20px",
      }}
    >

    </div>
  );
};

function Main(){
  return (
    <div className='all_wrapper'>
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
</div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top />
        <HorizonLine />
        <Main />
      </header>
    </div>
  );
}


export default App;
