import React, {Component} from 'react';

import { connect } from 'react-redux';

import { searchMovie, fetchMovies, setLoading } from '../../actions/searchActions';

export class SearchForm extends Component {

    onChange = e => {
        this.props.searchMovie(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search" /> Search for any Movie / TV Series
                    </h1>
                    <form id="searchForm" onSubmit={this.onSubmit}>
                        <input type="text" className="form-control" name="searchText" placeholder="Name a Movie or TV Series ..." onChange={this.onChange} />
                        <button type="submit" className="btn btn-warning btn-bg mt-3">
                            Go
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie, fetchMovies, setLoading})(SearchForm);