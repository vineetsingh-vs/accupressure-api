import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/login.schema';
import {DecryptionService} from "./services/decryption.service";


const modules = [
	MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
	MongooseModule.forRoot('mongodb+srv://vinsi:hello123@cluster0.pz59r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
];

@Module({
	imports: [...modules],
	controllers: [],
	providers: [DecryptionService],
	exports: [...modules, DecryptionService]
})
export class CoreModule {
}
