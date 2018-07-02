import React from "react";

const Search = props =>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
             
            </h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="topic">Article Topic</label>
                <input onChange={props.handleTopicChange} type="text" className="form-control" id="topic" aria-describedby="emailHelp" placeholder="Technology"/>
              </div>
              <div className="form-group">
                <label htmlFor="start-year">Start Date</label>
                <input onChange={props.handleStartYearChange} type="text" className="form-control" id="start-year" placeholder="2017" />
              </div>
              <div className="form-group">
                <label htmlFor="end-year">End Date</label>
                <input onChange={props.handleEndYearChange} type="text" className="form-control" id="end-year" placeholder="2018"/>
              </div>
              <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <br/><br/>

    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-check-square-o" aria-hidden="true"></i> Results
              </strong>
            </h3>
          </div>
          <div className="panel-body">
            {props.renderArticles()}
          </div>
        </div>
      </div>
    </div>
    <br/><br/>
  </div>


export default Search;
