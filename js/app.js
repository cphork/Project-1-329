

///////////////////////////////////
///// GET DATA FROM GOOGLE SHEETS
//////////////////////////////////

$.ajax("https://spreadsheets.google.com/feeds/list/1lLER4scBm67_Kh6aY1WIif3ORhnKmZhTgfwNDJht_K4/1/public/full?alt=json")


/////// .then for when the data arrives/////

.then((data) => {

    console.log(data)


    ///////// Map over the data////////

    const projects = data.feed.entry.map((item) => {
        return {
            description: item.gsx$description.$t,
            giturl: item.gsx$giturl.$t,
            image: item.gsx$image.$t,
            liveURL: item.gsx$liveurl.$t,
            project: item.gsx$project.$t
        }

    })
    console.log(projects)



//////////////////////////////////////////////////
//////  JQUERY TO RENDER YOUR PROJECTS BELOW//////
/////////////////////////////////////////////////

const $portfolio = $('#portfolio')
console.log($portfolio)

//////Projects are from the Google Sheet project is EACH project that will loop to create the card , etc/////////
    projects.forEach((project, index) => {
        console.log(portfolio)

        const $portCard = $(`
            <div class="card">
            <img class="card-img-top" src="${project.image}" alt="project.image">   
            <a href="${project.liveURL}"button type="button" class="btn btn-success btn-sm">More</a>
            </div>
        </div>`)
        $portfolio.append($portCard)

    })

})









