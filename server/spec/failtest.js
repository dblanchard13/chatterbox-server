// it('Should respond with messages that were previously posted', function() {
//     var stubMsg = {
//       username: 'Jono',
//       message: 'Do my bidding!'
//     };
//     var req = new stubs.request('/classes/room1', 'POST', stubMsg);
//     var res = new stubs.response();

//     handler.requestHandler(req, res);

//     expect(res._responseCode).to.equal(201);

//     // Now if we request the log for that room the message we posted should be there:
//     req = new stubs.request('/classes/room1', 'GET');
//     res = new stubs.response();

//     handler.requestHandler(req, res);

//     expect(res._responseCode).to.equal(200);
//     var messages = JSON.parse(res._data).results;
//     expect(messages.length).to.be.above(0);
//     expect(messages[0].username).to.equal('Jono');
//     expect(messages[0].message).to.equal('Do my bidding!');
//     expect(res._ended).to.equal(true);
//   });


//   it('should respond with messages that were previously posted', function(done) {
//     var requestParams = {method: 'POST',
//       uri: 'http://127.0.0.1:3000/classes/messages',
//       json: {
//         username: 'Jono',
//         message: 'Do my bidding!'}
//     };

//     request(requestParams, function(error, response, body) {
//       // Now if we request the log, that message we posted should be there:
//       request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
//           var messages = JSON.parse(body).results;
//           expect(messages[0].username).to.equal('Jono');
//           expect(messages[0].message).to.equal('Do my bidding!');
//           done();
//         });
//     });
//   });