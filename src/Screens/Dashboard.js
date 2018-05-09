import React from 'react';

class Dashboard extends React.Component {
  render(){

    return (
      <div style={styles.container}>

        <div style={styles.placeholder}>
          <div>Edit /src/components/Dashboard.js</div>
          <div>Build your Dashboard.</div>
        </div>

      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  placeholder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    color: 'black',
    textAlign: 'center',
    paddingBottom: '10em',
    background: 'white',
  }
}

export default Dashboard;