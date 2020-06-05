const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const MongoClient = require('mongodb').MongoClient;
const service = require('feathers-mongodb');

// Create an Express compatible Feathers application instance.
const app = express(feathers());
// Turn on JSON parser for REST services
app.use(express.json());
// Turn on URL-encoded parser for REST services
app.use(express.urlencoded({extended: true}));
// Enable REST services
app.configure(express.rest());
// Enable Socket.io
app.configure(socketio());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Connect to the db, create and register a Feathers service.
app.use('/experiences', service({}));

app.use('/projects', service({}));

app.use('/educations', service({}));

app.use('/technicalskills', service({}));

app.use('/socialprofiles', service({}));

app.use('/introduction', service({}));

app.use('/achievements', service({}));

// A basic error handler, just like Express
app.use(express.errorHandler());

// Connect to your MongoDB instance(s)
MongoClient.connect('mongodb://localhost:27017/db1', {useUnifiedTopology: true})
  .then(function(client){
    // Set the model now that we are connected
    app.service('experiences').Model = client.db('db1').collection('experiences');
    app.service('projects').Model = client.db('db1').collection('projects');
    app.service('educations').Model = client.db('db1').collection('educations');
    app.service('technicalskills').Model = client.db('db1').collection('technicalskills');
    app.service('socialprofiles').Model = client.db('db1').collection('socialprofiles');
    app.service('introduction').Model = client.db('db1').collection('introduction');
    app.service('achievements').Model = client.db('db1').collection('achievements');
    
    // app.service('experiences').create({
    //   companyName: 'North Eastern Space Applications Centre',
    //   jobRole: 'Software internship',
    //   startDate: '15/5/2018',
    //   endDate: '15/7/2018',
    //   currentlyWorking: false,
    //   workDone: ['Worked on the development of intercaliberation algorithm'],
    //   techStack: ['ArcGis', 'R']
    // }).catch(error => console.error(error));
    
    // app.service('projects').create({
    //   projectTitle: 'Cross Lingual Document Translator',
    //   projectLink: 'github.com/rachitagrawal20/',
    //   description: 'STM translation of Dutch sentences to English',
    //   startDate: '4/5/2019',
    //   endDate: '4/6/2019',
    //   currentlyWorking: false,
    //   contributions: ['Implemented IBM model 1', 'Implemented ensemble learning to increase the accuracy'],
    //   techStack: ['Python']
    // })
    
    // app.service('projects').create({
    //   projectTitle: 'Compiler construction',
    //   projectLink: 'github.com/rachitagrawal20/compiler',
    //   description: 'Contructing compiler for a hypothetical language',
    //   startDate: '4/5/2019',
    //   endDate: '4/10/2019',
    //   currentlyWorking: false,
    //   contributions: ['Implemented syntax analyzer', 'Implemented code generator which generated machine level code'],
    //   techStack: ['C', 'NASM']
    // })
    
    // app.service('educations').create({
    //   instituteName: 'BITS Pilani, Pilani campus',
    //   coureTaken: 'B.E. Computer Science and M.Sc. Chemistry',
    //   startDate: '1/8/2016',
    //   endDate: '',
    //   currentlyStudying: true,
    //   grade: 7.74
    // })
    
    // app.service('technicalskills').create({
    //   skillName: 'C++',
    //   proficiency: 'Advanced'
    // })
    
    // app.service('technicalskills').create({
    //   skillName: 'Python',
    //   proficiency: 'Intermediate'
    // })
    
    // app.service('technicalskills').create({
    //   skillName: 'React',
    //   proficiency: 'Beginner'
    // })
    
    // app.service('introduction').create({
    //   candidateName: 'Rachit Agrawal',
    //   description: 'Open for new opportunities to learn'
    // })
    
    // app.service('achievements').create({
    //   achievement: 'Won nation-wide hackathon organized by IIIT Hyderabad'
    // })
    
    // app.service('achievements').create({
    //   achievement: 'Incubated an app idea under Pilani Entrepreneur Society'
    // })

    // app.service('socialprofiles').create({
    //   siteName: 'Github',
    //   profileLink: 'github.com/rachitagrawal20'
    // })

    // app.service('socialprofiles').create({
    //   siteName: 'LinkedIn',
    //   profileLink: 'LinkedIn.com/rachitagr'
    // })

  }).catch(error => console.error(error));

// Start the server.
const port = 3030;
app.listen(port, () => {
  console.log(`Feathers server listening on port ${port}`);
});
