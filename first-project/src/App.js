import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Anjit Gc</h1>
      <p>
        Its me Anjit Gc. Currently, I am doing bachelor in infomation and
        technology in KIST college which lies in kamalpokhari. I have passed my
        +2 level form Trinity Internation college and passed my school level
        from Sainik Awasiya Mahavidhayalaya,Pokhara. I have good knowledge in
        web development and I have skill in different programming language like
        C,C++,C#,Java,Html,Css,JavaScript and Php. Similarly, in framework I know about
        Laravel and Asp.net. In database I know how to use My SQL and Microsoft
        SQL and for version control I use github. Beside that I have different
        hobbies like playing football, watching movies and reading books. I have
        summarize this paragram in given below table.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table border={1}>
          <tr>
            <th rowSpan={2}>Name</th>
            <th colSpan={3}>Education</th>
            <th colSpan={4}>Skills</th>
            <th rowSpan={2}>Hobbies</th>
          </tr>
          <tr>
            <th>School</th>
            <th>+2</th>
            <th>Bachelor</th>
            <th>Programming Language</th>
            <th>Framework</th>
            <th>Database</th>
            <th>Version Control</th>
          </tr>
          <tr>
            <td>Anjit Gc</td>
            <td>Sainik Awasiya Mahavidhayalaya</td>
            <td>Trinity Internation college</td>
            <td>KIST college</td>
            <td>
              <ul>
                <li>C</li>
                <li>C++</li>
                <li>C#</li>
                <li>Java</li>
                <li>Html</li>
                <li>Css</li>
                <li>JavaScript</li>
                <li>Php</li>
              </ul>
            </td>
            <td>
              <ul>
              <li>Laravel</li>
              <li>Asp.net</li>
              </ul>
            </td>
            <td>
              <ul>
              <li>My SQL</li>
            <li>Microsoft SQL</li>
              </ul>
            </td>
            <td>
              <ul>
              <li>Github</li>
              </ul>
            </td>
            <td>
              <ul>
              <li>Playing Football</li>
              <li>Playing Video Games</li>
              <li>Drawing</li>
              <li>Watching Tv</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
// like in  laravel there is blade in react there is JSX
export default App;
