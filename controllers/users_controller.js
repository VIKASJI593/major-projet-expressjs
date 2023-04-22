module.exports.profile = function(req, res){
    //----step1---- export user_profile.ejs------
    return res.render('user_profile', {
        title: 'User Profile'
    })
}