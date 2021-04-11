

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




})

.catch((error) => {
    console.error(error)
})

