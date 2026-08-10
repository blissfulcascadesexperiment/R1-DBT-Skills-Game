/* =========================================================================
   WISE MIND: A DBT ADVENTURE
   DBT Skills, Modules, Badges, and Video Clip Library
   ========================================================================= */

const DBT_MODULES = [
  {
    id: 'mindfulness',
    name: 'Mindfulness',
    icon: '🧘',
    color: '#7c5cff',
    theme: 'Awareness',
    motto: 'Noticing what is, in this moment, on purpose.',
    skills: [
      {
        id: 'behavioral-chain-analysis',
        name: 'Behavioral Chain Analysis',
        short: 'Map a behavior link by link: the prompting event, the thoughts and feelings, the action, and the consequence that keeps it going.',
        badge: 'The Chain-Breaker',
        clip: { title: 'Following the chain', desc: 'A character traces a bad reaction back to its first link — the event, the thoughts, the feeling, the action — and finds the exact link they can change.' }
      },
      {
        id: 'biosocial-theory',
        name: 'Biosocial Theory',
        short: 'Emotions are biology AND environment: a sensitive nervous system meeting a world that doesn\'t always validate it.',
        badge: 'The Context-Keeper',
        clip: { title: 'Not your fault, still your life', desc: 'A character learns why they feel so intensely — and that understanding the cause doesn\'t excuse it, it just shows them where to build skills.' }
      },
      {
        id: 'three-states-of-mind',
        name: 'Three States of Mind',
        short: 'Emotion mind, reasonable mind, and wise mind — the two extremes and the balanced place between them.',
        badge: 'The Mind-Mapper',
        clip: { title: 'Three minds, one moment', desc: 'A scene shows one person flooded by feeling, another coolly reasoning, and a third choosing from the balance — the three states side by side.' }
      },
      {
        id: 'emotion-mind',
        name: 'Emotion Mind',
        short: 'Facts are distorted by the strength of feeling. Everything is filtered through the mood.',
        badge: 'The Feeling Mind',
        clip: { title: 'When the feeling runs the show', desc: 'A character sees everything through their mood — the facts blur and the story turns dramatic. Emotion mind at full volume.' }
      },
      {
        id: 'reasonable-mind',
        name: 'Reasonable Mind',
        short: 'Cool, logical, fact-driven — but missing the human layer of what you feel.',
        badge: 'The Fact-Mind',
        clip: { title: 'Pure logic', desc: 'A character works a problem with total clarity — facts in, plan out — while the feelings in the room go unacknowledged.' }
      },
      {
        id: 'wise-mind',
        name: 'Wise Mind',
        short: 'The place where reason and emotion meet. The balanced choice, not the raw reaction.',
        badge: 'The Balancer',
        clip: { title: 'The both/and moment', desc: 'A hero feels terrified and yet moves forward anyway, letting facts and feelings both speak before deciding.', youtubeId: '-uOGRaTaVv4' }
      },
      {
        id: 'observe',
        name: 'Observe',
        short: 'Just notice — thoughts, feelings, body sensations — like watching clouds. No words needed yet.',
        badge: 'The Watcher',
        clip: { title: 'Mindfulness on a school bus', desc: 'A character notices their racing thoughts and tight chest without judging, letting them pass like traffic outside the window.', youtubeId: 'oYdrMpnE93s' }
      },
      {
        id: 'describe',
        name: 'Describe',
        short: 'Put words to the experience: “I feel frustrated,” “My heart is pounding.” Fact before story.',
        badge: 'The Narrator',
        clip: { title: 'Naming the feeling out loud', desc: 'A character stops mid-argument and calmly names what is happening: “I’m angry right now, and I still want to fix this.”', youtubeId: 'NECs97k_8Z4' }
      },
      {
        id: 'participate',
        name: 'Participate',
        short: 'Throw yourself in — enter wholly into the experience and go all in, without self-consciousness.',
        badge: 'The Wholehearted',
        clip: { title: 'All in', desc: 'A character stops watching from the edge and throws themselves fully into the moment — singing, dancing, present.' }
      },
      {
        id: 'non-judgmental',
        name: 'Non-Judgmental Stance',
        short: 'Things are neither good nor bad — suspend evaluation and just let them be.',
        badge: 'The Judge-Letter',
        clip: { title: 'Without the labels', desc: 'A character describes a situation plainly — no “good,” no “bad,” no verdict — just what is.' }
      },
      {
        id: 'one-mindfully',
        name: 'One-Mindful',
        short: 'Do one thing at a time, with full attention. When the mind wanders, bring it back.',
        badge: 'The Single-Tasker',
        clip: { title: 'One thing at a time', desc: 'A character sets everything else aside and gives one task their whole attention — returning when the mind drifts.' }
      },
      {
        id: 'effectiveness',
        name: 'Effectiveness',
        short: 'Do what works. Let go of fair/unfair, right/wrong, and anger — play by the rules of the situation.',
        badge: 'The Pragmatist',
        clip: { title: 'What works', desc: 'A character drops the "shoulds" and chooses the response that actually solves the problem in front of them.' }
      },
      {
        id: 'spiritual-perspective',
        name: 'Spiritual Perspective / Loving Kindness',
        short: 'Connect to something bigger than yourself, and wish well for yourself and others — loving kindness as a daily practice.',
        badge: 'The Kind Heart',
        clip: { title: 'May you be well', desc: 'A character pauses to wish safety and kindness toward themselves and someone who hurt them — a moment of loving kindness.' }
      }
    ]
  },
  {
    id: 'distress',
    name: 'Distress Tolerance',
    icon: '🌊',
    color: '#4aa8ff',
    theme: 'Riding the wave',
    motto: 'When a crisis is big and you can’t fix it yet — survive it without making it worse.',
    skills: [
      {
        id: 'accepts',
        name: 'Distract with Wise Mind ACCEPTS',
        short: 'Distract with Wise Mind — Activities, Compare, Contribute, Emotions, Put away, Thoughts, Sensations. Shift attention away from the crisis.',
        badge: 'The Distractor',
        clip: { title: 'Change the channel', desc: 'A character in a spiral flips to a new activity, compares themselves to someone doing better, and lets the moment pass.' }
      },
      {
        id: 'improve',
        name: 'IMPROVE the Moment',
        short: 'Imagery, Meaning, Prayer, Relaxation, One thing at a time, Vacation, Encouragement — soften the moment without changing the facts.',
        badge: 'The Moment-Softer',
        clip: { title: 'Soften now', desc: 'A character who can\'t change the situation changes how it feels — imagery, one breath, self-encouragement.' }
      },
      {
        id: 'self-soothe',
        name: 'Self-Soothe',
        short: 'Comfort your five senses — touch, taste, vision, smell, hearing. Soothing the body quiets the storm.',
        badge: 'The Soother',
        clip: { title: 'Five senses, one calm', desc: 'A character wraps up in a soft blanket, sips something warm, and notices what the room sounds and smells like.' }
      },
      {
        id: 'pros-cons',
        name: 'Pros and Cons',
        short: 'Think about the positive and negative consequences of your actions — react now vs. ride it out. Let the paper decide.',
        badge: 'The Thinker',
        clip: { title: 'The two-column list', desc: 'A character writes “react now” vs “wait” in two columns and sees the future they want in black and white.' }
      },
      {
        id: 'stop',
        name: 'STOP',
        short: 'Stop! Take a step back. Observe and notice what\'s happening. Proceed mindfully. Freeze before the impulse fires.',
        badge: 'The Pauser',
        clip: { title: 'The frozen moment', desc: 'A character reaches for their phone to send an angry text, then physically stops, breathes, and steps back from the table.', youtubeId: '8ykrSYe6UMk' }
      },
      {
        id: 'tipp',
        name: 'TIPP',
        short: 'Temperature, Intense exercise, Paced breathing, Progressive muscle relaxation — quick body calmers.',
        badge: 'The Body Tamer',
        clip: { title: 'Cold water + slow breath', desc: 'In a locker room, a character splashes cold water on their face, then breathes out longer than they breathe in.', youtubeId: 'UuvH_j9O0f4' }
      },
      {
        id: 'radical-acceptance',
        name: 'Radical Acceptance',
        short: 'Accept reality as it is — not approving, just opening to what\'s true. Be willing, and turn the mind back when it resists.',
        badge: 'The Acceptor',
        clip: { title: 'Turning the mind', desc: 'A character stops fighting what is — the bad news doesn\'t become good, but they stop burning energy denying it.' }
      },
      {
        id: 'turning-the-mind',
        name: 'Turning the Mind',
        short: 'Choose, again and again, to accept reality. When your mind resists, gently turn it back to acceptance — like choosing the acceptance fork every time you reach the crossroads.',
        badge: 'The Fork-Chooser',
        clip: { title: 'Back to the fork', desc: 'A character whose mind keeps drifting back to "this shouldn\'t be happening" notices, and turns their mind back to what is — again and again.' }
      },
      {
        id: 'willingness-willfulness',
        name: 'Willingness vs. Willfulness',
        short: 'Willingness: do what the moment calls for, on purpose, with an open hand. Willfulness: fight reality, refuse, and sit in "I won\'t."',
        badge: 'The Open Hand',
        clip: { title: 'Open hands', desc: 'One character grips tight and refuses; another opens their hands to the task in front of them — willingness vs. willfulness side by side.' }
      },
      {
        id: 'half-smile-willing-hands',
        name: 'Half Smile Willing Hands',
        short: 'A slight half smile and relaxed, open hands — posture that tells your body to accept what is, one mindful breath at a time.',
        badge: 'The Half-Smiler',
        clip: { title: 'The accepting posture', desc: 'A character softens their face and unclenches their hands — and the acceptance in their body quiets the fight in their head.' }
      }
    ]
  },
  {
    id: 'interpersonal1',
    name: 'Interpersonal Effectiveness',
    icon: '❤️‍🩹',
    color: '#ff6b8a',
    theme: 'Feeling seen',
    motto: 'People first need to feel understood before they can hear you.',
    skills: [
      {
        id: 'give',
        name: 'GIVE',
        short: 'Gentle, Interested, Validate, Easy manner — keep relationships warm while you talk.',
        badge: 'The Friend',
        clip: { title: 'Soft eyes, open ears', desc: 'Two characters talk on a bench; one listens with an open posture and easy tone while the other unloads.', youtubeId: 'TssJs6g6QLI' }
      },
      {
        id: 'fast',
        name: 'FAST',
        short: 'Fair, no over-Apologies, Stick to values, Truthful — keep your self-respect in any conversation.',
        badge: 'The Self-Respecter',
        clip: { title: 'Standing tall', desc: 'A character says no to a bad idea with a straight back, keeps their voice even, and doesn\'t grovel.', youtubeId: 'Gmjd-9PmCi4' }
      },
      {
        id: 'cheerleading-statements',
        name: 'Cheerleading Statements for Worry Thoughts',
        short: 'Challenge judgmental worry thoughts with wise-mind statements: “I can handle this,” “One step at a time.”',
        badge: 'The Cheerleader',
        clip: { title: 'Talk yourself up', desc: 'Before a hard moment, a character swaps “I can\'t do this” for “I\'ve done hard things before.”' }
      },
      {
        id: 'dearman',
        name: 'DEAR MAN',
        short: 'Describe, Express, Assert, Reinforce. Appear confident, Negotiate. The gold standard for asking.',
        badge: 'The Negotiator',
        clip: { title: 'The prepared ask', desc: 'A character rehearses one calm ask: states facts, names feelings, makes the request, and offers the payoff.', youtubeId: 'EC-M59r-0jg' }
      },
      {
        id: 'think',
        name: 'THINK',
        short: 'Think about the situation, Have empathy, check your Interpretations, Notice, use Kindness — see the other person\'s side.',
        badge: 'The Perspective-Taker',
        clip: { title: 'Walk in their shoes', desc: 'A character who felt wronged pauses and imagines the other person\'s day — the fight softens before they speak.' }
      }
    ]
  },
  {
    id: 'middlepath',
    name: 'Walking the Middle Path',
    icon: '⚖️',
    color: '#ffb833',
    theme: 'Both / And',
    motto: 'You and someone else can both be right. Agreement isn\'t the goal — balance is.',
    skills: [
      {
        id: 'positive-reinforcement',
        name: 'Positive Reinforcement',
        short: 'Reward the behavior you want to see more of — praise, attention, privileges — so it shows up again.',
        badge: 'The Rewarder',
        clip: { title: 'Catch them doing good', desc: 'A character stops scolding and starts noticing: “I saw you put that away without being asked.”' }
      },
      {
        id: 'negative-reinforcement',
        name: 'Negative Reinforcement',
        short: 'Remove something unpleasant when the desired behavior appears — the relief makes the behavior more likely.',
        badge: 'The Remover',
        clip: { title: 'Taking the pressure off', desc: 'When the child does the chore without the nagging, the nagging stops — and the behavior sticks.' }
      },
      {
        id: 'shaping',
        name: 'Shaping',
        short: 'Reinforce small steps toward a bigger goal — reward each closer approximation and the target gets closer.',
        badge: 'The Stair-Stepper',
        clip: { title: 'Small steps count', desc: 'A trainer celebrates the tiny win before the big one — a little praise for each step forward.' }
      },
      {
        id: 'extinction',
        name: 'Extinction',
        short: 'Stop reinforcing a behavior and it gradually fades — the tantrum stops paying off.',
        badge: 'The Extinguisher',
        clip: { title: 'No payoff', desc: 'A character stays calm and doesn\'t give in to the escalating outburst — and over time the outburst shrinks.' }
      },
      {
        id: 'positive-punishment',
        name: 'Positive Punishment',
        short: 'Add something unpleasant after a behavior to make it less likely — a consequence, not a lesson in shame.',
        badge: 'The Consequence',
        clip: { title: 'The added consequence', desc: 'A rule gets a consequence — miss curfew, lose the car keys — so the behavior has a cost.' }
      },
      {
        id: 'negative-punishment',
        name: 'Negative Punishment',
        short: 'Take away something valued after a behavior to make it less likely — lose the privilege, keep the lesson.',
        badge: 'The Withholder',
        clip: { title: 'The privilege goes', desc: 'A character loses screen time for breaking a rule — the removal makes the rule real.' }
      },
      {
        id: 'validate-self',
        name: 'Validate Self',
        short: 'Make sense of yourself — your thoughts, feelings, desires, and actions make sense given your history.',
        badge: 'The Self-Understander',
        clip: { title: 'Your reaction makes sense', desc: 'A character traces their own strong reaction back to what shaped it — and stops judging themselves for it.' }
      },
      {
        id: 'validate-others',
        name: 'Validate Someone Else',
        short: 'Make sense of another person\'s thoughts, feelings, desires, and actions — even if you see it differently.',
        badge: 'The Empath',
        clip: { title: '“That makes sense.”', desc: 'A friend is crushed after being left out. Instead of fixing it, the hero says, “I get why that hurts. Anyone would.”', youtubeId: '-4EDhdAHrOg' }
      },
      {
        id: 'think-dialectically',
        name: 'Think Dialectically',
        short: 'Neither black nor white — hold both sides at the same time. There\'s always another way to see it.',
        badge: 'The Both-And Thinker',
        clip: { title: 'Two truths at once', desc: 'A character stops choosing a side and sees both truths holding together — anger and love in the same sentence.' }
      },
      {
        id: 'act-dialectically',
        name: 'Act Dialectically',
        short: 'Walk the middle path — act from balance, not from a single extreme.',
        badge: 'The Middle-Walker',
        clip: { title: 'Both and', desc: 'A character holds two truths at once — angry AND still wanting to fix it — and acts from that balance.' }
      }
    ]
  },
  {
    id: 'emotion',
    name: 'Emotion Regulation',
    icon: '🌤️',
    color: '#46c46e',
    theme: 'Feeling the facts',
    motto: 'Emotions are information. Check the facts, then choose how to respond.',
    skills: [
      {
        id: 'identify-label-emotions',
        name: 'Identify and Label Emotions',
        short: 'Notice and describe emotions as they arise — name the emotion, its trigger, and the urge to act on it.',
        badge: 'The Feelings-Watcher',
        clip: { title: 'Name it to tame it', desc: 'A character pauses mid-argument and names exactly what they feel and why — the emotion loses its grip the moment it has a name.' }
      },
      {
        id: 'pleasant-activities',
        name: 'Engage in Pleasant Activities',
        short: 'Do fun things in the short-term and the long-term — on purpose, for the enjoyment itself.',
        badge: 'The Joy-Seeker',
        clip: { title: 'Savoring the moment', desc: 'A character drops their worries and does something purely for fun, letting themselves enjoy it fully.' }
      },
      {
        id: 'values-priorities',
        name: 'Values and Priorities',
        short: 'Know what matters to you in wise mind, and let your values set your priorities.',
        badge: 'The Compass',
        clip: { title: 'What matters most', desc: 'A character sorts what they care about and chooses the one thing to protect first.' }
      },
      {
        id: 'long-term-goals',
        name: 'Work Toward Long-Term Goals',
        short: 'Identify long-term goals and take small steps toward them, one day at a time.',
        badge: 'The Climber',
        clip: { title: 'Small steps, big goal', desc: 'A character breaks a far-off dream into today-sized steps and starts with the first one.' }
      },
      {
        id: 'build-mastery',
        name: 'Build Mastery',
        short: 'Do things that make you feel proud and confident about yourself.',
        badge: 'The Builder',
        clip: { title: 'A skill you own', desc: 'A character practices something until it clicks, and the confidence shows.' }
      },
      {
        id: 'cope-ahead',
        name: 'Cope Ahead',
        short: 'Rehearse the skills you will need for a hard situation before it happens.',
        badge: 'The Scout',
        clip: { title: 'The rehearsal', desc: 'A character walks through tomorrow\'s hard conversation in their head and plans exactly which skill to use.' }
      },
      {
        id: 'abc-please',
        name: 'PLEASE',
        short: 'Treat Physical illness, balance Eating, avoid drugs and alcohol, balance Sleep, get Exercise — the body under the mood.',
        badge: 'The Self-Carer',
        clip: { title: 'The bedtime reset', desc: 'A character who\'s been spiraling puts the phone away, sleeps, eats a real breakfast, and feels the fog lift.', youtubeId: '9jiYIHVGKCE' }
      },
      {
        id: 'check-facts',
        name: 'Check the Facts',
        short: 'Does this emotion fit the facts? Look for evidence before believing the worst story.',
        badge: 'The Fact-Checker',
        clip: { title: 'The unread message', desc: 'A character spirals over a "seen" text, then lists what they actually know vs. what they\'re imagining.' }
      },
      {
        id: 'do-problem-solving',
        name: 'Do Problem Solving',
        short: 'Identify the problem, generate solutions, pick the best one, and take one step.',
        badge: 'The Solver',
        clip: { title: 'The plan', desc: 'A character turns a big overwhelming problem into a list of options and picks one to try.' }
      },
      {
        id: 'opposite-action',
        name: 'Opposite Action',
        short: 'When an emotion doesn\'t fit, act opposite to its urge. Fear → approach. Anger → gently step away.',
        badge: 'The Turner',
        clip: { title: 'Walking toward the fear', desc: 'Scared to speak up in class, a character raises a hand anyway, voice wobbling, and does it.', youtubeId: 'fDWn-cqKKrg' }
      },
      {
        id: 'riding-the-wave',
        name: 'Riding the Wave',
        short: 'Emotions are like waves — they rise, peak, and fall. Don\'t fight the wave; ride it out without acting on it.',
        badge: 'The Wave-Rider',
        clip: { title: 'Surf the surge', desc: 'A character lets the big feeling swell, peak, and recede without being swept along — watching the wave instead of swimming against it.' }
      }
    ]
  },
  {
    id: 'interpersonal2',
    name: 'Assertion & Conflict',
    icon: '🗣️',
    color: '#e2519a',
    theme: 'Speaking with skill',
    motto: 'Ask for what you want, hold your ground, and repair what breaks.',
    skills: [
      {
        id: 'problem-solving',
        name: 'Problem Solving',
        short: 'Name the problem, brainstorm, pick one step, try it, evaluate. Break it into chewable bites.',
        badge: 'The Fixer',
        clip: { title: 'The whiteboard', desc: 'A group splits one giant problem into three small tasks on a board, then each grabs one.' }
      },
      {
        id: 'apology',
        name: 'Effective Apology',
        short: 'Name the harm, take responsibility, fix what you can, and change the behavior going forward.',
        badge: 'The Repairer',
        clip: { title: 'The real sorry', desc: 'A character says the specific thing they did wrong, doesn’t make excuses, and asks how to make it right.' }
      }
    ]
  }
];

const DBT_SKILLS = (() => {
  const map = {};
  DBT_MODULES.forEach(m => m.skills.forEach(s => { map[s.id] = Object.assign({ moduleId: m.id }, s); }));
  return map;
})();

/* ---- Customization unlocks: collect ALL badges in a module to unlock ---- */
const UNLOCK_FEATURES = [
  { id: 'sunglasses', label: 'Sunglasses', emoji: '🕶️', requires: 'mindfulness', desc: 'Earn all Mindfulness badges to unlock sunglasses.' },
  { id: 'shoes', label: 'Shoes', emoji: '👟', requires: 'distress', desc: 'Earn all Distress Tolerance badges to unlock new shoes.' },
  { id: 'outfits', label: 'Clothing', emoji: '👕', requires: 'interpersonal1', desc: 'Earn all Interpersonal Effectiveness badges to unlock new clothing.' },
  { id: 'accessories', label: 'Accessories', emoji: '🎒', requires: 'middlepath', desc: 'Earn all Walking the Middle Path badges to unlock accessories.' },
  { id: 'hairstyles', label: 'Hairstyles', emoji: '💇', requires: 'emotion', desc: 'Earn all Emotion Regulation badges to unlock new hairstyles.' },
  { id: 'costumes', label: 'Special Costumes', emoji: '🎭', requires: 'interpersonal2', desc: 'Earn all Assertion badges to unlock special costumes.' },
  { id: 'career', label: 'Career Outfit', emoji: '🧰', requires: 'stage7', desc: 'Complete Stage 7 to unlock the career outfit.' },
  { id: 'finale', label: 'Legendary Outfit', emoji: '👑', requires: 'stage8', desc: 'Complete Stage 8 to unlock the legendary finale outfit.' }
];

/* ---- Video clip library: reinforcing scenes. youtubeId set to real DBT-RU / DBT Skills from Experts videos where available. ---- */
const CLIP_LIBRARY = DBT_MODULES.flatMap(m => m.skills.map(s => ({
  skillId: s.id,
  title: s.clip.title,
  desc: s.clip.desc,
  module: m.name,
  youtubeId: s.clip.youtubeId || null
})));

/* ---- Movie & TV illustrations: real scenes that show a skill in action. youtubeId must be a real, verified video. ---- */

/* ---- Movie illustration pages (one per DBT module). page id groups clips; entries without a page default to 'orientation'. ---- */
const MOVIE_PAGES = [
  { id: 'orientation', label: 'Orientation/Mindfulness', icon: '🧘', color: '#7c5cff', moduleId: 'mindfulness' },
  { id: 'distress', label: 'Distress Tolerance', icon: '🌊', color: '#4aa8ff', moduleId: 'distress' },
  { id: 'middlepath', label: 'Walking the Middle Path', icon: '⚖️', color: '#ffb833', moduleId: 'middlepath' },
  { id: 'emotion', label: 'Emotion Regulation', icon: '🌤️', color: '#46c46e', moduleId: 'emotion' },
  { id: 'interpersonal', label: 'Interpersonal Effectiveness', icon: '🤝', color: '#ff6b8a', moduleId: 'interpersonal1' },
  { id: 'assertion', label: 'Assertion & Conflict', icon: '🗣️', color: '#e2519a', moduleId: 'interpersonal2' }
];

const MOVIE_ILLUSTRATIONS = [
  {
    skillId: 'behavioral-chain-analysis',
    heading: 'Behavioral Chain Analysis',
    title: 'Toy Story — What Is a Behavior Chain?',
    movie: 'Toy Story',
    clipDesc: 'Uses Toy Story characters to walk through a behavior chain: the prompting event, the links of thoughts and feelings, the problem behavior, and the consequences that keep the pattern going.',
    youtubeId: 'yAHAyjn7Ca8'
  },
  {
    skillId: 'biosocial-theory',
    heading: 'Biosocial Theory',
    title: 'Home Alone — The Family Orders Pizza',
    movie: 'Home Alone',
    clipDesc: 'An intense emotion and everyone reacting to it — a window into the biosocial theory: a biological sensitivity to emotion meeting an invalidating environment that makes it worse.',
    youtubeId: 'yRadWIDAtRI'
  },
  {
    skillId: 'three-states-of-mind',
    heading: 'Three States of Mind',
    title: 'The Karate Kid (2010) — "Pick Up Your Jacket"',
    movie: 'The Karate Kid (2010)',
    clipDesc: 'Mr. Han stays calm and notices the facts (reasonable mind) while Dre is flooded by anger (emotion mind). Their exchange shows the two extremes — and the goal of balancing them into wise mind.',
    youtubeId: '8INjmc-WWSY'
  },
  {
    skillId: 'three-states-of-mind',
    heading: 'Three States of Mind',
    title: 'The Imitation Game — "Turing Takes the Lead on Enigma"',
    movie: 'The Imitation Game',
    clipDesc: 'Turing works from the facts — what the machine can do, what the code requires — coolly thinking through the problem. A clear window into reasonable mind: logic and facts steering the moment.',
    youtubeId: 'rXetZGKTU3Q'
  },
  {
    skillId: 'three-states-of-mind',
    heading: 'Three States of Mind',
    title: 'The Imitation Game — "Damn You and Your Useless Machine!"',
    movie: 'The Imitation Game',
    clipDesc: 'Emotion floods in — anger, frustration, and the urge to throw blame at the machine. A vivid picture of emotion mind taking over when stress hits.',
    youtubeId: 'kKxfjfo0CAw'
  },
  {
    skillId: 'three-states-of-mind',
    heading: 'Three States of Mind',
    title: 'The Imitation Game — "Your Big Expensive Machine Doesn\'t Work"',
    movie: 'The Imitation Game',
    clipDesc: 'High emotion and hot judgment collide with the cold facts of the situation. Two minds pulling against each other — the struggle between emotion mind and reasonable mind in one room.',
    youtubeId: 'a9QNfvP86VM'
  },
  {
    skillId: 'three-states-of-mind',
    heading: 'Three States of Mind',
    title: 'The Imitation Game — "It Worked." The Moment Enigma Was Cracked',
    movie: 'The Imitation Game',
    clipDesc: 'The breakthrough — a decision that balances the numbers with the human cost. A rare moment where both minds meet: wise mind, arrived at under pressure.',
    youtubeId: 'ICO0y8GPKVo'
  },
  {
    skillId: 'three-states-of-mind',
    heading: 'Three States of Mind',
    title: 'The Imitation Game — "Keeping It a Secret"',
    movie: 'The Imitation Game',
    clipDesc: 'Facts are weighed, emotions are held back, and the team decides what can and cannot be said. The pull between what reason demands and what the heart wants.',
    youtubeId: 'Qdfp5Za0XVg'
  },
  {
    skillId: 'three-states-of-mind',
    heading: 'Three States of Mind',
    title: 'The Imitation Game — "Deciding Who Lives and Who Dies"',
    movie: 'The Imitation Game',
    clipDesc: 'The hardest decision of the war: the cold arithmetic of saving thousands weighed against the human cost of not warning a few. Reason, emotion, and the impossible space between them.',
    youtubeId: 'Tkwh3_zqlac'
  },
  {
    skillId: 'emotion-mind',
    heading: 'Emotion Mind',
    title: 'Finding Nemo — "Nemo\'s First Day at School"',
    movie: 'Finding Nemo (2003)',
    clipDesc: 'Marlin is emotion mind at full volume: at the school drop-off his fear floods everything. He catastrophizes, overreacts to a perfectly normal moment, and his anxiety distorts the facts — the school is safe and the teacher is calm, but his mood re-writes the whole scene as a disaster.',
    youtubeId: 'cpZ_zG9fJhw'
  },
  {
    skillId: 'reasonable-mind',
    heading: 'Reasonable Mind',
    title: 'Negative Space — A Lesson in Packing',
    movie: 'Negative Space (Oscar-nominated short)',
    clipDesc: 'A father teaches his son a precise, logical system for packing a suitcase — roll, layer, and fill the negative space. Reasonable mind in action: working from the facts of the task, efficiently and without emotion getting in the way.',
    youtubeId: 'KI2lsdXJQ40'
  },
  {
    skillId: 'wise-mind',
    heading: 'Wise Mind',
    title: 'The Samurai and the Fly',
    movie: 'Short film',
    clipDesc: 'A samurai waits, watches, and acts with a calm, balanced mind — not swept by reaction, not ignoring reality. A beautiful metaphor for wise mind: the balance of emotion and reason.',
    youtubeId: 'R5-HNXxc5kk'
  },
  {
    skillId: 'observe',
    heading: 'Observe',
    title: 'Soul (2020) — "Your Spark Isn\'t Your Purpose"',
    movie: 'Soul (2020)',
    clipDesc: 'Back in his body, Joe finally stops rushing — he notices the leaf, the music, the moments he\'d been walking past. The skill of Observe: paying attention to what\'s happening right now, without judging or grabbing.',
    youtubeId: 'ifJaW22bTXs'
  },
  {
    skillId: 'observe',
    heading: 'Observe',
    title: 'The Mandalorian — Bo Katan & Din Djarin See the Mythosaur',
    movie: 'The Mandalorian',
    clipDesc: 'Silence. No words, no judging — Bo Katan and Din Djarin just stop and watch something real appear before them. Observe: paying full attention to what\'s actually there, letting the moment be noticed without running off into story.',
    youtubeId: 'dOjJkGotBnU'
  },
  {
    skillId: 'describe',
    heading: 'Describe',
    title: 'Inside Out — "I Miss Home"',
    movie: 'Inside Out (2015)',
    clipDesc: 'Riley finally stops pretending and puts words on her experience — she misses home, her old friends, her hockey team. Describe: stating the facts of what you feel and want, plainly and without blame.',
    youtubeId: 'xmcD2y0On8E'
  },
  {
    skillId: 'participate',
    heading: 'Participate',
    title: 'The Break-Up (2006) — "Owner of a Lonely Heart"',
    movie: 'The Break-Up (2006)',
    clipDesc: 'The family throws themselves fully into the moment — singing, committed, present. Gary stands on the sidelines, guarded and sarcastic. A contrast in one scene: what participating looks like, and what is missed when you hold back.',
    youtubeId: 'aky2LIJu7yM'
  },
  {
    skillId: 'participate',
    heading: 'Participate',
    title: 'Geri\'s Game',
    movie: 'Geri\'s Game (Pixar)',
    clipDesc: 'An old man plays chess against himself — losing himself completely in the game, moment by moment. A playful example of participating wholeheartedly in the present.',
    youtubeId: 't3tMS3b-EFQ',
    linkUrl: 'https://www.youtube.com/watch?v=t3tMS3b-EFQ'
  },
  {
    skillId: 'non-judgmental',
    heading: 'Non-Judgmental Stance',
    title: 'The Present',
    movie: 'The Present (2014)',
    clipDesc: 'A boy meets a puppy with a missing leg — and his first judgments quickly give way to seeing what\'s really there. A tender example of letting go of "good" and "bad" and simply noticing the moment as it is.',
    youtubeId: '3XA0bB79oGc'
  },
  {
    skillId: 'one-mindfully',
    heading: 'One-Mindful',
    title: 'Kung Fu Panda 2 — Inner Peace Training',
    movie: 'Kung Fu Panda 2',
    clipDesc: 'Shifu shows what it looks like to be fully in one moment — still, present, focused — while Po fakes it and misses the point. A playful lesson in doing one thing at a time, with full attention.',
    youtubeId: 'h_vt8PGaOeI'
  },
  {
    skillId: 'one-mindfully',
    heading: 'One-Mindful',
    title: 'The Pursuit of Happyness — The Rubik\'s Cube',
    movie: 'The Pursuit of Happyness',
    clipDesc: 'In a cab, with everything on the line, Chris Gardner goes all-in on the Rubik\'s cube — one thing, complete attention, nothing else in the room. While he is one-mindfully in it, everyone around him is splitting focus, half-doing several things at once.',
    youtubeId: 'VGog6eEGr2M'
  },
  {
    page: 'distress',
    skillId: 'accepts',
    heading: 'Distract with Wise Mind ACCEPTS',
    title: 'Harry Potter — Quidditch World Cup',
    movie: 'Harry Potter and the Goblet of Fire',
    clipDesc: 'In the middle of the chaos and dread of the tournament, the Quidditch World Cup is pure spectacle — flying, chanting, thousands of fans roaring. An Activity that pulls the whole crowd\'s attention out of their worries and into the moment. ACCEPTS — A: do something that fully absorbs you.',
    youtubeId: 'CpXp1L7xB4o'
  },
  {
    page: 'distress',
    skillId: 'accepts',
    heading: 'Distract with Wise Mind ACCEPTS',
    title: 'Harry Potter — "An Unexpected Fireworks Display"',
    movie: 'Harry Potter and the Order of the Phoenix',
    clipDesc: 'The whole school is suffocating under Umbridge — and Fred and George set off a crate of fireworks that turns exam-day dread into cheering, laughter, and awe. Generating a different emotion for everyone in the hall. ACCEPTS — E: spark a different feeling when yours are too heavy.',
    youtubeId: 'ew0NiL1ehq4'
  },
  {
    page: 'distress',
    skillId: 'accepts',
    heading: 'Distract with Wise Mind ACCEPTS',
    title: 'Harry Potter — "Lupin Teaches the Patronus Charm"',
    movie: 'Harry Potter and the Prisoner of Azkaban',
    clipDesc: 'Harry is drowning under the Dementors\' despair, so Lupin hands him chocolate — a sensation that breaks the spiral — then teaches him to push the dark thoughts back with his happiest memory. ACCEPTS — S: a grounding sensation; T: replace the painful thought with a good one.',
    youtubeId: 'sPVCPoe-DgE'
  },
  {
    page: 'distress',
    skillId: 'improve',
    heading: 'IMPROVE the Moment',
    title: 'Viktor Frankl — Finding Meaning in Life\'s Hardest Moments',
    movie: 'Viktor Frankl (in conversation)',
    clipDesc: 'Frankl on surviving the camps: you can\'t always change what happens, but you can choose the meaning you give it. Finding meaning in the pain doesn\'t erase the facts — it makes them bearable. IMPROVE — M: build a Meaning that carries you through the moment.',
    youtubeId: 'UTqcOucKInw'
  },
  {
    page: 'distress',
    skillId: 'improve',
    heading: 'IMPROVE the Moment',
    title: 'War Room — Official Trailer',
    movie: 'War Room',
    clipDesc: 'Elizabeth surrenders the chaos of a crumbling marriage and a losing streak into prayer — letting out the fear and inviting something steadier in. IMPROVE — P: turn to your spiritual faith / prayer as a way to soften the moment.',
    youtubeId: 'mIl-XY9t_Lw'
  },
  {
    page: 'distress',
    skillId: 'improve',
    heading: 'IMPROVE the Moment',
    title: 'Deepwater Horizon — The Jump',
    movie: 'Deepwater Horizon',
    clipDesc: 'The rig is exploding, every instinct says panic — and Mike shrinks the whole catastrophe down to one next step: "We\'re going to jump. On three." Andrea stops trying to solve the disaster and just does the single thing in front of her. IMPROVE — O: one thing at a time.',
    youtubeId: '25xFyLiRD5o'
  },
  {
    page: 'distress',
    skillId: 'improve',
    heading: 'Encouragement',
    title: 'Central Park — "Own It"',
    movie: 'Central Park',
    clipDesc: 'The full cast chanting themselves into owning who they are — "I\'m not perfect, I\'m going to own it" — a big song of talking yourself up in the voice of a supportive friend. Encouragement is the IMPROVE letter for cheering yourself on when the moment gets hard.',
    youtubeId: 'Oq2llIEd9WU'
  },
  {
    page: 'distress',
    skillId: 'self-soothe',
    heading: 'Self-Soothe',
    title: 'Willy Wonka & the Chocolate Factory — "Pure Imagination"',
    movie: 'Willy Wonka & the Chocolate Factory (1971)',
    clipDesc: 'Wonka leads the group into the chocolate room — and every sense comes alive at once: the sight of the candy landscape, the taste of the chocolate river, the sound of the song. A full five-sense reset that lifts the whole room out of its worries. Self-Soothe — give your senses something soft to hold.',
    youtubeId: 'eHdpNLFFEh8'
  },
  {
    page: 'distress',
    skillId: 'self-soothe',
    heading: 'Self-Soothe',
    title: 'Wonka — "Pure Imagination"',
    movie: 'Wonka (2023)',
    clipDesc: 'Chalamet\'s Wonka opens the doors of the chocolate shop and steps into a world built of pure imagination — colors, sweets, and music folding into one another. An invitation to sink into what delights the senses instead of what worries the mind. Self-Soothe — let your senses lead.',
    youtubeId: 'O9Hngn4Zcbk'
  },
  {
    page: 'distress',
    skillId: 'pros-cons',
    heading: 'Pros and Cons',
    title: 'The Lion King — "Simba Argues with Nala"',
    movie: 'The Lion King (1994)',
    clipDesc: 'Nala begs Simba to return to Pride Rock, and the two futures collide: stay in the easy jungle life, or face the painful past and the dying kingdom. Simba weighs the cost of returning — the memory of his father\'s death — against the cost of staying — his people and his pride. Pros and Cons: two futures on the scale.',
    youtubeId: 'HQaQA4v_2vw'
  },
  {
    page: 'distress',
    skillId: 'pros-cons',
    heading: 'Pros and Cons',
    title: 'The Lion King — "Simba & Rafiki"',
    movie: 'The Lion King (1994)',
    clipDesc: 'Rafiki reframes the past: "The past can hurt. But the way I see it, you can either run from it, or learn from it." Simba sees the con of running laid bare — the escape has been costing him everything — and the truth starts to outweigh the pain.',
    youtubeId: 'FK84gBs4jP0'
  },
  {
    page: 'distress',
    skillId: 'pros-cons',
    heading: 'Pros and Cons',
    title: 'The Lion King — "Simba Returns to Pride Rock"',
    movie: 'The Lion King (1994)',
    clipDesc: 'After weighing both futures, Simba chooses to face the fight: "I\'m going back." The payoff of the pros-and-cons decision — he weighs the cost of avoiding the problem against the cost of facing it, and acting on the scale tilts the whole kingdom back toward hope.',
    youtubeId: '7SIcnKfliu8'
  },
  {
    page: 'distress',
    skillId: 'stop',
    heading: 'STOP',
    title: 'Jurassic Park — "The Kitchen Chase"',
    movie: 'Jurassic Park (1993)',
    clipDesc: 'Trapped in the kitchen with the raptors, Lex whispers the essence of STOP: “Don\'t move. She can\'t see us if we don\'t move.” The raptor’s vision is movement-based — as long as they go still and observe instead of reacting, the threat passes. Your impulse works the same way: it can’t catch you if you stop, step back, observe, and only then proceed mindfully.',
    youtubeId: 'LYN9USd9Gpg'
  },
  {
    page: 'distress',
    skillId: 'tipp',
    heading: 'TIPP',
    title: 'TIPP — clip coming soon',
    movie: '',
    clipDesc: 'A scene of someone using temperature, intense exercise, paced breathing, or muscle relaxation to bring the body down fast.',
    placeholder: true
  },
  {
    page: 'distress',
    skillId: 'radical-acceptance',
    heading: 'Radical Acceptance',
    title: 'Up — "Stuff We Did"',
    movie: 'Up (2009)',
    clipDesc: 'Carl relives a whole lifetime with Ellie — the plans, the small moments, the loss. And then he gently lets it go, accepting what is real: that their adventure together is finished, and the love is still with him. Radical acceptance is not approving of the pain — it is opening to what actually is.',
    youtubeId: 'oPLJ8m-KeYA'
  },
  {
    page: 'distress',
    skillId: 'radical-acceptance',
    heading: 'Radical Acceptance',
    title: 'Avatar: The Last Airbender — "Iroh\'s Speech to Zuko"',
    movie: 'Avatar: The Last Airbender',
    clipDesc: 'Iroh, himself imprisoned and broken, meets Zuko\'s self-doubt with total, unconditional acceptance — no lecture, no anger. He accepts what he cannot change about his own captivity and holds space for Zuko to accept his own path. Radical acceptance is not approving of the pain — it is opening to what actually is.',
    youtubeId: 'hTZNvcP3Q28'
  },
  {
    page: 'distress',
    skillId: 'turning-the-mind',
    heading: 'Turning the Mind',
    title: 'Avatar: The Last Airbender — "Zuko Joins Team Avatar"',
    movie: 'Avatar: The Last Airbender',
    clipDesc: 'Zuko arrives at the Western Air Temple to join Team Avatar — the decision made and held. After wrestling with willfulness — chasing his father\'s approval, the throne — he turns his mind toward a new reality: leaving Ozai, choosing the Avatar\'s side. And the awkward distrust he meets shows turning isn\'t glamorous — it\'s re-committing while the old pull drifts back.',
    youtubeId: 'FIm_8_C7R9U'
  },
  {
    page: 'distress',
    skillId: 'willingness-willfulness',
    heading: 'Willingness vs. Willfulness',
    title: 'Bluey — "The Creek"',
    movie: 'Bluey',
    clipDesc: 'Bluey is dragged out of her comfort zone and gripes her way through the bush — willfulness, the "I won\'t" that fights the moment. But when she finally lets it in — "the creek is beautiful" — she doesn\'t want to leave. Willingness: opening your hands to what\'s actually in front of you.',
    youtubeId: 'dmaNzUuyNZo'
  },
  {
    skillId: 'effectiveness',
    heading: 'Effectiveness',
    title: 'Toast',
    movie: 'Toast (one-minute short)',
    clipDesc: 'A tiny comedy about adapting to what the situation needs — letting go of "should" and doing what actually works. A light, funny look at flexibility over rigidity.',
    youtubeId: 'xV9HnITo2C0'
  },
  {
    skillId: 'spiritual-perspective',
    heading: 'Spiritual Perspective / Loving Kindness',
    title: 'Bluey — "Sleepytime"',
    movie: 'Bluey',
    clipDesc: 'In Bingo\'s dream she drifts through the cosmos, and the Sun becomes Mum — who reassures her: "I\'ll always be here for you, even if you can\'t see me, because I love you." A tender picture of connecting to something bigger than yourself, and of loving kindness offered and received.',
    youtubeId: 'hfkyGAQyNvg'
  },
  {
    page: 'interpersonal',
    skillId: 'give',
    heading: 'GIVE',
    title: 'Price Check — A Story of Unexpected Grace',
    movie: 'Price Check',
    clipDesc: 'A moment of unexpected grace — kindness that asks for nothing back. A tender look at GIVE: being Gentle, showing Interest, Validating what\'s there, and keeping an Easy manner.',
    youtubeId: '6CzKwk6BndI'
  },
  {
    page: 'interpersonal',
    skillId: 'fast',
    heading: 'FAST',
    title: 'Erin Brockovich — "I Don\'t Need Pity, I Need a Paycheck"',
    movie: 'Erin Brockovich',
    clipDesc: 'Erin refuses pity and asks for a real chance — no apologies, no shrinking. A vivid example of FAST: keeping your self-respect by being Fair, dropping the over-apology, Sticking to your values, and staying Truthful.',
    youtubeId: 'jQtZjQQ0dDU'
  },
  {
    page: 'interpersonal',
    skillId: 'cheerleading-statements',
    heading: 'Cheerleading Statements for Worry Thoughts',
    title: 'The Greatest Showman — "This Is Me"',
    movie: 'The Greatest Showman',
    clipDesc: 'Keala Settle as Lettie faces the crowd that\'s been judging and rejecting her — and talks herself up in front of them: "I am brave, I am bruised, I am who I\'m meant to be." A cheerleading statement aimed straight at the worry thoughts about what others think. Cheerleading Statements — tell yourself the words you need to hear, out loud if you have to.',
    youtubeId: 'Rj4Yu9Utdw0'
  },
  {
    page: 'interpersonal',
    skillId: 'cheerleading-statements',
    heading: 'Cheerleading Statements for Worry Thoughts',
    title: 'Central Park — "Weirdos Make Great Superheroes"',
    movie: 'Central Park',
    clipDesc: 'Molly and Cole sing the worry thoughts that say "you\'re weird, you don\'t fit" — then answer them with cheerleading statements: being weird is what makes you a great superhero. Challenging the voice in your head with the words you need to hear.',
    youtubeId: 'f6dMvAd44Hk'
  },
  {
    page: 'interpersonal',
    skillId: 'dearman',
    heading: 'DEAR MAN',
    title: 'Hidden Figures — The Bathroom Speech',
    movie: 'Hidden Figures',
    clipDesc: 'Katherine states the facts plainly, names the real cost of the problem, and asserts what she needs to do her work. A powerful example of DEAR MAN: Describe, Express, Assert, and the calm confidence to make the request land.',
    youtubeId: '9j6p7ajuh-E'
  },
  {
    page: 'interpersonal',
    skillId: 'think',
    heading: 'THINK',
    title: 'Stronger Stuff — Some Messes Are Too Hard to Clean Up Alone',
    movie: 'Stronger Stuff (Wonderhunt short film)',
    clipDesc: 'When the mess feels too big to fix alone, this short film asks the THINK questions: What is the other person really going through? What interpretation am I carrying? And who might I need to see it with?',
    youtubeId: 'rBgONBvzN9A'
  },
  {
    page: 'middlepath',
    skillId: 'positive-reinforcement',
    heading: 'Positive Reinforcement',
    title: 'The Big Bang Theory — "Positive Reinforcement"',
    movie: 'The Big Bang Theory',
    clipDesc: 'A classic comedy about what positive reinforcement actually does — noticing and rewarding the behavior you want to see more of, and what happens when the reward system backfires.',
    youtubeId: 'JA96Fba-WHk'
  },
  {
    page: 'middlepath',
    skillId: 'negative-reinforcement',
    heading: 'Negative Reinforcement',
    title: 'Harry Potter and the Chamber of Secrets — "Mandrake Potting"',
    movie: 'Harry Potter and the Chamber of Secrets',
    clipDesc: 'The mandrakes scream — and the scream is aversive enough to knock a student out cold. So the class repots each one as fast as it can: the moment the mandrake is safely potted, the screaming STOPS. Negative Reinforcement: removing something unpleasant (the scream) right after a behavior makes that behavior more likely.',
    youtubeId: 'G17jQg_pUJg'
  },
  {
    page: 'middlepath',
    skillId: 'shaping',
    heading: 'Shaping',
    title: 'Shaping — clip coming soon',
    movie: '',
    clipDesc: 'A scene of someone reinforcing small steps toward a bigger goal, each closer step earning a reward.',
    placeholder: true
  },
  {
    page: 'middlepath',
    skillId: 'extinction',
    heading: 'Extinction',
    title: 'Extinction — clip coming soon',
    movie: '',
    clipDesc: 'A scene of a behavior fading because it stops paying off — no reaction, no reward, and the behavior shrinks.',
    placeholder: true
  },
  {
    page: 'middlepath',
    skillId: 'positive-punishment',
    heading: 'Positive Punishment',
    title: 'Harry Potter and the Chamber of Secrets — "Ron Receives a Howler"',
    movie: 'Harry Potter and the Chamber of Secrets',
    clipDesc: 'Ron stole the car, and the consequence arrives as a Howler — a loud, embarrassing, publicly delivered scolding from his mother at the breakfast table. Positive Punishment: an aversive consequence is ADDED right after a behavior, so that behavior becomes less likely.',
    youtubeId: 'fBziSx7RtqY'
  },
  {
    page: 'middlepath',
    skillId: 'negative-punishment',
    heading: 'Negative Punishment',
    title: 'The Cosby Show — "Vanessa Sneaks Out and Lies"',
    movie: 'The Cosby Show',
    clipDesc: 'Vanessa sneaks off to a Baltimore concert after lying about a slumber party. At home, Clair takes away the thing Vanessa values most — her parents\' trust — and names it directly: "You have proved to us that you cannot be trusted. It\'s going to be a very long time before we even think of trusting you again." Negative Punishment — removing something valued after a behavior, so that behavior becomes less likely.',
    youtubeId: '_1_3Q4kNF9Q'
  },
  {
    page: 'middlepath',
    skillId: 'validate-self',
    heading: 'Validate Self',
    title: 'Validate Self — clip coming soon',
    movie: '',
    clipDesc: 'A scene of a character making sense of their own strong thoughts, feelings, and actions given their history.',
    placeholder: true
  },
  {
    page: 'middlepath',
    skillId: 'validate-self',
    heading: 'Self Invalidation',
    title: 'Central Park — "I\'m the Worst"',
    movie: 'Central Park',
    clipDesc: 'The opposite of Validate Self: Molly tears herself down, piles on every flaw, and talks to herself in a way she would never talk to a friend. Watch the self-invalidating voice first — then imagine the Validate Self reply that makes room for her real history and feelings.',
    youtubeId: 'mcmJUe-kT38'
  },
  {
    page: 'middlepath',
    skillId: 'validate-others',
    heading: 'Validate Someone Else',
    title: 'Bluey — "Baby Race"',
    movie: 'Bluey',
    clipDesc: 'Chilli is convinced she\'s failing as a mum because Bluey is "losing the baby race." Bella, a mother of nine, sits with her, chats, and simply tells her: "You\'re doing great." No fixing, no advice — just witnessing her struggle and naming it as understandable. Validating someone else: acknowledging another\'s experience as true and real, without changing it.',
    youtubeId: 'xmkCmJtK6X8'
  },
  {
    page: 'middlepath',
    skillId: 'think-dialectically',
    heading: 'Think Dialectically',
    title: 'Central Park — "Show Up!"',
    movie: 'Central Park',
    clipDesc: 'Paige holds two true things at once: she\'s a good mom who isn\'t always there, and her work matters without making her a failure at parenting. She never picks one side — showing up not-perfect but present is the synthesis. Think Dialectically: two truths can both be real.',
    youtubeId: 'nv27N2zRqwU'
  },
  {
    page: 'middlepath',
    skillId: 'act-dialectically',
    heading: 'Act Dialectically',
    title: 'Avatar: The Last Airbender — Iroh Explains the Four Elements',
    movie: 'Avatar: The Last Airbender',
    clipDesc: 'Fire and water, earth and air — each element is its own truth, and wisdom comes from seeing how they flow into one another. Act Dialectically: moving between "both" and "and" instead of "either/or."',
    youtubeId: 'b-029Kglc-c'
  },
  {
    page: 'emotion',
    skillId: 'pleasant-activities',
    heading: 'Engage in Pleasant Activities',
    title: 'Avatar: The Last Airbender — Penguin Sledding',
    movie: 'Avatar: The Last Airbender',
    clipDesc: 'Aang and Katara drop everything to sled down the snow on penguins — laughing, no goal, no skill, just doing something because it\'s fun. Engage in Pleasant Activities: choosing an activity for the sheer enjoyment of it.',
    youtubeId: 'skyE9tImIo0'
  },
  {
    page: 'emotion',
    skillId: 'pleasant-activities',
    heading: 'Engage in Pleasant Activities',
    title: 'Avatar: The Last Airbender — Secret Tunnel Song',
    movie: 'Avatar: The Last Airbender',
    clipDesc: 'The group spontaneously bursts into a silly, joyful song — no purpose, just fun in the moment. Engage in Pleasant Activities: giving yourself permission to enjoy something for its own sake.',
    youtubeId: '4-GiYP_4qc0'
  },
  {
    page: 'emotion',
    skillId: 'values-priorities',
    heading: 'Values and Priorities',
    title: 'Spider-Man (2002) — "With Great Power Comes Great Responsibility"',
    movie: 'Spider-Man (2002)',
    clipDesc: 'After losing Uncle Ben, Peter finally understands what he values — and makes the priority call: with great power comes the responsibility to use it for others. Values and Priorities: knowing what matters to you and choosing to act on it.',
    youtubeId: 'guuYU74wU70'
  },
  {
    page: 'emotion',
    skillId: 'values-priorities',
    heading: 'Values and Priorities',
    title: 'The Amazing Spider-Man (2012) — "With Great Power Comes Great Responsibility"',
    movie: 'The Amazing Spider-Man (2012)',
    clipDesc: 'A different Peter Parker reaches the same turning point: after loss, he chooses who he wants to be and steps into the responsibility that matters most. A second take on the same values-and-priorities decision.',
    youtubeId: '61XnpbwnNL8'
  },
  {
    page: 'emotion',
    skillId: 'values-priorities',
    heading: 'Values and Priorities',
    title: 'Moana — "How Far I\'ll Go"',
    movie: 'Moana',
    clipDesc: 'Everyone on the island has a role "by design" — and Moana tries to fit hers, telling herself she can be satisfied if she plays along. But she keeps colliding with what she actually values: the call of the ocean. The song\'s turn comes when she realizes "the call isn\'t out there at all, it\'s inside me." Values and Priorities — know what matters to you, not just what the role assigns.',
    youtubeId: 'cPAbx5kgCJo'
  },
  {
    page: 'emotion',
    skillId: 'long-term-goals',
    heading: 'Work toward long-term goals',
    title: 'The Legend of Korra — "Be the Leaf"',
    movie: 'The Legend of Korra',
    clipDesc: 'Korra is a prodigy at three elements — but air won\'t come. She practices, fails, and tries again, day after day, building toward the goal instead of quitting. Long-term goals: one small step at a time, even when it\'s hard.',
    youtubeId: 'T2GLJK6nwFY'
  },
  {
    page: 'emotion',
    skillId: 'long-term-goals',
    heading: 'Work toward long-term goals',
    title: 'Korra Can Airbend — The Breakthrough',
    movie: 'The Legend of Korra',
    clipDesc: 'After all the practice and failed attempts, the day comes — Korra finally airbends. The payoff of a long-term goal: the work added up, and the breakthrough arrived because she kept going.',
    youtubeId: '4JjOIjp9GwM'
  },
  {
    page: 'emotion',
    skillId: 'long-term-goals',
    heading: 'Work toward long-term goals',
    title: 'Korra Teaches Opal to Airbend',
    movie: 'The Legend of Korra',
    clipDesc: 'Korra, who once couldn\'t airbend at all, now passes the skill on to Opal. Long-term goals come full circle: the student becomes the teacher, and the goal you worked toward becomes something you can give to someone else.',
    youtubeId: 'cvU1XCgt6QE'
  },
  {
    page: 'emotion',
    skillId: 'build-mastery',
    heading: 'Build Mastery',
    title: 'Avatar: The Last Airbender — "Suki Trains Sokka"',
    movie: 'Avatar: The Last Airbender',
    clipDesc: 'Sokka starts as a total novice with a "silly fan" — then gets humbled, trains step by step, and earns genuine skill (and Suki\'s respect) by the end. Build Mastery: practice something hard, one step at a time, until the confidence is yours.',
    youtubeId: 'jVqCb32FOvM'
  },
  {
    page: 'emotion',
    skillId: 'abc-please',
    heading: 'PLEASE',
    title: 'Rocky — The Training Montage',
    movie: 'Rocky (1976)',
    clipDesc: 'A day in the routine — eat, train, rest, repeat. PLEASE in action: taking care of your body (Exercise, Eating, Sleep) so you can handle what\'s coming.',
    youtubeId: '_YYmfM2TfUA'
  },
  {
    page: 'emotion',
    skillId: 'riding-the-wave',
    heading: 'Riding the Wave',
    title: 'Bluey — "Bingo\'s Bad Mood"',
    movie: 'Bluey',
    clipDesc: 'Bingo wakes up in a bad mood and nothing will snap her out of it — belly breaths, a favourite song, a game — the mood crests and falls on its own. Riding the Wave: you don\'t fight the feeling or fake it away; you let the emotion rise, peak, and pass like a wave.',
    youtubeId: 'zg5NWRudUlg'
  },
  {
    page: 'emotion',
    skillId: 'identify-label-emotions',
    heading: 'Identify and Label Emotions',
    title: 'Bluey — "Stickbird"',
    movie: 'Bluey',
    clipDesc: 'Bluey\'s trick for the grumps: scoop up all the upset and angry, feel where it sits in the body — the belly, the neck, the ears — then throw it away. Identify and Label Emotions: notice the feeling and where it lives in you before deciding what to do with it.',
    youtubeId: 'WKD4Mg3nbnY'
  },
  {
    page: 'emotion',
    skillId: 'cope-ahead',
    heading: 'Cope Ahead',
    title: 'Bluey — "The Show"',
    movie: 'Bluey',
    clipDesc: 'Chilli rehearses her plan ahead of the big moment — "have a little cry, pick myself up, dust myself off, keep going; the show must go on" — and when the balloon baby pops mid-performance, she\'s ready. Cope Ahead: rehearse the emotion and the plan before the moment arrives.',
    youtubeId: '9U0hKvMl79g'
  },
  {
    page: 'emotion',
    skillId: 'check-facts',
    heading: 'Check the Facts',
    title: 'Snack Attack — A Case of Mistaken Cookies',
    movie: 'Snack Attack (animated short)',
    clipDesc: 'A woman is certain the young man beside her is stealing her snack — and reacts with full fury. But the twist shows her emotion did not fit the facts at all. Check the Facts: ask what you actually know before believing the worst story.',
    youtubeId: '38y_1EWIE9I'
  },
  {
    page: 'emotion',
    skillId: 'do-problem-solving',
    heading: 'Do Problem Solving',
    title: 'Black Panther — Killmonger Challenges the Throne',
    movie: 'Black Panther',
    clipDesc: 'Killmonger has a goal and a real obstacle — T\'Challa\'s claim to the throne. So he picks the one strategy Wakandan law actually recognizes, and follows it through step by step. Do Problem Solving: name the problem, choose what works, and do it.',
    youtubeId: '4MVQXdtrEQM'
  },
  {
    page: 'emotion',
    skillId: 'do-problem-solving',
    heading: 'Do Problem Solving',
    title: 'Central Park — "Polishing the Floors"',
    movie: 'Central Park',
    clipDesc: 'A task that could feel endless and overwhelming — polished floor by polished floor — handled one careful step at a time, fully in the moment. A gentle look at taking the overwhelming task and simply doing the next piece of it. Do Problem Solving: pick one step, and do it.',
    youtubeId: 'YoXIAdSUhQY'
  },
  {
    page: 'emotion',
    skillId: 'opposite-action',
    heading: 'Opposite Action',
    title: 'Hide and Seek',
    movie: 'Hide and Seek (Wonderhunt)',
    clipDesc: 'The urge when we feel shame is to hide — but hiding our struggles only leaves us feeling alone. The film asks the opposite-action question: what might change if you let yourself be seen?',
    youtubeId: 'x2N5IHAKsPY'
  },
  {
    page: 'emotion',
    skillId: 'opposite-action',
    heading: 'Opposite Action',
    title: 'Wicked — "Defying Gravity"',
    movie: 'Wicked',
    clipDesc: 'Everyone in Oz tells Elphaba she is wicked and wrong — and the fear-driven urge would be to shrink, hide, and stay under the Wizard\'s thumb. Instead she acts opposite to the fear: she steps to the edge, lets herself be seen, and flies. Opposite Action — when the urge is to cower, do the thing you\'re afraid of.',
    youtubeId: '5znZFJWSZ7o'
  },
  {
    page: 'assertion',
    skillId: 'apology',
    heading: 'Effective Apology',
    title: 'Avatar: The Last Airbender — "Zuko Apologizes to Iroh"',
    movie: 'Avatar: The Last Airbender',
    clipDesc: 'Zuko has betrayed his uncle Iroh, and now he finally says the real sorry. He names the harm — "I was confused, and I didn\'t know what I was doing" — takes the blame without excuses, and asks how he can make it right. An Effective Apology: name the harm, take responsibility, and repair what you broke.',
    youtubeId: 'phlrJpgKYyw'
  },
  {
    page: 'assertion',
    skillId: 'apology',
    heading: 'Effective Apology',
    title: 'Harry Potter and the Goblet of Fire — "Forgive and Forget"',
    movie: 'Harry Potter and the Goblet of Fire',
    clipDesc: 'Ron let jealousy sink him — he stopped talking to Harry, sure he\'d entered the Tournament behind his back. After the second task, he finally names the harm and owns it: "I\'ve been a right git, haven\'t I? I knew you didn\'t put your name in that Goblet." And Harry offers the forgiveness that lets them both move on. An Effective Apology: own the mistake without excuses, and let the repair land.',
    youtubeId: '9s_dukNgLPg'
  }
];
