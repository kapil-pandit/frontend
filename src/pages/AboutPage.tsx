// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Left 8 Columns */}
        <div className="col-span-12 md:col-span-8 space-y-6">
          {/* Card 1 */}
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/60130/pexels-photo-60130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Placeholder"
              className="w-2/3 object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-gray-800">
                Manufacturing Unit
              </h2>
              <p className="text-gray-600 mt-2">
              ISRO Propulsion Complex (IPRC), Mahendragiri is equipped with
                the state-of-the-art facilities necessary for realising the
                cutting edge propulsion technology products for the Indian space
                programme. Formerly, IPRC was known as LPSC, Mahendragiri and
                taking cognizance of the future growth of the space program of
                our nation and the concomitant expansion at Mahendragiri, it was
                elevated as IPRC with effect from February 01, 2014. 
                {/* The
                activities carried out at IPRC, Mahendragiri are: assembly,
                integration and testing of earth storable propellant engines,
                cryogenic engines and stages for launch vehicles; high altitude
                testing of upper stage engines and spacecraft thrusters as well
                as testing of its sub systems; production and supply of
                cryogenic propellants for Indian cryogenic rocket programme,
                etc. A Semi-cryogenic Cold Flow Test facility (SCFT) has been
                established at IPRC, Mahendragiri for the development,
                qualification and acceptance testing of semicryogenic engine
                subsystems. IPRC is responsible for the supply of Storable
                Liquid Propellants for ISRO’s launch vehicles and satellite
                programmes. IPRC delivers quality products to meet the zero
                defect demand of ISRO space programme ensuring high standards of
                safety and reliability. It also carries out Research &
                Development (R&D) and Technology Development Programmes (TDP)
                towards continued improvement of its contribution to the Indian
                space programme. */}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
          <img
              src="https://images.pexels.com/photos/586040/pexels-photo-586040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Placeholder"
              className="w-2/3 object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-gray-800">
                Launching Area
              </h2>

              <p className="text-gray-600 mt-2">

                Starting with some basics about space transportation systems such as the thrust equation and some mission requirements, the paper explains the underlying physical and technical challenges every rocket engine design engineer faces at the beginning of a project. 
                {/* A brief overview about the main subsystems of a liquid rocket engine such as turbopumps and gas generators is followed by a more detailed description of the thrust chamber assembly, the injector head, the ignition system and the combustion chamber liner which includes the first part of the nozzle and finally the nozzle extension. The technological challenges of these components are presented which result from the severe operating conditions and their current design principles and production technologies. Finally, a series of new concepts and techniques for propellant injection, ignition, combustion chamber liners and nozzles are proposed. The major challenges of new materials and production technologies lay in the still missing detailed knowledge about the behaviour of these materials under operating conditions, material-related crack initiation and propagation laws and reliable life prediction tools. */}
              </p>
            </div>
          </div>
        </div>

        {/* Right 4 Columns */}
        <div className="col-span-12 md:col-span-4 flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/41005/rocket-launch-rocket-take-off-soyuz-41005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Vertical Image"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
