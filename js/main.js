$(document).ready(() => {
	$('#searchForm').on('submit', (e) => {
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	});
});

function getMovies(searchText){
	axios.get('http://www.omdbapi.com?t='+searchText+'&?i=tt3896198&apikey=41f46d7d')
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.log(err);
	});
}