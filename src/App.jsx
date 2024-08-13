import { useState } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MailDetails from './components/MailDetails';
import MailList from './components/MailList';
import MailForm from './components/MailForm';


const initialState = [
  { _id: 1, boxSize: 'small', boxholder: 'Alex' },
  { _id: 2, boxSize: 'med', boxholder: 'Ben'},
  { _id: 3, boxSize: 'small', boxholder: 'Tantan'},
  { _id: 4, boxSize: 'big', boxholder: 'Goe'},
  { _id: 5, boxSize: 'big', boxholder: 'Lee'},
]


const App = () => {
  const [mail, setMail] = useState([])

  const addMail = (newMail) => {
    newMail._id = mail.length + 1
    setMail([...mail, newMail])
  }

  return (
    <>
     <h1>Mail Box</h1>
      <NavBar />

      <Routes>
        <Route path='/' element={<main><h1>Home Page </h1></main>} />
        <Route path="/mail" element={<MailList mail={mail} />} />
        <Route path='/mail/:mailId' element={<MailDetails mail={mail}/>} />
        <Route path="/mail/new" element={<MailForm addMail={addMail} />} />
      </Routes>
    </>
  )
}

export default App