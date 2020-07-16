import React from 'react';
import { connect } from 'react-redux'
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import { setUploadFile } from './_redux/uploadFile/uploadFile.actions'
import UploadProgress from './components/UploadProgress/UploadProgress'

const MainColumn = styled.div.attrs({
  className: 'col-lg-9'
})`
  max-width: 1150px;
  margin: 0 auto;
  margin-top: 20px;
`;

const defaultHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleAttachFIle = this.handleAttachFIle.bind(this);
  }

  handleAttachFIle(e) {
    this.props.setUploadFile(e.target.files)
    e.target.value = '' // to clear the current file
  }

  render() {
    return (
      <Router history={this.props.history || defaultHistory}>
        <MainColumn>
          <input type="file" multiple onChange={this.handleAttachFIle} />
          <UploadProgress />
        </MainColumn>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUploadFile: files => dispatch(setUploadFile(files)),
})

export default connect(null, mapDispatchToProps)(App)