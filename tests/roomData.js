let lastUsedRoom = 'Heathlands.Medical';

const rooms = [
  {
    room: 'Manchester Pub',
    id: 'kSrcg7LYgbtyBio5AAAB',
    nsp: 'enduringNet',
  },
  {
    room: 'Heathlands Medical',
    id: 'd6QoVa_JZxnM_0BoAAAA',
    nsp: 'enduringNet',
  },
  { room: 'Heathlands Cafe', id: 'e1suC3Rdpj_1PuR3AAAB', nsp: 'enduringNet' },
  { room: 'ABMS Medical', id: 'OUeNKcyWGGgX6fMWAAAC', nsp: 'enduringNet' },
];

// optional arg to limit choices
function pickRoom(rooms) {
  const idx = Math.floor(Math.random() * rooms.length);
  lastUsedRoom = rooms[idx];
  return lastUsedRoom;
}

module.exports = {
  rooms,
  pickRoom,
};

const DEBUG = 0;

function test() {
  console.log(pickRoom());
  // let y = exposureDatesSet('Nurse Diesel');

  // console.log('set', [...y]);
  // y.forEach((date) => console.log('date:', date));
}
DEBUG && test();
