import Task from "../models/Task";

export const findAllTasks = async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks);
}

export const createTask = async (req, res) => {
    const newtask = new Task({ title: req.body.title, description: req.body.description });
    const taskSaved = await newtask.save();


    // console.log(newtask);
    res.json(taskSaved);

}