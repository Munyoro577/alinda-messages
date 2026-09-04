// ===== Alinda Messages — Message Database =====
// Built by Alinda Creation Hub

const messages = [
  // ===== Good Morning =====
  { cat: "morning", text: "Every sunrise is a new page in your story. Make today's chapter unforgettable." },
  { cat: "morning", text: "Good morning! May your coffee be strong and your day be brighter than the sun." },
  { cat: "morning", text: "Rise and shine! Today is a fresh start waiting for you to make it amazing." },
  { cat: "morning", text: "The sun rose again just to see you smile. Good morning!" },
  { cat: "morning", text: "Wake up with determination, go to bed with satisfaction. Good morning!" },
  { cat: "morning", text: "Small steps every day lead to big changes. Keep going, you're growing." },
  { cat: "morning", text: "Good morning! Remember: the early bird gets the worm, but the second mouse gets the cheese." },
  { cat: "morning", text: "Morning fuel: coffee + dreams. Let's conquer the day!" },
  { cat: "morning", text: "Good morning! I hope your coffee is stronger than your desire to go back to bed." },
  { cat: "morning", text: "Be the energy you want to attract. Radiate positivity today." },
  { cat: "morning", text: "Good morning, my love. Waking up thinking of you is the best part of my day." },
  { cat: "morning", text: "New day, new beginnings. Breathe, smile, and begin again." },

  // ===== Good Night =====
  { cat: "night", text: "Good night! May your dreams be sweeter than your reality and your rest be deep." },
  { cat: "night", text: "Close your eyes, let go of today, and trust that tomorrow holds something beautiful." },
  { cat: "night", text: "The day is done. Rest now, for tomorrow is another chance to shine. Good night!" },
  { cat: "night", text: "Good night! Sleep well and dream big — the world needs your light tomorrow." },
  { cat: "night", text: "Stars are just the universe's way of saying good night. Sweet dreams." },
  { cat: "night", text: "Let go of what you can't control. Rest your mind. Good night, peaceful soul." },
  { cat: "night", text: "Good night! May your blanket be warm and your dreams be wild." },
  { cat: "night", text: "Sleep is the best meditation. Rest well and wake up ready to conquer." },
  { cat: "night", text: "The night is a canvas for your dreams. Paint something beautiful. Good night!" },
  { cat: "night", text: "Good night, sleep tight. Don't let the bedbugs bite — and if they do, hit them with a shoe!" },

  // ===== Birthday =====
  { cat: "birthday", text: "Happy Birthday! May this year bring you more joy, growth, and reasons to smile than ever before." },
  { cat: "birthday", text: "Another year wiser, another year bolder. Happy Birthday — the best is yet to come!" },
  { cat: "birthday", text: "Happy Birthday! The world got a little brighter the day you arrived. Never stop shining." },
  { cat: "birthday", text: "On your special day, remember: you're not aging, you're leveling up. Happy Birthday!" },
  { cat: "birthday", text: "Happy Birthday! May your cake be sweet, your gifts be many, and your year be extraordinary." },
  { cat: "birthday", text: "Cheers to another trip around the sun! Happy Birthday — make it count." },
  { cat: "birthday", text: "Happy Birthday! Don't count the candles, count the memories. Here's to many more." },
  { cat: "birthday", text: "Growing old is mandatory, growing up is optional. Happy Birthday — stay young at heart!" },
  { cat: "birthday", text: "Happy Birthday! Today the world celebrates YOU. Enjoy every moment." },
  { cat: "birthday", text: "Wishing you a birthday filled with laughter, love, and all your favorite things." },

  // ===== Love & Romance =====
  { cat: "love", text: "In a world full of temporary things, you are a perpetual feeling. I love you." },
  { cat: "love", text: "You are my favorite notification, my favorite thought, and my favorite person." },
  { cat: "love", text: "I love you not just for who you are, but for who I become when I'm with you." },
  { cat: "love", text: "Every love story is beautiful, but ours is my favorite. Thank you for being mine." },
  { cat: "love", text: "If I had to choose between loving you and breathing, I'd use my last breath to say I love you." },
  { cat: "love", text: "You are the song my heart sings and the peace my soul craves." },
  { cat: "love", text: "Distance means so little when someone means so much. I love you, always." },
  { cat: "love", text: "I didn't fall in love with you. I walked into it, eyes open, choosing you every single day." },
  { cat: "love", text: "You are my today and all of my tomorrows." },
  { cat: "love", text: "My heart has found its home, and it's right next to yours." },

  // ===== Friendship =====
  { cat: "friendship", text: "A true friend is someone who thinks you're a good egg even though you're slightly cracked." },
  { cat: "friendship", text: "Friends are the family you choose. Grateful every day that I chose you." },
  { cat: "friendship", text: "Good friends are like stars — you don't always see them, but they're always there." },
  { cat: "friendship", text: "A best friend is the one who brings out the best in you and the worst in your jokes." },
  { cat: "friendship", text: "Friendship isn't about who you've known the longest, it's about who came and never left." },
  { cat: "friendship", text: "Side by side or miles apart, real friends are always close to the heart." },
  { cat: "friendship", text: "You don't need a certain number of friends, just a number of friends you can be certain of." },
  { cat: "friendship", text: "A friend is someone who knows all about you and still loves you." },
  { cat: "friendship", text: "Walking with a friend in the dark is better than walking alone in the light." },
  { cat: "friendship", text: "Friends are the people who make you laugh a little louder, smile a little brighter, and live a little better." },

  // ===== Motivational =====
  { cat: "motivational", text: "Your only limit is the one you set in your mind. Break through today." },
  { cat: "motivational", text: "Don't watch the clock; do what it does — keep going." },
  { cat: "motivational", text: "Success is not final, failure is not fatal: it is the courage to continue that counts." },
  { cat: "motivational", text: "The world is waiting for what only you can offer. Don't hold back." },
  { cat: "motivational", text: "Focus on the step in front of you, not the whole staircase." },
  { cat: "motivational", text: "You don't have to be great to start, but you have to start to be great." },
  { cat: "motivational", text: "The harder you work for something, the greater you'll feel when you achieve it." },
  { cat: "motivational", text: "Push yourself, because no one else is going to do it for you." },
  { cat: "motivational", text: "Dream it. Wish it. Do it. The gap between dreaming and doing is action." },
  { cat: "motivational", text: "Great things never come from comfort zones. Step out and claim what's yours." },
  { cat: "motivational", text: "Today is a gift — that's why they call it the present. Use it wisely." },
  { cat: "motivational", text: "Believe you can and you're halfway there." },

  // ===== Apology =====
  { cat: "apology", text: "I'm truly sorry. My actions were wrong, and I take full responsibility. I'll do better." },
  { cat: "apology", text: "I apologize for hurting you. It was never my intention. Please forgive me." },
  { cat: "apology", text: "I was wrong, and I'm sorry. Our relationship means more to me than my pride." },
  { cat: "apology", text: "I'm sorry for the pain I caused. I'm working on being better for you and for me." },
  { cat: "apology", text: "Sorry isn't just a word — it's a promise to change. I mean it, and I will." },
  { cat: "apology", text: "I apologize. I let my emotions take over, and that's not an excuse. I'll do better." },
  { cat: "apology", text: "I'm sorry for not listening. You deserved better, and I'll be better." },
  { cat: "apology", text: "Please forgive me. I value what we have more than my ego. I'm truly sorry." },

  // ===== Congratulations =====
  { cat: "congrats", text: "Congratulations! Your hard work has finally paid off. This is just the beginning." },
  { cat: "congrats", text: "You did it! So proud of you and everything you've accomplished. Congratulations!" },
  { cat: "congrats", text: "Congratulations on your achievement! The world is lucky to have your talent in it." },
  { cat: "congrats", text: "Well done! Success looks good on you. Keep soaring — the sky is the limit." },
  { cat: "congrats", text: "Congratulations! You earned this moment through dedication and grit. Enjoy it!" },
  { cat: "congrats", text: "Heartiest congratulations! This milestone is just a stepping stone to greatness." },
  { cat: "congrats", text: "You crushed it! Congratulations on reaching a goal most only dream of." },
  { cat: "congrats", text: "Congratulations! Today's achievement is tomorrow's motivation. Onward and upward!" },

  // ===== Sympathy =====
  { cat: "sympathy", text: "I'm deeply sorry for your loss. May cherished memories bring you comfort in this difficult time." },
  { cat: "sympathy", text: "Sending you love and strength. You're not alone — I'm here for you, always." },
  { cat: "sympathy", text: "Words can't express how sorry I am. Please know you're in my thoughts and prayers." },
  { cat: "sympathy", text: "May you find peace and comfort in the love of those around you. So sorry for your loss." },
  { cat: "sympathy", text: "I can't imagine what you're going through, but I'm here whenever you need me." },
  { cat: "sympathy", text: "Sending heartfelt condolences. May time heal your pain and memories warm your heart." },

  // ===== Thank You =====
  { cat: "thanks", text: "Thank you! Your kindness made a bigger difference than you'll ever know." },
  { cat: "thanks", text: "I'm so grateful for you. Thank you for always showing up when it matters most." },
  { cat: "thanks", text: "Thank you for your support. It means the world to me, and so do you." },
  { cat: "thanks", text: "Words fall short, but my gratitude doesn't: thank you, from the bottom of my heart." },
  { cat: "thanks", text: "Thank you for believing in me even when I didn't believe in myself." },
  { cat: "thanks", text: "You showed up when it counted. Thank you for being the person I can always count on." },
  { cat: "thanks", text: "Thank you for your generosity. It touched my heart more than words can say." },

  // ===== Get Well =====
  { cat: "getwell", text: "Wishing you a speedy recovery! Take it easy, rest up, and come back stronger." },
  { cat: "getwell", text: "Get well soon! Your strength inspires everyone around you. Sending healing vibes." },
  { cat: "getwell", text: "Rest, recover, and remember: your health comes first. Get well soon!" },
  { cat: "getwell", text: "Sending you warm wishes for a fast recovery. Take care of yourself — we miss you!" },
  { cat: "getwell", text: "Healing takes time. Be patient with yourself. Get well soon!" },
  { cat: "getwell", text: "Every day you're getting a little stronger. Keep resting, keep healing. Get well soon!" },

  // ===== Anniversary =====
  { cat: "anniversary", text: "Happy Anniversary! Here's to the love you share and the years ahead. Cheers to forever." },
  { cat: "anniversary", text: "Another year, another chapter in your beautiful love story. Happy Anniversary!" },
  { cat: "anniversary", text: "Happy Anniversary! May your love grow deeper with each passing year." },
  { cat: "anniversary", text: "Years pass, but true love only grows stronger. Happy Anniversary to a beautiful couple!" },
  { cat: "anniversary", text: "Happy Anniversary! Your love story is an inspiration to everyone who knows you." },
  { cat: "anniversary", text: "Cheers to the love that started it all. Happy Anniversary — here's to many more!" },

  // ===== New Baby =====
  { cat: "baby", text: "Congratulations on your little bundle of joy! May parenthood bring you endless happiness." },
  { cat: "baby", text: "Welcome to the world, little one! Congratulations to the proud new parents." },
  { cat: "baby", text: "A new star has arrived! So happy for you and your growing family. Congratulations!" },
  { cat: "baby", text: "Congratulations on your beautiful new baby! The best adventure of your life starts now." },
  { cat: "baby", text: "Tiny hands, tiny feet, a giant new love. Congratulations on your precious arrival!" },

  // ===== Graduation =====
  { cat: "graduation", text: "Congratulations, graduate! The world is waiting for your brilliance. Go make your mark." },
  { cat: "graduation", text: "You turned the tassel — now turn the page. Happy Graduation! The best is yet to come." },
  { cat: "graduation", text: "Graduation isn't the end; it's the beginning of everything. Congratulations!" },
  { cat: "graduation", text: "Your degree is proof of your dedication. Now go show the world what you're made of." },
  { cat: "graduation", text: "Caps off to you, graduate! Dream big, work hard, and never stop learning." },

  // ===== Encouragement =====
  { cat: "encouragement", text: "You've survived 100% of your bad days. You've got this one too." },
  { cat: "encouragement", text: "It's okay to not be okay. Just don't give up. Tomorrow is a fresh start." },
  { cat: "encouragement", text: "You are stronger than you think, braver than you believe, and more capable than you know." },
  { cat: "encouragement", text: "Even the darkest night ends with sunrise. Hold on — your light is coming." },
  { cat: "encouragement", text: "You don't have to have it all figured out. Just take the next step. That's enough." },
  { cat: "encouragement", text: "Be proud of how far you've come. You're doing better than you think." },
  { cat: "encouragement", text: "Storms don't last forever. You will get through this. I believe in you." },
  { cat: "encouragement", text: "Progress, not perfection. Every small step forward counts. Keep going." },

  // ===== Holidays / Festive =====
  { cat: "holiday", text: "Merry Christmas! May your home be filled with joy, warmth, and the love of family." },
  { cat: "holiday", text: "Happy New Year! Here's to new beginnings, bold dreams, and a year that exceeds all expectations." },
  { cat: "holiday", text: "Happy Diwali! May the festival of lights bring brightness, prosperity, and happiness to your life." },
  { cat: "holiday", text: "Eid Mubarak! May this special day bring peace, happiness, and prosperity to you and your family." },
  { cat: "holiday", text: "Happy Easter! Wishing you a day filled with hope, renewal, and joy." },
  { cat: "holiday", text: "Happy Holi! May your life be as colorful and vibrant as the festival of colors." },
  { cat: "holiday", text: "Happy Thanksgiving! Grateful for you today and every day." },
  { cat: "holiday", text: "Happy Valentine's Day! You make the world a little brighter just by being in it." },

  // ===== Inspirational Quotes =====
  { cat: "inspirational", text: "The only way to do great work is to love what you do. If you haven't found it, keep looking." },
  { cat: "inspirational", text: "Be the change you wish to see in the world." },
  { cat: "inspirational", text: "In the middle of every difficulty lies opportunity." },
  { cat: "inspirational", text: "The best time to plant a tree was 20 years ago. The second best time is now." },
  { cat: "inspirational", text: "Your time is limited, so don't waste it living someone else's life." },
  { cat: "inspirational", text: "The future belongs to those who believe in the beauty of their dreams." },
  { cat: "inspirational", text: "What you get by achieving your goals is not as important as what you become by achieving them." },
  { cat: "inspirational", text: "Fall seven times, stand up eight." },

  // ===== Short & Sweet =====
  { cat: "short", text: "You've got this." },
  { cat: "short", text: "Shine bright today." },
  { cat: "short", text: "Today's your lucky day." },
  { cat: "short", text: "Breathe. Smile. Begin." },
  { cat: "short", text: "You matter." },
  { cat: "short", text: "Stay awesome." },
  { cat: "short", text: "Keep smiling." },
  { cat: "short", text: "Dream big." },
  { cat: "short", text: "Be kind. Always." },
  { cat: "short", text: "You are enough." },

  // ===== Funny / Humor =====
  { cat: "funny", text: "I'm not lazy, I'm on energy-saving mode." },
  { cat: "funny", text: "I told my computer I needed a break, and now it won't stop showing me KitKats." },
  { cat: "funny", text: "Common sense is like deodorant — the people who need it most never use it." },
  { cat: "funny", text: "I'm not arguing, I'm just explaining why I'm right." },
  { cat: "funny", text: "I can't believe I got fired from the calendar factory. All I did was take a day off." },
  { cat: "funny", text: "My bed and I love each other, but my alarm clock doesn't approve of the relationship." },
  { cat: "funny", text: "I'm on a whiskey diet. I've lost three days already." },
  { cat: "funny", text: "Why don't skeletons fight each other? They don't have the guts." },
  { cat: "funny", text: "I tried to be normal once. Worst two minutes of my life." },
  { cat: "funny", text: "Behind every great person is a substantial amount of coffee." },

  // ===== Romantic =====
  { cat: "romantic", text: "Every morning is beautiful because it begins with the thought of you." },
  { cat: "romantic", text: "You are my sunshine on the cloudiest of days. Good morning, sweetheart." },
  { cat: "romantic", text: "The sun rises so the world can see how brightly you glow." },
  { cat: "romantic", text: "I dreamt of you all night, and now I get to think of you all day. Lucky me." },
  { cat: "romantic", text: "My mornings start with coffee, but my heart starts with you." },
  { cat: "romantic", text: "No matter how far apart we are, you're always my first thought." },
  { cat: "romantic", text: "The sunrise may be golden, but it's nothing compared to you." },
  { cat: "romantic", text: "Good morning to the person who makes every day feel like a love song." },

  // ===== Condolence =====
  { cat: "condolence", text: "My deepest condolences. May the soul rest in peace and the family find strength." },
  { cat: "condolence", text: "Words cannot comfort enough, but please know you're not alone in your grief." },
  { cat: "condolence", text: "Gone but never forgotten. My heartfelt condolences to you and your family." },
  { cat: "condolence", text: "May the love of those around you bring comfort and peace during this painful time." },

  // ===== Wedding =====
  { cat: "wedding", text: "Congratulations on your wedding! May your journey together be filled with love, laughter, and happily ever after." },
  { cat: "wedding", text: "Two hearts, one love, a lifetime of happiness. Happy wedding day!" },
  { cat: "wedding", text: "May your marriage be as beautiful as your wedding day. Congratulations to the happy couple!" },
  { cat: "wedding", text: "Today two families become one. Wishing you a lifetime of love and togetherness." },
  { cat: "wedding", text: "Congratulations! May your love story be the kind they write books about." },

  // ===== New Job =====
  { cat: "newjob", text: "Congratulations on the new job! They're lucky to have you. Go crush it!" },
  { cat: "newjob", text: "New job, new challenges, new victories. You're going to be amazing. Congratulations!" },
  { cat: "newjob", text: "They hired the best person for the job — you. Congratulations and best of luck!" },
  { cat: "newjob", text: "Your talent and hard work got you here. The sky's the limit. Congratulations!" },

  // ===== Retirement =====
  { cat: "retirement", text: "Happy retirement! You've earned every moment of rest. Enjoy this beautiful new chapter." },
  { cat: "retirement", text: "No more alarms, no more commutes — just freedom. Happy retirement!" },
  { cat: "retirement", text: "Congratulations on your retirement! May your days ahead be filled with joy and adventure." },

  // ===== Religious / Spiritual =====
  { cat: "spiritual", text: "May God's light guide your path and His peace fill your heart today." },
  { cat: "spiritual", text: "Trust in the Lord with all your heart, and lean not on your own understanding." },
  { cat: "spiritual", text: "When you pray, believe you receive, and you shall have it." },
  { cat: "spiritual", text: "May the peace that surpasses all understanding guard your heart and mind today." },
  { cat: "spiritual", text: "Every good and perfect gift comes from above. Be grateful, be joyful, be blessed." }
];

const categories = [
  { id: "morning",       label: "Good Morning",   emoji: "🌅" },
  { id: "night",         label: "Good Night",     emoji: "🌙" },
  { id: "birthday",      label: "Birthday",       emoji: "🎂" },
  { id: "love",          label: "Love",           emoji: "❤️" },
  { id: "friendship",    label: "Friendship",     emoji: "🤝" },
  { id: "motivational",  label: "Motivational",   emoji: "🔥" },
  { id: "apology",       label: "Apology",        emoji: "🙏" },
  { id: "congrats",      label: "Congratulations",emoji: "🎉" },
  { id: "sympathy",      label: "Sympathy",       emoji: "🤍" },
  { id: "thanks",        label: "Thank You",      emoji: "💐" },
  { id: "getwell",       label: "Get Well",       emoji: "🩹" },
  { id: "anniversary",   label: "Anniversary",    emoji: "💍" },
  { id: "baby",          label: "New Baby",       emoji: "👶" },
  { id: "graduation",    label: "Graduation",     emoji: "🎓" },
  { id: "encouragement", label: "Encouragement",  emoji: "💪" },
  { id: "holiday",       label: "Holidays",       emoji: "🎄" },
  { id: "inspirational", label: "Inspirational",  emoji: "✨" },
  { id: "short",         label: "Short & Sweet",  emoji: "⚡" },
  { id: "funny",         label: "Funny",          emoji: "😂" },
  { id: "romantic",      label: "Romantic",       emoji: "💖" },
  { id: "condolence",    label: "Condolences",    emoji: "🕊️" },
  { id: "wedding",       label: "Wedding",         emoji: "💒" },
  { id: "newjob",        label: "New Job",         emoji: "💼" },
  { id: "retirement",    label: "Retirement",      emoji: "🏖️" },
  { id: "spiritual",     label: "Spiritual",       emoji: "🕊️" }
];

const catMeta = {};
categories.forEach(c => { catMeta[c.id] = c; });

if (typeof window !== 'undefined') {
  window.AM_DATA = { messages, categories, catMeta };
}
