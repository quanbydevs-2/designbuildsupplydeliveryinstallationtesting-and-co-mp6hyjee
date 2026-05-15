import { z } from "zod"

export const cropSchema = z.object({
  id: z.number(),
  cropType: z.string(),
  variety: z.string(),
  farmerId: z.number(),
  plantingDate: z.date(),
  harvestDate: z.date().optional(),
  plantedArea: z.number(),
  expectedYield: z.number().optional(),
  actualYield: z.number().optional(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Crop = z.infer<typeof cropSchema>