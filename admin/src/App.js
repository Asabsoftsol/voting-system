import { useState } from 'react'
import axios from 'axios'

function App() {

  const [pre_candidate1, setpre_Candidate1] = useState(0)
  const [pre_candidate2, setpre_Candidate2] = useState(0)
  const [nota1, setNota1] = useState(0)

  const [v_pre_candidate1, setv_pre_Candidate1] = useState(0)
  const [v_pre_candidate2, setv_pre_Candidate2] = useState(0)
  const [nota2, setNota2] = useState(0)

  const [gm1, setGm1] = useState(0)
  const [gm2, setGm2] = useState(0)
  const [nota3, setNota3] = useState(0)


  const [agm1, setAgm1] = useState(0)
  const [agm2, setAgm2] = useState(0)
  const [nota4, setNota4] = useState(0)


  const api = async () => {
    const president1 = await axios.get('http://localhost:3001/admin/president/1')
    const president2 = await axios.get('http://localhost:3001/admin/president/2')

    const v_president1 = await axios.get('http://localhost:3001/admin/vice-president/1')
    const v_president2 = await axios.get('http://localhost:3001/admin/vice-president/2')

    const gm1 = await axios.get('http://localhost:3001/admin/gm/1')
    const gm2 = await axios.get('http://localhost:3001/admin/gm/2')

    const a_gm1 = await axios.get('http://localhost:3001/admin/a-gm/1')
    const a_gm2 = await axios.get('http://localhost:3001/admin/a-gm/2')


    const nota1 = await axios.get('http://localhost:3001/admin/president/nota')
    const nota2 = await axios.get('http://localhost:3001/admin/vice-president/nota')
    const nota3 = await axios.get('http://localhost:3001/admin/gm/nota')
    const nota4 = await axios.get('http://localhost:3001/admin/a-gm/nota')


    setpre_Candidate1(president1.data.data)
    setpre_Candidate2(president2.data.data)
    setNota1(nota1.data.data)

    setv_pre_Candidate1(v_president1.data.data)
    setv_pre_Candidate2(v_president2.data.data)
    setNota2(nota2.data.data)

    setGm1(gm1.data.data)
    setGm2(gm2.data.data)
    setNota3(nota3.data.data)

    setAgm1(a_gm1.data.data)
    setAgm2(a_gm2.data.data)
    setNota4(nota4.data.data)
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
            <span>{pre_candidate1}</span>
          </div>
          <div className="can2 candidate">
            <h3>Candidate2</h3>
            <span>{pre_candidate2}</span>
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
            <span>{v_pre_candidate1}</span>
          </div>
          <div className="can2 candidate">
            <h3>Candidate2</h3>
            <span>{v_pre_candidate2}</span>
          </div>
          <div className="nota candidate">
            <h3>NOTA</h3>
            <span>{nota2}</span>
          </div>
        </div>
      </div>

      <div className="president">
        <p>General Secretary</p>
        <div className="grid">
          <div className="can1 candidate">
            <h3>Candidate1</h3>
            <span>{gm1}</span>
          </div>
          <div className="can2 candidate">
            <h3>Candidate2</h3>
            <span>{gm2}</span>
          </div>
          <div className="nota candidate">
            <h3>NOTA</h3>
            <span>{nota3}</span>
          </div>
        </div>
      </div>

      <div className="president">
        <p>Asst. General Secretary</p>
        <div className="grid">
          <div className="can1 candidate">
            <h3>Candidate1</h3>
            <span>{agm1}</span>
          </div>
          <div className="can2 candidate">
            <h3>Candidate2</h3>
            <span>{agm2}</span>
          </div>
          <div className="nota candidate">
            <h3>NOTA</h3>
            <span>{nota4}</span>
          </div>
        </div>
      </div>

      <button className="btn" onClick={() => {
        const conf = window.confirm('Are You Sure ?')
        if (conf === true) {
          axios.get('http://localhost:3001/admin/reset')
        }
      }}>Reset</button>
      <p className="footer">© {new Date().getFullYear()}</p>
    </div>
  );
}

export default App;
