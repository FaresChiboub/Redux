import { add, edit, remove } from "./const"

export const Addtask=(desc,isdone)=>{
    return {type:add ,payload:{description:desc ,isDone:isdone } }
}
export const DeleteTask=(id)=>{
    return{type:remove , payload:id}
}
export const EditTask = (id, newDescription) => {
    return { type: edit, payload: { id: id, newDescription: newDescription } };
};
