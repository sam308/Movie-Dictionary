import React from 'react';

import {connect} from 'react-redux';
import MovieCard from './MovieCard';
import NoResults from './NoResults';

export class MoviesContainer extends React.Component {
    render() {

        const {movies} = this.props;
        let content = '';


        if(movies.Response === "True") {
            content = movies.Search.map((movie, index) => <MovieCard key={index} movie={movie} />);
        }

        else if(movies.Response === "False") {
            content = <NoResults />
        }

        else {
            content = '';
        }

        return (
            <div className="row">
                {content}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer);