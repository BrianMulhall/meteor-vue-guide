// Shared Settings
Accounts.emailTemplates.siteName = "Susco Proof of Concept";
Accounts.emailTemplates.from = "brian.e.mulhall@gmail.com";


// Email Verification Template
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


// Password Reset Template
Accounts.emailTemplates.resetPassword.subject = function(user){
  return 'Password Reset';
};

Accounts.emailTemplates.resetPassword.text = function(user,url){
  return "Password Reset has been requested for your account!\n" +
          "To reset your password please follow the link below:\n\n" + 
          url;
}; 

Accounts.emailTemplates.resetPassword.html = function(user,url){
  return "<h1>Password Reset has been requested for your account!</h1>" +
          "<p>To reset your password please follow the link below:</p>" + 
          url;
}; 

