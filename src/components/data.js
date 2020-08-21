//<b> for subheaders, goto keywords.js to add hyperlinks
/* TEMPLATE
"route": {
    title: "NAME",
  text: [
    [
      ""
    ]
  ],
  videos: [
    ""
  ]
},
*/

export const data = {
  "walk": {
      title: "Walking",
    text: [
      [
        "Walking is performed by holding left or right while on the ground.",
        "Allows Madeline to reach a maximum of 90 speed (pixels/second)."
      ]
    ],
    videos: [
      "https://youtu.be/TxNsSnKEX8Y"
    ]
  },
  "jump": {
      title: "Jumping",
    text: [
      [
        "Madeline can jump by pressing the designated jump button, on the ground or against a wall. " +
        "Any jump can go higher by holding jump once Madeline is airborne. " +
        "Performing a grounded jump while holding left or right gives a horizontal speed boost of +40 " +
        "in that direction."
      ],
      [
        "<b>Types of Jumps:",
        "Jumping against a wall (aka wall jump) can result in one of several outcomes depending on what inputs are held:",
        "1. Holding climb (direction is irrelevant): ",
        "Climb jump",
        "2. Holding in/away from the wall: ",
        "Full wall jump",
        "3. Holding nothing or up/down",
        "Neutral wall jump",
        "The climb jump sends you straight up along the wall. When done against the top edge of a corner while " +
        "holding in towards the corner, a horizontal boost of +40 is given, which is what allows for corner boosting.",
        "The full wall jump gives more horizontal speed away from the wall than the neutral wall jump. Full wall jumps and " +
        "neutral wall jump can be differentiated by the direction Madeline faces when the jump is performed",
        "A full wall jump faces Madeline away from the wall",
        "A neutral wall jump faces Madeline towards the wall"
      ]
    ],
    videos: [
      "https://youtu.be/RrGTnuyvjmQ"
    ]
  },
  "dash": {
      title: "Dashing",
    text: [
      [
        "The dash quickly sends Madeline in one of 8 directions.",
        "Dashing is performed by pressing the designated dash button and can be done while grounded or aerial.",
        "The dash lasts 14 frames. The first 4 frames are freeze frames (also freezes the entire stage and " +
        "in game timer for 3 frames.) Dashing can be canceled by jumping if Madeline is grounded at the time " +
        "of the jump, resulting in a super dash or a hyper dash.",
        "After dashing, Madeline loses her dashable state (indicated by her blue hair) and does not regain " +
        "her dash until she becomes grounded or gets a dash refill.",
        "recovery time",
        "Dashes can be both extended and reversed."
      ],
      [
        "<b>Speed ",
        "During the last 10 frames of non-diagonal dashes, Madeline has 240 absolute speed." +
        "dashes",
        "This is not the case, however, for ", "",
        "<b>Misc",
        "crouched dash grounded or aerial -> demodash",
        "", "", "", ""

      ]
    ],
    //
    videos: [
      "https://www.youtube.com/watch?v=9jHwwJgSTR4"
    ]
  },
  "grab": {
      title: "Grabbing",
    text: [
      [
        "Grabbing is done by holding the designated grab key when Madeline is against a wall and either facing the wall or " +
        "holding towards the wall. ",
        "This gives Madeline the ability to scale up and down walls when holding up or down, as well as the ability to climb jump. " +
        "Similar to other jumps, the height of the climb jump is based on how long the player holds jump, and there is no cooldown " +
        "for being able to jump again."
      ],
      [
        "<b>Stamina",
        "Madeline has an initial stamina count of 110, which decreases when she stands still on a wall, and decreases faster when she " +
        "is climbing upwards. Each climb jump decreases stamina by 27.5, meaning she can perform a maximum of four climb jumps.",
        "Wall jumping away from the wall and climbing downwards do not deplete stamina.",
        "Once Madeline's stamina reaches 20, she begins blinking red. While her stamina is still above 0, she can still hold on to " +
        "the wall she was already on, climb jump, and activate blocks. When her stamina hits 0, she can only activate blocks.",
        "At any point while Madeline is flashing red, she can collect crystals which will refill her stamina, even if she still has her dash." +
        "Madeline also refills her stamina when she lands."
      ],
      [
        "More info"
      ]
    ],
    //1. hold the wall, climb up/climb down, climb jump with variable heights
    //2. climb up until no stamina, climb jump 4 times til no stamina, collect dash crystal to refill, land to refill
    videos: [
      ""
    ]
  },
  "super": {
      title: "Super dash",
    text: [
      [
        "The super dash is performed by jumping out a horizontal dash while on the ground.",
        "The dash does not need to begin on the ground for a super to be performed, only the jump needs to be grounded.",
        "Gives the player 260 speed and full jump height."
      ]
    ],
    videos: [
      "https://www.youtube.com/watch?v=qq0RXbhtFFs"
    ]
  },
  "hyper": {
    title: "Hyper dash",
    text: [
      [
        "The hyper dash is performed by jumping out of a down diagonal dash while on the ground.",
        "Similar to a super, the dash doesn't need to start on the ground, only the jump needs to be grounded.",
        "Gives the player 325 speed and about half the height of a full jump."
      ],
      [
        "Hyper dashes can be extended by jumping between frames 10 and 14 of the dash. This causes Madeline to regain her dash as soon as she is in the air.",
        "Extending hyper dashes is often easier out of reversals and wave dashes because of the more lenient flat ground requirements."
      ]
    ],
    videos: [
      "https://www.youtube.com/watch?v=ksZh-FHuKpk",
      "https://www.youtube.com/watch?v=7JpjEdULNbA"
    ]
  },
  "wavedash": {
    title: "Wave dash",
    text: [
      [
        "A wave dash, very simply, is a hyperdash that starts in the air.",
        "Often times, wave dashes are done with down diagonal dashes, but they can also be done with horizontal " +
        "dashes by using the demodash."
      ]
    ],
    videos: [
      ""
    ]
  },
  "extension": {
    title: "Extension",
    text: [
      [
        "Both super dashes and hyper dashes are able to be extended, which gives Madeline her dash " +
        "back as soon as she begins the dash. This is possible because the dash gives Madeline her dash back " +
        "if she is grounded 10 frames after the beginning of the dash and jumping out of the dash results in a super/hyper " +
        "until the 14th frame. This provides a 4 frame window at the end of the dash for extension."
      ],
      [
        "visual cue: hair color",
        "cant dash immediately even though she gets dash state back because of the 15 frame dash cooldown",
        "This means if Madeline jumps on frame 10 of her hyper dash, she cannot dash again for 5 frames.",
        "Extended supers and hypers can also be reversed."
      ]
    ],
    videos: [
      "https://www.youtube.com/watch?v=h_lQ2tMgLVM"
    ]
  },
  "reversal": {
      title: "Reversal",
    text: [
      [
        "Super dashes and hyper dashes can be 'reversed,' meaning that the super/hyper sends Madeline " +
        "in the opposite direction of the original dash. This is done by holding the opposite direction " +
        "from the dash when jump is pressed.",
        "Ex. If dashing left, press and hold right before pressing jump to perform a reverse super to the " +
        "the right."
      ],
      [
        "Reverse supers and hypers can also be extended."
      ]
    ],
    videos: [
      "https://www.youtube.com/watch?v=h_lQ2tMgLVM"
    ]
  },
  "coyote": {
    title: "Coyote Frames",
    text: [
      [
        "Whenever Madeline falls or slides off of a grounded surface and becomes airborne, " +
        "she retains the ability to jump for 5 frames.",
        "These 5 frames also apply to dashes that slide off the sides of platforms, " +
        "allowing Madeline to seemingly hyper/super off of air."
      ],
      [
        "Madeline is also given coyote frames when she exits a dream block, which is what allows " +
        "her to jump out of them and dream hyper."
      ]
    ],
    videos: [
      "https://www.youtube.com/watch?v=h_lQ2tMgLVM"
    ]
  },
}
