import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { FarmerModule } from "./modules/farmer/farmer.module"
import { CropModule } from "./modules/crop/crop.module"
import { LivestockModule } from "./modules/livestock/livestock.module"
import { ProgramModule } from "./modules/program/program.module"
import { LandParcelModule } from "./modules/landparcel/landparcel.module"

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FarmerModule, CropModule, LivestockModule, ProgramModule, LandParcelModule,
  ],
})
export class AppModule {}