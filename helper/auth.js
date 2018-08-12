module.exports ={

    ensureAuthenticated: function(req,res,next){

        if(req.isAuthenticated()){
            return next();
        }
            req.flash('error_msg','You need to login first !!!')
            res.redirect('/');
    }
,
    ensureGuest: function(req,res,next){
        if(req.isAuthenticated()){
            res.redirect('/dashboard');
        }else{
            return next();
        }
    }
} 