import React, {Component} from "react";
import Saved from "./Saved";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import API from "../utils"

class Home extends Component {

    state = {
        topic: "",
        start: "",
        end: "",
        article: [],
        saved: []
    };

    componentDidMount(){
        this.getSavedArticles();
    }
    getArticles = query => {
        API.searchArticles(this.state.topic, this.state.start, this.state.end)
            .then(res => this.setState({article: res.data}))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const topic = event.target.topic;
        this.setState({[topic]:value});
    };
    handleStartInputChange = event => {
        const value = event.target.value;
        const start = event.target.start;
        this.setState({[start]: value});
    };
    handleEndInputChange = event => {
        const value = event.target.value;
        const end = event.target.end;
        thos.setState({[end]:value});
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getArticles(this.state.searchArticles);
    }
    handleSave = id => {
        const findById = this.state.article.find((el) => el._id === id);
        const newSave = {title: findById.headline.main, date:findById.pub_date, url: findById.web_url};
        API.saveArticle(newSave)
            .then(this.getSaveArticle());
    }
    getSavedArticle = () => {
        API.getArticle()
            .then((res) => {
                this.setState({ saves : res.data});
            });
    }
    handleDelete = id => {
        API.deleteArticle(id)
            .then(this.getSaveArticle());
    }

    render(){
        return (
            <div className = "main-container">
                <SearchForm
                    handleInputChange = {this.handleIputChange}
                    handleStartInputChange = {this.handleStartInputChange}
                    handleEndInputChange = {this.handleEndInputChange}
                    handleFormSubmit = {this.handleFormSubmit}
                    renderArticles = {() => {

                        return this.state.articles.map(article => (
                          <SearchResults
                            _id={article._id}
                            key={article._id}
                            title={article.headline.main}
                            date={article.pub_date}
                            url={article.web_url}
                            handleSaveButton={this.handleSaveButton}
                            getSavedArticles={this.getSavedArticles}
                          />
                    
                        ));
                    
                      }
                    }
                />
                <Saved
                     renderSaved = {() => {
                        return this.state.saved.map(save => (
                          <Saved
                            _id={save._id}
                            key={save._id}
                            title={save.title}
                            date={save.date}
                            url={save.url}
                            handleDeleteButton={this.handleDeleteButton}
                            getSavedArticles={this.getSavedArticles}
                          />
                        ));
                      }
                    }
                />
            </div>
        )
    }
}