Accounts.emailTemplates.siteName = "Susco Proof of Concept";
Accounts.emailTemplates.from = "brian.e.mulhall@gmail.com";

Accounts.emailTemplates.verifyEmail.subject = function(user){
  return 'Confirm Your Email Address, ' + user.username;
};

Accounts.emailTemplates.verifyEmail.text = function(user,url){
  return "Welcome to the Susco Meteor Proof of Concept!\n" +
          "To verify your email address go ahead and follow the link below:\n\n" + 
          url;
}; 

Accounts.emailTemplates.verifyEmail.html = function(user,url){
  return "<h1>Welcome to the Susco Meteor Proof of Concept!</h1>" +
          "<p>To verify your email address go ahead and follow the link below:</p>" + 
          url;
}; 
