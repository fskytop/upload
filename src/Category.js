import React from 'react';

class Category extends React.Component{

  constructor(props) {
    super(props);
    
    this.state = {
      topic: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.setNameFilter = props.setNameFilter;
  }
  
  handleClick(e) {
    e.preventDefault();
    const topic = e.target.getAttribute('data');
    document.getElementById("search-box").value = topic;
    this.setState({ topic: topic });
    this.setNameFilter(topic);
  }
  
  render(){
    return (
      <nav className="d-none d-lg-block col-lg-2 float-lg-left pl-3 pl-md-0 pr-3 pr-md-5 pt-3 pt-md-2 pb-md-6">
        <h4 className="text-mono mb-3 text-normal">Category</h4>
        <ul className="list-style-none mb-4">
          <li>
            <span className="muted-link filter-item py-2 mb-0"
                  data-ga-click="Category, text:AI" 
                  onClick={this.handleClick} 
                  data="AI">AI</span>
          </li>
          <li>
            <span className="muted-link filter-item py-2 mb-0"
                  data-ga-click="Category, text:COVID-19"
               onClick={this.handleClick}
               data="COVID-19">COVID-19</span>
          </li>
          <li>
            <span className="muted-link filter-item py-2 mb-0"
                  data-ga-click="Category, text:Tool"
               onClick={this.handleClick}
               data="Tool">Tool</span>
          </li>
          <li>
            <span className="muted-link filter-item py-2 mb-0"
                  data-ga-click="Category, text:Developer"
               onClick={this.handleClick}
               data="Developer">Developer</span>
          </li>
          <li>
            <span className="muted-link filter-item py-2 mb-0"
                  data-ga-click="Category, text:Practice"
               onClick={this.handleClick}
               data="Practice">Practice</span>
          </li>
          <li>
            <span className="muted-link filter-item py-2 mb-0"
                  data-ga-click="Category, text:Design"
               onClick={this.handleClick}
               data="Design">Design</span>
          </li>
          <li>
            <span className="muted-link filter-item py-2 mb-0"
                  data-ga-click="Category, text:DevOps"
               onClick={this.handleClick}
               data="DevOps">DevOps</span>
          </li>
          <li>
            <span className="muted-link filter-item py-2 mb-0"
                  data-ga-click="Category, text:Security"
               onClick={this.handleClick}
               data="Security">Security</span>
          </li>
          <li>
            <span className="muted-link filter-item py-2 mb-0"
                  data-ga-click="Category, text:Language"
               onClick={this.handleClick}
               data="Language">Language</span>
          </li>
          <li>
            <span className="muted-link filter-item py-2 mb-0"
                  data-ga-click="Category, text:System"
               onClick={this.handleClick}
               data="System">System</span>
          </li>
          <li>
            <span className="muted-link filter-item py-2 mb-0"
                  data-ga-click="Category, text:Framework"
               onClick={this.handleClick}
               data="Framework">Framework</span>
          </li>
          
        </ul>
      </nav>
    )
  }
}

export default Category;
