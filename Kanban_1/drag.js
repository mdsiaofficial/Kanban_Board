const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

draggables.forEach((task) => {

    task.addEventListener("dragstart", () => {
        task.classList.add("is-dragging");
    });

    task.addEventListener("dragend", () => {
        task.classList.remove("is-dragging");
    });
});


droppables.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        const bottomTask = insertAboveTask(zone, e.clientY);

        const curTask = document.querySelector(".is-dragging");

        if (!bottomTask) {
            zone.appendChild(curTask);
        } else {
            zone.insertBefore(curTask, bottomTask);
        }

    });
});


const insertAboveTask = (zone, mouseY) => {

    // Select all tasks in the zone that are not currently being dragged
    const tasks = zone.querySelectorAll(".task:not(.is-dragging)");

    // Initialize the closest task and its offset
    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    // Iterate over each task
    tasks.forEach((task) => {
        // Get the top position of the task
        const { top } = task.getBoundingClientRect();
        // Calculate the offset from the mouse position to the top of the task
        const offset = mouseY - top;

        // If the offset is less than 0 and greater than the current closest offset
        if (offset < 0 && offset > closestOffset) {
            // Update the closest offset and task
            closestOffset = offset;
            closestTask = task;
        }
    });

    // Return the closest task
    return closestTask;
};