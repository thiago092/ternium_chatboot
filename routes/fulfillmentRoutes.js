const {WebhookClient} = require('dialogflow-fulfillment');

const mongoose = require('mongoose');

const Coupon = mongoose.model('coupon');



module.exports = app => {
  
  
    app.post('/', async (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });
        var number =100;
       
        
        async function snoopy(agent) {

          

            let coupon = await Coupon.findOne({'courses': agent.parameters.course});
            console.log(coupon);
            console.log(agent.parameters.course);
          
          
            responseText = `You want to learn about ${agent.parameters.course}. 
            Here is a link to the course: ${coupon.courses}`;
            

            agent.add(responseText);

           
            
            
        }
       
       

        let intentMap = new Map();
        
        intentMap.set('snoopy', snoopy);

        agent.handleRequest(intentMap);
    });

} 