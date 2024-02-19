import React, { useState, useEffect } from 'react';
import './Table.css';
import DropDown from '../DropDown/DropDown';
import DropDownF from '../DropDown/DropDownF';

const Table = ({ tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8, tr9, tr10, tr11, tr12, tr13, tr14, tr15, tr16, tr17 }) => {
  const [testData, setTestData] = useState([]);
  const options = ['1', '2', '3', '4', '5', '6'];

  // Handling the train status
  const AD = ['A', 'D'];
  const trainStatusAD = {
    'A': ['Running Late', 'Arriving On', 'Arrived On', 'Running on time', 'Expected shortly', 'Indefinite Late', 'Canceled', 'Platform Change'],
    'D': ['Scheduled Departure', 'Ready To Leave', 'On Platform', 'Has Left', 'Rescheduled', 'Terminated', 'Platform Change']
  };

  const [selectOP, setSelectOP] = useState('A');
  const [trainStatus, setTrainStatus] = useState(trainStatusAD['A']);







    // *********** handle you announcement ******************

  const Ann = [1,2,3,4,5,6]
  const [timesAn, setTimesAn] = useState(1)
  const [pause, setPause] = useState(false)

  const handleChange2 = (value) => {
       setTimesAn(value);
  }

  // play button 
  const readDataWithSound = (value) => {
    // Concatenate the data from each row into a single string
    const textToRead = testData.map(row => {
      return `Train number ${row.trainNo},  ${row.trainName}, from ${row.originStation} to ${row.destinationStation}, scheduled departure ${row.schDep}`;
    }).join(' ');

    // , actual departure ${row.actualDepartureTime}, and late status ${row.lateStatus}.

    const speechSynthesis = window.speechSynthesis;
  
    // Use Web Speech API to convert text to speech
    const voices = window.speechSynthesis.getVoices();
  
    const desiredVoice = voices.find(voice => voice.lang === 'en-IN' && voice.name === 'Google हिन्दी');
    
    // Set the desired voice for the utterance
    if (desiredVoice) {
      utterance.voice = desiredVoice;
    }
      const utterance = new SpeechSynthesisUtterance(textToRead);

      for (let index = 0; index < value; index++) {
          speechSynthesis.speak(utterance);
      }
    };


    // pause function

    const pauseAnnouncement = () => {
      console.log('pause');
      speechSynthesis.pause(); // Immediately stops any ongoing speech
      setPause(true);
    };
    const resumeAnnouncement = () => {
      console.log('pause');
      speechSynthesis.resume(); // Immediately stops any ongoing speech
      setPause(true);
    };
    const stopAnnouncement = () => {
      console.log('pause');
      speechSynthesis.cancel(); // Immediately stops any ongoing speech
      setPause(true);
    };




  // ************************** Handle dropdown change *******************8
  const handleChange = (e) => {
    const selectedOption = e.target.value;
    setSelectOP(selectedOption);
    setTrainStatus(trainStatusAD[selectedOption]);
  };

  useEffect(() => {
    // Fetch data from backend and update state
    fetchDataFromBackend();
  }, []);

  const fetchDataFromBackend = () => {
    // Simulating data fetching from backend
    const mockData = [
      { trainNo: 12345, trainName: "Express 1", originStation: "Lucknow", destinationStation: "Delhi", schApr: "07:50 AM", schDep: "08:00 AM", adPfNo: "A", actualArrivalTime: "12:00 PM", actualDepartureTime: "12:05 PM", lateStatus: "5 mins late", taddb: "Yes", cgdb: "No", cU: "update", announcement: "Boarding", delayed: "Yes" },
    
      
    ];

    setTestData(mockData);
  };


  const handleCheckboxChange = (index, fieldName) => {
    setTestData(prevState => {
      return prevState.map((row, rowIndex) => {
        if (rowIndex === index) {
          return { ...row, [fieldName]: !row[fieldName] };
        }
        return row;
      });
    });
  };

  return (
    <div className=" table_main_container ">
      <table className="custom-table">
        <thead>
          <tr>
            <th className="custom-header">{tr1}</th>
            <th className="custom-header">{tr2}</th>
            <th className="custom-header">{tr3}</th>
            <th className="custom-header">{tr4}</th>
            <th className="custom-header">{tr5}</th>
            <th className="custom-header">{tr6}</th>
            <th className="custom-header">{tr7}</th>
            <th className="custom-header">{tr8}</th>
            <th className="custom-header">{tr9}</th>
            <th className="custom-header">{tr10}</th>
            <th className="custom-header">{tr11}</th>
            <th className="custom-header">{tr12}</th>
            <th className="custom-header">{tr13}</th>
            <th className="custom-header">{tr14}</th>
            <th className="custom-header">{tr15}</th>
            <th className="custom-header">{tr16}</th>
            <th className="custom-header">{tr17}</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over testData to populate table rows */}
          {testData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="custom-cell">{row.trainNo}</td>
              <td className="custom-cell">{row.trainName}</td>
              <td className="custom-cell">{row.originStation}</td>
              <td className="custom-cell">{row.destinationStation}</td>
              <td className="custom-cell">{row.schApr}</td>
              <td className="custom-cell">{row.schDep}</td>
              <td className="custom-cell">
                <div className='drop-down-container'>
                  <select
                    id="dropdown"
                    name="dropdown"
                    className="custom-select"
                    value={selectOP}
                    onChange={handleChange}
                  >
                    <option value="">A/D</option>
                    {AD.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
              </td>
              <td className="custom-cell">
                <DropDown
                  options={options}
                  title='PF No.'
                
                />
              </td>
              <td className="custom-cell">{row.actualDepartureTime}</td>
              <td className="custom-cell">{row.lateStatus}</td>
              <td className="custom-cell">{row.taddb}</td>

              {/* Train status */}
              <td className="custom-cell_2">
                <DropDown
                  options={trainStatus}
                  title='Train Status'
                />
              </td>
              <td className="custom-cell">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={row.delayed}
                  onChange={() => handleCheckboxChange(rowIndex, 'delayed')}
                />
              </td>
              <td className="custom-cell">
                <button>
                  Edit
                </button>
              </td>
              <td className='custom-cell'>
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={row.announcement === "Boarding"}
                />
              </td>
              <td className="custom-cell">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={row.taddb === "Yes"}
                />
              </td>
              <td className="custom-cell">
                <button>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <div className="announcement mt-20 p-10  m-5 ">

        <div className="up_announce">
            <DropDownF 
              options={Ann}
              title= 'No.'
              onResult={handleChange2}
            />

            <button onClick={() => readDataWithSound(timesAn)} className='hover:cursor-pointer bg-red-200 p-3 rounded-lg w-20 '>
              Play
            </button>

        </div>
          
          <div className="down_announce">

            <button onClick={resumeAnnouncement} className='hover:cursor-pointer bg-red-200 p-3 rounded-lg w-20 '>
                Resume
            </button>

            <button onClick={pauseAnnouncement} className='hover:cursor-pointer bg-red-200 p-3 rounded-lg w-20 '>
                Pause
            </button>
            
            
          </div>


            <div className="thirdStop">
              <button onClick={stopAnnouncement} className='hover:cursor-pointer bg-red-200 p-3 rounded-lg w-20 '>
                  stop
              </button>
            </div>
          

        </div>

    </div>
  );



};







export default Table;
