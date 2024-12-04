import React from 'react'
import "./style.css"

const page = () => {
  return (
    <div>
      <h1>ES6</h1>
      <h2>ES6란?</h2>
      <p>ES6(ECMAScript 2015)는 JavaScript의 새로운 버전입니다.</p>
      <h3>변경된 기능</h3>
      <ul>
        <li>class</li>
        <li>let, const</li>
        <li>Arrow Function</li>
        <li>배열 메서드 .map()</li>
        <li>구조 분해</li>
        <li>모듈</li>
        <li>삼항 연산자</li>
        <li>스프레드 연산자</li>
      </ul>
    </div>
  )
}

export default page