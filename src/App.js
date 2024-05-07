import './App.css';
import React from "react";
import datePicker from "react-datepicker"

function App() {

  const [startDate, setStartDate] = useState();

  const [announcementMessage, setAnnouncementMessage] = useState('');



  return (
    <div className="App">
      {announcementMessage}
      <input name='users name' type='text'></input>
      <datePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
  );
}

export default App;
