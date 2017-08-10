import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Input from "./components/input";
// import Lookup from "./components/lookup";
// import Form from "./components/form";
import {
  Input, Lookup, Form, Tile,
} from "./components";

const { compound: FormCompound } = Form;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> 
        <div className="demo-only">
          <Tile
            type="icon"
            icon="automate"
            title={<a href="javascript:void(0)">Hello Tile</a>}
            details={[
              {
                // label: "label 1 label 1 label 1 label 1",
                description: "Desc 1 Desc 1 Desc 1 Desc 1 Desc 1",
              },
              {
                // label: "label 2 label 2 label 2 label 2 label 2 label 2",
                description: "Desc 2 Desc 2 Desc 2 Desc 2 Desc 2 Desc 2 Desc 2 Desc 2",
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

// import Lookups from "./components/lookups";
// import Lookups from "./build/components/lookups";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <div className="demo-only" style={{ width: 500, margin: "10% auto" }}>
//           <Lookups
//             form={{
//               type: "compound",
//               formElement: [
//                 {
//                   legend: "Location",
//                   row: [
//                     {
//                       rowElement: [
//                         {
//                           size: "1-of-2",
//                           label: "Latitude",
//                           control: <input type="text" name="lat" className="slds-input" />,
//                         },
//                         {
//                           size: "1-of-2",
//                           label: "Longitude",
//                           control: <input type="text" name="lon" className="slds-input" />,
//                         },
//                       ],
//                     },
//                   ],
//                 },
//                 {
//                   legend: "Address",
//                   row: [
//                     {
//                       rowElement: [
//                         {
//                           size: "1-of-1",
//                           label: "Street",
//                           control: <input type="text" className="slds-input" />,
//                         },
//                       ],
//                     },
//                     {
//                       rowElement: [
//                         {
//                           size: "1-of-2",
//                           label: "City",
//                           control: <input type="text" className="slds-input" />,
//                         },
//                         {
//                           size: "1-of-2",
//                           label: "State",
//                           control: <input type="text" className="slds-input" />,
//                         },
//                       ],
//                     },
//                     {
//                       rowElement: [
//                         {
//                           size: "1-of-2",
//                           label: "ZIP Code",
//                           control: (
//                             <textarea id="textarea-id-01" className="slds-textarea" placeholder="Placeholder Text"></textarea>
//                           ),
//                         },
//                       ],
//                     },
//                   ],
//                 },
//               ]
//             }}
//             activeFilters={{
//               dataSource: [
//                 {
//                   pillKey: "A",
//                   label: "A",
//                   closable: true,
//                   onClose: console.log,
//                 },
//                 {
//                   pillKey: "B",
//                   label: "B",
//                   closable: true,
//                 },
//                 {
//                   pillKey: "C",
//                   label: "C",
//                   closable: true,
//                 },
//               ]
//             }}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default App;


{/* <Lookup
            ref={lookup => this.lookup = lookup}
            selections={[
              {
                pillKey: "1",
                closable: true,
              },
              {
                pillKey: "2",
                closable: true,
              },
            ]}
            candidates={[
              <div style={{ padding: 10 }}>
                <FormCompound
                  onSubmit={(e) => { e.preventDefault(); this.lookup.__wrappedComponent.toggleOpen(); }}
                  fieldsets={[
                    {
                      legend: "Location",
                      formElementGroup: {
                        formElementRows: [
                          {
                            formElements: [
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
                    },
                  ]}
                />
              </div>,
            ]}
          /> */}
