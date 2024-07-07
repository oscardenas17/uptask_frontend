/** Projects */

import { z } from "zod";

export const projectSchema = z.object({
  _id: z.string(),
  projectName: z.string(),
  clientName: z.string(),
  description: z.string(),
});

//Esquema para APi en lista de proyectos, se busca sea un  []
export const dashboardProjectSchema = z.array(
  projectSchema.pick({
    _id: true,
    projectName: true,
    clientName: true,
    description: true,
  })
);

export type Project = z.infer<typeof projectSchema>;
export type ProjectFormData = Pick<
  Project,
  "clientName" | "description" | "projectName"
>;
