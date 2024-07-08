const spells = [
    {
  spell: "Aberto",
  effect: "Opens doors",
  pronunciation: "Ah-bare-toh",
  movement: ""
},
{
  spell: "Accio",
  effect: "Brings an object to you",
  pronunciation: "AK-ee-oh or AK-see-oh",
  movement: ""
},
{
  spell: "Age Line",
  effect: "Prevents people above or below a certain age from access to a target",
  pronunciation: "",
  movement: ""
},
{
  spell: "Aguamenti",
  effect: "Creates a gush of water from the tip of the spell caster’s wand",
  pronunciation: "AH-gwah-MEN-tee",
  movement: ""
},
{
  spell: "Alarte Ascendare",
  effect: "Sends the target in the air",
  pronunciation: "ah-LAR-tay ah-SEN-dar-ay",
  movement: ""
},
{
  spell: "Alohomora",
  effect: "Opens locks",
  pronunciation: "AL-oh-ho-MOR-ah",
  movement: ""
},
{
  spell: "Amato Animo Animato Animagus",
  effect: "Used along with the Animagus Potion to transform to become an Animagus",
  pronunciation: "ah-MAH-toh ah-NEE-moh ah-nee-MAH-toh ah-nee-MAH-gus",
  movement: ""
},
{
  spell: "Anapneo",
  effect: "Clears the target’s throat if they are choking",
  pronunciation: "ah-NAHP-nee-oh",
  movement: ""
},
{
  spell: "Anteoculatia",
  effect: "Grows antlers on the target",
  pronunciation: "an-tee-oh-kyoo-LAY-sha",
  movement: ""
},
{
  spell: "Anti-Cheating Spell",
  effect: "Prevents the use of cheating in exams or tests",
  pronunciation: "",
  movement: ""
},
{
  spell: "Apparition Charm",
  effect: "Allows the caster to teleport from one place to another",
  pronunciation: "",
  movement: ""
},
{
  spell: "Anti-Disapparition Jinx",
  effect: "Prevents the use of Apparition in an area",
  pronunciation: "",
  movement: ""
},
{
  spell: "Anti-Intruder Jinx",
  effect: "Alerts the caster of any intruders and prevents them from entering",
  pronunciation: "",
  movement: ""
},
{
    spell: "Antonin Dolohov's curse",
    effect: "Inflicts severe internal injuries on the target",
    pronunciation: "",
    movement: "[A purple jet of light](https://harrypotter.fandom.com/wiki/List_of_spells)"
  },
  {
    spell: "Aparecium",
    effect: "Makes invisible ink become visible",
    pronunciation: "ah-pa-RE-see-um",
    movement: ""
  },
  {
    spell: "Appare Vestigium",
    effect: "Reveals traces of magic and footprints in an area",
    pronunciation: "ah-PAR-eh ves-TIH-jee-um",
    movement: ""
  },
  {
    spell: "Apparition",
    effect: "Allows the caster to teleport from one place to another",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Aqua Eructo",
    effect: "Conjures a jet of water from the wand tip",
    pronunciation: "AH-kwah eh-RUK-toh",
    movement: ""
  },
  {
    spell: "Arania Exumai",
    effect: "Repels spiders",
    pronunciation: "ah-RAH-nee-ah ehk-SOO-may",
    movement: ""
  },
  {
    spell: "Arresto Momentum",
    effect: "Decreases the target's velocity",
    pronunciation: "ah-RES-toh mo-MEN-tum",
    movement: ""
  },
  {
    spell: "Arrow-shooting spell",
    effect: "Shoots arrows from the caster's wand",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Ascendio",
    effect: "Sends the caster high in the air, or toward the surface if used underwater",
    pronunciation: "ah-SEN-dee-oh",
    movement: ""
  },
  {
    spell: "Avada Kedavra",
    effect: "The Unforgivable Curse. Kills your opponent; taken from 'Abra Cadabra'",
    pronunciation: "ah-VAH-dah keh-DAH-vrah",
    movement: "https://www.nationalholidays.com/harry-potter-in-numbers/assets/img/spells/avada.png"
  },
  {
    spell: "Avifors",
    effect: "Transfigures the target into a bird",
    pronunciation: "AV-ih-fors",
    movement: ""
  },
  {
    spell: "Avenseguim",
    effect: "Transforms an object into a tracking device",
    pronunciation: "ah-ven-SEH-gwim",
    movement: ""
  },
  {
    spell: "Avis",
    effect: "Conjures birds from the tip of the wand",
    pronunciation: "AY-vis",
    movement: ""
  },
  {
    spell: "Babbling Curse",
    effect: "Causes the target to babble nonsense",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Badgering",
    effect: "Makes the target behave like a badger",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Bat-Bogey Hex",
    effect: "Enlarges the target's bogies and makes them attack the target",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Baubillious",
    effect: "Produces a bolt of white light from the caster's wand",
    pronunciation: "baw-BIL-ee-us",
    movement: ""
  },
  {
    spell: "Bedazzling Hex",
    effect: "Makes the target invisible or partially transparent",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Bewitched Snowballs",
    effect: "Makes snowballs fly around and hit the target",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Bluebell Flames",
    effect: "Creates a jet of blue fire that can be directed and carried around",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Blue Sparks",
    effect: "Creates blue sparks that can be used as a signal or to set things on fire",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Bombarda",
    effect: "Produces a small explosion",
    pronunciation: "bom-BAR-dah",
    movement: ""
  },
  {
    spell: "Bombarda Maxima",
    effect: "Provokes a large explosion capable of destroying walls",
    pronunciation: "bom-BAR-dah mak-SEE-mah",
    movement: ""
  },
  {
    spell: "Brackium Emendo",
    effect: "Heals broken bones",
    pronunciation: "BRAK-ee-um eh-MEN-doh",
    movement: ""
  },
  {
    spell: "Bravery Charm",
    effect: "Makes the target more courageous",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Bridge-Conjuring Spell",
    effect: "Creates a bridge out of thin air",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Broom Jinx",
    effect: "Affects the target's broomstick and makes it difficult to control",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Bubble-Head Charm",
    effect: "Creates a bubble of air around the caster's head and mouth",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Bubble Spell",
    effect: "Creates a stream of bubbles from the wand tip",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Calvorio",
    effect: "Makes the target’s hair disapparate",
    pronunciation: "kal-VOH-ree-oh",
    movement: ""
  },
  {
    spell: "Cantis",
    effect: "Causes its target to start singing uncontrollably",
    pronunciation: "KAN-tis",
    movement: ""
  },
  {
    spell: "Capacious Extremis",
    effect: "Make the internal space of an object bigger without changing the outside dimensions. Commonly used in tents, vehicles, and trunks. The object’s weight will not be changed by its content",
    pronunciation: "ka-PAY-shus eks-TRE-mis",
    movement: ""
  },
  {
    spell: "Carpe Retractum",
    effect: "Fires a rope of light to pull the target toward the caster or, if the target can’t be moved, will pull the caster toward the target",
    pronunciation: "KAR-pay reh-TRAK-tum",
    movement: ""
  },
  {
    spell: "Cave Inimicum",
    effect: "Hides the caster behind an invisible boundary",
    pronunciation: "KAH-vay ih-NIH-mih-kum",
    movement: ""
  },
  {
    spell: "Circumrota",
    effect: "Make objects rotate",
    pronunciation: "sir-kum-ROH-tah",
    movement: ""
  },
  {
    spell: "Cistem Aperio",
    effect: "Opens chests and locks",
    pronunciation: "SIS-tem ah-PEH-ree-oh",
    movement: ""
  },
  {
    spell: "Colloportus",
    effect: "Used to lock doors and other objects with locks",
    pronunciation: "KOH-loh-POR-tus",
    movement: ""
  },
  {
    spell: "Colloshoo",
    effect: "Sticks the target’s shoes to the ground",
    pronunciation: "KOH-loh-SHOO",
    movement: ""
  },
  {
    spell: "Colovaria",
    effect: "Change the colors of a target",
    pronunciation: "koh-loh-VAH-ree-ah",
    movement: ""
  },
  {
    spell: "Confringo",
    effect: "Creates an important explosion",
    pronunciation: "kon-FRIN-goh",
    movement: "[A jet of orange and red flames]"
  },
  {
    spell: "Confundo",
    effect: "Confuse the target",
    pronunciation: "con-FUN-doh",
    movement: ""
  },
  {
    spell: "Crinus Muto",
    effect: "Change the color and the style of the target’s hair",
    pronunciation: "KREE-nus MYOO-toh",
    movement: ""
  },
  {
    spell: "Crucio",
    effect: "Used to torture the victim by creating intense and dangerous pain in the body. Known as the Cruciatus Curse, it’s one of the three Unforgivable Curses",
    pronunciation: "KROO-see-oh",
    movement: "[A jet of white light]"
  },
  {
    spell: "Defodio",
    effect: "Carves writings or symbols through the target",
    pronunciation: "deh-FOH-dee-oh",
    movement: ""
  },
  {
    spell: "Deletrius",
    effect: "Used to vanish the image of the last spell cast created by a Reverse Spell",
    pronunciation: "deh-LEE-tree-us",
    movement: ""
  },
  {
    spell: "Densaugeo",
    effect: "Causes the victim’s teeth to increase their length",
    pronunciation: "den-saw-JEE-oh",
    movement: ""
  },
  {
    spell: "Deprimo",
    effect: "Used to create holes in the ground",
    pronunciation: "deh-PREE-moh",
    movement: ""
  },
  {
    spell: "Depulso",
    effect: "Repels the target far from the caster",
    pronunciation: "deh-PUL-soh",
    movement: ""
  },
  {
    spell: "Descendo",
    effect: "Move objects toward the ground",
    pronunciation: "deh-SEN-doh",
    movement: ""
  },
  {
    spell: "Diffindo",
    effect: "Creates precise cuts in the target",
    pronunciation: "dih-FIN-doh",
    movement: ""
  },
  {
    spell: "Diminuendo",
    effect: "Shrinks its target",
    pronunciation: "dih-mih-NOO-en-doh",
    movement: ""
  },
  {
    spell: "Dissendium",
    effect: "Opens passages",
    pronunciation: "dih-SEN-dee-um",
    movement: ""
  },
  {
    spell: "Draconifors",
    effect: "Transfigure the target into a dragon",
    pronunciation: "drah-koh-nih-FORS",
    movement: ""
  },
  {
    spell: "Ducklifors",
    effect: "Transfigure the target into a duck",
    pronunciation: "duk-lih-FORS",
    movement: ""
  },
  {
    spell: "Duro",
    effect: "Transform a target object into a stone",
    pronunciation: "DOO-roh",
    movement: ""
  },
  {
    spell: "Ebublio",
    effect: "Traps the target in a big bubble",
    pronunciation: "eh-BOO-blee-oh",
    movement: ""
  },
  {
    spell: "Engorgio",
    effect: "Swell the size of the target",
    pronunciation: "en-GOR-jee-oh",
    movement: ""
  },
  {
    spell: "Engorgio Skullus",
    effect: "Swell the target’s skull disproportionately",
    pronunciation: "en-GOR-jee-oh SKULL-us",
    movement: ""
  },
  {
    spell: "Entomorphis",
    effect: "Temporarily transfigure the target into an insect",
    pronunciation: "en-toh-MOR-fis",
    movement: ""
  },
  {
    spell: "Episkey",
    effect: "Heal minor injuries like broken noses or fingers",
    pronunciation: "eh-PIS-kee",
    movement: ""
  },
  {
    spell: "Epoximise",
    effect: "Glue two objects together",
    pronunciation: "eh-POX-ih-mize",
    movement: ""
  },
  {
    spell: "Erecto",
    effect: "Erect structures through the air. Commonly used with tents",
    pronunciation: "eh-REK-toh",
    movement: ""
  },
  {
    spell: "Evanesce",
    effect: "Make the target disappear",
    pronunciation: "eh-vah-NES",
    movement: ""
  },
  {
    spell: "Evanesco",
    effect: "Similar to Evanesce, used to vanish things",
    pronunciation: "eh-vah-NES-koh",
    movement: ""
  },
  {
    spell: "Everte Statum",
    effect: "Throw the target violently backward",
    pronunciation: "eh-VER-tee STAH-tum",
    movement: ""
  },
  {
    spell: "Expecto Patronum",
    effect: "A highly powerful charm used to repel dark creatures such as dementors. Can be used to send messages. The Patronus created by the charm, if corporals will take the form of an animal and stay unique to its caster. Unless the caster goes through a strong or traumatic feeling, thus the Patronus can change its form or lose its corporal state",
    pronunciation: "eks-PEK-toh pah-TROH-num",
    movement: "[A silvery-white animal-shaped light]"
  },
  {
    spell: "Expelliarmus",
    effect: "Disarm the target by flying out anything they hold in their hands",
    pronunciation: "eks-pel-ee-AR-mus",
    movement: "[A jet of red light]"
  },
  {
    spell: "Expulso",
    effect: "Create an explosion caused by a change in pressure rather than heat",
    pronunciation: "eks-PUL-soh",
    movement: "[A jet of blue light]"
  },
  {
    spell: "Ferula",
    effect: "Conjure bandages and wraps them around the targeted area",
    pronunciation: "feh-ROO-lah",
    movement: ""
  },
  {
    spell: "Fianto Duri",
    effect: "Make shield spells more powerful",
    pronunciation: "fee-AN-toh DOO-ree",
    movement: ""
  },
  {
    spell: "Finestra",
    effect: "Break a glass into pieces",
    pronunciation: "fi-NES-trah",
    movement: ""
  },
  {
    spell: "Finite Incantatem",
    effect: "Put an end to spell effects around the target",
    pronunciation: "fi-NEE-tay in-can-TAH-tem",
    movement: ""
  },
  {
    spell: "Flagrate",
    effect: "Let the caster write in the air",
    pronunciation: "FLAH-grate",
    movement: ""
  },
  {
    spell: "Flintifors",
    effect: "Transfigure an object into matchboxes",
    pronunciation: "flin-tih-FORS",
    movement: ""
  },
  {
    spell: "Flipendo",
    effect: "Throw the target backward",
    pronunciation: "fli-PEN-doh",
    movement: "[A jet of blue light]"
  },
  {
    spell: "Flipendo Duo",
    effect: "A more powerful version of Flipendo",
    pronunciation: "fli-PEN-doh DOO-oh",
    movement: "[A jet of blue light]"
  },
  {
    spell: "Flipendo Maxima",
    effect: "The most powerful version of Flipendo",
    pronunciation: "fli-PEN-doh mak-SEE-mah",
    movement: "[A jet of blue light]"
  },
  {
    spell: "Flipendo Tria",
    effect: "A more powerful version of Flipendo Duo",
    pronunciation: "fli-PEN-doh TREE-ah",
    movement: "[A jet of blue light]"
  },
  {
    spell: "Fumos",
    effect: "Create a smokescreen that obstructs visibility",
    pronunciation: "FOO-mos",
    movement: ""
  },
  {
    spell: "Fumos Duo",
    effect: "A more powerful version of Fumos",
    pronunciation: "FOO-mos DOO-oh",
    movement: ""
  },
  {
    spell: "Furnunculus",
    effect: "Causes boils to grow on the target",
    pronunciation: "fur-NUN-ku-lus",
    movement: ""
  },
  {
    spell: "Geminio",
    effect: "Duplicate an object. The curse version of this charm will duplicate the object indefinitely",
    pronunciation: "jeh-MIN-ee-oh",
    movement: ""
  },
  {
    spell: "Glacius",
    effect: "Freeze the target with icy air",
    pronunciation: "GLAY-see-us",
    movement: ""
  },
  {
    spell: "Glacius Duo",
    effect: "A more powerful version of Glacius",
    pronunciation: "GLAY-see-us DOO-oh",
    movement: ""
  },
  {
    spell: "Glacius Tria",
    effect: "A more powerful version of Glacius Duo",
    pronunciation: "GLAY-see-us TREE-ah",
    movement: ""
  },
  {
    spell: "Glisseo",
    effect: "Flatten a stairway step into a slide",
    pronunciation: "glih-SAY-oh",
    movement: ""
  },
  {
    spell: "Harmonia Nectere Passus",
    effect: "Used to repair a Vanishing Cabinet",
    pronunciation: "har-MOH-nee-ah nek-TEH-reh PAH-sus",
    movement: ""
  },
  {
    spell: "Herbifors",
    effect: "Spout flowers from the target",
    pronunciation: "HER-bih-fors",
    movement: ""
  },
  {
    spell: "Herbivicus",
    effect: "Greatly increase plants’ growth speed",
    pronunciation: "her-BIH-vih-kus",
    movement: ""
  },
  {
    spell: "Homenum Revelio",
    effect: "Reveal any human presence in the area",
    pronunciation: "hoh-MEH-num reh-VEL-ee-oh",
    movement: ""
  },
  {
    spell: "Illegibilus",
    effect: "Make any writing unreadable",
    pronunciation: "ih-leh-JIH-bih-lus",
    movement: ""
  },
  {
    spell: "Immobulus",
    effect: "Immobilise the target",
    pronunciation: "ih-MOH-buh-lus",
    movement: ""
  },
  {
    spell: "Impedimenta",
    effect: "Slow down or stop the target",
    pronunciation: "im-peh-dih-MEN-tah",
    movement: ""
  },
  {
    spell: "Imperio",
    effect: "Place the victim completely under the caster’s control. The imperius curse is one of the three Unforgivable Curses",
    pronunciation: "im-PEH-ree-oh",
    movement: "[A jet of silvery-blue light]"
  },
  {
    spell: "Impervius",
    effect: "Make the target object repel water and mist, keeping it dry",
    pronunciation: "im-PER-vee-us",
    movement: ""
  },
  {
    spell: "Inanimatus Conjurus",
    effect: "Unknown effect will likely conjure an inanimate object",
    pronunciation: "ih-nah-nih-MAH-tus kon-JOO-rus",
    movement: ""
  },
  {
    spell: "Incarcerous",
    effect: "Conjure ropes or cords that tie the target",
    pronunciation: "in-KAR-ser-us",
    movement: ""
  },
  {
    spell: "Incendio",
    effect: "Produce fire",
    pronunciation: "in-SEN-dee-oh",
    movement: ""
  },
  {
    spell: "Incendio Duo",
    effect: "A more powerful version of Incendio",
    pronunciation: "in-SEN-dee-oh DOO-oh",
    movement: ""
  },
  {
    spell: "Incendio Tria",
    effect: "A more powerful version of Incendio Duo",
    pronunciation: "in-SEN-dee-oh TREE-ah",
    movement: ""
  },
  {
    spell: "Inflatus",
    effect: "Inflates the target with air",
    pronunciation: "in-FLAH-tus",
    movement: ""
  },
  {
    spell: "Informous",
    effect: "Add a missing page to the book Folio Bruti, otherwise known as the Book of Beasts",
    pronunciation: "in-FOR-mus",
    movement: ""
  },
  {
    spell: "Lacarnum Inflamari",
    effect: "Ignite cloaks",
    pronunciation: "lah-KAR-num in-flah-MAH-ree",
    movement: ""
  },
  {
    spell: "Langlock",
    effect: "Lock the victim’s tongue to the roof of their mouth. Created by Severus Snape",
    pronunciation: "LANG-lok",
    movement: ""
  },
  {
    spell: "Lapifors",
    effect: "Transfigure the target into a rabbit",
    pronunciation: "LAH-pih-fors",
    movement: ""
  },
  {
    spell: "Legilimens",
    effect: "Allow the caster to read the victim’s mind",
    pronunciation: "leh-JIH-lih-mens",
    movement: ""
  },
  {
    spell: "Levicorpus",
    effect: "Hold the victims in the air by their ankle. Created by Severus Snape",
    pronunciation: "leh-vih-KOR-pus",
    movement: ""
  },
  {
    spell: "Liberacorpus",
    effect: "A counter-jinx to Levicorpus",
    pronunciation: "lih-beh-rah-KOR-pus",
    movement: ""
  },
  {
    spell: "Locomotor",
    effect: "Make the target float above the ground before moving it around",
    pronunciation: "loh-koh-MOH-tor",
    movement: ""
  },
  {
    spell: "Locomotor Mortis",
    effect: "Sticks legs together",
    pronunciation: "loh-koh-MOH-tor MOR-tis",
    movement: ""
  },
  {
    spell: "Locomotor Wibbly",
    effect: "Make the victim’s legs incapable of carrying their owner",
    pronunciation: "loh-koh-MOH-tor WIB-lee",
    movement: ""
  },
  {
    spell: "Lumos",
    effect: "Make a light source out of the tip of the caster’s wand",
    pronunciation: "LOO-mos",
    movement: ""
  },
  {
    spell: "Lumos Duo",
    effect: "Create a focused beam of light from the caster’s wand",
    pronunciation: "LOO-mos DOO-oh",
    movement: ""
  },
  {
    spell: "Lumos Maxima",
    effect: "Create a blinding flash of light from the caster’s wand",
    pronunciation: "LOO-mos mak-SEE-mah",
    movement: ""
  },
  {
    spell: "Lumos Solem",
    effect: "Produce a blinding flash of sunlight, similar to Lumos Maxima",
    pronunciation: "LOO-mos SOH-lem",
    movement: ""
  },
  {
    spell: "Magicus Extremos",
    effect: "Temporarily increase the casters’ spell power",
    pronunciation: "mah-JIH-kus eks-TREH-mos",
    movement: ""
  },
  {
    spell: "Melofors",
    effect: "Conjure a pumpkin that imprisons the victim’s head",
    pronunciation: "MEH-loh-fors",
    movement: ""
  },
  {
    spell: "Meteolojinx Recanto",
    effect: "Cease weather effects created by jinxes",
    pronunciation: "meh-tee-oh-LIH-jinks reh-KAN-toh",
    movement: ""
  },
  {
    spell: "Mimblewimble",
    effect: "Tie the victim’s tongue in a knot",
    pronunciation: "MIM-bull-wim-bull",
    movement: ""
  },
  {
    spell: "Mobiliarbus",
    effect: "Make wooden objects float above the ground before moving them around",
    pronunciation: "moh-BIL-ee-ar-bus",
    movement: ""
  },
  {
    spell: "Mobilicorpus",
    effect: "Make bodies float and move",
    pronunciation: "moh-BIL-ee-kor-pus",
    movement: ""
  },
  {
    spell: "Molliare",
    effect: "Create an invisible cushion over the target, commonly used in manufactured broomsticks",
    pronunciation: "moh-lee-AR-eh",
    movement: ""
  },
  {
    spell: "Disintegration curse",
    effect: "Freeze and kill the victim. The curse will turn the body paler when freezing it, then another twin spell can blast the body into pieces",
    pronunciation: "",
    movement: ""
  },
  {
    spell: "Morsmordre",
    effect: "Conjure the Dark Mark in the air. Used by Death Eaters to reveal their presence",
    pronunciation: "mors-MOR-druh",
    movement: "[A green skull with a snake coming out of its mouth]"
  },
  {
    spell: "Mucus ad Nauseam",
    effect: "Make the victim get a strong cold and a runny nose causing her to collapse if not treated rapidly",
    pronunciation: "MYOO-kus ad NAW-zee-am",
    movement: ""
  },
  {
    spell: "Muffliato",
    effect: "Fill people’s ears with a buzzing preventing them from hearing surrounding sounds",
    pronunciation: "muf-lee-AH-toh",
    movement: ""
  },
  {
    spell: "Multicorfors",
    effect: "Change the color and style of the target’s clothes",
    pronunciation: "mul-tee-kor-FORS",
    movement: ""
  },
  {
    spell: "Mutatio Skullus",
    effect: "Create mutation in the victim’s head, growing extra heads",
    pronunciation: "moo-TAH-tee-oh SKULL-us",
    movement: ""
  },
  {
    spell: "Nox",
    effect: "Extinguish wand light, counter-charm for Lumos",
    pronunciation: "NOCKS",
    movement: ""
  },
  {
    spell: "Nebulous",
    effect: "Produce fog from the tip of the wand",
    pronunciation: "NEB-yoo-lus",
    movement: ""
  },
  {
    spell: "Oculus Reparo",
    effect: "Repairs eyeglasses",
    pronunciation: "OK-yoo-lus reh-PAH-roh",
    movement: ""
  },
  {
    spell: "Obliviate",
    effect: "Erase targeted memories",
    pronunciation: "oh-BLIV-ee-ate",
    movement: "[A jet of silvery light]"
  },
  {
    spell: "Obscuro",
    effect: "Blindfolds the target",
    pronunciation: "ob-SKOO-roh",
    movement: ""
  },
  {
    spell: "Oppugno",
    effect: "Causes targeted objects to attack a victim",
    pronunciation: "oh-POO-noh",
    movement: ""
  },
  {
    spell: "Orbis",
    effect: "Suck the target into the ground",
    pronunciation: "OR-bis",
    movement: ""
  },
  {
    spell: "Orchideous",
    effect: "Conjure a bouquet of flowers",
    pronunciation: "or-KID-ee-us",
    movement: ""
  },
  {
    spell: "Oscausi",
    effect: "Make the victim’s mouth disappear, replaced with smooth skin",
    pronunciation: "os-KAW-zee",
    movement: ""
  },
  {
    spell: "Pack",
    effect: "Packs luggage",
    pronunciation: "PAK",
    movement: ""
  },
  {
    spell: "Papyrus Reparo",
    effect: "Mend torn pieces of paper",
    pronunciation: "pah-PEER-us reh-PAH-roh",
    movement: ""
  },
  {
    spell: "Partis Temporus",
    effect: "Create a temporary gap in the target. Effective against fire barriers",
    pronunciation: "PAR-tis tem-POH-rus",
    movement: ""
  },
  {
    spell: "Periculum",
    effect: "Shoots red sparks from the wand’s tip",
    pronunciation: "peh-RIK-yoo-lum",
    movement: ""
  },
  {
    spell: "Petrificus Totalus",
    effect: "Temporarily paralyze the target",
    pronunciation: "peh-trih-FIH-kus toh-TAH-lus",
    movement: "[A jet of blue light]"
  },
  {
    spell: "Piertotum Locomotor",
    effect: "Animate inanimate targets such as statues and brings them to life",
    pronunciation: "pee-er-TOH-tum loh-koh-MOH-tor",
    movement: ""
  },
  {
    spell: "Piscifors",
    effect: "Transfigure the target into a fish",
    pronunciation: "PIS-ih-fors",
    movement: ""
  },
  {
    spell: "Point Me",
    effect: "Make the caster’s wand point to the north like a compass",
    pronunciation: "POINT me",
    movement: ""
  },
  {
    spell: "Portus",
    effect: "Make a target object into a Portkey",
    pronunciation: "POR-tus",
    movement: ""
  },
  {
    spell: "Prior Incantato",
    effect: "Show an echo of the last spell performed by the target wand",
    pronunciation: "PRI-or in-can-TAH-toh",
    movement: ""
  },
  {
    spell: "Pullus",
    effect: "Transfigure the target into a chicken",
    pronunciation: "PUL-us",
    movement: ""
  },
  {
    spell: "Protego",
    effect: "Conjure an invisible shield that protects against minor spells and entities",
    pronunciation: "proh-TEH-goh",
    movement: "[A transparent shield]"
  },
  {
    spell: "Protego Diabolica",
    effect: "Create a black fire ring around the caster that only harms their enemies",
    pronunciation: "proh-TEH-goh dee-ah-BOH-lee-kah",
    movement: "[A ring of black fire]"
  },
  {
    spell: "Protego Horribilis",
    effect: "A powerful shield charm against dark magic",
    pronunciation: "proh-TEH-goh hor-RIH-bil-is",
    movement: "[A transparent shield]"
  },
  {
    spell: "Protego Maxima",
    effect: "A bigger and more powerful variation of Protego. It can be combined with other wizards casting it at the same time for a bigger effect",
    pronunciation: "proh-TEH-goh mak-SEE-mah",
    movement: "[A transparent shield]"
  },
  {
    spell: "Protego Totalum",
    effect: "Protect the target area against intrusions for an extended period of time",
    pronunciation: "proh-TEH-goh toh-TAH-lum",
    movement: "[A transparent shield]"
  },
  {
    spell: "Quietus",
    effect: "Counter-charm to the Amplifying Charm, it will make a target’s sound quieter",
    pronunciation: "kwee-AY-tus",
    movement: ""
  },
  {
    spell: "Redactum Skullus",
    effect: "Shrink the target’s head. Acts also as a counter-charm to Engorgio Skullus",
    pronunciation: "reh-DAK-tum SKULL-us",
    movement: ""
  },
  {
    spell: "Reducio",
    effect: "Shrink the size of an object",
    pronunciation: "reh-DOO-see-oh",
    movement: ""
  },
  {
    spell: "Reducto",
    effect: "Breaks or disintegrates objects",
    pronunciation: "reh-DUK-toh",
    movement: "[A jet of blue light]"
  },
  {
    spell: "Reparifors",
    effect: "Heal minor magical ailments",
    pronunciation: "reh-PAH-ri-fors",
    movement: ""
  },
  {
    spell: "Reverte",
    effect: "Bring back objects to their original positions or states",
    pronunciation: "reh-VER-teh",
    movement: ""
  },
  {
    spell: "Relashio",
    effect: "Force the target to release its grip on whatever it is holding",
    pronunciation: "reh-LAH-see-oh",
    movement: "[A jet of sparks]"
  },
  {
    spell: "Rennervate",
    effect: "Wake up unconscious beings",
    pronunciation: "reh-NER-vate",
    movement: ""
  },
  {
    spell: "Reparifarge",
    effect: "Reverse incomplete transfigurations",
    pronunciation: "reh-PAH-ri-farj",
    movement: ""
  },
  {
    spell: "Reparo",
    effect: "Repair broken objects",
    pronunciation: "reh-PAH-roh",
    movement: ""
  },
  {
    spell: "Repello Muggletum",
    effect: "Keep the Muggles away from the target idea. The charm will create confusion in the Muggle’s mind urging them to go away",
    pronunciation: "reh-PEL-loh MUG-leh-tum",
    movement: ""
  },
  {
    spell: "Repello Inimicum",
    effect: "Disintegrate any person crossing a conjured barrier",
    pronunciation: "reh-PEL-loh ih-NIH-mih-kum",
    movement: ""
  },
  {
    spell: "Revelio",
    effect: "Reveal secrets about a person or object",
    pronunciation: "reh-VEL-ee-oh",
    movement: ""
  },
  {
    spell: "Rictusempra",
    effect: "Tickle the target into laughter",
    pronunciation: "rik-tuh-SEM-prah",
    movement: "[A jet of silver light]"
  },
  {
    spell: "Riddikulus",
    effect: "Turn a Boggart into a funny form before making it disappear",
    pronunciation: "rih-DIK-yoo-lus",
    movement: ""
  },
  {
    spell: "Salvio hexia",
    effect: "Protect against hexes",
    pronunciation: "SAL-vee-oh HEK-see-ah",
    movement: ""
  },
  {
    spell: "Scourgify",
    effect: "Clean target objects",
    pronunciation: "SKUR-jih-fye",
    movement: ""
  },
  {
    spell: "Sectumsempra",
    effect: "Creates deep bleeding cuts that can kill the victim. Created by Severus Snape",
    pronunciation: "sek-tum-SEM-prah",
    movement: "[A jet of white light]"
  },
  {
    spell: "Serpensortia",
    effect: "Conjure a serpent",
    pronunciation: "ser-pen-SOR-tee-ah",
    movement: ""
  },
  {
    spell: "Silencio",
    effect: "Silence the target",
    pronunciation: "sih-LEN-see-oh",
    movement: ""
  },
  {
    spell: "Skurge",
    effect: "Clean up ectoplasms and repels ghosts and other spirits",
    pronunciation: "SKURJ",
    movement: ""
  },
  {
    spell: "Slugulus Eructo",
    effect: "Make the victim burp up slugs",
    pronunciation: "slug-OO-lus eh-RUK-toh",
    movement: ""
  },
  {
    spell: "Sonorus",
    effect: "Make the target sound louder. The counter-charm to this spell is Quietus",
    pronunciation: "soh-NOR-us",
    movement: ""
  },
  {
    spell: "Specialis Revelio",
    effect: "Reveal if a spell was cast on the target",
    pronunciation: "speh-see-AH-lis reh-VEL-ee-oh",
    movement: ""
  },
  {
    spell: "Spongify",
    effect: "Soften the target objects and make them bouncy",
    pronunciation: "SPON-jih-fye",
    movement: ""
  },
  {
    spell: "Sternius",
    effect: "Temporarily cause the victim to sneeze",
    pronunciation: "STUR-nee-us",
    movement: ""
  },
  {
    spell: "Stupefy",
    effect: "Stuns the target and makes them unconscious",
    pronunciation: "STOO-pih-fye",
    movement: "[A jet of red light]"
  },
  {
    spell: "Surgito",
    effect: "Removes enhancements",
    pronunciation: "sur-JIH-toh",
    movement: ""
  },
  {
    spell: "Taboo",
    effect: "A jinx placed on a word and revealing to the caster the position of anyone who speaks the taboo word",
    pronunciation: "ta-BOO",
    movement: ""
  },
  {
    spell: "Tarantallegra",
    effect: "Make the target’s leg move uncontrollably",
    pronunciation: "tah-ran-ta-LEG-rah",
    movement: ""
  },
  {
    spell: "Tentaclifors",
    effect: "Change the victim’s head into a tentacle",
    pronunciation: "ten-ta-klih-FORS",
    movement: ""
  },
  {
    spell: "Tergeo",
    effect: "Clearing liquid out of an object while leaning it",
    pronunciation: "TER-jee-oh",
    movement: ""
  },
  {
    spell: "Titillando",
    effect: "Tickle the target",
    pronunciation: "tih-tih-LAN-doh",
    movement: ""
  },
  {
    spell: "Unbreakable Vow",
    effect: "With light filaments coming from the wand of the witch or wizard casting the spell, the hands of the two people who made the vow will be tied together. The consequence of breaking an Unbreakable Vow is dead",
    pronunciation: "un-BRAY-kuh-bull vow",
    movement: "[A thin tongue of brilliant flame]"
  },
  {
    spell: "Ventus",
    effect: "Fire a jet of strong spiraling wind from the caster’s wand",
    pronunciation: "VEN-tus",
    movement: ""
  },
  {
    spell: "Ventus Duo",
    effect: "A more powerful version of Ventus",
    pronunciation: "VEN-tus DOO-oh",
    movement: ""
  },
  {
    spell: "Vera Verto",
    effect: "Transfigure an animal into a goblet",
    pronunciation: "VEH-rah VER-toh",
    movement: ""
  },
  {
    spell: "Verdillious",
    effect: "Produce green sparks from the caster’s wand",
    pronunciation: "ver-DIL-ee-us",
    movement: ""
  },
  {
    spell: "Verdimillious",
    effect: "Shoot a jet of green sparks from the caster’s wand that can target an opponent or reveal things hidden by dark magic",
    pronunciation: "ver-dih-MIL-ee-us",
    movement: ""
  },
  {
    spell: "Verdimillious Duo",
    effect: "A more powerful variation of Verdimillious",
    pronunciation: "ver-dih-MIL-ee-us DOO-oh",
    movement: ""
  },
  {
    spell: "Vermiculus",
    effect: "Transfigure targets into worms",
    pronunciation: "ver-MIH-ku-lus",
    movement: ""
  },
  {
    spell: "Vermillious",
    effect: "Shoots a jet of red sparks from the caster’s wand. It can be used to signal the caster’s position",
    pronunciation: "ver-MIL-ee-us",
    movement: ""
  },
  {
    spell: "Vipera Evanesca",
    effect: "Make conjured snakes vanish. A counter-spell to Snake Summons Spell",
    pronunciation: "vih-PEH-rah eh-vah-NES-kah",
    movement: ""
  },
  {
    spell: "Vulnera Sanentur",
    effect: "Healing spell that slows blood flow, closes wounds, and heal lacerations. It is the counter-curse to Sectumsempra",
    pronunciation: "vul-NEH-rah sah-NEN-tur",
    movement: ""
  },
  {
    spell: "Waddiwasi",
    effect: "Shoot small objects toward a target",
    pronunciation: "wad-ee-WAH-see",
    movement: ""
  },
  {
    spell: "Wingardium Leviosa",
    effect: "Levitate objects in the air",
    pronunciation: "win-GAR-dee-um leh-vee-OH-sah",
    movement: "[A swish and flick]"
  }
  
  
  
  
  


];


function writeSpells() {
    var input = document.getElementById('searchBar').value.toLowerCase();
    var container = document.getElementById('spellsContainer');
    container.innerHTML = ''; // Clear the container
    for(var i = 0; i < spells.length; i++) {
        if (spells[i].spell.toLowerCase().includes(input) || spells[i].effect.toLowerCase().includes(input)) {
            var div = document.createElement('div');
            div.setAttribute('onClick', 'zapniVypni(' + i + ');');
            div.innerHTML = "<h2>" + spells[i].spell + " <span id='sipka"+ i +"'>↓</span></h2>"
                + "<div class=skryty id='spell" + i + "'><div>Effect: " + spells[i].effect +"</div>" 
                + "<div>Pronounciation: " + spells[i].pronunciation +"</div>"
                + "<img style=\"float:middle; display:inline\" src='" + spells[i].movement + "'>"
                + "</div><hr>";
            container.appendChild(div);
        }
    }
}


var onOff = {};
var x = 0;

function zapniVypni(x){
    var spell = document.getElementById('spell'+x);
    var sipka = document.getElementById('sipka'+x);
    if (onOff[x] == 'none') { 
        spell.style.display = 'block';
        sipka.innerHTML = '↑';
        onOff[x] = 'block'
    } else {
        spell.style.display = 'none';
        sipka.innerHTML = '↓';
        onOff[x] = 'none';            
    }
}
