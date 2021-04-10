var playerSystems = [];
playerSystems[0] = {};
    playerSystems.name = "Sol";
    playerSystems.distance = 0;
    playerSystems.planets = [];
        playerSystems.planets[0] = {};
            playerSystems.planets[0].name = "Mercury";
            playerSystems.planets[0].terraform = 0; //Terraform is the Colony Limit; T3 = 3 colonies cap.
            playerSystems.planets[0].mineral = math2d.vector3(180, 190, 200); //Be able to assign randomRGB to this object later
            playerSystems.planets[0].colonies = 0;

function randomRGB(){
    return rgb = math2d.vector3(
        math2d.intRand(30,200),
        math2d.intRand(30,200),
        math2d.intRand(30,200)
    );
}

/*
Planets rgb
Mercury 180, 190, 200
Venus 215,200,186
Earth 60, 78, 142
Mars 138, 80, 56
Jupiter 220, 194, 174
Uranus 200, 242, 242
Neptune 80, 118, 240
*/
