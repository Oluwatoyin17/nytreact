import React from "react";

const Home = props => (
<div className= "home">
    <div className="container"/>

    {/*  Jumbotron for Title  */}
    <div className="jumbotron" style="background-color: #20315A ; color: white;">
      <h1 className="text-center">
        <strong>
          <i className="fa fa-newspaper-o"></i> New York Times Search</strong>
      </h1>
    </div>

    {/* Row for Searching New York Times   */}
    <div className="row">
      <div className="col-sm-12"/>
        <br/>
         {/* First panel is for handling the search parameters   */}
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa  fa-list-alt"></i> Search Parameters</strong>
            </h3>
          </div>
          <div className="panel-body">

            {/* Here we create an HTML Form for handling the inputs */}
            <form role="form">

              {/* Here we create the text box for capturing the search term */}
              <div className="form-group">
                <label for="search">Search Term:</label>
                <input type="text" className="form-control" id="search-term"/>
              </div>

               {/* Here we capture the Start Year Parameter */}
              <div className="form-group">
                <label for="start-year">Start Year (Optional):</label>
                <input type="text" className="form-control" id="start-year"/>
              </div>

               {/* Here we capture the End Year Parameter  */}
              <div className="form-group">
                <label for="end-year">End Year (Optional):</label>
                <input type="text" className="form-control" id="end-year"/>
              </div>

               {/* Here we have our final submit button  */}
              <button 
              type="submit" 
              onClick = {props.handleFormSubmit}
              className="btn btn-default" 

             > Search
             </button>
            </form>
          </div>
        </div>
      </div>
    </div>

     /* This row will handle all of the retrieved articles  */
    <div className="row">
      <div className="col-sm-12">
        <br/>

         {/* This panel will initially be made up of a panel and wells for each of the articles retrieved  */}
        <div className="panel panel-primary">

         {/* Panel Heading for the retrieved articles box  */}
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-table"></i> Top Articles</strong>
            </h3>
          </div>

           {/* This main panel will hold each of the resulting articles  */}
          <div className="panel-body" id="well-section">
          </div>
        </div>
      </div>
    </div>
</div>
);
export default SearchForm;