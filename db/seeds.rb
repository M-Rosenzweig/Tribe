u1 = User.create(name:'Moish', email:"therosenvibe@gmail.com", password_digest:"", energy:4)

t1 = STribe.create(name:"Soul", code:rand(10000000..100000000000))

Bond.create(user:u1, s_tribe:t1)

Message.create(text:"Did you guys read The Choice by edith Eger?", user:u1, s_tribe:t1)

Priority.create(text:"Rock MVP for Phase 5 project", user:u1)

Worry.create(text:"Css grid and Flexbox... dont want to screw up front end vibes..", user:u1)


