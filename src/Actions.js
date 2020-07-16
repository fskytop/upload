import React from 'react';

class Actions extends React.Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  getImageName(){
    return this.props.sourceUrl.split('/').pop();
  }
  
  getImageUrl(){
    const path = 'https://resource.fsky.top/sky/1@500/';
    return path + this.getImageName();
  }

  toDataURL(url) {
    return fetch(url).then((response) => {
      return response.blob();
    }).then(blob => {
      return URL.createObjectURL(blob);
    });
  }

  async download(imgUrl, name) {
    const a = document.createElement("a");
    a.href = await this.toDataURL(imgUrl);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  handleClick(e) {
    e.preventDefault();
    
    const type = e.target.getAttribute('data-type');
    if (type === 'markdown'){
      window.prompt("Copy to clipboard: Ctrl+C, Enter", `![Support from fsky.top](${this.getImageUrl()})`);
    } else if (type === 'download') {
      this.download(this.getImageUrl(), this.getImageName()).then(r => {});
    } else {
    }
  }
  
  render(){
    return (
      <ul className="pagehead-actions flex-shrink-0 d-md-inline">

        <li>
          <div className="d-flex js-social-form js-social-container">
              <span className="btn btn-sm btn-with-count js-toggler-target"
                    data-ga-click={"Actions, action:markdown" + this.getImageName()}
                    onClick={this.handleClick}
                    data-type="markdown">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z">
                </path>
              </svg>
            </span>
            <span className="social-count js-social-count" href="/primer/octicons/watchers"
                  aria-label="154 users are watching this repository"
                  data-ga-click={"Actions, action:markdown" + this.getImageName()}
                  onClick={this.handleClick}
                  data-type="markdown">
                Markdown
            </span>
          </div>
        </li>

        <li>
          <div className="d-flex js-social-form js-social-container">
            <span type="submit" className="btn btn-sm btn-with-count js-toggler-target" 
                  aria-label="Unstar this repository" title="Star primer/octicons"
                  data-ga-click={"Actions, action:download" + this.getImageName()}
                  onClick={this.handleClick}
                  data-type="download">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path></svg>
            </span>
            <span className="social-count js-social-count"
                  aria-label="154 users are watching this repository"
                  data-ga-click={"Actions, action:download" + this.getImageName()}
                  onClick={this.handleClick}
                  data-type="download">
                Download
            </span>
          </div>
        </li>
        
      </ul>
    )
  }
}

export default Actions;
