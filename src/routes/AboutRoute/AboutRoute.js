import React from "react";
const intro_header_text = ["Hi there", "I'm Nick!"];
const three_dots = "three-dots-100.png"
const action_words = [
  { icon: "", val: "Innovative" },
  { icon: "", val: "Adaptive" },
  { icon: "", val: "Courageous" }
];
const bio_items = [
  { icon: "", val: ["Appalachian State University", "Bachelor of Computer Science", "Minor of Mathematics", "2017 - 2021"] },
  { icon: "", val: ["Some of my favorite artists are: B.B. King, Stevie Ray Vaughn, Vulfpeck, Beatles, Rush, Jimi Hendrix"] },
  { icon: "", val: ["If it's raining outside I might be playing video games: Forza, Halo, Phasmophobia, Overwatch, Age of Empires"] },
  { icon: "", val: ["Carpentry and woodworking is rad! I like to build furniture, guitars, theatre sets, and more."] }
];
const bio_title = "Nicholas Noonan";
function AboutRoute() {
  return (
    <div className="aboutroute">
      Coming soon...
      {/* <Intro /> */}
      {/* <Hobbies /> */}
      {/* <Biography /> */}
    </div>
  );
}

function Intro() {
  return (
    <div className="aboutroute-intro">
      <div className="block-container">
        <h1>{intro_header_text[0]}</h1>
        <img src={three_dots} />
        <h1>{intro_header_text[1]}</h1>
      </div>
    </div>
  )
}

function Hobbies() {
  let hobbies = ["snowboarding", "climbing", "hiking", "programming", "cooking", "videogames"];
  let hobbies_render = hobbies.map((hobby, i) => {
    return <div key={i} className="hobby-item">{hobby}</div>
  })
  return (
    <div className="aboutroute-hobbies">
      <div className="flex-container">
        {hobbies_render}
      </div>
    </div>
  );
}

function Biography() {
  let action_words_render = action_words.map((action_word, i) => {
    return (
      <div key={i} className="inline-container">
        <img src={action_word.icon} />
        <h2>{action_word.val}</h2>
      </div>
    );
  });
  let bio_items_render = bio_items.map((bio_item, i) => {
    return (
      <div key={i} className="inline-container">
        <img src={bio_item.icon}/>
        <p1>{bio_item.val}</p1>
      </div>
    )
  })
  return (
    <div className="aboutroute-biography">
      <div className="flex-container">
        <div className="headshot-container block-container">
          <img />
          {action_words_render}
        </div>
        <div className="block-container">
          <h2>{bio_title}</h2>
          {bio_items_render}
        </div>
      </div>
    </div>
  )
}

export default AboutRoute;