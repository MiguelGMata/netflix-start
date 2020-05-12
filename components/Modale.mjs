export default function Modale(props) {
    return `
    <div id="modale" aria-hidden="true" role="dialog" aria-modal="false" aria-labelledby="modaleTitle"> 
        <h1 class="modaleTitle">${props.original_title}</h1>
        <div id=modaleContainer">
            <h2 class="modaleVote">${props.vote_average}</h2>
            <h2 class="modaleDate">${props.release_date}</h2>
            <h2 class="modalEpisode">Nombre d'épisodes : ${props.number_of_episodes} Nombre de saisons : ${props.number_of_seasons}</h2>
        </div>
        <p class="modaleDescription">${props.overview}</p>
    </div>`;
}
