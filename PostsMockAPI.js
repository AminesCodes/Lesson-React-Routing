const posts = [
  {
    id: "a234",
    title: "The Cell Phone - part1",
    content: `A couple of months ago, my friend’s cousin (a single mother) bought a
  new cell phone. After a long day of work, she came home, placed her
  phone on the counter, and went watch to TV; her son came to her and
  asked if he could play with her new phone. She told him not to call
  anyone or mess with text messages, and he agreed.`
  },
  {
    id: "a345",
    title: "The Cell Phone - part2",
    content: `At around 11:20, she was drowsy, so she decided to tuck her son in and
  go to bed. She walked to his room and saw that he wasn’t there. She
  then ran over to her room to find him sleeping on her bed with the
  phone in his hand.`
  },
  {
    id: "b234",
    title: "The Cell Phone - part3",
    content: `Relieved, she picked her phone back up from his hand to inspect it.
  Browsing through it, she noticed only minor changes such as a new
  background, banner, etc., but then she opened up her saved pictures.
  She began deleting the pictures he had taken, until only one new
  picture remained.`
  },
  {
    id: "cda2",
    title: "The Cell Phone - part4",
    content: `When she first saw it, she was in disbelief. It was her son sleeping
  on her bed, but the picture was taken by someone else above him... and
  it showed the left half of an elderly woman’s face.`
  }
];

const getAll = () => posts;

const getOne = id => posts.find(post => post.id === id);

export default {
  getOne,
  getAll
};
