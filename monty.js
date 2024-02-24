function montyHallSimulation(switchDoors, numTrials = 1000) {
    let winCount = 0;
    console.log("Running simulation with switchDoors = " + switchDoors + " and numTrials = " + numTrials)

    for (let i = 0; i < numTrials; i++) {
        // console log how many trials have been run
        console.log("Running trial " + i);
        // Randomly place the car behind one of the doors
        const carDoor = Math.floor(Math.random() * 3);

        // Contestant randomly picks a door
        let contestantDoor = Math.floor(Math.random() * 3);

        // console log the contestant door and and car door
        console.log("Contestant picked door " + contestantDoor + " and car is behind door " + carDoor);
       
        // Monty opens a door
        let montyDoor;
        do {
            // log do loop count
            console.log("Running open door loop");
            montyDoor = Math.floor(Math.random() * 3);
            // log monty door
            console.log("Monty opens door " + montyDoor);
        } while (montyDoor === carDoor || montyDoor === contestantDoor);
    

        // If the contestant decides to switch doors

        if (switchDoors) {
            let originalContestantDoor = contestantDoor;
            do {
                console.log("Running switch door loop ");
                contestantDoor = Math.floor(Math.random() * 3);
            } while (contestantDoor === montyDoor || contestantDoor === originalContestantDoor);
        }

        // If the contestant picked the car door, increment the win count
        if (contestantDoor === carDoor) {
            winCount++;
        }
    }

    return winCount / numTrials;
}

