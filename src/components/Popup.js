import React from 'react'


function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} alt="" />
					<ul >
					<li ><strong style={{color:'#D2691E'}}>Genre: </strong> {selected.Genre}</li>
					<li ><strong style={{color:'#D2691E'}}>BoxOffice: </strong>{selected.BoxOffice}</li>
					<li ><strong style={{color:'#D2691E'}}>Awards: </strong>{selected.Awards}</li>
					</ul>
									
				</div>
				<div>
				<a href={`https://www.imdb.com/title/${selected.imdbID}`} target="_blank" rel="noopener noreferrer" class="btn btn-primary"><button  className="close">View IMDB</button></a>
				</div>
				<br></br>
				<div>
				<button className="close"  onClick={closePopup}>Go Back To Search</button>
				</div>
				
			</div>
		</section>
	)
}

export default Popup
