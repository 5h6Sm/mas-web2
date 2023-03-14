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

function Line(){
  return (
    <div className="App-Navigation-line">
      <div
        style={{
          width: "100%",
          borderBottom: "1px dashed #fff",
          lineHeight: "0.1em"
        }}
      >
      </div>
    </div>
  )
}

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
        <h3>PROJECT</h3>
        <div class="indi_project inner_project">
            <h4>개인 프로젝트</h4>
            <div class="project_col">
                <div class="indi_project_op1 project_op"></div>
                <div class="indi_project_op2 project_op"></div>
                <div class="indi_project_op3 project_op"></div>
                <div class="indi_project_op4 project_op"></div>
                <div class="indi_project_op5 project_op"></div>
            </div>
            
        </div>
        <div class="group_project inner_project">
            <h4>단체 프로젝트</h4>
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
        <Line />
        <Main />
      </header>
    </div>
  );
}


export default App;
