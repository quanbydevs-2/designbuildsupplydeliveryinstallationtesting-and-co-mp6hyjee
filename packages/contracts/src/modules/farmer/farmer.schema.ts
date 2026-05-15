import { z } from "zod"

export const farmerSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  middleName: z.string().optional(),
  contactNumber: z.string(),
  barangay: z.string(),
  farmArea: z.number(),
  registrationDate: z.date(),
  status: z.string(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Farmer = z.infer<typeof farmerSchema>