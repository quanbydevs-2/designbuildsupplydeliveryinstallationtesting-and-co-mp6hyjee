import { z } from "zod"

export const livestockSchema = z.object({
  id: z.number(),
  farmerId: z.number(),
  species: z.string(),
  breed: z.string().optional(),
  quantity: z.number(),
  acquisitionDate: z.date(),
  healthStatus: z.string(),
  vaccinationStatus: z.string(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Livestock = z.infer<typeof livestockSchema>