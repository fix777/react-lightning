import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Lookups from "./components/lookups";
import Lookups from "./build/components/lookups";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="demo-only" style={{ width: 500, margin: "10% auto" }}>
          <Lookups
            form={{
              type: "compound",
              formElement: [
                {
                  legend: "Location",
                  row: [
                    {
                      rowElement: [
                        {
                          size: "1-of-2",
                          label: "Latitude",
                          control: <input type="text" name="lat" className="slds-input" />,
                        },
                        {
                          size: "1-of-2",
                          label: "Longitude",
                          control: <input type="text" name="lon" className="slds-input" />,
                        },
                      ],
                    },
                  ],
                },
                {
                  legend: "Address",
                  row: [
                    {
                      rowElement: [
                        {
                          size: "1-of-1",
                          label: "Street",
                          control: <input type="text" className="slds-input" />,
                        },
                      ],
                    },
                    {
                      rowElement: [
                        {
                          size: "1-of-2",
                          label: "City",
                          control: <input type="text" className="slds-input" />,
                        },
                        {
                          size: "1-of-2",
                          label: "State",
                          control: <input type="text" className="slds-input" />,
                        },
                      ],
                    },
                    {
                      rowElement: [
                        {
                          size: "1-of-2",
                          label: "ZIP Code",
                          control: (
                            <textarea id="textarea-id-01" className="slds-textarea" placeholder="Placeholder Text"></textarea>
                          ),
                        },
                      ],
                    },
                  ],
                },
              ]
            }}
            activeFilters={{
              dataSource: [
                {
                  pillKey: "A",
                  label: "A",
                  closable: true,
                  onClose: console.log,
                },
                {
                  pillKey: "B",
                  label: "B",
                  closable: true,
                },
                {
                  pillKey: "C",
                  label: "C",
                  closable: true,
                },
              ]
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
