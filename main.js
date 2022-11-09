window.addEventListener('load', () => {
    const form = document.querySelector("#new-goal");
    const input = document.querySelector("#new-goal-input");
    const element = document.querySelector("#goals");
    const achieved_element = document.querySelector("#achieved-goals");


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const goal = input.value;

        if(!goal) {
            alert("Fill in the goal, please!");
            return;
        }

        const goal_element = document.createElement("div");
        goal_element.classList.add("goal");

        const goal_content_element = document.createElement("div");
        goal_content_element.classList.add("content");

        goal_element.appendChild(goal_content_element);

        const goal_input_element = document.createElement("input");
        goal_input_element.classList.add("text");
        goal_input_element.type = "text";
        goal_input_element.value = goal;
        goal_input_element.setAttribute("readonly","readonly");
        goal_content_element.appendChild(goal_input_element);

        const goal_actions_element = document.createElement("div");
        goal_actions_element.classList.add("actions");

        const goal_edit_element = document.createElement("button");
        goal_edit_element.classList.add("edit");
        goal_edit_element.innerHTML = "Edit";

        const goal_delete_element = document.createElement("button");
        goal_delete_element.classList.add("delete");
        goal_delete_element.innerHTML = "Delete";

        const goal_complete_element = document.createElement("button");
        goal_complete_element.classList.add("complete");
        goal_complete_element.innerHTML = "Completed!";

    
        const confettiFunction = () => { //Show confetti when the user completes a task
            document.querySelector(".container").style.display = "inline"; 
        }

        goal_edit_element.addEventListener('click', () => {
            if(goal_edit_element.innerText.toLowerCase() == "edit") {
                goal_input_element.removeAttribute("readonly");
                goal_input_element.focus(); //focus it,automatically cursor
                goal_edit_element.innerText = "Save";
            } else {
                goal_input_element.setAttribute("readonly" , "readonly");
                goal_edit_element.innerText = "Edit";
            }
        })

        goal_delete_element.addEventListener('click', () => {
            element.removeChild(goal_element);
        })

        const achieved_goal_element = document.createElement("div");
        achieved_goal_element.classList.add("achieved-goal");

        const achieved_goal_content_element = document.createElement("div");
        achieved_goal_content_element.classList.add("content");

        const mygoal = goal.value;

        const achieved_goal_input_element = document.createElement("input");
        achieved_goal_input_element.classList.add("text");
        achieved_goal_input_element.value = mygoal;
        achieved_goal_input_element.type = "text";
        achieved_goal_input_element.setAttribute("readonly","readonly");
        achieved_goal_content_element.appendChild(achieved_goal_input_element);

        const achieved_goal_actions_element = document.createElement("div");
        achieved_goal_actions_element.classList.add("achieved-actions");

        const achieved_goal_redo_element = document.createElement("button");
        achieved_goal_redo_element.classList.add("redo");
        achieved_goal_redo_element.innerHTML = "Re-Add to the List";


        goal_complete_element.addEventListener('click', () => {
            confettiFunction();

            //show Confetti celebration for 3 seconds
            //then remove the goal and add it to the achieved goals list
            setTimeout(() => {
                document.querySelector(".container").style.display = "none";
                element.removeChild(goal_element);
                achieved_goal_element.appendChild(goal_content_element);
                achieved_goal_actions_element.appendChild(achieved_goal_redo_element);
                achieved_goal_element.appendChild(achieved_goal_actions_element);
                achieved_element.appendChild(achieved_goal_element);
            }, 3000);
        })

        //to add the goal back to the goal list
        achieved_goal_redo_element.addEventListener('click', () => {
            achieved_element.removeChild(achieved_goal_element);
            goal_content_element.appendChild(goal_input_element);
            goal_element.appendChild(goal_content_element);
            goal_actions_element.appendChild(goal_edit_element);
            goal_actions_element.appendChild(goal_delete_element);
            goal_actions_element.appendChild(goal_complete_element);
            goal_element.appendChild(goal_actions_element);
            element.appendChild(goal_element);
        })

        goal_actions_element.appendChild(goal_edit_element);
        goal_actions_element.appendChild(goal_delete_element);
        goal_actions_element.appendChild(goal_complete_element);

        goal_element.appendChild(goal_actions_element);

        element.appendChild(goal_element);

        input.value= ""; 
    })
})