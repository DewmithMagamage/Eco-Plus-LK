let currentPrompt = 1;        // track the running prompt number

// create a function to move to the next prompt
function nextPrompt(next) {
    // checking if the reqired input in the current prompt is filled
    const currentInput = document.querySelector(`#prompt-${currentPrompt} input:required`);
    if (currentInput && !currentInput.value) {
        alert('This field is required.');
        return;
    }
    // hide current prompt and prompt next question
    document.getElementById(`prompt-${currentPrompt}`).classList.remove('active');
    document.getElementById(`prompt-${next}`).classList.add('active');
    currentPrompt = next;       // update the current prompt number
    updateProgress();        // update progress bar
}

// create a function to skip to the next prompt
function skipPrompt(next) {
    // hide the current prompt and show the next prompt
    document.getElementById(`prompt-${currentPrompt}`).classList.remove('active');
    document.getElementById(`prompt-${next}`).classList.add('active');
    currentPrompt = next;     // update the number of the current prompt 
    updateProgress();    // update progress bar
}

// create a function to go back to previous question
function prevPrompt(prev) {
    //hide current prompt and show the previous prompt
    document.getElementById(`prompt-${currentPrompt}`).classList.remove('active');
    document.getElementById(`prompt-${prev}`).classList.add('active');
    currentPrompt = prev;    // update the current prompt number
    updateProgress();      //update the progress bar
}

// create a function to complete the profile and display output
function completeProfile() {
    //hide the prompt container
    document.querySelector('.prompt-container').style.display = 'none';
    //hide the progress bar
    document.querySelector('.progress-bar').style.display = 'none';

    //get user input as values from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const volunteerArea = document.getElementById('volunteer-area').value;
    const volunteerHours = document.getElementById('volunteer-hours').value;
    const volunteerExperience = document.getElementById('volunteer-experience').value;
    const volunteerSkills = document.getElementById('volunteer-skills').value;
    const education = document.getElementById('education').value;
    const professionalExperience = document.getElementById('professional-experience').value;
    const hobbies = document.getElementById('hobbies').value;
    const environmentalConcerns = document.getElementById('environmental-concerns').value;
    const contactMethod = document.getElementById('contact-method').value;

    //set the reqired fields
    if (!name || !age || !gender || !volunteerArea || !volunteerHours || !volunteerExperience || !volunteerSkills || !education || !professionalExperience || !hobbies || !environmentalConcerns || !contactMethod) {
        alert('Please complete all required fields.');
        return;
    }

    // display user inputs in the profile output section
    document.getElementById('output-name').textContent = `Name: ${name}`;
    document.getElementById('output-age').textContent = `Age: ${age}`;
    document.getElementById('output-gender').textContent = `Gender: ${gender}`;
    document.getElementById('output-volunteer-area').textContent = `Preferred Volunteering Area: ${volunteerArea}`;
    document.getElementById('output-volunteer-hours').textContent = `Availability: ${volunteerHours} hours/week`;
    document.getElementById('output-volunteer-experience').textContent = `Previous Experience: ${volunteerExperience}`;
    document.getElementById('output-volunteer-skills').textContent = `Skills and Interests: ${volunteerSkills}`;
    document.getElementById('output-education').textContent = `Education Level: ${education}`;
    document.getElementById('output-professional-experience').textContent = `Professional Experience: ${professionalExperience}`;
    document.getElementById('output-hobbies').textContent = `Hobbies: ${hobbies}`;
    document.getElementById('output-environmental-concerns').textContent = `Environmental Concerns: ${environmentalConcerns}`;
    document.getElementById('output-contact-method').textContent = `E-mail: ${contactMethod}`;

    //show the profile outpurt section
    document.querySelector('.profile-output').classList.add('active');
    updateProgress(true);    //update the progress bar to complete
}

//function to update the progress bar
function updateProgress(complete = false) {
    const progressBar = document.querySelector('.progress');
    //calculate the progress percentage based on the current prompt
    const progressPercentage = complete ? 100 : (currentPrompt - 1) * (100 / 12); // Adjusted for 12 prompts
    progressBar.style.width = `${progressPercentage}%`;    // width of progress bar
    document.querySelector('.progress-percentage').textContent = `${Math.round(progressPercentage)}%`;  //display the progress percentage
}

// Initialize and show the first prompt
document.getElementById(`prompt-1`).classList.add('active');
