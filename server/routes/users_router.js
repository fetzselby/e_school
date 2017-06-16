var express = require('express'),
    event = require('events').EventEmitter;
    
var routes = function(){
    var usersRouter = express.Router(),
        EventEmitter = new event();

    usersRouter.route('/')
        .get(function(req, res){  
            
        });   

    usersRouter.route('/:id')
        .get(function(req, res){
            
        }); 

    usersRouter.route('/email/:email')
        .get(function(req, res){
           
        }); 

    usersRouter.route('/msisdn/:msisdn')
        .get(function(req, res){
             
        }); 
    
     /**
     * Update a user
     *
    */
    usersRouter.route('/:id')
        .put(function(req, res){
            

        });
    /**
     * Register a user
     *
    */
    usersRouter.route('/')
        .post(function(req, res){
           
                     
        });
    
    /**
     * Delete a user
     *
    */
    usersRouter.route('/:id')
        .delete(function(req, res){
            
        })
    return {router: usersRouter, event: EventEmitter};
};

module.exports = routes;