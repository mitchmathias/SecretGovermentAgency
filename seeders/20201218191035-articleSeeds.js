"use strict";

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("Articles", [
      {
        title: "Snowden confirms no aliens",
        body:
          "PSA for all the Area 51 stormers, chemtrail believers and climate change deniers: Edward Snowden has searched the depths of the US intelligence networks and can report the conspiracy theories are not true. As a former employee of the CIA and contractor for the National Security Agency, Snowden had access to some of the nations most closely held secrets. And, like any curious mind with access to the CIAs version of Google might do, he went in search of answers to some of societys most pressing questions. As it turns out, the US government is not aware of any intelligent, extraterrestrial life, he says.",
        clearance: 1,
        position: true
      },
      {
        title: "New Coke",
        body:
          "A theory claims that The Coca-Cola Company intentionally changed to an inferior formula with New Coke, with the intent either of driving up demand for the original product or permitting the reintroduction of the original with a new formula using cheaper ingredients. Coca-Cola president Donald Keough rebutted this charge: The truth is, were not that dumb, and were not that smart",
        clearance: 1,
        position: true
      },
      {
        title: "Flat Earth",
        body:
          "Flat Earth theory first emerged in 19th-century England, despite the Earths spherical nature having been known since at least the time of Pythagoras. It has in recent years been promoted by American software consultant Mark Sargent through the use of YouTube videos. Flat-earther conspiracy theorists hold that planet Earth is not a sphere, and that evidence has been faked or suppressed to hide the fact that is instead a disc, or a single infinite plane. The conspiracy often implicates NASA. Other claims include that GPS devices are rigged to make aircraft pilots wrongly believe they are flying around a globe.",
        clearance: 2,
        position: true
      },
      {
        title: "New England Patriots",
        body:
          "The New England Patriots have also been involved in numerous conspiracy theories. During their AFC Championship 24–20 victory over the Jacksonville Jaguars, several conspiracy theories spread stating that the referees helped the Patriots advance to Super Bowl LII. However, sports analyst Stephen A. Smith stated the Jaguars were not robbed, but that they had no one to blame but themselves for the loss. There were also conspiracy theories regarding the Super Bowl LI matchup between the Patriots and the Atlanta Falcons stating that the game was rigged while others said the Falcons made questionable play-calls at the end of the game that resulted in them blowing a 28–3 lead",
        clearance: 2,
        position: true
      },
      {
        title: "Illuminati",
        body:
          "Conspiracy theories concerning the Illuminati, a short-lived 18th-century Enlightenment-era secret society, appear to have originated in the late 19th century, when some conservatives in Europe came to believe that the group had been responsible for the French Revolution of 1789–1799. Hoaxes about the Illuminati were later spread in the 1960s by a group of American practical jokers known as the Discordians, who, for example, wrote a series of fake letters about the Illuminati to Playboy. Other theorists contend that a variety of historical events were orchestrated by the Illuminati, from the French Revolution, the Battle of Waterloo and the assassination of U.S. President John F. Kennedy, to an alleged communist plot to hasten the New World Order by infiltrating the Hollywood film industry",
        clearance: 3,
        position: true
      },
      {
        title: "Alien Contact",
        body:
          "Multiple reports of dead cattle found with absent body parts and seemingly drained of blood have emerged worldwide since at least the 1960s. This phenomenon has spawned theories variously concerning aliens and secret government or military experiments. Prominent among such theorists is Linda Moulton Howe, author of Alien Harvest-1989. Many conspiracy theories have drawn inspiration from the writings of ancient astronaut proponent Zecharia Sitchin, who declared that the Anunnaki from Sumerian mythology were actually a race of extraterrestrial beings who came to Earth around 500,000 years ago in order to mine gold. In his 1994 book Humanitys Extraterrestrial Origins: ET Influences on Humankinds Biological and Cultural Evolution, Arthur Horn proposed that the Anunnaki were a race of blood-drinking, shape-shifting alien reptiles. This theory was adapted and elaborated on by British conspiracy theorist David Icke, who maintains that the Bush family, Margaret Thatcher, Bob Hope, and the British Royal Family, among others, are or were such creatures, or have been under their control.",
        clearance: 3,
        position: true
      },
      {
        title: "Denver Airport",
        body:
          "Some theorists believe that Denver International Airport stands above an underground city which serves as a headquarters of the New World Order. Theorists cite the airports unusually large size, its distance from Denver city center, Masonic and alleged Satanic symbols, as well as a set of murals which include depictions of war and death",
        clearance: 1,
        position: false
      },
      {
        title: "New World Order",
        body:
          "The New World Order theory states that a group of international elites controls governments, industry, and media organizations, with the goal of establishing global hegemony. They are alleged to be implicated in most of the major wars of the last two centuries, to carry out secretly staged events, and to deliberately manipulate economies. Organizations alleged to be part of the plot include the Federal Reserve System, the Council on Foreign Relations, Trilateral Commission, the Bilderberg Group, the European Union, the United Nations, the World Bank, the International Monetary Fund, Bohemian Grove, Le Cercle and Yale University society Skull and Bones. The Discordian hoax has resulted in one of the worlds foremost conspiracy theories, which claims that the Illuminati are secretly promoting the posited New World Order. Theorists believe that a wide range of musicians, including Beyoncé and Whitney Houston, have been associated with the group. Prominent theorists include Mark Dice and David Icke.",
        clearance: 1,
        position: false
      },
      {
        title: "New World Order",
        body:
          "The New World Order theory states that a group of international elites controls governments, industry, and media organizations, with the goal of establishing global hegemony. They are alleged to be implicated in most of the major wars of the last two centuries, to carry out secretly staged events, and to deliberately manipulate economies. Organizations alleged to be part of the plot include the Federal Reserve System, the Council on Foreign Relations, Trilateral Commission, the Bilderberg Group, the European Union, the United Nations, the World Bank, the International Monetary Fund, Bohemian Grove, Le Cercle and Yale University society Skull and Bones. The Discordian hoax has resulted in one of the worlds foremost conspiracy theories, which claims that the Illuminati are secretly promoting the posited New World Order. Theorists believe that a wide range of musicians, including Beyoncé and Whitney Houston, have been associated with the group. Prominent theorists include Mark Dice and David Icke.",
        clearance: 3,
        position: true
      },
      {
        title: "Malaysia Flight 17",
        body:
          "Malaysia Airlines Flight 17 was shot down over Ukraine in July 2014. This event has spawned numerous alternative theories. These variously include allegations that it was secretly Flight MH370, that the plane was actually shot down by the Ukrainian Air Force to frame Russia, that it was part of a conspiracy to conceal the truth about HIV, seven disease specialists were on board, or that the Illuminati or Israel was responsible",
        clearance: 1,
        position: true
      },
      {
        title: "Outter Space",
        body:
          "Scientific space programs are of particular interest to conspiracy theorists. The most prolific theories allege that the US Moon landings were staged by NASA in a film studio, with some alleging the involvement of director Stanley Kubrick. The Soviet space program has also attracted theories that the government concealed evidence of failed flights. A more recent theory, emergent following the activities of hacker Gary McKinnon, suggests that a secret program of crewed space fleets exists, supposedly acting under the United Nations",
        clearance: 2,
        position: true
      },
      {
        title: "MK Ultra",
        body:
          "Genuine American research in the 1950s and 1960s into chemical interrogation and mind-control techniques were followed by many conspiracy theories, like Project Monarch, especially following CIA Director Richard Helms 1973 order to destroy all files related to the project. These theories include the allegation that the mass fatality at Jonestown in 1978 was connected to an MKUltra experiment",
        clearance: 1,
        position: false
      },
      {
        title: "MK Ultra",
        body:
          "Genuine American research in the 1950s and 1960s into chemical interrogation and mind-control techniques were followed by many conspiracy theories, like Project Monarch, especially following CIA Director Richard Helms 1973 order to destroy all files related to the project. These theories include the allegation that the mass fatality at Jonestown in 1978 was connected to an MKUltra experiment",
        clearance: 2,
        position: true
      }
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("Articles", null, {});
  }
};
