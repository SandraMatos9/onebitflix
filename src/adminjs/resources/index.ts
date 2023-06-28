import { ResourceWithOptions } from "adminjs";
import { Category } from "../../../models/Category";
import { categoryResourceOptions } from "./category";
import { Course } from "../../../models";
import { courseResourceOptions } from "./course";

export const adminJsResources: ResourceWithOptions [] = [
    {
        resource: Category,
        options: categoryResourceOptions
    },
    {
        resource: Course,
        options: courseResourceOptions
    }
]