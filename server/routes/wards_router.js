var express = require('express'),
    event = require('events').EventEmitter;
    
var routes = function(){
    var usersRouter = express.Router(),
        EventEmitter = new event();

    wardsRouter.route('/')
        .get(function(req, res){  
            
        });   

    wardsRouter.route('/:id')
        .get(function(req, res){
            
        }); 


    wardsRouter.route('/school/:school_id/')
        .get(function(req, res){
             
        }); 
    
     /**
     * Update a user
     *
    */
    wardsRouter.route('/:id')
        .put(function(req, res){
            

        });
    /**
     * Register a user
     *
    */
    wardsRouter.route('/')
        .post(function(req, res){
           
                     
        });
    
    /**
     * Delete a user
     *
    */
    wardsRouter.route('/:id')
        .delete(function(req, res){
            
        })
        
    return {router: wardsRouter, event: EventEmitter};
};

module.exports = routes;