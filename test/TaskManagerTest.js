const { describe, it } = require('mocha');
const {assert} = require('chai');
const TaskManager = require('../js/TaskManager').TaskManager;


describe('Task Manager', () => {
    describe('Addtask', () =>{
        it('', () => {
         //setup
         //const task = new TaskManager();
         //exercise
         //Verify
        })
    }) 
    describe('getTaskById', () =>{
        it('', () => {
        //setup
        const task = new TaskManager();
        const inputId = 1;
        const expectedResult = 1;
        const res = task.addTask('name', 'description', 'assignedTo', 'dueDate');
        console.log(res);
         //exercise
         const result = task.getTaskById(inputId);
         //Verify
         assert.equal(expectedResult, result);
        })
    })
    
    describe('deleteTask', () =>{
        it('', () => {
         //setup
         //const task = new TaskManager();
         //exercise
         //Verify
        })
    }) 
})
