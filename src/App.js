import React, { Component } from 'react';
import './App.css';
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';

class App extends Component {
  getOrgData = () => {
    return {
      name: "Maduramani M (Late) and Ezhilarasi M",
      description: "Head of the Family",
      children: [
        {
          name: "Subramani M and Kavitha S",
          description: "First son and daugther-in-law of Maduraimani (Late) & Ezhilarasi",
          children: [
            {
              name: "Harish Maduraimani",
              description: "First son of Subramani & Kavitha"
            },
            {
              name: "Ezhil Vimashree",
              description: "Cute daughter of Subramani & Kavitha"
            }
          ]
        },
        {
          name: "Veeramuthu M and Dharani V",
          description: "Second son and daugther-in-law of Maduraimani (Late) & Ezhilarasi",
          children: [
            {
              name: "Vijaya Danshiya V",
              description: "Cute daughter of Veeramuthu & Dharani"
            }
          ]
        },
        {
          name: "Vijayakumar M and Shyamala Devi V",
          description: "Third son and daugther-in-law of Maduraimani (Late) & Ezhilarasi",
          children: [
            {
              name: "Prasanna Maduraimani V",
              description: "First son of Vijayakumar & Shyamala Devi"
            },
            {
              name: "Pratheesh Pushparaj V",
              description: "Second son of Vijayakumar & Shyamala Devi"
            }
          ]
        },
        {
          name: "Dinesh M and Devi D",
          description: "Last son and daugther-in-law of Maduraimani (Late) & Ezhilarasi"
        },
      ]
    }
  }
  render() {
    const initecOrg = this.getOrgData();
    const myNodeComponent = ({node}) => {
      return (
        <div className='initechNode' onClick={() => alert(node.description)}>{ node.name }</div>
      )
    }
    return (
      <div className="App" id="initechOrgChart">
        <OrgChart tree={initecOrg} NodeComponent={myNodeComponent} />
      </div>
    );
  }
}

export default App;
