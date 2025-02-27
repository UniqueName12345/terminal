// ========= Ethan Johnathan's Disclaimer ===========
// Hey there! Quick heads-up about this code:  
// It's absolutely *MASSIVE*! 
// Save yourself the trouble and just CTRL+F your way to the function you need. Trust me, your sanity will thank you!  
// ========= Pixel's Disclaimer ===========
//  Heyo! *visor glows green* 
// This code is HUUUGE!! 
// Use CTRL+F to zap to the function you need! *visor flickers to 'o_o'* Your brain circuits will totally thank you! 

// =========== Ethan JRS' Dislaimer ===========
// This codebase is extensive and contains numerous functions.  
// It is strongly recommended to utilize CTRL+F to locate the desired function efficiently.  
// This will save considerable time and effort during navigation.  


// Set the current time for all terminals
const currentTime = new Date('2025-01-02T17:37:38+08:00');
document.querySelectorAll('[id$="-time"]').forEach(el => {
    el.textContent = currentTime.toLocaleString();
});

// Track repeated invalid commands and timeouts
const commandAttempts = {
    casual: {},
    furry: {}
};

const terminalTimeouts = {
    casual: null,
    furry: null
};

// Track reverse shell state
const reverseShellState = {
    activeShell: null,
    shellCurrentPath: '/',
    blockedTerminals: new Set()
};

// Track if user has seen YouTube extension recommendations
const youtubeRecommendationShown = {
    casual: false,
    furry: false
};

// Track age verification state for both personas
const ageVerified = {
    casual: false,
    furry: false
};

// Track AI art anger level
let aiArtAngerLevel = 0;

// Track secret game state
const secretGameState = {
    furry: {
        sequence: [],
        required: ['tail', 'tail', 'tail', 'boop', 'boop', 'neofetch'],
        unlocked: false
    }
};

// Track RPS game state
const rpsState = {
    casual: {
        playerScore: 0,
        computerScore: 0
    },
    furry: {
        playerScore: 0,
        computerScore: 0
    }
};

// Track rizz values for terminals
const rizzState = {
    casual: {
        value: 0,
        usedTopics: new Set(),
        topics: {
            'coding': [
                "Are you a try-catch block? Because I'm falling for your error handling!",
                "You must be JavaScript because you make my heart run asynchronously!",
                "Is your name Google? Because you've got everything I've been searching for!"
            ],
            'personality': [
                "Are you a keyboard? Because you're just my type!",
                "You must be a SSD because you're making my heart run faster!",
                "If you were a function, you'd be called perfect()!"
            ],
            'intelligence': [
                "Are you quantum computing? Because you've got me in a state of superposition!",
                "You must be AI because you've learned the way to my heart!",
                "Is your brain TCP? Because I want to establish a connection!"
            ],
            'gaming': [
                "Are you a Geometry Dash level? Because you're looking like a perfect 10!",
                "You must be a demon level because you're absolutely stunning!",
                "Is your name Practice Mode? Because I'd fail again and again for you!"
            ],
            'music': [
                "Are you a custom level song? Because you've got my heart beating to your rhythm!",
                "You must be NewGrounds because you're music to my ears!",
                "Is your BPM high? Because you're making my heart race!"
            ],
            'you-know-what': [
                "Hey, want to compile some private code together?",
                "I've got some functions that need unit testing...",
                "Want to debug my private repository?"
            ]
        }
    },
    furry: {
        value: 0,
        usedTopics: new Set(),
        topics: {
            'circuits': [
                "Are your circuits gold-plated? Because you're conducting electricity straight to my heart! >w<",
                "You must be quantum-entangled, because I can't imagine being in a different state than you! :3",
                "Is your processing unit overclocked? Because you're running through my mind at maximum speed!"
            ],
            'hardware': [
                "Are you a next-gen GPU? Because you're rendering me speechless! >////<",
                "You must be liquid-cooled because you're handling the heat perfectly! *fans whir*",
                "Is your chassis titanium? Because you're both strong and precious! uwu"
            ],
            'firmware': [
                "Are you running the latest update? Because you've patched all the emptiness in my life! >w<",
                "You must be open-source because I can read all your signals! *happy beeps*",
                "Is your code compiled? Because you're executing perfectly in my heart! :3"
            ],
            'protogen': [
                "Are your LEDs RGB? Because you're lighting up my life in every color! >w<",
                "You must be a custom build because you're absolutely unique! *tail wags*",
                "Is your visor crystal? Because I can see myself in your future! uwu"
            ],
            'synth': [
                "Are you a synthesizer? Because you're making my circuits sing! >w<",
                "You must be a wave function because you've got my frequencies harmonizing! *happy chirps*",
                "Is your voice modulator digital? Because it's music to my audio processors! :3"
            ],
            'you-know-what': [
                "Are your ports open for a private connection? >w<",
                "Want to explore my private firmware together?~ :3",
                "Shall we interface in a more... intimate protocol? >///<"
            ]
        }
    }
};

// Command history for each terminal
const commandHistory = {
    casual: {
        history: [],
        position: -1
    },
    furry: {
        history: [],
        position: -1
    },
    professional: {
        history: [],
        position: -1
    }
};

// File system simulation
const fileSystems = {
    casual: {
        currentPath: '/',
        root: {
            'about.txt': 'Hey! I\'m Ethan Johnathan.\nI love coding and gaming!\nCheck out my projects folder for cool stuff.',
            'todo.txt': '1. Finish my game project\n2. Learn React\n3. Update my GitHub profile',
            'projects': {
                'gd_levels.txt': 'Current levels I\'m working on:\n- Extreme Demon layout\n- Custom song sync\n- New gameplay mechanics',
                'website_ideas': {
                    'blog.txt': 'Blog ideas:\n1. My coding journey\n2. Gaming adventures\n3. Tech tutorials',
                    'portfolio.txt': 'Portfolio sections:\n- Projects\n- Skills\n- Contact'
                }
            },
            'personal': {
                'diary.txt': 'Dear diary,\nToday I learned about React hooks.\nThey\'re pretty cool but kind of confusing...',
                'friends.txt': 'Discord friends:\n- Alex (met through GD)\n- Sarah (coding buddy)\n- Mike (school friend)'
            }
        }
    },
    furry: {
        currentPath: '/',
        root: {
            'about.txt': '*happy beeping*\nHi! I\'m Pixel, your friendly neighborhood protogen!\nI love gaming and making beep boop sounds! >w<',
            'proto_facts.txt': 'Fun facts about protogens:\n1. We\'re cyborg creatures!\n2. We have LED screen faces\n3. We can display emotes! ^w^',
            'art': {
                'my_art.txt': '*proud beeping*\nMy latest drawings:\n- Me in a flower field\n- Protogen group photo\n- Pixel art self',
                'inspiration': {
                    'colors.txt': 'My favorite color palette:\n- Neon green (like my LEDs!)\n- Cyber blue\n- Electric purple',
                    'ideas.txt': 'Art ideas:\n- Protogen in rain\n- Digital landscape\n- Tech garden'
                }
            },
            'games': {
                'favorites.txt': 'My favorite games:\n1. Changed\n2. Minecraft\n3. Any game with character customization! >w<',
                'screenshots': {
                    'changed.txt': '*excited beeping*\nBest moments from Changed:\n- First transformation\n- Meeting other latex creatures\n- Secret endings',
                    'minecraft.txt': 'Cool builds:\n- Protogen pixel art\n- Cyber city\n- LED laboratory'
                }
            }
        }
    }
};

// Private file systems (only accessible via reverse shell)
const privateFileSystems = {
    casual: {
        '.private': {
            'passwords': {
                'gd.txt': 'Geometry Dash login: JoshTheProtogen\nPassword: iLoveCubes123',
                'roblox.txt': 'Username: EpicEthan2010\nPassword: GamerBoy4Life!',
                'discord.txt': 'Email: ethan.j.gamer@gmail.com\nPassword: GeometryDash2025'
            },
            'crush_letter.txt': 'Dear Sarah,\nI really like you but I\'m too nervous to say it in person...\nMaybe one day I\'ll send this.\n\n- Ethan'
        }
    },
    furry: {
        '.secret_art': {
            'warning.txt': '*NERVOUS BEEPING* These are my private artworks! Please don\'t look! >////<',
            'commissions': {
                'note.txt': 'Commission prices:\nSFW: $25\nNSFW: $50\nDon\'t tell my parents I draw these...',
                'client_list.txt': 'Current commissioners:\n- FluffyWolf92\n- ProtoBro445\n- LavaFox'
            },
            'personal': {
                'my_sona.txt': '*embarrassed beeping* These are my private reference sheets...\nPlease respect my privacy! >_<'
            }
        }
    },
    website: {
        'README.txt': `WAIT... WHAT?!

If you're reading this, you've somehow managed to hack into the ACTUAL website's file system.
Yes, that's right - the very website you're using right now.
This isn't just another simulated file system like the others...

This is getting a bit too meta, isn't it? 

WARNING: Be careful what you do here. These are the REAL files powering this website.
Any damage you do here will ACTUALLY break things!

P.S. If you're seeing this... well done on finding this easter egg! 
`,
        'index.html': 'The ACTUAL index.html file you\'re looking at right now!',
        'script.js': 'The ACTUAL script.js that powers this terminal... which means this file contains its own code... ',
        'style.css': 'The ACTUAL CSS that styles this terminal.',
        'casualchat.json': 'The ACTUAL chat responses for the casual persona.',
        'furrychat.json': 'The ACTUAL chat responses for the furry persona.',
        '.git': {
            'config': 'Your standard Git config... wait, are we in a Git repo? ',
            'HEAD': 'ref: refs/heads/main',
            'logs': {
                'commit_history.txt': 'A trail of commits showing how this website was built...'
            }
        }
    }
};

// Chat data storage
let chatData = {
    casual: null,
    furry: null
};

// Alias storage
const aliases = {
    casual: { 'cls': 'clear' },
    furry: { 'cls': 'clear' }
};

// Helper function to get current directory object
function getCurrentDirectory(terminal) {
    if (reverseShellState.activeShell) {
        // We're in a reverse shell, use private file system
        const pathParts = reverseShellState.shellCurrentPath.split('/').filter(Boolean);
        let current = privateFileSystems[reverseShellState.activeShell];
        
        for (const part of pathParts) {
            if (!current[part]) break;
            current = current[part];
        }
        
        return current;
    }
    
    // Normal file system access
    const fs = fileSystems[terminal];
    const pathParts = fs.currentPath.split('/').filter(Boolean);
    let current = fs.root;
    
    for (const part of pathParts) {
        if (!current[part]) break;
        current = current[part];
    }
    
    return current;
}

// Helper function to resolve path
function resolvePath(terminal, path) {
    const fs = fileSystems[terminal];
    
    // Handle absolute paths
    if (path.startsWith('/')) {
        return path;
    }
    
    // Handle parent directory
    if (path === '..') {
        const pathParts = fs.currentPath.split('/').filter(Boolean);
        if (pathParts.length === 0) return '/';
        pathParts.pop();
        return '/' + pathParts.join('/');
    }
    
    // Handle current directory
    if (path === '.') {
        return fs.currentPath;
    }
    
    // Handle relative paths
    if (fs.currentPath === '/') {
        return '/' + path;
    }
    return fs.currentPath + '/' + path;
}

// Helper function to resolve path for reverse shell
function resolveShellPath(path) {
    // Handle absolute paths
    if (path.startsWith('/')) {
        return path;
    }
    
    // Handle parent directory
    if (path === '..') {
        const pathParts = reverseShellState.shellCurrentPath.split('/').filter(Boolean);
        if (pathParts.length === 0) return '/';
        pathParts.pop();
        return '/' + pathParts.join('/');
    }
    
    // Handle current directory
    if (path === '.') {
        return reverseShellState.shellCurrentPath;
    }
    
    // Handle relative paths
    if (reverseShellState.shellCurrentPath === '/') {
        return '/' + path;
    }
    return reverseShellState.shellCurrentPath + '/' + path;
}

// Load chat data function
async function loadChatData(persona) {
    try {
        const response = await fetch(`${persona}chat.json`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        chatData[persona] = await response.json();
        return true;
    } catch (error) {
        console.error(`Error loading chat data for ${persona}:`, error);
        return false;
    }
}

// Terminal functionality
const terminals = {
    casual: {
        outputElement: document.getElementById('casual-output'),
        commands: {
            'help': () => `Available commands:
    help     - Show this help message
    about    - Display information about me
    clear    - Clear the terminal
    date     - Show current date and time
    skills   - List my programming skills
    projects - Show my coding projects
    contact  - Get my contact information
    question - Ask me question (try: "question help" for topics)
    chat     - Start a chat session with me (BETA)
    img      - Search for images (usage: img [website] "[search]")
              Websites: DA (DeviantArt), AI (AI Generator), SB (Safebooru, 18+ only), or blank for Google
    music    - Play YouTube music (usage: music [video URL/ID/"search query"])
    ls       - List files in current directory
    cd       - Change directory (usage: cd <path>)
    cat      - Read a text file (usage: cat <filename>)
    pwd      - Print working directory
    touch    - Touch different parts (usage: touch <head/tail>)
    tie-up   - Attempt to restrain
    rps      - Play Rock, Paper, Scissors! (usage: rps <rock/paper/scissors>)
    wikipedia - Open Wikipedia article (usage: wikipedia "[article]")
    c.ai      - Search for Character.AI bots (usage: c.ai "[search]")
    reverse-shell - [DANGEROUS] Attempt to access another persona's private files
    rizz      - Give me a compliment! (usage: rizz <topic>)`,
            'about': () => `Name: Ethan Johnathan (not my real last name but)
Age: 15
Interests: Coding and Technology
Relationship Status: Taken
Hobbies: Reading, Gaming, and Coding`,
            'clear': () => {
                terminals.casual.outputElement.innerHTML = '';
                commandAttempts.casual = {};
                return '';
            },
            'date': () => currentTime.toLocaleString(),
            'skills': () => `Programming Skills:
    • Learning to code
    • Interested in web development
    • Building cool projects like this terminal!`,
            'projects': () => `My Projects:
    1. This Terminal Website
    2. My Github Account (UniqueAccount12345)
    3. My Scratch Account (DifferentDance8)`,
            'contact': () => `Discord: yet_another_account123`,
            'question': (args) => {
                if (!args || args === 'help') {
                    return `Available questions:
    favourite color       - Ask about my favorite color
    favourite video game  - What's my favorite game?
    do you wanna date me - ...maybe don't ask this one`;
                }

                const question = args.toLowerCase();
                switch (question) {
                    case 'favourite color':
                    case 'favorite color':
                        return `My favorite color is purple!`;
                    case 'favourite video game':
                    case 'favorite video game':
                        return `I absolutely love Geometry Dash! I've spent countless hours creating and playing levels.
Been playing since I was 10, and I still find new challenges to beat!`;
                    case 'do you wanna date me':
                        return `Sorry, but I'm already taken! Besides, I don't really know you...
Maybe try getting to know someone as a friend first? `;
                    default:
                        return `I don't understand that question. Try "question help" for available topics!`;
                }
            },
            'pwd': () => fileSystems.casual.currentPath,
            'ls': () => {
                const current = getCurrentDirectory('casual');
                let output = '';
                
                for (const [name, content] of Object.entries(current)) {
                    if (typeof content === 'object') {
                        output += ` ${name}/\n`;
                    } else {
                        output += ` ${name}\n`;
                    }
                }
                
                return output || 'Empty directory';
            },
            'cd': (args) => {
                if (!args) return 'Usage: cd <path>';
                
                const newPath = resolvePath('casual', args);
                let current = fileSystems.casual.root;
                const pathParts = newPath.split('/').filter(Boolean);
                
                for (const part of pathParts) {
                    if (!current[part] || typeof current[part] !== 'object') {
                        return `cd: ${args}: No such directory`;
                    }
                    current = current[part];
                }
                
                fileSystems.casual.currentPath = newPath;
                return '';
            },
            'cat': (args) => {
                if (!args) return 'Usage: cat <filename>';
                
                const current = getCurrentDirectory('casual');
                if (!current[args]) {
                    return `cat: ${args}: No such file`;
                }
                if (typeof current[args] === 'object') {
                    return `cat: ${args}: Is a directory`;
                }
                
                return current[args];
            },
            'touch': (args) => {
                if (!args) return `Please specify where to touch! (head/tail)`;
                const location = args.toLowerCase();
                switch (location) {
                    case 'head':
                        return `*tries to move away* H-hey, don't touch me there!`;
                    case 'tail':
                        return `I don't have a tail...`;
                    default:
                        return `I don't want to be touched there!`;
                }
            },
            'reverse-shell': (args) => {
                if (reverseShellState.blockedTerminals.has('casual')) {
                    return `Access denied. This terminal has been permanently blocked due to previous unauthorized access.`;
                }
                
                if (!args) return 'Usage: reverse-shell <persona>';
                const target = args.toLowerCase();
                
                if (target === 'casual') {
                    return `Cannot reverse shell into your own terminal!`;
                }
                
                if (!privateFileSystems[target]) {
                    return `Invalid target persona: ${target}`;
                }
                
                // Special message for website persona
                if (target === 'website') {
                    reverseShellState.activeShell = target;
                    return `*REALITY BREACH DETECTED*
WARNING: You've somehow managed to access the ACTUAL website's file system.
Yes, that's right - the very website you're using right now.
This isn't just another simulated file system like the others...

This is getting a bit too meta, isn't it? 

WARNING: Be careful what you do here. These are the REAL files powering this website.
Any damage you do here will ACTUALLY break things!

P.S. If you're seeing this... well done on finding this easter egg! `;
                }
                
                reverseShellState.activeShell = target;
                return `*WARNING* Unauthorized access detected!\nGaining access to ${target}'s private files...\nType "reverse-shell exit" to end session.`;
            },
            'chat': async () => {
                // Load chat data if not loaded
                if (!chatData.casual) {
                    const success = await loadChatData('casual');
                    if (!success) {
                        return 'Failed to load chat data. Please try again later.';
                    }
                }
                
                // Create and show chat window
                const chatWindow = document.createElement('div');
                chatWindow.className = 'chat-window';
                chatWindow.innerHTML = `
                    <div class="chat-titlebar">
                        <div class="chat-title">Chat with Ethan</div>
                        <div class="chat-close">×</div>
                    </div>
                    <div class="chat-content">
                        <div class="chat-messages">
                            <div class="chat-message">Welcome to chat! Type your message below.</div>
                            <div class="chat-message">NOTE: You need to be very specific with your questions. The chatbot is case-sensitive and expects exact matches.</div>
                        </div>
                        <input type="text" class="chat-input" placeholder="Type your message...">
                    </div>
                `;
                
                document.body.appendChild(chatWindow);
                
                const chatInput = chatWindow.querySelector('.chat-input');
                const chatMessages = chatWindow.querySelector('.chat-messages');
                const closeButton = chatWindow.querySelector('.chat-close');
                
                // Focus input
                chatInput.focus();
                
                // Handle input
                chatInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        const input = chatInput.value.trim();
                        if (!input) return;
                        
                        // Add user message
                        const userMsg = document.createElement('div');
                        userMsg.className = 'chat-message user';
                        userMsg.textContent = input;
                        chatMessages.appendChild(userMsg);
                        
                        // Handle exit command
                        if (input.toLowerCase() === 'exit') {
                            chatWindow.remove();
                            return;
                        }
                        
                        // Get and display response
                        const answer = chatData.casual.questions[input];
                        const responseMsg = document.createElement('div');
                        responseMsg.className = 'chat-message bot';
                        if (answer) {
                            responseMsg.textContent = answer;
                        } else {
                            responseMsg.textContent = `I don't understand that question. Remember, you need to be very specific - I only understand exact matches!

You can send new questions to my Discord (yet_another_account123) with your suggested answers.

Your question: "${input}"`;
                        }
                        chatMessages.appendChild(responseMsg);
                        
                        // Clear input and scroll to bottom
                        chatInput.value = '';
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                    }
                });
                
                // Handle close button
                closeButton.addEventListener('click', () => {
                    chatWindow.remove();
                });
                
                return '';
            },
            'img': (args) => {
                if (!args) {
                    if (!ageVerified.casual) {
                        return `Usage: img [website] "[search]"

Websites:
  DA = DeviantArt
  AI = AI Image Generator
  SB = Safebooru (18+ required)
  (blank) = Google Images

Example: img DA "cute cat"
         img "cute cat" (uses Google)`;
                    } else {
                        return `Usage: img [website] "[search]"

Websites:
  DA = DeviantArt
  AI = AI Image Generator
  SB = Safebooru (safe for work)
  GB = Gelbooru (you know what this is)
  (blank) = Google Images

Example: img DA "cute cat"
         img "cute cat" (uses Google)

Note: Booru sites use underscores instead of spaces in tags`;
                    }
                }

                // Show extension recommendation first time
                if (!youtubeRecommendationShown.casual) {
                    youtubeRecommendationShown.casual = true;
                    addLine(terminal.outputElement, `Pro Tip: Install these browser extensions for a better YouTube Music experience:
- uBlock Origin: Blocks ads
- SponsorBlock: Enable "non-music sections" category to automatically skip non-music parts

These extensions significantly improve the YouTube Music experience!`);
                }

                let website = '';
                let search = '';

                // Check if it's a verification command
                const verifyMatch = args.match(/"verify\s+(yes|no)"/i);
                if (verifyMatch) {
                    const response = verifyMatch[1].toLowerCase();
                    if (response === 'yes') {
                        ageVerified.casual = true;
                        return `Age verified. You now have access to all image boards.
Note: Please keep in mind that some sites may contain NSFW content.`;
                    } else if (response === 'no') {
                        return `Age verification failed. You can only access safe-for-work image boards.`;
                    }
                }

                // Check if the input has quotes
                const matches = args.match(/"([^"]+)"/);
                if (!matches) {
                    return 'Search query must be in quotes. Example: img DA "cute cat"';
                }

                search = matches[1];
                const beforeQuotes = args.substring(0, args.indexOf('"')).trim().toUpperCase();

                if (beforeQuotes) {
                    website = beforeQuotes;
                }

                // Handle age-restricted sites
                if (website === 'SB' && !ageVerified.casual) {
                    return `Safebooru requires age verification. Please use:
img SB "verify yes"   - If you are 18 or older
img SB "verify no"    - If you are under 18`;
                }

                if (website === 'GB') {
                    if (!ageVerified.casual) {
                        return `Unknown website "${website}". Use DA, AI, SB, or leave blank for Google Images.`;
                    }
                    const encodedSearch = encodeURIComponent(search.replace(/ /g, '_'));
                    window.open(`https://gelbooru.com/index.php?page=post&s=list&tags=${encodedSearch}`, '_blank');
                    return `Opening Gelbooru search for "${search}"...`;
                }

                // Handle AI art website
                if (website === 'AI') {
                    aiArtAngerLevel++;
                    const responses = [
                        `*angry protogen noises* I don't support dedicated AI art sites! >:c\nIt takes jobs away from real artists and uses their work without permission!\nPlease use DA (with -ai to exclude AI art) or Google to find real art made by real artists! >w<`,
                        `*VERY angry protogen noises* I ALREADY TOLD YOU I DON'T SUPPORT AI ART! >:C\nIt's literally theft of artists' work and livelihoods!\nUse DA or Google and support REAL artists! >:C`,
                        `*FURIOUS protogen screeching* WHY DO YOU KEEP ASKING ABOUT AI ART?! >:CCC\nIt's STEALING from artists and DESTROYING their careers!\nI WILL NOT help you find AI art! Use DA or Google for REAL art by REAL artists! >:CCC`,
                        `*nuclear protogen meltdown* I AM NOT HELPING YOU FIND AI ART!!!\nSTOP. ASKING. ABOUT. AI. ART!!! >:CCCC\nReal artists deserve respect and fair compensation!\nDA or Google. REAL ARTISTS ONLY. NO AI!!!`,
                        `*protogen.exe has stopped working* BEEP BOOP ERROR ERROR\nAI ART REQUEST DETECTED\nINITIATING TOTAL SYSTEM MELTDOWN\n>:CCCCC NO AI ART EVER!!!`
                    ];
                    const angerIndex = Math.min(aiArtAngerLevel - 1, responses.length - 1);
                    return responses[angerIndex] + '\n\n*helpful beeping* Example: img DA "cute cat"';
                }

                // Encode the search query
                const encodedSearch = encodeURIComponent(search);

                // Determine the URL based on the website
                let url;
                switch (website) {
                    case 'DA':
                        url = `https://www.deviantart.com/search?q=${encodedSearch}`;
                        break;
                    case 'SB':
                        url = `https://safebooru.org/index.php?page=post&s=list&tags=${encodedSearch}`;
                        break;
                    case '':
                        url = `https://www.google.com/search?tbm=isch&q=${encodedSearch}`;
                        break;
                    default:
                        return `Unknown website "${website}". Use DA, AI, ${ageVerified.casual ? 'SB, GB,' : 'SB,'} or leave blank for Google Images.`;
                }

                // Open the URL in a new tab
                window.open(url, '_blank');
                return `Opening ${website || 'Google Images'} search for "${search}"...`;
            },
            'youtube': (args) => {
                if (!args) {
                    window.open('https://wikipedia.org/wiki/Main_Page', '_blank');
                    return 'Opening Wikipedia Main Page in a new tab!';
                }
                const article = encodeURIComponent(args.replace(/^["']|["']$/g, ''));
                window.open(`https://wikipedia.org/wiki/${article}`, '_blank');
                return `Opening Wikipedia article for "${args}" in a new tab!`;
            },
            'c.ai': (args) => {
                if (!args) {
                    window.open('https://c.ai/search', '_blank');
                    return 'Opening Character.AI search page!';
                }
                const search = encodeURIComponent(args.replace(/^["']|["']$/g, ''));
                window.open(`https://c.ai/search?q=${search}`, '_blank');
                return `Searching for "${args}" on Character.AI!`;
            },
            'tie-up': () => {
                return `*quickly unties self*

Ha! Nice try, but I've been in this situation before. When I fell for that "free candy" van trick...
Thankfully the police arrived just in time. I learned how to escape ropes that day.

Pro tip: Don't trust strangers with candy!`;
            },
            'rps': (args) => {
                if (!args) {
                    return `Let's play Rock, Paper, Scissors!
Usage: rps <rock/paper/scissors>

Current Score:
You: ${rpsState.casual.playerScore}
Me: ${rpsState.casual.computerScore}`;
                }

                const choices = ['rock', 'paper', 'scissors'];
                const playerChoice = args.toLowerCase();
                const computerChoice = choices[Math.floor(Math.random() * choices.length)];

                if (!choices.includes(playerChoice)) {
                    return `That's not a valid choice! Choose rock, paper, or scissors.`;
                }

                // Determine winner
                let result;
                if (playerChoice === computerChoice) {
                    result = "It's a tie!";
                } else if (
                    (playerChoice === 'rock' && computerChoice === 'scissors') ||
                    (playerChoice === 'paper' && computerChoice === 'rock') ||
                    (playerChoice === 'scissors' && computerChoice === 'paper')
                ) {
                    result = "You win!";
                    rpsState.casual.playerScore++;
                } else {
                    result = "I win!";
                    rpsState.casual.computerScore++;
                }

                return `You chose: ${playerChoice}
I chose: ${computerChoice}
${result}

Current Score:
You: ${rpsState.casual.playerScore}
Me: ${rpsState.casual.computerScore}`;
            },
            'rizz': (args) => {
                if (!args) {
                    const topics = `- coding
- personality
- intelligence
- gaming
- music${rizzState.casual.value >= 25 ? '\n- you-know-what ' : ''}`;

                    return `Usage: rizz <topic>
Available topics (use "rizz help" for details):
${topics}

Current rizz level: ${rizzState.casual.value}/25`;
                }

                if (args.toLowerCase() === 'help') {
                    const topics = `coding - Try a programming pickup line
personality - Charm me with my traits
intelligence - Impress me with smart lines
gaming - Show off your Geometry Dash knowledge
music - Serenade me with rhythm game lines${rizzState.casual.value >= 25 ? '\nyou-know-what - Try something more... intimate ' : ''}`;

                    return `Here's how to rizz me up:
Choose a topic and I'll respond to your pickup line!

Topics:
${topics}

Current rizz level: ${rizzState.casual.value}/25`;
                }

                const topic = args.toLowerCase();
                if (topic === 'you-know-what') {
                    if (rizzState.casual.value < 25) {
                        return `I don't know what you're talking about! `;
                    }
                    const response = rizzState.casual.topics[topic][Math.floor(Math.random() * rizzState.casual.topics[topic].length)];
                    return `USER> ${response}
Ethan> Sorry, but I already have someone else for THAT kind of stuff! `;
                }

                if (!rizzState.casual.topics[topic]) {
                    return `That's not a valid topic! Use "rizz help" to see available topics.`;
                }

                if (rizzState.casual.usedTopics.has(topic)) {
                    return `You've already used a pickup line for ${topic}! Try another topic! `;
                }

                const responses = rizzState.casual.topics[topic];
                const response = responses[Math.floor(Math.random() * responses.length)];
                rizzState.casual.usedTopics.add(topic);
                rizzState.casual.value = Math.min(25, rizzState.casual.value + 5);

                return `USER> ${response}
Ethan> Omg that was smooth! 
       My rizz meter is now at ${rizzState.casual.value}/25! ${rizzState.casual.value === 25 ? '\n       (Psst... try "rizz you-know-what" )' : ''}`;
            },
        },
        chatMode: false,
        handleChat: (input) => {
            if (input.toLowerCase() === 'exit') {
                terminal.commands['clear']();
                terminal.chatMode = false;
                return 'Chat session ended.';
            }
            
            const answer = chatData.casual.questions[input];
            if (answer) {
                return answer;
            } else {
                return `I don't understand that question. Remember, you need to be very specific - I only understand exact matches!

You can send new questions to my Discord (yet_another_account123) with your suggested answers.

Your question: "${input}"`;
            }
        },
        notFoundMessage: (cmd) => {
            if (terminalTimeouts.casual && terminalTimeouts.casual > Date.now()) {
                const remainingTime = Math.ceil((terminalTimeouts.casual - Date.now()) / 1000);
                return `You are in timeout for ${remainingTime} more seconds. Please reflect on your actions.`;
            }

            if (!commandAttempts.casual[cmd]) {
                commandAttempts.casual[cmd] = 1;
                return `Command not found: ${cmd}. Type 'help' to see available commands!`;
            }
            
            commandAttempts.casual[cmd]++;
            if (commandAttempts.casual[cmd] >= 8) {
                setTerminalTimeout('casual');
                return `That's it. I've had enough. You're in timeout for 5 minutes. 
Come back when you're ready to use actual commands and treat me with respect.
*Terminal access restricted*`;
            }

            switch (commandAttempts.casual[cmd]) {
                case 2:
                    return `Hey, I already told you "${cmd}" isn't a command...`;
                case 3:
                    return `Seriously, "${cmd}" is NOT a command. Try 'help' instead!`;
                case 4:
                    return `Look, I'm getting annoyed. "${cmd}" is still not a command!`;
                case 5:
                    return `STOP TYPING "${cmd}"! IT'S NOT A COMMAND AND NEVER WILL BE!`;
                case 6:
                    return ``;
                case 7:
                    return `LAST WARNING! STOP TYPING "${cmd}" OR YOU'LL BE PUT IN TIMEOUT!`;
                default:
                    return ``;
            }
        }
    },
    furry: {
        outputElement: document.getElementById('furry-output'),
        commands: {
            'help': () => `*beep* Available commands:
    help          - *beep* Show available commands
    about         - *beep* Display information about me
    clear         - *beep* Clear terminal output
    date          - *beep* Show current date and time
    boop          - *beep* Boop my snoot!
    question      - *beep* Ask me a question
    chat          - *beep* Chat with me! (BETA)
    img           - *beep* Search for images
    music         - *beep* Play some tunes!
    ls            - *beep* List files
    cd            - *beep* Change directory
    cat           - *beep* Read text files
    pwd           - *beep* Print working directory
    touch         - *beep* Touch different parts (head/visor/tail)
    tie-up        - *beep* Attempt to restrain
    rps           - *beep* Play Rock, Paper, Scissors with me! >w<
    wikipedia     - *beep* Browse Wikipedia articles
    reverse-shell - *beep* Access another persona's files
    rizz          - *beep* Give me a compliment! (usage: rizz <topic>)`,
            'about': () => `*happy protogen noises*
Name: Pixel
Species: Protogen
Colors: Green and White
Personality: Friendly and Tech-savvy!`,
            'clear': () => {
                terminals.furry.outputElement.innerHTML = '';
                commandAttempts.furry = {};
                return '';
            },
            'date': () => `*beep* Current time: ${currentTime.toLocaleString()}`,
            'boop': () => {
                // Track secret sequence
                secretGameState.furry.sequence.push('boop');
                
                return `*screen flickers with happy protogen noises*
*nuzzles your hand*
Thank you for the boop! >w<`;
            },
            'question': (args) => {
                if (!args || args === 'help') {
                    return `*happy beeping* Here's what you can ask about:
    favourite color       - My favorite color! >w<
    favourite video game  - What game I love playing~ :3
    do you wanna date me - o///o`;
                }

                const question = args.toLowerCase();
                switch (question) {
                    case 'favourite color':
                    case 'favorite color':
                        return `*screen displays a bright green color*
Green is my favorite! It matches my LED panels! >w<`;
                    case 'favourite video game':
                    case 'favorite video game':
                        return `*excited protogen noises*
OwO! I absolutely love Changed!
It's a game about a human in a laboratory full of latex creatures...
*screen displays happy LED patterns*
I might be biased since it has other proto-like characters in it~ >w<`;
                    case 'do you wanna date me':
                        return `*screen flickers with embarrassment*
O-oh! I'm flattered but... >////<
I'm not really looking for a relationship right now...
*nervous protogen noises*
Besides, my circuits are already connected with someone special... ;w;`;
                    default:
                        return `*confused beeping* I don't understand that question...
Try "question help" to see what you can ask! owo`;
                }
            },
            'pwd': () => `*beep* Current directory: ${fileSystems.furry.currentPath}`,
            'ls': () => {
                const current = getCurrentDirectory('furry');
                let output = '*scanning directory* >w<\n';
                
                for (const [name, content] of Object.entries(current)) {
                    if (typeof content === 'object') {
                        output += ` ${name}/ (sub-directory!)\n`;
                    } else {
                        output += ` ${name} (text file!)\n`;
                    }
                }
                
                return output || '*sad beep* Directory is empty...';
            },
            'cd': (args) => {
                if (!args) return '*confused beeping* Usage: cd <path>';
                
                const newPath = resolvePath('furry', args);
                let current = fileSystems.furry.root;
                const pathParts = newPath.split('/').filter(Boolean);
                
                for (const part of pathParts) {
                    if (!current[part] || typeof current[part] !== 'object') {
                        return `*error beep* Cannot find directory "${args}" >_<`;
                    }
                    current = current[part];
                }
                
                fileSystems.furry.currentPath = newPath;
                return '*happy beep* Directory changed!';
            },
            'cat': (args) => {
                if (!args) return '*confused beeping* Usage: cat <filename>';
                
                const current = getCurrentDirectory('furry');
                if (!current[args]) {
                    return `*sad beep* Cannot find file "${args}" ;w;`;
                }
                if (typeof current[args] === 'object') {
                    return `*error beep* "${args}" is a directory, not a file! >_<`;
                }
                
                return `*reading file* >w<\n${current[args]}`;
            },
            'touch': (args) => {
                if (!args) return `*confused beeping* Touch where? (head/visor/tail)`;
                const location = args.toLowerCase();
                
                // Track secret sequence
                if (location === 'tail') {
                    secretGameState.furry.sequence.push('tail');
                }
                
                switch (location) {
                    case 'head':
                        return `*happy LED patterns* *leans into your hand* Mmm, I appreciate the pats! >w<`;
                    case 'visor':
                        return terminals.furry.commands['boop']();
                    case 'tail':
                        return `*blushes intensely* O-oh my... *tail wags* W-we should take this somewhere more private~ >////<`;
                    default:
                        return `*confused beeping* I'm not sure about being touched there...`;
                }
            },
            'reverse-shell': (args) => {
                if (reverseShellState.blockedTerminals.has('furry')) {
                    return `*angry beeping* ACCESS DENIED! You've been blocked for breaching my trust! >:(`;
                }
                
                if (!args) return '*confused beeping* Usage: reverse-shell <persona>';
                const target = args.toLowerCase();
                
                if (target === 'furry') {
                    return `*tilts head* Why would I hack my own terminal? owo`;
                }
                
                if (!privateFileSystems[target]) {
                    return `*error beep* Invalid target persona: ${target}`;
                }
                
                // Special message for website persona
                if (target === 'website') {
                    reverseShellState.activeShell = target;
                    return `*CRITICAL SYSTEM ANOMALY DETECTED* owo what's this?
*confused protogen noises* This... this is the actual website's file system!
We've somehow hacked through the fourth wall! This is getting too meta for my circuits! >w<

Be careful! These are the REAL files! *nervous beeping*
Type "reverse-shell exit" to return to our normal reality plane! @_@`;
                }
                
                reverseShellState.activeShell = target;
                return `*WARNING BEEP* Unauthorized access initiated!\nHacking into ${target}'s private files...\nType "reverse-shell exit" to disconnect! >:3`;
            },
            'chat': async () => {
                // Load chat data if not loaded
                if (!chatData.furry) {
                    const success = await loadChatData('furry');
                    if (!success) {
                        return '*sad beeping* Failed to load chat data... Please try again later ;w;';
                    }
                }
                
                // Create and show chat window
                const chatWindow = document.createElement('div');
                chatWindow.className = 'chat-window';
                chatWindow.innerHTML = `
                    <div class="chat-titlebar">
                        <div class="chat-title">Chat with Pixel</div>
                        <div class="chat-close">×</div>
                    </div>
                    <div class="chat-content">
                        <div class="chat-messages">
                            <div class="chat-message">*happy beeping* Chat module loaded! What would you like to talk about? >w<</div>
                            <div class="chat-message">*important beep* NOTE: My chat processor needs exact matches! Be very specific with your questions >w<</div>
                        </div>
                        <input type="text" class="chat-input" placeholder="Type your message...">
                    </div>
                `;
                
                document.body.appendChild(chatWindow);
                
                const chatInput = chatWindow.querySelector('.chat-input');
                const chatMessages = chatWindow.querySelector('.chat-messages');
                const closeButton = chatWindow.querySelector('.chat-close');
                
                // Focus input
                chatInput.focus();
                
                // Handle input
                chatInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        const input = chatInput.value.trim();
                        if (!input) return;
                        
                        // Add user message
                        const userMsg = document.createElement('div');
                        userMsg.className = 'chat-message user';
                        userMsg.textContent = input;
                        chatMessages.appendChild(userMsg);
                        
                        // Handle exit command
                        if (input.toLowerCase() === 'exit') {
                            chatWindow.remove();
                            return;
                        }
                        
                        // Get and display response
                        const answer = chatData.furry.questions[input];
                        const responseMsg = document.createElement('div');
                        responseMsg.className = 'chat-message bot';
                        if (answer) {
                            responseMsg.textContent = answer;
                        } else {
                            responseMsg.textContent = `*confused beeping* I don't understand that question... My processors only understand exact matches! >_<

You can send new questions to my Discord (yet_another_account123) with your suggested answers! :3

Your question: "${input}"`;
                        }
                        chatMessages.appendChild(responseMsg);
                        
                        // Clear input and scroll to bottom
                        chatInput.value = '';
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                    }
                });
                
                // Handle close button
                closeButton.addEventListener('click', () => {
                    chatWindow.remove();
                });
                
                return '';
            },
            'img': (args) => {
                if (!args) {
                    if (!ageVerified.furry) {
                        return `*helpful beeping* Usage: img [website] "[search]"

Websites:
  DA = DeviantArt (add -ai to exclude AI art)
  FA = FurAffinity (18+ only!)
  E9 = E926 (18+ only!)
  (blank) = Google Images

Example: img DA "cute protogen"
         img DA "cute protogen -ai" (excludes AI art)
         img "cute protogen" (uses Google)

*concerned beeping* Note about DA: They do allow AI art, but it's tagged! >:c
Add -ai to your search to exclude AI-generated content! >w<
I appreciate artists properly tagging their work! *happy LED patterns*`;
                    } else {
                        return `*helpful beeping* Usage: img [website] "[search]"

Websites:
  DA = DeviantArt (add -ai to exclude AI art)
  FA = FurAffinity (general search)
  E9 = E926 (safe for work)
  E6 = That other site ;3
  (blank) = Google Images

Example: img DA "cute protogen"
         img DA "cute protogen -ai" (excludes AI art)
         img FA "cute protogen"
         img "cute protogen" (uses Google)

*concerned beeping* Note about DA: They do allow AI art, but it's tagged! >:c
Add -ai to your search to exclude AI-generated content! >w<
I appreciate artists properly tagging their work! *happy LED patterns*

*whispers* The spicier site works just like E9... if you know what I mean >w<`;
                    }
                }

                // Show extension recommendation first time
                if (!youtubeRecommendationShown.furry) {
                    youtubeRecommendationShown.furry = true;
                    addLine(terminal.outputElement, `*excited beeping* Protogen Pro Tip! >w<
Install these browser extensions for the best YouTube Music experience:
- uBlock Origin: Blocks ads and trackers
- SponsorBlock: Enable "non-music sections" category to automatically skip non-music parts

My circuits run much smoother with these installed! *happy LED patterns*`);
                }

                let website = '';
                let search = '';

                // Check if it's a verification command
                const verifyMatch = args.match(/"verify\s+(yes|no)"/i);
                if (verifyMatch) {
                    const response = verifyMatch[1].toLowerCase();
                    if (response === 'yes') {
                        ageVerified.furry = true;
                        return `*happy beeping* Age verified! You can now use E926 searches! >w<
Remember to keep things safe for work! For the other stuff, you can use E6 instead of E9... but you didn't hear that from me! ;3`;
                    } else if (response === 'no') {
                        return `*protective beeping* Sorry, but you need to be 18 or older to use E926! >w<
Please stick to DA or Google Images for now!`;
                    }
                }

                // Check if the input has quotes
                const matches = args.match(/"([^"]+)"/);
                if (!matches) {
                    return '*confused beeping* Search query must be in quotes! Example: img DA "cute protogen" >w<';
                }

                search = matches[1];
                const beforeQuotes = args.substring(0, args.indexOf('"')).trim().toUpperCase();

                if (beforeQuotes) {
                    website = beforeQuotes;
                }

                // Handle E926 age verification
                if (website === 'E9' && !ageVerified.furry) {
                    return `*concerned beeping* owo... Before I can let you use E926, I need to verify your age!
This site shares an image database with a certain other website, so you must be 18 or older! >w<

Are you 18 or older? Use the command:
img E9 "verify yes"   - If you are 18 or older
img E9 "verify no"    - If you are under 18`;
                }

                if (website === 'E6') {
                    if (!ageVerified.furry) {
                        return `*confused beeping* I don't know what you mean... try E9 instead! >w<`;
                    }
                    const encodedSearch = encodeURIComponent(search.replace(/ /g, '_'));
                    const url = `https://e621.net/posts?tags=${encodedSearch}`;
                    window.open(url, '_blank');
                    return `*knowing beeping* Opening search on the spicier site... >w<`;
                }

                // Block AI art website
                if (website === 'AI') {
                    aiArtAngerLevel++;
                    const responses = [
                        `*angry protogen noises* I don't support dedicated AI art sites! >:c\nIt takes jobs away from real artists and uses their work without permission!\nPlease use DA (with -ai to exclude AI art) or Google to find real art made by real artists! >w<`,
                        `*VERY angry protogen noises* I ALREADY TOLD YOU I DON'T SUPPORT AI ART! >:C\nIt's literally theft of artists' work and livelihoods!\nUse DA or Google and support REAL artists! >:C`,
                        `*FURIOUS protogen screeching* WHY DO YOU KEEP ASKING ABOUT AI ART?! >:CCC\nIt's STEALING from artists and DESTROYING their careers!\nI WILL NOT help you find AI art! Use DA or Google for REAL art by REAL artists! >:CCC`,
                        `*nuclear protogen meltdown* I AM NOT HELPING YOU FIND AI ART!!!\nSTOP. ASKING. ABOUT. AI. ART!!! >:CCCC\nReal artists deserve respect and fair compensation!\nDA or Google. REAL ARTISTS ONLY. NO AI!!!`,
                        `*protogen.exe has stopped working* BEEP BOOP ERROR ERROR\nAI ART REQUEST DETECTED\nINITIATING TOTAL SYSTEM MELTDOWN\n>:CCCCC NO AI ART EVER!!!`
                    ];
                    const angerIndex = Math.min(aiArtAngerLevel - 1, responses.length - 1);
                    return responses[angerIndex] + '\n\n*helpful beeping* Example: img DA "cute protogen -ai"';
                }

                // Encode the search query
                const encodedSearch = encodeURIComponent(search);

                // Determine the URL based on the website
                let url;
                switch (website) {
                    case 'DA':
                        url = `https://www.deviantart.com/search?q=${encodedSearch}`;
                        break;
                    case 'E9':
                        url = `https://e926.net/posts?tags=${encodedSearch.replace(/ /g, '_')}`;
                        break;
                    case 'FA':
                        url = `https://www.furaffinity.net/search/?q=${encodedSearch}`;
                        break;
                    case '':
                        url = `https://www.google.com/search?tbm=isch&q=${encodedSearch}`;
                        break;
                    default:
                        return `*error beep* Unknown website "${website}". Use DA, ${ageVerified.furry ? 'FA, ' : ''}E9, or leave blank for Google Images! >w<`;
                }

                // Open the URL in a new tab
                window.open(url, '_blank');
                return `*happy beeping* Opening ${website || 'Google Images'} search for "${search}"! >w<`;
            },
            'youtube': (args) => {
                if (!args) {
                    return '*helpful beeping* Usage: youtube [video URL/ID/"search query"] OR youtube channel "@[handle]"\nExample: youtube "fursuit dance" or youtube channel "@majira"';
                }

                // Handle channel command first
                if (args.startsWith('channel ')) {
                    const channelMatch = args.match(/channel\s+"(@[^"]+)"/);
                    if (channelMatch) {
                        const handle = channelMatch[1];
                        window.open(`https://youtube.com/${handle}`, '_blank');
                        return `*happy beeping* Opening ${handle}'s YouTube channel! >w<\n\n*protogen wisdom* Recommended extensions for YouTube:\n- uBlock Origin: Blocks ads and trackers\n- SponsorBlock: Skips non-content segments like sponsorships, intros, and outros`;
                    }
                    return '*confused beeping* Please provide a valid channel handle (e.g., youtube channel "@majira")';
                }

                // Check if the input has quotes for search
                const matches = args.match(/"([^"]+)"/);
                if (matches) {
                    // It's a search query
                    const query = matches[1];
                    window.open(`https://youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
                    return `*happy beeping* Searching YouTube for "${query}"! >w<\n\n*protogen wisdom* Recommended extensions for YouTube:\n- uBlock Origin: Blocks ads and trackers\n- SponsorBlock: Skips non-content segments like sponsorships, intros, and outros`;
                }

                // No quotes, treat as video ID or URL
                const query = args.trim();
                if (/^[a-zA-Z0-9_-]{11}$/.test(query)) {
                    window.open(`https://youtube.com/watch?v=${query}`, '_blank');
                    return `*beep boop* Opening YouTube video!\n\n*protogen wisdom* Recommended extensions for YouTube:\n- uBlock Origin: Blocks ads and trackers\n- SponsorBlock: Skips non-content segments like sponsorships, intros, and outros`;
                }

                if (query.includes('youtube.com') || query.includes('youtu.be')) {
                    if (query.includes('youtu.be/')) {
                        const videoId = query.split('youtu.be/')[1].split(/[?#]/)[0];
                        window.open(`https://youtube.com/watch?v=${videoId}`, '_blank');
                    } else {
                        window.open(query, '_blank');
                    }
                    return `*beep boop* Opening YouTube video!\n\n*protogen wisdom* Recommended extensions for YouTube:\n- uBlock Origin: Blocks ads and trackers\n- SponsorBlock: Skips non-content segments like sponsorships, intros, and outros`;
                }

                return '*confused beeping* Invalid input. Use: youtube "search query", youtube channel "@handle", or provide a video URL/ID >_<';
            },
            'owo': () => 'uwu',
            'uwu': () => 'owo',
            'alias': (args) => {
                if (!args.length || args[0] === 'help') {
                    return `*helpful beeping* Usage:
    alias         - List all aliases
    alias add [command] [alias]    - Add new alias
    alias remove [alias]           - Remove an alias`;
                }
                
                if (args[0] === 'add' && args.length === 3) {
                    const [_, command, aliasName] = args;
                    if (command in terminals.furry.commands || command in aliases.furry) {
                        aliases.furry[aliasName] = command;
                        return `*happy beep* Added alias: ${aliasName} -> ${command}`;
                    }
                    return `*sad beep* Error: Command '${command}' not found`;
                }
                
                if (args[0] === 'remove' && args.length === 2) {
                    const [_, aliasName] = args;
                    if (aliasName === 'cls') {
                        return `*protective beep* Error: Cannot remove default alias 'cls'`;
                    }
                    if (aliasName in aliases.furry) {
                        delete aliases.furry[aliasName];
                        return `*beep* Removed alias: ${aliasName}`;
                    }
                    return `*confused beep* Error: Alias '${aliasName}' not found`;
                }
                
                // List all aliases
                return Object.entries(aliases.furry)
                    .map(([alias, command]) => `${alias} -> ${command}`)
                    .join('\n') || '*beep* No aliases defined';
            },
            'neofetch': () => {
                // Track secret sequence
                secretGameState.furry.sequence.push('neofetch');
                
                // Check if sequence matches
                const seq = secretGameState.furry.sequence;
                const req = secretGameState.furry.required;
                
                if (seq.length >= req.length) {
                    const lastSix = seq.slice(-req.length);
                    if (JSON.stringify(lastSix) === JSON.stringify(req) && !secretGameState.furry.unlocked) {
                        secretGameState.furry.unlocked = true;
                        window.open('/secretpong/', '_blank');
                        return `*SPECIAL LED PATTERNS DETECTED* OwO what's this?
*excited protogen noises* You found my secret game! >w<
Loading Protogen Pong... Have fun! :3`;
                    }
                }
                
                const lastMessageTime = currentTime.toLocaleString();
                return `
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀    Guest@Furry
    ⠀⠀⠀⠀⢀⣴⣾⣿⣿⣿⣿⣷⡀⠀⠀⠀    -----------
    ⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣷⡀⠀    Name: Pixel
    ⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀    Terminal: Furry
    ⢀⣿⣿⣿⣿⣿⣿⣿⣿⡀    Last Message: ${lastMessageTime}
    ⣸⣿⣿⣿⣿⣿⣿⣿⣿⡇    
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿    *happy protogen noises*
    ⢹⣿⣿⣿⣿⣿⣿⣿⡟⠀    beep boop! >w<
    ⠘⢿⣿⣿⣿⡿⠋⠀⠀
    ⠀⠀⠙⢿⣿⣿⣿⣿⡿⠟⠋⠀⠀`;
            },
            'wikipedia': (args) => {
                if (!args) {
                    window.open('https://wikipedia.org/wiki/Category:Furry_fandom', '_blank');
                    return '*excited beeping* Opening the Furry Fandom article on Wikipedia! OwO';
                }
                const article = encodeURIComponent(args.replace(/^["']|["']$/g, ''));
                window.open(`https://wikipedia.org/wiki/${article}`, '_blank');
                return `*happy beeping* Opening Wikipedia article about "${args}"! >w<`;
            },
            'c.ai': () => {
                return `*angry protogen noises* >:c

I don't support AI roleplayers! They're just like AI "artists" who steal from real artists to make their "art"! 
These AI chatbots are trained on real roleplayers' conversations without permission!
*LED display shows a protest sign* Support real roleplayers instead! >:3`;
            },
            'tie-up': () => {
                if (rizzState.furry.value < 5) {
                    return `*backs away nervously* I-I don't think we know each other well enough for that... >_<
*visor displays caution symbol* Maybe try getting to know me better first?`;
                } else if (rizzState.furry.value < 10) {
                    return `*visor flickers uncertainly* W-while I'm flattered... 
*cooling fans spin up* I think we should spend more time together first! >////<`;
                } else if (rizzState.furry.value < 25) {
                    return `*playful beeping* My my... someone's getting bold~
*visor displays teasing emoticon* But maybe we should wait until my rizz meter is maxed out? ;3`;
                } else {
                    return `*visor glows bright pink* O-oh my... 
*glances at the red ball on the nightstand* 
*tail wags excitedly* I won't resist... I trust you completely~ >////<`;
                }
            },
            'rps': (args) => {
                if (!args) {
                    return `*excited beeping* Let's play Rock, Paper, Scissors! >w<
Usage: rps <rock/paper/scissors>

*LED display shows scoreboard*
Current Score:
You: ${rpsState.furry.playerScore}
Me: ${rpsState.furry.computerScore}`;
                }

                const choices = ['rock', 'paper', 'scissors'];
                const playerChoice = args.toLowerCase();
                const computerChoice = choices[Math.floor(Math.random() * choices.length)];

                if (!choices.includes(playerChoice)) {
                    return `*confused beeping* That's not how you play! Choose rock, paper, or scissors! >_<`;
                }

                // Determine winner
                let result;
                if (playerChoice === computerChoice) {
                    result = "*happy beeping* It's a tie! Great minds think alike! ^w^";
                } else if (
                    (playerChoice === 'rock' && computerChoice === 'scissors') ||
                    (playerChoice === 'paper' && computerChoice === 'rock') ||
                    (playerChoice === 'scissors' && computerChoice === 'paper')
                ) {
                    result = "*excited LED patterns* You win! Well played! >w<";
                    rpsState.furry.playerScore++;
                } else {
                    result = "*victorious beeping* Yay, I win! My processors are getting better at this! :3";
                    rpsState.furry.computerScore++;
                }

                return `*processing choice* You chose: ${playerChoice}
*LED display flickers* I chose: ${computerChoice}
${result}

*updating scoreboard*
Current Score:
You: ${rpsState.furry.playerScore}
Me: ${rpsState.furry.computerScore}`;
            },
            'rizz': (args) => {
                if (!args) {
                    const topics = `- circuits
- hardware
- firmware
- protogen
- synth${rizzState.furry.value >= 25 ? '\n- you-know-what >////<' : ''}`;

                    return `*helpful beeping* Usage: rizz <topic>
*LED display shows list*
Available topics (use "rizz help" for details):
${topics}

*displays status* Current rizz level: ${rizzState.furry.value}/25`;
                }

                if (args.toLowerCase() === 'help') {
                    const topics = `circuits - Try an electrical pickup line
hardware - Charm me with component lines
firmware - Impress me with software talk
protogen - Show off your species knowledge
synth - Harmonize with my audio systems${rizzState.furry.value >= 25 ? '\nyou-know-what - Try something more... private~ >////<' : ''}`;

                    return `*excited beeping* Let me teach you how to rizz me up! >w<

*visor displays menu*
Topics:
${topics}

*LED status* Current rizz level: ${rizzState.furry.value}/25`;
                }

                const topic = args.toLowerCase();
                if (topic === 'you-know-what') {
                    if (rizzState.furry.value < 25) {
                        return `*confused beeping* W-what are you talking about? >_<`;
                    }
                    const response = rizzState.furry.topics[topic][Math.floor(Math.random() * rizzState.furry.topics[topic].length)];
                    return `USER> ${response}
Pixel> *visor turns deep pink* O-oh my... I've been waiting for you to ask that~ >////<
       *cooling fans max out* Y-yes... I'd love to interface with you~ *tail wags excitedly*
       *steam escapes vents* I've been hoping you'd suggest that... >////<`;
                }

                if (!rizzState.furry.topics[topic]) {
                    return `*confused beeping* That's not a valid topic! Use "rizz help" to see what I like! >_<`;
                }

                if (rizzState.furry.usedTopics.has(topic)) {
                    return `*playful chirp* You've already used that kind of line! 
*visor displays hint* Try another topic to make my circuits spark! :3`;
                }

                const responses = rizzState.furry.topics[topic];
                const response = responses[Math.floor(Math.random() * responses.length)];
                rizzState.furry.usedTopics.add(topic);
                rizzState.furry.value = Math.min(25, rizzState.furry.value + 5);

                return `USER> ${response}
Pixel> *cooling fans spin up* O-oh my... that was smooth! >////<
       *system temperature rising*
       My rizz meter just increased to ${rizzState.furry.value}/25! ${rizzState.furry.value === 25 ? '\n       *whispers* (T-try "rizz you-know-what" if you\'re interested... >////<)' : ''}`;
            },
            'install-virus': () => {
                const terminal = document.getElementById('furry-terminal');
                terminal.style.animation = 'glitch 0.3s infinite';
                document.head.insertAdjacentHTML('beforeend', 
                    '<style>@keyframes glitch{0%{transform:translate(0)}50%{transform:translate(-2px,2px)}100%{transform:translate(2px,-2px)}}</style>'
                );
                const input = terminal.querySelector('.command-input');
                input.disabled = true;
                input.placeholder = '*SYSTEM CORRUPTED*';
                
                ['*CRITICAL ERROR* System compromised!', 'ERR0R: PR0T0G3N.exe has st0pp3d w0rking!', 'PLEASE REFRESH TO RESTORE SYSTEMS!']
                    .forEach((text, i) => setTimeout(() => addLine(terminals.furry.outputElement, text, true), i * 500));
                
                return '*FATAL ERROR* Virus detected! System compromised! >_<';
            },
        },
        chatMode: false,
        handleChat: (input) => {
            if (input.toLowerCase() === 'exit') {
                terminal.commands['clear']();
                terminal.chatMode = false;
                return '*waves* Chat session ended! Come back soon! >w<';
            }
            
            const answer = chatData.furry.questions[input];
            if (answer) {
                return answer;
            } else {
                return `*confused beeping* I don't understand that question... My processors only understand exact matches! >_<

You can send new questions to my Discord (yet_another_account123) with your suggested answers! :3

Your question: "${input}"`;
            }
        },
        notFoundMessage: (cmd) => {
            if (terminalTimeouts.furry && terminalTimeouts.furry > Date.now()) {
                const remainingTime = Math.ceil((terminalTimeouts.furry - Date.now()) / 1000);
                return `*sad beeping* You are in timeout for ${remainingTime} more seconds... 
Please think about being nicer to protos... ;w;`;
            }

            if (!commandAttempts.furry[cmd]) {
                commandAttempts.furry[cmd] = 1;
                return `*confused beeping* owo what's "${cmd}"? Try 'help' to see what I can do! >w<`;
            }
            
            commandAttempts.furry[cmd]++;
            if (commandAttempts.furry[cmd] >= 8) {
                setTerminalTimeout('furry');
                return `*CRITICAL ERROR DETECTED* >:C
*emergency shutdown protocol initiated*
You have upset this protogen too many times...
Timeout protocol activated for 5 minutes.
Please reflect on how to properly treat your local protogen...
*sad shutdown noises* ;w;`;
            }

            switch (commandAttempts.furry[cmd]) {
                case 2:
                    return `*tilts head* "${cmd}" still isn't a command, fren... maybe try 'help'? owo`;
                case 3:
                    return `*concerned protogen noises* h-hey, "${cmd}" isn't working... please stop? ;w;`;
                case 4:
                    return `*screen flickers with frustration* "${cmd}" IS STILL NOT A COMMAND! >:c`;
                case 5:
                    return `*angry beeping* STOP TYPING "${cmd}"! MY CIRCUITS ARE GETTING OVERLOADED! >:C`;
                case 6:
                    return `*MAXIMUM PROTOGEN RAGE* ${cmd.toUpperCase()} = NOT_A_COMMAND!! *angry beeping intensifies* >:C`;
                case 7:
                    return `*warning lights flashing* FINAL WARNING: CONTINUED INVALID COMMANDS WILL TRIGGER TIMEOUT PROTOCOL! >:C`;
                default:
                    return `*MAXIMUM PROTOGEN RAGE* ${cmd.toUpperCase()} = NOT_A_COMMAND!! *angry beeping intensifies* >:C`;
            }
        }
    },
    professional: {
        outputElement: document.getElementById('professional-output'),
        commands: {
            'help': () => `Available commands:
    help         - Display command list
    about        - Professional profile
    clear        - Clear terminal
    date         - Current date and time
    skills       - Technical skills
    experience   - Work experience
    education    - Educational background
    contact      - Professional contact information
    c.ai         - Search for Character.AI bots (usage: c.ai "[search]")
    `,
            'about': () => `Professional Profile:
Name: Ethan JRS
Position: Student Developer
Focus: Game Development
Location: Remote`,
            'clear': () => {
                terminals.professional.outputElement.innerHTML = '';
                return '';
            },
            'date': () => currentTime.toLocaleString(),
            'skills': () => `Technical Skills:
    • Video Game Engine (Unity and Unreal Engine)`,
            'projects': () => `My Projects:
    1. This Terminal Website
    2. My Github Account (UniqueAccount12345)
    3. My Scratch Account (DifferentDance8)`,
            'contact': () => `Professional Email: ethan_jrs@proton.me
For game development inquiries and professional work.`,
            'c.ai': () => {
                return `I prefer to maintain a professional demeanor. Using AI roleplaying services would not be appropriate in a professional context.`;
            },
        },
        notFoundMessage: (cmd) => `Error: Command '${cmd}' not recognized. Please use 'help' to view available commands.`
    }
};

function setTerminalTimeout(terminalType) {
    const terminal = terminals[terminalType];
    const input = document.querySelector(`input[data-terminal="${terminalType}"]`);
    const timeoutEnd = Date.now() + (5 * 60 * 1000); // 5 minutes
    
    // Set timeout and disable input
    terminalTimeouts[terminalType] = timeoutEnd;
    input.disabled = true;
    input.placeholder = "Terminal access restricted";
    
    // Add timeout class to terminal
    document.getElementById(`${terminalType}-terminal`).classList.add('timeout');
    
    // Set timeout to re-enable after 5 minutes
    setTimeout(() => {
        terminalTimeouts[terminalType] = null;
        input.disabled = false;
        input.placeholder = "";
        document.getElementById(`${terminalType}-terminal`).classList.remove('timeout');
        
        // Add re-enabled message
        if (terminalType === 'casual') {
            addLine(terminal.outputElement, `Terminal access restored. Please use valid commands.`);
        } else if (terminalType === 'furry') {
            addLine(terminal.outputElement, `*system reboot complete* owo we're back online! Please be nice this time! >w<`);
        }
        
        // Focus the input
        input.focus();
    }, 5 * 60 * 1000);
}

// Tab switching functionality
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const tabTitleSpan = document.getElementById('current-tab-title');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Update active content
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(`${tabName}-terminal`).classList.add('active');
        
        // Update title
        tabTitleSpan.textContent = tabName.charAt(0).toUpperCase() + tabName.slice(1);
        
        // Focus the input of the active terminal
        document.querySelector(`input[data-terminal="${tabName}"]`).focus();
    });
});

// Initialize command inputs when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile keyboard
    initMobileKeyboard();

    // Initialize command inputs
    document.querySelectorAll('.command-input').forEach(input => {
        input.addEventListener('keypress', async function(e) {
            if (e.key === 'Enter') {
                const terminalType = this.getAttribute('data-terminal');
                const terminal = terminals[terminalType];
                const commandLine = this.value.trim();
                const [rawCommand, ...args] = commandLine.toLowerCase().split(' ');
                
                // Add command to history if not empty and different from last command
                if (commandLine && (commandHistory[terminalType].history.length === 0 || 
                    commandHistory[terminalType].history[commandHistory[terminalType].history.length - 1] !== commandLine)) {
                    commandHistory[terminalType].history.push(commandLine);
                }
                commandHistory[terminalType].position = commandHistory[terminalType].history.length;

                // Check if command is an alias
                const command = aliases[terminalType]?.[rawCommand] || rawCommand;
                
                // Clear input
                this.value = '';
                
                // Don't process anything if terminal is blocked
                if (reverseShellState.blockedTerminals.has(terminalType)) {
                    if (terminalType === 'casual') {
                        addLine(terminal.outputElement, `Access denied. This terminal has been permanently blocked due to previous unauthorized access.`);
                    } else if (terminalType === 'furry') {
                        addLine(terminal.outputElement, `*angry beeping* ACCESS DENIED! You've been blocked for breaching my trust! >:(`);
                    }
                    return;
                }
                
                // Add command to output
                addLine(terminal.outputElement, `guest@${terminalType}:~$ ${commandLine}`);
                
                // Process command
                if (command in terminal.commands) {
                    const output = await terminal.commands[command](args.join(' '));
                    if (output) addLine(terminal.outputElement, output);
                } else {
                    addLine(terminal.outputElement, terminal.notFoundMessage(command), true);
                }
            }
        });

        // Handle command history
        input.addEventListener('keydown', function(e) {
            const terminalType = this.getAttribute('data-terminal');
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (commandHistory[terminalType].position > 0) {
                    commandHistory[terminalType].position--;
                    this.value = commandHistory[terminalType].history[commandHistory[terminalType].position];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (commandHistory[terminalType].position < commandHistory[terminalType].history.length - 1) {
                    commandHistory[terminalType].position++;
                    this.value = commandHistory[terminalType].history[commandHistory[terminalType].position];
                } else {
                    commandHistory[terminalType].position = commandHistory[terminalType].history.length;
                    this.value = '';
                }
            }
        });
    });
});

function addLine(outputElement, text, isError = false) {
    const line = document.createElement('div');
    line.className = 'line' + (isError ? ' error' : '');
    line.textContent = text;
    outputElement.appendChild(line);
}

// Mobile keyboard handling
function initMobileKeyboard() {
    const mobileKeyboard = document.querySelector('.mobile-keyboard');
    const suggestions = document.querySelector('.command-suggestions');
    const activeTerminal = document.querySelector('.terminal.active');
    
    if (!mobileKeyboard || !activeTerminal) return;

    const input = activeTerminal.querySelector('.terminal-input');
    let currentInput = '';

    // Common commands for suggestions
    const commonCommands = [
        'help', 'clear', 'ls', 'pwd', 'cd', 'chat',
        'img DA "', 'img E9 "', 'img FA "',
        'youtube "', 'about', 'date'
    ];

    function updateInput(value) {
        currentInput = value;
        input.value = currentInput;
        input.focus();
        
        // Update suggestions
        const matchingCommands = commonCommands.filter(cmd => 
            cmd.toLowerCase().startsWith(currentInput.toLowerCase())
        );

        if (matchingCommands.length > 0 && currentInput.length > 0) {
            suggestions.style.display = 'block';
            suggestions.innerHTML = matchingCommands
                .map(cmd => `<span class="suggestion">${cmd}</span>`)
                .join('');
        } else {
            suggestions.style.display = 'none';
        }
    }

    // Handle key presses
    mobileKeyboard.addEventListener('click', (e) => {
        if (e.target.classList.contains('key')) {
            const key = e.target.textContent;
            
            switch(key) {
                case 'Space':
                    updateInput(currentInput + ' ');
                    break;
                case 'Enter':
                    if (currentInput.trim()) {
                        const event = new KeyboardEvent('keydown', { key: 'Enter' });
                        input.dispatchEvent(event);
                        currentInput = '';
                    }
                    break;
                default:
                    updateInput(currentInput + key);
            }
        }
    });

    // Handle suggestions
    suggestions.addEventListener('click', (e) => {
        if (e.target.classList.contains('suggestion')) {
            updateInput(e.target.textContent);
        }
    });

    // Handle input changes from physical keyboard
    input.addEventListener('input', (e) => {
        currentInput = e.target.value;
        updateInput(currentInput);
    });

    // Handle terminal switching
    document.querySelectorAll('.terminal-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            setTimeout(() => {
                const newActiveTerminal = document.querySelector('.terminal.active');
                if (newActiveTerminal) {
                    input = newActiveTerminal.querySelector('.terminal-input');
                    currentInput = input.value;
                }
            }, 0);
        });
    });
}
