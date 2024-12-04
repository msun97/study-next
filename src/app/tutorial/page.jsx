import React from 'react'
import "./style.css"
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>React란 무엇인가?</h1>
      <p>React는 사용자 인터페이스를 구축하기 위해 Facebook에서 만들어진 JavsScirpt 라이브러리다. 이는 단일 페이지 애플리케이션을 만드는 데 사용된다. 재사용 가능한 UI components를 만들기에 용이하다.</p>
      <hr />
      <h1>작동 방법</h1>
      <p>React는 메모리에 가상 Dom을 생성하여 브라우저 Dom을 변경하기 위한 조작을 실행한다. React는 변경 사항의 부분만 변경하여 렌더링 시간을 단축시킨다.</p>
      <hr />
      <h1>Getting start</h1>
      <p>React를 설치하려면 npm(Node Package Manager)과 Node.js를 설치해야 한다. 또는 HTML에 CDN을 포함하여 진행할 수 있다.</p>
      <h2>React환경 설정</h2>
      <p>npm과 node.js를 설치했다면 편집기에서 터미널을 열고 npx creat-react-app projectName을 실행한다. 그 후 npm run dev를 실행하면 React앱이 있는 새 브라우저 창이 나타난다. </p>
      <h2>애플리케이션 수정</h2>
      <p>src/App.js 파일을 열고 return 뒤에 있는 HTML을 수정하면 된다.</p>
      <hr />
      <h1>React Upgrde</h1>
      <p>React를 최신 버전으로 upgrate하려면 npm install react@latest react-dom@latest를 입력한다.</p>
      <p>그 후 클라이언트 렌더링을 위한 새로운 루트 API를 사용해야 한다.</p>
      <p>
      // Before <br/>
      import ReactDOM from 'react-dom';<br/>
      ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));<br/>
      <br/>
      // After<br/>
      import ReactDOM from 'react-dom/client';<br/>
      const root = ReactDOM.createRoot(document.getElementById('root'));<br/>
      root.render(&lt;App /&gt;);
      </p>
      <hr />
      <div className="paginations">
        <Link href="/"><p>뒤로</p></Link>
        <Link href="/ES6"><p>다음으로</p></Link>
      </div>
    </div>
  )
}

export default page