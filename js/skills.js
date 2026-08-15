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
        clip: { title: 'DBT orientation', desc: 'A walkthrough of DBT and the biosocial model — how a sensitive nervous system meets a world that doesn\'t always validate it.', youtubeId: '1HMQubkRzx4' }
      },
      {
        id: 'three-states-of-mind',
        name: 'Three States of Mind',
        short: 'Emotion mind, reasonable mind, and wise mind — the two extremes and the balanced place between them.',
        badge: 'The Mind-Mapper',
        clip: { title: 'Dr. Marsha Linehan teaches Wise Mind', desc: 'Marsha Linehan explains the three states of mind — emotion mind, reasonable mind, and the wise mind that balances them — in her own words.', youtubeId: 'X_BmPxd0Eiw' }
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
        clip: { title: 'Soften now', desc: 'A character who can\'t change the situation changes how it feels — imagery, one breath, self-encouragement.' },
        extraClips: [{ title: 'Viktor Frankl — Finding Meaning in Life\'s Hardest Moments', desc: 'Finding meaning in the pain doesn\'t erase the facts — it makes them bearable. IMPROVE — M: build a Meaning that carries you through the moment.', youtubeId: 'UTqcOucKInw' }]
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
        clip: { title: 'Cold water + slow breath', desc: 'In a locker room, a character splashes cold water on their face, then breathes out longer than they breathe in.', youtubeId: 'UuvH_j9O0f4' },
        extraClips: [{ title: 'DBT TIPP Skills — 4 Easy Tricks to Calm Down Fast', desc: 'Dr. Kiki walks through all four TIPP skills in action — cold water for the dive reflex, intense exercise to burn off stress energy, paced breathing with a longer exhale, and paired muscle relaxation.', youtubeId: 'NISIubon-8Q' }]
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
        clip: { title: 'The accepting posture', desc: 'A character softens their face and unclenches their hands — and the acceptance in their body quiets the fight in their head.' },
        extraClips: [{ title: 'Half-Smile and Willing Hands — Accepting Reality With Your Body', desc: 'A clinician walks through the body-mind loop behind half-smiling and willing hands: a slight Mona Lisa smile and open, palms-up hands tell your body to stop bracing.', youtubeId: '9Imu7jCxWWY' }]
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
        clip: { title: 'Small steps count', desc: 'A trainer celebrates the tiny win before the big one — a little praise for each step forward.' },
        extraClips: [{ title: 'Shaping — Reinforcing Each Small Step', desc: 'A step-by-step walkthrough of shaping procedures: reinforcing each closer approximation toward the target behavior, one small rewarded step at a time.', youtubeId: 'zSH_s-KonQ8' }]
      },
      {
        id: 'extinction',
        name: 'Extinction',
        short: 'Stop reinforcing a behavior and it gradually fades — the tantrum stops paying off.',
        badge: 'The Extinguisher',
        clip: { title: 'No payoff', desc: 'A character stays calm and doesn\'t give in to the escalating outburst — and over time the outburst shrinks.' },
        extraClips: [{ title: 'Extinction — When a Behavior Stops Paying Off', desc: 'What extinction really is: withholding the reinforcement that used to keep a behavior alive, so the behavior gradually shrinks. Includes the extinction burst warning — an initial flare-up that must never be rewarded.', youtubeId: '1Qb0EkEe4oI' }]
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
        clip: { title: 'The whiteboard', desc: 'A group splits one giant problem into three small tasks on a board, then each grabs one.' },
        extraClips: [{ title: 'DBT Skill of the Day: Problem Solving', desc: 'The seven problem-solving steps in action: describe the facts, check the facts, identify your goal, brainstorm options, pick a solution, put it into action, and evaluate the results.', youtubeId: 'hjuS3txa-ts' }]
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

/* ---- Practice worksheets: one per skill. aim/steps are shared; sceneT/sceneA give adolescent and adult wording for the "your turn" scenario. ---- */
const WORKSHEETS = {
  'behavioral-chain-analysis': {
    aim: 'Trace one unwanted behavior link by link so you can find the exact link to change.',
    steps: [
      'Prompting event: What started the chain — the situation, the time, the place, or what someone said or did?',
      'Vulnerability: What made you more likely to react this way — tired, hungry, stressed, or off your usual routine?',
      'Link by link: For each link in the chain, name the thought, the feeling, the body sensation, and the urge that came next.',
      'The consequence: What happened right after the behavior — and how did that outcome make the behavior more likely next time?',
      'The fix: Pick ONE link you can change next time, and name the skill you would use at that exact spot.'
    ],
    sceneT: 'Think of a real moment from this week that led to a behavior you wish you could change — a snap reply, a text you regret, or skipping something you planned. Walk it through the chain link by link, and circle the first link where you could have used a skill.',
    sceneA: 'Choose a recent behavior pattern in your life — procrastinating, an argument that escalated, overcommitting, or snapping at your partner. Run it through the chain and mark the exact link you can intercept next time.',
    tip: 'Intense emotion usually starts before the impulse. Practicing the chain when you are calm makes the pattern visible.'
  },
  'biosocial-theory': {
    aim: 'Understand how your sensitivity and your environment work together to shape big emotions.',
    steps: [
      'Sensitivity: Name the situations where your emotions hit faster, stronger, or last longer than other people\'s seem to.',
      'The environment: What messages did you learn about emotions — at home, at school, at work — and which feelings were treated as okay while others were ignored or punished?',
      'The collision: Describe one moment where your sensitivity and the environment clashed — you felt the emotion AND got invalidated for it.',
      'The both/and story: Rewrite it fairly: "My reaction makes sense because I am sensitive AND my world sometimes misses it."'
    ],
    sceneT: 'Describe a day where you felt your reaction was "too much." Use the theory to re-describe it without shame: name what was biology, what was environment, and why your reaction makes sense.',
    sceneA: 'Recall a recent conflict or emotional reaction you judged yourself for. Parse it fairly: what in your nervous system was wired for it, and what in the situation invited it — without labeling yourself broken.',
    tip: 'Being sensitive is a temperament, not a flaw. The skill is meeting it with a world you can build around it.'
  },
  'three-states-of-mind': {
    aim: 'Spot the three states of mind — emotion mind, reasonable mind, and wise mind — in real moments.',
    steps: [
      'Emotion mind: Name a recent moment where the feeling drove the whole story — the facts blurred and the mood took over.',
      'Reasonable mind: Name a moment where you were all logic and fact, with the human layer left out.',
      'Wise mind: Name a moment where you felt something AND thought clearly at the same time — the choice that just felt balanced.',
      'The blend: For your hardest moment today, write both sides and the wise-mind path between them.'
    ],
    sceneT: 'You get a grade or a text that feels like a disaster. Write what emotion mind says, what reasonable mind says, and what wise mind would actually do tonight.',
    sceneA: 'Pick a live stressor — a hard conversation, a deadline, bad news. Write the emotion-mind story, the reasonable-mind story, and the wise-mind choice that holds both.',
    tip: 'Wise mind is often that quiet "this, not that" feeling sitting under all the noise.'
  },
  'emotion-mind': {
    aim: 'Notice when emotion mind is running the show.',
    steps: [
      'The story: Write the dramatic story your emotion told you recently — "everything is ruined," "nobody cares."',
      'The filter: What facts got distorted — what was exaggerated, skipped, or read as worse than it really is?',
      'The urge: What did emotion mind want you to do — say, send, quit, or avoid?',
      'The tell: What body signs showed your emotion mind was in charge — a fast heart, heat, a tight chest?'
    ],
    sceneT: 'Think of a recent argument or rough night. List three things emotion mind said that were not the full truth, and what it urged you to do.',
    sceneA: 'From your week, pull one moment emotion mind hijacked. Record its storyline, its distortion, and its urge — then note the body tell that could become your early warning system.',
    tip: 'Emotion mind feels like truth, runs on urgency, and gets louder the longer you argue with it.'
  },
  'reasonable-mind': {
    aim: 'Notice when reasonable mind leaves out the human layer.',
    steps: [
      'The logic: Name a moment where you handled something with cool logic and clear facts.',
      'What got skipped: What feelings were in the room that you did not acknowledge — yours or anyone else\'s?',
      'The cost: What did leaving the feelings out cost — the relationship, the follow-through, the trust?',
      'The upgrade: What is one validating sentence you could have added without changing a single fact?'
    ],
    sceneT: 'Describe a time you were "just being logical" but someone ended up hurt or closed off. What feeling did you leave on the table?',
    sceneA: 'Think of a decision or conversation where you won the argument and lost the relationship. What would adding one line of acknowledgment have changed?',
    tip: 'Facts are not the whole room. Reasonable mind reads the spreadsheet; it misses the person.'
  },
  'wise-mind': {
    aim: 'Practice the both/and place where reason and emotion speak together.',
    steps: [
      'Facts: List the facts of a current decision or conflict.',
      'Feelings: List what your emotions are telling you.',
      'Both/and: Write a sentence that holds both — "I feel ___ AND the facts are ___."',
      'The wise-mind choice: What is the one step that honors both — not the raw impulse, not the cold agenda?'
    ],
    sceneT: 'Picture a decision coming up — asking for something, making up after a fight, or trying something new. Run it through facts, feelings, both/and, and the wise choice.',
    sceneA: 'For a live decision — a negotiation, a boundary, a work call, a big purchase — draft the both/and sentence, then the one balanced step.',
    tip: 'Wise mind rarely shouts. It is the settled feeling you get when the two voices finally agree to share the mic.'
  },
  'observe': {
    aim: 'Practice just noticing — thoughts, feelings, and body cues without grabbing them.',
    steps: [
      'One thing: Pick one thing to observe right now — your breath, a sound, the feeling under your fingertips.',
      'Words dropping: Notice when you add a label or a judgment, and let the words fall away and return to raw noticing.',
      'The witness: Name what shows up as if from across the street — "there is worry," not "I am worried."',
      'The length: How long could you observe before your mind grabbed the steering wheel?'
    ],
    sceneT: 'Take a two-minute observing break today — on the bus, in class, or before bed. Write what you noticed, and how many times your mind tried to take over.',
    sceneA: 'Run a two-minute observation between meetings or on a commute. Log what was noticed versus what was reacted to, and which of the two was harder.',
    tip: 'Observing is practiced with a light grip — the moment you squeeze, you change what you are watching.'
  },
  'describe': {
    aim: 'Put words to experience — fact before story.',
    steps: [
      'Name it: "I feel ___" — pick the precise emotion word, not the vague one.',
      'What happened: One sentence of just-the-facts, with no "always," no "never," and no mind-reading.',
      'Body facts: "My heart is ___," "my shoulders are ___" — describe the body, not the drama.',
      'Say it out loud: State the facts to yourself or a trusted ear: "I am angry that my plan changed, and I still want to fix it."'
    ],
    sceneT: 'Next time you notice a big feeling, describe it out loud or in writing using the three parts above. Then read it back — what changed when it became facts?',
    sceneA: 'Practice describing in a relationship or work moment: name the emotion, state the observable facts, and add one body fact — without the story.',
    tip: 'Describe is how you turn a fog of feeling into something you can actually work with.'
  },
  'participate': {
    aim: 'Throw yourself fully into the moment without self-consciousness.',
    steps: [
      'The edge: Name an activity where you hold back — half in, watching yourself, afraid to look silly.',
      'The half: What do you actually do when you are only half present — check out, judge, or plan ahead?',
      'All in: Describe what wholehearted looks like in that activity.',
      'Do it: Set one time this week to go all in, and notice what it feels like to be inside the moment instead of watching it.'
    ],
    sceneT: 'Pick one thing this week — a game, dancing, karaoke, a conversation — where you usually hold a little back. Notice what changes when you lean in fully.',
    sceneA: 'Choose one domain — a hobby, your work, a relationship, exercise — where you coast at seventy percent. Make one choice this week to enter it at full, and log what shifted.',
    tip: 'You cannot participate and watch yourself participate at the same time. Pick which one you are doing.'
  },
  'non-judgmental': {
    aim: 'Describe without the good/bad verdict — just what is.',
    steps: [
      'Verdicts: List three labels or judgments you used mentally this week — "lazy," "stupid," "unfair."',
      'The fairness swap: Rewrite each judgment as a plain fact — "he is unresponsive today" instead of "he is the worst."',
      'The open space: When you remove the verdict, what space opens up in the situation?',
      'The reframe: Practice one non-judgmental sentence a day from now on.'
    ],
    sceneT: 'Take a moment you keep calling "the worst." Describe it the way a camera sees it — colors, sounds, actions — with no verdicts.',
    sceneA: 'Identify a person or situation you habitually label. For one week, describe them or it plainly when they appear — fact, not verdict — and notice the shift in you.',
    tip: 'Judgments are opinions with extra armor. Strip the verdict and the facts can breathe.'
  },
  'one-mindfully': {
    aim: 'Do one thing at a time, and return when the mind wanders.',
    steps: [
      'The split: Name a task you currently do with half attention — homework plus a screen, driving plus a call.',
      'One thing: Choose a single task for the next few minutes and close the tabs — the mental ones and the real ones.',
      'The drift: Each time your mind pulls away, notice it without scolding and gently come back.',
      'Times done: Log two or three one-mindful windows this week and how they felt.'
    ],
    sceneT: 'Pick a daily task — eating, brushing your teeth, walking home — and do it one-mindfully tonight. Count how many times your brain wandered and came back.',
    sceneA: 'Build two one-mindful windows into your day — a full-attention conversation and a single-task work block. Note the difference in quality for you and for the other person.',
    tip: 'Your mind will wander dozens of times an hour. The skill is not never drifting; it is always returning.'
  },
  'effectiveness': {
    aim: 'Do what works for the goal in front of you, dropping the shoulds.',
    steps: [
      'The rule: Name a "should" you are fighting right now — how you think things ought to be.',
      'The goal: What result do you actually want in this situation?',
      'What works vs. what is fair: What would feel "fair" or "right" to do, and what would actually — realistically — work?',
      'Play the game: Write the response you would give if you were ruthless about results, then soften the hard edges to keep your values.'
    ],
    sceneT: 'A rule in your house or group feels unfair. Instead of fighting "should," name the outcome you want and the small realistic step that gets you closer to it.',
    sceneA: 'At work or home, choose a conflict you are spending energy on "shoulds." Redirect that energy into the one move that actually changes the outcome.',
    tip: 'Effectiveness is not surrender. It picks the door that will actually open.'
  },
  'spiritual-perspective': {
    aim: 'Connect to something bigger and practice loving kindness toward yourself and others.',
    steps: [
      'Bigger than you: Name what feels bigger than your current mood — nature, people, purpose, a belief.',
      'Wish yourself well: Say "May I be safe, may I be peaceful, may I be kind to myself." How does it land?',
      'Wish one other well: Direct the same wish at one person who is hard to like — no conditions attached.',
      'Sit in it: Notice the size of your problems when you hold them next to what is bigger.'
    ],
    sceneT: 'Think of someone who annoyed or hurt you this week. Send them three silent well-wishes, then send them to yourself. Write what shifted inside you.',
    sceneA: 'Choose a person who is currently hard for you — a colleague, an ex, a relative. Do a short loving-kindness practice for them, then for yourself, once a day this week.',
    tip: 'Loving kindness is not the same as liking. It is wishing well and setting your own heart down in a bigger place.'
  },
  'accepts': {
    aim: 'Distract with Wise Mind ACCEPTS to shift attention in a crisis.',
    steps: [
      'Activities: What could absorb your hands and your mind for the next twenty minutes?',
      'Compare: Compare this moment to a harder one you survived — what does that comparison give you?',
      'Emotions: What show, song, or memory could flip the emotional channel?',
      'Sensations: Ice on your wrist, a warm drink, a scent — what one sensation could reroute you?',
      'Pick ONE: Circle the ACCEPTS letter that fits right now and commit to doing it for fifteen to twenty-five minutes.'
    ],
    sceneT: 'List five things you can distract with in five minutes or less — a game, a walk, a playlist. When a crisis mood hits, pick instantly from the list.',
    sceneA: 'Build a crisis "distraction menu" of concrete twenty-minute activities — outside options, phone-friendly options, and people options. When the wave is high, order from the menu instead of the impulse.',
    tip: 'Distraction is not running away forever — it is buying time until the peak of the wave thins out.'
  },
  'improve': {
    aim: 'IMPROVE the Moment — soften the present without changing the facts.',
    steps: [
      'Imagery: Close your eyes and build a safe or healing image — who is there, and what does it look like?',
      'Meaning: Name why this moment matters — what does surviving it make possible?',
      'Relaxation: Drop your shoulders, soften your jaw, and breathe out longer than you breathe in.',
      'One at a time: Choose one small task you can do fully for the next ten minutes.',
      'Vacation and Encouragement: Plan a short mental break, then speak to yourself like a coach.'
    ],
    sceneT: 'Describe a situation you cannot fix right now. Then pick two IMPROVE letters you can actually do today, and try them in the moment.',
    sceneA: 'Identify a current unsolvable stressor. Set a daily ten-minute IMPROVE window — a calm image break plus a coaching phrase — and practice it this week.',
    tip: 'You cannot always change what is happening, but you can change what happens inside the moment.'
  },
  'self-soothe': {
    aim: 'Comfort the five senses — the quickest door to calming the storm.',
    steps: [
      'Touch: A warm shower, a blanket, a pet — what soothes your skin?',
      'Taste: A comforting drink or small snack — slowly, one taste at a time.',
      'Vision: What is genuinely pleasant to look at — a photo, a scene, a color?',
      'Smell: A candle, fresh air, soap — what carries a calm scent?',
      'Hearing: Music, rain, quiet — what sounds settle you?',
      'Build the kit: Write one thing for each sense. That is your emergency soothing kit.'
    ],
    sceneT: 'Make a "soothe kit" list — one item for each sense that is simple and free. Keep it saved, and actually run it the next hard night.',
    sceneA: 'Assemble a real or mental five-sense soothe kit for the next high-stress moment, and note which single sense works fastest for you under pressure.',
    tip: 'The body learns calm through the senses before the head can catch up. Soothing is not spoiling yourself; it is survival fuel.'
  },
  'pros-cons': {
    aim: 'Put the impulse on paper and let the list decide.',
    steps: [
      'Two columns: Write "Do it (react, act on the impulse)" above one column and "Don\'t (ride it out)" above the other.',
      'Short-term: List what each choice gets you right now.',
      'Long-term: List where each choice lands you in a week — the cost, the relationships, your self-respect.',
      'The verdict: Which column did the future you want? Write one sentence of what you will do.'
    ],
    sceneT: 'Choose one urge you have this week — buying something, sending an angry text, blowing off a plan. Run the two-column list before you act.',
    sceneA: 'Pick a live impulse — overtime you do not want, a purchase, a hard conversation, a habit relapse. Write the pros and cons of act-now versus wait-and-ride.',
    tip: 'The act-now column almost always wins on paper until you add the long-term column.'
  },
  'stop': {
    aim: 'Freeze before the impulse fires — Stop, Take a step back, Observe, Proceed mindfully.',
    steps: [
      'S: Picture a warm-up impulse you had this week — the moment just before it fired.',
      'T: What would taking a step back look like — physically moving away, one breath, hands off the phone?',
      'O: As an observer, describe what is happening — what you feel, what you want, what the urge is saying.',
      'P: What is the mindful next move — the one that keeps your goal intact?'
    ],
    sceneT: 'Script your STOP for the moment an angry text is about to go out: what exactly will you do at Stop, Step back, Observe, and Proceed?',
    sceneA: 'Design a STOP routine for your highest-frequency risk moment — an email you might regret, a bite, a drink, an angry reply. Rehearse it out loud.',
    tip: 'STOP buys the ten seconds between the impulse and the action — and ten seconds is usually enough.'
  },
  'tipp': {
    aim: 'Quick body calmers: Temperature, Intense exercise, Paced breathing, Progressive muscle relaxation.',
    steps: [
      'Temperature: Splash cold water on your face or hold an ice cube for thirty seconds — the dive reflex.',
      'Intense exercise: Run up the stairs, do jumping jacks, sprint for a minute — burn off the stress energy.',
      'Paced breathing: Breathe out LONGER than you breathe in — count four in, six out. Repeat five times.',
      'Progressive relaxation: Tense then release each muscle group, feet to shoulders, one at a time.',
      'Pick one: Which TIPP move will you use when the alarm bells go off?'
    ],
    sceneT: 'When your heart is pounding, choose the fastest body move — cold water, a minute of drills, or slow exhales. Time it: how long until your body quiets?',
    sceneA: 'For meetings, work, or public settings, use slow exhales and quietly tensing the hands. Log which TIPP tool works fastest in your real triggers.',
    tip: 'TIPP uses the body to change the brain chemistry — it works even when your head is refusing every clever idea.'
  },
  'radical-acceptance': {
    aim: 'Accept reality as it is — not approval, just opening to what is true.',
    steps: [
      'The fact: Name the reality you have been fighting — "this happened and it will not change."',
      'The fight: What does fighting it cost you in energy, sleep, or time?',
      'Open the hand: Say it to yourself: "I do not have to like it. I can still accept that it is."',
      'Acceptance is a verb: Write one small action you can take from acceptance rather than from resistance.'
    ],
    sceneT: 'Name one thing you are still angry is not different. Practice saying "it is what it is, and I am not approving of it — just accepting it" until it stops stinging.',
    sceneA: 'Identify a reality you keep re-litigating in your head. For one week, catch each mental "this should not be" and gently turn it to "this is."',
    tip: 'Acceptance does not mean you think it is okay. It means you stop burning the fuel that keeps the pain alive.'
  },
  'turning-the-mind': {
    aim: 'Choose acceptance again and again — every time your mind drifts back to fighting.',
    steps: [
      'The crossroads: Picture the fork — one road is "accept reality," the other is "it should not be this way."',
      'Count the drifts: Notice how often your mind picks the fighting road in a day. Just count; do not scold.',
      'The turn: Each time, gently say "acceptance, again" and choose the acceptance fork once more.',
      'Practice loop: Choose acceptance ten times a day this week, even if it never feels finished.'
    ],
    sceneT: 'You catch your mind replaying "it should not be like this." Set a quiet alarm to check in: each time, say "acceptance, again" and turn the mind back.',
    sceneA: 'Track your mind\'s refusals around one current reality. Each refusal, turn the mind back — and note how the turning gets faster with practice.',
    tip: 'Turning the mind is not a one-time decision. It is a choice at a fork you will pass many times a day.'
  },
  'willingness-willfulness': {
    aim: 'Notice when willfulness takes over and practice willingness — open hands toward what the moment calls for.',
    steps: [
      'Willfulness in me: Name a situation where you have been refusing, fighting, or sitting in "I won\'t."',
      'Hard or unbearable: Ask honestly — is this truly unbearable, or just hard?',
      'Open the hand: What would willingness feel like — what one action would you take if you were open?',
      'Do it anyway: Take that action, even if your feelings have not caught up yet.'
    ],
    sceneT: 'Find something this week you are quietly refusing — a chore, a class, a conversation. Name the "won\'t," then pick one willing action and take it anyway.',
    sceneA: 'Locate one area where you are digging in more than the situation warrants. Choose one willing response a day there, while still protecting your real boundaries.',
    tip: 'Willingness is not giving in to others. It is opening your hands to the task reality already gave you.'
  },
  'half-smile-willing-hands': {
    aim: 'Use your body — a half smile and open hands — to tell it to accept what is.',
    steps: [
      'The half-smile: Soften your mouth into a small, unpracticed Mona Lisa shape — not a grin, just openness.',
      'Willing hands: Unclench — palms up or resting open, arms relaxed. The opposite of a fist.',
      'Marry posture to reality: Say the hard truth in your head while you hold the posture.',
      'Notice the signal: What happens to the fight in your mind when your body stops bracing?'
    ],
    sceneT: 'During a moment you would usually tense up — a long wait, bad news, an awkward class — run the half-smile and open palms for sixty seconds. Log the shift.',
    sceneA: 'Use it at a hard desk moment or in traffic: soften your face and unclench your hands at each red light, pairing each with the word "acceptance."',
    tip: 'Your body cannot easily fight and relax at the same time. Give the body the message first.'
  },
  'give': {
    aim: 'Keep relationships warm mid-conversation: Gentle, Interested, Validate, Easy manner.',
    steps: [
      'Gentle: No attacks. Swap "you always ___" for "when ___ happened, I felt ___."',
      'Interested: Lean in and ask one open question that shows you care about their side.',
      'Validate: Say something true about their point that you can stand behind — "that makes sense that you would feel that."',
      'Easy manner: Relax your face and shoulders — a smile and an easy tone soften the whole talk.'
    ],
    sceneT: 'Next conversation where you feel attacked, use GIVE: stay gentle in your wording, ask one curious question, and validate one true piece of their side before you respond.',
    sceneA: 'Apply GIVE in a tense relationship talk: soften your delivery, show genuine interest, validate the valid part, and keep an easy tone while you hold your point.',
    tip: 'GIVE is the warmth before the ask. Nobody listens to a request delivered like a subpoena.'
  },
  'fast': {
    aim: 'Keep your self-respect in any conversation: Fair, no over-Apologies, Stick to values, Truthful.',
    steps: [
      'Fair: Whether you get the outcome or not, be fair — to them AND to yourself.',
      'Over-apologies: Notice your automatic "sorry" — swap five of them this week for a thank-you or a plain statement.',
      'Stick to values: What would you still stand for even if you lost this argument?',
      'Truthful: Say what is true even when it is the harder thing — do not bend your facts to please.'
    ],
    sceneT: 'Catch yourself apologizing when you did not do anything wrong. This week, replace three of those "sorrys" with an honest statement of what you meant.',
    sceneA: 'Identify a conversation where you fold your self-respect to avoid conflict. Plan the FAST line: fair, no over-apology, one value you hold, and one truth you will state.',
    tip: 'FAST is not about winning the ask. It is about liking yourself no matter how the answer lands.'
  },
  'cheerleading-statements': {
    aim: 'Challenge judgmental worry thoughts with wise-mind cheerleading statements.',
    steps: [
      'Name the worry: Write the exact scary thought — "I cannot do this," "everyone will laugh."',
      'The judgment: What is the worry calling you — and is that fact or opinion?',
      'The truth: Write three true statements you can actually prove — "I have done hard things before," "one step at a time."',
      'Say it loud: Read the cheerleading list out loud at the moment the judging voice starts.'
    ],
    sceneT: 'Write your top three worry-thoughts. Under each, write one cheerleading statement you can believe right now. Use them before class, a tryout, or a talk.',
    sceneA: 'Build a two-second cheerleading statement for your top performance worry — a pitch, a stand-up moment, a deadline. Rehearse it until it beats the inside critic.',
    tip: 'Cheerleading is not fake positivity. It is evidence-based self-support: "I can handle this, one step at a time."'
  },
  'dearman': {
    aim: 'Ask with the gold standard: Describe, Express, Assert, Reinforce, appear confident, Negotiate.',
    steps: [
      'D: State the facts without judgment — what is happening, just the observable truth.',
      'E: Name your feeling with an "I" statement — "I feel ___ when ___."',
      'A: Ask for what you want, directly and clearly. No hints, no hoping they guess.',
      'R: Say the payoff — what good happens for you, for them, or for both if they say yes.',
      'MAN: Appear confident — a straight back, an even voice — and leave the door open to negotiate.'
    ],
    sceneT: 'Script a real ask — a later curfew, help on a project, a change in plans. Write D-E-A-R out loud, then rehearse the exact words once.',
    sceneA: 'Script a live interpersonal ask — a raise, a boundary, an apology owed, a request to your partner. Run D-E-A-R and decide your lane before you deliver it.',
    tip: 'DEAR MAN separates the ask from the relationship. You can ask clearly and still be warm.'
  },
  'think': {
    aim: 'See the other person\'s side: Think, Have empathy, check Interpretations, Notice, use Kindness.',
    steps: [
      'Think: What might actually be going on for them — their day, their load, their history?',
      'Empathy: If that were true, how would you feel? Use it to soften your side.',
      'Interpretations: What story are you putting on their behavior? List two other possible stories.',
      'Notice and Kindness: Notice the exact moment you harden, and soften it with one kind thought or word.'
    ],
    sceneT: 'Someone snubbed or annoyed you this week. Write the unkind story you told yourself, then two kinder possible reasons — and pick the kindest one to act on.',
    sceneA: 'Take a live friction — a colleague\'s silence, your partner\'s tone. Run THINK before you respond: three alternative stories, then one kind interpretation you can believe.',
    tip: 'THINK does not excuse harm. It just stops you from handing the other person the villain script you wrote.'
  },
  'positive-reinforcement': {
    aim: 'Catch people doing good and reward the behavior so it shows up again.',
    steps: [
      'Look for good: Pick one person and spend a day hunting for a behavior you like — instead of only the annoyances.',
      'Make it specific: Praise the exact behavior — "I saw you put that away without being asked."',
      'Add the payoff: Pair the words with attention, a privilege, or time — reinforcement is whatever follows.',
      'Immediate beats perfect: Deliver it right after the behavior, not later in an audit.'
    ],
    sceneT: 'Run a "catch them doing good" shift at home: notice one person and praise the SPECIFIC thing they did, right when it happens.',
    sceneA: 'At home or work, reinforce a teammate\'s or child\'s specific behavior the moment it appears. Plan what you will say and the small payoff that follows.',
    tip: 'Whatever you reinforce, you will get more of. Praise the behavior you want, not the one you dislike.'
  },
  'negative-reinforcement': {
    aim: 'Remove something unpleasant when the desired behavior appears — the relief makes it stick.',
    steps: [
      'Identify the nag: Name the ongoing nagging, pressure, or unpleasant demand that follows a behavior.',
      'The swap: When the desired behavior happens, STOP the unpleasantness — quickly and clearly.',
      'Pair it: Say "this is why the nagging stops now" so the relief is connected to the behavior.',
      'Keep it honest: Only remove the negative for the wanted behavior — not as a way of punishing elsewhere.'
    ],
    sceneT: 'Name one thing you or someone else keeps nagging about. Practice stopping the pressure the moment the wanted behavior shows — instantly, not after a delay.',
    sceneA: 'Coach yourself in a leadership or parenting moment: pick one recurring pressure, and make it stop precisely when the target behavior appears, narrating the link.',
    tip: 'Nagging that stops on the wanted behavior trains it far faster than nagging that never ends.'
  },
  'shaping': {
    aim: 'Reward each small step toward a bigger goal — reinforce every closer approximation.',
    steps: [
      'Pick the target: Name one big habit or skill you want to build.',
      'Break it down: List four or five baby steps that each come closer to the target.',
      'Decide the rewards: What gets celebrated at each step — a check, praise, a small treat?',
      'Do not skip: Celebrate step one and step two before you demand step five. Small wins feed big ones.'
    ],
    sceneT: 'Take one goal that feels huge — a homework routine, a sport, bravery. Map its baby steps, decide the tiny reward each step earns, then start with step one.',
    sceneA: 'Apply shaping to a behavior you want from yourself or your team: define the approximations, the schedule of rewards for each, and the patience to reward early steps.',
    tip: 'You cannot get a staircase from the top step down. Reward the step in front of you today.'
  },
  'extinction': {
    aim: 'Stop reinforcing a behavior and watch it fade — including the burst before it goes.',
    steps: [
      'Find the payoff: What is the behavior currently "earning"? Attention, a yes, an argument, a laugh?',
      'Withhold it: Decide what stops paying out — calmly, consistently, without drama.',
      'Expect the burst: Behaviors flare when the payoff is first cut. Name it in advance so it does not rattle you.',
      'Stay boring: Never reward the flare-up, or you will have taught the biggest bout yet.'
    ],
    sceneT: 'Pick one annoying behavior you "pay for" with attention or giving in. Plan exactly what you will NOT do for one week — and how you will stay boring through the flare-up.',
    sceneA: 'Identify a habit you keep feeding — a tantrum, a refusal, an escalation. Set the rule, expect the burst, and commit to keeping the payoff off the table this week.',
    tip: 'The payoff is the food. When the food stops, the behavior starves — but only if you survive the burst.'
  },
  'positive-punishment': {
    aim: 'Add an unpleasant consequence after a behavior to make it less likely — consequence, not shame.',
    steps: [
      'The behavior: Name the behavior you want less of — specific and observable.',
      'The consequence: Choose a fair, immediate, and proportionate consequence — added, not withdrawn.',
      'The rule: State the rule AND the consequence clearly before it matters.',
      'No shame: Deliver it calmly, tied to the behavior — not to who they are as a person.'
    ],
    sceneT: 'Create a consequence for one on-the-rise behavior — state a clear "if this happens, this added consequence follows," once and calmly.',
    sceneA: 'Design a proportionate added consequence for a behavior, state it ahead of time, and deliver it without drama — discipline, not shame.',
    tip: 'The consequence must be tied to the act, announced in advance, and delivered calmly — otherwise it only teaches fear.'
  },
  'negative-punishment': {
    aim: 'Take away something valued after a behavior to make it less likely — the privilege is the lesson.',
    steps: [
      'The valued thing: What actually matters to the person — screen time, the car, a privilege?',
      'The rule: State the behavior and the exact privilege that will go, and for how long.',
      'Remove it cleanly: Follow through — no second chances whined into existence.',
      'Reconnect it: Tell them how to earn it back, so the lesson lands on behavior, not on power.'
    ],
    sceneT: 'Pick a privilege and a rule pair in your house. Write it as a clear "if ___, then ___" and commit to actually removing it once.',
    sceneA: 'Set one negative-punishment rule with a clear pathway back. Deliver the removal calmly and immediately, then show the re-earn path.',
    tip: 'The removal IS the message. Guardrails work when the privilege actually leaves.'
  },
  'validate-self': {
    aim: 'Make sense of yourself — your reactions make sense given your history.',
    steps: [
      'The reaction: Describe the feeling and the action you judged yourself for.',
      'The history: Trace it back — what formed it or fuels it in you? Your past, your defaults, your stressors.',
      'Sense-making: Say "given that, of course I felt or acted this way." Not an excuse — an understanding.',
      'Now what: From that understanding, name your one next wise step.'
    ],
    sceneT: 'Find one thing you did this week and called yourself bad for. Do the history trace — then say "given my past and my day, my reaction made sense."',
    sceneA: 'Pick a reaction you are embarrassed by. Trace its history to where it makes sense, then use that understanding to choose the next action rather than the shame.',
    tip: 'Validation is not a life sentence of "I am fine." It is the foundation that lets you change from strength, not from shame.'
  },
  'validate-others': {
    aim: 'Make sense of someone else — even when you see it differently.',
    steps: [
      'Listen for sense: Listen for the kernel that makes their reaction make sense to THEM.',
      'Say it: "I get why you feel ___. Anyone in your shoes would." Find the truthful version.',
      'Do not fix yet: Validate BEFORE problem-solving. Agreement is not required.',
      'The difference: Note where you could validate without forfeiting your own truth.'
    ],
    sceneT: 'Someone you love is upset about something that seems small to you. Say the validation line — that their reaction makes sense — before you offer any fix.',
    sceneA: 'In a conflict, lead with one truthful validation of their valid part, THEN state your own truth. Watch what it does to the temperature.',
    tip: 'Validation is not agreement. It is "your reaction makes sense" before "here is what I think."'
  },
  'think-dialectically': {
    aim: 'Hold both sides at once — a third truth lives between them.',
    steps: [
      'Your side: Write your truth fully, with all the evidence that makes it true.',
      'The other side: Write the opposite truth, with all the evidence for it.',
      'Both/and: Combine them — "I am right about ___ AND they are right about ___."',
      'The third path: What becomes possible when both are true at the same time?'
    ],
    sceneT: 'Pick a fight or disagreement that is current for you. Write both truths fully, then a both/and sentence that holds them together.',
    sceneA: 'Take a live dilemma — work and life, a relationship, money — and draft the both/and that contains both truths, then one action that honors both.',
    tip: 'Dialectics is not mush. It is holding two truths tight enough that a new one is born between them.'
  },
  'act-dialectically': {
    aim: 'Walk the middle path — act from balance, not from one extreme.',
    steps: [
      'The swing: When do you tend toward the extreme ends — all in or all out, harsh or silent?',
      'Both sides of you: Name the side you usually under-use.',
      'The middle move: Choose one action that includes both sides — something in between the swing.',
      'Act it: Take the middle action this week and log two results.'
    ],
    sceneT: 'Spot one of your all-or-nothing habits — never or always. Choose the in-between move this week that blends both parts of you.',
    sceneA: 'Identify an area where you oscillate between extremes — perfectionist versus checked out, rigid versus permissive. Take one balanced middle action and record the outcome.',
    tip: 'The middle path is not a compromise that pleases no one. It is the action that carries both truths forward.'
  },
  'identify-label-emotions': {
    aim: 'Name the emotion, its trigger, and the urge to act on it — before the urge acts on you.',
    steps: [
      'The trigger: What actually happened right before the feeling? Out-loud facts only.',
      'The name: Pick the true emotion word — more precise than "bad" or "upset."',
      'The body: Where does it show up in you, and how intense is it from one to ten?',
      'The urge: What does this emotion want you to do — and do you have to obey it?'
    ],
    sceneT: 'When a mood hits, run the four labels out loud or in a note: trigger, name, body and intensity, urge. Do it even when the feeling is small.',
    sceneA: 'In your next intense moment, identify the emotion with precision, its exact trigger, its body signature, and its urge — then decide if the urge belongs to you.',
    tip: 'A feeling with a name has half its power already signed away.'
  },
  'pleasant-activities': {
    aim: 'Do things that delight you — on purpose, for the enjoyment itself, short-term and long-term.',
    steps: [
      'Now: List three to five quick pleasures you can do in under ten minutes.',
      'Soon: List two or three longer joys for the week ahead — schedule them like appointments.',
      'Savor it: During the activity, let yourself be fully in it — participate — without letting guilt interrupt.',
      'The proof: Write how you feel afterward. That is your evidence for doing it again.'
    ],
    sceneT: 'Plan one small, purely fun thing today AND one bigger joy this week. Do the small one, savor it, and write one line of how it felt.',
    sceneA: 'Schedule two pleasant activities into this week — one micro, one meaningful — and defend them from the "shoulds."',
    tip: 'Enjoyment is medicine, but it works only if you let yourself take the full dose.'
  },
  'values-priorities': {
    aim: 'Sort what matters to you in wise mind — then let your values set your priorities.',
    steps: [
      'The list: Brainstorm eight to ten things that matter to you — people, roles, growth, fun, safety.',
      'Rank five: Which five could you not live without? Order them.',
      'The test: For the one on top — is your week actually spending time there?',
      'The shift: Name one small change that moves your week closer to priority number one.'
    ],
    sceneT: 'List what truly matters to you right now (not what others expect). Circle your top three, then pick one small thing this week that moves your life toward them.',
    sceneA: 'Run a mini values sort: your top five values, one honest check of where your energy actually goes, and one schedule change that honors the top value.',
    tip: 'Values are not goals you complete; they are directions you steer. Priority is the steering.'
  },
  'long-term-goals': {
    aim: 'Break a far-off dream into today-sized steps and start with the first one.',
    steps: [
      'The goal: Write the long-term goal — specific, meaningful, and yours.',
      'Why: What will it do for you? Attach the motive so the daily chip has a point.',
      'Today-step: What is the smallest version of this you can do in the next twenty-four hours?',
      'Chain it: Schedule that step for a specific time, and the next one for tomorrow.'
    ],
    sceneT: 'Pick one thing you want months from now. Write the goal, your why, and the exact twenty-minute step you can take TODAY — then put it on the calendar.',
    sceneA: 'Choose one long-term goal. Define the smallest daily or weekly step, tie it to your why, and build one tiny habit that moves the goal each day.',
    tip: 'Long goals feed on small steps taken on days when you do not feel like it.'
  },
  'build-mastery': {
    aim: 'Do things that make you feel proud and capable — and log the evidence.',
    steps: [
      'The skill: Name one thing you can get better at — practical, small, real.',
      'The practice: Schedule a short practice session this week — even fifteen minutes counts.',
      'Notice the win: Afterward, write one concrete thing you can now do that you could not before.',
      'Bank it: Keep a "mastery bank" list — past wins to re-read on off days.'
    ],
    sceneT: 'Pick one skill — an instrument, a language, a sport — and practice for fifteen minutes this week. Afterward, write exactly one thing that got slightly easier.',
    sceneA: 'Choose a skill you want to own — professional or personal. Design one small daily practice, and log a weekly "evidence of getting better."',
    tip: 'Mastery is built on the small evidence pile, not on one heroic perfect performance.'
  },
  'cope-ahead': {
    aim: 'Rehearse the skills you will need for a hard situation before it happens.',
    steps: [
      'The situation: Describe the hard moment coming — when, where, and with whom.',
      'The skills: List two or three skills you can actually use there — STOP, DEAR MAN, check the facts, paced breathing.',
      'Rehearse it: Run the whole scene in your head, including it going wrong, and walk yourself through the skill you would fire.',
      'Script it: Write one sentence for the hardest line you might have to say.'
    ],
    sceneT: 'Think of a hard moment coming this week — a talk, a return, a test. Walk it through in your head using one skill, and write the exact words you will say.',
    sceneA: 'Cope ahead on a live stressful event — a performance, a hard meeting, an awkward family dinner — dressed with the skills you will actually deploy.',
    tip: 'Coping is a skill you can rehearse in your head until it is already half-done when the moment arrives.'
  },
  'abc-please': {
    aim: 'Balance the body under the mood: Physical illness, Eating, substances, Sleep, Exercise.',
    steps: [
      'Physical illness: How is your health today — any illness, pain, or tiredness talking?',
      'Eating: Are you eating regularly, or is hunger driving the mood?',
      'Substances: Anything masking, numbing, or unbalancing — caffeine, alcohol, drugs, energy drinks?',
      'Sleep: How many hours and how regular is your sleep this week?',
      'Exercise: Are you moving your body, or is the tension parked in it?'
    ],
    sceneT: 'Fill in the PLEASE check for the last twenty-four hours — eating, sleep, exercise, late-screen nights. If two boxes are red, fix the easy one tonight and watch the mood lift.',
    sceneA: 'Run a weekly PLEASE self-audit. For any red box, name the single most doable change that moves the whole mood system this week.',
    tip: 'Mood runs on a body. Fix sleep and hunger first, and half the storm never forms.'
  },
  'check-facts': {
    aim: 'Before believing the worst story, look for evidence.',
    steps: [
      'The story: Write the alarming interpretation you jumped to — as a fact, plainly.',
      'The facts: List what you actually KNOW — observed, verifiable, not assumed.',
      'Mind-reads: Circle anything you "know" that no one told you directly.',
      'The fit test: Does the emotion fit the facts? If not, it is a signal to re-check, not to act.'
    ],
    sceneT: 'You are about to spiral over something guessed — a seen text, silence, a look. Write the guessed story, the real-known facts, and the facts you are missing.',
    sceneA: 'Before sending an email or a reply born of an assumption, run check-the-facts: the story, the evidence, the evidence you might be missing, and whether the emotion fits.',
    tip: 'The fastest way to disarm a story is to run what you actually know — and what you invented.'
  },
  'do-problem-solving': {
    aim: 'Turn a big overwhelming problem into options and take one step.',
    steps: [
      'Problem: Write the problem in one sentence — specific, not vague.',
      'Goal: What do you want the outcome to be?',
      'Three options: Brainstorm three different ways to get there — including one option you would normally dismiss.',
      'Pick and do: Pick the best option tonight and take the smallest step toward it within twenty-four hours.'
    ],
    sceneT: 'Pick one thing that feels too big. Split it with the four steps above, list three options, then take ONE small step today and check it off.',
    sceneA: 'Run the problem-solving protocol on a live issue — the goal, three or more options, an evaluation, and one datable step. Then review what got learned.',
    tip: 'Problems shrink when you catch them moving. One small step is worth ten dreams about the step.'
  },
  'opposite-action': {
    aim: 'Act opposite to an emotion that does not fit the facts: fear to approach, anger to gently step away, shame to reach out.',
    steps: [
      'The emotion: Name a current emotion and its urge.',
      'The fit check: Does the emotion fit the facts — is the threat actually real — or not?',
      'The opposite: What is the exact opposite of the urge?',
      'Act it: Do the opposite, halfway at first and fully by the end — even with the feeling still there.'
    ],
    sceneT: 'Find a fear or an anger that fits no real danger — speaking up, a scary text, taking the lead. Do the opposite action once: approach the fear, or gently step back from the anger.',
    sceneA: 'For a mis-fitted emotion — a fear that protects nothing, an anger inflating a small slight — do the opposite action this week and log the shift in the feeling.',
    tip: 'The emotion says "act!" — opposite action replies "no thanks," and the feeling follows the action down.'
  },
  'riding-the-wave': {
    aim: 'Let the big emotion peak and pass without acting on it — surf the surge.',
    steps: [
      'Name the wave: The emotion, its intensity right now (one to ten), and its urge.',
      'Ride it: Non-judgmentally watch it rise, peak, and fall — no acting, no storytelling.',
      'The peak rule: At the top of the wave, do nothing drastic for at least ten minutes.',
      'Log the arc: Write how long it took to fall, and what would have been worse if you had acted at the peak.'
    ],
    sceneT: 'Next big surge, chart it: the hour the wave hit, its peak, its fall time, and one thing you are glad you did not do at the top.',
    sceneA: 'When a wave rises at work or home, name it, ride it without action for ten minutes, then log the arc and the consequences you saved yourself.',
    tip: 'Every wave peaks. The damage usually happens after the peak — from paddling straight through it.'
  },
  'problem-solving': {
    aim: 'Work a conflict or problem into chewable bites — name it, brainstorm, pick, do, evaluate.',
    steps: [
      'Facts: State the problem and its facts out loud — no story.',
      'Goal: What outcome do you want — practically and relationally?',
      'Brainstorm: List every option you can think of, including the bad ones — get them all on the wall.',
      'Pick: Choose the option that best serves both the goal and the relationship.',
      'Try and review: Take one step, then come back and evaluate what it taught you.'
    ],
    sceneT: 'Take a real problem or conflict on your plate. Brainstorm five options on paper, even silly ones, pick one, and take the first bite today.',
    sceneA: 'Run the full problem-solving loop on a live tension — facts, goal, options, a chosen step, and a scheduled review of the results.',
    tip: 'The first step is the hardest bite. After that, problems are just a sequence of small bites.'
  },
  'apology': {
    aim: 'Repair with a real sorry: name the harm, own it, fix it, change the behavior.',
    steps: [
      'The harm: Name specifically what you did — not "sorry, whatever I did."',
      'No excuses: Drop the "but ___" that usually follows a real apology.',
      'The fix: Ask what would make it right, or offer the repair.',
      'Change: State what you will do differently — one concrete behavior going forward.'
    ],
    sceneT: 'Think of one person you owe a real sorry. Write it with the four parts — the specific harm, no "but," a fix, and a changed behavior — then actually send it this week.',
    sceneA: 'Compose an apology with the full structure for a live misstep — the exact harm, ownership without excuse, a concrete repair, and the behavioral change.',
    tip: 'An apology without a behavior change is just a press release.'
  }
};

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
    youtubeId: 'cpZ_zG9fJhw',
    linkUrl: 'https://www.youtube.com/watch?v=cpZ_zG9fJhw'
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
    heading: 'IMPROVE the Moment',
    title: 'The Lord of the Rings: The Two Towers — "There\'s Some Good in This World"',
    movie: 'The Lord of the Rings: The Two Towers (2002)',
    clipDesc: 'Frodo is ready to give up, convinced the quest is hopeless — and Sam won\'t let him. He reminds him of all the great stories that were full of darkness and yet didn\'t end there: "that there\'s some good in this world, Mr. Frodo, and it\'s worth fighting for." IMPROVE — E: encouragement, in the voice of the supportive friend who believes you can make it.',
    youtubeId: 'A_u9Hc0Yg1o'
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
    skillId: 'self-soothe',
    heading: 'Self-Soothe',
    title: 'The Shawshank Redemption — Mozart Over the Loudspeakers',
    movie: 'The Shawshank Redemption (1994)',
    clipDesc: 'Andy locks himself in the broadcast room and floods the whole prison with Mozart — and for two minutes every inmate stops mid-motion, lost in the music. No escape from the walls, but the sound lifts the moment out of the grey. Self-Soothe — give your ears something beautiful, and let hearing carry you somewhere else.',
    youtubeId: 'Bjqmg_7J53s'
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
    skillId: 'dearman',
    heading: 'DEAR MAN',
    title: 'Abbott Elementary — "Gregory Goes To The Nail Salon"',
    movie: 'Abbott Elementary',
    clipDesc: 'Gregory has to have an awkward conversation — a student keeps arriving late — and Barbara steers him to the nail salon to do it in person. He DESCRIBES the pattern plainly, EXPRESSES why it matters (the student is falling behind), and ASSERTS the change he needs. The parent commits on the spot. A lighter DEAR MAN — different messenger, same structure.',
    youtubeId: 'RJgndIsVg-M'
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
    title: 'The Big Bang Theory — "Sheldon Trains Penny"',
    movie: 'The Big Bang Theory',
    clipDesc: 'Sheldon hands Penny a chocolate every time she does something he wants more of — clearing the table, not sitting in his spot, taking her phone call in the hall. The reward lands right after each behavior, so those behaviors get stronger. Positive Reinforcement: reward the behavior you want to increase, right when it happens.',
    youtubeId: 'JA96Fba-WHk'
  },
  {
    page: 'middlepath',
    skillId: 'shaping',
    heading: 'Shaping',
    title: 'How to Train Your Dragon — "Making Friends with a Dragon"',
    movie: 'How to Train Your Dragon',
    clipDesc: 'Hiccup shapes Toothless\'s trust one small step at a time: he offers a fish, then reaches out his hand, then finally gets to touch the dragon. Each closer approximation is rewarded, and the bar gets narrower every time the behavior gets closer — the big win is built one rewarded step at a time.',
    youtubeId: 'nPmIhH775L4'
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
    skillId: 'identify-label-emotions',
    heading: 'Identify and Label Emotions',
    title: 'Steel Magnolias — The Cemetery',
    movie: 'Steel Magnolias (1989)',
    clipDesc: 'At her daughter\'s funeral, M\'Lynn\'s grief finally erupts — and in the middle of the storm she keeps naming what she feels: "I\'m so angry… I just want to hit somebody until they feel as bad as I do!" Identify and Label Emotions: even at peak emotion mind, she labels the emotion, the trigger, and the urge instead of being swallowed by it — and naming it is what lets the moment shift.',
    youtubeId: 'az5V2tUW-Ak'
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

/* ---- Dialectical dilemmas: the both/and traps that pull families and friends
   into fighting over one extreme or the other. youtubeId filled in per submitted video. ---- */
const DIALECTICAL_DILEMMAS = [
  {
    id: 'unrelenting-crisis-vs-inhibited-grieving',
    category: 'clinical',
    name: 'Unrelenting Crisis vs. Inhibited Grieving',
    emoji: '🌊',
    desc: 'One crisis piles onto the next with no room to grieve — the losses never get felt, so buried pain keeps fueling new emergencies. The dialectic: tend to the pain underneath so it stops running the show.',
    explain: {
      what: 'The person lives in one emergency after another, so there\'s never a pause to feel the losses that keep piling up. Because the grief never gets processed, it quietly fuels the next crisis.',
      poles: [
        'Unrelenting Crisis — every day is a new brushfire. Conflicts, impulsive reactions, and urgent problems demand attention, so there is no room to stop and feel.',
        'Inhibited Grieving — the pain underneath is never felt or named. Losses get dismissed, avoided, or "handled" with distraction, so the grief stays frozen and unprocessed.'
      ],
      trap: 'The crises become the distraction from the grief, and the grief feeds the next crisis — a loop that keeps both running and leaves the real loss never mourned.',
      dialectic: 'Tend to the pain underneath so it stops running the show. You can handle what is in front of you AND make room to grieve what was lost. Processing the loss shrinks the crisis machine.',
      ask: 'What loss have I been too busy to feel — and what might change if I gave it ten minutes tonight?'
    },
    youtubeId: '',
    clips: [
      { label: '📚 Educational', title: 'Circumventing Emotional Avoidance', desc: 'TEDx talk with Michelle Maidenberg — how we sidestep painful feelings, and why avoidance only makes them louder.', youtubeId: 'Rq2ytRXX-J8' },
      { label: '🎬 Frozen — Inhibited Grieving', title: 'Do You Want to Build a Snowman?', desc: 'Years of "conceal, don\'t feel": Elsa shuts out Anna and suppresses her grief instead of feeling it.', youtubeId: 'V-zXT5bIBM0' },
      { label: '🎬 Frozen — The Breaking Point', title: 'Elsa Flees From Arendelle', desc: 'The buried grief erupts — the fountain freezes and the winter spreads as Elsa flees the palace.', youtubeId: 'AiX-WvMNDPc' }
    ]
  },
  {
    id: 'emotional-vulnerability-vs-self-invalidation',
    category: 'clinical',
    name: 'Emotional Vulnerability vs. Self-Invalidation',
    emoji: '💜',
    desc: 'Feeling everything intensely, then telling yourself you\'re weak, dramatic, or wrong for feeling it. The dialectic: your feelings are real AND you can learn to ride them.',
    explain: {
      what: 'Feeling everything intensely, then telling yourself you are weak, dramatic, or wrong for feeling it. The vulnerability is real — and so is the harsh inner judge that turns on it.',
      poles: [
        'Emotional Vulnerability — emotions come fast, strong, and long. You feel everything deeply, get hurt easily, and the wave is hard to ride.',
        'Self-Invalidation — you then attack yourself for feeling: "I\'m too much," "stop being dramatic." Your own experience gets told it does not count.'
      ],
      trap: 'The self-invalidation piles shame on top of the pain, which makes the feelings even bigger — and the bigger feelings make the self-attack louder. Each pole feeds the other.',
      dialectic: 'Your feelings are real AND you can learn to ride them. Validate the emotion without obeying it: "Of course I feel this — and I can handle it."',
      ask: 'When did I last call my own feeling "too much" — and what would it sound like to validate it instead?'
    },
    youtubeId: ''
  },
  {
    id: 'active-passivity-vs-apparent-competence',
    category: 'clinical',
    name: 'Active Passivity vs. Apparent Competence',
    emoji: '🎭',
    desc: 'Looking fully capable and put-together, then suddenly passive and helpless, expecting others to step in. The dialectic: you can ask for help AND you\'re able to handle things yourself.',
    explain: {
      what: 'Looking fully capable and put together on the outside while feeling helpless and expecting others to step in — a switch between "I have got this" and "you have to fix it."',
      poles: [
        'Apparent Competence — you appear confident, skilled, and fine, so people expect a lot and never see the struggle underneath.',
        'Active Passivity — then you go passive and helpless, expecting others to solve it, sometimes without even asking for help out loud.'
      ],
      trap: 'Because you look so capable, no one offers help until you collapse — and the collapse makes you feel worse about not coping. The people around you get whiplash between the two extremes.',
      dialectic: 'You can ask for help AND you are able to handle things yourself. Competence is not ruined by asking, and asking is not a failure of competence.',
      ask: 'What am I looking fine about right now that I am actually struggling with — and who could I honestly tell?'
    },
    youtubeId: ''
  },
  {
    id: 'permissive-vs-authoritarian',
    category: 'support',
    name: 'Too Permissive vs. Too Authoritarian',
    emoji: '⚖️',
    desc: 'Strict rules that shut feelings down, or no limits at all — and the fight between them. The dialectic: hold firm limits AND stay warm and flexible.',
    explain: {
      what: 'A fight between strict rules that shut feelings down and no limits at all — and the seesaw between them when the other extreme fails.',
      poles: [
        'Too Permissive — no limits, no follow-through, anything goes. Everyone gets to feel heard, but no one feels safe or guided.',
        'Too Authoritarian — rigid rules and harsh consequences, feelings dismissed. There is order, but connection and trust get crushed.'
      ],
      trap: 'When one extreme fails, families swing to the other: strict, then guilty and permissive, then strict again. The swing itself — not either pole — is what erodes trust.',
      dialectic: 'Hold firm limits AND stay warm and flexible. Limits without warmth are control; warmth without limits is chaos. The middle keeps both.',
      ask: 'Which extreme am I leaning into right now — and what would "firm AND warm" look like this week?'
    },
    youtubeId: ''
  },
  {
    id: 'normalizing-vs-pathologizing',
    category: 'support',
    name: 'Normalizing vs. Pathologizing',
    emoji: '🩺',
    desc: 'Dismissing intense behavior as "just a phase" vs. labeling every feeling a disorder. The dialectic: see the behavior as both understandable AND worth changing.',
    explain: {
      what: 'Dismissing intense behavior as "just a phase" vs. labeling every feeling a disorder. Either way, the real struggle gets missed — minimized on one side, pathologized on the other.',
      poles: [
        'Normalizing — "everyone feels this way, it is nothing." The behavior gets waved off as a phase, so the pain is never really addressed.',
        'Pathologizing — "something is wrong with you." Every feeling becomes a diagnosis, and the person starts to feel like the problem itself.'
      ],
      trap: 'Normalizing says "no problem here," and pathologizing says "you are broken." Neither can see the behavior as understandable AND changeable — so help either never comes or lands as judgment.',
      dialectic: 'The behavior is both understandable AND worth changing. It makes sense given the person\'s story — and skills can still help them write the next chapter.',
      ask: 'Am I treating this as "not a real problem" or as "this person is broken" — and what would the middle sound like?'
    },
    youtubeId: ''
  },
  {
    id: 'forcing-autonomy-vs-dependence',
    category: 'support',
    name: 'Forcing Autonomy vs. Forcing Dependence',
    emoji: '🪁',
    desc: 'Pushing someone to be independent before they\'re ready vs. keeping them dependent so they never learn. The dialectic: encourage independence while staying close.',
    explain: {
      what: 'Pushing someone to be independent before they are ready vs. keeping them dependent so they never learn. Either way, growth does not happen at their own pace.',
      poles: [
        'Forcing Autonomy — "figure it out yourself." Support gets withdrawn too early, before the skills underneath are actually built.',
        'Forcing Dependence — "you cannot do it without me." Support is never withdrawn, so the skills are never practiced and confidence never forms.'
      ],
      trap: 'Push too hard and they crash into tasks they were not ready for; hold too tight and they never get to practice. Both stop growth — they just fail in different directions.',
      dialectic: 'Encourage independence while staying close. Offer support that gradually steps back, so confidence builds on a safe base instead of in a vacuum.',
      ask: 'Am I holding on too tight or letting go too fast — and what is the next tiny step that does a bit of both?'
    },
    youtubeId: ''
  }
];

const DILEMMA_GROUPS = {
  clinical: {
    title: 'The Classic Clinical Dilemmas',
    emoji: '🧠',
    color: '#7c5cff',
    blurb: 'The both/and traps inside a person\'s own patterns — the three poles Linehan named in the original DBT model.'
  },
  support: {
    title: 'Dilemmas in Supporting Someone',
    emoji: '🫂',
    color: '#34d1bf',
    blurb: 'The both/and traps that show up when we try to help someone we care about — and how to land in the middle.'
  }
};

/* ---- Levels of validation: the six ways to make someone feel truly understood. ---- */
const VALIDATION_LEVELS = [
  {
    level: 1,
    name: 'Being Present',
    emoji: '🧘',
    desc: 'Pay full attention — put the phone down, look at them, and really listen without trying to fix anything yet.',
    edu: { title: 'TEDx: How to actively listen to others (Scott Pierce)', youtubeId: 'Yq5pJ0q3xuc' },
    movie: { title: 'It\'s Not About the Nail — she just wants to be listened to, not fixed', youtubeId: '-4EDhdAHrOg' }
  },
  {
    level: 2,
    name: 'Accurate Reflection',
    emoji: '🪞',
    desc: 'Reflect back what you heard, plainly: "So you\'re saying it hurt because they forgot, again." No spin, no advice — just accurate listening.',
    edu: { title: 'Reflective Listening (Tim Corey)', youtubeId: 'N7nR74ZyaR8' },
    movie: { title: 'Everybody Loves Raymond — active listening in action', youtubeId: '4VOubVB4CTU' }
  },
  {
    level: 3,
    name: 'Reading the Unspoken',
    emoji: '🔍',
    desc: 'Guess at what hasn\'t been said yet — "I wonder if you\'re also feeling embarrassed" — and let them correct you without it being a test.',
    edu: { title: 'TED-Ed: Can machines read your emotions?', youtubeId: 'QFk3e5PcK7s' },
    movie: { title: 'The Last of Us S2 — Gail reads the unspoken guilt Joel is hiding', youtubeId: 'qCG_210plGA' }
  },
  {
    level: 4,
    name: 'Validating by History',
    emoji: '📜',
    desc: 'Make sense of the reaction given the past: "Given what happened last time, of course your guard went up." Behavior becomes understandable, not weird.',
    edu: { title: 'Psychotherapy Academy: Six Levels of Validation in DBT', youtubeId: '49Blk3eR5C8' },
    movie: { title: 'Up — Ellie\'s note validates the whole history they shared', youtubeId: 'gVY04LBXaCc' }
  },
  {
    level: 5,
    name: 'Normalizing',
    emoji: '🌍',
    desc: 'Show the feeling is human: "Anyone would feel that way — that\'s a completely normal response." It names the shared, universal part.',
    edu: { title: 'Therapist looks at the empathy in Inside Out', youtubeId: '9Xd__JqsHWU' },
    movie: { title: 'Inside Out — Sadness validates Bing Bong\'s grief', youtubeId: 'RPQRHemfk9E' }
  },
  {
    level: 6,
    name: 'Radical Genuineness',
    emoji: '💞',
    desc: 'Drop the therapist voice and be real — match their intensity, speak as a fellow person, and let them know you\'re truly in it with them.',
    edu: { title: 'Counseling Center Group: 6 Levels of Validation', youtubeId: 'aUbpqCgkPxk' },
    movie: { title: 'Good Will Hunting — "It\'s Not Your Fault"', youtubeId: 'ZQht2yOX9Js' }
  }
];

/* ---- Games hub: playful ways to practice DBT skills. status: 'soon' = in the works. ---- */
const GAMES = [
  {
    id: 'jeopardy',
    name: 'DBT Jeopardy',
    emoji: '🔔',
    desc: 'Pick a category and answer in the form of a skill — test your DBT knowledge against the clock.',
    status: 'live'
  },
  {
    id: 'bingo',
    name: 'Skills Bingo',
    emoji: '🟨',
    desc: 'Spot the skills as they show up in the moment, and mark them off your card as you go.',
    status: 'soon'
  },
  {
    id: 'skills-matching',
    name: 'Skills Matching',
    emoji: '🧩',
    desc: 'Match each tricky situation to the skill that fits — the fastest to clear the board wins.',
    status: 'soon'
  },
  {
    id: 'skill-charades',
    name: 'Skill Charades',
    emoji: '🎭',
    desc: 'Act out a DBT skill without words, and let everyone else guess which one you\'re showing.',
    status: 'soon'
  }
];

/* ---- Playable DBT Jeopardy. Multiple boards; each clue has a value (v),
   the question (q) and the answer (a) in classic Jeopardy "What is..." form.
   Boards: 'essentials' is the built-in starter, the rest are built from the
   group\'s DBT Jeopardy PowerPoints (core, distress-tolerance, full, middle-path). ---- */
const JEOPARDY_BOARDS = [
  {
    id: 'essentials',
    title: 'Skill Essentials',
    tagline: 'A quick warm-up round across the four skill modules. Pick a clue, say your answer, then reveal and score.',
    categories: [
      {
        name: 'Mindfulness',
        emoji: '🧘',
        clues: [
          { v: 200, q: 'This mindfulness skill is just paying full attention to what\'s happening right now, without judging.', a: 'What is Observe?' },
          { v: 400, q: 'Naming the facts of what you see and feel — "my chest is tight, I feel angry" — without the story.', a: 'What is Describe?' },
          { v: 600, q: 'This skill is throwing yourself fully into the moment, the opposite of watching from the sidelines.', a: 'What is Participate?' },
          { v: 800, q: 'Doing one thing at a time, with your whole attention on that one thing.', a: 'What is One-Mindfully?' }
        ]
      },
      {
        name: 'Distress Tolerance',
        emoji: '🌊',
        clues: [
          { v: 200, q: 'Temperature, intense exercise, paced breathing, and paired muscle relaxation make up this crisis skill.', a: 'What is TIPP?' },
          { v: 400, q: 'Activities, Contributing, Comparisons, Emotions, Pushing away, Thoughts, Sensations — this distract-acronym.', a: 'What is ACCEPTS?' },
          { v: 600, q: 'Imagery, Meaning, Prayer, Relaxation, One thing at a time, Vacation, Encouragement — this skill improves the moment.', a: 'What is IMPROVE?' },
          { v: 800, q: 'Opening to reality as it is — not approving of it, just accepting what is true right now.', a: 'What is Radical Acceptance?' }
        ]
      },
      {
        name: 'Emotion Regulation',
        emoji: '🌤️',
        clues: [
          { v: 200, q: 'This skill asks whether the intensity of your emotion actually fits the facts of the situation.', a: 'What is Check the Facts?' },
          { v: 400, q: 'Doing the opposite of what the emotion is urging you to do.', a: 'What is Opposite Action?' },
          { v: 600, q: 'Treat physical illness, Eat balanced, Avoid drugs, Sleep, Exercise — this "treat your body" acronym.', a: 'What is PLEASE?' },
          { v: 800, q: 'Letting an emotion rise and fall like a wave without fighting it or acting on it.', a: 'What is Riding the Wave?' }
        ]
      },
      {
        name: 'Interpersonal',
        emoji: '🤝',
        clues: [
          { v: 200, q: 'Describe, Express, Assert, Reinforce, stay Mindful, Appear confident, Negotiate — this asking-for-what-you-want acronym.', a: 'What is DEAR MAN?' },
          { v: 400, q: 'Gentle, Interested, Validate, Easy manner — this keeps relationships warm while you talk.', a: 'What is GIVE?' },
          { v: 600, q: 'be Fair, no over-apologies, Stick to your values, be Truthful — this keeps your self-respect.', a: 'What is FAST?' },
          { v: 800, q: 'Making sense of someone\'s thoughts and feelings given their history — level 4 of this skill family.', a: 'What is Validating by History?' }
        ]
      }
    ]
  },
  {
    id: 'core',
    title: 'DBT Jeopardy',
    tagline: 'Your classic five-category board — core skills in each module.',
    categories: [
      {
        name: 'Core Mindfulness',
        emoji: '🧘',
        clues: [
          { v: 100, q: 'What do we call our awareness skills?', a: 'What are Core Mindfulness Skills?' },
          { v: 200, q: 'This "what" skill is putting words to the things you notice — just the facts, no opinions.', a: 'What is Describe?' },
          { v: 300, q: 'We are using this skill when we notice things in our environment.', a: 'What is Observe?' },
          { v: 400, q: 'Reasonable Mind + Emotional Mind, in balance, equals this.', a: 'What is Wise Mind?' },
          { v: 500, q: 'Soundball fully engages which core mindfulness skill?', a: 'What is Participate?' }
        ]
      },
      {
        name: 'Distress Tolerance',
        emoji: '🌊',
        clues: [
          { v: 100, q: 'The "I" in TIPP.', a: 'What is Intense Exercise?' },
          { v: 200, q: 'This four-part crisis skill is especially effective when experiencing EXTREME emotions.', a: 'What is TIPP?' },
          { v: 300, q: 'Prayer is a part of which skill?', a: 'What is IMPROVE?' },
          { v: 400, q: 'Define ACCEPTS — the distract-with-wise-mind acronym.', a: 'Activities, Contributing, Comparisons, Emotions, Pushing away, Thoughts, Sensations.' },
          { v: 500, q: 'This skill uses all five senses — sight, hearing, taste, touch, smell — to calm your body in a crisis.', a: 'What is Self-Soothe?' }
        ]
      },
      {
        name: 'Middle Path',
        emoji: '⚖️',
        clues: [
          { v: 100, q: 'This Middle Path principle means seeing both sides of a problem at the same time.', a: 'What is thinking dialectically?' },
          { v: 200, q: 'What does it mean to think dialectically?', a: 'Not black or white — seeing both sides at the same time, both/and instead of either/or.' },
          { v: 300, q: 'Name the Dialectical (Parenting) Dilemmas.', a: 'Excessive leniency vs. authoritarian control, normalizing vs. invalidating, and fostering dependence vs. forcing independence.' },
          { v: 400, q: 'How do we walk the middle path to resolve conflict?', a: 'Collaboration, problem solving, validation, compromise, accountability, and dialectical thinking.' },
          { v: 500, q: 'Doing what works — not getting stuck on being "right" — is this Middle Path skill.', a: 'What is Effectiveness?' }
        ]
      },
      {
        name: 'Emotion Regulation',
        emoji: '🌤️',
        clues: [
          { v: 100, q: 'This first step of emotion regulation is noticing and naming what you feel.', a: 'What is identify and label the emotion?' },
          { v: 200, q: 'Planning short-term and long-term pleasant activities is how you build these.', a: 'What are positive emotions?' },
          { v: 300, q: 'This skill asks whether the intensity of your emotion actually fits the facts.', a: 'What is Check the Facts?' },
          { v: 400, q: 'Doing the opposite of what the emotion is urging you to do — approaching when sad, for example.', a: 'What is Opposite Action?' },
          { v: 500, q: 'Values & priorities, working toward long-term goals, checking the facts, acting dialectically, and problem solving are all examples of these.', a: 'What are emotion regulation strategies?' }
        ]
      },
      {
        name: 'Interpersonal Effectiveness',
        emoji: '🤝',
        clues: [
          { v: 100, q: 'Describe, Express, Assert, Reinforce, stay Mindful, Appear confident, Negotiate — this asking-for-what-you-want acronym.', a: 'What is DEAR MAN?' },
          { v: 200, q: 'Gentle, Interested, Validate, Easy manner — this keeps relationships warm while you talk.', a: 'What is GIVE?' },
          { v: 300, q: 'The letters of this skill help you understand the other person\'s perspective: Thinks, Has Feelings, Interpretations, Needs, and Kindness.', a: 'What is THINK?' },
          { v: 400, q: 'be Fair, no over-Apologies, Stick to your values, be Truthful — this keeps your self-respect.', a: 'What is FAST?' },
          { v: 500, q: 'Name the four interpersonal effectiveness skills that would be most beneficial when you\'re caught in a conflict.', a: 'What are DEAR MAN, GIVE, FAST, and THINK?' }
        ]
      }
    ]
  },
  {
    id: 'distress',
    title: 'Distress Tolerance Edition',
    tagline: 'Middle-path preview, two rounds of core mindfulness, and two rounds of distress tolerance.',
    categories: [
      {
        name: 'Middle Path Preview',
        emoji: '⚖️',
        clues: [
          { v: 100, q: 'True or False: validation means you agree with the other person.', a: 'False — validation means understanding and making sense of their experience, not agreeing.' },
          { v: 200, q: 'This is how you reward a behavior you want to increase.', a: 'What is positive reinforcement?' },
          { v: 300, q: 'A way of reaching agreement in which each person gives up something wanted in order to end a dispute.', a: 'What is compromise? — this is how we walk the middle path.' },
          { v: 400, q: 'This is what it means to make sense of someone\'s thoughts or feelings — helping them feel understood.', a: 'What is validation?' },
          { v: 500, q: 'Describe 5 DBT skills that could be beneficial for reducing conflict.', a: 'Any five: DEAR MAN, GIVE, FAST, THINK, validation, compromise, dialectical thinking, problem solving, willingness...' }
        ]
      },
      {
        name: 'Core Mindfulness I',
        emoji: '🧘',
        clues: [
          { v: 100, q: 'These are the DBT "What" skills.', a: 'What are Observe, Describe, and Participate?' },
          { v: 200, q: 'Put words to the things you notice — just the facts, no opinions.', a: 'What is Describe?' },
          { v: 300, q: 'We are using this skill when we notice things in our environment.', a: 'What is Observe?' },
          { v: 400, q: 'Reasonable Mind + Emotional Mind, in balance, equals this.', a: 'What is Wise Mind?' },
          { v: 500, q: 'Soundball fully engages which core mindfulness skill?', a: 'What is Participate?' }
        ]
      },
      {
        name: 'Core Mindfulness II',
        emoji: '🧘',
        clues: [
          { v: 100, q: 'These are the DBT "How" skills.', a: 'What are Non-judgmentally, One-mindfully, and Effectively?' },
          { v: 200, q: 'Doing one thing at a time, fully in the moment.', a: 'What is One-mindfully?' },
          { v: 300, q: 'What does it mean to be effective?', a: 'Do what works!' },
          { v: 400, q: 'Give an example of taking a non-judgmental stance — observe something without judgment.', a: 'Answers vary — state only the facts: "the ball is blue, smooth, and heavy," not "that\'s a silly game."' },
          { v: 500, q: 'This "How" skill means choosing what works instead of getting stuck on being "right."', a: 'What is Effectiveness?' }
        ]
      },
      {
        name: 'Distress Tolerance I',
        emoji: '🌊',
        clues: [
          { v: 100, q: 'The "I" in TIPP.', a: 'What is Intense Exercise?' },
          { v: 200, q: 'This skill uses our dive reflex — temperature on the face — to help us calm down.', a: 'What is the T in TIPP (Temperature)?' },
          { v: 300, q: 'This four-part crisis skill (Temperature, Intense Exercise, Paced Breathing, Paired Muscle Relaxation) helps when emotions are extreme.', a: 'What is TIPP?' },
          { v: 400, q: 'This distract-with-wise-mind skill includes doing something for others.', a: 'What is ACCEPTS — Contributing?' },
          { v: 500, q: 'Name 3 of your ACCEPTS (distract with wise mind) skills.', a: 'Any three: Activities, Contributing, Comparisons, Emotions, Pushing away, Thoughts, Sensations.' }
        ]
      },
      {
        name: 'Distress Tolerance II',
        emoji: '🌊',
        clues: [
          { v: 100, q: 'Turn up the corners of your mouth just a little… this is the skill.', a: 'What is Half Smile?' },
          { v: 200, q: 'To relax and practice skills visually in your mind is this IMPROVE skill.', a: 'What is Imagery?' },
          { v: 300, q: 'What do we do with our body to show willingness?', a: 'What is Half Smile / Willing Hands?' },
          { v: 400, q: 'Which senses can you use with your self-soothe skill?', a: 'What are sight, hearing, taste, touch, and smell?' },
          { v: 500, q: 'This skill teaches you to "turn the mind" toward acceptance of reality.', a: 'What is Willingness / Radical Acceptance?' }
        ]
      }
    ]
  },
  {
    id: 'full',
    title: 'DBT Jeopardy — Full Edition',
    tagline: 'The classic five categories with application questions, role-plays, and practice prompts.',
    categories: [
      {
        name: 'Core Mindfulness',
        emoji: '🧘',
        clues: [
          { v: 100, q: 'This "What" skill means putting words to what you notice — just the facts, no opinions.', a: 'What is Describe?' },
          { v: 200, q: 'We are using this skill when we notice things in our environment.', a: 'What is Observe?' },
          { v: 300, q: 'Identify and describe the three states of mind.', a: 'What are Wise Mind, Reasonable Mind, and Emotional Mind?' },
          { v: 400, q: 'Doing things one step at a time is this "How" skill.', a: 'What is One-mindfully?' },
          { v: 500, q: 'Soundball fully engages which core mindfulness skill?', a: 'What is Participate?' }
        ]
      },
      {
        name: 'Distress Tolerance',
        emoji: '🌊',
        clues: [
          { v: 100, q: 'Prayer is a part of which distress tolerance skill?', a: 'What is IMPROVE?' },
          { v: 200, q: 'The "M" in IMPROVE.', a: 'What is Meaning?' },
          { v: 300, q: 'This four-part skill is especially effective when experiencing EXTREME emotions.', a: 'What is TIPP?' },
          { v: 400, q: 'Define ACCEPTS — the distract-with-wise-mind acronym.', a: 'Activities, Contributing, Comparisons, Emotions, Pushing away, Thoughts, Sensations.' },
          { v: 500, q: 'Which senses can you use with your self-soothe skill?', a: 'What are sight, hearing, taste, touch, and smell?' }
        ]
      },
      {
        name: 'Middle Path',
        emoji: '⚖️',
        clues: [
          { v: 100, q: 'This principle means seeing both sides at the same time.', a: 'What is thinking dialectically?' },
          { v: 200, q: '"Do what works" is the definition of being this.', a: 'What is effective?' },
          { v: 300, q: 'Name the Dialectical (Parenting) Dilemmas.', a: 'Excessive leniency vs. authoritarian control, normalizing vs. invalidating, and fostering dependence vs. forcing independence.' },
          { v: 400, q: 'How do we walk the middle path to resolve conflict?', a: 'Collaboration, problem solving, validation, compromise, accountability, and dialectical thinking.' },
          { v: 500, q: 'Holding on while letting go — guidance, support, and rules while allowing freedom and independence — is this dilemma\'s middle path.', a: 'What is balancing fostering dependence and forcing independence?' }
        ]
      },
      {
        name: 'Emotion Regulation',
        emoji: '🌤️',
        clues: [
          { v: 100, q: 'This first step of emotion regulation is noticing and naming what you feel.', a: 'What is identify and label the emotion?' },
          { v: 200, q: 'Identify five short-term and long-term pleasant activities you can add to your week.', a: 'Answers vary — e.g., listening to music, going for a walk, a warm bath, planning your career, going on a date.' },
          { v: 300, q: 'This skill makes sense of emotions — helping yourself or another person feel understood.', a: 'What is validation?' },
          { v: 400, q: 'Values & priorities, working toward long-term goals, checking the facts, acting dialectically, and problem solving are all examples of these.', a: 'What are emotion regulation strategies?' },
          { v: 500, q: 'Teach the Cope Ahead skill: identify and describe the skills you will need in potentially upsetting situations.', a: 'Answers vary — rehearse your skills in advance, e.g., plan to use TIPP or DEAR MAN when the situation comes up.' }
        ]
      },
      {
        name: 'Interpersonal Effectiveness',
        emoji: '🤝',
        clues: [
          { v: 100, q: 'Identify the problem, generate solutions, pick the best one — this is the skill.', a: 'What is Problem Solving?' },
          { v: 200, q: 'Act interested, really listen, stay in the moment, and don\'t interrupt — these behaviors belong to this skill.', a: 'What is GIVE (act Interested)?' },
          { v: 300, q: 'Give an example using the THINK skill.', a: 'Answers vary — e.g., "She thinks I was late on purpose; she has feelings about being left out; my interpretation isn\'t a fact; what does she need from me? I can be kind by apologizing and checking in."' },
          { v: 400, q: 'Role play the FAST skill with a partner: what does FAST stand for?', a: 'be Fair, no over-Apologies, Stick to your values, be Truthful.' },
          { v: 500, q: 'Name the interpersonal effectiveness skills that would be most beneficial when you\'re in a conflict.', a: 'What are DEAR MAN, GIVE, FAST, and THINK?' }
        ]
      }
    ]
  },
  {
    id: 'wmp',
    title: 'Middle Path & Validation',
    tagline: 'Behavior change, mindfulness, validation, and walking the middle path.',
    categories: [
      {
        name: 'Behavior Change',
        emoji: '🔄',
        clues: [
          { v: 100, q: 'The seatbelt alarm in your car — the annoying beeping stops when you buckle up — is an example of this type of reinforcement.', a: 'What is negative reinforcement?' },
          { v: 200, q: 'Catastrophizing, overgeneralization, mind reading, black-and-white statements, labeling, and personalization are all examples of these.', a: 'What are thinking mistakes (cognitive distortions)?' },
          { v: 300, q: 'Give an example of positive reinforcement.', a: 'Answers vary — e.g., giving praise, a compliment, or a small reward right after the behavior you want to increase.' },
          { v: 400, q: 'This type of reinforcement makes behavior the hardest to extinguish.', a: 'What is intermittent (partial) reinforcement?' },
          { v: 500, q: 'How is extinction different from punishment?', a: 'Extinction reduces a behavior by withholding the reinforcement it used to get; punishment is adding or removing a consequence after the behavior.' }
        ]
      },
      {
        name: 'Core Mindfulness I',
        emoji: '🧘',
        clues: [
          { v: 100, q: 'These are the DBT "What" skills.', a: 'What are Observe, Describe, and Participate?' },
          { v: 200, q: 'Just the facts — no opinions — is the core of this "What" skill.', a: 'What is Describe?' },
          { v: 300, q: 'We are using this skill when we notice things in our environment.', a: 'What is Observe?' },
          { v: 400, q: 'Reasonable Mind + Emotional Mind, in balance, equals this.', a: 'What is Wise Mind?' },
          { v: 500, q: 'What core mindfulness skill are we using during sound ball?', a: 'What is Participate?' }
        ]
      },
      {
        name: 'Core Mindfulness II',
        emoji: '🧘',
        clues: [
          { v: 100, q: 'These are the DBT "How" skills.', a: 'What are Non-judgmentally, One-mindfully, and Effectively?' },
          { v: 200, q: '"Do what works" is the definition of being this.', a: 'What is effective?' },
          { v: 300, q: 'Give an example of a non-judgmental stance — observe something without judgment.', a: 'Answers vary — state only the facts, e.g., "the cup is blue and full of water," not "this cup is ugly."' },
          { v: 400, q: 'Name a time you used the "How" skill of one-mindfully today.', a: 'Answers vary — e.g., eating without your phone, or brushing your teeth and only brushing your teeth.' },
          { v: 500, q: 'Compare a judgmental observation with a non-judgmental one.', a: 'Answers vary — e.g., "That was a terrible meeting" (judgment) vs. "We ran 10 minutes over and three people were late" (facts).' }
        ]
      },
      {
        name: 'Validation',
        emoji: '💜',
        clues: [
          { v: 100, q: 'Give an example of an invalidating statement.', a: 'Answers vary — e.g., "Your emotions/experience don\'t make sense."' },
          { v: 200, q: 'What is self-validation?', a: 'What is communicating that my experience and emotions make sense?' },
          { v: 300, q: 'Transform this invalidating statement into a validating one: "You shouldn\'t be upset over something so small."', a: '"Of course you are upset. You worked really hard on this."' },
          { v: 400, q: 'What is a negative consequence of invalidation?', a: 'What is emotional dysregulation?' },
          { v: 500, q: 'When someone feels ashamed about getting angry, which level of their emotional experience is beneficial to validate, and why?', a: 'The anger — the shame judgment doesn\'t fit the facts and is invalidating.' }
        ]
      },
      {
        name: 'Walking the Middle Path',
        emoji: '⚖️',
        clues: [
          { v: 100, q: 'This principle means not black-or-white — seeing both sides at the same time.', a: 'What is thinking dialectically?' },
          { v: 200, q: 'Compromise (acting dialectically) is an example of this.', a: 'What is walking the middle path?' },
          { v: 300, q: '"It\'s no big deal. Get over it!" is an example of this.', a: 'What is invalidation?' },
          { v: 400, q: 'How do we walk the middle path to resolve conflict?', a: 'Collaboration, problem solving, validation, compromise, accountability, and dialectical thinking.' },
          { v: 500, q: 'Explain the middle path between fostering dependence and forcing independence.', a: 'Holding on while letting go — give guidance, support, and rules while allowing appropriate reliance and freedom to build responsibility.' }
        ]
      }
    ]
  }
];

const JEOPARDY = JEOPARDY_BOARDS[0];

/* ---- Ambient soundscapes. Each is generated procedurally in the browser
   (no audio files), so it breathes and varies instead of looping the same
   second of sound. Tap one from the floating 🎵 button to play. ---- */
const AMBIENT = [
  { id: 'ocean', name: 'Ocean Waves', emoji: '🌊', desc: 'Slow, breathing swells of sea against the shore.' },
  { id: 'rain', name: 'Rainy Night', emoji: '🌧️', desc: 'Steady rain with scattered drops on the window.' },
  { id: 'river', name: 'Forest Stream', emoji: '🛶', desc: 'Bubbling water winding over rocks.' },
  { id: 'wind', name: 'Gentle Wind', emoji: '🍃', desc: 'Soft breezes with occasional passing gusts.' },
  { id: 'campfire', name: 'Campfire', emoji: '🔥', desc: 'Low crackling warmth under open sky.' },
  { id: 'crickets', name: 'Night Crickets', emoji: '🦗', desc: 'A summer meadow humming after dark.' },
  { id: 'chimes', name: 'Wind Chimes', emoji: '🎐', desc: 'Random chimes drifting on the breeze.' },
  { id: 'musicbox', name: 'Music Box', emoji: '🪕', desc: 'A sleepy lullaby of soft, spaced notes.' },
  { id: 'ethereal', name: 'Ethereal Pad', emoji: '🕯️', desc: 'Slow, evolving chords that glow and shift.' },
  { id: 'starlight', name: 'Starlight Drift', emoji: '✨', desc: 'Quiet drones with faint twinkling sparks.' }
];
