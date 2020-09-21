import React from 'react'


function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} alt="" />
					<p>{selected.Plot} <br></br> {selected.Awards} <br></br>BoxOffice Income {selected.BoxOffice} </p>
					
					
								
				</div>
				<div>
				<button className="close"  onClick={closePopup}>Close</button>
				</div>
				<br></br>
				<div>
				<a href={`https://www.imdb.com/title/${selected.imdbID}`} target="_blank" rel="noopener noreferrer" class="btn btn-primary"><button  className="close">View IMDB</button></a>
				</div>
			</div>
		</section>
	)
}

export default Popup
