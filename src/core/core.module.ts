import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/login.schema';


const modules = [
	MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
	MongooseModule.forRoot('mongodb+srv://vinsi:hello123@cluster0.pz59r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
];

@Module({
	imports: [...modules],
	controllers: [],
	providers: [],
	exports: [...modules]
})
export class CoreModule {
}
