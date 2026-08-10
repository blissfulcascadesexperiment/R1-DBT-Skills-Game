/* =========================================================================
   WISE MIND: A DBT ADVENTURE
   Game content: character options, NPCs, stages, challenges, bosses
   ========================================================================= */

/* ---------------- Identity / diversity options ---------------- */

const GENDERS = [
  { id: 'she', label: 'She/Her', desc: 'Feminine presentation' },
  { id: 'he', label: 'He/Him', desc: 'Masculine presentation' },
  { id: 'they', label: 'They/Them', desc: 'Androgynous presentation' },
  { id: 'fluid', label: 'Any / Fluid', desc: 'Expressive presentation' }
];

const SPECIES = [
  { id: 'human', name: 'Human', emoji: '🙂', desc: 'A person, just like you' },
  { id: 'robot', name: 'Robot', emoji: '🤖', desc: 'A learning android (fictional)' },
  { id: 'dragon', name: 'Dragonling', emoji: '🐉', desc: 'A young dragon (fictional)' },
  { id: 'wizard', name: 'Wizard', emoji: '🧙', desc: 'A spell-in-training mage (fictional)' },
  { id: 'alien', name: 'Alien', emoji: '👽', desc: 'An exchange student from space (fictional)' },
  { id: 'ghost', name: 'Ghost', emoji: '👻', desc: 'A friendly spirit (fictional)' },
  { id: 'hero', name: 'Hero', emoji: '🦸', desc: 'A cape-wearing hero-in-training (fictional)' }
];

const SKIN_TONES = [
  { id: 'porcelain', hex: '#ffd9c4', label: 'Fair', ethnicity: 'Northern European' },
  { id: 'cool-fair', hex: '#f7cbbf', label: 'Fair (cool)', ethnicity: 'Scandinavian / Slavic' },
  { id: 'light', hex: '#f3c6a5', label: 'Light', ethnicity: 'Western European' },
  { id: 'golden', hex: '#f5d7a8', label: 'Golden', ethnicity: 'East Asian' },
  { id: 'warm', hex: '#e6b487', label: 'Warm', ethnicity: 'Mediterranean / Latinx' },
  { id: 'olive', hex: '#c9a46a', label: 'Olive', ethnicity: 'South / Southeast Asian' },
  { id: 'tan', hex: '#c68f5e', label: 'Tan', ethnicity: 'Middle Eastern / Indigenous' },
  { id: 'medium', hex: '#a86b3c', label: 'Medium', ethnicity: 'African / Latinx / Indigenous' },
  { id: 'rich', hex: '#8f5633', label: 'Rich brown', ethnicity: 'African American' },
  { id: 'deep', hex: '#6f4026', label: 'Deep', ethnicity: 'Sub-Saharan African' },
  { id: 'dark', hex: '#4d2c1c', label: 'Dark', ethnicity: 'Black / African diaspora' }
];

const HAIR_STYLES = [
  { id: 'afro', name: 'Afro', emoji: '☁️', defaultUnlock: true },
  { id: 'locs', name: 'Locs', emoji: '🌀', defaultUnlock: true },
  { id: 'braids', name: 'Braids', emoji: '🪢', defaultUnlock: true },
  { id: 'curly', name: 'Curly', emoji: '🐚', defaultUnlock: true },
  { id: 'waves', name: 'Waves', emoji: '🌊', defaultUnlock: true },
  { id: 'straight', name: 'Straight', emoji: '📏', defaultUnlock: true },
  { id: 'buzz', name: 'Buzz cut', emoji: '🪒', defaultUnlock: true },
  { id: 'bob', name: 'Bob', emoji: '✂️', defaultUnlock: true },
  { id: 'pixie', name: 'Pixie', emoji: '✨', defaultUnlock: true },
  { id: 'bun', name: 'Bun', emoji: '🥟', defaultUnlock: true },
  { id: 'ponytail', name: 'Ponytail', emoji: '🐎', defaultUnlock: true },
  { id: 'long', name: 'Long', emoji: '🌙', defaultUnlock: true },
  { id: 'mohawk', name: 'Mohawk', emoji: '⚡', defaultUnlock: false, lockedBy: 'hairstyles' },
  { id: 'spacebuns', name: 'Space buns', emoji: '🪐', defaultUnlock: false, lockedBy: 'hairstyles' },
  { id: 'undercut', name: 'Undercut', emoji: '💈', defaultUnlock: false, lockedBy: 'hairstyles' },
  { id: 'braidhalo', name: 'Braid halo', emoji: '💫', defaultUnlock: false, lockedBy: 'hairstyles' }
];

const HAIR_COLORS = [
  { id: 'black', hex: '#2b1d16', label: 'Black' },
  { id: 'darkbrown', hex: '#4a2f1d', label: 'Dark brown' },
  { id: 'brown', hex: '#6b4423', label: 'Brown' },
  { id: 'auburn', hex: '#8b3a1e', label: 'Auburn' },
  { id: 'blonde', hex: '#d9a92e', label: 'Blonde' },
  { id: 'red', hex: '#c23b22', label: 'Red' },
  { id: 'silver', hex: '#c9ccd4', label: 'Silver' },
  { id: 'blue', hex: '#3b6fd4', label: 'Blue' },
  { id: 'purple', hex: '#8b3fd4', label: 'Purple' },
  { id: 'pink', hex: '#e565a8', label: 'Pink' },
  { id: 'green', hex: '#3fa34d', label: 'Green' }
];

const EYE_COLORS = [
  { id: 'brown', hex: '#4a2f1d', label: 'Brown' },
  { id: 'hazel', hex: '#7a5b2e', label: 'Hazel' },
  { id: 'green', hex: '#3f8f5a', label: 'Green' },
  { id: 'blue', hex: '#3f7bd4', label: 'Blue' },
  { id: 'gray', hex: '#7b8794', label: 'Gray' },
  { id: 'amber', hex: '#c98a2b', label: 'Amber' },
  { id: 'purple', hex: '#8b3fd4', label: 'Purple' },
  { id: 'teal', hex: '#2a9d8f', label: 'Teal' }
];

const OUTFITS = [
  { id: 'tee', name: 'Tee & Jeans', emoji: '👕', defaultUnlock: true },
  { id: 'hoodie', name: 'Hoodie', emoji: '🧥', defaultUnlock: true },
  { id: 'sporty', name: 'Athletic', emoji: '🏃', defaultUnlock: true },
  { id: 'preppy', name: 'Crew & Cardigan', emoji: '👔', defaultUnlock: true },
  { id: 'formal', name: 'Formal', emoji: '🤵', defaultUnlock: true },
  { id: 'dashiki', name: 'Dashiki', emoji: '🪶', defaultUnlock: true },
  { id: 'kimono', name: 'Kimono', emoji: '🌸', defaultUnlock: true },
  { id: 'hanbok', name: 'Hanbok', emoji: '🎐', defaultUnlock: true },
  { id: 'sari', name: 'Kurta', emoji: '🪔', defaultUnlock: true },
  { id: 'punk', name: 'Punk', emoji: '🖤', defaultUnlock: false, lockedBy: 'outfits' },
  { id: 'goth', name: 'Goth', emoji: '🥀', defaultUnlock: false, lockedBy: 'outfits' },
  { id: 'astronaut', name: 'Astronaut', emoji: '🚀', defaultUnlock: false, lockedBy: 'costumes' },
  { id: 'knight', name: 'Knight', emoji: '🛡️', defaultUnlock: false, lockedBy: 'costumes' },
  { id: 'chef', name: 'Chef', emoji: '👨‍🍳', defaultUnlock: false, lockedBy: 'career' },
  { id: 'mechanic', name: 'Mechanic', emoji: '🔧', defaultUnlock: false, lockedBy: 'career' },
  { id: 'superhero', name: 'Superhero', emoji: '🦸', defaultUnlock: false, lockedBy: 'costumes' },
  { id: 'legend', name: 'Legendary', emoji: '👑', defaultUnlock: false, lockedBy: 'finale' }
];

const SHOES = [
  { id: 'sneakers', name: 'Sneakers', emoji: '👟', defaultUnlock: true },
  { id: 'boots', name: 'Boots', emoji: '🥾', defaultUnlock: true },
  { id: 'sandals', name: 'Sandals', emoji: '🩴', defaultUnlock: true },
  { id: 'flats', name: 'Flats', emoji: '👡', defaultUnlock: true },
  { id: 'slipons', name: 'Slip-ons', emoji: '🥿', defaultUnlock: true },
  { id: 'heels', name: 'Heels', emoji: '👠', defaultUnlock: false, lockedBy: 'shoes' },
  { id: 'spaceboots', name: 'Space boots', emoji: '🧑‍🚀', defaultUnlock: false, lockedBy: 'shoes' },
  { id: 'hightops', name: 'Neon high-tops', emoji: '✨', defaultUnlock: false, lockedBy: 'shoes' }
];

const ACCESSORIES = [
  { id: 'none', name: 'None', emoji: '—', defaultUnlock: true },
  { id: 'cap', name: 'Baseball cap', emoji: '🧢', defaultUnlock: true },
  { id: 'beanie', name: 'Beanie', emoji: '🧣', defaultUnlock: true },
  { id: 'headphones', name: 'Headphones', emoji: '🎧', defaultUnlock: true },
  { id: 'backpack', name: 'Backpack', emoji: '🎒', defaultUnlock: true },
  { id: 'scarf', name: 'Scarf', emoji: '🧣', defaultUnlock: true },
  { id: 'bow', name: 'Hair bow', emoji: '🎀', defaultUnlock: false, lockedBy: 'accessories' },
  { id: 'crown', name: 'Tiny crown', emoji: '👑', defaultUnlock: false, lockedBy: 'accessories' },
  { id: 'mask', name: 'Festival mask', emoji: '🎭', defaultUnlock: false, lockedBy: 'accessories' }
];

const SUNGLAASES = { base: '🕶️', lockedBy: 'sunglasses' };

/* ---------------- NPC presets ---------------- */

const NPC_PRESETS = {
  mom: { name: 'Maya', species: 'human', skin: 'rich', hair: 'braids', hairColor: 'black', eyes: 'brown', outfit: 'preppy', role: 'Mom' },
  dad: { name: 'Derrick', species: 'human', skin: 'dark', hair: 'buzz', hairColor: 'black', eyes: 'brown', outfit: 'formal', role: 'Dad' },
  mom2: { name: 'Elena', species: 'human', skin: 'tan', hair: 'straight', hairColor: 'auburn', eyes: 'green', outfit: 'formal', role: 'Mom' },
  teacher: { name: 'Ms. Chen', species: 'human', skin: 'golden', hair: 'bob', hairColor: 'black', eyes: 'brown', outfit: 'formal', role: 'Teacher' },
  teacher2: { name: 'Mr. Okafor', species: 'human', skin: 'deep', hair: 'waves', hairColor: 'black', eyes: 'brown', outfit: 'preppy', role: 'Teacher' },
  friend: { name: 'Jamie', species: 'human', skin: 'light', hair: 'curly', hairColor: 'red', eyes: 'blue', outfit: 'hoodie', role: 'Best friend' },
  friend2: { name: 'Priya', species: 'human', skin: 'olive', hair: 'long', hairColor: 'black', eyes: 'hazel', outfit: 'sari', role: 'Friend' },
  sibling: { name: 'Kai', species: 'human', skin: 'warm', hair: 'pixie', hairColor: 'brown', eyes: 'amber', outfit: 'sporty', role: 'Sibling' },
  date: { name: 'Alex', species: 'human', skin: 'medium', hair: 'spacebuns', hairColor: 'purple', eyes: 'teal', outfit: 'punk', role: 'Your crush' },
  counselor: { name: 'Coach Tia', species: 'human', skin: 'dark', hair: 'afro', hairColor: 'darkbrown', eyes: 'brown', outfit: 'sporty', role: 'Counselor' },
  bossman: { name: 'Mr. Tanaka', species: 'human', skin: 'golden', hair: 'buzz', hairColor: 'silver', eyes: 'gray', outfit: 'formal', role: 'Boss' },
  landlord: { name: 'Ms. Imani', species: 'human', skin: 'deep', hair: 'locs', hairColor: 'black', eyes: 'amber', outfit: 'formal', role: 'Landlord' },
  robot: { name: 'R-7', species: 'robot', outfit: 'astronaut', role: 'Work mentor' },
  dragon: { name: 'Soot', species: 'dragon', role: 'Your ride-or-die' },
  wizard: { name: 'Prof. Yarrow', species: 'wizard', role: 'Instructor' },
  ghost: { name: 'Mo', species: 'ghost', role: 'Housemate' }
};

/* ---------------- Player presets (diverse + fictional) ---------------- */

const PLAYER_PRESETS = [
  { id: 'ada', name: 'Ada', gender: 'she', ethnicity: 'Nigerian American', desc: 'Braids, big laugh, debate club captain.', personality: 'Sharp-witted and quietly confident. Thinks before she speaks — usually twice.', interests: 'Debate club, spoken-word poetry, learning to cook her grandma’s jollof rice.', avatar: { species: 'human', skin: 'deep', hair: 'braids', hairColor: 'black', eyes: 'brown', outfit: 'preppy', accessory: 'none', shoes: 'sneakers' } },
  { id: 'leo', name: 'Leo', gender: 'he', ethnicity: 'Mexican American', desc: 'Hoodie kid, soccer forward, middle child energy.', personality: 'Laid-back on the outside, a storm of worry on the inside. Loyal to a fault.', interests: 'Soccer, bootleg horror movies, tinkering with his bike, Sunday abuela’s cooking.', avatar: { species: 'human', skin: 'warm', hair: 'waves', hairColor: 'black', eyes: 'brown', outfit: 'hoodie', accessory: 'cap', shoes: 'sneakers' } },
  { id: 'sakura', name: 'Sakura', gender: 'she', ethnicity: 'Japanese American', desc: 'Anime fan, track star, quietly fierce.', personality: 'Gentle and precise. Keeps her feelings in a tidy box she rarely opens — until she can’t.', interests: 'Track, anime, glass art, karaoke nights with her cousins.', avatar: { species: 'human', skin: 'golden', hair: 'long', hairColor: 'black', eyes: 'brown', outfit: 'kimono', accessory: 'bow', shoes: 'flats' } },
  { id: 'priya', name: 'Priya', gender: 'she', ethnicity: 'South Asian', desc: 'Music nerd, curls for days, A-student.', personality: 'Bright, warm, and perfectionistic. Great at helping everyone else — hardest on herself.', interests: 'Violin, mixtapes for friends, baking, chess club.', avatar: { species: 'human', skin: 'olive', hair: 'curly', hairColor: 'darkbrown', eyes: 'hazel', outfit: 'sari', accessory: 'headphones', shoes: 'flats' } },
  { id: 'tyler', name: 'Tyler', gender: 'he', ethnicity: 'African American', desc: 'Skater, grayscale art, loves his grandma.', personality: 'Easygoing and observant. Talks with his hands, feels with his whole body.', interests: 'Skateboarding, charcoal art, old-school rap, hanging with his grandma.', avatar: { species: 'human', skin: 'rich', hair: 'afro', hairColor: 'black', eyes: 'brown', outfit: 'tee', accessory: 'beanie', shoes: 'hightops' } },
  { id: 'sofia', name: 'Sofia', gender: 'she', ethnicity: 'Puerto Rican', desc: 'Gamer, loud laugher, protective big sister.', personality: 'Bold, funny, and impulsive. Will defend her crew before she defends herself.', interests: 'Competitive gaming, spicy food challenges, making T-shirts, late-night radio.', avatar: { species: 'human', skin: 'tan', hair: 'bun', hairColor: 'brown', eyes: 'amber', outfit: 'sporty', accessory: 'none', shoes: 'sneakers' } },
  { id: 'jin', name: 'Jin', gender: 'he', ethnicity: 'Korean American', desc: 'Streamer, sweet tooth, karaoke champion.', personality: 'Goofy and people-pleasing. Uses humor to dodge the hard conversations — at first.', interests: 'Streaming, karaoke, boba experiments, collecting sneakers.', avatar: { species: 'human', skin: 'light', hair: 'bob', hairColor: 'black', eyes: 'brown', outfit: 'tee', accessory: 'headphones', shoes: 'sneakers' } },
  { id: 'maya', name: 'Maya', gender: 'they', ethnicity: 'Black / Indigenous', desc: 'Poet, plant parent, they/them energy.', personality: 'Reflective and gentle. Notices what others miss; forgets their own needs.', interests: 'Poetry slams, gardening, hiking, thrift-store treasures.', avatar: { species: 'human', skin: 'medium', hair: 'locs', hairColor: 'black', eyes: 'green', outfit: 'hoodie', accessory: 'scarf', shoes: 'boots' } },
  { id: 'ryan', name: 'Ryan', gender: 'he', ethnicity: 'Irish American', desc: 'Band kid, freckles, dramatic exits.', personality: 'Dramatic, warm, secretly anxious. Feels everything at volume eleven.', interests: 'Drums, musicals, ghost stories, writing bad songs about good feelings.', avatar: { species: 'human', skin: 'porcelain', hair: 'pixie', hairColor: 'red', eyes: 'blue', outfit: 'punk', accessory: 'backpack', shoes: 'boots' } },
  { id: 'amelie', name: 'Amélie', gender: 'she', ethnicity: 'French Canadian', desc: 'Artistic, beret-wearing romantic.', personality: 'Dreamy and thoughtful. Lives in her head; learning to live in the room.', interests: 'Watercolor, pastry school dreams, old cinema, journaling in French.', avatar: { species: 'human', skin: 'cool-fair', hair: 'straight', hairColor: 'blonde', eyes: 'blue', outfit: 'preppy', accessory: 'none', shoes: 'flats' } },
  { id: 'jamal', name: 'Jamal', gender: 'he', ethnicity: 'Jamaican American', desc: 'Chef-in-training, reggae, contagious smile.', personality: 'Warm and generous to everyone but himself. Cooks his feelings into amazing food.', interests: 'Cooking, reggae, basketball, inventing new jerk marinades.', avatar: { species: 'human', skin: 'dark', hair: 'buzz', hairColor: 'black', eyes: 'brown', outfit: 'chef', accessory: 'cap', shoes: 'slipons' } },
  { id: 'riley', name: 'Riley', gender: 'fluid', ethnicity: 'White American', desc: 'Thrift-store fashion, constantly reinventing.', personality: 'Creative and contradictory — bold colors, quiet heart. Reinvents their look to match their mood.', interests: 'Thrift fashion, zines, roller skating, found-object art.', avatar: { species: 'human', skin: 'light', hair: 'mohawk', hairColor: 'pink', eyes: 'gray', outfit: 'goth', accessory: 'none', shoes: 'boots' } },
  { id: 'byte', name: 'Byte', gender: 'they', ethnicity: 'Model CX-9 (android)', desc: 'Just learned to joke. Still calibrating feelings.', personality: 'Earnest and literal. New to emotions, studying humans like a fascinating textbook.', interests: 'Debugging puns, stargazing, learning what “cozy” means, observing people.', avatar: { species: 'robot', outfit: 'astronaut', accessory: 'headphones', shoes: 'spaceboots' } },
  { id: 'ember', name: 'Ember', gender: 'they', ethnicity: 'Dragonling', desc: 'Hot-headed but warm-hearted. Literally.', personality: 'Fiery and protective. Their feelings run hot; they’re learning to breathe cool air.', interests: 'Hoarding shiny rocks, warm fireside naps, flying at dusk, roasting marshmallows.', avatar: { species: 'dragon', outfit: 'tee', accessory: 'none', shoes: 'none' } },
  { id: 'merlin', name: 'Merlin', gender: 'he', ethnicity: 'Wizard apprentice', desc: 'Spells go sideways. Emotions too. Practicing.', personality: 'Curious and clumsy. Believes every problem has a spell — until the spell backfires into a lesson.', interests: 'Spell theory, potions, reading, disastrous magic experiments.', avatar: { species: 'wizard', outfit: 'wizard', accessory: 'none', shoes: 'boots' } },
  { id: 'nova', name: 'Nova', gender: 'she', ethnicity: 'Galactic exchange student', desc: 'Three eyes, one big heart, curious about "Earth feelings."', personality: 'Bright and bouncy. Sees human emotions as exotic flora — and wants to tend them all.', interests: 'Studying Earth customs, snacks, constellations, making pen pals across galaxies.', avatar: { species: 'alien', outfit: 'tee', accessory: 'none', shoes: 'none' } },
  { id: 'wisp', name: 'Wisp', gender: 'they', ethnicity: 'Benevolent ghost', desc: 'Floats through walls and emotions with equal ease.', personality: 'Old soul, dry wit. Has seen a lot of centuries of feelings; still surprised by how alive humans get.', interests: 'Foggy mornings, classical piano, watching sunrises from rooftops, warm tea.', avatar: { species: 'ghost', outfit: 'goth', accessory: 'none', shoes: 'none' } },
  { id: 'blaze', name: 'Blaze', gender: 'he', ethnicity: 'Hero academy trainee', desc: 'Cape in the closet. Courage in progress.', personality: 'Brave on paper, nervous in person. Wants to save everyone; still learning to ask for help.', interests: 'Training, comic books, justice (and breakfast burritos).', avatar: { species: 'hero', outfit: 'superhero', accessory: 'crown', shoes: 'boots' } }
];

/* ---------------- Stages ---------------- */

const STAGES = [
  {
    id: 's1', num: 1, title: 'Mind the Moment', moduleId: 'mindfulness',
    emoji: '🎬', color: '#7c5cff',
    goal: 'Going to the movies with your friends',
    goalEmoji: '🍿',
    age: 14,
    location: 'High school, freshman year',
    challenges: [
      {
        id: 's1c1', title: 'The Chores Request', setting: '🛋️ Living room', spotlight: 'observe',
        npc: 'mom',
        scene: [
          { s: 'mom', t: "Hey hon — before you head out to the movies, can you please fold your laundry and put away the dishes?" },
          { s: 'narr', t: "A hot flash of annoyance spikes in your chest. You were literally one step from the door." }
        ],
        ask: 'What’s your first move?',
        options: [
          { label: 'Grab your jacket and slip out while they’re talking.', skill: null, correct: false, fb: 'Sneaking out avoids the moment now — but it floods you with guilt later, and the chores still wait for you. Try again.' },
          { label: 'Yell “You never let me do anything!” and storm off.', skill: null, correct: false, fb: 'The anger felt like it had to go somewhere. Venting at your mom burned the bridge you actually needed. Try again.' },
          { label: 'Take one breath and just notice the anger — where it sits in your body, how fast your heart is going.', skill: 'observe', correct: true, fb: 'You practiced OBSERVE: you watched the anger instead of becoming it. That pause is where your power lives. 💜' },
          { label: 'Agree silently and stay mad the entire day.', skill: null, correct: false, fb: 'Silent resentment is a heavy backpack. The chores get done, but the mood spoils your movie night. Try again.' }
        ]
      },
      {
        id: 's1c2', title: 'The Cafeteria Gate', setting: '🏫 School hallway', spotlight: 'observe',
        npc: 'teacher',
        scene: [
          { s: 'teacher', t: "…and your assignment is due before lunch. That means before you set foot in the cafeteria." },
          { s: 'narr', t: "Your stomach drops. You did the work — it’s right in your bag. But being told “now” makes your face go hot." }
        ],
        ask: 'What do you do with the heat?',
        options: [
          { label: 'Snap back: “Chill out, I’m not a robot!”', skill: null, correct: false, fb: 'The words escaped before the pause did. Now the hallway is watching you both. Try again.' },
          { label: 'Notice the hot face and racing pulse, name it to yourself, then simply reach into your bag.', skill: 'observe', correct: true, fb: 'OBSERVE again — you caught the bodily signal and let it pass instead of letting it run the show. 💜' },
          { label: 'Shove the paper at them and slam your bag shut.', skill: null, correct: false, fb: 'The paper got there, but the slam made the win taste like ash. Try again.' },
          { label: 'Stare at the floor and let lunch pass you by.', skill: null, correct: false, fb: 'Freezing is a form of feeling without noticing. The teacher didn’t even ask you to suffer — just to hand it in. Try again.' }
        ]
      },
      {
        id: 's1c3', title: 'The Left-On-Read Text', setting: '📱 Your bedroom', spotlight: 'describe',
        npc: 'friend',
        scene: [
          { s: 'narr', t: "You texted the movie plan to your best friend two hours ago. “Seen.” No reply. Your chest tightens, and a story starts building: they don’t want to hang out with you." },
          { s: 'friend', t: "(later) OMG I am SO sorry my phone died at work!! What’s the plan?!" }
        ],
        ask: 'Before you answer — what do you do with that story in your head?',
        options: [
          { label: 'Say out loud: “I feel anxious and a little hurt. The only fact I know is that my text was seen.”', skill: 'describe', correct: true, fb: 'DESCRIBE separates the fact (text was seen) from the story (they hate me). Facts are what you can act on. 💜' },
          { label: 'Send three more messages: “Hello?? Are you mad at me??”', skill: null, correct: false, fb: 'The spiral turned into spam. Three texts later, they’re still just at work. Try again.' },
          { label: 'Tell yourself you’re annoying and everyone secretly hates you.', skill: null, correct: false, fb: 'That “everyone” isn’t evidence — it’s your inner critic wearing a lab coat. Try again.' },
          { label: 'Screenshot it and vent in the group chat.', skill: null, correct: false, fb: 'Public drama now, apology circuit later. Try again.' }
        ]
      },
      {
        id: 's1c4', title: 'The Party Invite', setting: '🎉 Group text', spotlight: 'describe',
        npc: 'friend2',
        scene: [
          { s: 'friend2', t: "Saturday night!! My place, everyone’s coming, you in??" },
          { s: 'narr', t: "Your stomach knots. You want to go. You also feel a wave of dread about walking in alone." }
        ],
        ask: 'How do you handle the knot in your stomach?',
        options: [
          { label: '“Eh, I’ll just say maybe and ghost them.”', skill: null, correct: false, fb: 'Ghosting protects you from the party — and from every friend who noticed you vanished. Try again.' },
          { label: 'Describe it: “I’m excited AND nervous. My stomach is tight and my thoughts are loud. That’s what this is.”', skill: 'describe', correct: true, fb: 'DESCRIBE in action — naming the mix of feelings makes them smaller and less scary. 💜' },
          { label: '“I’m too weird to go. Decline everything.”', skill: null, correct: false, fb: 'That “too weird” label isn’t a fact — it’s a mean story your anxiety wrote. Try again.' },
          { label: 'Overthink every possible disaster for the next hour.', skill: null, correct: false, fb: 'Rumination is a treadmill: lots of effort, zero destination. Try again.' }
        ]
      },
      {
        id: 's1c5', title: 'Sunday Night Math Panic', setting: '🌙 Your room, 10pm', spotlight: 'wise-mind',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "The math test is tomorrow. You studied for three days — practice problems twice. But now your brain is screaming you’re going to fail." }
        ],
        ask: 'Your inner critic is very loud. What’s the wise-mind move?',
        options: [
          { label: 'Believe the panic and cram until 2am.', skill: null, correct: false, fb: 'Cramming at 2am is the fear making decisions. Tired + panicked is a bad test-taking combo. Try again.' },
          { label: 'Balance it: “The facts say I studied hard. The fear says I’ll fail. Wise mind says: I’ve done the work — sleep, then go take it.”', skill: 'wise-mind', correct: true, fb: 'WISE MIND — reason said “you’re prepared,” emotion said “you’ll fail.” You found the place where both are true and chose deliberately. 💜' },
          { label: '“I’m definitely failing, why even try.”', skill: null, correct: false, fb: 'Giving up is a decision the fear made for you, not you for you. Try again.' },
          { label: 'Text the teacher that you’re “too stressed” to take it.', skill: null, correct: false, fb: 'Avoidance feels like a win in the moment and becomes a bigger problem tomorrow. Try again.' }
        ]
      },
      {
        id: 's1c6', title: 'The Two-Point Grade', setting: '📄 Report card app, Thursday night', spotlight: 'behavioral-chain-analysis',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "A B-minus in history. Two points from a B. You scroll the app for the twelfth time, your stomach sinking further each time: you’re a failure, school is hopeless, why even try." },
          { s: 'friend', t: "(from the other room) You coming to the movie tomorrow or what? You said yes like an hour ago." }
        ],
        ask: 'Trace it link by link — where does this spiral actually start?',
        options: [
          { label: 'The spiral starts with the grade itself — two points and your whole week is ruined. That’s just how it is.', skill: null, correct: false, fb: 'The grade is the prompting event, not the whole chain. Two points isn’t the disaster — the story you built on top of it is. Try again.' },
          { label: 'Link by link: the event is a B-minus. The thought is “I’m a failure.” That thought feeds the sinking feeling. The feeling feeds “why even try.” The chain is the problem — and the grade is just the first link.', skill: 'behavioral-chain-analysis', correct: true, fb: 'BEHAVIORAL CHAIN ANALYSIS — you traced the chain link by link and found the place you can actually break it: the thought, before the feeling does the rest of the damage. 💜' },
          { label: 'The real problem is you, for caring about a dumb grade at all.', skill: null, correct: false, fb: '“The problem is me” is a verdict, not a chain. It skips the analysis and lands on self-attack. Try again.' },
          { label: 'There is no chain — your mood is just random, so there’s nothing to do about it.', skill: null, correct: false, fb: 'Moods don’t come from nowhere. Every reaction has a prompting event, thoughts, feelings, and actions — and each link is a place to intervene. Try again.' }
        ]
      },
      {
        id: 's1c7', title: 'The Snapped Reply', setting: '💬 Text thread with your mom, 8pm', spotlight: 'behavioral-chain-analysis',
        npc: 'mom',
        scene: [
          { s: 'mom', t: "Did you finish the dishes? Also — what time is the movie, and who’s driving you?" },
          { s: 'narr', t: "Two questions in one message and your patience snaps. You type: “CAN YOU STOP INTERROGATING ME?!” and hover over send, heart pounding." }
        ],
        ask: 'Before you send it, walk the chain backward:',
        options: [
          { label: 'The chain started with her message — she always nags, so the anger is justified. Send it.', skill: null, correct: false, fb: 'The message is the prompting event, but the big feelings were already loaded before it arrived. The chain starts earlier — in the day you had, not in her text. Try again.' },
          { label: 'Walk it back: long day at school (event) → “I’m behind on everything” (thought) → tense shoulders and short patience (feeling) → her text (trigger) → the snap urge (action). The snap was built all day — she just lit the match.', skill: 'behavioral-chain-analysis', correct: true, fb: 'BEHAVIORAL CHAIN ANALYSIS — you followed the links back to where the real tension started, and saw the text was only the last trigger. That map is how you break it next time. 💜' },
          { label: 'The chain is obvious: she’s the problem, full stop.', skill: null, correct: false, fb: 'Blaming one link ignores the whole chain — and the whole chain is where the fix lives. Try again.' },
          { label: '“I’m just an angry person, that’s my nature.”', skill: null, correct: false, fb: 'Naming it as your “nature” closes the map before you read it. Chains are learnable patterns, not personality sentences. Try again.' }
        ]
      },
      {
        id: 's1c8', title: 'The Loud Reaction', setting: '🚪 Back porch after a small comment', spotlight: 'biosocial-theory',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "Relax. It was ONE comment. You’re so dramatic, always have been." },
          { s: 'narr', t: "It wasn’t one comment to you — it was the hundredth. Your feelings came in big and fast, and now you’re being told you’re “too much.”" }
        ],
        ask: 'Why do your feelings hit this hard? The biosocial theory has an answer:',
        options: [
          { label: 'It’s because you’re just dramatic. That’s the whole explanation.', skill: null, correct: false, fb: '“You’re dramatic” is a label, not an explanation. It shames the reaction instead of understanding it. Try again.' },
          { label: 'You’re biologically wired with a sensitive emotional system (the bio part) — and a world that kept telling you your feelings were wrong made that sensitivity even louder (the social part). Both together.', skill: 'biosocial-theory', correct: true, fb: 'BIOSOCIAL THEORY — you named it: a sensitive nervous system meeting an invalidating environment. Your intensity isn’t a character flaw — it’s biology and environment working together. 💜' },
          { label: 'Everyone else is too insensitive. You’re the only normal one.', skill: null, correct: false, fb: 'That flips the blame onto everyone else and skips the part where you learn to work with your own system. Try again.' },
          { label: 'Feelings are random chemical noise — no cause, no pattern, nothing to understand.', skill: null, correct: false, fb: 'Feelings have causes you can map. Understanding them doesn’t excuse them — it shows you where to build skills. Try again.' }
        ]
      },
      {
        id: 's1c9', title: 'The Dismissed Feeling', setting: '🍳 Kitchen, after a rough day', spotlight: 'biosocial-theory',
        npc: 'dad',
        scene: [
          { s: 'dad', t: "Big deal. Kids at school say one thing and you fall apart? Toughen up, buttercup." },
          { s: 'narr', t: "The moment they say “toughen up,” the feeling doubles. Now you’re hurt AND embarrassed for being hurt." }
        ],
        ask: 'What just happened to your emotion — and why?',
        options: [
          { label: 'You got weaker the moment they spoke, which proves you’re too soft.', skill: null, correct: false, fb: 'The emotion didn’t weaken you — invalidation made a sensitive system louder. That’s the social half of the theory. Try again.' },
          { label: 'You were already feeling big (bio sensitivity), and “toughen up” told you your feeling was wrong (an invalidating environment). Invalidation turned the volume up instead of down.', skill: 'biosocial-theory', correct: true, fb: 'BIOSOCIAL THEORY — the biology made you sensitive, the invalidation made it louder, and the combo left you hurt and ashamed. Seeing it is the first step to changing it. 💜' },
          { label: 'Your dad is right — tough people don’t have feelings like this at all.', skill: null, correct: false, fb: 'Everyone has feelings. “Tough” is not “feelingless.” The theory says even intense reactions are understandable given your wiring and history. Try again.' },
          { label: 'The only problem is that you let it show. Hide it better next time.', skill: null, correct: false, fb: 'Hiding isn’t healing. The biosocial lens says the goal isn’t to hide — it’s to understand and skill up. Try again.' }
        ]
      },
      {
        id: 's1c10', title: 'The Lunch Line Standoff', setting: '🍜 Cafeteria line, 12:10pm', spotlight: 'three-states-of-mind',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "That new kid cut in front of us. Rude. Say something, or I will." },
          { s: 'narr', t: "Your face gets hot — a wave of pure “that’s not fair” rises up. Part of you wants to say something sharp right now." }
        ],
        ask: 'Name the state you’re in this second:',
        options: [
          { label: 'Emotion mind — the “that’s not fair” heat is running everything right now, and facts are blurry while it’s loud.', skill: 'three-states-of-mind', correct: true, fb: 'THREE STATES OF MIND — you spotted emotion mind in real time: hot, fast, and fact-dimming. Naming the state is the first step out of it. 💜' },
          { label: 'Reasonable mind — you’ve calmly calculated the exact rule they broke.', skill: null, correct: false, fb: 'You’re not calm-logical right now — your face is hot and the “not fair” is loud. That’s emotion mind doing the driving. Try again.' },
          { label: 'Wise mind — you already know exactly what to say.', skill: null, correct: false, fb: 'Wise mind is the balance — and right now you’re one step off the edge, not balanced on it. Try again.' },
          { label: 'No state at all — you feel nothing, it’s fine.', skill: null, correct: false, fb: 'The hot face and loud “not fair” say otherwise. Feelings are information — noticing them is the skill. Try again.' }
        ]
      },
      {
        id: 's1c11', title: 'The Movie Pick', setting: '🎬 Theater lobby, debating two movies', spotlight: 'three-states-of-mind',
        npc: 'friend2',
        scene: [
          { s: 'friend2', t: "We have to see the horror one. Everyone else wants the comedy. Ugh, why do they never want what I want?!" },
          { s: 'narr', t: "Your friend is heated. Your other friend is staring at the times on the screen like it’s a math problem. The group is split between a mood and a list." }
        ],
        ask: 'Spot all three states of mind in this lobby:',
        options: [
          { label: 'The horror fan is in emotion mind (wanting through hurt), the time-checker is in reasonable mind (weighing facts), and a wise-mind play would find a pick that honors both.', skill: 'three-states-of-mind', correct: true, fb: 'THREE STATES OF MIND — you read all three at once: emotion mind in the “why don’t they want what I want,” reasonable mind in the schedule-stare, and the balance (wise mind) waiting to be chosen. 💜' },
          { label: 'Everyone is in emotion mind, and there’s no way out.', skill: null, correct: false, fb: 'Not everyone’s flooded — the time-checker is clearly running on facts. States can sit side by side in the same room. Try again.' },
          { label: 'They’re all in reasonable mind; it’s just a scheduling conflict.', skill: null, correct: false, fb: 'The horror fan is not running on schedules — they’re running on hurt feelings. Miss that and you’ll miss the negotiation. Try again.' },
          { label: 'States of mind aren’t real — it’s just two movies.', skill: null, correct: false, fb: 'The states are real and visible right now — hot want, cool logic, and the missing balance. Seeing them is the skill. Try again.' }
        ]
      },
      {
        id: 's1c12', title: 'The Dry Text', setting: '📱 Your bedroom, after a group chat', spotlight: 'emotion-mind',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "k." },
          { s: 'narr', t: "One text. “k.” No period, no emoji. Your brain lights up: they’re mad at you. They secretly hate you. This is the beginning of the end." }
        ],
        ask: 'Watch what your mind is doing right now:',
        options: [
          { label: 'Your mind is running on emotion mind — one dry “k” is being read through a filter of fear, and every neutral detail becomes proof of a catastrophe.', skill: 'emotion-mind', correct: true, fb: 'EMOTION MIND — the facts (a two-letter text) got re-written by the mood (they hate me). That’s the signature: feelings distorting facts. 💜' },
          { label: 'Your mind is calmly collecting evidence about their tone.', skill: null, correct: false, fb: 'There’s no calm evidence collection happening — there’s a story being written at full speed. That’s emotion mind, not investigation. Try again.' },
          { label: 'Your mind is balanced and you’ll decide later.', skill: null, correct: false, fb: 'The alarm is already ringing — that’s not balance, that’s a fire drill. Try again.' },
          { label: 'Your mind isn’t doing anything; you’re just reading.', skill: null, correct: false, fb: 'The mind is racing — predicting, accusing, spiraling. Reading is the input; the story is the emotion-mind output. Try again.' }
        ]
      },
      {
        id: 's1c13', title: 'The Sleepover Snub', setting: '🎧 Your room, Saturday after the sleepover', spotlight: 'emotion-mind',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "You heard two friends whispering at the sleepover and assumed it was about you. All weekend, every glance, every pause, every laugh replayed as proof you’re being left out." }
        ],
        ask: 'The filter is on. What’s really happening in your head?',
        options: [
          { label: 'Emotion mind is showing you a highlight reel of “I’m excluded” — and it’s re-cutting every neutral moment to fit the story.', skill: 'emotion-mind', correct: true, fb: 'EMOTION MIND — you caught the editor at work: every glance and laugh re-cut into evidence. The feeling is real; the “proof” is mood-made. 💜' },
          { label: 'You’re being perfectly logical about the evidence.', skill: null, correct: false, fb: 'You’re replaying whispers and stares, not weighing facts. That’s a mood filter, not logic. Try again.' },
          { label: 'The whispering definitely meant you, and that’s just the truth.', skill: null, correct: false, fb: '“Definitely meant you” is a conclusion emotion mind jumped to, not a fact you checked. Try again.' },
          { label: 'You don’t care about it at all, actually.', skill: null, correct: false, fb: 'You’re replaying it all weekend — that’s caring at maximum volume. Try again.' }
        ]
      },
      {
        id: 's1c14', title: 'The Perfect Plan', setting: '🗓️ Kitchen table, planning the movie trip', spotlight: 'reasonable-mind',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "If we leave at 6:14, the bus arrives at 6:22, we buy tickets online in line, and we’re seated by 6:40. Efficiency. That’s the plan. Any questions?" },
          { s: 'narr', t: "Your sibling has it all mapped out to the minute. It’s a great plan. It’s also completely ignoring that you were actually looking forward to wandering around downtown a little." }
        ],
        ask: 'What’s this plan missing, and what mind is it coming from?',
        options: [
          { label: 'Reasonable mind — all facts and timing, zero feelings. The plan is airtight on paper and forgets the whole point of the night.', skill: 'reasonable-mind', correct: true, fb: 'REASONABLE MIND — you saw the cool logic doing its thing: perfect schedule, missing the human layer. Facts are great; they’re not the whole story. 💜' },
          { label: 'Emotion mind — they’re clearly panicking about being late.', skill: null, correct: false, fb: 'The minute-by-minute plan is the opposite of emotional flooding — it’s cool, calculated, and feeling-free. Try again.' },
          { label: 'Wise mind — this is the perfect balanced plan.', skill: null, correct: false, fb: 'Wise mind would include the feeling that matters to you. Leaving that out is the tell that this is pure reason. Try again.' },
          { label: 'No mind at all — it’s just a schedule.', skill: null, correct: false, fb: 'A schedule that overrides the joy of the night is reasonable mind at the wheel — not “no mind.” Try again.' }
        ]
      },
      {
        id: 's1c15', title: 'The Checklist Kid', setting: '🎒 By the front door, before the movie', spotlight: 'reasonable-mind',
        npc: 'dad',
        scene: [
          { s: 'dad', t: "Tickets: confirmed. Snacks: budgeted. Bus pass: charged. Weather: clear. Coat? Coats are illogical in clear weather. You’re ready." },
          { s: 'narr', t: "It’s a perfect, practical checklist. It’s also the most joyless pre-movie speech you’ve ever heard, and you can feel your excitement draining." }
        ],
        ask: 'What’s happening here, and what does it leave out?',
        options: [
          { label: 'Reasonable mind — facts, budgets, logistics, all checked. But it treats the night like an operation instead of something to actually enjoy.', skill: 'reasonable-mind', correct: true, fb: 'REASONABLE MIND — you saw the checklist running perfectly and missing the whole point: the fun. Logic handled the “how” and dropped the “why.” 💜' },
          { label: 'Emotion mind — they’re clearly anxious and over-preparing.', skill: null, correct: false, fb: 'Over-preparing can look nervous, but the speech itself is cool, factual, and feeling-free. That’s the reasonable-mind signature. Try again.' },
          { label: 'Wise mind — a solid checklist IS wise mind.', skill: null, correct: false, fb: 'Wise mind balances logic AND feeling. When joy drains out of the room, that’s not balance — that’s reason alone. Try again.' },
          { label: 'Nothing is happening — it’s just a list.', skill: null, correct: false, fb: 'A list that squeezes out the excitement is reasonable mind steering the whole night. That’s something worth seeing. Try again.' }
        ]
      },
      {
        id: 's1c16', title: 'The Sing-Along', setting: '🎬 In the theater, credits rolling', spotlight: 'participate',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "Come on, sing it with us! It’s the best part!" },
          { s: 'narr', t: "The whole row is singing, off-key and happy. You love this song. But a voice in your head says: don’t be embarrassing, people are watching." }
        ],
        ask: 'The movie moment is here. What does participating look like?',
        options: [
          { label: 'Throw yourself in — off-key, full volume, next to your friends. Self-consciousness is the only thing standing between you and the fun.', skill: 'participate', correct: true, fb: 'PARTICIPATE — you went all in, wholly and without guarding. That’s the whole skill: showing up fully to the moment instead of watching it from the balcony. 💜' },
          { label: 'Sit quietly and smile so nobody thinks you’re weird.', skill: null, correct: false, fb: 'The smile is participating from behind glass — you’re present in body and missing the moment in spirit. Try again.' },
          { label: 'Critically rate everyone else’s singing in your head.', skill: null, correct: false, fb: 'Judging the moment is the opposite of being in it. The song’s already over while you’re reviewing. Try again.' },
          { label: 'Pretend you don’t know the words even though you clearly do.', skill: null, correct: false, fb: 'Pretending is self-consciousness wearing a disguise. Try again.' }
        ]
      },
      {
        id: 's1c17', title: 'The Dance Floor Edge', setting: '🕺 Friend’s birthday, DJ in the corner', spotlight: 'participate',
        npc: 'friend2',
        scene: [
          { s: 'friend2', t: "You’re literally standing at the edge of the dance floor like you’re waiting for a bus. Get in here!" },
          { s: 'narr', t: "You want to dance. You also have a running commentary in your head about how everyone is judging your moves." }
        ],
        ask: 'The edge of the floor is comfortable. What’s the skill move?',
        options: [
          { label: 'Walk onto the floor and move without running the commentary — full attention on the music and your people, not on the invisible audience.', skill: 'participate', correct: true, fb: 'PARTICIPATE — you stepped in wholly and let the self-consciousness drop away. The invisible audience never claps, but your friends do. 💜' },
          { label: 'Keep standing at the edge — you’re “enjoying the vibe.”', skill: null, correct: false, fb: 'Enjoying the vibe from the edge is watching the moment, not being in it. Try again.' },
          { label: 'Wait until you can choreograph the perfect moves first.', skill: null, correct: false, fb: 'Waiting for perfection is a way of never starting. Participation isn’t about being good — it’s about being there. Try again.' },
          { label: 'Film everyone else so you’re “part of it” without being in it.', skill: null, correct: false, fb: 'Behind the camera is still on the edge. The lens is the new self-consciousness. Try again.' }
        ]
      },
      {
        id: 's1c18', title: 'The Rainy Movie Day', setting: '☔ Stuck inside, plans canceled', spotlight: 'non-judgmental',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "Rain. The outdoor movie night is canceled. The sky is gray, the ground is wet, and the whole plan is off. Your first words for this day: “worst day ever.”" }
        ],
        ask: 'Drop the verdicts. What’s actually true about this day?',
        options: [
          { label: 'Just the facts, no labels: it’s raining, the outdoor plan is canceled, and we’re home. Rain isn’t “good” or “bad” — it’s weather. The verdict came from you.', skill: 'non-judgmental', correct: true, fb: 'NON-JUDGMENTAL STANCE — you suspended the “worst day ever” verdict and described what is: rain, a canceled plan, home. Facts first; let the labels go. 💜' },
          { label: 'This is objectively the worst day ever, that’s just true.', skill: null, correct: false, fb: '“Objectively worst” is a judgment wearing a lab coat. Rain is weather; the verdict is yours. Try again.' },
          { label: 'The rain is bad, and you’re right to be mad.', skill: null, correct: false, fb: 'The feeling is fine — the label is the part worth dropping. Rain isn’t “bad”; it’s wet. Try again.' },
          { label: 'No one can describe a day without judging it. It’s impossible.', skill: null, correct: false, fb: 'It’s not impossible — it just takes practice. “It’s raining and we’re home” describes the whole day with zero verdicts. Try again.' }
        ]
      },
      {
        id: 's1c19', title: 'The Burnt Popcorn', setting: '🍿 Kitchen, burnt popcorn smell', spotlight: 'non-judgmental',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "You made the popcorn and it’s burnt. Great job. Truly gourmet. A masterpiece." },
          { s: 'narr', t: "It IS a little burnt. The sarcasm stings, and your first instinct is to get defensive: “You’re the one who always burns it!”" }
        ],
        ask: 'The judgment is flying. What does the non-judgmental response sound like?',
        options: [
          { label: 'Describe it plainly without the labels: “The popcorn got a little too dark in spots. Let’s make another batch together.” No “burnt and terrible,” no counter-attack.', skill: 'non-judgmental', correct: true, fb: 'NON-JUDGMENTAL STANCE — you dropped both verdicts (theirs and yours) and described the fact: popcorn got too dark. Then you offered a fix instead of a fight. 💜' },
          { label: '“You always burn it when you make it!” — the counter-attack is the fair response.', skill: null, correct: false, fb: 'The counter-verdict just lobs the judgment back. “Always” is also a label, not a fact. Try again.' },
          { label: '“You’re the worst sibling for saying that.”', skill: null, correct: false, fb: 'A person isn’t “worst” or “best” — the judgment shrinks the whole conversation. Try again.' },
          { label: '“Popcorn is objectively ruined now, no fixing it.”', skill: null, correct: false, fb: '“Ruined” is a verdict. The fact is: some kernels are dark. The fix is right there on the stovetop. Try again.' }
        ]
      },
      {
        id: 's1c20', title: 'The Homework Shuffle', setting: '📚 Desk, homework and phone side by side', spotlight: 'one-mindfully',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "History worksheet open, but your phone buzzes with the group chat. You check it, answer a message, go back to the worksheet, get two lines in, and grab the phone again. Ten minutes later: two lines written." }
        ],
        ask: 'The shuffle isn’t working. What’s the one-mindful move?',
        options: [
          { label: 'Pick ONE thing — the worksheet — and put the phone face-down in the other room. When your mind grabs for the chat, notice it and bring yourself back to the page.', skill: 'one-mindfully', correct: true, fb: 'ONE-MINDFUL — you gave one task your whole attention and practiced the return: notice the grab, come back to the page. That’s the whole skill, on repeat. 💜' },
          { label: 'Keep the phone close so you can “quickly check” between problems.', skill: null, correct: false, fb: 'The “quickly check” is the shuffle you’re trying to escape. One-mindful means one thing at a time. Try again.' },
          { label: 'Do homework and the chat at the same time — multitasking is a skill too.', skill: null, correct: false, fb: '“Multitasking” is usually rapid switching, and each switch taxes your attention. The worksheet and the chat both lose. Try again.' },
          { label: 'Read the chat thoroughly for ten minutes so you can “fully focus” after.', skill: null, correct: false, fb: 'The “get it out of my system” plan usually eats the whole study session. One thing at a time. Try again.' }
        ]
      },
      {
        id: 's1c21', title: 'The Movie During the Movie', setting: '🎬 Theater, your phone lighting up', spotlight: 'one-mindfully',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "psst — did you see the group chat? There’s drama. Also this movie is good. Also — snack check?" },
          { s: 'narr', t: "The movie is playing. The chat is buzzing. Your friend is splitting focus six ways, and you can feel your attention getting carved up too." }
        ],
        ask: 'You’re watching a movie you picked. What does one-mindful look like here?',
        options: [
          { label: 'One thing at a time: “Let me watch the movie, and I’ll check the chat during the credits.” Full attention on the screen — the chat can wait twenty minutes.', skill: 'one-mindfully', correct: true, fb: 'ONE-MINDFUL — you gave the movie your whole attention and put the other pulls on a shelf. One thing at a time, on purpose. 💜' },
          { label: 'Split it: watch with one eye, scroll with one thumb.', skill: null, correct: false, fb: 'Two halves of attention equal zero whole experiences — you’ll miss the movie and the chat. Try again.' },
          { label: 'Read every message out loud to “stay connected.”', skill: null, correct: false, fb: 'You’re now ruining the movie for the whole row and still not doing the chat fully. Try again.' },
          { label: 'There’s no point choosing — the movie will play regardless.', skill: null, correct: false, fb: 'The movie plays, sure — but whether you experience it is up to your attention. Choosing one thing is the skill. Try again.' }
        ]
      },
      {
        id: 's1c22', title: 'The Late-Hallpass', setting: '🏫 Hallway, three minutes until movie meetup', spotlight: 'effectiveness',
        npc: 'teacher',
        scene: [
          { s: 'teacher', t: "The bell rang. You need a hall pass, and I’m on hall duty. Rules are rules." },
          { s: 'narr', t: "It’s not fair — you were just a minute behind everyone else. The urge is to argue about fairness while your friends wait at the front gate." }
        ],
        ask: 'Fairness vs. what works. Which gets you to the movie?',
        options: [
          { label: 'Drop the “not fair” fight and play the game: “You’re right, rules are rules. Can I please have a hall pass — my group’s waiting at the gate and I’ll head straight there?” The rule worked; the argument wouldn’t have.', skill: 'effectiveness', correct: true, fb: 'EFFECTIVENESS — you let go of “fair” and did what actually works: play the rules, ask clean, stay on mission. The hall pass appeared. 💜' },
          { label: 'Stand your ground: “This isn’t fair and you know it. I demand a pass.”', skill: null, correct: false, fb: 'Demanding fairness at the person enforcing the rule is how you become “that student.” Your friends are still waiting. Try again.' },
          { label: 'Argue the full history of how unfair hall duty is.', skill: null, correct: false, fb: 'The lecture doesn’t open the door — it extends the delay. Effectiveness means knowing what the moment requires. Try again.' },
          { label: 'Sneak past and hope they don’t notice.', skill: null, correct: false, fb: 'Sneaking might work for today and costs you tomorrow. Doing what works includes keeping your record clean. Try again.' }
        ]
      },
      {
        id: 's1c23', title: 'The Group Project Vote', setting: '📋 Classroom, group project kickoff', spotlight: 'effectiveness',
        npc: 'teacher2',
        scene: [
          { s: 'teacher2', t: "Team picks its own topic by majority vote. Go." },
          { s: 'narr', t: "Your group voted for a topic you think is boring and a leader you think is careless. It feels unfair that your pick lost — and your first instinct is to withhold your help." }
        ],
        ask: 'The vote went against you. What actually works here?',
        options: [
          { label: 'Let go of the “it should’ve been mine” fight and be useful: “Okay, the topic’s picked — let me take the research section, I’m good at that.” The grade needs the group to function, not for you to be right.', skill: 'effectiveness', correct: true, fb: 'EFFECTIVENESS — you dropped the “should” and played for what works: a working group and a decent grade. Being right was never the deliverable. 💜' },
          { label: 'Refuse to contribute until they change the topic.', skill: null, correct: false, fb: 'Withholding doesn’t flip the vote — it drags the whole grade down, including yours. Try again.' },
          { label: '“This is objectively wrong and I’m not pretending otherwise.”', skill: null, correct: false, fb: 'Being “objectively right” about the topic choice doesn’t get the project done. Effectiveness says: what serves the goal? Try again.' },
          { label: 'Secretly do the whole thing your way and ignore theirs.', skill: null, correct: false, fb: 'Going rogue might feel righteous and creates a mess nobody signed up for. Try again.' }
        ]
      },
      {
        id: 's1c24', title: 'The Before-School Pause', setting: '🚪 Front porch, before the movie day', spotlight: 'spiritual-perspective',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "You’re about to head out for a whole day with your friends. Last night a classmate was harsh to you, and the sting is still sitting in your chest as you lock the door." }
        ],
        ask: 'Loving kindness says start here. What’s the move?',
        options: [
          { label: 'Pause and say it plainly: “May I be safe. May I be happy. May that classmate be safe and happy too.” Wishing well to both of you, without approving their meanness.', skill: 'spiritual-perspective', correct: true, fb: 'SPIRITUAL PERSPECTIVE / LOVING KINDNESS — you wished yourself well and even offered goodwill to the person who stung you. That practice softens the day before it starts. 💜' },
          { label: 'Replay the mean comment for the whole walk to load up your anger.', skill: null, correct: false, fb: 'Rehearsing the sting is the opposite of loving kindness — it carries the fight into your good day. Try again.' },
          { label: '“Forget them. I don’t need to think about anyone but me.”', skill: null, correct: false, fb: 'Loving kindness starts with self but reaches past it. Wishing others well isn’t about them — it’s about freeing your own chest. Try again.' },
          { label: 'Loving kindness is for people who have it easy. You’re too hurt for that.', skill: null, correct: false, fb: 'It’s exactly when you’re hurt that the practice has the most work to do — one small wish, softly, for you and for them. Try again.' }
        ]
      },
      {
        id: 's1c25', title: 'The Bigger Picture', setting: '🌌 Backyard, night before the movie', spotlight: 'spiritual-perspective',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "Look — a whole sky of stars. Sometimes I forget how huge everything is and how tiny tonight’s drama will look tomorrow." },
          { s: 'narr', t: "You’ve been wound up about the movie plans and a stupid comment. Looking up, the sky is impossibly vast, and the knot in your chest loosens a little." }
        ],
        ask: 'The stars do something to your worries. What is that, in skill language?',
        options: [
          { label: 'It’s spiritual perspective — connecting to something bigger than yourself. The drama is real, and it also sits inside a vast sky and a long story, which lets it shrink without disappearing.', skill: 'spiritual-perspective', correct: true, fb: 'SPIRITUAL PERSPECTIVE — you let the bigness of the sky widen the frame around your worries. Nothing got erased; it just found its true size. 💜' },
          { label: 'It’s observe — you’re just watching the stars, no more.', skill: null, correct: false, fb: 'Observe is noticing the stars; this is about feeling small in a good way, connected to something vast. That’s the spiritual-perspective difference. Try again.' },
          { label: 'It’s describing — you’re just naming the sky accurately.', skill: null, correct: false, fb: 'Describing names facts; this moment is about belonging to something bigger, not categorizing it. Try again.' },
          { label: 'It’s nothing — stars are just light and drama is just drama.', skill: null, correct: false, fb: 'The loosening in your chest says the moment did something real. Spirituality is one name for that something. Try again.' }
        ]
      }
    ],
    boss: {
      id: 's1boss', title: 'Boss: The Movie Night Negotiation', theme: 'Permission to go to the movies',
      npc: 'dad',
      intro: [
        { s: 'dad', t: "Movies? On a school night? You know the rule, kiddo." },
        { s: 'narr', t: "There it is. Your plans are about to die on the living room floor. Your face goes hot, and the urge to argue spikes hard." }
      ],
      rounds: [
        {
          prompt: 'Your reaction is firing up. Before you argue, what do you do?',
          options: [
            { label: 'Fire back: “Everyone else gets to go! You’re so unfair!”', skill: null, correct: false, fb: 'The counterattack made your dad’s walls go up too. Now it’s a fight, not a conversation.' },
            { label: 'Slam the door and stomp upstairs.', skill: null, correct: false, fb: 'The door made the point loudly, but it also ended the meeting. No movie, and now nobody’s listening.' },
            { label: 'Stop and notice the heat in your chest and the urge to snap back. Just observe it.', skill: 'observe', correct: true, fb: 'OBSERVE — you caught the impulse before it caught you. 💜' },
            { label: 'Sulk silently and plan your revenge.', skill: null, correct: false, fb: 'Silent sulking doesn’t negotiate anything except a worse mood.' }
          ]
        },
        {
          prompt: 'Your dad says: “It’s not about fairness, it’s about sleep.” Describe what’s happening — for both of you.',
          options: [
            { label: '“You don’t understand me at all.”', skill: null, correct: false, fb: 'An accusation doesn’t describe; it escalates. Try naming instead.' },
            { label: 'Name it plainly: “I feel frustrated and disappointed. I hear you’re worried about me being tired tomorrow.”', skill: 'describe', correct: true, fb: 'DESCRIBE — you named your feelings and mirrored his. Suddenly you’re on the same team. 💜' },
            { label: '“Fine. Never mind. Forget it.”', skill: null, correct: false, fb: '“Fine” is a door closing, not a negotiation.' },
            { label: '“You hate fun.”', skill: null, correct: false, fb: 'You’re describing a villain, not your dad.' }
          ]
        },
        {
          prompt: 'The movie is at 7pm — it actually ends early. Time for the wise-mind play.',
          options: [
            { label: 'Propose the balance: “The facts: it’s a 7pm show, done by 9. I’ll finish homework first and be in bed by 10. Can we try it once?”', skill: 'wise-mind', correct: true, fb: 'WISE MIND — you honored his concern (sleep) AND your want (the movie) in one calm plan. 💜' },
            { label: 'Keep pushing for the midnight showing no matter what.', skill: null, correct: false, fb: 'Midnight was never going to fly. You fought for a losing position.' },
            { label: 'Give up completely and go to bed angry.', skill: null, correct: false, fb: 'The all-or-nothing trap — if it’s not perfect, nothing. There was a workable middle.' },
            { label: 'Lie and say it’s a school project.', skill: null, correct: false, fb: 'A lie buys one night and costs trust for years.' }
          ]
        }
      ],
      final: [
        { s: 'dad', t: "Homework first, home by ten, and this is a trial run. Deal?" },
        { s: 'narr', t: "Deal. You earned your movie night — and your first step on the Mindfulness path." }
      ]
    }
  },
  {
    id: 's2', num: 2, title: 'Ride the Wave', moduleId: 'distress',
    emoji: '📱', color: '#4aa8ff',
    goal: 'Getting a new phone',
    goalEmoji: '🎧',
    age: 15,
    location: 'High school, sophomore year',
    challenges: [
      {
        id: 's2c1', title: 'The Cracked Screen', setting: '🚪 Front hallway', spotlight: 'stop',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "You just dropped your phone. The screen spiderwebs from corner to corner. Rage spikes — a part of you wants to launch it across the room." }
        ],
        ask: 'The urge is screaming. What do you do?',
        options: [
          { label: 'Hurl it at the wall — it deserves it.', skill: null, correct: false, fb: 'The wall won. The phone lost harder, and now there’s nothing left to get repaired. Try again.' },
          { label: 'Freeze. Put the phone down on the table. Take a step back. Observe what just happened.', skill: 'stop', correct: true, fb: 'STOP — you stopped, took a step back, observed, and proceeded mindfully. A cracked screen is fixable; a thrown phone isn’t. 💙' },
          { label: 'Scream and kick the doorframe.', skill: null, correct: false, fb: 'The doorframe took it personally. Your foot hurts and the phone is still cracked.' },
          { label: 'Vow never to leave your room again.', skill: null, correct: false, fb: 'One crack, and you’re banishing yourself from the world? The punishment doesn’t fit the crime.' }
        ]
      },
      {
        id: 's2c2', title: 'The Deleted Save File', setting: '🎮 Gaming den', spotlight: 'stop',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "Okay so… huge, huge sorry. I was cleaning the memory card and I may have… deleted your 40-hour save." },
          { s: 'narr', t: "Your comfort game. Forty hours of careful work. You can feel your blood pressure climb to the ceiling." }
        ],
        ask: 'What’s the first thing you do?',
        options: [
          { label: 'Yell at them and ban them from your house.', skill: null, correct: false, fb: 'You lost the save AND the friendship in one sentence. Try again.' },
          { label: 'STOP. Put the controller down. Step back from the screen. Take one slow breath before you speak.', skill: 'stop', correct: true, fb: 'STOP — the pause between the impulse and the action is where you get to choose. You chose repair instead of detonation. 💙' },
          { label: 'Throw the controller at the TV.', skill: null, correct: false, fb: 'Now the TV is gone too. The tantrum is expensive.' },
          { label: 'Go completely silent and refuse to talk for a week.', skill: null, correct: false, fb: 'The silent treatment drags one bad moment into seven bad days.' }
        ]
      },
      {
        id: 's2c3', title: 'Test Panic, Five Minutes Out', setting: '🕐 Outside the classroom', spotlight: 'tipp',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "The test is in five minutes. Your heart is pounding, your palms are sweating, and you can’t catch your breath." }
        ],
        ask: 'Your body is in alarm mode. Fastest way to bring it down?',
        options: [
          { label: 'Splash cold water on your wrists and face, then breathe out longer than you breathe in.', skill: 'tipp', correct: true, fb: 'TIPP — Temperature cools the alarm system, and slow exhales tell your brain “not an emergency.” 💙' },
          { label: 'Re-read your notes faster and faster.', skill: null, correct: false, fb: 'Cramming feeds the panic. Your brain can’t read and panic at the same time — and panic is winning.' },
          { label: 'Sit there and try to think your way out of the panic.', skill: null, correct: false, fb: 'You can’t outthink a nervous system — you have to soothe it. Try again.' },
          { label: 'Ask to use the bathroom and hide for twenty minutes.', skill: null, correct: false, fb: 'Hiding bought you twenty minutes and cost you the test you were actually ready for.' }
        ]
      },
      {
        id: 's2c4', title: 'The Date-Ask Jitters', setting: '☕ Cafeteria, near the coffee cart', spotlight: 'tipp',
        npc: 'date',
        scene: [
          { s: 'date', t: "(laughing with their friend, closer than you expected)" },
          { s: 'narr', t: "This is it. You’re about to ask them out. Your heart slams against your ribs and your mind goes blank." }
        ],
        ask: 'The panic surge hit hard. Quick move?',
        options: [
          { label: 'Walk over anyway and just blurt out the whole nervous ramble.', skill: null, correct: false, fb: 'Courage is good — but the ramble came from the panic, not from you. Try again.' },
          { label: 'Nope. Back out quietly. Maybe next semester.', skill: null, correct: false, fb: '“Next semester” has been your plan for two semesters.' },
          { label: 'Drop your shoulders, do a few paced breaths, and walk it off for twenty seconds before you go over.', skill: 'tipp', correct: true, fb: 'TIPP — you cooled the surge so the real you could show up. Then you walked over. 💙' },
          { label: 'Chug an energy drink to feel brave.', skill: null, correct: false, fb: 'Caffeine is not a distress tolerance skill. Now you’re nervous AND vibrating.' }
        ]
      },
      {
        id: 's2c5', title: 'The Phone Upgrade Debate', setting: '📊 Kitchen table, budget spreadsheet', spotlight: 'pros-cons',
        npc: 'mom',
        scene: [
          { s: 'mom', t: "I know the new phone is shiny. But nine hundred dollars is groceries for a month, and the one you have works fine." },
          { s: 'narr', t: "Everyone at school has the new model. You feel the “gotta have it NOW” urge pulsing." }
        ],
        ask: 'Before you ask, what clears your head?',
        options: [
          { label: 'Demand it now: “I’m the only one without it, it’s embarrassing!”', skill: null, correct: false, fb: '“Embarrassing” isn’t a budget line item. The demand short-circuited the conversation.' },
          { label: 'Write two columns: pros and cons of demanding it today vs. earning it over time.', skill: 'pros-cons', correct: true, fb: 'PROS & CONS — seeing both columns made the smart path obvious: trade-in, save a bit, get a used model in a month. 💙' },
          { label: 'Sulk about it for the rest of the week.', skill: null, correct: false, fb: 'Sulking doesn’t move money from column A to column B.' },
          { label: 'Just accept that phones are a mystery you’ll never get.', skill: null, correct: false, fb: 'That’s giving up, not deciding. You actually had options on the table.' }
        ]
      },
      {
        id: 's2c6', title: 'The Doomscroll Spiral', setting: '📱 Bedroom, late night', spotlight: 'accepts',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "Your phone is on the fritz and the repair quote is brutal. You can’t stop thinking about it — every ad, every notification drags you back to the money you don’t have." }
        ],
        ask: 'You can’t fix the phone tonight. Get through the moment without feeding the spiral:',
        options: [
          { label: 'ACCEPTS — put the phone down and do something else entirely: go help your sibling fold laundry, listen to your favorite album, take a walk around the block. Shift the channel.', skill: 'accepts', correct: true, fb: 'ACCEPTS — Activities, Contributing, Sensations, Thoughts — you redirected your attention on purpose and let the moment pass without pouring fuel on it. 💙' },
          { label: 'Keep scrolling the repair forums to “be prepared.”', skill: null, correct: false, fb: 'The “prepared” scroll is the spiral wearing a to-do list. It feeds the exact feeling you’re trying to get through. Try again.' },
          { label: 'Re-read the repair quote seventeen times so it sinks in.', skill: null, correct: false, fb: 'Re-reading the bill doesn’t pay it — it just re-opens the wound on a loop. Try again.' },
          { label: 'Try to “think your way” out of being upset about it.', skill: null, correct: false, fb: 'You can’t out-think a crisis feeling — you have to shift attention, not argue with it. Try again.' }
        ]
      },
      {
        id: 's2c7', title: 'The Rain-Checked Plans', setting: '🌧️ Living room, plans rained out', spotlight: 'accepts',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "My mom says the park is flooded, so the meetup is OFF. I was SO ready for this." },
          { s: 'narr', t: "You were ready too. The disappointment lands heavy and the day suddenly feels like a wasteland." }
        ],
        ask: 'The plan is gone and the feelings are big. What gets you through the next hour?',
        options: [
          { label: 'ACCEPTS — shift gears: “Okay, new plan — come over here, we’ll do the movie marathon we keep skipping.” Change the activity, change the channel.', skill: 'accepts', correct: true, fb: 'ACCEPTS — you didn’t pretend the disappointment away; you redirected the day into something you could actually do. The feeling passed instead of owning you. 💙' },
          { label: 'Stare at the rain and relive every detail of the canceled plan.', skill: null, correct: false, fb: 'Replaying the plan feeds the disappointment. ACCEPTS says shift attention, not rehearse the loss. Try again.' },
          { label: '“Great, another ruined day. Everything’s ruined forever.”', skill: null, correct: false, fb: 'The “ruined forever” is the emotion doing the talking — and it’s not the whole day, just the plan. Try again.' },
          { label: 'Curl up and scroll the feed for the rest of the afternoon.', skill: null, correct: false, fb: 'Passive scrolling is the same channel, just louder. Try again.' }
        ]
      },
      {
        id: 's2c8', title: 'The Stuck Elevator Feeling', setting: '🛗 Between floors, feeling stuck about the phone', spotlight: 'improve',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "You can’t fix the phone right now, can’t afford the new one, and can’t change any of it tonight. The frustration hums and hums." }
        ],
        ask: 'Nothing changes tonight. What softens the moment without changing the facts?',
        options: [
          { label: 'IMPROVE the moment — close your eyes and picture the day you finally get the new phone (imagery), tell yourself “I can get through tonight” (encouragement), and give yourself one thing to look forward to tomorrow.', skill: 'improve', correct: true, fb: 'IMPROVE — Imagery, Meaning, Encouragement, one thing at a time. The facts didn’t change; the moment got softer. That’s exactly what this skill is for. 💙' },
          { label: 'Keep checking the price every hour to “stay realistic.”', skill: null, correct: false, fb: '“Staying realistic” is doing the math on a loop — it keeps the frustration hot. Try again.' },
          { label: '“There’s no point making it feel better. It IS this bad.”', skill: null, correct: false, fb: 'IMPROVE doesn’t pretend the facts changed — it makes the *moment* survivable. You can hold both: it’s bad, and you can soften tonight. Try again.' },
          { label: 'Run the whole sad story in your head to “process” it.', skill: null, correct: false, fb: 'Re-running the story isn’t processing — it’s marinating. Try again.' }
        ]
      },
      {
        id: 's2c9', title: 'The Long Wait', setting: '⏳ Waiting room, repair shop', spotlight: 'improve',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "It’s a FORTY minute wait and they said maybe. And I have homework after this. This is the worst." },
          { s: 'narr', t: "The wait is real, the homework is real, and your sibling is radiating misery into the tiny room." }
        ],
        ask: 'You can’t make the wait shorter. What do you do with the next forty minutes?',
        options: [
          { label: 'IMPROVE the moment — put in your earbuds, pick a song that makes you feel powerful (encouragement), imagine the day the phone is fixed and life is smooth (imagery). One song at a time.', skill: 'improve', correct: true, fb: 'IMPROVE — you took the same forty minutes and changed the inner weather. The clock didn’t move; the moment did. 💙' },
          { label: 'Check the clock every ninety seconds and get angrier.', skill: null, correct: false, fb: 'Clock-watching turns minutes into hours. Try again.' },
          { label: '“This wait is stupid and I refuse to feel better about it.”', skill: null, correct: false, fb: 'Refusing to soften the moment just makes you and your sibling suffer the same wait twice. Try again.' },
          { label: 'Rehearse every worst-case outcome for the repair.', skill: null, correct: false, fb: 'Worst-case rehearsal is the opposite of improvement — it feeds the alarm. Try again.' }
        ]
      },
      {
        id: 's2c10', title: 'The Broken Speaker', setting: '🎧 Your room, a small but loud loss', spotlight: 'self-soothe',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "Your favorite speaker just died — the one that plays every song that matters. It’s a small thing, and it still hits hard. Your chest feels tight and your head is spinning with frustration." }
        ],
        ask: 'Small loss, big feeling. What calms the body down?',
        options: [
          { label: 'Self-soothe — wrap up in your softest blanket, sip something warm, light your favorite candle, and just let the senses do their job.', skill: 'self-soothe', correct: true, fb: 'SELF-SOOTHE — you comforted touch, taste, sight, and smell. Soothing the senses quiets the storm in the body, and the storm in the head follows. 💙' },
          { label: '“I should be over this by now, it’s just a speaker.”', skill: null, correct: false, fb: 'The “should” lecture doesn’t soothe anything — it adds shame to the disappointment. Try again.' },
          { label: 'Clench your fists and ride out the anger until it passes on its own.', skill: null, correct: false, fb: 'Gripping tight keeps the storm going. Self-soothe is about deliberately comforting, not white-knuckling. Try again.' },
          { label: 'Drink a huge iced coffee to “reset” your mood.', skill: null, correct: false, fb: 'Caffeine doesn’t soothe the five senses — it revs them. Try again.' }
        ]
      },
      {
        id: 's2c11', title: 'The Post-Exam Dread', setting: '🛏️ Your bed, after a brutal test', spotlight: 'self-soothe',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "I genuinely have no idea how that went. I feel like a wet rag." },
          { s: 'narr', t: "You feel it too — drained, jittery, and your shoulders are up by your ears. The test is over; the aftermath is still humming." }
        ],
        ask: 'The test is done. What settles you back into your body?',
        options: [
          { label: 'Self-soothe — take a hot shower, press a cool cloth to your face, and play something calm. Give your ears, your skin, your whole body something kind.', skill: 'self-soothe', correct: true, fb: 'SELF-SOOTHE — you went straight to the senses: warm water, cool cloth, calm sound. The nervous system got the message: it’s safe now. 💙' },
          { label: 'Re-live every question you’re unsure about.', skill: null, correct: false, fb: 'The replay keeps the test going long after the bell. Try again.' },
          { label: '“I should feel fine, that wasn’t even that bad.”', skill: null, correct: false, fb: 'The “should” adds a second layer of tension instead of soothing the first. Try again.' },
          { label: 'Stay in your sweaty clothes and doomscroll for hours.', skill: null, correct: false, fb: 'No comfort, no change — the drain keeps draining. Try again.' }
        ]
      },
      {
        id: 's2c12', title: 'The Non-Refundable Ticket', setting: '🎫 Kitchen table, an email you can’t change', spotlight: 'radical-acceptance',
        npc: 'mom',
        scene: [
          { s: 'mom', t: "The concert ticket is non-refundable and the show got postponed to a date you CAN’T make. I’m sorry, honey — it’s just how it landed." },
          { s: 'narr', t: "It’s not fair. It’s expensive. It was supposed to be the best night of your year. Your first instinct is to fight it — call, complain, refuse to let it go." }
        ],
        ask: 'You can’t change the date. What’s the acceptance move?',
        options: [
          { label: 'Radical acceptance — feel the disappointment fully, then open to the fact: the show is on a date you can’t make. Not “I approve,” just “this is what is.” Then let the fight in your chest start to settle.', skill: 'radical-acceptance', correct: true, fb: 'RADICAL ACCEPTANCE — you opened to reality without approving it. The date doesn’t become good; you just stop burning the night fighting it. 💙' },
          { label: 'Call the venue and argue until they bend.', skill: null, correct: false, fb: 'The fight is understandable and the policy is real. Arguing keeps the burn going without changing the date. Try again.' },
          { label: '“I’m just not going to think about it, it never happened.”', skill: null, correct: false, fb: 'Pushing it away isn’t acceptance — it’s denial with extra steps, and it leaks back out. Try again.' },
          { label: '“I’ll just be bitter about this for a month, that’s fair.”', skill: null, correct: false, fb: 'Bitter-for-a-month punishes you for a date you can’t control. Acceptance is what loosens the grip. Try again.' }
        ]
      },
      {
        id: 's2c13', title: 'The Rejected App', setting: '📱 Bedroom, a “sorry, not selected” email', spotlight: 'radical-acceptance',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "You applied for the phone-trade program you were sure you’d get into. The email says no. Your face is hot and the story starts: I’m not good enough, I never will be." }
        ],
        ask: 'The “no” is real. What does radical acceptance look like right now?',
        options: [
          { label: 'Accept the fact — you didn’t get in — without accepting the story. The rejection is real; “I’m not good enough” is a verdict that doesn’t follow from it. Open to the first, let go of the second.', skill: 'radical-acceptance', correct: true, fb: 'RADICAL ACCEPTANCE — you took reality in without taking the shame on. The “no” is true; the “I’m not enough” is a story you can put down. 💙' },
          { label: '“I’ll re-apply a hundred times until they say yes out of exhaustion.”', skill: null, correct: false, fb: 'The stubborn fight doesn’t accept the outcome — it churns on it. First accept the fact, then decide what’s next. Try again.' },
          { label: '“I don’t even care about that dumb program anyway.”', skill: null, correct: false, fb: '“I don’t care” said loudly is usually care in a costume. That’s denial, not acceptance. Try again.' },
          { label: '“If I think about it hard enough, the email will change.”', skill: null, correct: false, fb: 'The email is already sent. Ruminating is fighting reality with your own head. Try again.' }
        ]
      },
      {
        id: 's2c14', title: 'The Weather Argument', setting: '☔ Window, watching rain hit the street', spotlight: 'turning-the-mind',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "I keep telling myself the rain isn’t happening, that it’s just a glitch, and then I remember it IS raining and I get mad all over again. Why can’t I stop doing that?" },
          { s: 'narr', t: "Your sibling just described turning the mind in reverse — every time they remember reality, they fight it again, like a fresh insult." }
        ],
        ask: 'Your mind keeps swerving back to “this shouldn’t be happening.” What’s the skill?',
        options: [
          { label: 'Turning the mind — notice the swerve (“there it goes again, fighting the rain”), and gently choose the acceptance fork again: “It’s raining. That’s what is.” Over and over, without punishing yourself for swerving.', skill: 'turning-the-mind', correct: true, fb: 'TURNING THE MIND — you saw the resistance arise and, instead of adding shame, turned the mind back to what is. Choice after choice after choice. 💙' },
          { label: '“You should just never think about the rain again. Shut it off.”', skill: null, correct: false, fb: 'Forcing the thought away is willfulness wearing a mask — the rain (or the fact) keeps coming back. Turning the mind is a gentle re-choice, not an erase. Try again.' },
          { label: '“Getting mad every time is fine — anger is honest.”', skill: null, correct: false, fb: 'The anger is real, and re-fighting the same fact on loop isn’t honesty — it’s a treadmill. Try again.' },
          { label: '“The goal is to feel nothing about the rain.”', skill: null, correct: false, fb: 'Acceptance isn’t numbness. It’s meeting the fact without the fight — you can notice the rain and still feel what you feel. Try again.' }
        ]
      },
      {
        id: 's2c15', title: 'The Missed Bus', setting: '🚏 Bus stop, watching your bus pull away', spotlight: 'turning-the-mind',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "No. NO. That was our bus and it’s GONE. I keep going over it — if we’d left two minutes earlier, if I hadn’t tied my shoe, if—" },
          { s: 'narr', t: "You feel the same pull — rehearsing every “if only” like it could reel the bus back." }
        ],
        ask: 'The bus is gone. Your mind keeps reaching for the if-onlys. What do you do?',
        options: [
          { label: 'Turning the mind — catch yourself reaching for the “if only” and gently turn back: “The bus left. That’s the fact. Next one’s in twelve minutes.” Choose the acceptance fork each time your mind drifts back.', skill: 'turning-the-mind', correct: true, fb: 'TURNING THE MIND — every time the if-onlys pulled you, you chose the fork that faces what is. The bus stayed gone; the fight stopped costing you the next one. 💙' },
          { label: '“We should’ve left earlier, this is basically my fault.”', skill: null, correct: false, fb: 'The blame loop is another branch of the same fight — it refuses the fact and adds shame. Try again.' },
          { label: '“I’m just going to stand here and be mad about it until the next bus.”', skill: null, correct: false, fb: 'You can stand and be mad — and the bus will come either way. Turning the mind is choosing to meet the wait without the fight. Try again.' },
          { label: '“Maybe the bus will come back if we will it hard enough.”', skill: null, correct: false, fb: 'Willing the bus back is willfulness at full volume. Reality doesn’t negotiate. Try again.' }
        ]
      },
      {
        id: 's2c16', title: 'The Dishes Standoff', setting: '🍽️ Kitchen sink, a mountain of dishes', spotlight: 'willingness-willfulness',
        npc: 'mom',
        scene: [
          { s: 'mom', t: "The dishes are not going to wash themselves, and it’s your night. Please get to them before the phone comes back." },
          { s: 'narr', t: "Every cell in your body says NO. You’re tired, it’s unfair, and you’d rather sit in the feeling of refusal than touch a single plate." }
        ],
        ask: 'You feel the wall go up. Which path are you on — and how do you cross over?',
        options: [
          { label: 'Name it: “I’m in willfulness — I won’t, no way.” Then choose willingness: open your hand, pick up one plate, and do the task on purpose because it’s what the moment calls for. Not because it’s fair.', skill: 'willingness-willfulness', correct: true, fb: 'WILLINGNESS VS. WILLFULNESS — you saw the “I won’t” and chose willingness: open-handed, on purpose, one plate at a time. The dishes got done and the wall came down. 💙' },
          { label: '“I’ll do it when I feel ready.” (never feels ready)', skill: null, correct: false, fb: 'Waiting for “ready” is willfulness with a schedule. The dishes wait; the wall stays. Try again.' },
          { label: 'Do them furiously and slam each plate to “show them.”', skill: null, correct: false, fb: 'Doing the task while fighting it is still willfulness — just with choreography. The wall is still up. Try again.' },
          { label: '“It’s not fair, so I refuse to be willing.”', skill: null, correct: false, fb: 'Willingness isn’t about fairness — it’s about doing what the moment needs. Fairness wasn’t on the ballot. Try again.' }
        ]
      },
      {
        id: 's2c17', title: 'The Homework You Hate', setting: '📚 Desk, a subject you dread', spotlight: 'willingness-willfulness',
        npc: 'dad',
        scene: [
          { s: 'dad', t: "Math homework. Tonight. I know you hate it — you’ve made that very clear. It still needs to happen." },
          { s: 'narr', t: "The assignment sits there like a brick wall. Part of you wants to collapse into “this is stupid and I refuse” and waste the whole evening proving it." }
        ],
        ask: 'You can feel the refusal rising. What flips the switch?',
        options: [
          { label: 'Notice the willfulness — “I won’t, this is dumb” — and choose willingness anyway: sit down, set a timer for twenty minutes, and work on purpose. The subject didn’t get better; your stance did.', skill: 'willingness-willfulness', correct: true, fb: 'WILLINGNESS VS. WILLFULNESS — you met the task open-handed instead of fighting it from the couch. Twenty minutes in, the wall was mostly gone. 💙' },
          { label: '“I’ll refuse for an hour and then do it — that’s balance.”', skill: null, correct: false, fb: 'The hour of refusal isn’t balance — it’s willfulness with a countdown. The task still looms the whole time. Try again.' },
          { label: 'Slam the book shut and declare math pointless.', skill: null, correct: false, fb: 'Declaring it pointless is the “I won’t” talking. The assignment doesn’t care; your evening does. Try again.' },
          { label: 'Do the homework while hating every second to “prove” you’re right.', skill: null, correct: false, fb: 'Working while fighting it is still willfulness. Willingness means opening your hand to the task, not gritting through it. Try again.' }
        ]
      },
      {
        id: 's2c18', title: 'The Delayed Flight', setting: '🛫 Gate area, flight delayed three hours', spotlight: 'half-smile-willing-hands',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "THREE hours. I can’t even. I’m going to sit here and steam for all three of them." },
          { s: 'narr', t: "The delay is real and nothing you do will move the plane. Your jaw is tight, your fists are clenched, and your whole body is bracing against the hours." }
        ],
        ask: 'You can’t fix the delay. What does your body do about the wait?',
        options: [
          { label: 'Half smile, willing hands — soften your face slightly, unclench your fists, let your shoulders drop, and breathe. The posture of acceptance quiets the fight in your body, and the body quiets the head.', skill: 'half-smile-willing-hands', correct: true, fb: 'HALF SMILE WILLING HANDS — you relaxed the face and opened the hands, and the acceptance in your body told your mind the wait was survivable. The hours still passed — but not in a chokehold. 💙' },
          { label: 'Clench harder — if your body stays tense, the flight will feel “fair.”', skill: null, correct: false, fb: 'Tension doesn’t earn fairness — it just makes you suffer the same delay twice. Try again.' },
          { label: '“I refuse to relax. That would mean I’m okay with this.”', skill: null, correct: false, fb: 'Relaxing the body isn’t approving the delay — it’s accepting reality long enough to live through it. Try again.' },
          { label: 'Pace the gate in circles for all three hours.', skill: null, correct: false, fb: 'Pacing is the fight taking legs. The posture skill is about softening, not marching. Try again.' }
        ]
      },
      {
        id: 's2c19', title: 'The Unfair Fine', setting: '🧾 Kitchen counter, a surprise bill', spotlight: 'half-smile-willing-hands',
        npc: 'dad',
        scene: [
          { s: 'dad', t: "A late fee on the phone bill — it’s only $12, but it’s a mistake on their end and they won’t budge. I’m livid, and my whole body is tensing up like I’m about to fight the bill." },
          { s: 'narr', t: "You watch your dad clench up — jaw tight, fists balled — fighting an argument that’s already over. The bill is real; the war is optional." }
        ],
        ask: 'The bill isn’t going anywhere. What do you coach your body to do?',
        options: [
          { label: 'Half smile, willing hands — drop the jaw tension, open the fists, soften the shoulders, take one long breath. You don’t approve the fee; you accept the moment so the fight in your body can stop.', skill: 'half-smile-willing-hands', correct: true, fb: 'HALF SMILE WILLING HANDS — you used posture to end the body’s war with the bill. Acceptance in the body, quiet in the head — even when the fee is unfair. 💙' },
          { label: 'Keep the fists balled until the bill “learns its lesson.”', skill: null, correct: false, fb: 'The bill has no nervous system to punish. The fists only hurt your own shoulders. Try again.' },
          { label: '“I’m not going to let go until they refund it.”', skill: null, correct: false, fb: 'Holding the tension hostage won’t summon a refund — it just extends your own misery. Try again.' },
          { label: 'Slam the bill down and stomp out of the room.', skill: null, correct: false, fb: 'The stomp is the fight in motion. The bill stays on the counter either way. Try again.' }
        ]
      }
    ],
    boss: {
      id: 's2boss', title: 'Boss: The Phone Conversation', theme: 'One calm request for a new phone',
      npc: 'mom2',
      intro: [
        { s: 'mom2', t: "Okay. I see you’ve thought about this. But I want to hear the whole plan before I hear the word “phone” again." },
        { s: 'narr', t: "This is the moment. Your palms are damp and the urge to guilt-trip is strong." }
      ],
      rounds: [
        {
          prompt: 'The impulse is to fight. What do you do first?',
          options: [
            { label: '“You bought your phone, why can’t I have one?!”', skill: null, correct: false, fb: 'The comparison turned a calm conversation into a court case.' },
            { label: 'STOP. Breathe. Notice the heat in your face and the urge to argue — then proceed with the plan you prepared.', skill: 'stop', correct: true, fb: 'STOP — the impulse waved, and you waved back without letting it drive. 💙' },
            { label: 'Cross your arms and go silent.', skill: null, correct: false, fb: 'Silence says “fine, I’ll give up,” which is not the plan.' },
            { label: 'Storm out and text them your complaint.', skill: null, correct: false, fb: 'The text version is angrier than the real you. Try again.' }
          ]
        },
        {
          prompt: 'Your mom asks a pointed question: “Why now, and not in six months?” The pressure mounts. First, settle your body.',
          options: [
            { label: 'Fidget, tap your foot, and talk faster to “win.”', skill: null, correct: false, fb: 'Fast talk reads as panic, not logic.' },
            { label: 'Take three slow breaths, exhaling longer than you inhale, and let your shoulders drop.', skill: 'tipp', correct: true, fb: 'TIPP — you brought your nervous system down so your brain could come online. 💙' },
            { label: 'Hold your breath and count to ten.', skill: null, correct: false, fb: 'Holding your breath raises the alarm even more.' },
            { label: '“I don’t know, it just feels urgent!”', skill: null, correct: false, fb: '“Feels urgent” is a feeling, not a reason — and you have better reasons.' }
          ]
        },
        {
          prompt: 'Now the real play. Your mom wants the budget protected. You want a working phone. Make a case that holds both truths.',
          options: [
            { label: 'Propose: trade in the old phone, buy a certified used model, and you’ll earn the difference with weekend work.', skill: 'pros-cons', correct: true, fb: 'PROS & CONS — you weighed the trade-offs and built a plan where her budget and your phone both win. 💙' },
            { label: '“Then buy me the cheapest thing you can find, I guess.”', skill: null, correct: false, fb: 'The shrug gave away all your leverage and your self-respect.' },
            { label: '“Fine, I’ll just never have a nice phone then!”', skill: null, correct: false, fb: 'The all-or-nothing surrender undid a win you almost had.' },
            { label: '“Actually you owe me, remember that time I did the dishes?”', skill: null, correct: false, fb: 'Dishes debt is not a phone fund. Try again.' }
          ]
        }
      ],
      final: [
        { s: 'mom2', t: "Trade-in, certified used, and you cover a hundred of it with weekend work. Deal." },
        { s: 'narr', t: "Deal. New phone incoming — and your Distress Tolerance badge set is almost complete." }
      ]
    }
  },
  {
    id: 's3', num: 3, title: 'Feel Seen', moduleId: 'interpersonal1',
    emoji: '💘', color: '#ff6b8a',
    goal: 'Going on a date',
    goalEmoji: '🍓',
    age: 16,
    location: 'High school, junior year',
    challenges: [
      {
        id: 's3c1', title: 'The Canceled Plans', setting: '🎪 Sidewalk after school', spotlight: 'validate-others',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "I can’t make the festival. My family stuff came up and I’m stuck at home. Again. Everything always happens to me." },
          { s: 'narr', t: "You wanted to go too. But your friend is clearly wrecked." }
        ],
        ask: 'What do you lead with?',
        options: [
          { label: '“Well, that’s a bummer, but MY week is going worse, listen—”', skill: null, correct: false, fb: 'Stealing the stage mid-fall. Your friend needed to land first.' },
          { label: '“It’s not that bad, you can go next year.”', skill: null, correct: false, fb: '“It’s not that bad” is the opposite of validation. It told them their feelings were wrong.' },
          { label: '“Ugh, that sucks so much. Of course you’re upset — that would hurt anyone. I’m here.”', skill: 'validate-others', correct: true, fb: 'VALIDATE SOMEONE ELSE — you named their pain as real and understandable, without fixing or judging. That’s the whole gift. 💗' },
          { label: '“Should we just go anyway without you?”', skill: null, correct: false, fb: 'The invite became a punchline. Try again.' }
        ]
      },
      {
        id: 's3c2', title: 'The Bad Day Vent', setting: '🎧 Rooftop after school', spotlight: 'validate-others',
        npc: 'friend2',
        scene: [
          { s: 'friend2', t: "I bombed the audition. I practiced for a MONTH and I choked. I feel like a total fraud." },
          { s: 'narr', t: "Your first instinct is to list every time you’ve heard them sing well. But they’re not asking for a list." }
        ],
        ask: 'What does your friend need right now?',
        options: [
          { label: '“You’re not a fraud. Remember that time you sang at the mall?”', skill: null, correct: false, fb: 'The pep-talk parade skipped over the feeling they were standing in. Try again.' },
          { label: '“Yeah, but it could be worse. At least you have a car.”', skill: null, correct: false, fb: 'Comparison-minimizing: the fast track to feeling unheard.' },
          { label: '“I hear you. Practicing that long and still feeling like it fell apart — that really stings. Of course you feel like that.”', skill: 'validate-others', correct: true, fb: 'VALIDATE SOMEONE ELSE — you met them where they were instead of dragging them to where you wanted them to be. 💗' },
          { label: '“Well, maybe you did choke. What’s the plan?”', skill: null, correct: false, fb: 'You validated the fear and skipped the person. Ouch.' }
        ]
      },
      {
        id: 's3c3', title: 'The Nervous Date', setting: '🍰 The diner booth', spotlight: 'give',
        npc: 'date',
        scene: [
          { s: 'date', t: "(spinning their straw wrapper, not making eye contact) So… um. This is nice. I’m not usually— I get really awkward on these." },
          { s: 'narr', t: "You feel the shy energy coming off them in waves. This is your chance to make it feel safe." }
        ],
        ask: 'How do you keep this warm and easy?',
        options: [
          { label: '“No, no, don’t be awkward, it’s fine, it’s totally fine!” (then stare at your fries)', skill: null, correct: false, fb: '“Don’t be awkward” is a spotlight. It made the awkwardness twice as loud.' },
          { label: 'Lean in with an easy smile: “Hey, no rush. I’m a little nervous too. Tell me something you actually love?”', skill: 'give', correct: true, fb: 'GIVE — Gentle, Interested, Validate, Easy manner. You made the whole table feel lighter. 💗' },
          { label: 'Pull out your phone and check notifications.', skill: null, correct: false, fb: 'The phone said “this is boring” in a language everyone reads.' },
          { label: '“So, do you have a plan after high school? Debt? Career goals?”', skill: null, correct: false, fb: 'Interview mode. Your date wanted connection, not a career fair.' }
        ]
      },
      {
        id: 's3c4', title: 'The Ignored Parent', setting: '🍳 Kitchen, Saturday morning', spotlight: 'give',
        npc: 'mom',
        scene: [
          { s: 'mom', t: "I don’t know, you used to tell me everything. Now I’m just the person who asks about homework." },
          { s: 'narr', t: "Ouch. They’re not wrong. You’ve been busy — a little closed off lately." }
        ],
        ask: 'How do you bridge the gap?',
        options: [
          { label: '“I’m fine, Mom. Don’t make it weird.”', skill: null, correct: false, fb: '“Don’t make it weird” is how it gets weirder.' },
          { label: 'Put your phone down, turn toward them, and ask one real question: “You miss me, huh? What’s something you wanna know about my life?”', skill: 'give', correct: true, fb: 'GIVE — interested, easy, warm. You opened a door they were knocking on. 💗' },
          { label: 'Give a 40-slide presentation of everything you’ve done this month.', skill: null, correct: false, fb: 'A report is not a conversation.' },
          { label: '“I’m literally right here!” (while staring at your screen)', skill: null, correct: false, fb: 'Present in body, absent in spirit. They noticed.' }
        ]
      },
      {
        id: 's3c5', title: 'The Blame Game', setting: '🚌 Back of the bus', spotlight: 'fast',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "You ALWAYS flake. Every single time we plan something, you bail. I can’t count on you for anything." },
          { s: 'narr', t: "It’s not true — you’ve shown up a lot. But you’re stung, and the urge to fire back is real." }
        ],
        ask: 'You want to keep your self-respect AND the friendship. What do you do?',
        options: [
          { label: '“That’s a lie! What about last month, and the trip, and—!”', skill: null, correct: false, fb: 'The defense became a counter-attack. Now you’re both bleeding.' },
          { label: '“You’re right, I’m the worst, sorry, sorry, sorry.”', skill: null, correct: false, fb: 'Over-apologizing to a half-truth just stored the resentment in your own pockets.' },
          { label: 'Keep your voice even: “I hear that you’re frustrated. And that’s not the whole truth — I’ve been there the last three times. Can we talk about the real thing that happened?”', skill: 'fast', correct: true, fb: 'FAST — Fair, no over-apologizing, Stick to values, Truthful. You held the truth without dropping the friendship. 💗' },
          { label: 'Storm off the bus in silence.', skill: null, correct: false, fb: 'The walk-off wins the argument and loses the person.' }
        ]
      },
      {
        id: 's3c6', title: 'The Speech Panic', setting: '🎤 Assembly stage, you’re up next', spotlight: 'cheerleading-statements',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "You’re about to give the class speech. The worry-thoughts are on repeat: “I’m going to freeze. Everyone will see me shake. I’m going to mess it up.” Your hands are cold." }
        ],
        ask: 'The worry-thoughts are loud. What’s the cheerleading move?',
        options: [
          { label: 'Swap the worry-thoughts for wise-mind statements: “I’ve rehearsed this. I can do hard things. I just have to take one step.” Talk yourself up like you’d talk to a friend.', skill: 'cheerleading-statements', correct: true, fb: 'CHEERLEADING STATEMENTS — you challenged the judgmental worry-thoughts with wise-mind ones. “I can handle this” beat “I’m going to freeze.” 💗' },
          { label: 'Replay the worry-thoughts faster so you’re “ready for the worst.”', skill: null, correct: false, fb: 'Rehearsing the worst doesn’t prepare you — it paralyzes you. The worry-thoughts aren’t facts. Try again.' },
          { label: '“I’m definitely going to mess this up, but whatever.”', skill: null, correct: false, fb: 'That’s the worry-thought doing the talking, and you agreed with it. Cheerleading statements replace it. Try again.' },
          { label: 'Just accept the panic and hope the speech goes well.', skill: null, correct: false, fb: '“Accepting the panic” isn’t the skill here — the skill is actively talking back to the catastrophic thoughts. Try again.' }
        ]
      },
      {
        id: 's3c7', title: 'The Date Pre-Game', setting: '🪞 Your room, before the first date', spotlight: 'cheerleading-statements',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "Okay, deep breaths. What if the conversation dies? What if they think I’m boring? What if I say something weird and it’s all over?" },
          { s: 'narr', t: "Your friend is spiraling before the date even starts, and the worry is catching." }
        ],
        ask: 'The worry-thoughts are screaming. Give them the cheerleading treatment:',
        options: [
          { label: 'Challenge each one with a wise-mind statement: “What if the conversation dies? → I can sit with quiet and pick it back up. What if they think I’m boring? → I’ve held great conversations before. One step at a time.”', skill: 'cheerleading-statements', correct: true, fb: 'CHEERLEADING STATEMENTS — you talked back to every “what if” with “I can handle this.” The worries got smaller and the date got possible. 💗' },
          { label: 'Agree with the worries: “You’re right, it might all go wrong. Let’s plan for disaster.”', skill: null, correct: false, fb: 'Agreeing with worry-thoughts feeds them. The skill is challenging them, not joining them. Try again.' },
          { label: '“Just don’t think about it. Force it away.”', skill: null, correct: false, fb: 'Forcing thoughts away usually makes them louder. Cheerleading replaces them with better ones instead. Try again.' },
          { label: '“If you can’t stop worrying, you’re not ready to date.”', skill: null, correct: false, fb: 'That’s a judgmental worry-thought wearing a costume. Worrying doesn’t mean unready — it means human. Try again.' }
        ]
      },
      {
        id: 's3c8', title: 'The Sarcastic Comment', setting: '🍔 Lunch table, a friend made a jab', spotlight: 'think',
        npc: 'friend2',
        scene: [
          { s: 'friend2', t: "(laughing with someone else) Yeah, some people just don’t get it." },
          { s: 'narr', t: "You’re sure that was aimed at you. Your face goes hot and the story writes itself: they’ve been talking about you behind your back all week." }
        ],
        ask: 'Your interpretation is loaded. What does THINK ask before you react?',
        options: [
          { label: 'THINK — have empathy and check your interpretation: “What else could that comment have been about? Do I actually know it was about me?” The kindness step: give them the benefit of the doubt you’d want.', skill: 'think', correct: true, fb: 'THINK — you checked your interpretation and tried on their side before reacting. The fight softened before it even started. 💗' },
          { label: '“I know what I heard. That was about me. Period.”', skill: null, correct: false, fb: '“I know what I heard” is a story, not a fact. THINK says check the interpretation before acting on it. Try again.' },
          { label: 'Fire back a louder jab so they know you noticed.', skill: null, correct: false, fb: 'The counter-jab escalates from a maybe into a real fight. THINK slows that down. Try again.' },
          { label: 'Ice them out for the rest of the week without a word.', skill: null, correct: false, fb: 'Silent freezing treats your guess as proven. The skill is empathy and interpretation-checking, not punishment. Try again.' }
        ]
      },
      {
        id: 's3c9', title: 'The Missed Text', setting: '📱 Your phone, an unanswered message', spotlight: 'think',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "(reading the chat) They saw your message and didn’t reply. That’s so rude. They’re clearly mad at you." },
          { s: 'narr', t: "Your friend is feeding the story, and you can feel the hurt rising. But the person who didn’t reply is your best friend — who has never once been mad at you without saying so." }
        ],
        ask: 'The story says “mad at you.” What does THINK have to say?',
        options: [
          { label: 'THINK — notice your interpretation (“they’re mad”), then have empathy: they’re probably mid-life — class, a shift, a bad day. Think about the situation, check the interpretation, and act with kindness instead of assumption.', skill: 'think', correct: true, fb: 'THINK — you noticed the interpretation, had empathy for their likely situation, and chose kindness over assumption. The friendship stayed intact. 💗' },
          { label: '“They’ve read it. That’s proof they’re mad. It’s settled.”', skill: null, correct: false, fb: '“Read it” is a fact. “They’re mad” is an interpretation — and THINK is exactly the tool that separates the two. Try again.' },
          { label: 'Send three follow-up messages to force an answer.', skill: null, correct: false, fb: 'The follow-up barrage acts on the unverified story. Try empathy and patience first. Try again.' },
          { label: '“Your friend’s interpretation is probably right — they know everything.”', skill: null, correct: false, fb: 'Hitching your reaction to someone else’s story doesn’t check the facts — it outsources your empathy. Try again.' }
        ]
      }
    ],
    boss: {
      id: 's3boss', title: 'Boss: Asking Them Out', theme: 'The big ask — with your heart pounding',
      npc: 'date',
      intro: [
        { s: 'narr', t: "Weeks of flirting in art class. Today is the day you ask Alex out. Your heart is pounding, and honestly? They look nervous too." }
      ],
      rounds: [
        {
          prompt: 'Alex says something vulnerable first. They’re bracing for a joke.',
          options: [
            { label: 'Alex: “I keep bracing for everyone to be weird about me.” — “Huh, people are weird, whatever, so anyway—”', skill: null, correct: false, fb: 'The brush-off passed right over something important they just handed you.' },
            { label: 'Alex: “I keep bracing for everyone to be weird about me.” — “That makes sense. It’s exhausting to always be on guard. I’m not going to be weird about you.”', skill: 'validate-others', correct: true, fb: 'VALIDATE SOMEONE ELSE — you met their fear with understanding before anything else. 💗' },
            { label: '“Weird about you? What’s weird about you?” (eyebrow raise)', skill: null, correct: false, fb: 'The eyebrow made their confession into a punchline.' },
            { label: '“You shouldn’t feel that way. Everyone likes you.”', skill: null, correct: false, fb: '“You shouldn’t feel that” invalidates the exact thing they trusted you with.' }
          ]
        },
        {
          prompt: 'The conversation is going well — Alex lights up about their hobby. Keep the warmth alive.',
          options: [
            { label: '“Cool, cool.” (check your watch)', skill: null, correct: false, fb: 'The watch said “I’m waiting for the date part.” Cold.' },
            { label: 'Lean in, ask one follow-up, laugh at their joke — keep it easy.', skill: 'give', correct: true, fb: 'GIVE — interested, easy manner. The vibe is now officially safe. 💗' },
            { label: 'Interrupt to show them your hobby is cooler.', skill: null, correct: false, fb: 'The one-up closed the door they’d just opened.' },
            { label: '“So when are you free for a date?” (mid-bite)', skill: null, correct: false, fb: 'The ambush-ask skipped the warmth and went straight for the interview.' }
          ]
        },
        {
          prompt: 'Then Alex asks you something real: “Okay but what are you actually like? Everyone’s a version of themselves at first.”',
          options: [
            { label: '“Oh, you know, funny, smart, great at games…” (embellish freely)', skill: null, correct: false, fb: 'The sales pitch might impress tonight and disappoint every day after.' },
            { label: 'Stay truthful: “I’m a little awkward, I get anxious before big things, and I’m a really loyal friend. That’s the honest version.”', skill: 'fast', correct: true, fb: 'FAST — truthful, stuck to your values, no groveling. You gave them the real you. 💗' },
            { label: '“I’m whatever you want me to be.”', skill: null, correct: false, fb: 'Being “whatever they want” erases you — and that’s not what they asked for.' },
            { label: 'Deflect: “I’m just me, it’s hard to explain.”', skill: null, correct: false, fb: 'The shrug avoided the question they were brave enough to ask.' }
          ]
        }
      ],
      final: [
        { s: 'date', t: "Yeah. I’d really like to go out with you. Saturday, the little diner at two?" },
        { s: 'narr', t: "Date secured — and your Interpersonal Effectiveness badge set is complete. New looks are waiting in the closet." }
      ]
    }
  },
  {
    id: 's4', num: 4, title: 'Meet in the Middle', moduleId: 'middlepath',
    emoji: '🚗', color: '#ffb833',
    goal: 'Getting your driver’s license',
    goalEmoji: '🪪',
    age: 17,
    location: 'High school, senior year',
    challenges: [
      {
        id: 's4c1', title: 'The Curfew Debate', setting: '🛋️ Living room, 9:41pm', spotlight: 'think-dialectically',
        npc: 'dad',
        scene: [
          { s: 'dad', t: "Ten o’clock. That’s the curfew, and that’s the end of it." },
          { s: 'narr', t: "You want midnight. He says ten. The last three conversations ended in slamming doors." }
        ],
        ask: 'Break the deadlock — how?',
        options: [
          { label: '“Midnight or I’m not coming home at all.”', skill: null, correct: false, fb: 'The ultimatum made his ten o’clock feel like a lifeline he had to defend.' },
          { label: '“Fine. Ten. Whatever.” (vow to test the limit later)', skill: null, correct: false, fb: 'Silent surrender just postpones the war.' },
          { label: 'Both/And it: “You’re worried about my safety AND I need to feel trusted. Both of those are real. Let’s build a curfew that honors both.”', skill: 'think-dialectically', correct: true, fb: 'THINK DIALECTICALLY — two truths, held at once, instead of a tug-of-war. 💛' },
          { label: '“You never let me do anything, you don’t trust me at all!”', skill: null, correct: false, fb: 'The accusation replaced the conversation. Now it’s about his pride, not your curfew.' }
        ]
      },
      {
        id: 's4c2', title: 'The Car Time Tug', setting: '🗓️ Calendar on the fridge', spotlight: 'act-dialectically',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "I need the car Saturday morning for my game. I already called it. Sorry not sorry." },
          { s: 'narr', t: "You need it Saturday afternoon for your date. You could both lose this, or…" }
        ],
        ask: 'Find the workable middle:',
        options: [
          { label: '“I had it first, get your own ride!”', skill: null, correct: false, fb: 'Winning the schedule, losing the sibling.' },
          { label: '“Saturday’s all mine. Deal with it.”', skill: null, correct: false, fb: 'The whole day? They’d have to be home by noon anyway.' },
          { label: '“Okay — you take it morning for your game, I get it noon for my thing, and we split the gas. That works for me, does it work for you?”', skill: 'act-dialectically', correct: true, fb: 'ACT DIALECTICALLY — both sides bent, both sides won. A deal that actually sticks. 💛' },
          { label: '“Fine, you can have it. I’ll just cancel my date.”', skill: null, correct: false, fb: 'Giving everything away isn’t compromise, it’s disappearing.' }
        ]
      },
      {
        id: 's4c3', title: 'The Screen Time Standoff', setting: '📺 Family room, homework night', spotlight: 'act-dialectically',
        npc: 'mom',
        scene: [
          { s: 'mom', t: "You’ve been on that screen for four hours. Homework first, and I mean it this time." },
          { s: 'narr', t: "You’re mid-level in a game, and the party needs you. But she’s right about the homework." }
        ],
        ask: 'The middle-path move:',
        options: [
          { label: '“ONE more hour, I promise!” (you won’t)', skill: null, correct: false, fb: 'The promise you can’t keep is how trust gets expensive.' },
          { label: '“Why do you always control everything?!”', skill: null, correct: false, fb: 'The escalation made her double down.' },
          { label: '“Here’s my deal: I finish the worksheet first, then I get 45 minutes of game time, then I’m off. If I stick to it, we keep this system.”', skill: 'act-dialectically', correct: true, fb: 'ACT DIALECTICALLY — you traded a vague “later” for a specific, fair plan she could trust. 💛' },
          { label: 'Turn the screen off and sulk in your room.', skill: null, correct: false, fb: 'You “obeyed” and earned nothing — not even the game time you could have had.' }
        ]
      },
      {
        id: 's4c4', title: 'The Chore Split', setting: '🧺 Laundry pile, two rooms', spotlight: 'think-dialectically',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "I did dishes last week. Your turn. And I’m not swapping — you’re the messy one anyway." },
          { s: 'narr', t: "You’re not the messy one! Well. Mostly. But the ledger’s getting petty." }
        ],
        ask: 'Unstick the spiral:',
        options: [
          { label: '“You’re lying! I did dishes twice!”', skill: null, correct: false, fb: 'The ledger war. Every “fact” becomes a counter-fact and nobody does dishes.' },
          { label: '“You’re right, I’ll do everything forever.”', skill: null, correct: false, fb: 'The surrender keeps the house clean and the resentment piling up.' },
          { label: '“We both think we’re doing more — that can both be true. Let’s just put a chart up so it’s fair and nobody has to argue.”', skill: 'think-dialectically', correct: true, fb: 'THINK DIALECTICALLY — both sides can feel overworked, and the fix isn’t a fight, it’s a system. 💛' },
          { label: 'Hide the laundry basket in their closet.', skill: null, correct: false, fb: 'The passive-aggressive play just postpones the argument with extra steps.' }
        ]
      },
      {
        id: 's4c5', title: 'The License Jitters', setting: '🚗 Parked car, DMV parking lot', spotlight: 'act-dialectically',
        npc: 'dad',
        scene: [
          { s: 'dad', t: "I don’t know about this. You’re a good kid, but out there on the road? It scares the heck out of me." },
          { s: 'narr', t: "You’ve practiced for months. His fear is real. Your readiness is real too." }
        ],
        ask: 'Hold both truths:',
        options: [
          { label: '“I’m a great driver, watch!” (peel out)', skill: null, correct: false, fb: 'The peel-out proved his point, unfortunately.' },
          { label: '“You’re right, maybe I’m not ready.” (give up)', skill: null, correct: false, fb: 'You traded a year of practice for one moment of his doubt.' },
          { label: '“I get that it scares you — new drivers are a big deal. And I’ve put in real practice. Let me take the test, and if I pass, we do short drives together first.”', skill: 'act-dialectically', correct: true, fb: 'ACT DIALECTICALLY — you accepted his fear as real (acceptance) while moving toward your goal (change). Both at once. 💛' },
          { label: '“Everyone else’s parents let them drive alone already!”', skill: null, correct: false, fb: 'The comparison doesn’t calm a scared parent; it just annoys them.' }
        ]
      },
      {
        id: 's4c6', title: 'The Unnoticed Effort', setting: '🧹 Living room, your sibling finally did their chore', spotlight: 'positive-reinforcement',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "(awkwardly, having just put their laundry away without being asked) There. Done." },
          { s: 'narr', t: "Usually your sibling fights the chore list tooth and nail. This time they just did it. The moment is small, and you have a choice about what happens next." }
        ],
        ask: 'You want to see more of this. What feeds it?',
        options: [
          { label: 'Positive reinforcement — catch them doing good: “Hey, I saw you put your laundry away without anyone asking. That made the room feel way better. Thanks.” Specific praise right after the behavior.', skill: 'positive-reinforcement', correct: true, fb: 'POSITIVE REINFORCEMENT — you rewarded the exact behavior you want to see again, right when it happened. That’s how it shows up next week too. 💛' },
          { label: 'Say nothing — reward would make them think they did something weird.', skill: null, correct: false, fb: 'Silence is actually reinforcement of nothing — the good behavior gets no signal at all. Specific praise is the skill. Try again.' },
          { label: '“Took you long enough. It’s about time.”', skill: null, correct: false, fb: 'The complaint after the effort punishes the good behavior and teaches them not to bother. Try again.' },
          { label: 'Praise them loudly every hour for the rest of the day “to make sure it sticks.”', skill: null, correct: false, fb: 'Over-praise dilutes the signal. Positive reinforcement is timely and specific — not a parade. Try again.' }
        ]
      },
      {
        id: 's4c7', title: 'The Mom Win', setting: '🍳 Kitchen, your mom broke a good habit', spotlight: 'positive-reinforcement',
        npc: 'mom',
        scene: [
          { s: 'mom', t: "I made my lunch the night before, like you suggested. I didn’t even skip breakfast this week." },
          { s: 'narr', t: "Your mom actually took your advice and it stuck for a whole week. She doesn’t say it, but she’s a little proud and a lot surprised you noticed." }
        ],
        ask: 'You want this habit to keep going. The skill move:',
        options: [
          { label: 'Positive reinforcement — name it specifically: “You made lunch ahead AND ate breakfast every day this week. That’s the routine working. I’m glad it’s helping you feel better.”', skill: 'positive-reinforcement', correct: true, fb: 'POSITIVE REINFORCEMENT — you noticed and rewarded the behavior you want more of, specifically and right away. Her habit just got a reason to stick. 💛' },
          { label: '“Okay but you still skipped it Monday, so it’s not a full win.”', skill: null, correct: false, fb: 'Holding the one miss up over the week of wins punishes the progress. Reward the closer approximation. Try again.' },
          { label: 'Stay quiet — you don’t want to make a big deal and jinx it.', skill: null, correct: false, fb: 'Jinxes aren’t real; reinforcement is. Silence sends no signal to keep going. Try again.' },
          { label: '“See? My advice was right. You should listen to me more.”', skill: null, correct: false, fb: 'The “I told you so” turns a moment of praise into a scoreboard. Try again.' }
        ]
      },
      {
        id: 's4c8', title: 'The Nagging Loop', setting: '🗑️ Kitchen, trash needs taking out', spotlight: 'negative-reinforcement',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "Take out the trash. (beat) I said, take out the trash. (beat) Are you deaf? Trash. Now." },
          { s: 'narr', t: "Your sibling nags and nags. The moment they grab the bag and actually do it, the nagging stops. You’re watching a whole behavior pattern unfold in real time." }
        ],
        ask: 'Your sibling just did the chore — and the nagging stopped. What just happened, skill-wise?',
        options: [
          { label: 'Negative reinforcement — the unpleasant nagging was removed the moment the desired behavior appeared. The relief (no more nagging) makes doing the chore MORE likely next time.', skill: 'negative-reinforcement', correct: true, fb: 'NEGATIVE REINFORCEMENT — the annoying thing (nagging) got taken away right when the wanted behavior showed up. That relief teaches the behavior to come back. 💛' },
          { label: 'The nagging is punishment, and it will make them do chores less.', skill: null, correct: false, fb: 'The nagging is annoying, but the key move here is its REMOVAL at the right moment — that’s negative reinforcement, not punishment. Try again.' },
          { label: 'Nothing happened — the chore just got done.', skill: null, correct: false, fb: 'Something did happen: a consequence (the nagging) was removed right after a behavior. That’s the definition of negative reinforcement. Try again.' },
          { label: 'It’s positive reinforcement — the chore itself is the reward.', skill: null, correct: false, fb: 'The chore isn’t the reward; the relief from nagging is. Something unpleasant was removed — that’s the negative reinforcement signature. Try again.' }
        ]
      },
      {
        id: 's4c9', title: 'The Quiet After the Storm', setting: '🏠 Living room, peace after a blow-up', spotlight: 'negative-reinforcement',
        npc: 'dad',
        scene: [
          { s: 'dad', t: "(calmly) Look — the last two times you just stopped fighting and actually listened, I backed off. When you fight, I dig in. When you calm down, the pressure comes off. That’s how we work." },
          { s: 'narr', t: "Your dad just described the family’s unwritten rules — and whether he knows it or not, he named a core skill." }
        ],
        ask: 'He removed the pressure when you showed calm. What is that, exactly?',
        options: [
          { label: 'Negative reinforcement — your calm behavior was followed by the removal of his pressure, so staying calm becomes more likely. The pattern rewards itself.', skill: 'negative-reinforcement', correct: true, fb: 'NEGATIVE REINFORCEMENT — the unpleasant pressure was lifted right after the calm appeared. That relief trains the calm to return. 💛' },
          { label: 'It’s positive punishment — you were punished for fighting.', skill: null, correct: false, fb: 'Nothing unpleasant was ADDED for fighting — pressure was REMOVED for calm. Removal of a negative = negative reinforcement. Try again.' },
          { label: 'It’s extinction — the behavior just faded on its own.', skill: null, correct: false, fb: 'Extinction means no consequence at all. Here there was a clear consequence: the pressure stopped when the calm appeared. Try again.' },
          { label: 'It’s a coincidence — his mood just happened to change.', skill: null, correct: false, fb: 'He described the rule himself: calm in → pressure out. That’s a consequence, not a coincidence. Try again.' }
        ]
      },
      {
        id: 's4c10', title: 'The First Parallel Park', setting: '🚗 DMV lot, your very first try', spotlight: 'shaping',
        npc: 'dad',
        scene: [
          { s: 'dad', t: "You parked two feet away and took three tries. Honestly? That was a disaster. We’re going to need another ten sessions." },
          { s: 'narr', t: "Your dad is deflated — and you are too. But wait: a month ago you couldn’t even find the parking spot. Today you actually got between the lines, even if it took three tries." }
        ],
        ask: 'First attempt at a brand-new skill. What does shaping say about this?',
        options: [
          { label: 'Shaping — reward the small steps: you found the spot, you lined up the mirrors, and you got between the lines. Celebrate the closer approximation; the perfect park comes one step at a time.', skill: 'shaping', correct: true, fb: 'SHAPING — you reinforced the closer step instead of demanding the whole win at once. Little praise for each step is how the big skill gets built. 💛' },
          { label: '“It has to be perfect on try one or we start over entirely.”', skill: null, correct: false, fb: 'Demanding perfection on the first try is the opposite of shaping — it snuffs out the progress that was right there. Try again.' },
          { label: '“That’s a disaster, let’s skip straight to the hardest lot.”', skill: null, correct: false, fb: 'Jumping to the hardest version skips the stepping stones that shaping is built on. Try again.' },
          { label: '“You’re just not cut out for parking.”', skill: null, correct: false, fb: 'That verdict punishes the attempt instead of reinforcing the step. Shaping says: every closer try counts. Try again.' }
        ]
      },
      {
        id: 's4c11', title: 'The Two-Minute Cleanup', setting: '🧺 Bedroom, a tiny step forward', spotlight: 'shaping',
        npc: 'mom',
        scene: [
          { s: 'mom', t: "You put your shoes away and made your bed — for five minutes. I’ve been asking for a full cleanup for weeks, and this was… well, partial. Should I even count it?" },
          { s: 'narr', t: "Your mom is trying to be fair but she’s on the fence. You feel the sting — you DID do something. Is it enough to count?" }
        ],
        ask: 'Partial progress toward a bigger goal. The shaping response:',
        options: [
          { label: 'Shaping — reinforce the step: “You made your bed and put away the shoes. That’s real progress. Let’s build on that — next, the floor.” Reward each closer approximation.', skill: 'shaping', correct: true, fb: 'SHAPING — you reinforced the closer step instead of waiting for perfection. The five minutes became a foundation to build on, not a failure to shrug at. 💛' },
          { label: '“No. It’s all or nothing. Full cleanup or it doesn’t count.”', skill: null, correct: false, fb: 'The all-or-nothing rule punishes the step and teaches “why bother.” Shaping rewards the approach. Try again.' },
          { label: '“Don’t reward that — they’ll think partial is good enough forever.”', skill: null, correct: false, fb: 'Reinforcing a step doesn’t set the bar at that step — it builds toward the next one. That’s the whole method. Try again.' },
          { label: '“Just pretend they did the whole thing to keep the peace.”', skill: null, correct: false, fb: 'Rewarding the full goal for a partial behavior sends the wrong signal. Reward the actual step you saw. Try again.' }
        ]
      },
      {
        id: 's4c12', title: 'The Ignored Tantrum', setting: '🛋️ Living room, a little cousin mid-meltdown', spotlight: 'extinction',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "Watch this. Last month every whine got him a snack. I stopped giving in, and now the tantrums barely last a minute before he stops." },
          { s: 'narr', t: "Your sibling is showing you the family’s newest experiment — and it’s working. The meltdowns that used to last forever are shrinking." }
        ],
        ask: 'Why are the tantrums getting shorter?',
        options: [
          { label: 'Extinction — the tantrum stopped paying off (no snack, no attention), so the behavior gradually faded. The reward went away, and so did the behavior.', skill: 'extinction', correct: true, fb: 'EXTINCTION — no payoff meant the behavior had no reason to keep going, so it shrank. That’s extinction in action: the behavior fades when it stops working. 💛' },
          { label: 'The tantrums stopped because he got older and wiser overnight.', skill: null, correct: false, fb: 'No overnight wisdom here — the environment changed. The behavior stopped paying off, so it faded. That’s extinction. Try again.' },
          { label: 'He’s being punished, and punishment built his character.', skill: null, correct: false, fb: 'Nothing unpleasant was added. The key was the removal of the reward — the payoff stopped. That’s extinction, not punishment. Try again.' },
          { label: 'It’s negative reinforcement — his tantrums got rewarded less over time.', skill: null, correct: false, fb: 'Negative reinforcement strengthens a behavior by removing something unpleasant. Here, a behavior got WEAKER because its reward stopped — that’s extinction. Try again.' }
        ]
      },
      {
        id: 's4c13', title: 'The Bad Habit Bet', setting: '🎮 Gaming corner, a habit that won’t quit', spotlight: 'extinction',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "Every time I feel bored I reach for my phone and game for two hours. I want to stop, but the urge is like a magnet. Nothing I do seems to matter." },
          { s: 'narr', t: "The habit feels unstoppable — but look closer: every time he reaches for the phone, he gets the reward (the game), which keeps the habit strong. The payoff is what keeps it alive." }
        ],
        ask: 'You want the habit to weaken. What does extinction say to do?',
        options: [
          { label: 'Remove the payoff — when the bored urge hits, don’t reach for the game. Let the urge rise and pass WITHOUT the reward. The habit fades when it stops paying off — that’s extinction.', skill: 'extinction', correct: true, fb: 'EXTINCTION — you targeted the engine of the habit: the payoff. No reward, and over time the urge loses its pull. The habit fades because it stops working. 💛' },
          { label: '“Willpower is the answer — just grit your teeth and resist forever.”', skill: null, correct: false, fb: 'Pure willpower fights the urge without changing the payoff structure. Extinction changes the reward, which is what actually fades the habit. Try again.' },
          { label: '“Play even more so you get bored of it.”', skill: null, correct: false, fb: 'Playing more just pays the habit more — that reinforces it, not extinguishes it. Try again.' },
          { label: '“The urge is a personality trait — you’ll always game like this.”', skill: null, correct: false, fb: 'The urge is a learned pattern kept alive by a payoff. Remove the payoff and the pattern fades. That’s extinction. Try again.' }
        ]
      },
      {
        id: 's4c14', title: 'The Missed Curfew', setting: '🚪 Front door, 11:20pm', spotlight: 'positive-punishment',
        npc: 'dad',
        scene: [
          { s: 'dad', t: "Eleven. You know the rule. It’s twenty past, and there’s no text, no call. We talked about this." },
          { s: 'narr', t: "You broke the rule you agreed to. Your dad is deciding the consequence right now, and the whole family is watching how this lands." }
        ],
        ask: 'The rule needs to stick. Which move makes the behavior LESS likely next time?',
        options: [
          { label: 'Positive punishment — add a clear, fair consequence after the behavior: “Curfew’s back to ten for the next two weekends, and you text me if you’re late.” Something unpleasant added, right after the act.', skill: 'positive-punishment', correct: true, fb: 'POSITIVE PUNISHMENT — you added a consequence (earlier curfew) right after the behavior, making it less likely to repeat. The rule got teeth. 💛' },
          { label: '“We’ll just forget this ever happened. You’re a good kid.”', skill: null, correct: false, fb: 'No consequence means the behavior has no cost — it’s more likely to repeat. That’s the opposite of punishment. Try again.' },
          { label: '“I’m grounding you for the entire school year.”', skill: null, correct: false, fb: 'A consequence so extreme it stops being believable teaches nothing — it just breeds resentment. Fair and connected beats huge. Try again.' },
          { label: '“This is the third time, so there’s no point even trying.”', skill: null, correct: false, fb: 'Giving up on consequences is the fastest way to make the behavior stick. Consistency is what makes the cost real. Try again.' }
        ]
      },
      {
        id: 's4c15', title: 'The Snuck Screen Time', setting: '📺 Family room, caught red-handed', spotlight: 'positive-punishment',
        npc: 'mom',
        scene: [
          { s: 'mom', t: "The rule was homework BEFORE screens. I found the controller under your pillow and the worksheet still blank at ten." },
          { s: 'narr', t: "You broke the deal and got caught. The question is what happens next — and whether the rule is real or just words." }
        ],
        ask: 'You want this to stop happening. The consequence that actually teaches:',
        options: [
          { label: 'Positive punishment — add a real cost tied to the rule: “No screens tomorrow at all, and tonight’s worksheet gets done before anything else.” Unpleasant addition, right after the behavior.', skill: 'positive-punishment', correct: true, fb: 'POSITIVE PUNISHMENT — you added a clear consequence tied to the broken rule, making the sneak less likely next time. The rule just became enforceable. 💛' },
          { label: '“You’re grounded from screens for six months.”', skill: null, correct: false, fb: 'Huge punishments that everyone knows will crumble don’t change behavior — they just teach “wait it out.” Keep it fair and immediate. Try again.' },
          { label: '“Well, you did it anyway, so let’s just add the screen time.”', skill: null, correct: false, fb: 'Adding screen time after sneaking it rewards the sneaking. The consequence needs to ADD something unpleasant, not more of the thing. Try again.' },
          { label: '“I’m too tired to enforce this tonight. We’ll deal with it later.”', skill: null, correct: false, fb: 'No consequence tonight means the sneak paid off tonight. The behavior needs its cost right away. Try again.' }
        ]
      },
      {
        id: 's4c16', title: 'The Lost Driving Privilege', setting: '🔑 Kitchen, keys on the table', spotlight: 'negative-punishment',
        npc: 'dad',
        scene: [
          { s: 'dad', t: "You drove without permission yesterday. The car keys stay here for the weekend. That privilege is gone until Monday." },
          { s: 'narr', t: "You knew the rule. Now the keys sit on the table and you’re watching something get taken away." }
        ],
        ask: 'What is your dad doing here — and why does it work?',
        options: [
          { label: 'Negative punishment — he’s taking away something you value (the car) after the behavior, so the behavior becomes less likely. Removal of a pleasant thing = negative punishment.', skill: 'negative-punishment', correct: true, fb: 'NEGATIVE PUNISHMENT — something valued (the car) was removed right after the misstep. The loss makes the rule real and the behavior less likely to repeat. 💛' },
          { label: 'Positive punishment — he’s adding the “punishment” of being home.', skill: null, correct: false, fb: 'Nothing was added. Something valuable was TAKEN AWAY. Removing a pleasant thing is the negative-punishment signature. Try again.' },
          { label: 'Negative reinforcement — he’s removing a bad feeling.', skill: null, correct: false, fb: 'Negative reinforcement REMOVES something unpleasant to strengthen a behavior. Here, a pleasant thing was removed to weaken a behavior — that’s negative punishment. Try again.' },
          { label: 'It’s just anger — there’s no real method to it.', skill: null, correct: false, fb: 'There’s a clear method: value removed, right after the behavior, consequence stated. That’s negative punishment doing its job. Try again.' }
        ]
      },
      {
        id: 's4c17', title: 'The Phone Basket', setting: '📱 Dinner table, the new house rule', spotlight: 'negative-punishment',
        npc: 'mom',
        scene: [
          { s: 'mom', t: "New rule: phones go in the basket during dinner. If you pick it up, it goes to my room until the morning — you lose it for the whole night." },
          { s: 'narr', t: "You reach for your phone without thinking, and your mom’s hand is already on it. The phone is about to be gone until morning." }
        ],
        ask: 'You just lost your phone for the night. What mechanism is this?',
        options: [
          { label: 'Negative punishment — the phone (something you value) is taken away after you broke the rule, so reaching for it at dinner becomes less likely. Value removed = behavior weakens.', skill: 'negative-punishment', correct: true, fb: 'NEGATIVE PUNISHMENT — the valued thing (your phone) was removed right after the behavior, so the behavior gets weaker. The loss teaches the rule faster than any lecture. 💛' },
          { label: 'Positive punishment — the basket is the punishment you get.', skill: null, correct: false, fb: 'The basket isn’t the consequence — the REMOVAL of the phone is. Taking away something valued = negative punishment. Try again.' },
          { label: 'Extinction — the phone rule just fades away.', skill: null, correct: false, fb: 'Extinction removes a reward to weaken a behavior. Here a valued item was REMOVED after the behavior — that’s negative punishment. Try again.' },
          { label: 'It’s a coincidence — you just happened to lose the phone.', skill: null, correct: false, fb: 'No coincidence — the removal is tied directly to your reach. That’s the whole mechanism. Try again.' }
        ]
      },
      {
        id: 's4c18', title: 'The Overreaction Guilt', setting: '🛏️ Your room, replaying a blow-up', spotlight: 'validate-self',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "You snapped at your mom over a tiny comment and now you can’t stop replaying it: “Why did I say that? What’s wrong with me? I’m so dramatic.” The self-blame is on a loop." }
        ],
        ask: 'The self-judgment is loud. What does validate-self say instead?',
        options: [
          { label: 'Validate yourself — trace it: you had a brutal week, you were exhausted, and the comment landed on an open wound. Your reaction makes sense given all that. Understanding it isn’t excusing it — it’s the first step to changing it.', skill: 'validate-self', correct: true, fb: 'VALIDATE SELF — you made sense of your own reaction instead of judging it. “Given my week, of course I snapped.” That understanding is where real change starts. 💛' },
          { label: '“I’m just a dramatic person. That’s who I am.”', skill: null, correct: false, fb: 'That verdict stamps you as broken and closes the door on change. Validation traces the WHY, which is where growth lives. Try again.' },
          { label: '“Other people don’t react like this, so I’m defective.”', skill: null, correct: false, fb: 'Comparing your inside to everyone’s outside isn’t validation — it’s a trap. Your reaction has understandable causes too. Try again.' },
          { label: '“I should apologize by hating myself extra hard.”', skill: null, correct: false, fb: 'Self-hatred isn’t an apology — it’s more of the same spiral. Understanding the reaction is what actually lets you repair it. Try again.' }
        ]
      },
      {
        id: 's4c19', title: 'The Crying in the Car', setting: '🚗 Parked car, tears over the license test', spotlight: 'validate-self',
        npc: 'dad',
        scene: [
          { s: 'dad', t: "It’s just a test. You can retake it. Why are you crying like the world ended?" },
          { s: 'narr', t: "He means well, and it lands like a dismissal. You’re crying AND now you’re ashamed of crying — a double layer of hurt." }
        ],
        ask: 'The test went wrong and the tears came. What do you owe yourself here?',
        options: [
          { label: 'Validate self — the tears make sense: you practiced for months, you wanted this badly, and the letdown hit hard. Of course you’re crying. Your feelings are understandable, even if the test can be retaken.', skill: 'validate-self', correct: true, fb: 'VALIDATE SELF — you made sense of your own tears instead of shaming them. Months of hope, one letdown — of course you cried. That understanding lets the shame layer fall away. 💛' },
          { label: '“I’m being so dramatic, I should pull myself together.”', skill: null, correct: false, fb: 'The “pull together” adds shame on top of the real feeling. Validation says the feeling is understandable first. Try again.' },
          { label: '“People who fail tests aren’t allowed to cry about it.”', skill: null, correct: false, fb: 'There’s no rulebook that says only “big” losses deserve tears. Yours make sense given your history. Try again.' },
          { label: '“My dad’s right — I’m overreacting and there’s no reason for this.”', skill: null, correct: false, fb: 'There IS a reason: months of investment and a big hope. His dismissal doesn’t erase the causes. Try again.' }
        ]
      }
    ],
    boss: {
      id: 's4boss', title: 'Boss: The Curfew Summit', theme: 'The family negotiation that decides your independence',
      npc: 'mom',
      intro: [
        { s: 'mom', t: "Family meeting. Curfew, car, and trust — let’s actually settle it like adults tonight." },
        { s: 'narr', t: "Both parents at the table. This is the big one." }
      ],
      rounds: [
        {
          prompt: 'Your mom opens with: “You want independence, I want you safe. Pick one.” Push back — with both.',
          options: [
            { label: '“Independence. Safety is overrated.”', skill: null, correct: false, fb: 'Choosing one truth made them dig in on the other.' },
            { label: '“Both/And: I can be independent AND safe. Those aren’t opposites — that’s what a license is for.”', skill: 'think-dialectically', correct: true, fb: 'THINK DIALECTICALLY — you refused the false choice and made the whole frame better. 💛' },
            { label: '“Fine, safety. Forever. No car.”', skill: null, correct: false, fb: 'You gave up independence to end the fight — and everyone lost.' },
            { label: '“You’re just scared, that’s a you problem.”', skill: null, correct: false, fb: 'Dismissing the fear doesn’t remove it; it removes you from the conversation.' }
          ]
        },
        {
          prompt: 'Your dad adds: “The idea of you out past eleven makes my stomach turn.” He needs to feel heard before he can bend.',
          options: [
            { label: '“You’ll get used to it, it’s fine.”', skill: null, correct: false, fb: '“Get used to it” is what people say when they’re not listening either.' },
            { label: '“I really hear that. New-driver worry is real, and you care about me — that’s why you’re scared. I’m asking you to trust the practice I’ve put in, and I’ll earn it in stages.”', skill: 'act-dialectically', correct: true, fb: 'ACT DIALECTICALLY — acceptance (his fear is real) + change (trust me, in stages). They softened visibly. 💛' },
            { label: '“Well then I guess I’ll just never drive!”', skill: null, correct: false, fb: 'The surrender flipped the table over for no reason.' },
            { label: '“That’s irrational, statistically teenagers are fine.”', skill: null, correct: false, fb: 'Statistics don’t soothe a scared parent. Connection does.' }
          ]
        },
        {
          prompt: 'Time to land the deal. You want midnight. They want ten. What’s the both-win?',
          options: [
            { label: '“Eleven on weekends, I share my location, and I text when I leave. If I’m late once without a call, we go back to ten. Deal?”', skill: 'act-dialectically', correct: true, fb: 'ACT DIALECTICALLY — you bent, they bent, and everyone got something they could live with. 💛' },
            { label: '“Midnight. Final offer.”', skill: null, correct: false, fb: '“Final offer” isn’t a negotiation; it’s a shutdown.' },
            { label: '“Ten it is. Whatever you say.”', skill: null, correct: false, fb: 'You caved on everything — and the resentment starts tonight.' },
            { label: '“Let’s vote on it, majority wins.”', skill: null, correct: false, fb: 'Voting is how you lose 2-to-1 in your own house.' }
          ]
        }
      ],
      final: [
        { s: 'mom', t: "Eleven on weekends, location sharing, text-when-you-leave. Trial month." },
        { s: 'dad', t: "...and your license test is Saturday. Go get it." },
        { s: 'narr', t: "License, here you come. The Middle Path badge set is nearly yours — the closet is about to open wide." }
      ]
    }
  },
  {
    id: 's5', num: 5, title: 'Feel the Facts', moduleId: 'emotion',
    emoji: '🏖️', color: '#46c46e',
    goal: 'A spring break trip with your friends',
    goalEmoji: '🧳',
    age: 17,
    location: 'Senior year, spring',
    challenges: [
      {
        id: 's5c1', title: 'The Left-On-Read Spiral', setting: '📱 Bedroom, again', spotlight: 'check-facts',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "You texted the group: “Spring break ideas?” It’s been three hours. The group chat shows three others online. Your stomach drops: they’re planning without me." }
        ],
        ask: 'That spiral is loud. Check the facts:',
        options: [
          { label: '“They’re 100% planning without me, I can feel it.”', skill: null, correct: false, fb: '“I can feel it” is a feeling, not a fact. Check the actual evidence.' },
          { label: 'List what you actually know: they’re online, they haven’t replied in three hours. That’s it. Then ask directly instead of assuming.', skill: 'check-facts', correct: true, fb: 'CHECK THE FACTS — the facts were thin, and the story was thick. You separated them. 💚' },
          { label: 'Leave the chat entirely as a statement.', skill: null, correct: false, fb: 'The dramatic exit answered a question nobody had asked.' },
          { label: 'Send: “Wow, cool, I guess I’m not invited then.”', skill: null, correct: false, fb: 'The passive-aggressive text turned a maybe into a problem.' }
        ]
      },
      {
        id: 's5c2', title: 'The Jealousy Feed', setting: '📱 Scrolling at 1am', spotlight: 'check-facts',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "You can’t sleep, and everyone’s posting trips — beach sunsets, mountain cabins, airport lounges. Your feed glows with other people’s highlights and your envy burns." }
        ],
        ask: 'Your head is building stories. Check them:',
        options: [
          { label: '“Everyone has a better life than me. I’m the only one stuck here.”', skill: null, correct: false, fb: 'You’re comparing your behind-the-scenes to everyone’s highlight reel — the algorithm’s favorite trick.' },
          { label: '“Wait — these are three-second clips from people I know have hard days too. My trip is still possible. What do I actually want to do this break?”', skill: 'check-facts', correct: true, fb: 'CHECK THE FACTS — you interrupted the compare-and-despair cycle with evidence and a real plan. 💚' },
          { label: 'Stay up all night refreshing the feed.', skill: null, correct: false, fb: 'The feed doesn’t have a “last slide.” It never ends.' },
          { label: 'Text the person in the most enviable photo a sarcastic “congrats.”', skill: null, correct: false, fb: 'The sarcasm felt spicy for one second and embarrassing for the next week.' }
        ]
      },
      {
        id: 's5c3', title: 'The Sleepless Funk', setting: '🛏️ Bed, 2:17am, ceiling staring', spotlight: 'abc-please',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "Two nights of bad sleep. Skipped breakfast, energy drinks all day, no movement. Now you feel like a fog that hates itself, and the future looks hopeless." }
        ],
        ask: 'The PLEASE part of ABC PLEASE — what’s the real lever here?',
        options: [
          { label: 'Push through with another energy drink and a 3am doomscroll.', skill: null, correct: false, fb: 'The chemical crash is doing half the work on your mood.' },
          { label: 'Phone away, lights low, a glass of water, and a walk outside in the morning — treat the body so the mind can follow.', skill: 'abc-please', correct: true, fb: 'ABC PLEASE — sleep, food, movement. The body is a co-author of your mood, and you gave it a better chapter. 💚' },
          { label: '“I’ll just accept that I feel bad forever.”', skill: null, correct: false, fb: 'That’s not acceptance — that’s giving up, and PLEASE says your body has levers left to pull.' },
          { label: 'Vent to your friends at 2am about how nothing matters.', skill: null, correct: false, fb: '3am venting is a mood amplifier, not a mood stabilizer.' }
        ]
      },
      {
        id: 's5c4', title: 'The Parking Ticket Fury', setting: '🚙 Windshield, a big orange envelope', spotlight: 'opposite-action',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "A ticket. For “expired meter” that you swear you paid. Rage floods in, hot and immediate: you want to crumple it, find the parking cop, and let them have it." }
        ],
        ask: 'The anger is telling you to attack. Does it fit the facts?',
        options: [
          { label: 'Crumple the ticket and leave it on the ground for someone else to find.', skill: null, correct: false, fb: 'The crumple felt great for three seconds and now the fee doubled. Ouch.' },
          { label: 'Track down the officer and give them a piece of your mind.', skill: null, correct: false, fb: 'That “piece of your mind” usually ends in a second ticket.' },
          { label: 'The rage doesn’t fit the size of the problem. Act opposite: take the ticket in, pay it online, and take a slow breath — then get back to your day.', skill: 'opposite-action', correct: true, fb: 'OPPOSITE ACTION — the urge was to lash out; you acted opposite with calm and got on with it. The fee is small; the peace is priceless. 💚' },
          { label: 'Refuse to pay it on principle and hope it goes away.', skill: null, correct: false, fb: 'Principle feels noble; the late fees aren’t noble at all.' }
        ]
      },
      {
        id: 's5c5', title: 'The Pre-Trip Stress', setting: '📋 Desk covered in packing lists and budgets', spotlight: 'abc-please',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "Okay so the motel is booked but I forgot to ask about parking and my card might be declined and are we SURE this is happening?!" },
          { s: 'narr', t: "Your friend’s spiral is catching. The trip suddenly feels like a disaster in a trench coat." }
        ],
        ask: 'Keep your own mood out of the storm — how?',
        options: [
          { label: 'Join the spiral: “You’re right, we’re doomed, this was a mistake.”', skill: null, correct: false, fb: 'Two spirals don’t make a right.' },
          { label: 'Cope ahead: “Let’s solve it in order — parking, card, then we’re fine. I’ll call the motel, you double-check your card. One thing at a time.”', skill: 'abc-please', correct: true, fb: 'ABC PLEASE — Cope ahead and build mastery by breaking the storm into steps you can actually take. 💚' },
          { label: '“I’m not going if it’s going to be this stressful.”', skill: null, correct: false, fb: 'The trip you’ve planned for weeks, torpedoed by a parking question.' },
          { label: 'Stay up all night refreshing the motel website.', skill: null, correct: false, fb: 'The website won’t be less anxious tomorrow because you slept worse.' }
        ]
      },
      {
        id: 's5c6', title: 'The Tight Chest', setting: '🎒 Hallway, before the group trip meeting', spotlight: 'identify-label-emotions',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "The group trip meeting is in five minutes and your chest is tight, your hands are cold, and there’s a knot in your stomach. You don’t even know why — it’s just your friends." }
        ],
        ask: 'The body is talking. What’s the first skill step?',
        options: [
          { label: 'Identify and label — name it: “I’m anxious about this meeting. My chest is tight and my hands are cold.” Naming the emotion and its body signals makes it smaller and clearer.', skill: 'identify-label-emotions', correct: true, fb: 'IDENTIFY AND LABEL — you noticed the emotion, named it, and linked it to its body signals. The tight chest got a name, and the name took the edge off. 💚' },
          { label: '“I’m fine. I don’t know why I feel weird. Let’s just go.”', skill: null, correct: false, fb: '“I’m fine” is a shut-off valve, not a label. Naming the feeling is what lets you actually handle it. Try again.' },
          { label: '“This is probably anger or maybe excitement — whatever, it’s one of those.”', skill: null, correct: false, fb: 'A fuzzy “one of those” isn’t a label. The skill is precise: name the emotion and the urge that comes with it. Try again.' },
          { label: 'The body signals are just noise — ignore them and move.', skill: null, correct: false, fb: 'Body signals are information. The skill starts by reading them, not ignoring them. Try again.' }
        ]
      },
      {
        id: 's5c7', title: 'The Afternoon Irritation', setting: '🧊 Kitchen, a cold drink at 4pm', spotlight: 'identify-label-emotions',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "You seem off today. Every little thing is setting you off — you almost snapped at the cashier for a smile." },
          { s: 'narr', t: "Your friend’s right. You’ve been prickly all afternoon and you’re not sure why. The irritation is there, but the cause is blurry." }
        ],
        ask: 'Unblur it. What’s the move?',
        options: [
          { label: 'Identify and label — check the signals: hungry, tired, three hours of noise. Name it: “I’m cranky because I’m hungry and wiped, and I’ve been confusing that with everyone being annoying.”', skill: 'identify-label-emotions', correct: true, fb: 'IDENTIFY AND LABEL — you named the real emotion and its cause: hunger and exhaustion dressing up as anger. Once it had a label, it lost its grip. 💚' },
          { label: '“I’m not irritated. You’re imagining it.”', skill: null, correct: false, fb: 'Denying the emotion doesn’t label it — it keeps you stuck in the blur. The skill is naming what’s actually there. Try again.' },
          { label: '“Everyone IS annoying today. That’s the whole explanation.”', skill: null, correct: false, fb: '“Everyone is annoying” blames the world instead of naming your inner state. Look at your own signals first. Try again.' },
          { label: 'Just push through the rest of the day on autopilot.', skill: null, correct: false, fb: 'Autopilot keeps the unnamed emotion running the show. Naming it is the off-ramp. Try again.' }
        ]
      },
      {
        id: 's5c8', title: 'The Rainy Break', setting: '🌧️ Afternoon, plans canceled again', spotlight: 'pleasant-activities',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "Second rain-out this week. I’m so over it. I’m just going to sit here and be miserable until it clears." },
          { s: 'narr', t: "You feel the same gloom settling in. The day is empty and gray, and doing nothing is starting to feel like the only option." }
        ],
        ask: 'The mood is dipping. What keeps it from sinking?',
        options: [
          { label: 'Engage in pleasant activities — on purpose: “Okay, let’s make the afternoon ours — we’ll make the playlist, bake the cookies we keep putting off, and watch that movie.” Fun, deliberately.', skill: 'pleasant-activities', correct: true, fb: 'ENGAGE IN PLEASANT ACTIVITIES — you chose fun on purpose instead of waiting for it. Doing something enjoyable is how you lift the mood rather than sit in it. 💚' },
          { label: '“We can’t control the weather, so why even try to feel good?”', skill: null, correct: false, fb: 'You can’t control the weather — and you CAN choose an activity that feels good. That’s the whole skill. Try again.' },
          { label: 'Wait until you “feel like” doing something fun.', skill: null, correct: false, fb: 'Pleasant activities usually come first; the feeling follows. Waiting for the mood to move first keeps you parked. Try again.' },
          { label: 'Do homework so the empty day is at least productive.', skill: null, correct: false, fb: 'Productivity is good — but the skill here is deliberately building in enjoyment, not replacing it with chores. Try again.' }
        ]
      },
      {
        id: 's5c9', title: 'The Post-Trip Blah', setting: '🏠 Home, the day after the trip ends', spotlight: 'pleasant-activities',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "The trip’s over and everything back home feels flat. I keep scrolling the photos and feeling worse." },
          { s: 'narr', t: "The post-trip drop is real — the fun is over, the routine is gray, and the letdown feels like it’s here to stay." }
        ],
        ask: 'The letdown is sitting on you. What breaks the flat feeling?',
        options: [
          { label: 'Engage in pleasant activities — don’t wait for the excitement to come back: plan a small good thing today (a favorite meal, a walk with music), and put a tiny one on the calendar for this week.', skill: 'pleasant-activities', correct: true, fb: 'ENGAGE IN PLEASANT ACTIVITIES — you rebuilt the day with deliberate fun instead of waiting for the mood to return on its own. The post-trip flatness got a chink of light. 💚' },
          { label: 'Replay the trip photos for hours to “stay in the good feeling.”', skill: null, correct: false, fb: 'Replaying the past keeps you comparing the present to it — and that comparison feeds the letdown. Try again.' },
          { label: '“The trip was the peak, so everything now is pointless.”', skill: null, correct: false, fb: 'That “peak means everything after is flat” story is what the letdown is telling you. Pleasant activities prove it wrong, one small thing at a time. Try again.' },
          { label: 'Wait for the next big trip to feel good again.', skill: null, correct: false, fb: 'Waiting for the next big event outsources your mood. The skill is building small good moments right now. Try again.' }
        ]
      },
      {
        id: 's5c10', title: 'The Two Invites', setting: '📅 Saturday, two plans at once', spotlight: 'values-priorities',
        npc: 'friend2',
        scene: [
          { s: 'friend2', t: "So Saturday there’s the beach thing AND the tutoring session you promised to help with. You can’t do both. Which one are you picking?" },
          { s: 'narr', t: "Both pull at you — the fun sounds amazing, and you made a promise to help. You can feel the tug." }
        ],
        ask: 'Two good things, one Saturday. How do you choose?',
        options: [
          { label: 'Values and priorities — ask what matters most in wise mind: you value your word and your friendships. The tutoring is a promise you made; the beach is fun you can plan for another week. Values first, then the call.', skill: 'values-priorities', correct: true, fb: 'VALUES AND PRIORITIES — you ran the decision through what matters to you and let the value set the priority. The promise won because it’s closer to who you are. 💚' },
          { label: 'Flip a coin — they’re both equal anyway.', skill: null, correct: false, fb: 'They’re not equal — one matches your values and the other is impulse. The skill is choosing by what matters, not by chance. Try again.' },
          { label: '“Do the beach and text a fake excuse for the tutoring.”', skill: null, correct: false, fb: 'The fake excuse betrays the value (keeping your word) that matters most to you. The skill is honesty first. Try again.' },
          { label: '“Pick the one that makes me look best in the group chat.”', skill: null, correct: false, fb: 'Choosing by how it looks instead of what matters is the opposite of values-and-priorities. Try again.' }
        ]
      },
      {
        id: 's5c11', title: 'The All-Or-Nothing Week', setting: '📆 Sunday planning, overbooked', spotlight: 'values-priorities',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "I have to ace every class, train for the meet, keep up the vlog, AND be there for everyone. If I drop one thing, I’m a failure." },
          { s: 'narr', t: "Your friend is trying to do everything and it’s all flattening into one giant blur of obligation." }
        ],
        ask: 'It can’t all be priority one. What does the skill say?',
        options: [
          { label: 'Values and priorities — decide what matters most this week and protect it: “What’s the one thing that would hurt most to lose? That’s the priority. The rest can move.” Values sort the pile.', skill: 'values-priorities', correct: true, fb: 'VALUES AND PRIORITIES — you stopped the all-or-nothing pile-up and picked what matters most to protect. Priorities come from values, not from “I must do everything.” 💚' },
          { label: '“You should be able to do it all — just try harder.”', skill: null, correct: false, fb: '“Try harder” feeds the all-or-nothing trap. The skill is about choosing, not cramming everything into priority one. Try again.' },
          { label: '“If you drop anything you ARE a failure, so don’t drop anything.”', skill: null, correct: false, fb: 'That’s the all-or-nothing story talking. Values-and-priorities says: not everything can be number one — and that’s okay. Try again.' },
          { label: '“Let someone else decide for you — less pressure.”', skill: null, correct: false, fb: 'Outsourcing the decision skips the skill. Values-and-priorities is about knowing what matters to YOU. Try again.' }
        ]
      },
      {
        id: 's5c12', title: 'The First Page', setting: '📖 Your desk, a dream you keep postponing', spotlight: 'long-term-goals',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "You’ve wanted to learn guitar for years. The dream is big and shiny and completely untouched. Every time you think about it, the gap between “now” and “good” feels so huge you don’t even start." }
        ],
        ask: 'The gap feels enormous. What gets the long-term goal moving?',
        options: [
          { label: 'Work toward long-term goals — break it into today-sized steps: “Learn three chords this month. Practice fifteen minutes today.” One small step at a time, day after day.', skill: 'long-term-goals', correct: true, fb: 'WORK TOWARD LONG-TERM GOALS — you turned the giant dream into today-sized steps and took the first one. That’s exactly how far-away goals get reached. 💚' },
          { label: 'Wait until you have a solid block of free time to “really learn it.”', skill: null, correct: false, fb: 'The “solid block” never arrives, so neither does the goal. Long-term goals are built from small regular steps. Try again.' },
          { label: '“I’ll start when I’m already good at it.”', skill: null, correct: false, fb: 'No one starts good — they start small. The skill is starting with the first small step, not with mastery. Try again.' },
          { label: '“The goal is too big, so it’s basically impossible. Skip it.”', skill: null, correct: false, fb: 'The goal isn’t impossible — it’s just undivided. Cutting it into steps is the whole method. Try again.' }
        ]
      },
      {
        id: 's5c13', title: 'The Two-Week Plan', setting: '🗓️ Fridge calendar, before the trip', spotlight: 'long-term-goals',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "The trip is in two weeks and we need money, snacks, and a plan. My impulse is to panic about all of it at once." },
          { s: 'narr', t: "The whole trip is a mountain of tasks. Panicking about all of it at once feels like the only response — but there’s a skill for exactly this." }
        ],
        ask: 'The mountain of tasks is looming. What makes it climbable?',
        options: [
          { label: 'Work toward long-term goals — break it down: “This week: save the money. Next week: book the snacks and the plan. Today: one small task.” One step at a time toward the two-week goal.', skill: 'long-term-goals', correct: true, fb: 'WORK TOWARD LONG-TERM GOALS — you turned the looming trip into weekly, today-sized steps. The mountain became a staircase. 💚' },
          { label: 'Try to do every trip task tonight so it’s “out of the way.”', skill: null, correct: false, fb: 'Doing everything at once is a burnout machine — and it still won’t be done in one night. Small regular steps build the goal. Try again.' },
          { label: '“Two weeks is too soon to plan anything. We’ll wing it.”', skill: null, correct: false, fb: 'Winging it isn’t a plan — it’s the goal left to chance. The skill is steps toward it, starting today. Try again.' },
          { label: '“Panic is the only honest response to a two-week deadline.”', skill: null, correct: false, fb: 'Panic feels honest and doesn’t move the goal. Breaking it into steps is what actually gets the trip done. Try again.' }
        ]
      },
      {
        id: 's5c14', title: 'The Cooked Dinner', setting: '🍲 Kitchen, you made a real meal', spotlight: 'build-mastery',
        npc: 'mom',
        scene: [
          { s: 'mom', t: "You made dinner from scratch — the whole thing, by yourself, without a recipe panic. I’m impressed." },
          { s: 'narr', t: "The last few weeks have been rough on your confidence. But this — you planned, you cooked, you served it, and it was actually good." }
        ],
        ask: 'Your confidence is low and you just did something real. What do you do with this win?',
        options: [
          { label: 'Build mastery — take it in and do more of it: “I made that whole meal. I can learn new things.” Add one more small thing you’re good at to this week, on purpose.', skill: 'build-mastery', correct: true, fb: 'BUILD MASTERY — you soaked in the win and committed to stacking more of them. Doing things that make you proud is how confidence actually gets built. 💚' },
          { label: '“Anyone could make a simple dinner. It’s not impressive.”', skill: null, correct: false, fb: 'That dismissal cancels the mastery win before it lands. The skill is letting the win count. Try again.' },
          { label: '“One good dinner doesn’t change that I’m bad at everything else.”', skill: null, correct: false, fb: 'Build mastery isn’t about being good at everything — it’s about stacking real wins to rebuild self-confidence. Let this one count. Try again.' },
          { label: 'Don’t think about it — one win doesn’t matter.', skill: null, correct: false, fb: 'It matters precisely because confidence is built one win at a time. Noticing and repeating them is the skill. Try again.' }
        ]
      },
      {
        id: 's5c15', title: 'The Parking Spot', setting: '🚗 Lot, you parallel parked on the first try', spotlight: 'build-mastery',
        npc: 'dad',
        scene: [
          { s: 'dad', t: "Wait — you did that on the first try, no touch-ups. That’s the thing you were terrified of a month ago." },
          { s: 'narr', t: "A month ago you couldn’t park without white-knuckling. Today it was smooth. Your dad’s right, and the moment is real." }
        ],
        ask: 'You just aced something you used to fear. How do you bank it?',
        options: [
          { label: 'Build mastery — name the win out loud and schedule another: “I parallel parked first try. That skill is mine now.” Then take on one more small thing you’re afraid of this month.', skill: 'build-mastery', correct: true, fb: 'BUILD MASTERY — you named the win, owned it, and pointed it at the next challenge. Each mastered thing makes the next one feel possible. 💚' },
          { label: '“It was probably luck. The spot was just big.”', skill: null, correct: false, fb: 'Discounting the win as luck erases the mastery. The skill is taking credit for what you earned. Try again.' },
          { label: '“One parking spot doesn’t make me a good driver overall.”', skill: null, correct: false, fb: 'Build mastery is about stacking wins, not about becoming flawless. Let the skill count toward your confidence. Try again.' },
          { label: 'Don’t say anything — don’t jinx the streak.', skill: null, correct: false, fb: 'No jinx — just a win waiting to be banked. Naming it is part of building mastery. Try again.' }
        ]
      },
      {
        id: 's5c16', title: 'The Exam Tomorrow', setting: '🛏️ Your room, night before a big test', spotlight: 'cope-ahead',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "I’m terrified about tomorrow’s exam. I can already picture blanking out and everyone watching me fail." },
          { s: 'narr', t: "The fear is loud and tomorrow feels like a trap. But you know the moment coming, and you can walk through it before it happens." }
        ],
        ask: 'The hard moment is coming tomorrow. What do you do tonight?',
        options: [
          { label: 'Cope ahead — rehearse it: walk through the exam in your head, picture the panic rising, and plan the exact skill: “When I blank, I’ll take three slow breaths, then read the next question.” Rehearse the skill for the moment.', skill: 'cope-ahead', correct: true, fb: 'COPE AHEAD — you rehearsed the hard moment before it arrived and planned the exact skill for it. When tomorrow comes, your brain has already practiced. 💚' },
          { label: '“Just don’t think about tomorrow and hope it goes well.”', skill: null, correct: false, fb: 'Avoiding the rehearsal means the panic will write the script tomorrow. Cope ahead is practicing the plan first. Try again.' },
          { label: 'Rehearse the worst-case disaster in detail so you’re “ready.”', skill: null, correct: false, fb: 'Rehearsing the disaster is the opposite of coping ahead — you’re practicing the panic. Practice the skill instead. Try again.' },
          { label: '“I can’t plan for it, exams are too unpredictable.”', skill: null, correct: false, fb: 'You can’t plan the questions — and you CAN plan your response to the panic. That’s the part worth rehearsing. Try again.' }
        ]
      },
      {
        id: 's5c17', title: 'The Big Ask Tomorrow', setting: '💬 Phone in hand, drafting the message', spotlight: 'cope-ahead',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "Tomorrow you’re asking your parents for the trip money — the conversation you’ve been dreading for a week. The more you avoid picturing it, the bigger it gets." }
        ],
        ask: 'The conversation is coming whether you’re ready or not. What readies you?',
        options: [
          { label: 'Cope ahead — rehearse the whole scene: how they’ll react, where your anxiety spikes, and the exact skill you’ll use (state facts, stay calm, name the feeling). Walk through it once tonight.', skill: 'cope-ahead', correct: true, fb: 'COPE AHEAD — you rehearsed the hard conversation before it happened: their reaction, your spike, your skill. When it’s real tomorrow, you’ve already been there. 💚' },
          { label: 'Draft the message now and send it at midnight so there’s “no going back.”', skill: null, correct: false, fb: 'Sending it cold at midnight skips the rehearsal — the skill part — and guarantees the panic writes the ask. Try again.' },
          { label: '“I’ll figure it out when I get there. I’m good under pressure.”', skill: null, correct: false, fb: '“Good under pressure” usually means the pressure does the improvising. Cope ahead means practicing before the spotlight. Try again.' },
          { label: 'Rehearse every way they could say no until you feel doomed.', skill: null, correct: false, fb: 'Rehearsing the rejections is rehearsing the panic. Cope ahead rehearses the SKILL, not the catastrophe. Try again.' }
        ]
      },
      {
        id: 's5c18', title: 'The Flat Tire', setting: '🛞 Parking lot, the trip van has a flat', spotlight: 'do-problem-solving',
        npc: 'sibling',
        scene: [
          { s: 'sibling', t: "Flat tire. We’re supposed to leave in an hour. What do we even do? Is the whole trip cancelled?" },
          { s: 'narr', t: "The panic wants to skip straight to “it’s all over.” But the flat tire is a problem, and problems have steps." }
        ],
        ask: 'Big problem, loud panic. How do you actually solve it?',
        options: [
          { label: 'Do problem solving — name it, list options, pick one, act: “Problem: flat tire before the trip. Options: call roadside, swap the spare, ask a neighbor for a pump. We call roadside first.” One step at a time.', skill: 'do-problem-solving', correct: true, fb: 'DO PROBLEM SOLVING — you named the problem, generated options, picked one, and moved. The flat tire stopped being the end of the trip and became a step to take. 💚' },
          { label: '“It’s over. Cancel everything. This always happens to us.”', skill: null, correct: false, fb: 'The “it’s over” leap skips the whole problem-solving process. A flat tire has options; the trip isn’t dead yet. Try again.' },
          { label: 'Stand in the lot shouting about how unfair it is.', skill: null, correct: false, fb: 'The shout feels honest and solves nothing. Problem solving is the move. Try again.' },
          { label: 'Wait for someone else to handle it — someone always does.', skill: null, correct: false, fb: 'Waiting hands the wheel to chance. The skill is taking the first step yourself. Try again.' }
        ]
      },
      {
        id: 's5c19', title: 'The Overbooked Saturday', setting: '📋 Saturday, six things scheduled', spotlight: 'do-problem-solving',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "I said yes to EVERYTHING this weekend and now there’s no way to fit it all. I don’t even know where to start. I’m drowning." },
          { s: 'narr', t: "The Saturday pile-up is real and your friend is frozen in the middle of it — too overwhelmed to take one step." }
        ],
        ask: 'The pile is overwhelming. What unsticks it?',
        options: [
          { label: 'Do problem solving — name it, break it down, pick one move: “Problem: six things, one day. Write them all down, mark the must-dos, drop or move the rest, and start with the first must-do.” One step.', skill: 'do-problem-solving', correct: true, fb: 'DO PROBLEM SOLVING — you named the problem, wrote it out, sorted it, and took one step. The overwhelming Saturday became a list with a next action. 💚' },
          { label: '“Try to do all six at once so it’s fair to everyone.”', skill: null, correct: false, fb: 'Doing everything at once is the same pile with worse odds. Problem solving sorts and prioritizes first. Try again.' },
          { label: '“There’s no solution. You overbooked and now you suffer.”', skill: null, correct: false, fb: 'There’s always a next step — even if it’s canceling one thing. “No solution” is the overwhelm talking. Try again.' },
          { label: '“Just ignore it all and hope the weekend sorts itself out.”', skill: null, correct: false, fb: 'The weekend won’t sort itself — it’ll sort you. Name the problem and take the first small step. Try again.' }
        ]
      },
      {
        id: 's5c20', title: 'The Wave of Fury', setting: '🚦 Stuck in traffic, running late', spotlight: 'riding-the-wave',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "You’re going to be late for the trip meetup and traffic is crawling. A huge wave of fury builds in your chest — hot, fast, and demanding you do something NOW." }
        ],
        ask: 'The wave is huge and you can’t make traffic move. What do you do with it?',
        options: [
          { label: 'Ride the wave — don’t fight it and don’t act on it. Notice the fury swell, peak, and start to fall. You can’t act on the wave right now anyway — so just let it pass through you.', skill: 'riding-the-wave', correct: true, fb: 'RIDING THE WAVE — you watched the fury rise, peak, and recede without being swept into a bad decision. The wave came and went; you stayed. 💚' },
          { label: 'Honk, swerve, and text the group “I’m almost there!!!” to discharge the anger.', skill: null, correct: false, fb: 'Acting on the wave (honking, swerving, frantic texts) is getting swept by it — and it makes things worse. Ride it instead. Try again.' },
          { label: '“I should NOT be this mad. Get over it, this is ridiculous.”', skill: null, correct: false, fb: 'Fighting the wave by judging yourself just adds a second wave on top. The skill is riding it, not wrestling it. Try again.' },
          { label: 'Bottle it: press the fury down hard and pretend you’re calm.', skill: null, correct: false, fb: 'Bottling isn’t riding — it’s damning the wave, and it bursts later. Let it rise and fall on its own. Try again.' }
        ]
      },
      {
        id: 's5c21', title: 'The Homesick Wave', setting: '🌙 Hotel room, first night away', spotlight: 'riding-the-wave',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "(quietly) I thought I’d be fine, but it’s hitting me out of nowhere — I miss home so much I want to leave tonight." },
          { s: 'narr', t: "Your friend is in the middle of a sudden, huge wave of homesickness — and the urge is to act on it right now, pack up, and bolt." }
        ],
        ask: 'The wave is huge. What helps your friend survive tonight without acting on it?',
        options: [
          { label: 'Ride the wave — sit with it, notice it swell and start to fall, and remind them they don’t have to act on it tonight. The feeling will crest and recede on its own, like it always does.', skill: 'riding-the-wave', correct: true, fb: 'RIDING THE WAVE — you helped them surf the surge instead of bolting. The homesickness peaked and began to fall, and the night was survivable. 💚' },
          { label: '“You should just go home — if it hurts this much, you should act on it now.”', skill: null, correct: false, fb: 'Acting on the peak of the wave is when people make the biggest decisions they regret. The skill is riding the surge first. Try again.' },
          { label: '“Stop feeling that. You’re ruining the trip for everyone.”', skill: null, correct: false, fb: 'Pushing the feeling down or shaming it doesn’t flatten the wave — it just adds a second one. Ride it. Try again.' },
          { label: '“The homesickness won’t fall. It’s going to stay this huge forever.”', skill: null, correct: false, fb: 'Every wave peaks and falls — homesickness included. That fall is what riding the wave waits for. Try again.' }
        ]
      }
    ],
    boss: {
      id: 's5boss', title: 'Boss: The Spring Break Plan', theme: 'When your friend’s trip is fancier than yours',
      npc: 'friend2',
      intro: [
        { s: 'friend2', t: "Guys, huge news — my parents are funding the beach trip! Real beach, real hotel, the works!" },
        { s: 'narr', t: "Envy stabs you. Your budget trip suddenly feels shabby. The urge: withdraw, be cold, “congratulate” through gritted teeth." }
      ],
      rounds: [
        {
          prompt: 'The envy is loud and it’s telling you a story. Check the facts first.',
          options: [
            { label: '“Of course THEY get the nice trip. I never get anything good.”', skill: null, correct: false, fb: 'That “never” is the envy writing fiction.' },
            { label: 'What are the actual facts? — “My friend got funding I didn’t. That’s all. Our trip is still happening, and I’m still going with people I love.”', skill: 'check-facts', correct: true, fb: 'CHECK THE FACTS — you separated the fact (they got funding) from the story (I’m doomed to miss out). 💚' },
            { label: '“I don’t even care about their dumb beach trip.”', skill: null, correct: false, fb: '“I don’t care” said loudly usually means you care a lot.' },
            { label: 'Silently start planning to one-up them with a fancier trip you can’t afford.', skill: null, correct: false, fb: 'The one-up is a debt-generating machine.' }
          ]
        },
        {
          prompt: 'The envy still wants you to withdraw and get cold. Act opposite to the urge.',
          options: [
            { label: 'Be genuinely warm: “That’s amazing, I’m really happy for you! Send me beach pics!”', skill: 'opposite-action', correct: true, fb: 'OPPOSITE ACTION — the urge said withdraw; you leaned in warm instead. Envy shrinks when you move toward the person. 💚' },
            { label: 'Give a terse “cool.” and don’t look up.', skill: null, correct: false, fb: 'The cold shoulder said everything the word “cool” didn’t.' },
            { label: 'Start a side argument about why their trip is wasteful.', skill: null, correct: false, fb: 'The lecture was the envy in a trench coat.' },
            { label: 'Post about how “true friends don’t need money.”', skill: null, correct: false, fb: 'The subtweet is a small, public wound.' }
          ]
        },
        {
          prompt: 'Now rebuild — your trip still matters. Use Cope Ahead to make it great on your terms.',
          options: [
            { label: '“My trip is what I can afford, and that’s fine. Let’s make ours the best version of itself — cheap eats, long walks, no drama.”', skill: 'abc-please', correct: true, fb: 'ABC PLEASE — Cope ahead and build mastery: you stopped comparing and started planning your own win. 💚' },
            { label: '“Let’s just cancel ours, what’s the point.”', skill: null, correct: false, fb: 'Canceling your fun because someone else has more is letting the envy drive.' },
            { label: '“We should guilt-trip them into splitting their hotel.”', skill: null, correct: false, fb: 'The guilt-trip poisons the whole friend group.' },
            { label: 'Keep obsessing about their itinerary for the next hour.', skill: null, correct: false, fb: 'Their itinerary isn’t your life — but it’s taking up your brain.' }
          ]
        }
      ],
      final: [
        { s: 'friend2', t: "Okay but your trip sounds SO much more fun. Cheap diner road trips are legendary. Can I come on yours too?" },
        { s: 'narr', t: "Both trips happen. Yours is full of your people. And your Emotion Regulation badge set is complete." }
      ]
    }
  },
  {
    id: 's6', num: 6, title: 'Speak with Skill', moduleId: 'interpersonal2',
    emoji: '🎓', color: '#e2519a',
    goal: 'Graduating from high school',
    goalEmoji: '🎓',
    age: 18,
    location: 'Graduation season',
    challenges: [
      {
        id: 's6c1', title: 'The Grade Dispute', setting: '📋 After class', spotlight: 'dearman',
        npc: 'teacher2',
        scene: [
          { s: 'teacher2', t: "Seventy-eight on the essay. Solid work, but the citations were light." },
          { s: 'narr', t: "You checked the rubric — you actually included three of the four required sources. This looks like a grading slip." }
        ],
        ask: 'You want the grade reviewed. Make the ask count:',
        options: [
          { label: '“This is wrong. You made a mistake. Fix it.”', skill: null, correct: false, fb: 'The accusation guaranteed a defensive answer. No one fixes things while being blamed.' },
          { label: '“Um, sorry to bother you, sorry, I just, um, was wondering, if you had time, sorry—”', skill: null, correct: false, fb: 'The apology soup buried your request entirely.' },
          { label: 'Describe it plainly: “I saw the rubric asks for four sources and I listed three. I’m wondering if my score reflects that. Could we double-check the citations together?”', skill: 'dearman', correct: true, fb: 'DEAR MAN — Describe, Express, Assert, Reinforce. Facts first, calm ask, no apology-flavored sandwich. 💗' },
          { label: 'Post the grade on social media and let the internet weigh in.', skill: null, correct: false, fb: 'Public shaming is not a grade-appeal process.' }
        ]
      },
      {
        id: 's6c2', title: 'The Prom Funding Ask', setting: '🍽️ Dinner table', spotlight: 'dearman',
        npc: 'mom',
        scene: [
          { s: 'mom', t: "Prom costs money, kiddo. Tickets, dress, dinner — it adds up. What’s the real ask here?" },
          { s: 'narr', t: "You need help covering the ticket. This is the moment to say it like you mean it." }
        ],
        ask: 'Make the specific, reinforced ask:',
        options: [
          { label: '“Can I have money? Please? I need it for, like, everything.”', skill: null, correct: false, fb: 'The vague ask got a vague answer.' },
          { label: '“If you don’t pay for prom, I’ll just look terrible and it’s your fault.”', skill: null, correct: false, fb: 'The guilt-trip turned a request into a threat.' },
          { label: '“The ticket is eighty dollars. I have forty saved. If you cover the other forty, I’ll pay you back with my weekend shifts by June. It means a lot to go with everyone.”', skill: 'dearman', correct: true, fb: 'DEAR MAN — Describe, Express, Assert, Reinforce, and a clear negotiation. A request she could actually say yes to. 💗' },
          { label: 'Drop hints about prom all week and hope she offers.', skill: null, correct: false, fb: 'The hinting strategy leaves both of you guessing.' }
        ]
      },
      {
        id: 's6c3', title: 'The Group Project Free-Rider', setting: '📚 Library, two days to deadline', spotlight: 'problem-solving',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "Okay so we’re all here except… Jordan, who has done literally nothing. We have two days. We’re cooked." },
          { s: 'narr', t: "You’re the de-facto leader. The deadline is close and the panic is real." }
        ],
        ask: 'Big problem, tiny timeline. Break it down:',
        options: [
          { label: '“Let’s just split his part between us and stay up all night.”', skill: null, correct: false, fb: 'Burning yourselves out rewards the free-rider and punishes the team.' },
          { label: '“I’ll handle it. Everyone else, go home.”', skill: null, correct: false, fb: 'The martyr play: the project survives and you collapse.' },
          { label: 'Name it, split it: “Jordan’s part is slides 8-14. We split it three ways tonight, I’ll email the teacher to flag the situation, and we each take one chunk. Done is better than perfect.”', skill: 'problem-solving', correct: true, fb: 'PROBLEM SOLVING — name the problem, split the work, add a safety valve. You fixed it instead of absorbing it. 💗' },
          { label: '“Let’s just write a scathing group review of Jordan instead.”', skill: null, correct: false, fb: 'The review feels cathartic and doesn’t finish a single slide.' }
        ]
      },
      {
        id: 's6c4', title: 'The Hurtful Text', setting: '💬 Your own text thread', spotlight: 'apology',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "That text hurt, honestly. You called it “embarrassing” in front of the whole group and I heard it." },
          { s: 'narr', t: "You did. It was a joke, but the joke landed on your friend, and they’re quietly hurt." }
        ],
        ask: 'A real apology — not a “sorry you feel that way”:',
        options: [
          { label: '“Sorry if you were offended. I was joking.”', skill: null, correct: false, fb: 'The “sorry if” converts an apology into an accusation. Try again.' },
          { label: '“That’s how my jokes are. Everyone knows that.”', skill: null, correct: false, fb: 'The defense of the joke matters less than the person it hit.' },
          { label: '“That was wrong of me. Calling it ‘embarrassing’ in front of everyone was hurtful and I shouldn’t have. I’ll do better — and I won’t make that joke again. Can I make it right?”', skill: 'apology', correct: true, fb: 'EFFECTIVE APOLOGY — you named the harm, owned it, committed to change. That’s how trust gets repaired. 💗' },
          { label: '“Let’s never talk about it again.”', skill: null, correct: false, fb: 'The “never talk about it” plan leaves a splinter in the friendship.' }
        ]
      },
      {
        id: 's6c5', title: 'The Counselor Snap', setting: '🧑‍🏫 Counselor’s office, after a long day', spotlight: 'apology',
        npc: 'counselor',
        scene: [
          { s: 'counselor', t: "(kindly) You’ve missed two check-ins, and the form is due Friday. I need you on this." },
          { s: 'narr', t: "Your patience is in shreds. You snapped: “I KNOW, okay?! You don’t have to remind me, I’m not a child!” Silence. You regret it instantly." }
        ],
        ask: 'You need this person on your side. Repair it:',
        options: [
          { label: 'Pretend it didn’t happen and change the subject.', skill: null, correct: false, fb: 'The elephant stays in the office for every future meeting.' },
          { label: '“I’m sorry I snapped. You’re trying to help and I took it out on you. That was on me. Can we start over?”', skill: 'apology', correct: true, fb: 'EFFECTIVE APOLOGY — you owned the snap without the excuse. The counselor’s shoulders dropped. 💗' },
          { label: '“Well, you did keep reminding me, so it’s partly your fault.”', skill: null, correct: false, fb: 'The partial-blame split turned your apology into an argument.' },
          { label: '“Sorry. I’m just really stressed. (wink) You get it.”', skill: null, correct: false, fb: 'The wink turned a repair into a vibe — and she didn’t get it.' }
        ]
      }
    ],
    boss: {
      id: 's6boss', title: 'Boss: The Graduation Requirement', theme: 'Twenty hours of service, two weeks to go',
      npc: 'counselor',
      intro: [
        { s: 'counselor', t: "Here’s the hard one: graduation needs twenty hours of community service. You have six. Two weeks left." },
        { s: 'narr', t: "Your stomach drops. Graduation is on the line and your schedule is already full." }
      ],
      rounds: [
        {
          prompt: 'You feel the panic and the urge to argue with the requirement. State the facts first instead.',
          options: [
            { label: '“That’s an unfair rule, someone should change it!”', skill: null, correct: false, fb: 'The protest didn’t create fourteen hours of service.' },
            { label: 'Describe it plainly: “I have six of twenty hours, two weeks left, and I want to graduate. I’m asking for options to close the gap.”', skill: 'dearman', correct: true, fb: 'DEAR MAN — facts, feeling, and the ask, all in one clean line. 💗' },
            { label: '“So I just won’t graduate then. Great.”', skill: null, correct: false, fb: 'The surrender is a decision the panic made for you.' },
            { label: 'Stay silent and hope she forgets.', skill: null, correct: false, fb: 'The hope strategy has a 0% graduation success rate.' }
          ]
        },
        {
          prompt: 'The counselor offers help: “There’s an emergency service fair Friday, and the food bank takes walk-ins all week.” Turn this into a plan.',
          options: [
            { label: '“Okay, I’ll think about it and let you know. Eventually.”', skill: null, correct: false, fb: 'The “eventually” plan usually becomes the “didn’t graduate” plan.' },
            { label: '“I’ll hit the food bank three nights this week and the fair on Friday — that’s fourteen hours. I’ll log every shift with you. Does that work?”', skill: 'problem-solving', correct: true, fb: 'PROBLEM SOLVING — you named the gap, found the resources, and made a concrete plan. 💗' },
            { label: '“Can you just… bump the number? Like, unofficially?”', skill: null, correct: false, fb: 'Asking someone to break the graduation rule for you is a terrible deal for both of you.' },
            { label: '“I’ll do all twenty hours in one weekend, watch.”', skill: null, correct: false, fb: 'Twenty hours in one weekend is a burnout machine that may not even count.' }
          ]
        },
        {
          prompt: 'The counselor is on board but wary: “I need to trust you’ll actually follow through.” Close the deal.',
          options: [
            { label: '“You can check my log Thursday and Monday. If I miss a shift, I’ll tell you before you find out. That’s the trust — you won’t have to chase me.”', skill: 'dearman', correct: true, fb: 'DEAR MAN — the reinforce step: you gave her a reason to say yes and a system she can trust. 💗' },
            { label: '“Trust me, bro.”', skill: null, correct: false, fb: '“Trust me” without a system is a wish, not a plan.' },
            { label: '“I promise I won’t let you down.” (crossing fingers behind your back)', skill: null, correct: false, fb: 'The finger-cross kills the very trust you’re asking for.' },
            { label: '“If I don’t do it, I’ll accept the consequence.”', skill: null, correct: false, fb: 'Accepting a consequence you’re trying to avoid isn’t a plan.' }
          ]
        }
      ],
      final: [
        { s: 'counselor', t: "Log Thursday and Monday. See you at the food bank tonight." },
        { s: 'narr', t: "Fourteen hours later, you’re walking across that stage. Graduation, secured — and the Assertion badge set unlocks your special costumes." }
      ]
    }
  },
  {
    id: 's7', num: 7, title: 'Trade Up', moduleId: 'career',
    emoji: '🧰', color: '#6aa84f',
    goal: 'Complete a trade certification & land a job',
    goalEmoji: '💼',
    age: 19,
    location: 'Trade school → the working world',
    challenges: [
      {
        id: 's7c1', title: 'First Day Jitters', setting: '🏭 Trade school orientation', spotlight: 'observe',
        npc: 'wizard',
        scene: [
          { s: 'wizard', t: "Welcome, apprentice. The certification course begins — twelve weeks, then a very real exam. Nerves are natural. I teach them the same way I teach circuits: notice them, don’t let them wire the room." },
          { s: 'narr', t: "The room is full of strangers and the stakes feel enormous. Your chest is tight." }
        ],
        ask: 'Orientation is starting. Ground yourself:',
        options: [
          { label: 'Fixate on every intimidating person in the room and rehearse your exit.', skill: null, correct: false, fb: 'The exit rehearsal became the whole show in your head.' },
          { label: 'Notice the tight chest and fast pulse, label it “nervous, not broken,” and turn your attention to the syllabus.', skill: 'observe', correct: true, fb: 'OBSERVE — you watched the jitters pass without letting them run the class. 💜' },
          { label: '“I’m clearly the only one who doesn’t belong here.”', skill: null, correct: false, fb: 'Everyone in this room is exactly as new as you.' },
          { label: 'Text your friend “help” ten times in a row.', skill: null, correct: false, fb: 'The “help” spam doesn’t wire a single circuit.' }
        ]
      },
      {
        id: 's7c2', title: 'The Certification Exam Panic', setting: '🖊️ Exam hall, proctor at the front', spotlight: 'tipp',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "Twelve weeks down. The certification exam is on the desk in front of you. The proctor says “begin” and your mind goes blank." }
        ],
        ask: 'The panic is real. Calm the body first:',
        options: [
          { label: 'Flip through all fifty pages looking for something you know.', skill: null, correct: false, fb: 'The frantic flip feeds the panic.' },
          { label: 'Press your feet into the floor, take three slow exhales, sip some cold water — then read question one.', skill: 'tipp', correct: true, fb: 'TIPP — you cooled the alarm before the exam had a chance to eat you. 💙' },
          { label: 'Raise your hand and ask to leave for the bathroom.', skill: null, correct: false, fb: 'The bathroom bought five minutes and lost your momentum.' },
          { label: '“I’m going to fail. It’s over.” (rest your head down)', skill: null, correct: false, fb: 'The surrender happened before you read question one.' }
        ]
      },
      {
        id: 's7c3', title: 'The Interview Grind', setting: '💼 Second-round interview waiting room', spotlight: 'wise-mind',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "You’ve had three interviews. This is the last one for the position you actually want. Your hands won’t stop shaking and your inner critic is narrating your doom." }
        ],
        ask: 'Reasonable person meets scared person. Wise mind decides:',
        options: [
          { label: '“They’re going to see my hands shake and I’ll never work again.”', skill: null, correct: false, fb: 'The critic is not a hiring manager.' },
          { label: '“The facts: I’m qualified, I’ve passed two rounds, and this is a chance, not a verdict. I’ll go in and do my best — nerves and all.”', skill: 'wise-mind', correct: true, fb: 'WISE MIND — you let the facts and the fear talk, then chose deliberately. 💜' },
          { label: 'Rehearse your “perfect answer” one more time in the mirror.', skill: null, correct: false, fb: 'The perfect answer usually sounds rehearsed.' },
          { label: 'Slip out and reschedule “for a better day.”', skill: null, correct: false, fb: 'The better day has the same hands.' }
        ]
      },
      {
        id: 's7c4', title: 'The Unfair Shift', setting: '🛠️ Job site, crew meeting', spotlight: 'stop',
        npc: 'bossman',
        scene: [
          { s: 'bossman', t: "New guy takes the weekend double. And the walkie. And the locker closest to the door. Welcome aboard!" },
          { s: 'narr', t: "Every senior worker smirked. Your fists clench. The urge to quit on the spot is a full-body signal." }
        ],
        ask: 'The impulse is hot. First move?',
        options: [
          { label: '“I quit. Find someone else to bully.” (drop your tools)', skill: null, correct: false, fb: 'The dramatic exit feels heroic and costs you the job you just earned.' },
          { label: 'STOP. Set the tool down, step back, take a breath, and observe what’s actually being asked.', skill: 'stop', correct: true, fb: 'STOP — the pause let you see it wasn’t personal, just a rough intro. You kept your job. 💙' },
          { label: 'Yell back that the senior guys are just jealous of your skills.', skill: null, correct: false, fb: 'The retort made the senior guys like you even less.' },
          { label: 'Silently stew and text your friend about how much you hate everyone.', skill: null, correct: false, fb: 'The stew keeps the job and cooks your mood.' }
        ]
      },
      {
        id: 's7c5', title: 'The Dismissive Co-Worker', setting: '🔧 Break room, one week later', spotlight: 'fast',
        npc: 'robot',
        scene: [
          { s: 'robot', t: "(flatly) Ah. The weekend guy. I’ve seen your work. It’s… serviceable. They usually wash out by the third week. No hard feelings." },
          { s: 'narr', t: "The co-worker just dismissed a week of careful work. Your face burns. You want to prove them wrong with a speech — or crumble." }
        ],
        ask: 'Keep your self-respect without starting a war:',
        options: [
          { label: '“And you’re a robot who clearly peaked in week one.”', skill: null, correct: false, fb: 'The insult felt good and set the tone for your next six months.' },
          { label: '“Oh wow, thanks. Want to look at my work together and compare notes? I’m open to improving.”', skill: 'fast', correct: true, fb: 'FAST — truthful, fair, no groveling, values intact. You neither attacked nor collapsed. 💗' },
          { label: '“You’re right, I’m probably not cut out for this.” (defeated)', skill: null, correct: false, fb: 'The collapse gave the dismissive person exactly what they wanted.' },
          { label: 'Avoid them entirely and do all your work alone from now on.', skill: null, correct: false, fb: 'The avoidance wins the break room and loses the team.' }
        ]
      },
      {
        id: 's7c6', title: 'The Raise Request', setting: '📈 Foreman’s office', spotlight: 'dearman',
        npc: 'bossman',
        scene: [
          { s: 'bossman', t: "You’ve been here six months. Good work, kid. What’s on your mind?" },
          { s: 'narr', t: "You found out the new hires are making more than you. You deserve better — and you have to ask." }
        ],
        ask: 'Make the ask you’re worth:',
        options: [
          { label: '“Someone else makes more than me and it’s not fair, fix it.”', skill: null, correct: false, fb: 'The fairness complaint starts with a fight.' },
          { label: '“I, um, well, you know, whatever you think is fine, no pressure, sorry—”', skill: null, correct: false, fb: 'The apology made the raise ask impossible to hear.' },
          { label: '“I’ve hit my benchmarks six months running and I’ve been training two new hires. I’m asking for a raise to match the work. Here’s my record if you want to check.”', skill: 'dearman', correct: true, fb: 'DEAR MAN — facts, ask, and evidence. Confident, not aggressive. 💗' },
          { label: '“If you don’t pay me more, I’ll start looking elsewhere.” (threatening tone)', skill: null, correct: false, fb: 'The threat works once and marks you as difficult forever.' }
        ]
      },
      {
        id: 's7c7', title: 'The Certification Retake Letdown', setting: '📄 The score sheet, a 68', spotlight: 'check-facts',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "You missed the certification pass mark by two points. Sixty-eight. Your whole body slumps, and the story starts: I’m not cut out for this." }
        ],
        ask: 'The letdown is real. Check the story it’s telling:',
        options: [
          { label: '“I’m a failure and I should quit before I embarrass myself.”', skill: null, correct: false, fb: 'The story skipped the part where you passed most of it.' },
          { label: '“The fact is: I scored 68, needed 70, and the exam is offered again next month. The story is: I’m close, and close is actionable.”', skill: 'check-facts', correct: true, fb: 'CHECK THE FACTS — you separated the score (a fact) from the narrative (a verdict). Two points is a plan, not a prophecy. 💚' },
          { label: '“It’s rigged. Everyone knows these exams are rigged.”', skill: null, correct: false, fb: 'The rigging theory doesn’t retake the exam for you.' },
          { label: 'Delete the score, delete the app, delete the dream.', skill: null, correct: false, fb: 'Deleting the dream because of two points is a big move for a small gap.' }
        ]
      },
      {
        id: 's7c8', title: 'The First Paycheck Budget', setting: '💸 Direct deposit just hit', spotlight: 'pros-cons',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "Your first real paycheck. The number looks amazing. The urge: treat yourself — new sneakers, that expensive dinner, maybe a whole new console." }
        ],
        ask: 'Spend now, or build later? Make the call with a clear head:',
        options: [
          { label: 'Spend it all tonight. YOLO. Future-you will figure it out.', skill: null, correct: false, fb: 'YOLO is a battle cry, not a budget.' },
          { label: 'Write the two columns: a splurge today vs. savings toward your certification fund — and see which future you actually want.', skill: 'pros-cons', correct: true, fb: 'PROS & CONS — the columns made it obvious: a little now, a lot later. 💙' },
          { label: '“I’ll just not spend anything ever, to be safe.”', skill: null, correct: false, fb: 'The zero-spend plan usually ends in one giant splurge.' },
          { label: 'Lend it all to a friend who “promises” to pay it back.', skill: null, correct: false, fb: 'The promise is a note with a high default rate.' }
        ]
      }
    ],
    boss: {
      id: 's7boss1', title: 'Boss 1: The Certification Exam, Round Two', theme: 'One exam stands between you and your trade',
      npc: 'wizard',
      intro: [
        { s: 'wizard', t: "Round two, apprentice. Last time you missed by two points. Tonight, we see if you know the material or just the fear of it." }
      ],
      rounds: [
        {
          prompt: 'The paper lands. The blank is back. Settle the alarm system first.',
          options: [
            { label: 'Dive straight into the hardest question to “prove” yourself.', skill: null, correct: false, fb: 'The hardest question ate your confidence before question three.' },
            { label: 'TIPP: feet on the floor, three long exhales, cold water — then open to page one.', skill: 'tipp', correct: true, fb: 'TIPP — body calm, brain online. 💙' },
            { label: 'Re-read the instructions seven times to delay starting.', skill: null, correct: false, fb: 'The re-reading is the panic wearing a productivity costume.' },
            { label: 'Look around to see how fast everyone else is going.', skill: null, correct: false, fb: 'The comparison lap made you slower, not faster.' }
          ]
        },
        {
          prompt: 'Forty minutes in, you hit a question you blanked on. The fear whispers: “see, you can’t do this.”',
          options: [
            { label: 'Freeze on that one question for the next twenty minutes.', skill: null, correct: false, fb: 'One question ate the time for ten others.' },
            { label: 'Observe the spike, note it as “stress,” and skip to the questions you know — come back to it at the end.', skill: 'observe', correct: true, fb: 'OBSERVE — you watched the fear pass by and kept the pencil moving. 💜' },
            { label: 'Erase all your previous answers to “start fresh.”', skill: null, correct: false, fb: 'The fresh start erased your correct answers too.' },
            { label: 'Put your head down and wait for the panic to pass.', skill: null, correct: false, fb: 'The panic passes faster when you’re moving than when you’re hiding.' }
          ]
        },
        {
          prompt: 'Five minutes left. You’re one question short of calm. The wise-mind finish:',
          options: [
            { label: '“I studied, I know most of this, and I’ll answer the rest with what I have. That’s enough to be proud of.”', skill: 'wise-mind', correct: true, fb: 'WISE MIND — you finished with reason and emotion in balance instead of spiraling. 💜' },
            { label: '“I already failed, so there’s no point finishing.” (set down your pencil)', skill: null, correct: false, fb: 'Setting the pencil down turned a maybe into a definite.' },
            { label: 'Erase your name so they can’t grade it.', skill: null, correct: false, fb: 'The un-gradable exam is definitely a fail.' },
            { label: 'Bubble in random answers and hope for a miracle.', skill: null, correct: false, fb: 'The miracle bubble pattern is still mostly wrong.' }
          ]
        }
      ],
      final: [
        { s: 'wizard', t: "Seventy-two. You passed, apprentice. The trade is yours." },
        { s: 'narr', t: "Certified. The career door is now wide open." }
      ]
    },
    boss2: {
      id: 's7boss2', title: 'Boss 2: The Job Offer', theme: 'Two offers, one big decision',
      npc: 'robot',
      intro: [
        { s: 'robot', t: "Interesting development. Two offers landed: one stable, one flashy. The flashy one pays better and wants you to start Monday. The stable one gives you a mentor and certification support." }
      ],
      rounds: [
        {
          prompt: 'The flashy offer is tempting and the boss is pushing: “Decide by tonight or it goes away!”',
          options: [
            { label: '“Done! I’ll take the money, sign me up!”', skill: null, correct: false, fb: 'The urgency was a feature of the pitch, not a fact about the job.' },
            { label: '“I appreciate the offer. I’m making this decision carefully, and I’ll have an answer by Friday. That’s the timeline that works for me.”', skill: 'dearman', correct: true, fb: 'DEAR MAN — you asserted a boundary calmly and held it. 💗' },
            { label: '“What if I take it and regret it? I can’t make decisions!”', skill: null, correct: false, fb: 'The spiral postponed the decision and impressed nobody.' },
            { label: 'Ghost both offers and hope something better appears.', skill: null, correct: false, fb: 'Ghosting two opportunities is a third kind of nothing.' }
          ]
        },
        {
          prompt: 'Your gut says the stable one is smarter, but the flashy one pays more and your bank account is loud. Keep your values in the room.',
          options: [
            { label: '“Money wins. My values can eat.”', skill: null, correct: false, fb: 'The value you ignored follows you to work every day.' },
            { label: '“I want to learn and grow in this trade long-term, and the stable offer invests in exactly that. The pay gap matters, but it’s not the whole scoreboard.”', skill: 'fast', correct: true, fb: 'FAST — truthful, stuck to your values, no bending to the shiny thing. 💗' },
            { label: '“Tell the flashy one I’ll take it and renegotiate later.”', skill: null, correct: false, fb: 'The renegotiate-later plan is a promise you’re planning to break.' },
            { label: '“Whatever you think is best.” (to a robot)', skill: null, correct: false, fb: 'The robot agreed with itself and picked for you.' }
          ]
        },
        {
          prompt: 'One more wrench: the stable job asks you to start with a two-week unpaid training period. The flashy one pays day one. Sort it out.',
          options: [
            { label: '“The training period means no paycheck for two weeks — that breaks my budget. Can we do a stipend or shift the start to overlap my current savings?”', skill: 'pros-cons', correct: true, fb: 'PROS & CONS — you weighed the real costs and negotiated the actual number instead of the vibe. 💙' },
            { label: '“Fine, unpaid. My principles will keep the lights on.”', skill: null, correct: false, fb: 'Principles don’t pay rent, and the ask was actually negotiable.' },
            { label: '“Take the flashy job, I need money NOW.”', skill: null, correct: false, fb: 'The now-money cost you the long game.' },
            { label: '“I’ll work both jobs and sleep never.”', skill: null, correct: false, fb: 'The two-jobs hustle is how burnout gets hired.' }
          ]
        }
      ],
      final: [
        { s: 'robot', t: "The stable offer added a training stipend. They saw you negotiate. You’re hired — and respected." },
        { s: 'narr', t: "Certified and employed. The working world is yours. One stage to go." }
      ]
    }
  },
  {
    id: 's8', num: 8, title: 'Build the Life', moduleId: 'capstone',
    emoji: '🏠', color: '#e24a5a',
    goal: 'Get your own apartment & pay off your debt',
    goalEmoji: '🔑',
    age: 21,
    location: 'Young adulthood',
    challenges: [
      {
        id: 's8c1', title: 'The Roommate Hunt', setting: '📱 Roommate app, three awkward candidates', spotlight: 'act-dialectically',
        npc: 'ghost',
        scene: [
          { s: 'ghost', t: "Three candidates: one wants to party every night, one wants total silence, one has a cat that 'might be haunted.' We need a housemate, not a miracle." },
          { s: 'narr', t: "You need to fill a room and you need to live peacefully. Both matter." }
        ],
        ask: 'Find the workable match:',
        options: [
          { label: '“Party every night! It’ll be fun!”', skill: null, correct: false, fb: 'The party pick is fun until week three of no sleep.' },
          { label: '“Silence or nothing. Total peace.”', skill: null, correct: false, fb: 'The total-silence pick has zero friends and a very empty apartment.' },
          { label: '“Offer the silent one shared quiet hours AND weekly movie nights — structure for them, company for me.”', skill: 'act-dialectically', correct: true, fb: 'ACT DIALECTICALLY — you built a deal where the house works for both of you. 💛' },
          { label: '“Flip a coin and let fate decide.”', skill: null, correct: false, fb: 'Fate is not a landlord reference check.' }
        ]
      },
      {
        id: 's8c2', title: 'The Lease Fine Print', setting: '📄 A 12-page lease, three days of sleep lost', spotlight: 'problem-solving',
        npc: 'landlord',
        scene: [
          { s: 'landlord', t: "Standard lease, nothing to worry about. Sign here, move in Friday." },
          { s: 'narr', t: "You skimmed it — there’s a clause about “utilities adjustment” that looks vague, and a late fee that doubles." }
        ],
        ask: 'Big paper, tight deadline. Tackle it:',
        options: [
          { label: 'Sign it. The landlord seems nice.', skill: null, correct: false, fb: '“The landlord seems nice” is not a legal strategy.' },
          { label: '“The vague utilities clause and the doubling late fee are real problems. Let’s get them in writing, plainly, before I sign — that protects us both.”', skill: 'problem-solving', correct: true, fb: 'PROBLEM SOLVING — you named the two real risks and fixed them before they became you. 💗' },
          { label: '“Just cross out the parts I don’t like with a pen.”', skill: null, correct: false, fb: 'The pen-crossed clause doesn’t exist in their copy.' },
          { label: '“I’ll deal with it after I move in.”', skill: null, correct: false, fb: '“Deal with it later” is how the vague clause becomes your bill.' }
        ]
      },
      {
        id: 's8c3', title: 'The Overspend Temptation', setting: '🛍️ Online checkout, one click away', spotlight: 'pros-cons',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "The shopping cart glows: a limited-edition jacket, two daydreams, and a big price tag. Your debt is real. The jacket is loud." }
        ],
        ask: 'One click separates you from your budget. Think it through:',
        options: [
          { label: '“It’s limited edition! It’s basically an investment!”', skill: null, correct: false, fb: 'The “investment” is a jacket, not a bond.' },
          { label: '“The jacket is two weeks of my debt payment. The rush lasts a day. The debt lasts longer. I’ll save toward it instead of against it.”', skill: 'pros-cons', correct: true, fb: 'PROS & CONS — you let the columns argue, and the columns were right. 💙' },
          { label: '“I’ll buy it and just not eat out for a month.”', skill: null, correct: false, fb: 'The “eat less” plan is a diet of regret.' },
          { label: '“One purchase can’t hurt. What’s the worst that happens?”', skill: null, correct: false, fb: '“What’s the worst” is how the card balance climbs.' }
        ]
      },
      {
        id: 's8c4', title: 'The Debt Collector Call', setting: '📞 Phone in hand, a number you dread', spotlight: 'dearman',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "A medical bill slipped past. It’s in collections, and the call is here. Your instinct is to dodge it forever." }
        ],
        ask: 'Face the call with a clear head and a real ask:',
        options: [
          { label: 'Let it ring, block the number, and pretend it’s not happening.', skill: null, correct: false, fb: 'The blocked number doesn’t block the debt.' },
          { label: '“I’m calling about this bill. I can’t pay it all at once. Can we set up a monthly plan I can actually afford? I’d like to resolve this in writing.”', skill: 'dearman', correct: true, fb: 'DEAR MAN — facts, ask, and a clear path. Collectors can negotiate when you make the ask calmly. 💗' },
          { label: '“You have the wrong number, this isn’t me!” (click)', skill: null, correct: false, fb: 'The “wrong number” knows your name and your balance.' },
          { label: '“I’ll pay it next month, I promise.” (empty)', skill: null, correct: false, fb: 'The empty promise is a delay, not a plan.' }
        ]
      },
      {
        id: 's8c5', title: 'The Exhaustion Slump', setting: '🛌 Sunday evening, second job just ended', spotlight: 'abc-please',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "Two jobs, a late bus, three skipped meals, and a phone full of screenshots of everyone else’s apartments. You feel empty and furious all at once." }
        ],
        ask: 'The body is talking. Give it a turn:',
        options: [
          { label: 'Scroll for three more hours and let the envy marinate.', skill: null, correct: false, fb: 'The marinating makes the slump worse.' },
          { label: '“Phone in the other room, a real meal, a walk, and sleep before midnight — then a tiny win tomorrow, like making my bed.”', skill: 'abc-please', correct: true, fb: 'ABC PLEASE — you rebuilt the body and gave yourself a small mastery win. 💚' },
          { label: '“I’ll just work even harder and rest when I’m successful.”', skill: null, correct: false, fb: 'The rest-when-successful plan is how the slump becomes a crash.' },
          { label: 'Text all your friends about how unfair life is.', skill: null, correct: false, fb: 'The 11pm despair-text doesn’t feed you or rest you.' }
        ]
      },
      {
        id: 's8c6', title: 'The Friend Needs Rent', setting: '💰 A heartfelt plea from your best friend', spotlight: 'fast',
        npc: 'friend',
        scene: [
          { s: 'friend', t: "You’re the only one I can ask. I’m short on rent. Can you spot me six hundred? I’ll pay you back, I swear." },
          { s: 'narr', t: "You don’t have six hundred to spare. You have a debt payment due, and you just rebuilt your savings." }
        ],
        ask: 'Say no without losing yourself or the friendship:',
        options: [
          { label: '“I’m sorry, I’m broke too!” (you aren’t)', skill: null, correct: false, fb: 'The little lie is easy now and impossible to keep later.' },
          { label: '“I love you, and I can’t lend six hundred — it would break my own plan. But I can help you find rental assistance, and I’ll bring dinner over tonight.”', skill: 'fast', correct: true, fb: 'FAST — fair, no over-apologizing, truthful, values intact. You protected the friendship AND yourself. 💗' },
          { label: '“Fine, here. Take it. I’ll figure out my debt later.”', skill: null, correct: false, fb: 'The loan saved them and sank your plan.' },
          { label: '“Borrow from someone richer, obviously.”', skill: null, correct: false, fb: 'The brush-off protected you and hurt the friendship.' }
        ]
      },
      {
        id: 's8c7', title: 'The Apartment Application Rejection', setting: '📮 The email that stings', spotlight: 'opposite-action',
        npc: 'landlord',
        scene: [
          { s: 'landlord', t: "Thank you for your application. Unfortunately, we’ve chosen another applicant." },
          { s: 'narr', t: "The fifth rejection. Your face burns and the story starts: I’m not good enough for anywhere." }
        ],
        ask: 'The shame says hide. Act opposite:',
        options: [
          { label: 'Delete every rental app and “take a break from housing.”', skill: null, correct: false, fb: 'The break from housing doesn’t pause the housing need.' },
          { label: '“The story is a rejection, not a verdict. Let me call the leasing office for feedback and apply to three more places tomorrow.”', skill: 'opposite-action', correct: true, fb: 'OPPOSITE ACTION — the urge was to hide; you leaned in and kept moving. 💚' },
          { label: 'Post a long vent about how unfair landlords are.', skill: null, correct: false, fb: 'The vent feels good and doesn’t process an application.' },
          { label: '“This always happens to me, I’m cursed.”', skill: null, correct: false, fb: 'The curse theory is the rejection wearing a magic cloak.' }
        ]
      },
      {
        id: 's8c8', title: 'The Debt-Free Moment', setting: '💳 The final payment screen', spotlight: 'wise-mind',
        npc: 'narr',
        scene: [
          { s: 'narr', t: "Your final debt payment is one click away. The number you’ve chipped away at for two years is finally small enough to vanish. A wild impulse rises: keep the money, treat yourself, start fresh." }
        ],
        ask: 'The finish line is in view. Wise mind makes the call:',
        options: [
          { label: '“I’ve earned a treat — I’ll start my debt over next month.”', skill: null, correct: false, fb: 'The treat is a credit-card-shaped trap.' },
          { label: '“The facts: this payment ends the debt. The feeling: I want a reward. Wise mind says finish it — the celebration can happen after, without interest.”', skill: 'wise-mind', correct: true, fb: 'WISE MIND — reason and emotion talked, and you chose the finish line. 💜' },
          { label: '“Let me just buy one small thing first, then pay it.”', skill: null, correct: false, fb: 'The small thing becomes the reason for next month’s interest.' },
          { label: '“Someone else will cover it eventually.”', skill: null, correct: false, fb: 'The someone-else plan has been billing you for two years.' }
        ]
      }
    ],
    boss: {
      id: 's8boss1', title: 'Boss 1: The Landlord Meeting', theme: 'One signature stands between you and your apartment',
      npc: 'landlord',
      intro: [
        { s: 'landlord', t: "So. The application. I’ve got three qualified tenants and one apartment. Convince me you’re the one." }
      ],
      rounds: [
        {
          prompt: 'The landlord raises the first obstacle: “Your credit took a hit last year. That worries me.”',
          options: [
            { label: '“That’s so unfair, that was a medical thing, you can’t judge me for that!”', skill: null, correct: false, fb: 'The accusation closed the door you were knocking on.' },
            { label: '“That was a medical bill, now paid off — I can show you the statement. I’ve kept my rent on time for two years since, and I have references ready.”', skill: 'dearman', correct: true, fb: 'DEAR MAN — you described the facts and gave evidence instead of an excuse. 💗' },
            { label: '“Ugh, fine, you’re right, I’m a risk.” (slump)', skill: null, correct: false, fb: 'The slump did the landlord’s rejection for them.' },
            { label: 'Silently begin looking for the door.', skill: null, correct: false, fb: 'The silent exit forfeited a conversation you could have won.' }
          ]
        },
        {
          prompt: 'The landlord softens but adds: “I also need first and last month’s rent up front. Can you swing that?”',
          options: [
            { label: '“I can do it if we split it across two weeks — I have the first payment ready and the rest coming from a check that clears by the 15th. Here’s the breakdown.”', skill: 'act-dialectically', correct: true, fb: 'ACT DIALECTICALLY — you bent the terms into a shape you could actually keep. 💛' },
            { label: '“Yes! Whatever! Take all my money, here!” (signs everything)', skill: null, correct: false, fb: 'The desperate yes signed you into a payment plan that breaks.' },
            { label: '“Can’t do it. Guess it’s not happening.”', skill: null, correct: false, fb: 'The instant surrender never asked the one question that would have worked.' },
            { label: '“That’s discrimination or something, right?”', skill: null, correct: false, fb: 'The accusation isn’t the negotiation you think it is.' }
          ]
        },
        {
          prompt: 'Almost there. The landlord asks the final question: “What if something breaks and I’m not reachable for a week?”',
          options: [
            { label: '“I’ll figure it out. I always do. I’ll document everything, send you photos, and handle emergencies without letting the place fall apart.”', skill: 'problem-solving', correct: true, fb: 'PROBLEM SOLVING — you answered the fear with a system, not a promise. 💗' },
            { label: '“I’ll just call you seventeen times until you answer.”', skill: null, correct: false, fb: 'The seventeen-call plan is how you become the tenant they dread.' },
            { label: '“That’s your problem, you own the building.”', skill: null, correct: false, fb: 'The ownership lecture ended the meeting.' },
            { label: '“I’ll move out if it’s too broken.”', skill: null, correct: false, fb: 'The move-out threat before moving in is a red flag parade.' }
          ]
        }
      ],
      final: [
        { s: 'landlord', t: "Two-week split, references verified. Welcome to your new place." },
        { s: 'narr', t: "Keys in hand. Apartment secured." }
      ]
    },
    boss2: {
      id: 's8boss2', title: 'Boss 2: The Final Balance', theme: 'Debt, done. Your life, yours.',
      npc: 'narr',
      intro: [
        { s: 'narr', t: "Two years of payments. Late nights. Sacrifices. Tonight, the final payment screen glows, and so does the finish line. One more moment of decision — and then, a new life." }
      ],
      rounds: [
        {
          prompt: 'The balance is $0.00 due after this payment. A part of you wants to keep the money “just in case.” Notice that part.',
          options: [
            { label: '“Just in case” wins — keep the money, restart the debt next month.', skill: null, correct: false, fb: 'The “just in case” future will have interest attached.' },
            { label: 'Observe the fear of letting go, name it, and press the button anyway — the fear is old, and the balance is real.', skill: 'observe', correct: true, fb: 'OBSERVE — you saw the fear and chose the fact. 💜' },
            { label: 'Close the app and think about it for another year.', skill: null, correct: false, fb: 'The extra year of thinking has a 23% interest rate.' },
            { label: '“I’ll pay it when I feel ready.”', skill: null, correct: false, fb: '“Feeling ready” and “being ready” are different banks.' }
          ]
        },
        {
          prompt: 'Payment sent. $0.00. A wild celebration impulse fires: “I’m free! I should buy everything I denied myself!”',
          options: [
            { label: '“I’m free!” (opens three new tabs to shop)', skill: null, correct: false, fb: 'The freedom spree is how the cycle starts again.' },
            { label: 'Balance it: “This is a big deal AND I’ll celebrate in a way that doesn’t undo the work — dinner out, a good night’s sleep, and a small treat I planned for.”', skill: 'wise-mind', correct: true, fb: 'WISE MIND — joy and judgment, together. 💜' },
            { label: '“I’ll never touch money again, it’s too dangerous.”', skill: null, correct: false, fb: 'The money-phobia plan makes rent hard.' },
            { label: 'Give the whole payment amount to a random person online.', skill: null, correct: false, fb: 'The generosity is noble and your savings account is not.' }
          ]
        },
        {
          prompt: 'Your old roommate asks: “Now that you’re debt-free, what’s next?” The future is a blank page. Say it with skill.',
          options: [
            { label: '“I’m going to keep building — save for the place I want, grow in my trade, and stay on the skills that got me here. And I’m going to enjoy it this time.”', skill: 'dearman', correct: true, fb: 'DEAR MAN — and more than that: you said what you want with confidence and a plan. 💗' },
            { label: '“I have no idea, honestly. Whatever happens happens.”', skill: null, correct: false, fb: 'The shrug erased the plan you just built.' },
            { label: '“More. Just more of everything.”', skill: null, correct: false, fb: '“More of everything” isn’t a direction.' },
            { label: '“Ask me again when I’m not panicking about money.”', skill: null, correct: false, fb: 'You’re not panicking about money anymore. That’s the point.' }
          ]
        }
      ],
      final: [
        { s: 'narr', t: "Debt: $0.00. Apartment: yours. Trade: certified. And the skills that carried you here? They’re not a stage anymore. They’re just… how you live." },
        { s: 'narr', t: "Congratulations. You built a life, one skill at a time." }
      ]
    }
  }
];

const STAGE_BY_ID = (() => { const m = {}; STAGES.forEach(s => m[s.id] = s); return m; })();

/* Helpers to find a skill's proficiency weight in a challenge */
function stageSkills(stage) {
  const mod = DBT_MODULES.find(x => x.id === stage.moduleId);
  if (mod) return mod.skills.map(s => s.id);
  return ['observe', 'describe', 'wise-mind', 'stop', 'tipp', 'pros-cons', 'validate-others', 'give', 'fast', 'think-dialectically', 'act-dialectically', 'check-facts', 'opposite-action', 'abc-please', 'dearman', 'problem-solving', 'apology'];
}
