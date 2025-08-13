/* ===== Page Navigation ===== */
const pages = {
    homeBtn: "homePage",
    performanceBtn: "performancePage",
    bodyBtn: "bodyPage",
    foodBtn: "foodPage",
    activityBtn: "activityPage",
    profileBtn: "profilePage"
};

Object.keys(pages).forEach(btnId => {
    const btn = document.getElementById(btnId);
    if(btn){
        btn.addEventListener("click", () => {
            Object.values(pages).forEach(page => {
                const el = document.getElementById(page);
                if(el) el.classList.remove("active");
            });
            const activePage = document.getElementById(pages[btnId]);
            if(activePage) activePage.classList.add("active");
        });
    }
});

const homePage = document.getElementById("homePage");
if(homePage) homePage.classList.add("active");


/* ===== Charts ===== */
function createDoughnutChart(canvasId, data, colors){
    return new Chart(document.getElementById(canvasId), {
        type: 'doughnut',
        data: {
            labels: ['Protein','Carbs','Fat'],
            datasets: [{
                data: data,
                backgroundColor: colors
            }]
        }
    });
}

const caloriesDoughnut = createDoughnutChart("caloriesDoughnut",[120,250,50],['#ff6384','#36a2eb','#ffcd56']);
const foodDoughnut = createDoughnutChart("foodDoughnut",[120,250,50],['#ff6384','#36a2eb','#ffcd56']);

const vo2Graph = new Chart(document.getElementById("vo2Graph"), {
    type: 'line',
    data: {
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
        datasets:[{
            label:'VO2 Max',
            data:[60,61,62,63,63,64,63,63],
            borderColor:'#36a2eb',
            fill:false
        }]
    }
});

const weeklyKmGraph = new Chart(document.getElementById("weeklyKmGraph"), {
    type: 'bar',
    data: {
        labels:['Week 1','Week 2','Week 3','Week 4'],
        datasets:[{
            label:'KM',
            data:[35,40,38,42],
            backgroundColor:'#36a2eb'
        }]
    }
});

const loadGraph = new Chart(document.getElementById("loadGraph"), {
    type: 'bar',
    data: {
        labels:['Week 1','Week 2','Week 3','Week 4'],
        datasets:[{
            label:'Load Points',
            data:[120,130,125,140],
            backgroundColor:'#ff6384'
        }]
    }
});


/* ===== Body Tracking ===== */
const bodyInputs = ['biceps','chest','waist','hips','calves'];
bodyInputs.forEach(id => {
    const input = document.getElementById(id+'Input');
    if(input){
        input.addEventListener("input", updateBodyFigure);
    }
});

function updateBodyFigure(){
    // Update mock body score
    const score = Math.floor(Math.random()*20)+80;
    const bodyScoreEl = document.getElementById("bodyScore");
    if(bodyScoreEl) bodyScoreEl.innerText = score;
}


/* ===== Activity Feed ===== */
const activityFeed = document.getElementById("activityFeed");
if(activityFeed){
    const mockActivities = [
        {type:'run', name:'Jane', distance:'10 km', pace:'5:00', hr:'140 bpm'},
        {type:'ride', name:'Jane', distance:'20 km', pace:'30 km/h', hr:'130 bpm'},
        {type:'swim', name:'Jane', distance:'1 km', pace:'2:00/100m', hr:'150 bpm'}
    ];

    mockActivities.forEach(activity => {
        const postDiv = document.createElement("div");
        postDiv.className = "activity-post";
        postDiv.innerHTML = `
            <strong>${activity.name}</strong> (${activity.type})<br>
            Distance: ${activity.distance}<br>
            Pace: ${activity.pace}<br>
            HR: ${activity.hr}
        `;
        activityFeed.appendChild(postDiv);
    });
}
