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
      "https://www.youtube.com/watch?v=qq0RXbhtFFs"
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
      "https://www.youtube.com/watch?v=qq0RXbhtFFs"
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
  }
}
