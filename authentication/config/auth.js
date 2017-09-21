module.exports = {

    'facebookAuth' : {
        'clientID'        : '117543608922835',
        'clientSecret'    : '14d27ae209018240c2594eef36710182', 
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'googleAuth' : {
        'clientID'      : '236928272561-vr9i789gh9jo7r4ac65200pr26oedqjf.apps.googleusercontent.com',
        'clientSecret'  : '4Jv4wyqpQryZGVH9VwfTIMrN',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
