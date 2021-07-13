import { useState } from 'react'
import axios from 'axios'

function App() {

  const [candidate1, setCandidate1] = useState(0)
  const [candidate2, setCandidate2] = useState(0)
  const [nota1, setNota1] = useState(0)

  const api = async () => {
    const president1 = await axios.get('http://localhost:3001/admin/president/1')
    const president2 = await axios.get('http://localhost:3001/admin/president/2')
    const nota1 = await axios.get('http://localhost:3001/admin/president/nota')
    setCandidate1(president1.data.data)
    setCandidate2(president2.data.data)
    setNota1(nota1.data.data)
  }

  api()





  return (
    <div className="admin">
      <nav>
        <img src="https://www.biswanathcollege.in/wp-content/uploads/2021/02/headerTitle.png" alt="logo" />
      </nav>

      <h2>Vote counter</h2>

      <div className="president">
        <p>President</p>
        <div className="grid">
          <div className="can1 candidate">
            <h3>Candidate1</h3>
            <span>{candidate1}</span>
          </div>
          <div className="can2 candidate">
            <h3>Candidate2</h3>
            <span>{candidate2}</span>
          </div>
          <div className="nota candidate">
            <h3>NOTA</h3>
            <span>{nota1}</span>
          </div>
        </div>
      </div>

      <div className="president">
        <p>Vice President</p>
        <div className="grid">
          <div className="can1 candidate">
            <h3>Candidate1</h3>
            <span>322</span>
          </div>
          <div className="can2 candidate">
            <h3>Candidate2</h3>
            <span>212</span>
          </div>
          <div className="nota candidate">
            <h3>NOTA</h3>
            <span>212</span>
          </div>
        </div>
      </div>

      <div className="president">
        <p>General Secretary</p>
        <div className="grid">
          <div className="can1 candidate">
            <h3>Candidate1</h3>
            <span>322</span>
          </div>
          <div className="can2 candidate">
            <h3>Candidate2</h3>
            <span>212</span>
          </div>
          <div className="nota candidate">
            <h3>NOTA</h3>
            <span>212</span>
          </div>
        </div>
      </div>

      <div className="president">
        <p>Asst. General Secretary</p>
        <div className="grid">
          <div className="can1 candidate">
            <h3>Candidate1</h3>
            <span>322</span>
          </div>
          <div className="can2 candidate">
            <h3>Candidate2</h3>
            <span>212</span>
          </div>
          <div className="nota candidate">
            <h3>NOTA</h3>
            <span>212</span>
          </div>
        </div>
      </div>

      <p className="footer">© {new Date().getFullYear()}</p>
    </div>
  );
}

export default App;
