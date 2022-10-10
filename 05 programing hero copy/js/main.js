const milestonesData = JSON.parse(data).data;

// Load couse milestone data
function loadMilestones(){
    const milestone = document.querySelector('.milestones');
    milestone.innerHTML = milestonesData.join(" ");
}

// Call the milistone function
loadMilestones();