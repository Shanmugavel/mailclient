if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}
var mailgun = require('mailgun-js')({apiKey: process.env.apiKey, domain: process.env.domain});

var data = {
    from: 'Shanmugavel Sundaramoorthy <shan@shanmugavel.xyz>',
    to: 'shanmugavel.rs@gmail.com',
    subject: 'Hi!!',
    html: `My 1st html email!!. <br />
           Please visit my site<a href="https://www.shanmugavel.xyz">shanmugavel.xyz</a>
           <br/><br/> 
           Thanks,<br/>
           Shan`
  };
   
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
