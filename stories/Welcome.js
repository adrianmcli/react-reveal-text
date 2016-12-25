import React from 'react';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },
};

export default class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if(this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div style={styles.main}>
        <h1>Welcome to STORYBOOK</h1>
        <p>
          This is a UI component dev environment for your React Component.
        </p>
        <p>
          A story is a single state of one or more UI components. You can have as many stories as you want; each of them are like a visual test case.
        </p>
        <h2>Your Component</h2>
        <p>
          A <code style={styles.code}>Dev</code> story has been created to render your component inside <code style={styles.code}>src/index.js</code>.
        </p>
        <p>
          Check it out in the sidebar to the left.
        </p>
        <h2>A Simple Example</h2>
        <p>
          See these sample <a style={styles.link} href='#' onClick={this.showApp.bind(this)}>stories</a> for a component called <code style={styles.code}>Button</code>.
        </p>
        <p>
          You can also edit those components and see changes right away.
          <br />
          (Try editing the <code style={styles.code}>Button</code> component
          located at <code style={styles.code}>stories/Button.js</code>.)
        </p>
      </div>
    );
  }
}
