function montyHallSimulation(switchDoors, numTrials = 5) {
    let winCount = 0;

    for (let i = 0; i < numTrials; i++) {
        // Randomly place the car behind one of the doors
        const carDoor = Math.floor(Math.random() * 3);

        // Contestant randomly picks a door
        let contestantDoor = Math.floor(Math.random() * 3);

        // Monty opens a door
        let montyDoor;
        do {
            montyDoor = Math.floor(Math.random() * 3);
        } while (montyDoor === carDoor || montyDoor === contestantDoor);

        // If the contestant decides to switch doors
        if (switchDoors) {
            do {
                contestantDoor = Math.floor(Math.random() * 3);
            } while (contestantDoor === montyDoor || contestantDoor === contestantDoor);
        }

        // If the contestant picked the car door, increment the win count
        if (contestantDoor === carDoor) {
            winCount++;
        }
    }

    return winCount / numTrials;
}

