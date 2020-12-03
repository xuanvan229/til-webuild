import React from 'react';
import './tailwind.css';
import data from './data.json'
function App() {
  return (
    <div className="App p-4 md:p-10 flex justify-center overflow-x-hidden">
        <div className="message_container">
          {data.map((item, index)  => (
            <div className="item hover:bg-gray-200 rounded-md mt-2" key={item.date + index}>
              <div className="top">
                  <strong>{item.name}</strong>
                  <span className="date text-gray-500">{item.date}</span>
                </div>
                <div dangerouslySetInnerHTML={{__html: item.message}}>
                </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default App;
