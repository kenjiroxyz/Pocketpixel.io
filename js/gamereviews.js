
document.addEventListener('click', function(e) {
    const displayArea = document.getElementById('reviews-display-area');
    const cardsList = document.getElementById('cards-list');
    const trigger = e.target.closest('.review-trigger');

    
    
    if (trigger) {
        const gameID = trigger.getAttribute('data-game');
        history.pushState({ view: 'review' }, '', '#' + gameID);
        cardsList.style.display = 'none';
        displayArea.style.display = 'block'


        if (gameID === 'mlbb') {
            // Added the wrapper class 'full-review-active' here
            displayArea.innerHTML = `
    <div class="full-review-active">
        <div class="back-button-container">
            <button id="back-btn" class="pro-btn">← BACK</button>
        </div>

        <h2 class="review-title">Mobile Legends Review</h2>
        
        <div class="image-full">
            <img src="../pics/ml1.jpg" alt="Featured">
        </div>
        
        <p>Ten years ago, the idea of a "serious" MOBA on a phone was almost a joke, but <strong>Mobile Legends: Bang Bang</strong> didn't just join the conversation—it took over the room. After 11 years of hands-on experience, I can tell you that MLBB’s magic isn't in its complexity, but in its <strong>intensity</strong>. It strips away the slow, forty-minute slog of traditional PC MOBAs and replaces it with a high-octane 15-minute sprint where every second feels like a championship finale. From the moment you load into the Land of Dawn, the game demands total focus; the matchmaking is lightning-fast, and those high-skill plays—like a perfectly timed Gusion combo—feel incredibly rewarding.</p>

        <div class="image-split">
            <img src="../pics/mlskill.jpg" alt="Gameplay 1">
            <img src="../pics/ml3.jpg" alt="Gameplay 2">
        </div>

        <p>However, don't let the colorful graphics fool you. Underneath the hood is a tactical engine that rewards "X-factor" decision-making. In the current meta, the laning phase is a chess match of <strong>aggressive rotations</strong> and map control. If you aren't tracking the enemy Jungler’s position or timing your arrival at the Turtle, you’re essentially handing the enemy the keys to your base. It’s a game where "Epic" players rely on their hands, but "Mythical Glory" legends rely on their brains—understanding frame data, bush priority, and counter-building on the fly.</p>

        <div class="image-grid">
            <img src="../pics/mllobby.jpg" alt="Grid 1">
            <img src="../pics/mlimmo.jpg" alt="Grid 2">
            <img src="../pics/mlskin.jpg" alt="Grid 3">
        </div>

        <p>Whether you’re diving into a chaotic team fight or executing a stealthy "Lord" steal to win a losing game, MLBB offers a level of competitive satisfaction that is rare in the mobile world. It’s accessible enough to pick up during a lunch break, yet deep enough to spend years mastering. If you’re looking for a game that respects your time but challenges your tactical soul, this is the one. Just do yourself a favor: <strong>look at the mini-map.</strong></p>
    </div>
`;
        } else if (gameID === 'codm') {
            displayArea.innerHTML = `
    <div class="full-review-active">
        <div class="back-button-container">
            <button id="back-btn" class="pro-btn">← BACK</button>
        </div>

        <h2 class="review-title">Call of Duty: Mobile Review</h2>
        
        <div class="image-full">
            <img src="../pics/codmmain2.jpg" alt="Featured">
        </div>
        
        <p>Having tracked the evolution of handheld shooters for over a decade, I can confidently say CODM is the definitive benchmark for mobile FPS polish. The transition from console to mobile often loses the "feel" of the gunplay, but TiMi managed to translate the weight and recoil patterns of the franchise perfectly. For a veteran gamer, the satisfaction comes from the fluid movement—the ability to slide-cancel into a jump-shot or execute a perfect drop-shot is what separates the high-ELO players from the rest. It’s not just a mobile game; it’s a high-fidelity competitive engine that rewards the muscle memory you’ve built up over 11 years in the genre.</p>

        <div class="image-split">
            <img src="../pics/brcodm.jpg" alt="Gameplay 1">
            <img src="../pics/codmgameplay2.jpg" alt="Gameplay 2">
        </div>

        <p>The introduction of the Gunsmith system was a game-changer for theory-crafters like us. It moved the needle from simple "attachments" to a deep, technical stat-management simulator where every barrel length and stock choice impacts your ADS speed and lateral recoil. I’ve spent countless hours in the firing range testing bullet spread accuracy because, in a legendary-rank lobby, those marginal gains are the difference between winning a gunfight and heading to the spectator cam. The level of tactical depth offered here rivals any PC title, allowing you to tailor your loadout to be a hyper-aggressive entry fragger or a methodical, long-range anchor.</p>

        <div class="image-grid">
            <img src="../pics/codmleglb.jpg" alt="Grid 1">
            <img src="../pics/codmskin.jpg" alt="Grid 2">
            <img src="../pics/codmchristmas.jpg" alt="Grid 3">
        </div>

        <p>What keeps me coming back after all these years is the sheer variety of the competitive landscape. Whether it's the tactical intensity of Search and Destroy or the high-speed chaos of Hardpoint, the game demands constant adaptation to a shifting meta. The map pool, featuring legendary locales like Standoff and Raid, provides a masterclass in lane-based map design that rewards game sense and spawn-knowledge. For a seasoned pro, CODM isn't just about reflex; it’s about the mental chess of predicting rotations and knowing exactly when to pull out your Operator Skill to flip the momentum of a match.</p>
    </div>
`;
        }else if (gameID === 'valo') {
            displayArea.innerHTML = `
    <div class="full-review-active">
        <div class="back-button-container">
            <button id="back-btn" class="pro-btn">← BACK</button>
        </div>

        <h2 class="review-title">Valorant Review</h2>
        
        <div class="image-full">
            <img src="../pics/valogameplay.jpg" alt="Featured">
        </div>
        
        <p>After 11 years of grinding through various competitive shooters, I’ve seen many titles try to replicate the "one-tap" satisfaction of classic tactical FPS games, but Valorant is the one that actually evolved the formula. Riot Games hit the sweet spot by combining pixel-perfect gunplay with a diverse agent pool that adds a layer of "hero-shooter" strategy. From a veteran’s perspective, the "competitive integrity" here is top-tier; the 128-tick servers and aggressive anti-cheat measures ensure that when you land a flick with the Vandal, it’s because of your skill, not a netcode fluke. It’s a game where raw aim is a prerequisite, but your ability to adapt to a shifting meta is what actually keeps you in the high ranks.</p>

        <div class="image-split">
            <img src="../pics/valogameplay1.jpg" alt="Gameplay 1">
            <img src="../pics/valogameplay2.jpg" alt="Gameplay 2">
        </div>

        <p>What truly separates the casual players from the pros is the mastery of utility and "lineups." In the high-stakes environment of a 5v5 execute, simply having good crosshair placement isn't enough; you need to understand the physics of a Sova dart or the timing of an Omen blind to truly control the map. Having spent a decade analyzing game mechanics, I find the depth of agent synergies incredibly rewarding. Executing a perfect site take where smokes, flashes, and recon abilities are layered in sequence feels like conducting an orchestra. It’s a game of chess played at 144Hz, where knowing the internal cooldowns and ranges of your opponent's abilities is just as vital as your reaction time.</p>

        <div class="image-grid">
            <img src="../pics/valogrid1.jpg" alt="Grid 1">
            <img src="../pics/valogrid2.jpg" alt="Grid 2">
            <img src="../pics/valogrid3.jpg" alt="Grid 3">
        </div>

        <p>Beyond the mechanics, Valorant is a grueling test of mental fortitude and economy management. You aren't just playing for the round; you’re playing for the half, carefully managing your "Creds" to ensure your team has a fighting chance in the "buy rounds." After 11 years in the trenches, I appreciate how the game forces you to communicate and strategize under pressure. Whether it’s a 1v4 clutch or a desperate eco-round win, the adrenaline spike is genuine because every decision has a massive ripple effect on the match outcome. It’s the ultimate arena for competitive purists who want a game that rewards technical precision, tactical creativity, and a "never-say-die" mindset.</p>
    </div>
`;
        }else if (gameID === 'coc') {
            displayArea.innerHTML = `
    <div class="full-review-active">
        <div class="back-button-container">
            <button id="back-btn" class="pro-btn">← BACK</button>
        </div>

        <h2 class="review-title">Clash of Clans Review</h2>
        
        <div class="image-full">
            <img src="../pics/cocgameplay.jpg" alt="Featured">
        </div>
        
        <p>After 11 years in the gaming world, I’ve seen countless "base-builders" come and go, but Clash of Clans remains the immortal king of the genre. It’s a masterclass in long-term strategic planning, where progress isn't measured in hours, but in months and years of meticulous resource management. For a veteran player, the beauty of the game lies in its patience—it’s about the satisfaction of a perfectly timed upgrade path and the discipline required to keep your builders busy 24/7. It’s the ultimate "thinking man’s" game, proving that mobile gaming can have as much longevity as any traditional platform.</p>

        <div class="image-split">
            <img src="../pics/cocgameplay1.jpg" alt="Gameplay 1">
            <img src="../pics/cocgameplay2.jpg" alt="Gameplay 2">
        </div>

        <p>The true skill ceiling in COC isn't in building, but in the surgical execution of a 3-star attack. Having analyzed countless metas—from the early days of "Gowipe" to modern Queen Charges and Hybrid attacks—I know that high-level play is all about pathing and troop AI manipulation. Dropping a spell half a tile off can ruin an entire raid. For those of us who appreciate technical depth, the complexity of managing Hero abilities, Siege Machines, and the timing of a Grand Warden’s Eternal Tome is incredibly rewarding. It’s a game of inches where your ability to read a base's "dead zones" determines your success in Clan War Leagues.</p>

        <div class="image-grid">
            <img src="../pics/cocgrid1.jpg" alt="Grid 1">
            <img src="../pics/cocgrid2.jpg" alt="Grid 2">
            <img src="../pics/cocgrid3.jpg" alt="Grid 3">
        </div>

        <p>Beyond the solo grind, the Clan system is what gives this game its soul. Participating in high-level Clan Wars requires a level of coordination and leadership that you rarely find in other mobile titles. The "pro" experience here involves scouting bases, discussing strategies in Discord, and executing under the pressure of a 24-hour war clock. It’s a communal effort that rewards loyalty and collective growth. For a player with over a decade of experience, the evolution of the Clan Capital and the Home Village shows a commitment to depth that keeps the competitive fire burning, no matter how many years have passed.</p>
    </div>
`;
        }else if (gameID === 'minecraft') {
            displayArea.innerHTML = `
    <div class="full-review-active">
        <div class="back-button-container">
            <button id="back-btn" class="pro-btn">← BACK</button>
        </div>

        <h2 class="review-title">Minecraft Review</h2>
        
        <div class="image-full">
            <img src="../pics/minecraftgameplay.jpg" alt="Featured">
        </div>
        
        <p>Minecraft isn't just a game; it’s a canvas for technical creativity that has defined an entire generation of gaming. After 11 years, I still find myself in awe of its "emergent gameplay"—the idea that the developers give you the tools, and you create the experience. Whether you’re a survivalist braving the Nether or a creative genius building 1:1 scale replicas of cities, the game scales perfectly to your skill level. For a veteran gamer, the draw is the lack of a "ceiling." There is always a more efficient way to mine, a better way to build, and a deeper cave system to explore.</p>

        <div class="image-split">
            <img src="../pics/minecraftgameplay1.jpg" alt="Gameplay 1">
            <img src="../pics/minecraftgameplay2.jpg" alt="Gameplay 2">
        </div>

        <p>The real "pro" side of Minecraft is the Redstone circuitry. I’ve seen players build functional computers, automated sorting systems, and massive industrial farms using what is essentially a digital version of electrical engineering. Understanding the logic of ticks, observers, and pulse shorteners is a deep rabbit hole that rewards technical-minded players. For those who enjoy the "grind," there’s a unique satisfaction in optimizing a Mob farm to get the highest possible drop rate per hour. It’s a game that respects your intelligence and rewards you for mastering its hidden, complex systems.</p>

        <div class="image-grid">
            <img src="../pics/minecraftgrid1.jpg" alt="Grid 1">
            <img src="../pics/minecraftgrid2.jpg" alt="Grid 2">
            <img src="../pics/minecraftgrid3.jpg" alt="Grid 3">
        </div>

        <p>What makes Minecraft an "immortal" title is its ability to stay relevant through sheer community innovation. From the high-stakes parkour of "Speedrunning" to the complex social dynamics of SMPs (Survival Multiplayers), the game is constantly being reborn. As someone who has watched the industry shift toward restrictive, microtransaction-heavy models, Minecraft stands as a bastion of player-first design. It provides a "comfort" loop that never gets old because the world is literally whatever you have the vision to create. It’s the ultimate sandbox that remains as fresh today as it was a decade ago.</p>
    </div>
`;
        }else if (gameID === 'genshin') {
            displayArea.innerHTML = `
    <div class="full-review-active">
        <div class="back-button-container">
            <button id="back-btn" class="pro-btn">← BACK</button>
        </div>

        <h2 class="review-title">Genshin Impact Review</h2>
        
        <div class="image-full">
            <img src="../pics/genshingameplay.jpg" alt="Featured">
        </div>
        
        <p>Genshin Impact fundamentally changed the industry by proving that a true "AAA" open-world experience could exist on a mobile device. After 11 years of playing through various RPGs, the sheer scale of Teyvat remains one of the most impressive feats of world-building I’ve encountered. The transition between high-octane combat and serene exploration is seamless, creating a gameplay loop that is both relaxing and intensely demanding. For a veteran, the draw isn't just the visuals; it’s the commitment to a living, breathing world that expands every few months with new mechanics and lore.</p>

        <div class="image-split">
            <img src="../pics/genshingameplay1.jpg" alt="Gameplay 1">
            <img src="../pics/genshingameplay2.jpg" alt="Gameplay 2">
        </div>

        <p>On the surface, the combat looks simple, but the "Elemental Reaction" system is where the true technical depth lies. To maximize your DPS in the Spiral Abyss, you have to understand internal cooldowns (ICD), elemental gauges, and the precise frame-data of "swap-canceling." It’s a game that rewards mathematical optimization—building the perfect "National" or "Freeze" team requires a deep understanding of how different characters' abilities interact. For a pro gamer, the fun is in the "min-maxing," spending weeks perfecting artifact sub-stats to shave seconds off a boss fight.</p>

        <div class="image-grid">
            <img src="../pics/genshingrid1.jpg" alt="Grid 1">
            <img src="../pics/genshingrid2.jpg" alt="Grid 2">
            <img src="../pics/genshingrid4.jpg" alt="Grid 3">
        </div>

        <p>The production value here—from the orchestrated soundtracks to the intricate character designs—is top-tier. But what really cements its place in my rotation is the consistency of its content updates. It’s a "live service" game done right, offering a narrative depth that keeps you invested in the journey of the Traveler. Whether you’re solving complex puzzles in Inazuma or navigating the verticality of Sumeru, the game constantly challenges your spatial awareness and problem-solving skills. It’s a masterclass in modern ARPG design that respects the player's time by providing a world that feels truly worth exploring.</p>
    </div>
`;
        }else if (gameID === 'ff') {
            displayArea.innerHTML = `
    <div class="full-review-active">
        <div class="back-button-container">
            <button id="back-btn" class="pro-btn">← BACK</button>
        </div>

        <h2 class="review-title">Free Fire Review</h2>
        
        <div class="image-full">
            <img src="../pics/ffgameplay.jpg" alt="Featured">
        </div>
        
        <p>Free Fire carved out its own niche in the Battle Royale genre by prioritizing speed and accessibility without sacrificing competitive depth. Having played through the "slow-burn" era of early BR titles, I find the 10-minute match format incredibly refreshing. It’s a high-octane sprint from the moment you land until the final circle. For a veteran gamer, the challenge is the pace; you have to loot, rotate, and engage in a fraction of the time required by other titles. It rewards "twitch" reflexes and the ability to make split-second decisions under extreme pressure.</p>

        <div class="image-split">
            <img src="../pics/ffgameplay1.jpg" alt="Gameplay 1">
            <img src="../pics/ffgameplay2.jpg" alt="Gameplay 2">
        </div>

        <p>What makes Free Fire technically unique is the "Gloo Wall" mechanic and the character-based skill system. In most BRs, if you’re caught in the open, you’re dead; here, you can instantly create cover, turning a flat field into a tactical arena. Mastering the "Fast Gloo Wall" technique is a rite of passage for any pro player. When you combine that with character synergies—like Alok’s healing or Chrono’s shields—the game becomes a strategic hero-battler. You aren't just out-aiming your opponent; you’re out-clutching them by managing your cooldowns more efficiently than they do.</p>

        <div class="image-grid">
            <img src="../pics/ffgrid1.jpg" alt="Grid 1">
            <img src="../pics/ffgrid2.jpg" alt="Grid 2">
            <img src="../pics/ffgrid3.jpg" alt="Grid 3">
        </div>

        <p>There’s a reason this game dominates the mobile charts—it’s built for the grind. The ranking system is unforgiving, and climbing the ladder requires a deep understanding of map rotations and "hot-drop" management. For someone with 11 years of experience, the draw is the community and the sheer volume of combat. It’s an aggressive meta that favors "rusher" playstyles, making it the perfect arena for players who want to test their mechanical limits in constant, high-stakes gunfights. It’s proof that a game doesn't need to be "realistic" to be a top-tier competitive experience.</p>
    </div>
`;
        }else if (gameID === 'lol') {
            displayArea.innerHTML =`
    <div class="full-review-active">
        <div class="back-button-container">
            <button id="back-btn" class="pro-btn">← BACK</button>
        </div>

        <h2 class="review-title">League of Legends: Wild Rift Review</h2>
        
        <div class="image-full">
            <img src="../pics/lolgameplay.jpg" alt="Featured">
        </div>
        
        <p>Wild Rift is the "pro-gamer’s" mobile MOBA, successfully condensing the 40-minute intensity of League of Legends into a 15-minute mobile powerhouse. After 11 years of watching the genre evolve, I can say that Riot didn't just port the game—they rebuilt it for precision. The dual-stick controls are surprisingly deep, allowing for "insec" kicks on Lee Sin or frame-perfect kiting on Vayne that feels as responsive as a mouse and keyboard. It’s the most mechanically demanding MOBA on the market, requiring a high-level understanding of "wave management" and "priority" that most other mobile titles simplify.</p>

        <div class="image-split">
            <img src="../pics/lolgameplay1.jpg" alt="Gameplay 1">
            <img src="../pics/lolgameplay2.jpg" alt="Gameplay 2">
        </div>

        <p>What separates Wild Rift from its competitors is the emphasis on the "Macro" game. You can’t just rely on raw mechanics to win; you need to understand map pressure, objective timing, and the importance of "warding." The inclusion of active wards and the fog-of-war system makes the game a mental battle of information. For a veteran, the fun is in the "out-rotation"—knowing exactly when to leave your lane to help your jungler at the Scuttle Crab or when to trade a Dragon for a Rift Herald. It’s a game of inches where one small mistake in the "mid-game" can lead to a total collapse of your nexus.</p>

        <div class="image-grid">
            <img src="../pics/lolgrid1.jpg" alt="Grid 1">
            <img src="../pics/lolgrid2.jpg" alt="Grid 2">
            <img src="../pics/lolgrid3.jpg" alt="Grid 3">
        </div>

        <p>The ranking system in Wild Rift is a grueling climb that demands consistency and a diverse champion pool. To truly excel, you have to understand "itemization"—knowing when to build "Anti-heal" or when to pivot to a tanky build to survive an enemy assassin. The competitive integrity is top-tier, and the "Pro" scene is a testament to the game's high skill ceiling. For those of us who live for the "carry" moments, there is no better feeling than executing a perfect team-fight combo that results in an Ace. It is the definitive mobile arena for players who want a truly competitive, high-stakes experience.</p>
    </div>
`;
        }else if (gameID === 'solo') {
            displayArea.innerHTML = `
    <div class="full-review-active">
        <div class="back-button-container">
            <button id="back-btn" class="pro-btn">← BACK</button>
        </div>

        <h2 class="review-title">Solo Leveling Arise Review</h2>
        
        <div class="image-full">
            <img src="../pics/sologameplay1.jpg" alt="Featured">
        </div>
        
        <p>Solo Leveling: Arise successfully captures the "zero-to-hero" journey that made the original manhwa a global phenomenon. After a decade of playing action-heavy titles, the combat here feels exceptionally punchy and responsive. It’s a game built on the "Power Fantasy," where your progression feels tangible—every level-up and every new skill feels like a significant jump in lethality. For a veteran gamer, the satisfaction comes from the "Extreme Evasion" mechanic; hitting a perfect dodge to slow down time and unleash a counter-attack is a mechanic that rewards frame-perfect timing and pattern recognition.</p>

        <div class="image-split">
            <img src="../pics/sologameplay2.jpg" alt="Gameplay 1">
            <img src="../pics/sologameplay3.jpg" alt="Gameplay 2">
        </div>

        <p>The technical side of the game shines in its boss encounters and the "Shadow Extraction" system. You aren't just mindlessly tapping buttons; you have to manage your mana, time your QTE follow-ups, and strategically deploy your Hunters to break boss shields. The ability to "extract" fallen enemies to build your own army of shadows adds a layer of tactical management that stays true to the source material. For those who enjoy the "grind," optimizing your Jinwoo build with the right artifacts and weapon combinations is a deep and rewarding process that requires a pro-level understanding of stat scaling.</p>

        <div class="image-grid">
            <img src="../pics/sologrid1.jpg" alt="Grid 1">
            <img src="../pics/sologrid2.jpg" alt="Grid 2">
            <img src="../pics/sologrid3.jpg" alt="Grid 3">
        </div>

        <p>Visually, the game is a masterclass in cel-shaded animation, making you feel like you’re playing through the pages of the comic itself. The story-driven missions provide a structured progression that keeps the momentum high, while the "Gates" and "Instance Dungeons" offer a repeatable endgame for those who want to test their limits. As someone who appreciates high-fidelity production, I find the cinematic transitions and ultimate-move animations to be some of the best on the platform. It’s a fast-paced, stylish ARPG that proves licensed games can be mechanically deep and incredibly satisfying for veteran players.</p>
    </div>
`;
        }else if (gameID === 'slendrina') {
            displayArea.innerHTML = `
    <div class="full-review-active">
        <div class="back-button-container">
            <button id="back-btn" class="pro-btn">← BACK</button>
        </div>

        <h2 class="review-title">Slendrina Remake Review</h2>
        
        <div class="image-full">
            <img src="../pics/slengameplay.jpg" alt="Featured">
        </div>
        
        <p>Slendrina is a gritty reminder that effective horror doesn't need a massive budget or complex mechanics; it needs atmosphere and tension. Having played through the "indie-horror" boom of the early 2010s, I have a deep appreciation for this title’s ability to create genuine dread with a minimalist approach. The game relies on the psychological fear of the "unseen"—the constant threat of a jump-scare around every dark corner of the cellar. For a veteran gamer, the draw is the "fight or flight" response it triggers, testing your focus and nerves as you search for the keys to escape.</p>

        <div class="image-split">
            <img src="../pics/slengameplay1.jpg" alt="Gameplay 1">
            <img src="../pics/slengameplay2.jpg" alt="Gameplay 2">
        </div>

        <p>The technical genius of Slendrina lies in its environmental design. The tight, winding corridors and the limited field of vision create a sense of claustrophobia that never lets up. It’s a game about "spatial memory"—you have to map out the maze in your head while under the constant stress of being hunted. Unlike high-APM shooters, the "skill" here is in your composure. Can you stay calm enough to find the last item while the screen starts to flicker and the audio cues ramp up? It’s a masterclass in "less is more" design that remains a cult favorite for a reason./p>

        <div class="image-grid">
            <img src="../pics/slengrid1.jpg" alt="Grid 1">
            <img src="../pics/slengrid2.jpg" alt="Grid 2">
            <img src="../pics/slengrid3.jpg" alt="Grid 3">
        </div>

        <p>While it’s a massive departure from the high-octane competitive titles on this list, Slendrina holds a special place in the mobile gaming landscape. It represents the "indie" spirit—a game made by a developer who understands exactly how to manipulate player psychology. As someone who has seen the industry move toward bloated, "triple-A" horror titles, I find the simplicity of the "find the objects and get out" loop to be incredibly effective. It’s a quick, terrifying experience that proves that if you get the atmosphere right, the players will keep coming back for the thrill of the scare.</p>
    </div>
`;
        }
    }

    if (e.target.id === 'back-btn') {
        location.reload(); 
    }
});
// 1. Create the Lightbox elements dynamically via JS so you don't have to edit your HTML file
const lightbox = document.createElement('div');
lightbox.id = 'lightbox-overlay';
lightbox.style.cssText = `
    display: none;
    position: fixed;
    z-index: 9999;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.85);
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
lightbox.innerHTML = `<img src="" style="max-width: 90%; max-height: 80%; border-radius: 8px; box-shadow: 0 0 20px rgba(0,0,0,0.5);">`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('img');

// 2. Listen for clicks on the display area (where your MLBB review lives)
const displayArea = document.getElementById('reviews-display-area');

displayArea.addEventListener('click', function(e) {
    // If the user clicks an image inside the review
    if (e.target.tagName === 'IMG') {
        lightboxImg.src = e.target.src;
        lightbox.style.display = 'flex';
    }
});

// 3. Close the lightbox when clicking anywhere on the black background
lightbox.addEventListener('click', function() {
    lightbox.style.display = 'none';
});
// This fires whenever the user clicks the Browser's Back or Forward buttons

