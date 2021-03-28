import Task from "../models/Task";
import { getPagination } from "../libs/getPagination";
import { get } from "mongoose";

export const findAllTasks = async (req, res) => {
    try {

        const { size, page, title } = req.query

        const condition = title ? {
            title: { $regex: new RegExp(title), $options: "i" },
        } : {};

        const { limit, offset } = getPagination(page, size);

        const data = await Task.paginate(condition, { offset, limit })
       
      //  res.json( data);

        res.json( {
            totalItems:data.totalDocs,
            tasks: data.docs,
            totalPages:data.totalPages,
            currentPage:data.page - 1

        });


    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something went wrong while we fetch tasks'
        })
    }
}

export const createTask = async (req, res) => {

    if (!req.body.title) {
        return res.status(400).send({ message: 'Content cant be empty' })
    }
    try {
        const newtask = new Task({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false
        });
        const taskSaved = await newtask.save();
        // console.log(newtask);
        res.json(taskSaved);

    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something went wrong while we create tasks'
        })
    }

}

export const findOnetask = async (req, res) => {
    const { id } = req.params;
    try {


        //console.log(req.params.id);
        const task = await Task.findById(id);

        if (!task) return res.status(400).json({ message: `Task with id  ${id} does not exits` })
        res.json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message || `Something went wrong while we find the tasks ${id}`
        })
    }
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id, {
            useFindAndModify: false
        });

        res.json({
            message: 'task deleted succesfull'

        });

    } catch (error) {

        res.status(500).json({
            message: error.message || `Something went wrong while we try to delete the tasks ${id}`
        })
    }
};

export const findAllDOneTask = async (req, res) => {

    try {
        const tasks = await Task.find({ done: true });

        res.json(tasks);

    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something went wrong while we try to  find the tasks done '
        })
    }
};

export const updateTask = async (req, res) => {

    try {
        const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
            useFindAndModify: false
        });
        res.json({
            message: "Task was update succesfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something went wrong while we try to  update the tasks '
        })
    }
};