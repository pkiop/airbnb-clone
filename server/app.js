
const express = require('express');
const app = express();
const port = 3000;

// const { connect: dbConnect } = require('./models');
// // const { listRooms } = require('./service/room');

// dbConnect();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
})

const roomList = [
  {
    title: '방 1',
    price: 30000,
    link: 'https://scontent-gmp1-1.xx.fbcdn.net/v/t1.18169-9/10246545_452600371552532_2030013510059385240_n.png?_nc_cat=100&ccb=1-3&_nc_sid=9267fe&_nc_eui2=AeFm5lx7peb83vzKB80_s1UDYSD-qYAqJzBhIP6pgConMFVXyZoQ6L1N9P-Oki5fQfISe5ClXZZzOob3lR78YsD-&_nc_ohc=K__bfkcA03oAX_5u5Fn&_nc_ht=scontent-gmp1-1.xx&oh=02649bb4337a8e14c6e65bb90b33a86b&oe=60B0BEF2',
  },
  {
    title: '방 2',
    price: 40000,
    link: 'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/jeju/overview/introduction/g-0807.jpg.thumb.768.768.jpg',
  },
  {
    title: '방 3',
    price: 50000,
    link: 'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/jeju/overview/introduction/g-0808.jpg.thumb.768.768.jpg',
  }
]

// 클라이언트
// req : 
// res : 
app.get('/test', (req, res) => {
  console.log("req : ", req.query);
  const data = [
    {
      roomName: 'A',
      maxPerson: 4,
    },
    {
      roomName: 'B',
      maxPerson: 5,
    },
    {
      roomName: 'C',
      maxPerson: 6,
    },
    {
      roomName: 'D',
      maxPerson: 7,
    },
  ]

  const locationList = ['서울', '인천', '경기도', '부산'];

  const personNumber = Number(req.query.personNumber);
  const filteredData = data.filter((el) => {
    return el.maxPerson >= personNumber;
  })
  res.render('test.ejs', {data: filteredData, locationList});
});

// app.get('/search', async (req, res) => {
//   const response = await listRooms();
//   console.log("res : ", response);
//   res.render('search.ejs', {result: 'result12345', roomList: roomList});
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
