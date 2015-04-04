if(Meteor.isClient) {

    Template.myForm.events({
        "submit form" : function(e, template) {
            event.preventDefault();
            data = SimpleForm.processForm(e.target);
            console.log(data);
            Test.insert(data);
            e.target.reset();
        }
    });

    Template.myForm.helpers({
       tests : function() {
           return Test.find();
       }
    });

    Meteor.subscribe('testCollection');
}

Test = new Mongo.Collection('testCollection');
