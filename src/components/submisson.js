import React, { Component } from 'react';
import Pagination from './pagination.componet';
class Submission extends Component {
    state = { 
      movies: [
        {
            "title": "The Shawshank Redemption",
            "rank": "1",
            "id": "tt0111161",
            "rating": 5
        },
        {
            "title": "The Godfather",
            "rank": "2",
            "id": "tt0068646",
            "rating": 5
        },
        {
            "title": "The Godfather: Part II",
            "rank": "3",
            "id": "tt0071562",
            "rating": 5
        },
        {
            "title": "Pulp Fiction",
            "rank": "4",
            "id": "tt0110912",
            "rating": 5
        },
        {
            "title": "The Good, the Bad and the Ugly",
            "rank": "5",
            "id": "tt0060196",
            "rating": 5
        },
        {
            "title": "The Dark Knight",
            "rank": "6",
            "id": "tt0468569",
            "rating": 5
        },
        {
            "title": "12 Angry Men",
            "rank": "7",
            "id": "tt0050083",
            "rating": 5
        },
        {
            "title": "Schindler's List",
            "rank": "8",
            "id": "tt0108052",
            "rating": 5
        },
        {
            "title": "The Lord of the Rings: The Return of the King",
            "rank": "9",
            "id": "tt0167260",
            "rating": 5
        },
        {
            "title": "Fight Club",
            "rank": "10",
            "id": "tt0137523",
            "rating": 5
        },
        {
            "title": "Star Wars: Episode V - The Empire Strikes Back",
            "rank": "11",
            "id": "tt0080684",
            "rating": 5
        },
        {
            "title": "The Lord of the Rings: The Fellowship of the Ring",
            "rank": "12",
            "id": "tt0120737",
            "rating": 5
        },
        {
            "title": "One Flew Over the Cuckoo's Nest",
            "rank": "13",
            "id": "tt0073486",
            "rating": 5
        },
        {
            "title": "Inception",
            "rank": "14",
            "id": "tt1375666",
            "rating": 5
        },
        {
            "title": "Goodfellas",
            "rank": "15",
            "id": "tt0099685",
            "rating": 5
        },
        {
            "title": "Star Wars",
            "rank": "16",
            "id": "tt0076759",
            "rating": 5
        },
        {
            "title": "Seven Samurai",
            "rank": "17",
            "id": "tt0047478",
            "rating": 5
        },
        {
            "title": "Forrest Gump",
            "rank": "18",
            "id": "tt0109830",
            "rating": 5
        },
        {
            "title": "The Matrix",
            "rank": "19",
            "id": "tt0133093",
            "rating": 5
        },
        {
            "title": "The Lord of the Rings: The Two Towers",
            "rank": "20",
            "id": "tt0167261",
            "rating": 5
        },
        {
            "title": "City of God",
            "rank": "21",
            "id": "tt0317248",
            "rating": 5
        },
        {
            "title": "Se7en",
            "rank": "22",
            "id": "tt0114369",
            "rating": 5
        },
        {
            "title": "The Silence of the Lambs",
            "rank": "23",
            "id": "tt0102926",
            "rating": 5
        },
        {
            "title": "Once Upon a Time in the West",
            "rank": "24",
            "id": "tt0064116",
            "rating": 5
        },
        {
            "title": "Casablanca",
            "rank": "25",
            "id": "tt0034583",
            "rating": 5
        },
        {
            "title": "The Usual Suspects",
            "rank": "26",
            "id": "tt0114814",
            "rating": 5
        },
        {
            "title": "Raiders of the Lost Ark",
            "rank": "27",
            "id": "tt0082971",
            "rating": 5
        },
        {
            "title": "Rear Window",
            "rank": "28",
            "id": "tt0047396",
            "rating": 5
        },
        {
            "title": "It's a Wonderful Life",
            "rank": "29",
            "id": "tt0038650",
            "rating": 5
        },
        {
            "title": "Psycho",
            "rank": "30",
            "id": "tt0054215",
            "rating": 5
        },
        {
            "title": "Léon: The Professional",
            "rank": "31",
            "id": "tt0110413",
            "rating": 5
        },
        {
            "title": "Sunset Blvd.",
            "rank": "32",
            "id": "tt0043014",
            "rating": 5
        },
        {
            "title": "American History X",
            "rank": "33",
            "id": "tt0120586",
            "rating": 5
        },
        {
            "title": "Apocalypse Now",
            "rank": "34",
            "id": "tt0078788",
            "rating": 5
        },
        {
            "title": "Terminator 2: Judgment Day",
            "rank": "35",
            "id": "tt0103064",
            "rating": 5
        },
        {
            "title": "Saving Private Ryan",
            "rank": "36",
            "id": "tt0120815",
            "rating": 5
        },
        {
            "title": "Memento",
            "rank": "37",
            "id": "tt0209144",
            "rating": 5
        },
        {
            "title": "City Lights",
            "rank": "38",
            "id": "tt0021749",
            "rating": 5
        },
        {
            "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
            "rank": "39",
            "id": "tt0057012",
            "rating": 5
        },
        {
            "title": "Alien",
            "rank": "40",
            "id": "tt0078748",
            "rating": 5
        }],
        activePage:1,
        pageCount : 5
     }
     handleChangePage = (page) =>{
        this.setState({...this.state, activePage:page});
    }
    render() { 
        const { movies, activePage, pageCount} = this.state;
        const start = (activePage-1)*pageCount;
       const updatedmovies = movies.slice(start, start+pageCount);
        return ( 
            <>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Rank</th>
      <th scope="col">Ranking</th>
    </tr>
  </thead>
  <tbody>
    {updatedmovies.map(movie => {
      return (
            <tr >
                <td>{movie.rank}</td>
                  <th scope="row">{movie.id}</th>
                  <td>{movie.title}</td>                 
                  <td>{movie.rating}</td>
                </tr>
      );
    })}
    

  </tbody>
</table>

        <Pagination
        total={movies.length}
        pageCount = {pageCount}
        activePage={activePage}
        onChangePage = {this.handleChangePage}
        />
            </>
         );
    }
}
 
export default Submission;